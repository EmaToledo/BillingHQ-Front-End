import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/ui/sidebar/sidebar";
import DashboardPage from "./components/pages/dashboardPage/dashboardPage";
import BranchPage from "./components/pages/branchPage/branchPage";
import AssociatePage from "./components/pages/associatePage/associatePage";
import RYEPage from "./components/pages/ryePage/ryePage";
import PaymentPage from "./components/pages/paymentPage/paymentPage";
import ConceptPage from "./components/pages/conceptPage/conceptPage";
import BillPage from "./components/pages/billPage/billPage";
import LoginPage from "./components/pages/loginPage/loginPage";
import { AuthProvider, useAuth } from "./auth/context/AuthContext";
import { useEffect } from "react";
import { setLogoutFunction } from "./api/axiosConfig";
import ProtectedRoute from "./auth/protectedRoute";

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoadingAuth, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    setLogoutFunction(logout);
  }, [logout]);

  if (isLoadingAuth && location.pathname !== '/auth') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-700 text-lg">Cargando autenticación...</p>
      </div>
    );
  }

  return (
    <div className="flex">
      {isAuthenticated && <Sidebar />}

      <main className="flex-1 text-black min-h-screen">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/auth" replace />} />

          <Route path="/auth" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/branches" element={<BranchPage />} />
            <Route path="/associates" element={<AssociatePage />} />
            <Route path="/ryes" element={<RYEPage />} />
            <Route path="/payments" element={<PaymentPage />} />
            <Route path="/concepts" element={<ConceptPage />} />
            <Route path="/bill-notes" element={<BillPage />} />
          </Route>

          <Route path="*" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/auth" replace />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;