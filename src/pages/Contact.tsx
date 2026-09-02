import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, AlertCircle, Info } from 'lucide-react';
import { LinkedinIcon } from '../components/Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 800);
  };

  const handleMailto = () => {
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Joyceria,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="space-y-16 pb-16 pt-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-widest flex items-center justify-center">
          <Sparkles className="w-3.5 h-3.5 mr-1" /> Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100">
          Contact <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>
        <p className="text-slate-300 text-base sm:text-lg font-medium italic">
          "Let's build something meaningful together."
        </p>
      </div>

      {/* Main Grid: Contact Details & Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">Contact Details</h3>
                <p className="text-xs text-slate-400">
                  Feel free to reach out directly via email, phone, or LinkedIn.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Location */}
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-start space-x-3 text-xs">
                  <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 block font-mono">Location</span>
                    <span className="font-semibold text-slate-200 text-sm">{PERSONAL_INFO.location}</span>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-start justify-between gap-2 text-xs">
                  <div className="flex items-start space-x-3">
                    <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-500 block font-mono">Email Address</span>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="font-semibold text-slate-200 hover:text-indigo-400 transition text-sm">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg border border-slate-800 transition"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-indigo-400" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-start space-x-3 text-xs">
                  <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 block font-mono">Phone Number</span>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="font-semibold text-slate-200 hover:text-indigo-400 transition text-sm">
                      {PERSONAL_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex items-start space-x-3 text-xs">
                  <div className="p-2.5 bg-indigo-500/10 rounded-xl text-indigo-400">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-slate-500 block font-mono">LinkedIn Profile</span>
                    <a 
                      href={PERSONAL_INFO.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-semibold text-slate-200 hover:text-indigo-400 transition text-sm truncate block max-w-[200px] sm:max-w-xs"
                    >
                      {PERSONAL_INFO.linkedin}
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-slate-100">Send Me a Message</h3>
                <p className="text-xs text-slate-400">
                  Fill out the form below to initiate contact.
                </p>
              </div>

              {submitSuccess ? (
                <div className="p-6 bg-slate-950 border border-emerald-800/80 rounded-2xl space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-100">Form Validation Passed!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, <strong className="text-emerald-400">{formData.name}</strong>. Your message content has been validated.
                  </p>

                  <div className="p-4 bg-slate-900 rounded-xl text-xs text-slate-400 space-y-2 text-left">
                    <div className="flex items-center text-indigo-300 font-semibold">
                      <Info className="w-4 h-4 mr-1.5" /> Backend Service Notice
                    </div>
                    <p>
                      To deliver messages directly to your inbox, connect your preferred backend service (such as <strong>Formspree</strong>, <strong>EmailJS</strong>, or <strong>Resend</strong>) in <code className="text-indigo-300 font-mono">src/pages/Contact.tsx</code>.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center pt-2">
                    <button
                      onClick={handleMailto}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold"
                    >
                      Open Email Client (Mailto Fallback)
                    </button>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="block font-medium text-slate-300">Your Full Name *</label>
                      <input 
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 bg-slate-950 border ${errors.name ? 'border-red-500' : 'border-slate-800'} rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500`}
                      />
                      {errors.name && <p className="text-[11px] text-red-400 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="block font-medium text-slate-300">Email Address *</label>
                      <input 
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500`}
                      />
                      {errors.email && <p className="text-[11px] text-red-400 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.email}</p>}
                    </div>

                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="block font-medium text-slate-300">Subject *</label>
                    <input 
                      type="text"
                      placeholder="Software Engineering Opportunity / Project Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={`w-full px-4 py-3 bg-slate-950 border ${errors.subject ? 'border-red-500' : 'border-slate-800'} rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500`}
                    />
                    {errors.subject && <p className="text-[11px] text-red-400 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="block font-medium text-slate-300">Your Message *</label>
                    <textarea 
                      rows={5}
                      placeholder="Write your message details here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 bg-slate-950 border ${errors.message ? 'border-red-500' : 'border-slate-800'} rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500`}
                    ></textarea>
                    {errors.message && <p className="text-[11px] text-red-400 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition transform active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Validation...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
