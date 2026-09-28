import React from 'react';
import { Landmark, Briefcase, Building, User, Plus } from 'lucide-react';

export default function LoansView() {
  const loans = [
    { title: 'Personal Loans', value: '$50,000', icon: User, bg: 'bg-blue-100 text-blue-600' },
    { title: 'Corporate Loans', value: '$100,000', icon: Briefcase, bg: 'bg-amber-100 text-amber-600' },
    { title: 'Business Loans', value: '$500,000', icon: Building, bg: 'bg-rose-100 text-rose-600' },
    { title: 'Custom Loans', value: '$10,000', icon: Landmark, bg: 'bg-teal-100 text-teal-600' }
  ];

  const loanOverview = [
    { sl: '01.', money: '$100,000', left: '$40,500', duration: '8 Months', rate: '12%', installment: '$2,000 / month' },
    { sl: '02.', money: '$500,000', left: '$250,000', duration: '36 Months', rate: '10%', installment: '$12,000 / month' },
    { sl: '03.', money: '$900,000', left: '$40,000', duration: '12 Months', rate: '14%', installment: '$5,000 / month' },
    { sl: '04.', money: '$50,000', left: '$10,000', duration: '24 Months', rate: '8%', installment: '$1,500 / month' }
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loans.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center space-x-5">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${item.bg}`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{item.title}</p>
                <h3 className="text-2xl font-bold text-slate-800 mt-1">{item.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Active Loans Table */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-slate-800">Active Loans Overview</h2>
          <button className="text-sm font-semibold text-blue-600 hover:underline flex items-center gap-1">
            <Plus className="w-4 h-4" /> Apply Loan
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-slate-400 text-xs font-semibold uppercase border-b border-slate-100">
                <th className="pb-4">SL No</th>
                <th className="pb-4">Loan Money</th>
                <th className="pb-4">Left to repay</th>
                <th className="pb-4">Duration</th>
                <th className="pb-4">Interest Rate</th>
                <th className="pb-4">Installment</th>
                <th className="pb-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loanOverview.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-4 text-slate-400 font-medium">{item.sl}</td>
                  <td className="py-4 font-bold text-slate-800">{item.money}</td>
                  <td className="py-4 font-semibold text-slate-600">{item.left}</td>
                  <td className="py-4 text-slate-500">{item.duration}</td>
                  <td className="py-4 text-slate-500">{item.rate}</td>
                  <td className="py-4 font-semibold text-blue-600">{item.installment}</td>
                  <td className="py-4 text-right">
                    <button className="px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 font-semibold text-xs hover:bg-blue-600 hover:text-white transition-all">
                      Repay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
