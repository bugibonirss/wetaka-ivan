import React from 'react';
import { personalInfo, educationTimeline, certificationsData, skillsMatrix } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, GraduationCap, Award, CheckCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header (hidden during print) */}
        <div className="bg-slate-950 text-white px-6 py-4 flex items-center justify-between print:hidden border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-400/30 font-bold">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base font-serif-academic text-white">Curriculum Vitae • {personalInfo.name}</h3>
              <p className="text-[11px] text-amber-300/80">Islamic University in Uganda • Secondary Education Trainee</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Body Content */}
        <div className="p-8 sm:p-12 max-h-[80vh] overflow-y-auto print:max-h-none print:p-6 print:overflow-visible space-y-8 text-slate-800">
          
          {/* Header Section */}
          <div className="border-b border-slate-200 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-academic">
                  {personalInfo.name}
                </h1>
                <p className="text-base font-bold text-blue-900 mt-1">
                  {personalInfo.role}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  {personalInfo.institution} • {personalInfo.degree}
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-1 sm:text-right">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5 font-mono text-[11px]">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5 font-mono text-[11px]">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Education History */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 pb-1 border-b border-slate-200 flex items-center gap-2 font-serif-academic">
              <GraduationCap className="w-4 h-4 text-amber-600" />
              <span>Academic Background & Formal Qualifications</span>
            </h2>

            <div className="space-y-4">
              {educationTimeline.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs">
                  <div className="sm:w-3/4">
                    <span className="font-bold text-slate-900 text-sm block font-serif-academic">{item.institution}</span>
                    <span className="font-semibold text-blue-900">{item.qualification}</span>
                    <p className="text-slate-600 mt-0.5">{item.description}</p>
                  </div>
                  <div className="sm:w-1/4 sm:text-right">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono font-bold text-[11px]">
                      {item.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Badges */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 pb-1 border-b border-slate-200 flex items-center gap-2 font-serif-academic">
              <Award className="w-4 h-4 text-amber-600" />
              <span>Professional Technical Certifications</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 font-serif-academic">{cert.title}</span>
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px] mb-2">{cert.issuer} {cert.duration ? `• ${cert.duration}` : ''}</p>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] bg-white border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Competencies Matrix */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 pb-1 border-b border-slate-200 flex items-center gap-2 font-serif-academic">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Core Skills & Pedagogical Capabilities</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              {skillsMatrix.map((cat, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs font-serif-academic">{cat.title}</h4>
                  <ul className="space-y-1 text-slate-600 text-[11px]">
                    {cat.skills.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* References Notice */}
          <div className="pt-2 text-center text-xs text-slate-400 print:text-slate-600">
            <span>Academic and Professional References available upon request from the Department of Education, Islamic University in Uganda, Mbale.</span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 print:hidden">
          <span>Ready for institutional review & secondary teaching placements</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold uppercase tracking-wider text-[11px] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
