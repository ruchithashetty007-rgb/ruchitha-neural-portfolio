import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Check, Copy, ExternalLink, Github, Linkedin, Mail, MessageSquare, Send, Sparkles } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Ruchitha,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email || 'No email provided'})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="py-24 relative overflow-hidden bg-[#060a14] border-t border-slate-800/80"
      aria-label="Contact and Social Connect"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-300 text-xs font-mono">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>COMMUNICATION CHANNEL // INBOX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            LET'S CONNECT
          </h2>
          <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
            “I'm always open to learning, building, and connecting with people who share an interest in technology.”
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Connect Channels */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-sm space-y-6">
              
              <h3 className="text-xl font-bold font-display text-white">
                Direct Communication Channels
              </h3>
              
              {/* Email Box with Copy Action */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-lg bg-slate-800/90 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono uppercase text-slate-400">Email Address</div>
                    <div className="text-sm sm:text-base font-mono text-cyan-200 truncate select-all">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer border border-slate-700"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cyan-400" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  id="btn-connect-linkedin"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/20 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5" />
                    <span>CONNECT ON LINKEDIN</span>
                  </div>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  id="btn-view-github"
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-slate-200 font-semibold text-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-cyan-400" />
                    <span>VIEW GITHUB REPOSITORIES</span>
                  </div>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  id="btn-send-email"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-sm transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-violet-400" />
                    <span>SEND EMAIL DIRECTLY</span>
                  </div>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Status Note */}
              <div className="p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Response expected within 24–48 hours for academic or professional inquiries.</span>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Quick Note Dispatcher */}
          <div className="lg:col-span-6 text-left">
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-2xl backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                <MessageSquare className="w-4 h-4" />
                <span>QUICK MESSAGE DISPATCHER</span>
              </div>

              <h3 className="text-xl font-bold font-display text-white">
                Leave a Note or Feedback
              </h3>
              <p className="text-xs text-slate-400">
                Type your message below. Submitting opens your default email client pre-addressed to Ruchitha.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Kumar"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 outline-none text-sm text-slate-200 placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Your Email (optional):
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 outline-none text-sm text-slate-200 placeholder:text-slate-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Message:
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Share feedback, collaboration ideas, or project questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500/80 outline-none text-sm text-slate-200 placeholder:text-slate-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-95 text-white font-semibold text-xs tracking-wider shadow-lg shadow-cyan-500/10 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE VIA EMAIL</span>
                </button>

                {formSubmitted && (
                  <p className="text-xs font-mono text-emerald-400 text-center">
                    ✓ Email dispatcher initialized in your default mail app!
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
