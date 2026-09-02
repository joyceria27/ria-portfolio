import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 max-w-lg w-full space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">HTTP 404 Exception</span>
          <h1 className="text-3xl font-extrabold text-slate-100">Page Not Found</h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            The requested route does not exist or has been relocated.
          </p>
        </div>

        <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-indigo-300 text-left">
          <code>&gt; Error: Route target undefined</code>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-semibold transition"
          >
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
