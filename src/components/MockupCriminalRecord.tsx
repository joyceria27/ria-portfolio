import React, { useState } from 'react';
import { Terminal, Database, PlusCircle, Search, Edit3, CheckCircle2, FileCode2, Layers } from 'lucide-react';

export const MockupCriminalRecord: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'gui' | 'console' | 'oop'>('gui');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const initialRecords = [
    { id: '1001', name: 'Alexander Vance', crime: 'Grand Larceny', age: 34, status: 'In Custody', courtDate: '2025-06-15' },
    { id: '1002', name: 'Marcus Sterling', crime: 'Financial Fraud', age: 41, status: 'On Bail', courtDate: '2025-07-02' },
    { id: '1003', name: 'Elena Rostova', crime: 'Cyber Breaches', age: 29, status: 'Under Trial', courtDate: '2025-06-28' },
  ];

  const records = initialRecords;

  const handleAction = (actionName: string) => {
    setNotification(`${actionName} executed successfully via JDBC MySQL Connector!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredRecords = records.filter(r => 
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.id.includes(searchQuery) ||
    r.crime.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl font-sans text-xs sm:text-sm">
      {/* Window Title Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <FileCode2 className="w-4 h-4 text-amber-400 ml-2" />
          <span className="font-semibold text-slate-200 tracking-wide text-xs sm:text-sm">Criminal Record Management System</span>
          <span className="bg-amber-950 text-amber-300 border border-amber-800 text-[10px] px-2 py-0.5 rounded-full font-mono">Java + MySQL JDBC</span>
        </div>

        <div className="flex items-center space-x-2 text-[11px] font-mono">
          <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40 flex items-center">
            <Database className="w-3 h-3 mr-1" /> JDBC Connected
          </span>
          <span className="text-slate-400 hidden sm:inline">MCA 1st Sem Academic Project</span>
        </div>
      </div>

      {/* Navigation Sub-bar */}
      <div className="p-3 bg-slate-950/60 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-800">
          <button 
            onClick={() => setActiveTab('gui')}
            className={`px-3 py-1 rounded text-xs font-medium transition ${activeTab === 'gui' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Management GUI
          </button>
          <button 
            onClick={() => setActiveTab('console')}
            className={`px-3 py-1 rounded text-xs font-medium transition ${activeTab === 'console' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Terminal / Console View
          </button>
          <button 
            onClick={() => setActiveTab('oop')}
            className={`px-3 py-1 rounded text-xs font-medium transition ${activeTab === 'oop' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Java Class Structure
          </button>
        </div>

        <div className="text-[11px] text-slate-400">
          Backend Architecture: <span className="text-amber-400 font-mono">DAO Pattern & MySQL</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 bg-slate-900/90">
        {notification && (
          <div className="mb-3 p-2.5 bg-emerald-950/90 border border-emerald-700 text-emerald-300 rounded text-xs flex items-center animate-fade-in">
            <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0" />
            <span>{notification}</span>
          </div>
        )}

        {activeTab === 'gui' && (
          <div className="space-y-4">
            {/* CRUD Operations Bar */}
            <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <button 
                  onClick={() => handleAction('Add Record (INSERT INTO criminal_records)')}
                  className="flex items-center space-x-1 bg-amber-600 hover:bg-amber-500 text-slate-950 font-semibold px-3 py-1.5 rounded text-xs transition"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>Add New Record</span>
                </button>
                <button 
                  onClick={() => handleAction('Search Operation (SELECT WHERE id)')}
                  className="flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded text-xs border border-slate-700 transition"
                >
                  <Search className="w-3.5 h-3.5 text-amber-400" />
                  <span>Search Record</span>
                </button>
                <button 
                  onClick={() => handleAction('Update Record (UPDATE SET)')}
                  className="flex items-center space-x-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded text-xs border border-slate-700 transition"
                >
                  <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Update Details</span>
                </button>
              </div>

              {/* Instant Search Bar */}
              <div className="relative w-full sm:w-56">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-500" />
                <input 
                  type="text" 
                  placeholder="Filter name or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-slate-900 border border-slate-800 rounded text-xs text-slate-200 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Records Data Table */}
            <div className="overflow-x-auto rounded-lg border border-slate-800">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-950 text-slate-400 border-b border-slate-800 font-medium">
                    <th className="p-2.5 font-mono">Record ID</th>
                    <th className="p-2.5">Subject Name</th>
                    <th className="p-2.5">Offense / Charge</th>
                    <th className="p-2.5 font-mono">Age</th>
                    <th className="p-2.5">Legal Custody Status</th>
                    <th className="p-2.5">Hearing Date</th>
                    <th className="p-2.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300 font-mono text-[12px]">
                  {filteredRecords.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-800/40 transition">
                      <td className="p-2.5 font-bold text-amber-400">#{r.id}</td>
                      <td className="p-2.5 font-sans font-semibold text-slate-100">{r.name}</td>
                      <td className="p-2.5 font-sans text-slate-300">{r.crime}</td>
                      <td className="p-2.5">{r.age}</td>
                      <td className="p-2.5 font-sans">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          r.status === 'In Custody' ? 'bg-red-950 text-red-400 border border-red-800' :
                          r.status === 'On Bail' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                          'bg-indigo-950 text-indigo-400 border border-indigo-800'
                        }`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="p-2.5 text-slate-400">{r.courtDate}</td>
                      <td className="p-2.5 text-right space-x-1 font-sans">
                        <button 
                          onClick={() => handleAction(`Edit Record #${r.id}`)}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[10px]"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleAction(`Delete Record #${r.id}`)}
                          className="px-2 py-1 bg-red-950 hover:bg-red-900 text-red-300 rounded text-[10px]"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'console' && (
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-amber-400 pb-2 border-b border-slate-800 font-semibold">
              <span className="flex items-center"><Terminal className="w-4 h-4 mr-1.5" /> Java Console & JDBC Query Execution</span>
              <span className="text-[10px] text-slate-500">System.out / PreparedStatements</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded border border-slate-800 text-[11px] text-emerald-400 space-y-1 font-mono">
              <p className="text-slate-400">// Connecting to MySQL Database 'criminal_db'...</p>
              <p className="text-cyan-400">[JDBC] Connection established: com.mysql.cj.jdbc.ConnectionImpl@6b71217e</p>
              <p>[SYSTEM] Initializing Main Menu...</p>
              <p className="text-amber-300">1. Add Criminal Record</p>
              <p className="text-amber-300">2. Search Criminal Record by ID</p>
              <p className="text-amber-300">3. Update Criminal Record Details</p>
              <p className="text-amber-300">4. Delete Criminal Record</p>
              <p className="text-amber-300">5. Display All Criminal Records</p>
              <p className="text-slate-400 mt-2">// Executing Query: SELECT * FROM criminals WHERE record_id = ?</p>
              <p className="text-emerald-300">[SUCCESS] 1 row retrieved in 0.003s. Mapping to CriminalDTO object...</p>
            </div>
          </div>
        )}

        {activeTab === 'oop' && (
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
            <div className="flex items-center justify-between text-amber-400 pb-2 border-b border-slate-800 font-semibold">
              <span className="flex items-center"><Layers className="w-4 h-4 mr-1.5" /> OOP Architecture & Model Structure</span>
              <span className="text-[10px] text-slate-400">Encapsulation & DAO Pattern</span>
            </div>
            <pre className="text-amber-300 bg-slate-900/90 p-3 rounded border border-slate-800 overflow-x-auto text-[11px] leading-relaxed">
{`public class CriminalRecord {
    private int recordId;
    private String name;
    private String crimeType;
    private String status;

    public CriminalRecord(int recordId, String name, String crimeType, String status) {
        this.recordId = recordId;
        this.name = name;
        this.crimeType = crimeType;
        this.status = status;
    }

    // Encapsulated Getters & Setters
    public int getRecordId() { return recordId; }
    public String getName() { return name; }
    public String getCrimeType() { return crimeType; }
}`}
            </pre>
          </div>
        )}
      </div>

      {/* Footer Banner */}
      <div className="bg-slate-950 px-4 py-2 text-center text-slate-500 text-[11px] border-t border-slate-800">
        Conceptual Application UI Visualization — MCA First Semester Academic Project (Presidency University)
      </div>
    </div>
  );
};
