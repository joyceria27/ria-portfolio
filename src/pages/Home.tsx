import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Download, Mail, Phone, Code2, 
  CheckCircle2, Award, GraduationCap, Sparkles,
  Copy, Check
} from 'lucide-react';
import { LinkedinIcon } from '../components/Icons';
import { PERSONAL_INFO, SKILL_GROUPS, CERTIFICATIONS, EDUCATION_TIMELINE, EXPERIENCE_DATA } from '../data/portfolioData';
import { MockupCrimeIntel } from '../components/MockupCrimeIntel';

interface HomeProps {
  onOpenResumeModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-24 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 overflow-hidden bg-grid-pattern">
        
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 dark:bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Status Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 dark:bg-indigo-950/80 light:bg-indigo-50 border border-indigo-800/60 dark:border-indigo-800/60 light:border-indigo-200 text-indigo-300 dark:text-indigo-300 light:text-indigo-700 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
                <span>Presidency University MCA Student (2025–2027)</span>
              </div>

              {/* Title & Headline */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold tracking-widest text-indigo-400 uppercase font-mono">
                  {PERSONAL_INFO.title}
                </h2>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-tight">
                  Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
                </h1>
              </div>

              {/* Short Intro */}
              <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {PERSONAL_INFO.shortBio}
              </p>

              {/* Core Skill Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 font-mono text-xs">
                {['Java', 'Python', 'MySQL', 'PHP', 'JavaScript', 'OOP & DBMS', 'AI/ML'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  to="/projects"
                  className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-50 text-slate-200 dark:text-slate-200 light:text-slate-800 font-semibold text-sm border border-slate-800 dark:border-slate-800 light:border-slate-300 transition"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>Contact Me</span>
                </Link>

                <button
                  onClick={onOpenResumeModal}
                  className="flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 hover:bg-slate-800 text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium text-sm border border-slate-800 dark:border-slate-800 light:border-slate-300 transition"
                >
                  <Download className="w-4 h-4 text-indigo-400" />
                  <span>Download Resume</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="pt-6 flex items-center justify-center lg:justify-start space-x-4 text-slate-400">
                <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Connect:</span>
                
                <a 
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 border border-slate-800 transition"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 border border-slate-800 transition"
                  title={PERSONAL_INFO.email}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a 
                  href={`tel:${PERSONAL_INFO.phone}`}
                  aria-label="Call Phone"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-indigo-400 border border-slate-800 transition"
                  title={PERSONAL_INFO.phoneFormatted}
                >
                  <Phone className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition flex items-center space-x-1 text-xs"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Right Card / Interactive Visual Code Card */}
            <div className="lg:col-span-5">
              <div className="relative glass-panel rounded-2xl p-6 border border-slate-800/80 shadow-2xl space-y-6">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-mono text-slate-400 ml-2">JoyceriaGonsalves.java</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Compiled: OK
                  </span>
                </div>

                {/* Simulated Java Code Snippet */}
                <div className="font-mono text-xs space-y-2 text-slate-300 overflow-x-auto">
                  <p className="text-slate-500">// Software Engineer Candidate Profile</p>
                  <p><span className="text-indigo-400">public class</span> <span className="text-amber-300 font-bold">JoyceriaGonsalves</span> {'{'}</p>
                  <p className="pl-4"><span className="text-indigo-400">private String</span> degree = <span className="text-emerald-300">"MCA (2025-2027)"</span>;</p>
                  <p className="pl-4"><span className="text-indigo-400">private double</span> currentCGPA = <span className="text-cyan-300">8.59</span>;</p>
                  <p className="pl-4"><span className="text-indigo-400">private double</span> bcaCGPA = <span className="text-cyan-300">8.36</span>;</p>
                  <p className="pl-4"><span className="text-indigo-400">private String[]</span> coreSkills = {'{'}</p>
                  <p className="pl-8 text-amber-200">"Java", "Python", "SQL", "MySQL", "PHP", "OOP", "DBMS"</p>
                  <p className="pl-4">{'};'}</p>
                  <p className="pl-4"><span className="text-indigo-400">public void</span> <span className="text-cyan-400">buildSolutions</span>() {'{'}</p>
                  <p className="pl-8 text-slate-400">// Crime Intel Trace & Criminal Record System</p>
                  <p className="pl-8 text-emerald-400">System.out.println("Query Optimization: +30% Faster");</p>
                  <p className="pl-4">{'}'}</p>
                  <p>{'}'}</p>
                </div>

                {/* Quick Highlights Badge Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center">
                    <span className="text-lg font-bold text-indigo-400">8.59</span>
                    <p className="text-[11px] text-slate-400">MCA Current CGPA</p>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center">
                    <span className="text-lg font-bold text-cyan-400">8.36</span>
                    <p className="text-[11px] text-slate-400">BCA CGPA</p>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center">
                    <span className="text-lg font-bold text-emerald-400">2</span>
                    <p className="text-[11px] text-slate-400">Full Academic Projects</p>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center">
                    <span className="text-lg font-bold text-amber-400">6</span>
                    <p className="text-[11px] text-slate-400">Tech Certifications</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: SHORT ABOUT HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>About Joyceria</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Driven MCA Student & Backend-Focused Developer
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-400 font-mono">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Presidency University MCA</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Relational Database Architect</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>AI/ML Fundamentals</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/about"
                className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 border border-indigo-500/40 text-xs font-semibold transition"
              >
                <span>Read Full About Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURED PROJECTS HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-widest">Portfolio Showcase</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">Featured Academic Projects</h2>
          </div>
          <Link to="/projects" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1">
            <span>View All Projects Detail</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Project Interactive Preview Card 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-800">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800 text-[11px] font-mono">
                May 2025 • Full-Stack Web
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-mono">
                +30% SQL Speedup
              </span>
            </div>

            <h3 className="text-2xl font-bold text-slate-100">Crime Intel Trace</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              A web-based crime intelligence application engineered with PHP and MySQL for secure crime record management, role-based access control, and decision support analytics.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Designed relational MySQL schema with role-based auth (Police, Analyst, Admin).</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Documented 30%+ improvement in SQL data retrieval query speed.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {['PHP', 'MySQL', 'XAMPP', 'Git', 'Trello'].map(t => (
                <span key={t} className="px-2.5 py-1 bg-slate-950 text-slate-300 rounded-md text-[11px] font-mono border border-slate-800">
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Link 
                to="/projects/crime-intel-trace"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition"
              >
                <span>View Full Details & Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <MockupCrimeIntel />
          </div>
        </div>
      </section>

      {/* SECTION 3: SKILLS SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-widest">Technical Competencies</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1">Core Skillset & Stack</h2>
          </div>
          <Link to="/skills" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1">
            <span>Explore Skills Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={idx} className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3 hover:border-indigo-500/40 transition">
              <h3 className="text-sm font-bold text-indigo-300 font-mono flex items-center space-x-2">
                <span>{group.category}</span>
              </h3>
              <p className="text-[11px] text-slate-400">{group.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {group.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-2.5 py-1 bg-slate-950 text-slate-200 rounded-lg text-xs font-medium border border-slate-800 hover:border-indigo-500/60 transition"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: EDUCATION & CERTIFICATIONS SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Education Snapshot */}
          <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <h3 className="text-xl font-bold text-slate-100">Education Timeline</h3>
              </div>
              <Link to="/education" className="text-xs font-semibold text-indigo-400 hover:text-indigo-300">
                View Timeline →
              </Link>
            </div>

            <div className="space-y-4">
              {EDUCATION_TIMELINE.map((edu) => (
                <div key={edu.id} className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-indigo-400 font-mono font-semibold">{edu.duration}</span>
                    <span className="px-2 py-0.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded font-mono text-[11px]">
                      CGPA: {edu.cgpa}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-100">{edu.degree}</h4>
                  <p className="text-xs text-slate-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Snapshot */}
          <div className="bg-slate-900/80 p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h3 className="text-xl font-bold text-slate-100">6 Verified Certifications</h3>
              </div>
              <Link to="/certifications" className="text-xs font-semibold text-amber-400 hover:text-amber-300">
                View All Wall →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.slice(0, 4).map((cert) => (
                <div key={cert.id} className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs space-y-1">
                  <span className="text-[10px] text-amber-400 font-mono uppercase">{cert.issuer}</span>
                  <h4 className="font-bold text-slate-200 line-clamp-1">{cert.title}</h4>
                  <span className="text-[10px] text-slate-500 block">{cert.category}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-400 text-center">
              Includes Infosys Springboard & Forage Mastercard / AWS simulations.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 5: OPEN TO OPPORTUNITIES BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 relative overflow-hidden text-center sm:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="px-3 py-1 bg-indigo-900/60 text-indigo-300 border border-indigo-700/60 rounded-full text-xs font-mono">
                Career Availability Status
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                Open to Software Engineering & Development Roles
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
                {EXPERIENCE_DATA.opportunityCard.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Link
                to="/contact"
                className="flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs rounded-xl shadow-xl shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch With Joyceria</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
