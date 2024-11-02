import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
}

export function StatCard({ icon: Icon, title, value, subtitle }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-indigo-100 p-2 rounded-lg">
          <Icon className="text-indigo-600" size={20} />
        </div>
        <h3 className="text-gray-600 font-medium">{title}</h3>
      </div>
      <p className="text-2xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
}