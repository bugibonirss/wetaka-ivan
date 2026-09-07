import React, { useState } from 'react';
import { PageRoute, Certification } from '../types';
import { certificationsData } from '../data/portfolioData';
import { 
  CheckCircle2, 
  Building, 
  Clock, 
  ShieldCheck, 
  Calendar, 
  ExternalLink, 
  Cpu, 
  Network, 
  Bot, 
  Briefcase,
  Terminal,
  Search
} from 'lucide-react';

interface CertificationsPageProps {
  onNavigate: (page: PageRoute) => void;
  onSelectCert: (cert: Certification) => void;
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({ onNavigate, onSelectCert }) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'cisco' | 'educate' | 'planned'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCerts = certificationsData.filter((cert) => {
    const matchesCategory = filterCategory === 'all' || cert.issuerCategory === filterCategory;
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="certifications-page">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200/80 uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
          <span>Verified Credentials & Professional Badges</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-serif-academic leading-tight">
          Certifications & Academic Credentials
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Industry-recognized certifications and badges earned through Cisco Networking Academy and Educate! Uganda, augmenting degree training with verified technical mastery.
        </p>
      </div>

      {/* Metrics Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Total Credentials</span>
          <span className="text-2xl font-extrabold text-slate-900 mt-1 block font-serif-academic">4 Verified</span>
          <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Active & Verifiable</span>
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Primary Issuer</span>
          <span className="text-2xl font-extrabold text-blue-900 mt-1 block font-serif-academic">Cisco</span>
          <span className="text-[11px] text-slate-500 mt-1 block">Networking Academy</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Curriculum Focus</span>
          <span className="text-2xl font-extrabold text-amber-700 mt-1 block font-serif-academic">AI & Networks</span>
          <span className="text-[11px] text-slate-500 mt-1 block">Modern Lab Tech</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Next Milestone</span>
          <span className="text-2xl font-extrabold text-slate-800 mt-1 block font-serif-academic">CCNA</span>
          <span className="text-[11px] text-slate-500 mt-1 block">Planned for 2026/27</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-1 p-1 bg-slate-100/90 rounded-xl w-full sm:w-auto">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              filterCategory === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({certificationsData.length})
          </button>
          <button
            onClick={() => setFilterCategory('cisco')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              filterCategory === 'cisco'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Cisco Academy
          </button>
          <button
            onClick={() => setFilterCategory('educate')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              filterCategory === 'educate'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Educate! Uganda
          </button>
          <button
            onClick={() => setFilterCategory('planned')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
              filterCategory === 'planned'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Planned 2026
          </button>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search credentials, topics, skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500"
          />
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCerts.map((cert) => {
          const isPlanned = cert.status === 'planned' || cert.status === 'in-progress';
          return (
            <div
              key={cert.id}
              className={`bg-white rounded-2xl border transition-all flex flex-col justify-between overflow-hidden group ${
                isPlanned 
                  ? 'border-dashed border-slate-300 hover:border-slate-400' 
                  : 'border-slate-200/90 shadow-xs hover:shadow-md hover:border-amber-400'
              }`}
            >
              <div className="p-6 space-y-4">
                {/* Card Top */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 text-amber-400 border border-amber-400/30 flex items-center justify-center font-bold">
                    {cert.iconType === 'ai' && <Bot className="w-5 h-5" />}
                    {cert.iconType === 'network' && <Network className="w-5 h-5" />}
                    {cert.iconType === 'hardware' && <Cpu className="w-5 h-5" />}
                    {cert.iconType === 'business' && <Briefcase className="w-5 h-5" />}
                    {cert.iconType === 'code' && <Terminal className="w-5 h-5" />}
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    cert.status === 'verified'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : cert.status === 'in-progress'
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}>
                    {cert.status === 'verified' ? 'Verified Credential' : cert.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>

                {/* Title and Issuer */}
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors font-serif-academic">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                {/* Details Meta */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1 font-mono text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.year}</span>
                  </span>
                  {cert.duration && (
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{cert.duration}</span>
                    </span>
                  )}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] text-slate-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                {cert.status === 'verified' ? (
                  <button
                    onClick={() => onSelectCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-700 py-1.5 rounded-lg hover:bg-white transition-colors uppercase tracking-wider"
                  >
                    <span>Inspect Official Credential</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 font-medium py-1.5 text-center w-full">
                    Syllabus in preparation for 2026/27
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Institutional Assurance */}
      <div className="bg-slate-900 text-slate-100 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 max-w-2xl">
          <h3 className="font-extrabold text-white text-base sm:text-lg font-serif-academic">
            Institutional Credential Assurance & Digital Badging
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            All Cisco Networking Academy credentials held by Mr. Wetaka Ivan are verifiable on Cisco NetAcad digital credential portals and registered under student records at Islamic University in Uganda.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
        >
          Request Official Transcripts
        </button>
      </div>

    </div>
  );
};
