import React, { useState } from 'react';
import CreditCard from '../components/CreditCard';
import { ArrowUpRight, ArrowDownLeft, Download, Plus } from 'lucide-react';
import { Bar } from 'react-chartjs-2';

export default function TransactionsView({ onAddCardClick }) {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Expense Chart Data
  const expenseData = {
    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      {
        label: 'Expense',
        data: [12000, 16000, 8000, 14000, 10000, 23000],
        backgroundColor: (context) => {
          return context.dataIndex === 5 ? '#16DBCC' : '#EDF2F7';
        },
        borderRadius: 12,
        barThickness: 32,
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
          label: (context) => `$${context.raw.toLocaleString()}`
        }
      }
    },
    scales: {
      x: { grid: { display: false } },
      y: { display: false }
    }
  };

  const transactionsData = [
    {
      id: '#12548796',
      description: 'Spotify Subscription',
      type: 'Shopping',
      card: '3778 ****',
      date: '28 Jan, 12:30 PM',
      amount: -2500,
      category: 'expense',
      icon: ArrowUpRight,
      iconBg: 'bg-red-50 text-red-500'
    },
    {
      id: '#12548796',
      description: 'Freepik Sales',
      type: 'Transfer',
      card: '3778 ****',
      date: '25 Jan, 10:40 AM',
      amount: 750,
      category: 'income',
      icon: ArrowDownLeft,
      iconBg: 'bg-emerald-50 text-emerald-500'
    },
    {
      id: '#12548796',
      description: 'Mobile Service',
      type: 'Service',
      card: '3778 ****',
      date: '20 Jan, 10:40 AM',
      amount: -150,
      category: 'expense',
      icon: ArrowUpRight,
      iconBg: 'bg-red-50 text-red-500'
    },
    {
      id: '#12548796',
      description: 'Wilson',
      type: 'Transfer',
      card: '3778 ****',
      date: '15 Jan, 3:29 AM',
      amount: -1050,
      category: 'expense',
      icon: ArrowUpRight,
      iconBg: 'bg-red-50 text-red-500'
    },
    {
      id: '#12548796',
      description: 'Emily',
      type: 'Transfer',
      card: '3778 ****',
      date: '14 Jan, 10:40 AM',
      amount: 840,
      category: 'income',
      icon: ArrowDownLeft,
      iconBg: 'bg-emerald-50 text-emerald-500'
    }
  ];

  const filteredTransactions = transactionsData.filter(item => {
    if (activeTab === 'income') return item.category === 'income';
    if (activeTab === 'expense') return item.category === 'expense';
    return true;
  });

  return (
    <div className="space-y-8 pb-10">
      {/* Top Row: My Cards & My Expense */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* My Cards (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">My Cards</h2>
            <button 
              onClick={onAddCardClick}
              className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> Add Card
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CreditCard 
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="blue"
            />
            <CreditCard 
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 5600"
              variant="white"
            />
          </div>
        </div>

        {/* My Expense Chart (1 column) */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800">My Expense</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-[224px] flex flex-col justify-between relative">
            <div className="absolute top-4 right-6 bg-teal-50 text-teal-600 font-bold text-xs px-2.5 py-1 rounded-full">
              $23,000
            </div>
            <div className="h-full pt-4">
              <Bar data={expenseData} options={expenseOptions} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Recent Transactions */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Recent Transactions</h2>

        {/* Tabs */}
        <div className="flex space-x-8 border-b border-slate-200 text-sm font-medium text-slate-400">
          <button 
            onClick={() => setActiveTab('all')}
            className={`pb-3 relative transition-all ${activeTab === 'all' ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-slate-700'}`}
          >
            All Transactions
          </button>
          <button 
            onClick={() => setActiveTab('income')}
            className={`pb-3 relative transition-all ${activeTab === 'income' ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-slate-700'}`}
          >
            Income
          </button>
          <button 
            onClick={() => setActiveTab('expense')}
            className={`pb-3 relative transition-all ${activeTab === 'expense' ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'hover:text-slate-700'}`}
          >
            Expense
          </button>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                <th className="pb-4 font-semibold">Description</th>
                <th className="pb-4 font-semibold">Transaction ID</th>
                <th className="pb-4 font-semibold">Type</th>
                <th className="pb-4 font-semibold">Card</th>
                <th className="pb-4 font-semibold">Date</th>
                <th className="pb-4 font-semibold">Amount</th>
                <th className="pb-4 font-semibold text-right">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTransactions.map((tx, idx) => {
                const Icon = tx.icon;
                const isPositive = tx.amount > 0;
                return (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 ${tx.iconBg}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-slate-800">{tx.description}</span>
                      </div>
                    </td>
                    <td className="py-4 text-slate-500">{tx.id}</td>
                    <td className="py-4 text-slate-500">{tx.type}</td>
                    <td className="py-4 text-slate-500">{tx.card}</td>
                    <td className="py-4 text-slate-500">{tx.date}</td>
                    <td className={`py-4 font-bold ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                      {isPositive ? `+$${tx.amount.toLocaleString()}` : `-$${Math.abs(tx.amount).toLocaleString()}`}
                    </td>
                    <td className="py-4 text-right">
                      <button className="px-4 py-1.5 rounded-full border border-slate-300 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-1.5 ml-auto">
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-end space-x-2 mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-600">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              &lt; Previous
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                  currentPage === page 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, 3))}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 text-blue-600 transition-colors"
            >
              Next &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
