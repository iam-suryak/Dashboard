import React, { useState } from 'react';
import { Camera, CheckCircle2 } from 'lucide-react';

export default function SettingsView() {
  const [activeTab, setActiveTab] = useState('profile');
  const [saved, setSaved] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: 'Eddy Cusuma',
    userName: 'Eddy Cusuma',
    email: 'eddy.cusuma@gmail.com',
    password: '••••••••••••',
    dob: '25 January 1990',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-sm border border-slate-100 pb-10">
      {/* Settings Navigation Tabs */}
      <div className="flex space-x-10 border-b border-slate-200 text-sm font-semibold text-slate-400 mb-8">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-3 relative transition-all ${
            activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600 font-bold' : 'hover:text-slate-700'
          }`}
        >
          Edit Profile
        </button>
        <button
          onClick={() => setActiveTab('preference')}
          className={`pb-3 relative transition-all ${
            activeTab === 'preference' ? 'text-blue-600 border-b-2 border-blue-600 font-bold' : 'hover:text-slate-700'
          }`}
        >
          Preference
        </button>
        <button
          onClick={() => setActiveTab('security')}
          className={`pb-3 relative transition-all ${
            activeTab === 'security' ? 'text-blue-600 border-b-2 border-blue-600 font-bold' : 'hover:text-slate-700'
          }`}
        >
          Security
        </button>
      </div>

      {/* Edit Profile Content */}
      {activeTab === 'profile' && (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar Upload */}
            <div className="relative shrink-0">
              <div className="w-28 h-28 rounded-full bg-amber-200 border-4 border-white shadow-md flex items-center justify-center font-bold text-3xl text-amber-900">
                CR
              </div>
              <button 
                type="button"
                className="absolute bottom-0 right-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors"
                title="Change Avatar"
              >
                <Camera className="w-4 h-4" />
              </button>
            </div>

            {/* Inputs Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">User Name</label>
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Date of Birth</label>
                <input
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Present Address</label>
                <input
                  type="text"
                  name="presentAddress"
                  value={formData.presentAddress}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Permanent Address</label>
                <input
                  type="text"
                  name="permanentAddress"
                  value={formData.permanentAddress}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 pt-4">
            {saved && (
              <span className="text-emerald-600 font-semibold text-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Profile updated successfully!
              </span>
            )}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-10 py-3.5 rounded-2xl shadow-md transition-all active:scale-95"
            >
              Save
            </button>
          </div>
        </form>
      )}

      {/* Preferences Tab */}
      {activeTab === 'preference' && (
        <div className="space-y-6 max-w-lg">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">Currency</label>
            <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>INR (₹)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">Time Zone</label>
            <select className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5">
              <option>(GMT-08:00) Pacific Time (US & Canada)</option>
              <option>(GMT+00:00) London</option>
              <option>(GMT+05:30) Mumbai, New Delhi</option>
            </select>
          </div>
          <div className="space-y-3 pt-4">
            <h4 className="font-semibold text-slate-800 text-sm">Notification Preferences</h4>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              <span className="text-xs text-slate-600">I receive digital currency transaction alerts</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              <span className="text-xs text-slate-600">I receive merchant order updates</span>
            </label>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="space-y-6 max-w-lg">
          <div>
            <h4 className="font-semibold text-slate-800 text-sm mb-2">Two-Factor Authentication</h4>
            <p className="text-xs text-slate-400 mb-4">Enable 2FA to protect your banking dashboard with SMS verification.</p>
            <button className="bg-emerald-600 text-white font-semibold text-xs px-5 py-2.5 rounded-xl">
              Enable 2FA
            </button>
          </div>
          <div className="border-t border-slate-100 pt-6">
            <h4 className="font-semibold text-slate-800 text-sm mb-4">Change Password</h4>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5"
              />
              <button className="bg-blue-600 text-white font-semibold text-xs px-6 py-3 rounded-xl">
                Update Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
