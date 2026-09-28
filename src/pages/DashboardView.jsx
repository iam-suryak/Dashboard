import React, { useState } from 'react';
import CreditCard from '../components/CreditCard';
import { 
  CreditCard as CardIcon, 
  DollarSign, 
  Smartphone, 
  Send, 
  ChevronRight,
  CheckCircle2,
  ArrowUpRight,
  ArrowDownLeft,
  Loader2
} from 'lucide-react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

// Register ChartJS modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function DashboardView({ 
  transactions = [], 
  onSendMoney, 
  onSeeAllCards, 
  onSeeAllTransactions 
}) {
  const [transferAmount, setTransferAmount] = useState('525.00');
  const [selectedUser, setSelectedUser] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);

  // Quick transfer contacts
  const contacts = [
    { name: 'Livia Bator', role: 'CEO', avatar: 'LB', bg: 'bg-orange-100 text-orange-600' },
    { name: 'Randy Press', role: 'Director', avatar: 'RP', bg: 'bg-blue-100 text-blue-600' },
    { name: 'Workman', role: 'Designer', avatar: 'W', bg: 'bg-teal-100 text-teal-600' },
  ];

  // Map icon types to Lucide Components
  const renderIcon = (type) => {
    switch (type) {
      case 'card':
        return <CardIcon className="w-6 h-6" />;
      case 'dollar':
        return <DollarSign className="w-6 h-6" />;
      case 'phone':
        return <Smartphone className="w-6 h-6" />;
      case 'income':
        return <ArrowDownLeft className="w-6 h-6" />;
      case 'send':
      default:
        return <ArrowUpRight className="w-6 h-6" />;
    }
  };

  // Weekly Activity Bar Chart Data
  const weeklyData = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Withdraw',
        data: [230, 120, 260, 360, 230, 230, 320],
        backgroundColor: '#232323',
        borderRadius: 20,
        barThickness: 14,
      },
      {
        label: 'Deposit',
        data: [470, 350, 320, 470, 150, 390, 390],
        backgroundColor: '#396AFF',
        borderRadius: 20,
        barThickness: 14,
      }
    ]
  };

  const weeklyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          font: { size: 12 }
        }
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#F3F4F6' }, min: 0, max: 500 }
    }
  };

  // Expense Statistics Pie Chart Data
  const expenseData = {
    labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
    datasets: [
      {
        data: [30, 15, 20, 35],
        backgroundColor: [
          '#343C6A', // Dark Navy (30%)
          '#FC7900', // Orange (15%)
          '#396AFF', // Blue (20%)
          '#FA00FF'  // Magenta (35%)
        ],
        borderWidth: 4,
        borderColor: '#ffffff',
      }
    ]
  };

  const expenseOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`
        }
      }
    }
  };

  // Balance History Line Chart Data
  const balanceData = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Balance History',
        data: [120, 340, 230, 480, 220, 780, 620],
        borderColor: '#1814F3',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, 'rgba(24, 20, 243, 0.25)');
          gradient.addColorStop(1, 'rgba(24, 20, 243, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 0
      }
    ]
  };

  const balanceOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#F3F4F6' }, min: 0, max: 800 }
    }
  };

  const handleSend = () => {
    if (!transferAmount || isNaN(parseFloat(transferAmount)) || isSending) return;

    setIsSending(true);
    
    // Simulate smooth responsive sending delay for user feedback
    setTimeout(() => {
      const recipient = contacts[selectedUser] || contacts[0];
      if (onSendMoney) {
        onSendMoney(recipient.name, transferAmount);
      }
      setIsSending(false);
      setTransferSuccess(true);
      setTimeout(() => setTransferSuccess(false), 3500);
    }, 400);
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Row 1: My Cards & Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* My Cards (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">My Cards</h2>
            <button 
              onClick={onSeeAllCards}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              See All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CreditCard 
              balance="$5,756"
              cardHolder="Surya"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="blue"
            />
            <CreditCard 
              balance="$5,756"
              cardHolder="Surya"
              validThru="12/22"
              cardNumber="3778 **** **** 5600"
              variant="white"
            />
          </div>
        </div>

        {/* Recent Transactions (1 column) */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">Recent Transaction</h2>
            <button 
              onClick={onSeeAllTransactions}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
            >
              See All
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between min-h-[224px] space-y-4">
            {transactions.slice(0, 3).map((tx, idx) => {
              const isPositive = tx.amount > 0;
              return (
                <div key={idx} className="flex items-center justify-between transition-all hover:translate-x-1">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tx.iconBg}`}>
                      {renderIcon(tx.iconType)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">{tx.description}</h4>
                      <p className="text-xs text-slate-400">{tx.date}</p>
                    </div>
                  </div>
                  <span className={`font-bold text-sm ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                    {isPositive ? `+$${tx.amount.toLocaleString()}` : `-$${Math.abs(tx.amount).toLocaleString()}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Row 2: Weekly Activity & Expense Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Activity (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Weekly Activity</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-[300px]">
            <Bar data={weeklyData} options={weeklyOptions} />
          </div>
        </div>

        {/* Expense Statistics (1 column) */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Expense Statistics</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-[300px] flex items-center justify-center relative">
            <Pie data={expenseData} options={expenseOptions} />
          </div>
        </div>
      </div>

      {/* Row 3: Quick Transfer & Balance History */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Transfer (1 column) */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Quick Transfer</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-[280px] flex flex-col justify-between">
            {/* Contacts Carousel */}
            <div className="flex items-center space-x-4 overflow-x-auto py-2">
              {contacts.map((contact, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedUser(index)}
                  className={`flex flex-col items-center cursor-pointer p-2.5 rounded-2xl transition-all transform active:scale-95 ${
                    selectedUser === index ? 'bg-blue-50/80 ring-2 ring-blue-500' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mb-2 shadow-sm ${contact.bg}`}>
                    {contact.avatar}
                  </div>
                  <p className="text-xs font-semibold text-slate-800 text-center whitespace-nowrap">{contact.name}</p>
                  <p className="text-[10px] text-slate-400 text-center whitespace-nowrap">{contact.role}</p>
                </div>
              ))}

              <button className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center shrink-0 transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Transfer Form */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Write Amount</span>
                {transferSuccess && (
                  <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 animate-pulse">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Sent & added to transactions!
                  </span>
                )}
              </div>
              <div className="relative flex items-center">
                <input
                  type="number"
                  step="0.01"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                  placeholder="525.00"
                  className="w-full bg-slate-100 text-slate-800 font-bold rounded-full py-3.5 pl-6 pr-36 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isSending}
                  className={`
                    absolute right-1 top-1 bottom-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm 
                    px-6 rounded-full flex items-center space-x-2 shadow-md transition-all active:scale-95
                    ${isSending ? 'opacity-80 cursor-not-allowed' : 'hover:shadow-lg'}
                  `}
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Balance History (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Balance History</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-[280px]">
            <Line data={balanceData} options={balanceOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
