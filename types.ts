
export interface Project {
  id: string;
  title: string;
  description: string;
  problemStatement?: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  category: 'Development' | 'Data Science' | 'Cybersecurity' | 'AI/ML';
}

export interface Skill {
  name: string;
  level: number;
  // Updated Skill categories to align with the frontend implementation and existing constants
  category: 'Programming' | 'Analytics & Visualization' | 'Backend & Tools' | 'Databases & Platforms';
  icon: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}