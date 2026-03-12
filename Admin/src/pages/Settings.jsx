import React from 'react';
import { User, Bell, Lock, Globe, Mail, Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500">Configure your platform preferences and account security</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 border-r border-slate-100 pr-4">
          <nav className="space-y-1">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 bg-blue-50 text-blue-600 rounded-xl text-sm font-semibold transition-all">
              <User size={18} /> Profile
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-sm font-medium transition-all">
              <Bell size={18} /> Notifications
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-sm font-medium transition-all">
              <Lock size={18} /> Security
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-xl text-sm font-medium transition-all">
              <Globe size={18} /> Localization
            </button>
          </nav>
        </div>

        <div className="md:col-span-3 space-y-6">
          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-4 flex items-center gap-2">
              <User size={20} className="text-blue-500" />
              General Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                <input type="text" defaultValue="Admin" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                <input type="text" defaultValue="User" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
              </div>
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input type="email" defaultValue="admin@stepmark.in" className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20" />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-4 flex items-center gap-2">
              <Bell size={20} className="text-purple-500" />
              Notification Settings
            </h3>
            
            <div className="space-y-4">
              {[
                { label: 'Booking Confirmation Emails', desc: 'Send automatic emails to customers after booking' },
                { label: 'New Review Alerts', desc: 'Notify me when a customer leaves a review' },
                { label: 'System Updates', desc: 'Get notified about platform maintenance and updates' }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{item.label}</h4>
                    <p className="text-xs text-slate-500 truncate">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20">
              <Save size={20} />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
