import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './pages/DashboardView';
import TransactionsView from './pages/TransactionsView';
import AccountsView from './pages/AccountsView';
import InvestmentsView from './pages/InvestmentsView';
import CreditCardsView from './pages/CreditCardsView';
import LoansView from './pages/LoansView';
import ServicesView from './pages/ServicesView';
import PrivilegesView from './pages/PrivilegesView';
import SettingsView from './pages/SettingsView';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // User Profile State with Avatar Support
  const [userProfile, setUserProfile] = useState({
    name: 'Surya K',
    userName: 'Surya',
    email: 'Surya@gmail.com',
    password: '••••••••••••',
    dob: '11 October 2003',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA',
    avatarUrl: null
  });

  // Centralized Transactions State
  const [transactions, setTransactions] = useState([
    {
      id: '#12548796',
      description: 'Spotify Subscription',
      type: 'Shopping',
      card: '3778 ****',
      date: '28 Jan, 12:30 PM',
      amount: -2500,
      category: 'expense',
      iconType: 'card',
      iconBg: 'bg-amber-100 text-amber-600'
    },
    {
      id: '#12548796',
      description: 'Freepik Sales',
      type: 'Transfer',
      card: '3778 ****',
      date: '25 Jan, 10:40 AM',
      amount: 750,
      category: 'income',
      iconType: 'dollar',
      iconBg: 'bg-teal-100 text-teal-600'
    },
    {
      id: '#12548796',
      description: 'Mobile Service',
      type: 'Service',
      card: '3778 ****',
      date: '20 Jan, 10:40 AM',
      amount: -150,
      category: 'expense',
      iconType: 'phone',
      iconBg: 'bg-blue-100 text-blue-600'
    },
    {
      id: '#12548796',
      description: 'Wilson',
      type: 'Transfer',
      card: '3778 ****',
      date: '15 Jan, 3:29 AM',
      amount: -1050,
      category: 'expense',
      iconType: 'send',
      iconBg: 'bg-rose-100 text-rose-500'
    },
    {
      id: '#12548796',
      description: 'Emily',
      type: 'Transfer',
      card: '3778 ****',
      date: '14 Jan, 10:40 AM',
      amount: 840,
      category: 'income',
      iconType: 'income',
      iconBg: 'bg-emerald-100 text-emerald-500'
    }
  ]);

  // Handler to add a new transaction dynamically from Quick Transfer
  const handleSendMoney = (recipientName, amount) => {
    const numAmount = parseFloat(amount) || 525;
    const newTx = {
      id: `#${Math.floor(10000000 + Math.random() * 90000000)}`,
      description: `Transfer to ${recipientName}`,
      type: 'Transfer',
      card: '3778 ****',
      date: 'Just now',
      amount: -Math.abs(numAmount),
      category: 'expense',
      iconType: 'send',
      iconBg: 'bg-blue-100 text-blue-600'
    };

    setTransactions(prev => [newTx, ...prev]);
  };

  // Map active tab to top header title
  const pageTitles = {
    'dashboard': 'Overview',
    'transactions': 'Transactions',
    'accounts': 'Accounts',
    'investments': 'Investments',
    'credit-cards': 'Credit Cards',
    'loans': 'Loans',
    'services': 'Services',
    'privileges': 'My Privileges',
    'settings': 'Setting',
  };

  const renderCurrentView = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardView 
            transactions={transactions}
            onSendMoney={handleSendMoney}
            onSeeAllCards={() => setActiveTab('credit-cards')}
            onSeeAllTransactions={() => setActiveTab('transactions')}
          />
        );
      case 'transactions':
        return (
          <TransactionsView 
            transactions={transactions}
            onAddCardClick={() => setActiveTab('credit-cards')}
          />
        );
      case 'accounts':
        return (
          <AccountsView 
            transactions={transactions}
            onSeeAllCards={() => setActiveTab('credit-cards')}
            onSeeAllTransactions={() => setActiveTab('transactions')}
          />
        );
      case 'investments':
        return <InvestmentsView />;
      case 'credit-cards':
        return <CreditCardsView />;
      case 'loans':
        return <LoansView />;
      case 'services':
        return <ServicesView />;
      case 'privileges':
        return <PrivilegesView />;
      case 'settings':
        return (
          <SettingsView 
            userProfile={userProfile}
            setUserProfile={setUserProfile}
          />
        );
      default:
        return (
          <DashboardView 
            transactions={transactions}
            onSendMoney={handleSendMoney}
            onSeeAllCards={() => setActiveTab('credit-cards')}
            onSeeAllTransactions={() => setActiveTab('transactions')}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-[#F5F7FA] overflow-hidden">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main App Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <Header 
          title={pageTitles[activeTab] || 'Overview'}
          userProfile={userProfile}
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          onSettingsClick={() => setActiveTab('settings')}
        />

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-10">
          <div className="max-w-7xl mx-auto">
            {renderCurrentView()}
          </div>
        </main>
      </div>
    </div>
  );
}
