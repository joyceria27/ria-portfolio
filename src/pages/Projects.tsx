import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { MockupCrimeIntel } from '../components/MockupCrimeIntel';
import { MockupCriminalRecord } from '../components/MockupCriminalRecord';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = ['All', 'Java', 'PHP', 'MySQL', 'Web Development'];

  const filteredProjects = PROJECTS.filter(p => {
    if (selectedFilter === 'All') return true;
    return p.categories.includes(selectedFilter) || p.technologies.includes(selectedFilter);
  });

  return (
    <div className="space-y-16 pb-16 pt-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-widest">
          Software Portfolio & Engineering Projects
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
          Featured Academic <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Full-stack web applications and backend systems engineered during MCA & BCA coursework.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition ${
                selectedFilter === filter
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl hover:border-indigo-500/40 transition"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Project Details Column */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 text-xs font-mono">
                    {project.date}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono">
                    {project.type}
                  </span>
                  {project.performanceHighlight && (
                    <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-mono flex items-center">
                      <TrendingUp className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                      30%+ Query Speedup
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">{project.title}</h2>
                  <p className="text-xs text-indigo-400 font-mono mt-1">{project.subtitle}</p>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features Bullet List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Key Contributions & Architecture</h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {project.features.slice(0, 4).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-slate-950 text-slate-300 rounded-lg text-xs font-mono border border-slate-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="pt-4">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
                  >
                    <span>View Complete Project Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Project Mockup Representation Column */}
              <div className="lg:col-span-6">
                {project.mockupType === 'dashboard' ? (
                  <MockupCrimeIntel />
                ) : (
                  <MockupCriminalRecord />
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
