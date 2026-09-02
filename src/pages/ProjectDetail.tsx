import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import { ArrowLeft, CheckCircle2, TrendingUp, Code2 } from 'lucide-react';
import { MockupCrimeIntel } from '../components/MockupCrimeIntel';
import { MockupCriminalRecord } from '../components/MockupCriminalRecord';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-slate-100">Project Not Found</h1>
        <p className="text-slate-400 text-sm">The project you are looking for does not exist or has been moved.</p>
        <Link to="/projects" className="inline-flex items-center space-x-2 px-5 py-2.5 bg-indigo-600 text-white text-xs font-semibold rounded-xl">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-16 pt-8">
      
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-800 transition"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-400" />
          <span>Back to All Projects</span>
        </button>
      </div>

      {/* Project Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
            {project.date}
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
            {project.type}
          </span>
          {project.performanceHighlight && (
            <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 font-semibold flex items-center">
              <TrendingUp className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              {project.performanceHighlight}
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
          {project.title}
        </h1>
        <p className="text-lg text-indigo-400 font-mono font-medium max-w-3xl">
          {project.subtitle}
        </p>
      </div>

      {/* Main Grid: Interactive Mockup + Technical Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Mockup Visualization Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
              Conceptual Application Interface & Data Architecture
            </h3>
            <span className="text-[11px] text-indigo-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
              Interactive Representation
            </span>
          </div>

          {project.mockupType === 'dashboard' ? (
            <MockupCrimeIntel />
          ) : (
            <MockupCriminalRecord />
          )}
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Key Features & Engineering Contributions */}
          <div className="lg:col-span-8 space-y-8">
            
            <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
                <Code2 className="w-5 h-5 text-indigo-400" />
                <span>Project Description & Context</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Key Features & Development Contributions</span>
              </h3>

              <div className="space-y-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800/80 flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Project Metadata & Tech Stack */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-widest font-mono">
                Project Specs
              </h3>

              <div className="space-y-3 text-xs">
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block">Project Title</span>
                  <span className="font-bold text-slate-200">{project.title}</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block">Category / Type</span>
                  <span className="font-semibold text-indigo-400">{project.type}</span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block">Date / Timeline</span>
                  <span className="font-mono text-slate-300">{project.date}</span>
                </div>

                {project.id === 'crime-intel-trace' && (
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <span className="text-slate-500 block">Team Collaboration</span>
                    <span className="font-semibold text-emerald-400">Team of 3 (Git & Trello)</span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 block mb-2 font-mono">Technologies Used</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-slate-950 text-indigo-300 border border-slate-800 rounded text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-950/90 rounded-2xl border border-slate-800 text-center space-y-2">
              <p className="text-xs text-slate-400">
                Interested in learning more about this project's code structure or database design?
              </p>
              <Link to="/contact" className="inline-block text-xs font-bold text-indigo-400 hover:text-indigo-300">
                Contact Joyceria →
              </Link>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
