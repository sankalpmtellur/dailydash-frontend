import React from "react";
import { 
  Award, 
  Clock, 
  Zap, 
  Calendar, 
  MapPin, 
  Link as LinkIcon, 
  Twitter, 
  Edit3,
  Share2,
  CheckCircle2,
  Trophy
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-72 min-h-screen overflow-y-auto px-6 lg:px-10 pb-10">
        {/* Profile Header Card */}
        <header className="mt-8 mb-8 bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
          <div className="px-8 pb-8">
            <div className="relative flex justify-between items-end -mt-12 mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-3xl bg-white p-1 shadow-xl">
                  <div className="w-full h-full rounded-[20px] bg-indigo-100 flex items-center justify-center text-3xl font-black text-indigo-700">
                    AD
                  </div>
                </div>
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-4 border-white rounded-full"></div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-all text-xs font-bold">
                  <Share2 size={14} /> Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-xl text-white hover:bg-indigo-700 transition-all text-xs font-bold shadow-lg shadow-indigo-100">
                  <Edit3 size={14} /> Edit Profile
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h1 className="text-2xl font-bold text-slate-900">Alex Dash</h1>
                <p className="text-slate-500 font-medium text-sm">Product Designer & Deep Work Enthusiast</p>
                
                <div className="flex flex-wrap gap-4 mt-4 text-slate-400 text-xs font-bold">
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} /> San Francisco, CA
                  </div>
                  <div className="flex items-center gap-1.5">
                    <LinkIcon size={14} /> alexdash.design
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} /> Joined Jan 2024
                  </div>
                </div>

                <p className="mt-6 text-slate-600 text-sm leading-relaxed max-w-2xl">
                  Passionate about optimizing workflows and building high-performance habits. 
                  Currently focusing on mastering System Design and maintaining a 15-day deep work streak.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <ProfileStat icon={<Zap size={14} />} label="Total Score" value="12,450" />
                  <ProfileStat icon={<Clock size={14} />} label="Focus Hours" value="842h" />
                  <ProfileStat icon={<Trophy size={14} />} label="Rank" value="Top 5%" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Achievements Section */}
          <section className="lg:col-span-1 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 px-1">Achievements</h3>
            <div className="bg-white p-6 rounded-[28px] border border-slate-200 shadow-sm space-y-5">
              <BadgeItem icon={<Award className="text-amber-500" />} title="Early Bird" desc="50 sessions before 7 AM" />
              <BadgeItem icon={<CheckCircle2 className="text-indigo-500" />} title="Perfect Week" desc="Hit all goals for 7 days" />
              <BadgeItem icon={<Zap className="text-purple-500" />} title="Deep Diver" desc="4h+ single session focus" />
              <button className="w-full py-2 text-xs font-bold text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all">
                View All 12 Badges
              </button>
            </div>
          </section>

          {/* Productivity Skills / Tags */}
          <section className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 px-1">Top Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CategoryCard title="Product Design" level="Expert" hours="320h" color="indigo" />
              <CategoryCard title="React Development" level="Advanced" hours="210h" color="emerald" />
              <CategoryCard title="Strategy & Planning" level="Intermediate" hours="95h" color="amber" />
              <CategoryCard title="Technical Writing" level="Advanced" hours="140h" color="rose" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const ProfileStat = ({ icon, label, value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2 text-slate-500">
      {icon}
      <span className="text-xs font-bold">{label}</span>
    </div>
    <span className="text-sm font-black text-slate-900">{value}</span>
  </div>
);

const BadgeItem = ({ icon, title, desc }) => (
  <div className="flex items-center gap-4 group cursor-default">
    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-bold text-slate-900">{title}</h4>
      <p className="text-[11px] text-slate-400 font-medium">{desc}</p>
    </div>
  </div>
);

const CategoryCard = ({ title, level, hours, color }) => {
  const colors = {
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
    amber: "bg-amber-50 text-amber-600 border-amber-100",
    rose: "bg-rose-50 text-rose-600 border-rose-100"
  };
  
  return (
    <div className={`p-5 rounded-2xl border ${colors[color]} transition-all hover:shadow-md cursor-default`}>
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-sm text-slate-900">{title}</h4>
        <span className="text-[10px] font-black uppercase tracking-tighter opacity-70">{level}</span>
      </div>
      <div className="flex items-center gap-1.5 mt-4">
        <Clock size={12} className="opacity-60" />
        <span className="text-xs font-black text-slate-900">{hours}</span>
        <span className="text-[10px] font-bold opacity-60 ml-auto">Active this month</span>
      </div>
    </div>
  );
};

export default Profile;