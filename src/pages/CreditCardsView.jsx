import React, { useState } from 'react';
import CreditCard from '../components/CreditCard';
import { 
  CreditCard as CardIcon, 
  Lock, 
  Key, 
  Globe, 
  Apple, 
  CheckCircle2,
  Plus
} from 'lucide-react';
import { Doughnut } from 'react-chartjs-2';

export default function CreditCardsView() {
  const [cards, setCards] = useState([
    { balance: "$5,756", holder: "Eddy Cusuma", valid: "12/22", number: "3778 **** **** 1234", variant: "blue" },
    { balance: "$5,756", holder: "Eddy Cusuma", valid: "12/22", number: "3778 **** **** 5600", variant: "white" },
    { balance: "$3,210", holder: "Eddy Cusuma", valid: "09/25", number: "4532 **** **** 9087", variant: "dark" },
  ]);

  const [cardType, setCardType] = useState('Classic');
  const [nameOnCard, setNameOnCard] = useState('My Cards');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);

  // Card Expense Donut Chart Data
  const donutData = {
    labels: ['DBL Bank', 'BRC Bank', 'ABM Bank', 'MCP Bank'],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: ['#4C49ED', '#FA255C', '#16DBCC', '#FFBB38'],
        borderWidth: 3,
        borderColor: '#ffffff',
      }
    ]
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { usePointStyle: true, boxWidth: 8, font: { size: 12 } }
      }
    }
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    if (!cardNumber || !expDate) return;

    const newCard = {
      balance: "$1,000",
      holder: nameOnCard || "Eddy Cusuma",
      valid: expDate || "12/28",
      number: cardNumber.length > 8 ? `${cardNumber.slice(0, 4)} **** **** ${cardNumber.slice(-4)}` : "8000 **** **** 9999",
      variant: cards.length % 2 === 0 ? "blue" : "dark"
    };

    setCards([...cards, newCard]);
    setCardNumber('');
    setExpDate('');
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3500);
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Top Section: My Cards Carousel/Grid */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-800">My Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <CreditCard
              key={i}
              balance={c.balance}
              cardHolder={c.holder}
              validThru={c.valid}
              cardNumber={c.number}
              variant={c.variant}
            />
          ))}
        </div>
      </div>

      {/* Middle Section: Card Expense Statistics & Card List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Expense Stats (1 column) */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Card Expense Statistics</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 h-[300px] flex items-center justify-center">
            <Doughnut data={donutData} options={donutOptions} />
          </div>
        </div>

        {/* Card List (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Card List</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-4">
            {/* Card 1 */}
            <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <CardIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Card Type</h4>
                  <p className="text-xs text-slate-400">Secondary</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Bank</h4>
                <p className="text-xs text-slate-400">DBL Bank</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Card Number</h4>
                <p className="text-xs text-slate-400">3778 **** 1234</p>
              </div>
              <button className="text-xs font-semibold text-blue-600 hover:underline">View Details</button>
            </div>

            {/* Card 2 */}
            <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <CardIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Card Type</h4>
                  <p className="text-xs text-slate-400">Primary</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Bank</h4>
                <p className="text-xs text-slate-400">BRC Bank</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Card Number</h4>
                <p className="text-xs text-slate-400">3778 **** 5600</p>
              </div>
              <button className="text-xs font-semibold text-blue-600 hover:underline">View Details</button>
            </div>

            {/* Card 3 */}
            <div className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                  <CardIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 text-sm">Card Type</h4>
                  <p className="text-xs text-slate-400">Secondary</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Bank</h4>
                <p className="text-xs text-slate-400">ABM Bank</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Card Number</h4>
                <p className="text-xs text-slate-400">4532 **** 9087</p>
              </div>
              <button className="text-xs font-semibold text-blue-600 hover:underline">View Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Add New Card Form & Card Setting */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add New Card (2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-800">Add New Card</h2>
            {successMessage && (
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> New card added to your account!
              </span>
            )}
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
            <p className="text-xs text-slate-400 mb-6">
              Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services.
            </p>

            <form onSubmit={handleAddCard} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Card Type</label>
                  <select
                    value={cardType}
                    onChange={(e) => setCardType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="Classic">Classic</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Name On Card</label>
                  <input
                    type="text"
                    value={nameOnCard}
                    onChange={(e) => setNameOnCard(e.target.value)}
                    placeholder="My Cards"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="8000 1234 5678 9010"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">Expiration Date</label>
                  <input
                    type="text"
                    value={expDate}
                    onChange={(e) => setExpDate(e.target.value)}
                    placeholder="25 December 2025"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-2xl p-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-8 py-3.5 rounded-2xl shadow-md transition-all active:scale-95 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Save Card
              </button>
            </form>
          </div>
        </div>

        {/* Card Setting (1 column) */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-800">Card Setting</h2>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 space-y-5">
            {/* Setting 1 */}
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-slate-50 p-2 rounded-2xl transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Block Card</h4>
                <p className="text-xs text-slate-400">Instantly block card</p>
              </div>
            </div>

            {/* Setting 2 */}
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-slate-50 p-2 rounded-2xl transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Change Pin Code</h4>
                <p className="text-xs text-slate-400">Choose another pin</p>
              </div>
            </div>

            {/* Setting 3 */}
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-slate-50 p-2 rounded-2xl transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Add to Google Pay</h4>
                <p className="text-xs text-slate-400">Withdraw without card</p>
              </div>
            </div>

            {/* Setting 4 */}
            <div className="flex items-center space-x-4 cursor-pointer hover:bg-slate-50 p-2 rounded-2xl transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
                <Apple className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Add to Apple Pay</h4>
                <p className="text-xs text-slate-400">Withdraw without card</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
