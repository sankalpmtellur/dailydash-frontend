import React from "react";
import { 
  Target, 
  Trophy, 
  Flame, 
  Plus, 
  CheckCircle2, 
  Circle, 
  TrendingUp, 
  Clock,
  ChevronRight
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const Goals = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-72 min-h-screen overflow-y-auto px-6 lg:px-10 pb-10">
        {/* Header */}
        <header className="py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Your Goals</h1>
            <p className="text-slate-500 font-medium text-sm mt-1">Set targets, track progress, and crush your milestones.</p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 rounded-xl text-white hover:bg-indigo-700 transition-all text-sm font-bold shadow-lg shadow-indigo-100">
            <Plus size={18} /> Create New Goal
          </button>
        </header>

        {/* Top Highlight: Streaks & Motivation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2 bg-indigo-900 rounded-[28px] p-6 text-white relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 text-indigo-300">
                  <Flame size={20} className="fill-current" />
                  <span className="text-xs font-bold uppercase tracking-widest">Ongoing Streak</span>
                </div>
                <h2 className="text-4xl font-black mb-2">12 Days Strong!</h2>
                <p className="text-indigo-200 text-sm max-w-md font-medium">
                  You've hit your deep work target for 12 consecutive days. 3 more days to beat your personal record!
                </p>
              </div>
              <div className="mt-6 flex gap-2">
                {[1, 2, 3, 4, 5, 6, 7].map((d) => (
                  <div key={d} className={`h-1.5 flex-1 rounded-full ${d <= 5 ? 'bg-indigo-400' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>
            <Trophy className="absolute -right-6 -bottom-6 w-44 h-44 text-white opacity-5 group-hover:rotate-12 transition-transform duration-700" />
          </div>

          <div className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">85%</h3>
            <p className="text-slate-500 text-xs font-bold uppercase mt-1">Weekly Completion</p>
            <p className="text-slate-400 text-[11px] mt-4 font-medium italic">"Consistency is the key to mastery."</p>
          </div>
        </div>

        {/* Active Goals Grid */}
        <h3 className="text-lg font-bold text-slate-900 mb-5 px-1">Active Targets</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <GoalCard 
            title="Professional Deep Work" 
            subtitle="40 hours per week" 
            progress={75} 
            color="bg-indigo-600" 
            icon={<Clock size={18} />} 
          />
          <GoalCard 
            title="Read Technical Docs" 
            subtitle="10 articles per month" 
            progress={40} 
            color="bg-emerald-500" 
            icon={<Target size={18} />} 
          />
          <GoalCard 
            title="Project Roadmap Phase 1" 
            subtitle="Complete architecture design" 
            progress={90} 
            color="bg-amber-500" 
            icon={<TrendingUp size={18} />} 
          />
          <GoalCard 
            title="Physical Well-being" 
            subtitle="Daily 30m morning session" 
            progress={60} 
            color="bg-rose-500" 
            icon={<Flame size={18} />} 
          />
        </div>

        {/* Daily Checklist Section */}
        <section className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900">Today's Micro-Goals</h3>
            <span className="text-xs font-bold text-indigo-600 cursor-pointer hover:underline">Clear Completed</span>
          </div>
          <div className="space-y-3">
            <TodoItem text="Log at least 2 hours of Deep Work before noon" completed={true} />
            <TodoItem text="Update Activity Log for yesterday's late session" completed={true} />
            <TodoItem text="Check Analytics for weekly focus trends" completed={false} />
            <TodoItem text="Plan tomorrow's priority task" completed={false} />
          </div>
        </section>
      </main>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const GoalCard = ({ title, subtitle, progress, color, icon }) => (
  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-100 transition-all group">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-xl ${color.replace('bg-', 'bg-').replace('600', '50').replace('500', '50')} ${color.replace('bg-', 'text-')}`}>
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
          <p className="text-slate-400 text-[11px] font-medium">{subtitle}</p>
        </div>
      </div>
      <span className="text-xs font-black text-slate-900">{progress}%</span>
    </div>
    
    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
      <div 
        style={{ width: `${progress}%` }} 
        className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
      />
    </div>
    <div className="flex justify-between items-center mt-3">
      <span className="text-[10px] text-slate-400 font-bold uppercase">Due in 4 days</span>
      <button className="text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
        <ChevronRight size={16} />
      </button>
    </div>
  </div>
);

const TodoItem = ({ text, completed }) => (
  <div className={`flex items-center justify-between p-4 rounded-xl border transition-all ${completed ? 'bg-slate-50 border-transparent opacity-60' : 'bg-white border-slate-100 hover:border-indigo-100'}`}>
    <div className="flex items-center gap-3">
      {completed ? (
        <CheckCircle2 size={18} className="text-emerald-500" />
      ) : (
        <Circle size={18} className="text-slate-300" />
      )}
      <span className={`text-sm font-medium ${completed ? 'text-slate-500 line-through' : 'text-slate-700'}`}>
        {text}
      </span>
    </div>
    {!completed && <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">High Priority</span>}
  </div>
);

export default Goals;