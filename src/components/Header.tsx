import React from 'react';
import { Activity } from 'lucide-react';

export function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-4">
        <div className="bg-indigo-600 p-3 rounded-xl">
          <Activity className="text-white" size={32} />
        </div>
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold text-gray-900">XRPAWAKENS</h1>
          <p className="text-gray-600">Live Token Dashboard</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://firstledger.net/token/r9Bc54fqEjWx6xVaL7KLvETHZY65bwfBpE/5852504157414B454E5300000000000000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          View on FirstLedger →
        </a>
      </div>
    </div>
  );
}