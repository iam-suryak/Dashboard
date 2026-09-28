import React from 'react';
import { Search, Settings, Bell, Menu } from 'lucide-react';

export default function Header({ title, userProfile, onMenuToggle, onSettingsClick }) {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-6 lg:px-10 flex items-center justify-between sticky top-0 z-30">
      {/* Title & Mobile Menu Button */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={onMenuToggle}
          className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-800 tracking-tight">
          {title}
        </h1>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-4 lg:space-x-6">
        {/* Search Input */}
        <div className="relative hidden md:block">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search for something"
            className="w-64 lg:w-72 bg-slate-100/80 text-slate-700 text-sm rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Action Icons */}
        <button 
          onClick={onSettingsClick}
          className="p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          title="Settings"
        >
          <Settings className="w-5 h-5" />
        </button>

        <button 
          className="p-2.5 rounded-full bg-slate-100 text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors relative"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          {/* Notification Badge */}
          <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
            2
          </span>
        </button>

        {/* User Profile Avatar */}
        <div 
          onClick={onSettingsClick}
          className="w-11 h-11 rounded-full bg-amber-200 border-2 border-amber-300 flex items-center justify-center font-bold text-amber-900 cursor-pointer shadow-sm hover:ring-2 hover:ring-blue-500 transition-all overflow-hidden relative"
          title="Edit Profile"
        >
          {userProfile?.avatarUrl ? (
            <img 
              src={userProfile.avatarUrl} 
              alt="Profile" 
              className="w-full h-full object-cover" 
            />
          ) : (
            'SK'
          )}
        </div>
      </div>
    </header>
  );
}
