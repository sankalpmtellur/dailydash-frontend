import React from "react";
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  Mail, 
  Camera, 
  CreditCard,
  ChevronRight,
  Github
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      <Sidebar />

      <main className="flex-1 lg:ml-72 min-h-screen overflow-y-auto px-6 lg:px-10 pb-10">
        {/* Header */}
        <header className="py-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Settings</h1>
          <p className="text-slate-500 font-medium text-sm mt-1">Manage your account preferences and system configuration.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left: Settings Navigation */}
          <aside className="lg:col-span-1 space-y-1">
            <SettingsTab icon={<User size={18} />} label="Account" active />
            <SettingsTab icon={<Bell size={18} />} label="Notifications" />
            <SettingsTab icon={<Palette size={18} />} label="Appearance" />
            <SettingsTab icon={<Shield size={18} />} label="Security & Privacy" />
            <SettingsTab icon={<CreditCard size={18} />} label="Billing" />
            <SettingsTab icon={<Globe size={18} />} label="Integrations" />
          </aside>

          {/* Right: Actual Settings Content */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Profile Section */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-lg">Public Profile</h3>
                <p className="text-slate-400 text-xs font-medium">This information will be displayed publicly.</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <div className="w-20 h-20 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-700 text-2xl font-black border-2 border-white shadow-md">
                      AD
                    </div>
                    <button className="absolute -bottom-2 -right-2 p-1.5 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-600 hover:text-indigo-600 transition-all">
                      <Camera size={14} />
                    </button>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Profile Picture</h4>
                    <p className="text-slate-400 text-xs mt-1">PNG, JPG up to 5MB. Recommended 400x400.</p>
                    <div className="flex gap-2 mt-3">
                      <button className="text-xs font-bold text-indigo-600 hover:underline">Upload New</button>
                      <button className="text-xs font-bold text-rose-500 hover:underline">Remove</button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputGroup label="Full Name" placeholder="Alex Dash" icon={<User size={14} />} />
                  <InputGroup label="Email Address" placeholder="alex@dailydash.com" icon={<Mail size={14} />} />
                </div>
                
                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Bio</label>
                  <textarea 
                    rows="3" 
                    placeholder="Tell us about your productivity goals..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all"
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Account Preferences Section */}
            <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <h3 className="font-bold text-slate-900 text-lg mb-6">Connected Accounts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-slate-900 text-white rounded-lg flex items-center justify-center">
                      <Github size={18} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">GitHub</h5>
                      <p className="text-[11px] text-slate-400 font-medium">Sync your commits with activity logs</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-indigo-600 group-hover:bg-white px-3 py-1.5 rounded-lg transition-all">Connect</button>
                </div>

                <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                      <Globe size={18} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">Google Calendar</h5>
                      <p className="text-[11px] text-slate-400 font-medium">Import your scheduled events</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">Connected</span>
                </div>
              </div>
            </section>

            {/* Dangerous Actions */}
            <section className="bg-rose-50/50 rounded-2xl border border-rose-100 p-6 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-rose-900 text-sm">Delete Account</h3>
                <p className="text-rose-600/70 text-xs mt-0.5">Permanently remove all your logs and data. This cannot be undone.</p>
              </div>
              <button className="px-4 py-2 bg-rose-600 text-white text-xs font-bold rounded-xl hover:bg-rose-700 transition-all shadow-sm">
                Delete
              </button>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const SettingsTab = ({ icon, label, active = false }) => (
  <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
    active 
      ? "bg-white text-indigo-600 shadow-sm border border-slate-200" 
      : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
  }`}>
    {icon}
    {label}
  </button>
);

const InputGroup = ({ label, placeholder, icon }) => (
  <div className="flex-1">
    <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">{label}</label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>
      <input 
        type="text" 
        placeholder={placeholder} 
        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-indigo-600/5 focus:border-indigo-600 transition-all font-medium" 
      />
    </div>
  </div>
);

export default Settings;