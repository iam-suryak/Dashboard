import React from 'react';
import { 
  Home, 
  ArrowRightLeft, 
  UserCheck, 
  TrendingUp, 
  CreditCard as CardIcon, 
  Landmark, 
  Wrench, 
  Award, 
  Settings, 
  X,
  Building2
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, isOpen, setIsOpen }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'transactions', label: 'Transactions', icon: ArrowRightLeft },
    { id: 'accounts', label: 'Accounts', icon: UserCheck },
    { id: 'investments', label: 'Investments', icon: TrendingUp },
    { id: 'credit-cards', label: 'Credit Cards', icon: CardIcon },
    { id: 'loans', label: 'Loans', icon: Landmark },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'privileges', label: 'My Privileges', icon: Award },
    { id: 'settings', label: 'Setting', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed lg:static top-0 left-0 z-50 h-screen w-64 bg-white border-r border-slate-200 
        flex flex-col transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header / Logo */}
        <div className="h-20 px-8 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold text-slate-800 tracking-tight">
              BankDash<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Mobile Close Button */}
          <button 
            className="lg:hidden p-1 text-slate-500 hover:text-slate-800"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-4 px-8 py-3.5 text-base font-medium transition-all relative
                  ${isActive 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                  }
                `}
              >
                {/* Active Left Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600 rounded-r-full" />
                )}
                
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
