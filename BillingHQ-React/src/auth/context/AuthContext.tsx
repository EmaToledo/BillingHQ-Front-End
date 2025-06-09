// src/context/AuthContext.tsx
import axios from 'axios';
import React, { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import api from '../../api/axiosConfig';

interface UserData {
  id: number;
  email: string;
  name?: string;
  role?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string, userData?: UserData) => void;
  logout: () => void;
  authToken: string | null;
  user: UserData | null;
  isLoadingAuth: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);

  // isAuthenticated ahora solo será true si authToken tiene un valor validado
  const isAuthenticated = !!authToken;

  useEffect(() => {
    const loadAuthData = async () => {
      setIsLoadingAuth(true); // Asegura que el estado de carga es true al inicio

      const storedToken = localStorage.getItem('authToken');
      const storedUser = localStorage.getItem('user');

      if (!storedToken) {
        // Si no hay token, no hay necesidad de hacer llamadas API.
        // isAuthenticated seguirá siendo false.
        setIsLoadingAuth(false);
        return; // Salir de la función
      }

      // IMPORTANTE: NO LLAMAMOS setAuthToken(storedToken) AQUÍ INICIALMENTE.
      // Lo haremos SOLO si la validación es exitosa.
      // Axios ya leerá de localStorage con el interceptor de request.

      try {
        const response = await api.get('/auth/validate-token');

        if (response.status === 200) {
          // SOLO SI LA VALIDACIÓN ES EXITOSA, ESTABLECEMOS EL TOKEN Y EL USUARIO
          setAuthToken(storedToken); // Ahora isAuthenticated se vuelve true
          if (storedUser) {
            try {
              setUser(JSON.parse(storedUser));
            } catch (e) {
              console.error("Error parsing user from localStorage, logging out.", e);
              // Si los datos del usuario están corruptos, invalidamos el token
              localStorage.removeItem('authToken');
              localStorage.removeItem('user');
              setAuthToken(null);
              setUser(null);
            }
          }
        } else {
          // Si el status no es 200 (y no fue un 401/403 capturado por el interceptor),
          // consideramos el token inválido.
          console.warn('Token invalid according to backend validation, logging out. Status:', response.status);
          localStorage.removeItem('authToken');
          localStorage.removeItem('user');
          setAuthToken(null);
          setUser(null);
        }
      } catch (error: unknown) {
        // Este catch se ejecuta si la llamada API falla (ej. red, 401/403)
        // El interceptor de Axios ya debería haber llamado a logoutFunction,
        // lo cual ya limpia el localStorage y el estado.
        // Aquí solo nos aseguramos de que el estado en el contexto sea null si no lo es ya.
        console.error('Error validating token with backend or network error, ensuring logout:', error);
        // Si bien el interceptor ya llama a logout, es seguro asegurarnos aquí.
        if (authToken !== null) { // Solo si authToken no es ya null
          localStorage.removeItem('authToken');
          localStorage.removeItem('user');
          setAuthToken(null);
          setUser(null);
        }

        if (axios.isAxiosError(error) && error.response === undefined && error.request) {
          console.error('Network error, API might be down. Logging out.');
        }
      } finally {
        setIsLoadingAuth(false); // Siempre termina el estado de carga
      }
    };

    loadAuthData();
  }, []); // El array de dependencias vacío asegura que se ejecuta una sola vez al montar

  const login = (token: string, userData?: UserData) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
    if (userData) {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, authToken, user, isLoadingAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};