import React, { useState } from 'react';
import { CERTIFICATIONS, type Certification } from '../data/portfolioData';
import { Award, ExternalLink, CheckCircle2, Info } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const getIssuerBadge = (issuer: string) => {
    if (issuer.includes('Infosys')) {
      return <span className="bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px] font-mono px-2.5 py-0.5 rounded-full">Infosys Springboard</span>;
    }
    if (issuer.includes('Mastercard')) {
      return <span className="bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-mono px-2.5 py-0.5 rounded-full">Forage (Mastercard)</span>;
    }
    return <span className="bg-cyan-950 text-cyan-300 border border-cyan-800 text-[10px] font-mono px-2.5 py-0.5 rounded-full">Forage Job Simulation</span>;
  };

  return (
    <div className="space-y-12 pb-16 pt-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-widest">
          Verified Credentials & Simulations
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
          Professional <span className="gradient-text">Certifications</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          6 industry-relevant technical certifications earned across Infosys Springboard and Forage virtual job simulations.
        </p>
      </div>

      {/* Certification Grid Wall */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div 
              key={cert.id}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-5 shadow-xl hover:border-amber-500/40 hover:-translate-y-1 transition group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 group-hover:border-amber-500/30 transition">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  {getIssuerBadge(cert.issuer)}
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{cert.category}</span>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-300 transition leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400">Issuing Organization: <strong className="text-slate-300">{cert.issuer}</strong></p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-500 font-mono flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                  {cert.datePlaceholder}
                </span>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-medium transition flex items-center space-x-1"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Editable Placeholder Details Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 relative text-slate-100">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">{selectedCert.title}</h3>
                <p className="text-xs text-amber-400 font-mono">{selectedCert.issuer}</p>
              </div>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
              <div className="flex justify-between">
                <span className="text-slate-400">Category:</span>
                <span className="font-semibold text-slate-200">{selectedCert.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="font-mono text-emerald-400">Verified Credentials</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-800">
                <span className="text-slate-400">Certificate Link:</span>
                <span className="font-mono text-slate-400">Editable Placeholder</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed bg-slate-950/50 p-3 rounded-lg border border-slate-800/60">
              <Info className="w-3.5 h-3.5 text-indigo-400 inline mr-1" />
              To attach direct PDF or verification URL links for this credential, simply update the <code className="text-amber-300 font-mono">certificateUrl</code> property in <code className="text-indigo-300 font-mono">src/data/portfolioData.ts</code>.
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
