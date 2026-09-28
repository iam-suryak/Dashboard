import React from 'react';

// CreditCard component - displays banking card with blue gradient, white, or dark styles
export default function CreditCard({ 
  balance = "$5,756", 
  cardHolder = "Eddy Cusuma", 
  validThru = "12/22", 
  cardNumber = "3778 **** **** 1234",
  variant = "blue" // "blue" | "white" | "dark"
}) {
  const isBlue = variant === "blue";
  const isDark = variant === "dark";
  const isWhite = variant === "white";

  let containerStyle = "";
  if (isBlue) {
    containerStyle = "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg";
  } else if (isDark) {
    containerStyle = "bg-slate-900 text-white shadow-lg";
  } else {
    containerStyle = "bg-white text-slate-800 border border-slate-200 shadow-sm";
  }

  return (
    <div className={`rounded-3xl p-6 flex flex-col justify-between h-56 transition-all transform hover:-translate-y-1 ${containerStyle}`}>
      {/* Top Section: Balance & Chip Icon */}
      <div className="flex justify-between items-start">
        <div>
          <p className={`text-xs font-medium uppercase tracking-wider ${isWhite ? 'text-slate-400' : 'text-slate-200'}`}>
            Balance
          </p>
          <h3 className="text-2xl font-bold mt-1">{balance}</h3>
        </div>
        {/* Chip Icon */}
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isWhite ? 'border border-slate-300 bg-slate-50' : 'bg-white/20'}`}>
          <div className="w-5 h-4 border border-current rounded-sm flex flex-col justify-around p-0.5 opacity-80">
            <div className="w-full h-0.5 bg-current"></div>
            <div className="w-full h-0.5 bg-current"></div>
          </div>
        </div>
      </div>

      {/* Middle Section: Card Holder & Valid Thru */}
      <div className="flex justify-between items-center my-4">
        <div>
          <p className={`text-[10px] uppercase tracking-wider ${isWhite ? 'text-slate-400' : 'text-slate-300'}`}>
            CARD HOLDER
          </p>
          <p className="text-sm font-semibold mt-0.5">{cardHolder}</p>
        </div>
        <div>
          <p className={`text-[10px] uppercase tracking-wider ${isWhite ? 'text-slate-400' : 'text-slate-300'}`}>
            VALID THRU
          </p>
          <p className="text-sm font-semibold mt-0.5">{validThru}</p>
        </div>
      </div>

      {/* Bottom Section: Card Number & Mastercard Logo */}
      <div className={`pt-3 flex justify-between items-center border-t ${isWhite ? 'border-slate-100' : 'border-white/15'}`}>
        <p className="text-lg font-medium tracking-widest font-mono">
          {cardNumber}
        </p>
        {/* Mastercard circles */}
        <div className="flex -space-x-3 opacity-90">
          <div className={`w-7 h-7 rounded-full ${isWhite ? 'bg-slate-400/50' : 'bg-white/40'}`}></div>
          <div className={`w-7 h-7 rounded-full ${isWhite ? 'bg-slate-300/80' : 'bg-white/60'}`}></div>
        </div>
      </div>
    </div>
  );
}
