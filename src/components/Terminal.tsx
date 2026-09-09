import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RefreshCw, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandOutput {
  command: string;
  response: string | React.ReactNode;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'whoami',
      response: (
        <div className="space-y-1">
          <div className="text-cyan-300 font-bold">{PERSONAL_INFO.name}</div>
          <div className="text-slate-300">{PERSONAL_INFO.role}</div>
          <div className="text-emerald-400">2nd Year @ {PERSONAL_INFO.institution}</div>
        </div>
      ),
    },
    {
      command: 'skills',
      response: (
        <div className="space-y-1">
          <div className="text-blue-400 font-semibold">[Foundations]: Python • C • C++</div>
          <div className="text-violet-400 font-semibold">[Exploring]: Data Science • Data Analysis • Visualization • AI • Machine Learning</div>
        </div>
      ),
    },
    {
      command: 'projects',
      response: (
        <div className="space-y-1">
          <div className="text-rose-400">1. INNOVEXA — Smart Healthcare & Emergency Alert System</div>
          <div className="text-emerald-400">2. SMART FARMING — Crop Monitoring using Blynk IoT Platform</div>
          <div className="text-violet-400">3. 2D GRAPHICAL EDITOR — 2D-Graphical Editor in C</div>
        </div>
      ),
    },
    {
      command: 'goal',
      response: (
        <div className="text-cyan-300 font-bold">
          Learn → Build → Improve → Create Impact
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = ['help', 'whoami', 'about', 'skills', 'projects', 'education', 'goal', 'contact', 'clear'];

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let response: React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300">
            <div>Available commands:</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-cyan-400 font-mono text-xs">
              <span>• whoami</span>
              <span>• about</span>
              <span>• skills</span>
              <span>• projects</span>
              <span>• education</span>
              <span>• goal</span>
              <span>• contact</span>
              <span>• clear</span>
            </div>
          </div>
        );
        break;
      case 'whoami':
        response = (
          <div className="space-y-1">
            <div className="text-cyan-300 font-bold">{PERSONAL_INFO.name}</div>
            <div className="text-slate-300">{PERSONAL_INFO.role}</div>
            <div className="text-emerald-400">2nd Year @ {PERSONAL_INFO.institution}</div>
          </div>
        );
        break;
      case 'about':
        response = (
          <div className="text-slate-300 leading-relaxed">
            {PERSONAL_INFO.shortBio}
          </div>
        );
        break;
      case 'skills':
        response = (
          <div className="space-y-1">
            <div className="text-blue-400 font-semibold">[Foundations]: Python, C, C++ (Basic level)</div>
            <div className="text-violet-400 font-semibold">[Exploring]: Data Science, Data Analysis, Data Visualization, AI, Machine Learning</div>
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="space-y-1">
            <div className="text-rose-400">1. INNOVEXA — Smart Healthcare & Emergency Alert System</div>
            <div className="text-emerald-400">2. SMART FARMING — Crop Monitoring using Blynk IoT Platform</div>
            <div className="text-violet-400">3. 2D GRAPHICAL EDITOR — 2D-Graphical Editor in C (github.com/ruchithashetty007-rgb/2D-GRAPHICS-EDITOR.C)</div>
          </div>
        );
        break;
      case 'education':
        response = (
          <div className="space-y-1 text-slate-300">
            <div>• 10th / SSLC: 586 / 625 (93.76%)</div>
            <div>• PUC: 587 / 600 (97.86%) — Mother Teresa's PU College, Shankaranarayana, Udupi</div>
            <div>• KCET: 100 / 180 (14,000 Rank)</div>
            <div className="text-emerald-400">• B.Tech (Present): 2nd Year, AI & DS @ REVA University (Merit via KCET)</div>
          </div>
        );
        break;
      case 'goal':
        response = (
          <div className="text-cyan-300 font-bold">
            Learn → Build → Improve → Create Impact
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="space-y-1 text-slate-300">
            <div>Email: <a href="mailto:ruchithashetty007@gmail.com" className="text-cyan-400 underline">ruchithashetty007@gmail.com</a></div>
            <div>GitHub: <a href="https://github.com/ruchithashetty007-rgb" target="_blank" rel="noreferrer" className="text-blue-400 underline">github.com/ruchithashetty007-rgb</a></div>
            <div>LinkedIn: <a href="https://www.linkedin.com/in/ruchitha-a51183384/" target="_blank" rel="noreferrer" className="text-violet-400 underline">linkedin.com/in/ruchitha-a51183384</a></div>
          </div>
        );
        break;
      default:
        response = (
          <div className="text-rose-400">
            Command not recognized: "{trimmed}". Type <span className="text-cyan-300 underline font-bold">help</span> to view available operations.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, response }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCopyHistory = () => {
    const textToCopy = history.map(h => `> ${h.command}\n`).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="terminal" 
      className="py-20 relative overflow-hidden bg-[#050811] border-t border-slate-800/80"
      aria-label="Interactive Command Terminal"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300 text-xs font-mono">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>CLI INTERFACE // SHELL</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            RUCHITHA_TERMINAL
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Query identity parameters, repositories, and technical direction via interactive terminal commands.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-[11px] font-mono text-slate-400 mr-1">Quick Run:</span>
          {availableCommands.slice(0, 7).map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2.5 py-1 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-xs font-mono text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-colors cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm text-left">
          
          {/* Top Bar */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs text-slate-400 select-none">ruchitha@system: ~/portfolio</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                aria-label="Clear terminal"
                className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                title="Clear terminal"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleCopyHistory}
                aria-label="Copy terminal log"
                className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
                title="Copy log"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            className="p-5 max-h-[380px] overflow-y-auto space-y-4 cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="text-slate-500 text-xs">
              Welcome to RUCHITHA Interactive Shell [Version 2.0.4]. Type &apos;help&apos; for commands.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-slate-500">&gt;</span>
                  <span className="font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 text-slate-300">
                  {item.response}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command (e.g., whoami, skills, projects)..."
                className="flex-1 bg-transparent border-none outline-none text-cyan-200 placeholder:text-slate-600 font-mono text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="p-1 text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
                aria-label="Execute command"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>

            <div ref={terminalEndRef} />
          </div>

        </div>

      </div>
    </section>
  );
};
