import React, { useState } from 'react';
import { Shield, Search, Database, Lock, CheckCircle2, TrendingUp } from 'lucide-react';

export const MockupCrimeIntel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'records' | 'analytics' | 'sql'>('records');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const sampleRecords = [
    { id: 'CR-2025-089', type: 'Cyber Intrusion', status: 'Under Investigation', priority: 'High', date: '2025-05-12', officer: 'Officer K. Sharma' },
    { id: 'CR-2025-074', type: 'Financial Anomaly', status: 'Resolved', priority: 'Medium', date: '2025-05-09', officer: 'Analyst R. Varma' },
    { id: 'CR-2025-061', type: 'Property Crime', status: 'Closed', priority: 'Low', date: '2025-05-02', officer: 'Officer S. Patil' },
    { id: 'CR-2025-045', type: 'Identity Theft', status: 'Under Investigation', priority: 'High', date: '2025-04-28', officer: 'Analyst M. Rao' },
  ];

  const filtered = sampleRecords.filter(r => 
    (filterCategory === 'All' || r.type.includes(filterCategory) || r.priority === filterCategory) &&
    (r.id.toLowerCase().includes(searchTerm.toLowerCase()) || r.type.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-sans text-xs sm:text-sm">
      {/* Mock Header Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5 mr-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <Shield className="w-4 h-4 text-indigo-400" />
          <span className="font-semibold text-slate-200 tracking-wide text-xs sm:text-sm">Crime Intel Trace v1.0</span>
          <span className="bg-indigo-950 text-indigo-300 border border-indigo-800 text-[10px] px-2 py-0.5 rounded-full font-mono">PHP + MySQL</span>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <span className="flex items-center text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-800/40">
            <Lock className="w-3 h-3 mr-1" /> Role-Based Auth Active
          </span>
          <span className="flex items-center text-cyan-400 bg-cyan-950/60 px-2 py-1 rounded border border-cyan-800/40 font-mono">
            <TrendingUp className="w-3 h-3 mr-1 text-cyan-400" /> SQL Queries: +30% Faster
          </span>
        </div>
      </div>

      {/* Dashboard Sub-nav & Controls */}
      <div className="p-4 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button 
            onClick={() => setActiveTab('records')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'records' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Records Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'analytics' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Analytics & Metrics
          </button>
          <button 
            onClick={() => setActiveTab('sql')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition ${activeTab === 'sql' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            SQL Optimization
          </button>
        </div>

        {/* Filter search inputs */}
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-48">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search case ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-slate-950 border border-slate-800 rounded-md text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <select 
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-md px-2 py-1.5 focus:outline-none"
          >
            <option value="All">All Priorities</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
          </select>
        </div>
      </div>

      {/* Main Display Body */}
      <div className="p-4 bg-slate-900/90">
        {activeTab === 'records' && (
          <div className="space-y-4">
            {/* Quick Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <p className="text-[11px] text-slate-400 font-medium">Total Cases Logged</p>
                <p className="text-lg font-bold text-slate-100 mt-1">1,482</p>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <p className="text-[11px] text-slate-400 font-medium">Active Investigation</p>
                <p className="text-lg font-bold text-amber-400 mt-1">324</p>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <p className="text-[11px] text-slate-400 font-medium">Resolved Cases</p>
                <p className="text-lg font-bold text-emerald-400 mt-1">1,158</p>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                <p className="text-[11px] text-slate-400 font-medium">Data Retrieval Speed</p>
                <p className="text-lg font-bold text-cyan-400 mt-1">30% Faster</p>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-slate-800">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 font-medium">
                    <th className="p-2.5">Case Reference</th>
                    <th className="p-2.5">Crime Type</th>
                    <th className="p-2.5">Priority</th>
                    <th className="p-2.5">Status</th>
                    <th className="p-2.5">Assigned Officer</th>
                    <th className="p-2.5">Logged Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono text-[12px]">
                  {filtered.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition">
                      <td className="p-2.5 font-bold text-indigo-400">{item.id}</td>
                      <td className="p-2.5 font-sans font-medium text-slate-200">{item.type}</td>
                      <td className="p-2.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          item.priority === 'High' ? 'bg-red-950 text-red-400 border border-red-800' :
                          item.priority === 'Medium' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                          'bg-slate-800 text-slate-300'
                        }`}>
                          {item.priority}
                        </span>
                      </td>
                      <td className="p-2.5 font-sans">
                        <span className="flex items-center text-slate-300">
                          <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-400" /> {item.status}
                        </span>
                      </td>
                      <td className="p-2.5 font-sans text-slate-400">{item.officer}</td>
                      <td className="p-2.5 text-slate-400">{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-3">
            <h4 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Crime Intelligence Distribution & Filters</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-900 rounded border border-slate-800">
                <span className="text-xs text-slate-300">Role-Based Access Hierarchy</span>
                <div className="mt-2 space-y-1.5 text-xs text-slate-400">
                  <div className="flex justify-between items-center p-1.5 bg-slate-950 rounded">
                    <span>Administrator</span>
                    <span className="text-emerald-400 font-mono">Full CRUD & System Config</span>
                  </div>
                  <div className="flex justify-between items-center p-1.5 bg-slate-950 rounded">
                    <span>Crime Analyst</span>
                    <span className="text-cyan-400 font-mono">Read/Filter & Report Export</span>
                  </div>
                  <div className="flex justify-between items-center p-1.5 bg-slate-950 rounded">
                    <span>Police Officer</span>
                    <span className="text-indigo-400 font-mono">Record Entry & Incident Logs</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-slate-900 rounded border border-slate-800">
                <span className="text-xs text-slate-300">Performance Improvement Metrics</span>
                <div className="mt-2 space-y-2">
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                      <span>Unoptimized SQL Query Time</span>
                      <span>142 ms</span>
                    </div>
                    <div className="w-full bg-slate-950 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-[85%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[11px] text-slate-300 mb-1 font-semibold">
                      <span>Optimized Indexed Query (Joyceria's Refactor)</span>
                      <span className="text-cyan-400">98 ms (+31% faster)</span>
                    </div>
                    <div className="w-full bg-slate-950 rounded-full h-2">
                      <div className="bg-cyan-500 h-2 rounded-full w-[55%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sql' && (
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-indigo-400 font-semibold pb-2 border-b border-slate-800">
              <span className="flex items-center"><Database className="w-4 h-4 mr-1.5" /> MySQL Relational Query Optimization</span>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded">Execution time: 0.0012 sec</span>
            </div>
            <pre className="text-emerald-400 bg-slate-900/80 p-3 rounded border border-slate-800 overflow-x-auto text-[11px] leading-relaxed">
{`-- Optimized Crime Filter & Joined Incident Query
SELECT c.case_id, c.crime_type, c.priority_level, c.incident_date, 
       o.badge_number, o.officer_name, a.status_name
FROM crime_records c
INNER JOIN officers o ON c.assigned_officer_id = o.id
INNER JOIN audit_status a ON c.status_id = a.id
WHERE c.incident_date >= '2025-01-01' 
  AND c.priority_level IN ('High', 'Medium')
INDEXED BY (idx_incident_date_priority);`}
            </pre>
            <p className="text-slate-400 text-[11px] font-sans">
              <strong className="text-slate-200">Optimization Note:</strong> Added compound indexing on <code className="text-indigo-300 bg-slate-900 px-1 rounded">(incident_date, priority_level)</code> and eliminated N+1 select loops in PHP controller layers.
            </p>
          </div>
        )}
      </div>

      {/* Footer Banner */}
      <div className="bg-slate-950 px-4 py-2 text-center text-slate-500 text-[11px] border-t border-slate-800">
        Conceptual Dashboard UI Visualization — Designed for Crime Intel Trace (May 2025)
      </div>
    </div>
  );
};
