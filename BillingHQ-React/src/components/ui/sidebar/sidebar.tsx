import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Users,
  Building2,
  Globe,
  FileText,
  CreditCard,
  Receipt,
  LogOut,
} from "lucide-react"; // Importa el icono de LogOut
import { useAuth } from "../../../auth/context/AuthContext";

interface MenuItem {
  title: string;
  icon: React.ElementType;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Reportes Gerenciales",
    icon: BarChart3,
    href: "/dashboard",
  },
  {
    title: "Clubes",
    icon: Building2,
    href: "/branches",
  },
  {
    title: "Socios",
    icon: Users,
    href: "/associates",
  },
  {
    title: "RYE",
    icon: Globe,
    href: "/ryes",
  },
  {
    title: "Pagos",
    icon: CreditCard,
    href: "/payments",
  },
  {
    title: "Conceptos",
    icon: FileText,
    href: "/concepts",
  },
  {
    title: "Notas de cobro",
    icon: Receipt,
    href: "/bill-notes",
  },
];

function Sidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <aside className="w-64 bg-gray-300/25 text-black h-screen p-4 flex flex-col border-r border-gray-300">
      <div className="flex items-center gap-2 mb-8">
        <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
          <span className="text-lg font-bold">B0</span>
        </div>
        <span className="text-lg font-semibold">Back Office</span>
      </div>

      <nav className="flex-1">
        <ul>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <li key={item.href} className="mb-1">
                <Link
                  to={item.href}
                  className={`
                    flex items-center gap-3 p-2 rounded-md transition-colors
                    ${
                      isActive
                        ? "bg-[#46A2E3]/70 text-white"
                        : "hover:bg-[#46A2E3]/15"
                    }
                  `}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-4 mb-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-2 rounded-md transition-colors text-left hover:bg-red-500/15 text-red-600"
        >
          <LogOut className="h-5 w-5" />
          <span>Cerrar Sesión</span>
        </button>
      </div>

      <div className="p-4 border-t border-gray-300 text-xs text-gray-600">
        Back Office - Demo v0.1
      </div>
    </aside>
  );
}

export default Sidebar;
