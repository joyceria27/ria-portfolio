import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Sparkles, Mail } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16 pt-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-widest">
          Career Profile & Open Availability
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
          Experience & <span className="gradient-text">Internships</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Currently preparing for software engineering roles through intensive MCA studies, full-stack projects, and technical certifications.
        </p>
      </div>

      {/* Main Status Message Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl text-center">
          
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto">
            <Briefcase className="w-6 h-6" />
          </div>

          <div className="space-y-2 max-w-xl mx-auto">
            <span className="px-3 py-1 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-full text-xs font-mono">
              Academic & Practical Focus
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-100">Current Experience Status</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              "{EXPERIENCE_DATA.statusMessage}"
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-slate-300">
              <span className="font-bold text-indigo-400 block mb-1">Academic Projects</span>
              <p className="text-[11px] text-slate-400">Crime Intel Trace & Criminal Record System</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-slate-300">
              <span className="font-bold text-cyan-400 block mb-1">Hands-On Stack</span>
              <p className="text-[11px] text-slate-400">Java, Python, PHP, MySQL, SQL Optimization</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-slate-300">
              <span className="font-bold text-emerald-400 block mb-1">Certifications</span>
              <p className="text-[11px] text-slate-400">6 Industry Credentials (Infosys & Forage)</p>
            </div>
          </div>

        </div>
      </div>

      {/* "Open to Opportunities" Card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-indigo-800/40 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-indigo-800/30 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1" /> Open To Opportunities
              </span>
              <h3 className="text-2xl font-bold text-slate-100">
                {EXPERIENCE_DATA.opportunityCard.title}
              </h3>
            </div>

            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </Link>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {EXPERIENCE_DATA.opportunityCard.description}
          </p>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Target Role Areas</span>
            <div className="flex flex-wrap gap-2">
              {EXPERIENCE_DATA.opportunityCard.tags.map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 bg-slate-950/80 text-indigo-300 border border-indigo-800/60 rounded-xl text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Note for future experience additions */}
      <div className="max-w-2xl mx-auto px-4 text-center">
        <p className="text-xs text-slate-500 font-mono">
          Note for recruiters: This section is modularly structured in <code className="text-indigo-400">src/data/portfolioData.ts</code> and ready to display internship & work experience entries as Joyceria continues her professional journey.
        </p>
      </div>

    </div>
  );
};
