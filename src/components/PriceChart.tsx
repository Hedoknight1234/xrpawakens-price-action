import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const timeRanges = {
  '24H': {
    labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
    data: Array.from({ length: 24 }, () => (Math.random() * 0.00001 + 0.00001).toFixed(8))
  },
  '7D': {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    data: Array.from({ length: 7 }, () => (Math.random() * 0.00001 + 0.00001).toFixed(8))
  },
  '1M': {
    labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    data: Array.from({ length: 30 }, () => (Math.random() * 0.00001 + 0.00001).toFixed(8))
  }
};

export function PriceChart() {
  const [timeRange, setTimeRange] = useState<'24H' | '7D' | '1M'>('24H');

  const data = {
    labels: timeRanges[timeRange].labels,
    datasets: [
      {
        label: 'XRPA Price',
        data: timeRanges[timeRange].data,
        fill: true,
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.parsed.y} XRP`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: number) => `${value} XRP`,
        },
      },
    },
    interaction: {
      intersect: false,
      mode: 'index' as const,
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h2 className="text-xl font-bold text-gray-900">Price History</h2>
        <div className="flex gap-2">
          {(['24H', '7D', '1M'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                timeRange === range
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[300px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}