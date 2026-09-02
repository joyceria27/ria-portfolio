import React from 'react';
import { FileText, Download, X, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.resumePath;
    link.download = 'Joyceria_Gonsalves_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative text-slate-100 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          aria-label="Close resume dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-indigo-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-100">{PERSONAL_INFO.name}</h3>
            <p className="text-xs text-indigo-400 font-semibold tracking-wider">{PERSONAL_INFO.title}</p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <div>
            <span className="font-semibold text-indigo-300 block mb-1">Education Summary</span>
            <p>• MCA: Presidency University, Bangalore (2025–2027) | Current CGPA: 8.59</p>
            <p>• BCA: Edurite College of Management Studies (2022–2025) | CGPA: 8.36</p>
          </div>

          <div>
            <span className="font-semibold text-indigo-300 block mb-1">Key Technical Stack</span>
            <p>• Languages: Java, Python, SQL, MySQL, PHP, JavaScript, C, C++</p>
            <p>• Core CS: DSA, OOP, DBMS, Operating Systems, Web Dev, AI/ML Basics</p>
          </div>

          <div>
            <span className="font-semibold text-indigo-300 block mb-1">Featured Academic Projects</span>
            <p>• Crime Intel Trace (PHP, MySQL, XAMPP, Git) — 30%+ Query Speedup</p>
            <p>• Criminal Record Management System (Java, MySQL, OOP)</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Official Resume File: <code className="text-indigo-300 bg-slate-950 px-1.5 py-0.5 rounded font-mono">/public/resume.pdf</code></span>
          </div>

          <div className="flex space-x-2 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium rounded-xl shadow-lg shadow-indigo-600/25 transition transform active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
