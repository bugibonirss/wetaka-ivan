import React, { useState } from 'react';
import { PageRoute } from '../types';
import { personalInfo, educationTimeline, skillsMatrix } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  FileText, 
  Award, 
  School, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'skills' | 'philosophy'>('timeline');

  return (
    <div className="space-y-12 sm:space-y-16 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="about-page">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200/80 uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
          <span>Biographical Profile & Academic Dossier</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-serif-academic leading-tight">
          From Sironko to IUIU — Dedication to Ugandan Education
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Mr. Wetaka Ivan is an educator in training specializing in secondary mathematics and information communication technology at the Islamic University in Uganda (IUIU, Main Campus Mbale).
        </p>
      </div>

      {/* Main Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Bio Card */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border-2 border-slate-200/90 p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <img
                  src="/wetaka-ivan.jpg"
                  alt="Mr. Wetaka Ivan"
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-900 border border-white flex items-center justify-center text-amber-400 text-[10px] font-bold">
                  ★
                </div>
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg leading-snug font-serif-academic">{personalInfo.name}</h3>
                <p className="text-xs text-blue-900 font-bold">{personalInfo.role}</p>
                <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span className="text-slate-400">Current Program:</span>
                <span className="font-semibold text-slate-800 text-right">{personalInfo.degree}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Current Standing:</span>
                <span className="font-semibold text-slate-800">{personalInfo.currentYear}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Expected Graduation:</span>
                <span className="font-semibold text-blue-900">{personalInfo.expectedGraduation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">University Campus:</span>
                <span className="font-semibold text-slate-800">IUIU Main Campus (Mbale)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs border border-amber-400/40"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Open Full Curriculum Vitae</span>
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Send Direct Inquiry</span>
              </button>
            </div>
          </div>

          {/* Quick Key Milestones Box */}
          <div className="bg-slate-900 text-slate-200 rounded-2xl p-6 space-y-4 shadow-md border border-slate-800">
            <h4 className="text-white font-bold text-sm flex items-center gap-2 font-serif-academic">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Institutional Highlights</span>
            </h4>
            <div className="space-y-3 text-xs">
              <div className="border-l-2 border-amber-400 pl-3">
                <span className="font-bold text-white block">Islamic University in Uganda</span>
                <span className="text-slate-400">2024 - 2027 • Bachelor of Science Education</span>
              </div>
              <div className="border-l-2 border-emerald-400 pl-3">
                <span className="font-bold text-white block">Cisco Certified (3 Badges)</span>
                <span className="text-slate-400">Modern AI, Computer Networks, Hardware Basics</span>
              </div>
              <div className="border-l-2 border-blue-400 pl-3">
                <span className="font-bold text-white block">Nkoma Secondary School</span>
                <span className="text-slate-400">Uganda Advanced Certificate of Education (UACE)</span>
              </div>
              <div className="border-l-2 border-indigo-400 pl-3">
                <span className="font-bold text-white block">Masaba Secondary School</span>
                <span className="text-slate-400">Uganda Certificate of Education (UCE)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Tabbed Deep Dive Content */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Tabs */}
          <div className="flex border-b border-slate-200 gap-6 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('timeline')}
              className={`pb-3 border-b-2 transition-all ${
                activeTab === 'timeline'
                  ? 'border-amber-600 text-slate-950'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Academic Journey Timeline
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`pb-3 border-b-2 transition-all ${
                activeTab === 'skills'
                  ? 'border-amber-600 text-slate-950'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Skills & Competencies
            </button>
            <button
              onClick={() => setActiveTab('philosophy')}
              className={`pb-3 border-b-2 transition-all ${
                activeTab === 'philosophy'
                  ? 'border-amber-600 text-slate-950'
                  : 'border-transparent text-slate-400 hover:text-slate-700'
              }`}
            >
              Teaching Philosophy
            </button>
          </div>

          {/* Tab 1: Timeline */}
          {activeTab === 'timeline' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 font-serif-academic">
                  Seven-Stage Educational Progression
                </h3>
                <p className="text-xs text-slate-500">
                  Tracing continuous academic growth from early childhood in Sironko to university leadership at IUIU.
                </p>
              </div>

              <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                {educationTimeline.map((milestone, idx) => (
                  <div key={idx} className="relative group">
                    {/* Dot on Timeline */}
                    <div className={`absolute -left-6 sm:-left-8 top-1 w-5 h-5 rounded-full border-2 bg-white flex items-center justify-center transition-colors ${
                      milestone.isCurrent
                        ? 'border-amber-600 ring-4 ring-amber-100'
                        : 'border-slate-400 group-hover:border-amber-500'
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${milestone.isCurrent ? 'bg-amber-600 animate-pulse' : 'bg-slate-400'}`}></div>
                    </div>

                    <div className={`p-5 rounded-xl border transition-all ${
                      milestone.isCurrent
                        ? 'bg-amber-50/40 border-amber-300 shadow-xs'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-amber-800 font-mono">
                          {milestone.period}
                        </span>
                        {milestone.isCurrent && (
                          <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 border border-amber-400/40">
                            Current Institution
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400 font-medium">{milestone.level}</span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 font-serif-academic">
                        {milestone.institution}
                      </h4>
                      <p className="text-xs font-semibold text-slate-700 mt-0.5">
                        {milestone.qualification}
                      </p>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Skills Matrix */}
          {activeTab === 'skills' && (
            <div className="space-y-8">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 font-serif-academic">
                  Dual STEM Specialization Competencies
                </h3>
                <p className="text-xs text-slate-500">
                  Combining advanced mathematics pedagogy with technical Cisco networking and digital tools.
                </p>
              </div>

              <div className="space-y-8">
                {skillsMatrix.map((category, catIdx) => (
                  <div key={catIdx} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs">
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base font-serif-academic">{category.title}</h4>
                      <p className="text-xs text-slate-500">{category.subtitle}</p>
                    </div>

                    <div className="space-y-4 pt-2">
                      {category.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-semibold text-slate-800">
                            <span>{skill.name}</span>
                            <span className="text-amber-700 font-mono font-bold">{skill.level}%</span>
                          </div>
                          
                          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-slate-900 h-2 rounded-full transition-all duration-500"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>

                          <p className="text-[11px] text-slate-500">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Educational Philosophy */}
          {activeTab === 'philosophy' && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <h3 className="text-xl font-bold text-slate-900 font-serif-academic">
                  The Integration of Mathematics and ICT in Uganda
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                  <p>
                    For decades, secondary mathematics education across East Africa has relied predominantly on abstract chalkboard derivations. While this trains symbolic rigor, it leaves many visual and kinesthetic learners disenfranchised, associating mathematics with rote memorization rather than creative problem solving.
                  </p>
                  <p>
                    At the Islamic University in Uganda, my teacher-training philosophy centers on <strong>Pedagogical Technological Content Knowledge (TPACK)</strong>. By embedding dynamic software (like GeoGebra, interactive graphing simulations, and spreadsheet algorithms) into standard O-Level and A-Level curricula, abstract concepts transform into palpable, interactive realities.
                  </p>
                  <p>
                    Simultaneously, through Cisco Networking Academy certifications in <strong>Computer Networks</strong>, <strong>Hardware Diagnostics</strong>, and <strong>Modern AI</strong>, I advocate for sustainable, localized school computing infrastructure. Ugandan schools do not need prohibitively expensive systems to offer transformative digital learning; with efficient local caching servers, organized LAN cabling, and disciplined lab upkeep, rural and semi-urban classrooms can leapfrog traditional resource barriers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-amber-900 mb-0.5">Community Vision</span>
                    <span>
                      To see every Ugandan secondary school student graduate with both foundational analytical reasoning in mathematics and practical vocational competence in digital computing and AI.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
