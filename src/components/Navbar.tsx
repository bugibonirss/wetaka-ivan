import React, { useState } from 'react';
import { PageRoute } from '../types';
import { personalInfo } from '../data/portfolioData';
import { 
  Home, 
  User, 
  Award, 
  FolderGit2, 
  Mail, 
  Menu, 
  X, 
  MessageSquare,
  FileText,
  GraduationCap
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageRoute; label: string; icon: React.ElementType; href: string }[] = [
    { id: 'home', label: 'Home', icon: Home, href: '/' },
    { id: 'about', label: 'About', icon: User, href: '/about' },
    { id: 'certifications', label: 'Certifications', icon: Award, href: '/certifications' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '/projects' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '/contact' },
  ];

  const handleNavClick = (page: PageRoute, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      {/* Top Academic Prestige Ribbon */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 sm:px-8 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-slate-200 font-semibold">Islamic University in Uganda</span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-amber-400 hidden sm:inline">BSc Education (Mathematics & ICT)</span>
          <span className="text-slate-600 hidden md:inline">•</span>
          <span className="text-slate-300 hidden md:inline">Cisco Certified</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="text-slate-400 hidden sm:inline">Mbale & Sironko, Uganda</span>
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
          >
            <span>WhatsApp Direct</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <a 
            href="/"
            onClick={(e) => handleNavClick('home', e)}
            className="flex items-center gap-3.5 group focus:outline-hidden"
            id="brand-logo-link"
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-slate-900 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-base shadow-sm group-hover:border-amber-400 transition-colors">
                WI
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-[8px] text-white font-bold" title="Verified Credentialed">
                ✓
              </div>
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-lg tracking-tight group-hover:text-blue-900 transition-colors flex items-center gap-2 font-serif-academic">
                <span>{personalInfo.name}</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Mathematics & ICT Educator <span className="text-amber-600 font-semibold">• Cisco Certified</span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.id, e)}
                  id={`nav-link-${item.id}`}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                    isActive
                      ? 'text-slate-900 bg-amber-50/80 border border-amber-200/70 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-700' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-600 rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={onOpenResume}
              id="header-cv-button"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-bold tracking-wide transition-colors shadow-xs"
              title="View & Download Curriculum Vitae"
            >
              <FileText className="w-4 h-4 text-amber-600" />
              <span>Resume / CV</span>
            </button>
            <a
              href="/contact"
              onClick={(e) => handleNavClick('contact', e)}
              id="header-contact-button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-950 text-amber-300 hover:text-amber-200 text-xs font-bold tracking-wide transition-all shadow-sm border border-amber-500/30 active:scale-98"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold ${
                    isActive
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50"
            >
              <FileText className="w-4 h-4" />
              <span>View Curriculum Vitae (CV)</span>
            </button>
            <a
              href="/contact"
              onClick={(e) => handleNavClick('contact', e)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Mr. Wetaka</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
