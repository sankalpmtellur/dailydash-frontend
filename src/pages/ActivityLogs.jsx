import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  MoreVertical, 
  ExternalLink, 
  Clock, 
  Zap, 
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const ActivityLog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock Data for the table
  const logs = [
    { id: 1, activity: "UI Design Revamp", category: "Engineering", duration: "3h 20m", date: "Jan 12, 2026", intensity: "High" },
    { id: 2, activity: "Team Sync Meeting", category: "Management", duration: "45m", date: "Jan 12, 2026", intensity: "Medium" },
    { id: 3, activity: "Bug Fixing - Auth Flow", category: "Engineering", duration: "2h 10m", date: "Jan 11, 2026", intensity: "High" },
    { id: 4, activity: "Client Briefing", category: "Design", duration: "1h 00m", date: "Jan 11, 2026", intensity: "Low" },
    { id: 5, activity: "Research & Documentation", category: "Analysis", duration: "4h 15m", date: "Jan 10, 2026", intensity: "High" },
    { id: 6, activity: "Product Roadmap Planning", category: "Strategy", duration: "2h 30m", date: "Jan 10, 2026", intensity: "Medium" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-72 min-h-screen overflow-y-auto px-6 lg:px-10 pb-10">
        {/* Header Section */}
        <header className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Activity Log</h1>
              <p className="text-slate-500 font-medium text-sm mt-1">Review and manage your historical performance data.</p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all text-sm font-bold shadow-sm">
                <Download size={16} /> Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 rounded-xl text-white hover:bg-indigo-700 transition-all text-sm font-bold shadow-lg shadow-indigo-100">
                <Filter size={16} /> Filter
              </button>
            </div>
          </div>
        </header>

        {/* Filters & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by activity, category or date..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <select className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm font-bold text-slate-600 focus:outline-none cursor-pointer">
              <option>All Categories</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Management</option>
            </select>
          </div>
        </div>

        {/* Logs Table Area */}
        <div className="bg-white rounded-[28px] border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Activity</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Category</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Duration</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Intensity</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
                          <Zap size={14} />
                        </div>
                        <span className="font-bold text-slate-900 text-sm">{log.activity}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[11px] font-bold">
                        {log.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                        <Clock size={14} className="text-slate-400" />
                        {log.duration}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
                        <CalendarIcon size={14} className="text-slate-400" />
                        {log.date}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          log.intensity === 'High' ? 'bg-emerald-500' : 
                          log.intensity === 'Medium' ? 'bg-amber-500' : 'bg-slate-300'
                        }`} />
                        <span className="text-xs font-bold text-slate-600">{log.intensity}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/30">
            <p className="text-xs text-slate-500 font-medium">
              Showing <span className="text-slate-900 font-bold">1-6</span> of <span className="text-slate-900 font-bold">24</span> logs
            </p>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 rounded-lg text-slate-400 hover:bg-white disabled:opacity-50">
                <ChevronLeft size={16} />
              </button>
              <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-white hover:border-indigo-200 transition-all">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ActivityLog;