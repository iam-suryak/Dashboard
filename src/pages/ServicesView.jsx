import React from 'react';
import { ShieldCheck, PiggyBank, Landmark, Award, ArrowRight } from 'lucide-react';

export default function ServicesView() {
  const services = [
    { title: 'Life Insurance', desc: 'Unlimited protection with flexible premiums.', icon: ShieldCheck, bg: 'bg-blue-100 text-blue-600' },
    { title: 'Shopping Privileges', desc: 'Cashback offers on major global brands.', icon: Award, bg: 'bg-amber-100 text-amber-600' },
    { title: 'Safety Vault', desc: 'Secure deposit lockers with 24/7 security.', icon: PiggyBank, bg: 'bg-teal-100 text-teal-600' },
    { title: 'Business Loans', desc: 'Instant credit line up to $500,000.', icon: Landmark, bg: 'bg-rose-100 text-rose-600' },
  ];

  return (
    <div className="space-y-8 pb-10">
      <h2 className="text-xl font-bold text-slate-800">Bank Services & Facilities</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div key={idx} className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center space-x-5">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${srv.bg}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg">{srv.title}</h3>
                  <p className="text-xs text-slate-400 mt-1">{srv.desc}</p>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center text-slate-600">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
