import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true; // Default to dark developer aesthetic
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark and Light Mode"
      className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-300 dark:text-slate-200 border border-slate-700/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600" />
      )}
    </button>
  );
};
