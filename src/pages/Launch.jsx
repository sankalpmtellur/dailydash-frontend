import React from "react";
import { Plus, BarChart3, Activity, ArrowUpRight, Timer } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Launch = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-indigo-100">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
              <Activity className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">DailyDash</span>
          </div>

          <button
            onClick={() => navigate("/login")}
            className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
          >
            Login
          </button>
        </div>
      </nav>

      <header className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.1]">
          Quantify your <span className="text-indigo-600">entire day.</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-12">
          Stop wondering where your hours went. Log any activity, visualize your
          intensity, and master your daily efficiency with a custom commit-style
          dashboard.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-2"
          >
            Get Started <ArrowUpRight size={20} />
          </button>
          <button
            onClick={() => navigate("/demo")}
            className="bg-white border border-slate-200 text-slate-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
          >
            Demo website
          </button>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="bg-white rounded-[40px] border border-slate-200 shadow-2xl shadow-slate-200/40 overflow-hidden p-6 md:p-10">
          <div className="flex items-center justify-between mb-10 border-b border-slate-50 pb-6">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-slate-200"></div>
              <div className="h-3 w-3 rounded-full bg-slate-200"></div>
              <div className="h-3 w-3 rounded-full bg-slate-200"></div>
            </div>
            <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-xs font-bold tracking-wider">
              EFFICIENCY: 94.2%
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ActivityColumn title="Deep Work" color="bg-indigo-500" />
            <ActivityColumn title="Learning" color="bg-emerald-500" />
            <ActivityColumn title="Personal" color="bg-amber-500" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white p-8 rounded-[32px] border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all duration-300">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Plus size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Infinite Tasks</h3>
            <p className="text-slate-500 leading-relaxed">
              Gym, coding, meditation, or sleep. Add any activity and track it
              exactly how you live your life.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-[32px] border border-slate-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-50/50 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Dynamic Heatmaps</h3>
            <p className="text-slate-500 leading-relaxed">
              Your dashboard darkens as you put in more hours. Visual proof of
              your dedication, Github-style.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-[32px] border border-slate-100 hover:border-amber-100 hover:shadow-xl hover:shadow-amber-50/50 transition-all duration-300">
            <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Timer size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Efficiency Audit</h3>
            <p className="text-slate-500 leading-relaxed">
              Get a daily breakdown of high-value vs low-value time. Optimize
              your routine with real data.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

const ActivityColumn = ({ title, color }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <span className="font-bold text-slate-700">{title}</span>
      <div className="h-1.5 w-1.5 rounded-full bg-slate-300"></div>
    </div>
    <div className="grid grid-cols-7 gap-2">
      {[...Array(28)].map((_, i) => {
        const opacities = [
          "opacity-10",
          "opacity-30",
          "opacity-60",
          "opacity-100",
        ];
        const randomOpacity =
          opacities[Math.floor(Math.random() * opacities.length)];
        return (
          <div
            key={i}
            className={`aspect-square w-full rounded-[3px] ${color} ${randomOpacity} transition-all`}
          ></div>
        );
      })}
    </div>
  </div>
);

export default Launch;