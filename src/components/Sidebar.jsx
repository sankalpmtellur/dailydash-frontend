import React from "react";
import {
  LayoutDashboard,
  History,
  BarChart3,
  Target,
  Settings,
  LogOut,
  Zap,
  ChevronRight,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="fixed top-0 left-0 h-screen w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col z-50">
      <div className="p-8 flex items-center gap-3">
        <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
          <Zap className="text-white w-5 h-5 fill-current" />
        </div>
        <span className="text-2xl font-bold tracking-tight text-slate-900">
          DailyDash
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        <SidebarLink
          icon={<LayoutDashboard size={22} />}
          label="Dashboard"
          active={isActive("/dashboard")}
          onClick={() => navigate("/dashboard")}
        />
        <SidebarLink
          icon={<History size={22} />}
          label="Activity Log"
          active={isActive("/logs")}
          onClick={() => navigate("/logs")}
        />
        <SidebarLink
          icon={<BarChart3 size={22} />}
          label="Analytics"
          active={isActive("/analytics")}
          onClick={() => navigate("/analytics")}
        />
        <SidebarLink
          icon={<Target size={22} />}
          label="Goals"
          active={isActive("/goals")}
          onClick={() => navigate("/goals")}
        />
        <SidebarLink
          icon={<Settings size={22} />}
          label="Settings"
          active={isActive("/settings")}
          onClick={() => navigate("/settings")}
        />
      </nav>

      <div className="p-6 mt-auto border-t border-slate-100">
        <button
          onClick={() => navigate("/profile")}
          className="w-full bg-slate-50 rounded-2xl p-4 flex items-center gap-3 mb-4 hover:bg-indigo-50 hover:ring-1 hover:ring-indigo-100 transition-all group text-left"
        >
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 group-hover:bg-white transition-colors">
            AD
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-bold text-slate-900 truncate">
              Alex Dash
            </p>
            <p className="text-xs text-slate-500 font-medium">Free Plan</p>
          </div>
          <ChevronRight
            size={14}
            className="text-slate-300 group-hover:text-indigo-400"
          />
        </button>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all font-bold text-sm"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
};

const SidebarLink = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all duration-300 group ${
      active
        ? "bg-indigo-600 text-white shadow-xl shadow-indigo-100"
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    }`}
  >
    <div className="flex items-center gap-4">
      <span
        className={`${
          active ? "text-white" : "text-slate-400 group-hover:text-indigo-600"
        }`}
      >
        {icon}
      </span>
      <span className="font-bold text-[16px]">{label}</span>
    </div>
    {active && <ChevronRight size={18} className="opacity-50" />}
  </button>
);

export default Sidebar;
