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
  Lock,
  ArrowRight,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const DemoSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const handleRestrictedClick = (pageName) => {
    toast.custom(
      (t) => (
        <div className="relative flex justify-center items-center">
          {/* 1. FULL SCREEN BACKDROP: Closes the toast when clicking anywhere else */}
          <div 
            className="fixed inset-0 z-[-1] bg-transparent cursor-default" 
            onClick={() => toast.dismiss(t.id)}
          />

          {/* 2. THE NOTIFICATION CARD */}
          <div
            className={`${
              t.visible
                ? "animate-in fade-in slide-in-from-top-4 scale-95"
                : "animate-out fade-out slide-out-to-right-4 scale-90"
            } max-w-sm w-full bg-white/95 backdrop-blur-md border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[24px] pointer-events-auto overflow-hidden transition-all duration-300`}
          >
            <div className="p-5">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-200">
                  <Lock size={20} strokeWidth={2.5} />
                </div>

                <div className="flex-1">
                  <h3 className="text-[15px] font-black text-slate-900 tracking-tight">
                    {pageName} is Locked
                  </h3>
                  <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-0.5">Demo Mode</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-500 font-medium leading-relaxed">
                Please sign up to unlock detailed tracking and performance
                insights.
              </p>

              <div className="mt-5 flex items-center gap-2">
                <button
                  onClick={() => {
                    toast.dismiss(t.id);
                    navigate("/signup");
                  }}
                  className="flex-[2] bg-indigo-600 text-white text-[13px] font-bold py-2.5 rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-100 active:scale-95"
                >
                  Get Full Access <ArrowRight size={14} />
                </button>
                
                {/* IMPROVED CLOSE BUTTON: More clickable and visible */}
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="flex-1 py-2.5 text-[13px] font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all active:scale-95 border border-transparent hover:border-slate-200"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="h-1 w-full bg-slate-50">
              <div className="h-full bg-indigo-600 opacity-20 animate-progress origin-left"></div>
            </div>
          </div>
        </div>
      ),
      { position: "top-right", duration: 5000 }
    );
  };

  return (
    <>
      <Toaster
        containerStyle={{ top: 40, right: 40 }}
        toastOptions={{
          style: {
            background: "transparent",
            boxShadow: "none",
            border: "none",
          },
        }}
      />

      <aside className="fixed top-0 left-0 h-screen w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col z-50">
        <div className="p-8 flex items-center gap-3">
          <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
            <Zap className="text-white w-5 h-5 fill-current" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            DailyDash
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-2">
          <SidebarLink
            icon={<LayoutDashboard size={22} />}
            label="Dashboard"
            active={isActive("/demo")}
            onClick={() => navigate("/demo")}
          />
          <SidebarLink
            icon={<History size={22} />}
            label="Activity Log"
            active={false}
            onClick={() => handleRestrictedClick("Activity Log")}
          />
          <SidebarLink
            icon={<BarChart3 size={22} />}
            label="Analytics"
            active={false}
            onClick={() => handleRestrictedClick("Analytics")}
          />
          <SidebarLink
            icon={<Target size={22} />}
            label="Goals"
            active={false}
            onClick={() => handleRestrictedClick("Goals")}
          />
          <SidebarLink
            icon={<Settings size={22} />}
            label="Settings"
            active={false}
            onClick={() => handleRestrictedClick("Settings")}
          />
        </nav>

        <div className="p-6 mt-auto border-t border-slate-100">
          <button
            onClick={() => handleRestrictedClick("Profile")}
            className="w-full bg-slate-50 rounded-2xl p-4 flex items-center gap-3 mb-4 hover:bg-slate-100 transition-all group text-left"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">
              AD
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-slate-900 truncate">
                Alex Dash (Demo)
              </p>
              <p className="text-xs text-slate-500 font-medium">Free Plan</p>
            </div>
            <ChevronRight size={14} className="text-slate-300" />
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 w-full px-4 py-3 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all font-bold text-sm"
          >
            <LogOut size={18} /> Exit Demo
          </button>
        </div>
      </aside>
    </>
  );
};

const SidebarLink = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 group ${
      active
        ? "bg-indigo-600 text-white shadow-xl shadow-indigo-100/50"
        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
    }`}
  >
    <div className="flex items-center gap-4">
      <span
        className={`${
          active ? "text-white" : "text-slate-400 group-hover:text-indigo-600"
        } transition-colors`}
      >
        {icon}
      </span>
      <span className="font-bold text-[15px]">{label}</span>
    </div>
    {active && <ChevronRight size={16} className="text-indigo-200" />}
  </button>
);

export default DemoSidebar;