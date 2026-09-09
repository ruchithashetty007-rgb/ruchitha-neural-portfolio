import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'HOME', href: 'home' },
  { name: 'JOURNEY', href: 'journey' },
  { name: 'SKILLS', href: 'skills' },
  { name: 'PROJECTS', href: 'projects' },
  { name: 'CERTIFICATES', href: 'certificates' },
  { name: 'CONTACT', href: 'contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Intersection detection
      const scrollPosition = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.href);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-3 sm:p-5 pointer-events-none">
      <nav 
        aria-label="Main Navigation"
        className={`pointer-events-auto px-4 py-2.5 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 sm:gap-8 max-w-5xl w-full ${
          scrolled 
            ? 'bg-slate-950/85 border-slate-800 shadow-2xl backdrop-blur-md ring-1 ring-cyan-500/10' 
            : 'bg-slate-950/60 border-slate-800/80 backdrop-blur-sm'
        }`}
      >
        {/* Brand signature */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-cyan-500 to-violet-600 flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-white text-sm tracking-wider group-hover:text-cyan-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400">
              AI & DS • 2nd Year
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-xs font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                  isActive 
                    ? 'text-white font-semibold' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-lg bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />}
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-mono text-xs font-semibold hover:opacity-95 transition-opacity cursor-pointer"
          >
            CONNECT
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 rounded-2xl bg-slate-950/95 border border-slate-800 p-5 shadow-2xl backdrop-blur-xl md:hidden text-left space-y-4"
          >
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              NAVIGATION MENU
            </div>

            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollTo(item.href)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-mono transition-colors ${
                      isActive 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center rounded-xl bg-blue-600 text-white text-xs font-mono font-semibold"
              >
                LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 text-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono font-semibold"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
