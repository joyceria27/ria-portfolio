import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, Copy, Check, Code2 } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs sm:text-sm pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Summary Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-bold text-slate-100 text-lg">{PERSONAL_INFO.name}</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              {PERSONAL_INFO.shortBio} Pursuing MCA at Presidency University, Bangalore with hands-on focus on Java, Python, Web Development, MySQL, and AI/ML technologies.
            </p>

            {/* Quick Action Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 transition text-xs"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-slate-300 transition text-xs"
              >
                <span>View Resume Summary</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition">About Me</Link></li>
              <li><Link to="/skills" className="hover:text-indigo-400 transition">Technical Skills</Link></li>
              <li><Link to="/projects" className="hover:text-indigo-400 transition">Featured Projects</Link></li>
              <li><Link to="/certifications" className="hover:text-indigo-400 transition">Certifications</Link></li>
              <li><Link to="/education" className="hover:text-indigo-400 transition">Education Timeline</Link></li>
              <li><Link to="/experience" className="hover:text-indigo-400 transition">Experience & Opportunities</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details & Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Direct Contact</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </li>
              <li>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="flex items-center space-x-2 text-slate-300 hover:text-indigo-400 transition"
                >
                  <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${PERSONAL_INFO.phone}`} 
                  className="flex items-center space-x-2 text-slate-300 hover:text-indigo-400 transition"
                >
                  <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>{PERSONAL_INFO.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a 
                  href={PERSONAL_INFO.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-2 text-slate-300 hover:text-indigo-400 transition"
                >
                  <LinkedinIcon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Scroll to Top */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Joyceria Gonsalves. Built with React, TypeScript & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-full border border-slate-800 transition"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
