import React from 'react';
import { PageRoute } from '../types';
import { personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowUp, 
  Award, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: PageRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner Accent: Academic Gold & Sapphire */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-blue-600 to-emerald-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-500/50 flex items-center justify-center text-amber-400 font-bold text-base shadow-sm">
                WI
              </div>
              <div>
                <h3 className="text-white font-bold text-lg tracking-tight font-serif-academic">{personalInfo.name}</h3>
                <p className="text-xs text-amber-400 font-medium">BSc Education (Mathematics & ICT) Candidate • IUIU</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>IUIU Main Campus (Mbale)</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                <span>Cisco Certified</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Mbale / Sironko, Uganda</span>
              </span>
            </div>
          </div>

          {/* Col 3: Navigation Pages */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>Site Pages</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="/" 
                  onClick={(e) => handleNavClick('home', e)} 
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  onClick={(e) => handleNavClick('about', e)} 
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>About & Educational Journey</span>
                </a>
              </li>
              <li>
                <a 
                  href="/certifications" 
                  onClick={(e) => handleNavClick('certifications', e)} 
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Certifications & Credentials</span>
                </a>
              </li>
              <li>
                <a 
                  href="/projects" 
                  onClick={(e) => handleNavClick('projects', e)} 
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Projects & STEM Initiatives</span>
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  onClick={(e) => handleNavClick('contact', e)} 
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Contact & Inquiry</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Core Specializations */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>Specializations</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>Secondary Mathematics Pedagogy</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                <span>Computer Network Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span>Hardware Maintenance & Lab Care</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Artificial Intelligence in Education</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>STEM Clubs & Student Mentorship</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-slate-500 block">Primary Email</span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-slate-300 hover:text-blue-400 transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-500 block">Phone & WhatsApp</span>
                <a 
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{personalInfo.phone}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

              <div>
                <span className="text-xs text-slate-500 block">Location</span>
                <span className="text-slate-300">{personalInfo.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {personalInfo.name}. All rights reserved. Dedicated to quality STEM education in Uganda.</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
