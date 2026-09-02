import React, { useState } from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Code2, Database, Cpu, Wrench, CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming Languages', 'Database', 'Core Concepts', 'Tools & Environments'];

  const filteredGroups = SKILL_GROUPS.filter(g => 
    selectedCategory === 'All' || g.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes('Programming')) return <Code2 className="w-5 h-5 text-indigo-400" />;
    if (categoryName.includes('Database')) return <Database className="w-5 h-5 text-cyan-400" />;
    if (categoryName.includes('Concepts')) return <Cpu className="w-5 h-5 text-emerald-400" />;
    return <Wrench className="w-5 h-5 text-amber-400" />;
  };

  return (
    <div className="space-y-12 pb-16 pt-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-widest">
          Technical Inventory
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
          Skills & <span className="gradient-text">Competencies</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Centralized inventory of programming languages, databases, core computer science concepts, and development tools.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skill Cards Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl hover:border-indigo-500/40 transition"
            >
              <div className="flex items-center space-x-3 pb-4 border-b border-slate-800">
                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">{group.category}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{group.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-3.5 bg-slate-950/80 rounded-2xl border border-slate-800/80 hover:border-indigo-500/50 transition flex items-center justify-between group"
                  >
                    <div className="flex items-center space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" />
                      <span className="font-semibold text-slate-200 text-xs sm:text-sm">{skill.name}</span>
                    </div>
                    {skill.tag && (
                      <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/50">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Note Banner on Verified Resume Data */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-4 bg-slate-950/60 rounded-2xl border border-slate-800/80 text-xs text-slate-400 space-y-1">
          <p className="text-slate-300 font-semibold">Strict Verification Guarantee</p>
          <p>Skill entries are categorized directly from Joyceria Gonsalves' verified MCA resume. No artificial proficiency ratings or fabricated percentages are listed.</p>
        </div>
      </div>

    </div>
  );
};
