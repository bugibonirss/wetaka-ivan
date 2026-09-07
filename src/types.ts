export type PageRoute = 'home' | 'about' | 'certifications' | 'projects' | 'contact';

export interface EducationMilestone {
  period: string;
  institution: string;
  qualification: string;
  description: string;
  level: string;
  isCurrent?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerCategory: 'cisco' | 'educate' | 'university' | 'planned';
  year: string;
  duration?: string;
  credentialId?: string;
  verificationUrl?: string;
  description: string;
  skills: string[];
  status: 'verified' | 'in-progress' | 'planned';
  iconType: 'ai' | 'network' | 'hardware' | 'business' | 'code' | 'analytics';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'mathematics' | 'ict' | 'edtech' | 'stem' | 'curriculum';
  categoryLabel: string;
  summary: string;
  fullDescription: string;
  dateText: string;
  status: 'completed' | 'in-progress' | 'planned';
  impactHighlights: string[];
  toolsUsed: string[];
  iconType: 'math' | 'network' | 'ai' | 'hardware' | 'stem' | 'curriculum';
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level: number;
    description: string;
  }[];
}
