import React from 'react';
import { 
  DollarSign, 
  BarChart3, 
  TrendingUp, 
  ShoppingBag, 
  Smartphone, 
  Car,
  Plus
} from 'lucide-react';
import { Line } from 'react-chartjs-2';

export default function InvestmentsView() {
  const stats = [
    { title: 'Total Invested Amount', value: '$150,000', icon: DollarSign, bg: 'bg-emerald-100 text-emerald-600' },
    { title: 'Number of Investments', value: '1,250', icon: BarChart3, bg: 'bg-rose-100 text-rose-600' },
    { title: 'Rate of Return', value: '+12.33%', icon: TrendingUp, bg: 'bg-blue-100 text-blue-600' }
  ];

  // Yearly Total Investment Chart Data (Yellow line)
  const yearlyData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Yearly Investment',
        data: [6000, 23000, 16000, 36000, 21000, 30000],
        borderColor: '#FCAA0B',
        backgroundColor: '#FCAA0B',
        tension: 0,
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#F3F4F6' }, min: 0, max: 40000 }
    }
  };

  // Monthly Revenue Chart Data (Cyan line)
  const revenueData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [8000, 22000, 19000, 32000, 27000, 35000],
        borderColor: '#16DBCC',
        backgroundColor: '#16DBCC',
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };

  const investmentsList = [
    { name: 'Apple Store', desc: 'E-commerce, Marketplace', value: '$54,000', returnVal: '+16%', isPositive: true, icon: ShoppingBag, bg: 'bg-rose-100 text-rose-500' },
    { name: 'Samsung Mobile', desc: 'E-commerce, Marketplace', value: '$25,300', returnVal: '-4%', isPositive: false, icon: Smartphone, bg: 'bg-blue-100 text-blue-500' },
    { name: 'Tesla Motors', desc: 'Electric Vehicles', value: '$8,200', returnVal: '+25%', isPositive: true, icon: Car, bg: 'bg-amber-100 text-amber-500' }
  ];

  const stocks = [
    { sl: '01.', name: 'Trivago', price: '$520', returnVal: '+5%', isPositive: true },
    { sl: '02.', name: 'Canon', price: '$480', returnVal: '+10%', isPositive: true },
    { sl: '03.', name: 'Uber Food', price: '$350', returnVal: '-3%', isPositive: false },
    { sl: '04.', name: 'Nokia', price: '$940', returnVal: '+2%', isPositive: true },
    { sl: '05.', name: 'Tiktok', price: '$670', returnVal: '-12%', isPositive: false }
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, idx) => {
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

      {/* Middle Line Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Yearly Total Investment */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Yearly Total Investment</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-[280px]">
            <Line data={yearlyData} options={lineOptions} />
          </div>
        </div>

        {/* Monthly Revenue */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Monthly Revenue</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-[280px]">
            <Line data={revenueData} options={lineOptions} />
          </div>
        </div>
      </div>

      {/* Bottom Section: My Investment & Trending Stock */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* My Investment (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">My Investment</h2>
            <button className="text-sm font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1">
              <Plus className="w-4 h-4" /> New Investment
            </button>
          </div>

          <div className="space-y-4">
            {investmentsList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.bg}`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base">{item.name}</h4>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm text-right">{item.value}</p>
                    <p className="text-xs text-slate-400 text-right">Investment Value</p>
                  </div>
                  <div>
                    <p className={`font-bold text-sm text-right ${item.isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {item.returnVal}
                    </p>
                    <p className="text-xs text-slate-400 text-right">Return Value</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trending Stock (1 column) */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Trending Stock</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-slate-400 text-xs font-semibold uppercase border-b border-slate-100">
                  <th className="pb-3">SL No</th>
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Price</th>
                  <th className="pb-3 text-right">Return</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {stocks.map((stock, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-3 text-slate-400 font-medium">{stock.sl}</td>
                    <td className="py-3 font-semibold text-slate-800">{stock.name}</td>
                    <td className="py-3 font-medium text-slate-600">{stock.price}</td>
                    <td className={`py-3 font-bold text-right ${stock.isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {stock.returnVal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
