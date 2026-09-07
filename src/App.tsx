import React, { useState, useEffect } from 'react';
import { PageRoute, Certification } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal } from './components/CertificateModal';

export default function App() {
  // Helper to parse route from pathname
  const getInitialRoute = (): PageRoute => {
    try {
      const path = window.location.pathname.toLowerCase();
      if (path.includes('about')) return 'about';
      if (path.includes('certifications') || path.includes('certificate')) return 'certifications';
      if (path.includes('projects') || path.includes('project')) return 'projects';
      if (path.includes('contact')) return 'contact';
      return 'home';
    } catch {
      return 'home';
    }
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialRoute);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // Sync document title and history
  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    try {
      const targetPath = page === 'home' ? '/' : `/${page}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ page }, '', targetPath);
      }
    } catch {
      // Ignore if pushState blocked
    }
    updateTitle(page);
  };

  const updateTitle = (page: PageRoute) => {
    switch (page) {
      case 'about':
        document.title = 'About Mr. Wetaka Ivan | Mathematics & ICT Educator | Uganda';
        break;
      case 'certifications':
        document.title = 'Certifications & Credentials | Mr. Wetaka Ivan | Cisco Certified';
        break;
      case 'projects':
        document.title = 'Projects & STEM Initiatives | Mr. Wetaka Ivan';
        break;
      case 'contact':
        document.title = 'Contact Mr. Wetaka Ivan | Mathematics & ICT Educator';
        break;
      default:
        document.title = 'Mr. Wetaka Ivan | Mathematics & ICT Educator | Uganda';
    }
  };

  // Listen to browser popstate (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const route = getInitialRoute();
      setCurrentPage(route);
      updateTitle(route);
    };

    window.addEventListener('popstate', handlePopState);
    updateTitle(currentPage);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Multi-Page Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Multi-Page Route View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
            onSelectCert={(cert) => setSelectedCert(cert)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={navigateTo}
            onOpenResume={() => setIsResumeOpen(true)}
          />
        )}

        {currentPage === 'certifications' && (
          <CertificationsPage
            onNavigate={navigateTo}
            onSelectCert={(cert) => setSelectedCert(cert)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Persistent Multi-Page Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}
