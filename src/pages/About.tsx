import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Cpu, Database, Download, Mail, BookOpen } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onOpenResumeModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResumeModal }) => {
  return (
    <div className="space-y-16 pb-16 pt-8">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-widest">
          Developer Profile & Academic Background
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
          About <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Aspiring Software Engineer currently pursuing Master of Computer Applications (MCA) at Presidency University, Bangalore.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-1 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <div className="w-full h-full bg-slate-950 rounded-xl flex items-center justify-center">
                    <Code2 className="w-8 h-8 text-indigo-400" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-100">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-indigo-400 font-mono font-semibold uppercase">{PERSONAL_INFO.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2 text-xs text-slate-300">
                <div className="flex justify-between items-center py-1 border-b border-slate-800">
                  <span className="text-slate-400">Current Program</span>
                  <span className="font-semibold text-slate-100">MCA (2025–2027)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800">
                  <span className="text-slate-400">University</span>
                  <span className="font-semibold text-slate-100">Presidency University</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800">
                  <span className="text-slate-400">MCA CGPA</span>
                  <span className="font-mono font-bold text-indigo-400">8.59 / 10.0</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">BCA CGPA</span>
                  <span className="font-mono font-bold text-cyan-400">8.36 / 10.0</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={onOpenResumeModal}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs rounded-xl shadow-lg shadow-indigo-600/25 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </button>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-medium rounded-xl transition"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>Get In Touch</span>
                </Link>
              </div>

            </div>
          </div>

          {/* Right Column: Professional Summary & Focus Areas */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Summary Box */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-100 flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>Professional Summary</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* MCA Journey & Technical Focus */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-100">MCA Journey & Academic Growth</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Currently in my first year of MCA at <strong className="text-indigo-300">Presidency University, Bangalore</strong>, I am deepening my understanding of core computer science fundamentals, backend software architecture, and artificial intelligence. My undergraduate degree (BCA) at Edurite College of Management Studies provided a robust grounding in Java, Python, Web Development, and relational databases.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-2 text-indigo-400 font-semibold text-xs">
                    <Database className="w-4 h-4" />
                    <span>Software Development & DBMS</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Focused on writing clean Object-Oriented code, designing optimized relational database schemas (MySQL), and building full-stack applications like Crime Intel Trace (+30% query performance optimization).
                  </p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2">
                  <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-xs">
                    <Cpu className="w-4 h-4" />
                    <span>AI/ML Fundamentals</span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Exploring Artificial Intelligence and Machine Learning basics through coursework and specialized certifications (AI with Python, Deep Learning for Developers via Infosys Springboard).
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* QUICK FACTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-100">Academic & Project Quick Facts</h2>
            <p className="text-xs text-slate-400 mt-1">Verified academic milestones and credentials</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center space-y-2">
              <span className="text-xs font-mono text-indigo-400 font-semibold uppercase">MCA Program</span>
              <p className="text-2xl font-extrabold text-slate-100">2025 – 2027</p>
              <p className="text-xs text-slate-400">Current CGPA: <strong className="text-indigo-400">8.59</strong></p>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">BCA Degree</span>
              <p className="text-2xl font-extrabold text-slate-100">2022 – 2025</p>
              <p className="text-xs text-slate-400">BCA CGPA: <strong className="text-cyan-400">8.36</strong></p>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">Full Projects</span>
              <p className="text-2xl font-extrabold text-slate-100">2</p>
              <p className="text-xs text-slate-400">Crime Intel Trace & Criminal Record System</p>
            </div>

            <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 text-center space-y-2">
              <span className="text-xs font-mono text-amber-400 font-semibold uppercase">Certifications</span>
              <p className="text-2xl font-extrabold text-slate-100">6</p>
              <p className="text-xs text-slate-400">Infosys Springboard & Forage Simulations</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
