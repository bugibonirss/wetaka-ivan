import React from 'react';
import { PageRoute, Certification } from '../types';
import { personalInfo, certificationsData } from '../data/portfolioData';
import { MathExplorerDemo } from '../components/MathExplorerDemo';
import { 
  GraduationCap, 
  Award, 
  Network, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  FileText, 
  ShieldCheck, 
  Calculator,
  MessageSquare,
  Building,
  School,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenResume: () => void;
  onSelectCert: (cert: Certification) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenResume, onSelectCert }) => {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" id="hero-section">
        <div className="academic-grid-pattern rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 bg-white/70 shadow-xs relative overflow-hidden">
          
          {/* Subtle Ambient Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Institution Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-100 text-xs font-semibold shadow-xs border border-amber-400/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Islamic University in Uganda (IUIU)</span>
                <span className="text-amber-400 font-bold">•</span>
                <span className="text-amber-300">BSc Education (Year 2)</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12] font-serif-academic">
                  Bridging Pure <span className="text-blue-900 underline decoration-amber-400 decoration-wavy decoration-2">Mathematics</span> & Applied <span className="text-indigo-900">Computing</span>.
                </h1>
                <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed max-w-2xl">
                  Secondary Educator in Training, Cisco Certified Technologist, and EdTech Practitioner serving Ugandan secondary schools in Mbale and Sironko.
                </p>
              </div>

              {/* Bio Statement */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {personalInfo.bio}
              </p>

              {/* Metrics & Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] text-slate-500 font-medium block">Current Degree</span>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 mt-1">
                    <GraduationCap className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>BSc Education</span>
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">Math & ICT Major</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] text-slate-500 font-medium block">Cisco NetAcad</span>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 mt-1">
                    <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>3 Badges</span>
                  </span>
                  <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">AI • Nets • HW</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] text-slate-500 font-medium block">Alumnus</span>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 mt-1">
                    <School className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Nkoma / Masaba</span>
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">UACE & UCE</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <span className="text-[11px] text-slate-500 font-medium block">Graduation</span>
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 mt-1">
                    <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Dec 2027</span>
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">IUIU Main Campus</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  id="hero-journey-button"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-blue-950 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98 border border-amber-400/40"
                >
                  <span>Academic Journey</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </button>

                <button
                  onClick={onOpenResume}
                  id="hero-resume-button"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                >
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>Curriculum Vitae</span>
                </button>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-emerald-700 hover:bg-emerald-50 border border-emerald-200/80 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

            </div>

            {/* Hero Right Visual Card: Academic Dossier */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Prestige Framed Card */}
                <div className="bg-white rounded-2xl border-2 border-slate-300/80 shadow-2xl overflow-hidden p-6 space-y-6 relative">
                  
                  {/* Top Seal Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 border border-amber-400/50 flex items-center justify-center text-amber-400 font-bold text-xs">
                        WI
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Educator Dossier
                        </span>
                        <span className="text-xs font-bold text-slate-900">
                          Verified Profile
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>Active Scholar</span>
                    </span>
                  </div>

                  {/* Photo & Identity */}
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <img
                        src="/wetaka-ivan.jpg"
                        alt="Mr. Wetaka Ivan - Mathematics and ICT Educator"
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-amber-400 shadow-md"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-amber-400 text-[10px]" title="Cisco Verified">
                        ★
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight font-serif-academic leading-tight">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs text-blue-900 font-bold">
                        {personalInfo.degree}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {personalInfo.institution}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-slate-600 pt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{personalInfo.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Verified Credentials Checklist */}
                  <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/70 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Cisco Certified:</strong> Modern AI, Networking, & HW</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Educate! Uganda:</strong> Business Modeling Credential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Academic Background:</strong> Nkoma SS (UACE) & Masaba SS (UCE)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span><strong>Classroom Target:</strong> Secondary O & A Level Excellence</span>
                    </div>
                  </div>

                  {/* Fast Action Card Footer */}
                  <div className="pt-1 flex items-center justify-between text-xs border-t border-slate-100">
                    <span className="text-[11px] text-slate-500">Fast Contact:</span>
                    <a
                      href={personalInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 text-xs"
                    >
                      <span>WhatsApp (+256 761 446664)</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== 3 CORE PILLARS ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Educational Foundations
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif-academic">
            Three Pillars of Modern Secondary Pedagogy
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Translating mathematical rigor into vocational digital literacy and sustainable computer lab architecture for Ugandan schools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-blue-400 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-800 flex items-center justify-center font-bold">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif-academic">
                1. Secondary Mathematics Pedagogy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialized in breaking down complex algebraic curves, Euclidean geometry, calculus, and statistics for Ugandan O-Level and A-Level curricula through visual intuition.
              </p>
            </div>
            <button
              onClick={() => onNavigate('about')}
              className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1.5 pt-2"
            >
              <span>Explore Teaching Philosophy</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-amber-400 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-center justify-center font-bold">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif-academic">
                2. Cisco Computer Networking & Labs
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trained in TCP/IP architecture, IP subnetting, hardware diagnostics, and low-cost lab design to establish resilient computing facilities for regional schools.
              </p>
            </div>
            <button
              onClick={() => onNavigate('certifications')}
              className="text-xs font-bold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1.5 pt-2"
            >
              <span>View Cisco Credentials</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-xs space-y-4 hover:border-emerald-400 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center font-bold">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-serif-academic">
                3. Modern AI & Digital Literacy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certified in Modern AI fundamentals, preparing the next generation of Ugandan students to safely, ethically, and productively leverage machine intelligence.
              </p>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1.5 pt-2"
            >
              <span>Review AI Classroom Initiatives</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ==================== INTERACTIVE STEM SANDBOX PREVIEW ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
                Practical Demonstration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-serif-academic">
                Interactive Mathematics & Networking Sandbox
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Real-time educational visualizer designed for secondary classrooms
            </span>
          </div>

          {/* Embedded Sandbox Tool */}
          <MathExplorerDemo />
        </div>
      </section>

      {/* ==================== FEATURED CREDENTIALS PREVIEW ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative border border-slate-800 shadow-xl">
          <div className="relative z-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Official Academic Credentials
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-serif-academic">
                  Cisco Networking Academy Badges
                </h2>
                <p className="text-xs text-slate-400 mt-1 max-w-xl">
                  Accredited technical credentials earned alongside university training to ensure practical classroom laboratory leadership.
                </p>
              </div>
              <button
                onClick={() => onNavigate('certifications')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider self-start sm:self-auto transition-colors shadow-sm"
              >
                <span>Full Credentials Directory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {certificationsData.slice(0, 3).map((cert) => (
                <div 
                  key={cert.id}
                  onClick={() => onSelectCert(cert)}
                  className="bg-slate-800/90 border border-slate-700 hover:border-amber-400/80 rounded-2xl p-5 cursor-pointer transition-all hover:-translate-y-0.5 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs border border-amber-500/30">
                      {cert.iconType === 'ai' ? 'AI' : cert.iconType === 'network' ? 'NET' : 'HW'}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Verified {cert.year}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {cert.description}
                  </p>
                  <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-amber-400 font-medium">
                    <span>Inspect Credential Details</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PHILOSOPHY QUOTE ==================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4 relative overflow-hidden">
          <div className="text-amber-500 text-5xl font-serif-academic leading-none select-none">“</div>
          <blockquote className="text-base sm:text-xl font-medium text-slate-800 leading-relaxed italic max-w-2xl mx-auto font-serif-academic">
            {personalInfo.philosophy}
          </blockquote>
          <div className="pt-2">
            <span className="font-bold text-slate-900 text-sm block">{personalInfo.name}</span>
            <span className="text-xs text-slate-500">Secondary Educator in Training • Islamic University in Uganda</span>
          </div>
        </div>
      </section>

      {/* ==================== CALL TO ACTION BANNER ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-slate-800">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Open to Opportunities
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-serif-academic">
              Partner With Mr. Wetaka for Secondary Education
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Available for secondary school mathematics & ICT teaching roles, school computer laboratory setup consultations, and student STEM revision clinics in Eastern Uganda.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('contact')}
              id="cta-contact-button"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98"
            >
              Get In Touch Direct
            </button>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98"
            >
              WhatsApp Quick Chat
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
