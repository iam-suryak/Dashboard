import React from 'react';
import CreditCard from '../components/CreditCard';
import { 
  Wallet, 
  ArrowDownRight, 
  ArrowUpRight, 
  PiggyBank, 
  CreditCard as CardIcon, 
  DollarSign, 
  Smartphone,
  Apple,
  User,
  Gamepad2
} from 'lucide-react';
import { Bar } from 'react-chartjs-2';

export default function AccountsView({ onSeeAllTransactions, onSeeAllCards }) {
  // Stat cards info
  const stats = [
    { title: 'My Balance', value: '$14,722', icon: Wallet, bg: 'bg-amber-100 text-amber-500' },
    { title: 'Income', value: '$15,090', icon: ArrowDownRight, bg: 'bg-blue-100 text-blue-500' },
    { title: 'Expense', value: '$4,665', icon: ArrowUpRight, bg: 'bg-rose-100 text-rose-500' },
    { title: 'Total Saving', value: '$10,425', icon: PiggyBank, bg: 'bg-teal-100 text-teal-500' }
  ];

  // Debit & Credit Chart Data
  const chartData = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Debit',
        data: [230, 250, 220, 270, 180, 240, 260],
        backgroundColor: '#1A16F3',
        borderRadius: 8,
        barThickness: 12
      },
      {
        label: 'Credit',
        data: [380, 310, 260, 360, 230, 280, 300],
        backgroundColor: '#FCAA0B',
        borderRadius: 8,
        barThickness: 12
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: { usePointStyle: true, boxWidth: 8, font: { size: 12 } }
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#F3F4F6' }, min: 0, max: 600 }
    }
  };

  const invoices = [
    { title: 'Apple Store', time: '5h ago', amount: '$450', icon: Apple, bg: 'bg-teal-50 text-teal-500' },
    { title: 'Michael', time: '2 days ago', amount: '$160', icon: User, bg: 'bg-amber-50 text-amber-500' },
    { title: 'Playstation', time: '5 days ago', amount: '$1,085', icon: Gamepad2, bg: 'bg-blue-50 text-blue-500' },
    { title: 'William', time: '10 days ago', amount: '$90', icon: User, bg: 'bg-pink-50 text-pink-500' }
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Middle Section: Last Transaction & My Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Last Transaction (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">Last Transaction</h2>
            <button onClick={onSeeAllTransactions} className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              See All
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-4">
            {/* Spotify */}
            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                  <CardIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Spotify Subscription</h4>
                  <p className="text-xs text-slate-400">28 January 2025</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 font-medium">Shopping</span>
              <span className="text-xs text-slate-500 font-medium hidden md:inline">3778 ****</span>
              <span className="font-bold text-red-500 text-sm">-$2,500</span>
            </div>

            {/* Freepik */}
            <div className="flex items-center justify-between py-2 border-b border-slate-50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Freepik Sales</h4>
                  <p className="text-xs text-slate-400">25 January 2025</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 font-medium">Transfer</span>
              <span className="text-xs text-slate-500 font-medium hidden md:inline">3778 ****</span>
              <span className="font-bold text-emerald-500 text-sm">+$750</span>
            </div>

            {/* Mobile */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Mobile Service</h4>
                  <p className="text-xs text-slate-400">20 January 2025</p>
                </div>
              </div>
              <span className="text-xs text-slate-500 font-medium">Service</span>
              <span className="text-xs text-slate-500 font-medium hidden md:inline">3778 ****</span>
              <span className="font-bold text-red-500 text-sm">-$150</span>
            </div>
          </div>
        </div>

        {/* My Card (1 column) */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">My Card</h2>
            <button onClick={onSeeAllCards} className="text-sm font-semibold text-slate-700 hover:text-blue-600">
              See All
            </button>
          </div>
          <CreditCard 
            balance="$5,756"
            cardHolder="Surya"
            validThru="12/28"
            cardNumber="3778 **** **** 1234"
            variant="blue"
          />
        </div>
      </div>

      {/* Bottom Section: Debit & Credit Overview & Invoices Sent */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Debit & Credit Overview (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">Debit & Credit Overview</h2>
            <span className="text-xs text-slate-400 font-medium">$2,110 Debited & $3,090 Credited in this week</span>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-[280px]">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Invoices Sent (1 column) */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Invoices Sent</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-[280px] flex flex-col justify-between">
            {invoices.map((inv, idx) => {
              const Icon = inv.icon;
              return (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center ${inv.bg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">{inv.title}</h4>
                      <p className="text-xs text-slate-400">{inv.time}</p>
                    </div>
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{inv.amount}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
