import React, { useState } from 'react';
import { PageRoute, ProjectItem } from '../types';
import { projectsData } from '../data/portfolioData';
import { MathExplorerDemo } from '../components/MathExplorerDemo';
import { 
  FolderGit2, 
  Sparkles, 
  Calendar, 
  CheckCircle, 
  ArrowRight,
  X
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mathematics', label: 'Mathematics Pedagogy' },
    { id: 'ict', label: 'ICT & Lab Networks' },
    { id: 'edtech', label: 'AI & EdTech Research' },
    { id: 'stem', label: 'Student Mentorship' },
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (filterCategory === 'all') return true;
    return proj.category === filterCategory;
  });

  return (
    <div className="space-y-16 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="projects-page">
      
      {/* Page Header */}
      <div className="max-w-3xl space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200/80 uppercase tracking-wider">
          <FolderGit2 className="w-3.5 h-3.5 text-amber-700" />
          <span>Practical Applications & Research</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-serif-academic leading-tight">
          Projects & STEM Initiatives
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From computer lab network blueprints to visual mathematics interactive tutorials and student STEM mentorship at Islamic University in Uganda.
        </p>
      </div>

      {/* Embedded Live Interactive Demonstration Lab */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-serif-academic">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span>Interactive Educational Sandbox</span>
          </h2>
          <span className="text-xs text-slate-500 hidden sm:inline-block">
            Designed for secondary classroom demonstrations
          </span>
        </div>
        <MathExplorerDemo />
      </div>

      {/* Projects Section */}
      <div className="space-y-8 pt-4">
        
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  filterCategory === cat.id
                    ? 'bg-slate-900 text-amber-300 shadow-xs border border-amber-400/40'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 font-medium">
            Showing {filteredProjects.length} Initiatives
          </span>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 space-y-4">
                
                {/* Header Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 bg-amber-50/80 px-2.5 py-1 rounded-md border border-amber-200/60">
                    {project.categoryLabel}
                  </span>

                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    project.status === 'completed'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : project.status === 'in-progress'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {project.status === 'completed' ? 'Completed' : project.status === 'in-progress' ? 'Active' : 'Planned'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-800 transition-colors font-serif-academic">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Impact Points */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 block">Key Outcomes:</span>
                  {project.impactHighlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.toolsUsed.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{project.dateText.split('•')[0]}</span>
                </span>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="font-bold text-slate-900 hover:text-amber-700 inline-flex items-center gap-1 uppercase tracking-wider text-[11px]"
                >
                  <span>Project Details</span>
                  <ArrowRight className="w-3 h-3 text-amber-600" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 border border-slate-200 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 font-serif-academic">
                  {selectedProject.title}
                </h3>
                <span className="text-xs text-slate-500 font-mono mt-1 block">
                  {selectedProject.dateText}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Full Project Overview & Problem Solved
              </h4>
              <p>{selectedProject.fullDescription}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Specific Achievements & Pedagogical Deliverables
              </h4>
              <div className="space-y-1.5">
                {selectedProject.impactHighlights.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.toolsUsed.map((tool, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-medium border border-amber-200">
                    {tool}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* School Collaboration CTA */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800 shadow-xl">
        <div className="space-y-1 max-w-xl">
          <h3 className="text-xl font-extrabold text-white font-serif-academic">
            Have an educational or computer lab initiative in your school?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            Let's design effective computer lab layouts, student mathematics clinics, or digital curriculum tools together.
          </p>
        </div>
        <button
          onClick={() => onNavigate('contact')}
          className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
        >
          Propose Collaboration
        </button>
      </div>

    </div>
  );
};
