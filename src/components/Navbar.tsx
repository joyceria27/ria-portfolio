import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2, Download, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 dark:bg-slate-950/85 light:bg-white/90 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 py-3 shadow-lg shadow-black/10' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition transform">
            <div className="w-full h-full bg-slate-950 dark:bg-slate-950 light:bg-white rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-indigo-400 dark:text-indigo-400 light:text-indigo-600 group-hover:rotate-12 transition transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight text-base group-hover:text-indigo-400 transition">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] text-indigo-400 font-mono tracking-widest uppercase font-semibold">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 px-3 py-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' 
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-200/80'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Buttons & Theme Switcher */}
        <div className="hidden md:flex items-center space-x-3">
          <ThemeToggle />

          <button
            onClick={onOpenResumeModal}
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/60 transition shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-indigo-400" />
            <span>Resume</span>
          </button>

          <Link
            to="/contact"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-lg shadow-indigo-600/25 transition transform active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Me</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button & Theme Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 dark:bg-slate-950/95 light:bg-white border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-fade-in">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-xl text-xs font-medium text-center transition ${
                    isActive 
                      ? 'bg-indigo-600 text-white font-semibold shadow-md' 
                      : 'bg-slate-900 dark:bg-slate-900 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-medium bg-slate-900 border border-slate-800 text-slate-200"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Download Resume PDF</span>
            </button>

            <Link
              to="/contact"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
