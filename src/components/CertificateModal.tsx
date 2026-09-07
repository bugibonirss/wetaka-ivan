import React from 'react';
import { Certification } from '../types';
import { personalInfo } from '../data/portfolioData';
import { X, Award, CheckCircle2, Building, Calendar, Clock, ShieldCheck } from 'lucide-react';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  if (!certification) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Frame Header */}
        <div className="bg-slate-950 text-white p-6 sm:p-8 relative border-b border-amber-500/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                Official Credential Verification
              </span>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Status: Completed & Verifiable</span>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-serif-academic">
            {certification.title}
          </h2>
          <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-amber-400" />
            <span>{certification.issuer}</span>
          </p>
        </div>

        {/* Certificate Metadata & Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
            <div>
              <span className="text-slate-400 text-[11px] block mb-0.5">Awarded To</span>
              <span className="font-bold text-slate-900 font-serif-academic">{personalInfo.name}</span>
            </div>
            <div>
              <span className="text-slate-400 text-[11px] block mb-0.5">Year Completed</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 font-mono">
                <Calendar className="w-3 h-3 text-amber-600" />
                {certification.year}
              </span>
            </div>
            {certification.duration && (
              <div>
                <span className="text-slate-400 text-[11px] block mb-0.5">Course Workload</span>
                <span className="font-bold text-slate-900 flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {certification.duration}
                </span>
              </div>
            )}
            {certification.credentialId && (
              <div className="col-span-2 sm:col-span-3 pt-2 border-t border-slate-200">
                <span className="text-slate-400 text-[11px] block mb-0.5">Credential Verification ID</span>
                <span className="font-mono text-xs font-semibold text-slate-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80 inline-block">
                  {certification.credentialId}
                </span>
              </div>
            )}
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 font-serif-academic">
              Curriculum & Competencies Demonstrated
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {certification.description}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 font-serif-academic">
              Verified Technical Skills
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {certification.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Verification Badge */}
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/70 flex items-start gap-3 text-xs text-emerald-950">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Institutional Credential Assurance</span>
              <span>
                Earned via Cisco Networking Academy / partner educational frameworks in Uganda. Compliant with international Cisco digital badging standards.
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">Learner: Islamic University in Uganda</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
