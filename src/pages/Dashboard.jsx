import React from "react";
import {
  Plus,
  Search,
  Bell,
  Clock,
  Zap,
  TrendingUp,
  Calendar,
  Coffee,
  Moon,
  Sun,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12)
      return {
        text: "Good morning",
        icon: <Coffee className="text-orange-500" size={20} />,
      };
    if (hour < 18)
      return {
        text: "Good afternoon",
        icon: <Sun className="text-amber-500" size={20} />,
      };
    return {
      text: "Good evening",
      icon: <Moon className="text-indigo-400" size={20} />,
    };
  };

  const greeting = getGreeting();

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-72 min-h-screen overflow-y-auto px-6 lg:px-10 pb-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {greeting.icon}
              <span className="text-slate-500 font-bold text-sm uppercase tracking-wider">
                {greeting.text}, Alex
              </span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Dashboard Overview
            </h1>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:flex-none">
              <Search
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search..."
                className="bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all w-full md:w-56"
              />
            </div>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all relative">
              <Bell size={18} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Clock size={18} className="text-indigo-600" />}
            label="Deep Work"
            value="5.8h"
            trend="+12%"
          />
          <StatCard
            icon={<TrendingUp size={18} className="text-emerald-600" />}
            label="Efficiency"
            value="94.2%"
            trend="+2.4%"
          />
          <StatCard
            icon={<Zap size={18} className="text-amber-600" />}
            label="Day Streak"
            value="12"
            trend="Active"
          />
        </div>

        <section className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Consistency Map
              </h2>
              <p className="text-slate-400 text-xs mt-0.5 font-medium">
                Tracking your intensity over the last 30 days
              </p>
            </div>
            <div className="flex items-center gap-2 text-[9px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Less</span>
              <div className="flex gap-1">
                {[10, 30, 60, 100].map((op) => (
                  <div
                    key={op}
                    className={`w-3 h-3 rounded-[3px] bg-indigo-600 opacity-${op}`}
                  ></div>
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-2 custom-scrollbar">
            {[...Array(30)].map((_, col) => (
              <div key={col} className="flex flex-col gap-1.5 flex-shrink-0">
                {[...Array(7)].map((_, row) => (
                  <div
                    key={row}
                    className="w-3.5 h-3.5 rounded-[3px] bg-indigo-600 opacity-10 hover:scale-110 hover:opacity-100 transition-all cursor-pointer"
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 px-1">
              Latest Activities
            </h3>
            <div className="grid gap-3">
              <ActivityRow
                title="Database Migration"
                category="Engineering"
                time="2h 15m"
                type="work"
              />
              <ActivityRow
                title="Weekly Sync"
                category="Team"
                time="45m"
                type="meeting"
              />
              <ActivityRow
                title="Client Presentation"
                category="Design"
                time="1h 20m"
                type="meeting"
              />
            </div>
          </div>

          <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 tracking-tight">
                Ready to dash?
              </h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed font-medium">
                Log your session to keep your streak alive.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-indigo-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all active:scale-95">
                  <Plus size={18} /> New Activity
                </button>
                <button className="w-full bg-white/5 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/5 active:scale-95 text-slate-300">
                  <Calendar size={16} /> Schedule
                </button>
              </div>
            </div>
            <Zap className="absolute -right-6 -bottom-6 w-32 h-32 text-white opacity-[0.03]" />
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ icon, label, value, trend }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>
      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
        {trend}
      </span>
    </div>
    <p className="text-slate-400 text-[11px] font-bold uppercase tracking-wider">
      {label}
    </p>
    <h4 className="text-2xl font-black text-slate-900 mt-1 tracking-tight">
      {value}
    </h4>
  </div>
);

const ActivityRow = ({ title, category, time, type }) => (
  <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-indigo-100 hover:shadow-sm transition-all group cursor-pointer">
    <div className="flex items-center gap-4">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
          type === "work"
            ? "bg-indigo-50 text-indigo-600"
            : "bg-amber-50 text-amber-600"
        }`}
      >
        {type === "work" ? <Zap size={18} /> : <Clock size={18} />}
      </div>
      <div>
        <h5 className="font-bold text-slate-900 text-[15px]">{title}</h5>
        <span className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">
          {category}
        </span>
      </div>
    </div>
    <div className="text-right">
      <p className="font-bold text-slate-900 text-sm">{time}</p>
      <span className="text-[11px] text-indigo-600 font-bold">Details</span>
    </div>
  </div>
);

export default Dashboard;