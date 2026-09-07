import React, { useState } from 'react';
import { PageRoute } from '../types';
import { personalInfo, faqs } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Clock,
  HelpCircle
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'Teaching / School Appointment',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="contact-page">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200/80 uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5 text-amber-700" />
          <span>Professional Communication & Collaboration</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-serif-academic leading-tight">
          Let's Connect & Collaborate
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          I am always open to discussing secondary teaching appointments, school computer laboratory architecture, interactive mathematics clinics, and EdTech initiatives in Uganda.
        </p>
      </div>

      {/* Main Grid: Contact Cards + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
            <h3 className="font-extrabold text-slate-900 text-base font-serif-academic">Verified Contact Channels</h3>
            
            <div className="space-y-3 text-xs">
              
              {/* Location */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Primary Location</span>
                  <span className="text-slate-600">{personalInfo.location}</span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Mbale & Sironko Districts, Eastern Uganda</span>
                </div>
              </div>

              {/* University */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">University Affiliation</span>
                  <span className="text-slate-600">{personalInfo.institution}</span>
                  <span className="text-[11px] text-blue-900 font-semibold block mt-0.5">{personalInfo.degree}</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 border border-blue-200/60 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="font-bold text-slate-900 block">Official Emails</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-700 hover:underline block font-mono text-xs">
                    {personalInfo.email}
                  </a>
                  <a href={`mailto:${personalInfo.secondaryEmail}`} className="text-slate-500 hover:underline block font-mono text-[11px]">
                    {personalInfo.secondaryEmail}
                  </a>
                </div>
              </div>

              {/* WhatsApp & Phone */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">Telephone & WhatsApp</span>
                  <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                    {personalInfo.phone}
                  </a>
                  <span className="text-[11px] text-emerald-600 block mt-0.5">Direct WhatsApp messaging available 24/7</span>
                </div>
              </div>

            </div>

            {/* WhatsApp Quick Trigger */}
            <div className="pt-2">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start WhatsApp Conversation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Response Commitment */}
          <div className="bg-slate-950 text-slate-200 rounded-2xl p-5 text-xs space-y-2 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <Clock className="w-4 h-4" />
              <span>Prompt Educational Response</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Inquiries regarding secondary teaching postings, computer lab consultation, and regional workshops are typically answered within 24 hours.
            </p>
          </div>

        </div>

        {/* Right: Interactive Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 font-serif-academic">Message Prepared Successfully!</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your inquiry regarding "{formData.inquiryType}" has been registered.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 max-w-md mx-auto text-left space-y-1.5 font-mono">
                  <div><strong>To:</strong> {personalInfo.name} ({personalInfo.email})</div>
                  <div><strong>From:</strong> {formData.email}</div>
                  <div><strong>Subject:</strong> {formData.subject || formData.inquiryType}</div>
                  <div className="pt-2 text-slate-500 font-sans">{formData.message}</div>
                </div>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || formData.inquiryType)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.organization || 'Individual'})\nPhone: ${formData.phone}\n\n${formData.message}`)}`}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-950 text-amber-300 font-bold text-xs uppercase tracking-wider transition-colors border border-amber-400/40"
                  >
                    Send via Email App
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        organization: '',
                        inquiryType: 'Teaching / School Appointment',
                        subject: '',
                        message: '',
                      });
                    }}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-slate-50"
                  >
                    Compose Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif-academic">Send an Inquiry or Appointment Proposal</h3>
                  <p className="text-xs text-slate-500">
                    Fill out the details below to discuss teaching roles, school computer labs, or STEM workshops.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Headteacher Namusoke John"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., school@example.ac.ug"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Telephone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="e.g., +256 761 000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>

                  {/* Institution */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">School / Institution</label>
                    <input
                      type="text"
                      placeholder="e.g., Masaba Secondary School"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Purpose of Inquiry</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 bg-white focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  >
                    <option value="Teaching / School Appointment">Secondary Teaching Placement (Math & ICT)</option>
                    <option value="Computer Lab Setup">School Computer Lab & Network Design Consultation</option>
                    <option value="Mathematics Tutoring">Specialized Mathematics Revision / Coaching Clinic</option>
                    <option value="STEM Workshop">Teacher Training Workshop on AI & Digital Tools</option>
                    <option value="General Collaboration">General Educational Collaboration</option>
                  </select>
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Subject</label>
                  <input
                    type="text"
                    placeholder="Brief description of the subject or school need"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Message / Collaboration Scope *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please describe your requirements, student level, or school location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="contact-submit-button"
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-blue-950 text-amber-300 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs active:scale-98 border border-amber-400/40"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit Formal Inquiry</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-6 pt-4 border-t border-slate-200">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Answers & Clarity
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900 font-serif-academic">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 space-y-2 shadow-xs"
            >
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-start gap-2 font-serif-academic">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{faq.question}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
