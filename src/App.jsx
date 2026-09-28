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
            onSeeAllCards={() => setActiveTab('credit-cards')}
            onSeeAllTransactions={() => setActiveTab('transactions')}
          />
        );
      case 'transactions':
        return (
          <TransactionsView 
            onAddCardClick={() => setActiveTab('credit-cards')}
          />
        );
      case 'accounts':
        return (
          <AccountsView 
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
        return <SettingsView />;
      default:
        return (
          <DashboardView 
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
