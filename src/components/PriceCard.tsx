import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface PriceCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

export function PriceCard({ title, value, change, isPositive }: PriceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-600 font-medium">{title}</h3>
        <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
          <span className="ml-1 font-semibold">{change}</span>
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}