import React from 'react';
import { DollarSign, Users, Globe, TrendingUp, Activity } from 'lucide-react';
import { Header } from './components/Header';
import { PriceCard } from './components/PriceCard';
import { StatCard } from './components/StatCard';
import { TokenInfo } from './components/TokenInfo';
import { PriceChart } from './components/PriceChart';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <TokenInfo />

        {/* Price Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <PriceCard
            title="Market Cap"
            value="$1.13k"
            change="+2.5%"
            isPositive={true}
          />
          <PriceCard
            title="24h Volume"
            value="175 XRP"
            change="+5.3%"
            isPositive={true}
          />
          <PriceCard
            title="Total Supply"
            value="100M XRPA"
            change="Fixed"
            isPositive={true}
          />
        </div>

        {/* Price Chart */}
        <PriceChart />

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Users}
            title="Holders"
            value="15"
            subtitle="Unique Addresses"
          />
          <StatCard
            icon={Globe}
            title="Network"
            value="XRP Ledger"
            subtitle="Native Token"
          />
          <StatCard
            icon={TrendingUp}
            title="Creator"
            value="raKrjgd..."
            subtitle="2 Tokens Created"
          />
          <StatCard
            icon={DollarSign}
            title="Token Type"
            value="Native XRPL"
            subtitle="6 Decimals"
          />
        </div>
      </div>
    </div>
  );
}

export default App;