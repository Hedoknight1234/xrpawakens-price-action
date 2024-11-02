import React from 'react';
import { Copy } from 'lucide-react';

export function TokenInfo() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Token Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Token ID</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 font-mono text-sm bg-gray-50 p-2 rounded border">
              5852504157414B454E5300000000000000000000
            </code>
            <button
              onClick={() => copyToClipboard('5852504157414B454E5300000000000000000000')}
              className="p-2 text-gray-500 hover:text-indigo-600"
              title="Copy Token ID"
            >
              <Copy size={16} />
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Issuer Address</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 font-mono text-sm bg-gray-50 p-2 rounded border">
              r9Bc54fqEjWx6xVaL7KLvETHZY65bwfBpE
            </code>
            <button
              onClick={() => copyToClipboard('r9Bc54fqEjWx6xVaL7KLvETHZY65bwfBpE')}
              className="p-2 text-gray-500 hover:text-indigo-600"
              title="Copy Issuer Address"
            >
              <Copy size={16} />
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Creator Address</label>
          <div className="flex items-center gap-2">
            <code className="flex-1 font-mono text-sm bg-gray-50 p-2 rounded border">
              raKrjgdpZ3kqySQhkP6vSjM9ZU1PDMfJvK
            </code>
            <button
              onClick={() => copyToClipboard('raKrjgdpZ3kqySQhkP6vSjM9ZU1PDMfJvK')}
              className="p-2 text-gray-500 hover:text-indigo-600"
              title="Copy Creator Address"
            >
              <Copy size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}