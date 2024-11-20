import React, { useState } from 'react';
import { Copy, Check, Space } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState<number | null>(null);
  const spaces = [1, 2, 4, 8, 16, 32];

  const copyToClipboard = async (length: number) => {
    const space = ' '.repeat(length);
    await navigator.clipboard.writeText(space);
    setCopied(length);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-12 space-x-3">
          <Space className="w-8 h-8 text-blue-400" />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Blank Space Generator
          </h1>
        </div>

        <div className="text-center mb-12">
          <p className="text-slate-300 text-lg">
            Generate and copy blank spaces of different lengths for your text needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {spaces.map((length) => (
            <button
              key={length}
              onClick={() => copyToClipboard(length)}
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <div className="text-2xl font-bold text-blue-400 mb-2">{length}</div>
              <div className="text-slate-400 mb-4">spaces</div>
              <div className="flex items-center space-x-2">
                {copied === length ? (
                  <Check className="w-5 h-5 text-green-400" />
                ) : (
                  <Copy className="w-5 h-5 text-slate-400" />
                )}
                <span className="text-slate-300">
                  {copied === length ? 'Copied!' : 'Copy'}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card inline-block px-6 py-3 rounded-lg">
            <p className="text-slate-400 text-sm">
              Click any card to copy blank spaces to your clipboard
            </p>
          </div>
        </div>
      </div>

      <footer className="fixed bottom-0 w-full glass">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="text-center text-slate-400 text-sm">
            Made with ❤️ by Jainil Patel
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;