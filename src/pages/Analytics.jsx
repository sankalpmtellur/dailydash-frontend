import React from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  Zap, 
  Target 
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const Analytics = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-72 min-h-screen overflow-y-auto px-6 lg:px-10 pb-10">
        {/* Header */}
        <header className="py-8">
          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Analytics</h1>
              <p className="text-slate-500 font-medium text-sm mt-1">Deep dive into your productivity patterns.</p>
            </div>
            <div className="flex bg-white border border-slate-200 rounded-xl p-1 shadow-sm">
              <button className="px-4 py-1.5 text-xs font-bold bg-indigo-50 text-indigo-600 rounded-lg">Week</button>
              <button className="px-4 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-600">Month</button>
              <button className="px-4 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-600">Year</button>
            </div>
          </div>
        </header>

        {/* Top Insights Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <InsightCard label="Avg. Focus" value="4h 12m" change="+8%" positive={true} />
          <InsightCard label="Tasks Done" value="42" change="+12%" positive={true} />
          <InsightCard label="Distractions" value="14" change="-18%" positive={true} />
          <InsightCard label="Burnout Risk" value="Low" change="Stable" positive={true} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Chart Section: Weekly Trend */}
          <section className="lg:col-span-2 bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp size={18} className="text-indigo-600" /> Weekly Efficiency
              </h3>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Target: 8h/Day</span>
            </div>
            
            <div className="flex items-end justify-between h-48 gap-2 px-2">
              <Bar height="60%" label="Mon" />
              <Bar height="85%" label="Tue" active={true} />
              <Bar height="45%" label="Wed" />
              <Bar height="70%" label="Thu" />
              <Bar height="95%" label="Fri" />
              <Bar height="30%" label="Sat" />
              <Bar height="20%" label="Sun" />
            </div>
          </section>

          {/* Side Section: Category Breakdown */}
          <section className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6">Category Distribution</h3>
            <div className="space-y-5">
              <CategoryProgress label="Engineering" color="bg-indigo-600" percentage={65} />
              <CategoryProgress label="Design" color="bg-emerald-500" percentage={20} />
              <CategoryProgress label="Meetings" color="bg-amber-400" percentage={10} />
              <CategoryProgress label="Admin" color="bg-slate-300" percentage={5} />
            </div>
          </section>
        </div>

        {/* Bottom Row: Peak Performance & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-indigo-900 rounded-[28px] p-6 text-white overflow-hidden relative group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 text-indigo-300">
                <Zap size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">Peak Performance</span>
              </div>
              <h4 className="text-2xl font-bold mb-2">10:00 AM — 1:00 PM</h4>
              <p className="text-indigo-200 text-sm leading-relaxed mb-6">
                You are 45% more productive during these hours. Try scheduling your "Deep Work" sessions here.
              </p>
              <button className="bg-white text-indigo-900 px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-indigo-50 transition-all">
                View Productivity Map
              </button>
            </div>
            <BarChart3 className="absolute -right-4 -bottom-4 w-40 h-40 text-white opacity-5 group-hover:scale-110 transition-transform duration-700" />
          </div>

          <div className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm flex items-center gap-8">
            <div className="relative w-32 h-32 flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path className="text-slate-100" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                <path className="text-emerald-500" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-black text-slate-900">75%</span>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">of Goal</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Monthly Goal</h3>
              <p className="text-slate-500 text-sm mt-1 font-medium">You’ve logged 120 hours of Deep Work this month. Just 40 hours left to reach your target!</p>
              <div className="flex items-center gap-2 mt-4 text-emerald-600 font-bold text-xs">
                <Target size={14} /> Keep it up, Alex!
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const InsightCard = ({ label, value, change, positive }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{label}</p>
    <div className="flex items-baseline gap-2 mt-1">
      <h4 className="text-xl font-bold text-slate-900">{value}</h4>
      <span className={`text-[10px] font-bold flex items-center ${positive ? 'text-emerald-500' : 'text-rose-500'}`}>
        {positive ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
        {change}
      </span>
    </div>
  </div>
);

const Bar = ({ height, label, active = false }) => (
  <div className="flex flex-col items-center gap-3 w-full group">
    <div className="w-full bg-slate-50 rounded-lg relative h-40 flex items-end overflow-hidden">
      <div 
        style={{ height }} 
        className={`w-full transition-all duration-700 ease-out rounded-t-lg ${active ? 'bg-indigo-600' : 'bg-indigo-200 group-hover:bg-indigo-300'}`}
      />
    </div>
    <span className={`text-[11px] font-bold ${active ? 'text-indigo-600' : 'text-slate-400'}`}>{label}</span>
  </div>
);

const CategoryProgress = ({ label, color, percentage }) => (
  <div>
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-xs font-bold text-slate-600">{label}</span>
      <span className="text-xs font-bold text-slate-900">{percentage}%</span>
    </div>
    <div className="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
      <div 
        style={{ width: `${percentage}%` }} 
        className={`h-full ${color} rounded-full transition-all duration-1000`}
      />
    </div>
  </div>
);

export default Analytics;