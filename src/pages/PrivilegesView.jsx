import React from 'react';
import { Crown, Sparkles, Gift, ShieldAlert } from 'lucide-react';

export default function PrivilegesView() {
  const privileges = [
    { title: 'VIP Airport Lounge Access', desc: 'Complimentary access to over 1,200 lounges worldwide.', icon: Crown, bg: 'bg-amber-100 text-amber-600' },
    { title: 'Concierge 24/7', desc: 'Dedicated personal assistant for travel & bookings.', icon: Sparkles, bg: 'bg-indigo-100 text-indigo-600' },
    { title: '5% Cashback on Travel', desc: 'Unlimited rewards on flight and hotel reservations.', icon: Gift, bg: 'bg-rose-100 text-rose-600' },
    { title: 'Fraud Coverage $50,000', desc: 'Zero liability protection against unauthorized charges.', icon: ShieldAlert, bg: 'bg-emerald-100 text-emerald-600' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-2 text-center md:text-left">
          <span className="bg-amber-400/20 text-amber-300 font-bold text-xs uppercase px-3 py-1 rounded-full border border-amber-400/30">
            Premium Tier
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">Exclusive Privileges Member</h2>
          <p className="text-slate-300 text-sm max-w-lg">
            Enjoy premium banking perks, priority support, and bespoke financial services curated for you.
          </p>
        </div>
        <button className="mt-6 md:mt-0 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm px-6 py-3 rounded-2xl shadow-lg transition-transform active:scale-95">
          Upgrade Tier
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {privileges.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-start space-x-5">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${p.bg}`}>
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base">{p.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
