import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Search,
  Bell,
  Clock,
  Zap,
  TrendingUp,
  Sparkles,
  X,
  Sun,
  Coffee,
} from "lucide-react";
import DemoSidebar from "../../components/Demo/DemoSidebar";

const Demo = () => {
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState(true);
  const [mockActivities, setMockActivities] = useState([
    {
      id: 1,
      title: "UI Design System",
      category: "Engineering",
      time: "3h 45m",
      type: "work",
    },
    {
      id: 2,
      title: "Product Strategy",
      category: "Management",
      time: "1h 20m",
      type: "meeting",
    },
    {
      id: 3,
      title: "React Performance Audit",
      category: "Engineering",
      time: "2h 10m",
      type: "work",
    },
  ]);

  const addDemoTask = () => {
    const newTask = {
      id: Date.now(),
      title: "New Demo Activity",
      category: "Preview",
      time: "1h 00m",
      type: "work",
    };
    setMockActivities([newTask, ...mockActivities]);
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      <DemoSidebar />

      {showBanner && (
        <div className="fixed bottom-6 left-1/2 lg:left-[calc(50%+144px)] -translate-x-1/2 z-[100] w-[90%] max-w-xl">
          <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-lg shrink-0">
                <Sparkles size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold">Demo Mode Active</p>
                <p className="text-[10px] text-slate-400 font-medium">
                  Data will reset when you leave.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => navigate("/signup")}
                className="bg-white text-slate-900 px-3 py-2 rounded-xl text-[11px] font-bold hover:bg-indigo-50 transition-all whitespace-nowrap"
              >
                Sign Up Free
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 lg:ml-72 min-h-screen overflow-y-auto px-6 lg:px-10 pb-10">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sun className="text-amber-500" size={18} />
              <span className="text-slate-500 font-bold text-xs uppercase tracking-wider italic">
                Demo Preview
              </span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
              Dashboard Overview
            </h1>
          </div>

          <div className="flex items-center gap-3">
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
            value="6.2h"
            trend="+14%"
          />
          <StatCard
            icon={<TrendingUp size={18} className="text-emerald-600" />}
            label="Efficiency"
            value="96.5%"
            trend="+3%"
          />
          <StatCard
            icon={<Zap size={18} className="text-amber-600" />}
            label="Day Streak"
            value="15"
            trend="Elite"
          />
        </div>

        <section className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900">Your Activity</h2>
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
          <div className="flex gap-1.5 overflow-x-auto pb-2">
            {[...Array(30)].map((_, col) => (
              <div key={col} className="flex flex-col gap-1.5 flex-shrink-0">
                {[...Array(7)].map((_, row) => {
                  const activeOp = col > 15 ? "opacity-70" : "opacity-20";
                  return (
                    <div
                      key={row}
                      className={`w-3.5 h-3.5 rounded-[3px] bg-indigo-600 ${activeOp}`}
                    ></div>
                  );
                })}
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
              {mockActivities.map((act) => (
                <ActivityRow key={act.id} {...act} />
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Ready to Dash?</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                Try adding a mock task to see the real-time update.
              </p>
              <button
                onClick={addDemoTask}
                className="w-full bg-indigo-600 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-500 transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
              >
                <Plus size={18} /> New Activity
              </button>
            </div>
            <Zap className="absolute -right-6 -bottom-6 w-32 h-32 text-white opacity-[0.03]" />
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard = ({ icon, label, value, trend }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
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
  <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-indigo-100 transition-all cursor-default">
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
      <span className="text-[11px] text-indigo-600 font-bold underline">
        View Demo Details
      </span>
    </div>
  </div>
);

export default Demo;
