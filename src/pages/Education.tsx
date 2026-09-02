import React from 'react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';
import { GraduationCap, MapPin, CheckCircle2, Calendar } from 'lucide-react';

export const EducationPage: React.FC = () => {
  return (
    <div className="space-y-16 pb-16 pt-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-widest">
          Academic Foundation & Progression
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
          Education <span className="gradient-text">Timeline</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Academic achievements in Master of Computer Applications and Bachelor of Computer Applications.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12 py-4">
          
          {EDUCATION_TIMELINE.map((edu) => (
            <div key={edu.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-indigo-500 flex items-center justify-center group-hover:scale-110 transition shadow-lg shadow-indigo-500/20">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
              </div>

              {/* Card Container */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl hover:border-indigo-500/40 transition">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span className="text-xs font-mono font-bold text-indigo-300">{edu.duration}</span>
                  </div>

                  <span className="px-3 py-1 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-full font-mono text-xs font-semibold">
                    CGPA: {edu.cgpa}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">{edu.degree}</h3>
                  <div className="flex items-center space-x-2 text-slate-400 text-xs sm:text-sm mt-1">
                    <span className="font-semibold text-slate-200">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center text-slate-400">
                      <MapPin className="w-3.5 h-3.5 mr-1 text-slate-500" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">Academic Focus & Milestones</span>
                  <div className="space-y-2">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
};
