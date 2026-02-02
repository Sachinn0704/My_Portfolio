
import { Project, Skill, Experience, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'analytics-voting',
    title: 'Blockchain Election Analytics Dashboard',
    problemStatement: 'Providing transparent, real-time statistical insights into digital voting trends.',
    description: 'A comprehensive analytical platform that integrates Face Recognition data with Blockchain records to provide immutable voting analytics and fraud detection patterns.',
    tags: ['Python', 'Tableau', 'Blockchain', 'Data Visualization', 'SQL'],
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/SachinBhosagi',
    category: 'Data Science'
  },
  {
    id: 'retail-inventory-bi',
    title: 'Retail Intelligence & Inventory Manager',
    problemStatement: 'Leveraging historical sales data to optimize stock levels and predict demand.',
    description: 'Developed an automated BI tool that tracks retail inventory, analyzes sales velocity, and generates predictive restock reports for small to medium enterprises.',
    tags: ['Python', 'Pandas', 'Power BI', 'MySQL', 'Forecasting'],
    imageUrl: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/SachinBhosagi',
    category: 'Data Science'
  },
  {
    id: 'multimodal-ai-analysis',
    title: 'Multimodal Feedback Analysis System',
    problemStatement: 'Quantifying qualitative text, image, and speech data into actionable sentiment metrics.',
    description: 'An advanced analytical system that processes cross-channel user inputs to visualize sentiment trends and consumer behavior patterns in real-time.',
    tags: ['NLP', 'Sentiment Analysis', 'Matplotlib', 'Python', 'Data Storytelling'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/SachinBhosagi',
    category: 'AI/ML'
  },
  {
    id: 'security-anomaly-detection',
    title: 'Threat Intel & Ransomware Analytics',
    problemStatement: 'Identifying patterns of unauthorized encryption through behavioral data streams.',
    description: 'A data-driven security monitor that analyzes system file logs to visualize potential ransomware activity and provide early-warning security reports.',
    tags: ['Python', 'Log Analysis', 'Anomalies', 'Scikit-learn', 'Reporting'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    githubUrl: 'https://github.com/SachinBhosagi',
    category: 'Cybersecurity'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', level: 95, category: 'Programming', icon: 'Terminal' },
  { name: 'SQL (Advanced)', level: 94, category: 'Programming', icon: 'Database' },
  { name: 'R', level: 75, category: 'Programming', icon: 'Terminal' },
  { name: 'Power BI / Tableau', level: 92, category: 'Analytics & Visualization', icon: 'BarChart3' },
  { name: 'Pandas & Numpy', level: 96, category: 'Analytics & Visualization', icon: 'Layout' },
  { name: 'Matplotlib & Seaborn', level: 94, category: 'Analytics & Visualization', icon: 'BarChart3' },
  { name: 'Google Data Studio', level: 88, category: 'Analytics & Visualization', icon: 'Globe' },
  { name: 'FastAPI / Flask', level: 82, category: 'Backend & Tools', icon: 'Server' },
  { name: 'Excel (VBA/PowerQuery)', level: 90, category: 'Backend & Tools', icon: 'Layout' },
  { name: 'Git & GitHub', level: 92, category: 'Backend & Tools', icon: 'Globe' },
  { name: 'MySQL', level: 90, category: 'Databases & Platforms', icon: 'Database' },
  { name: 'PostgreSQL', level: 85, category: 'Databases & Platforms', icon: 'Database' },
  { name: 'Snowflake / BigQuery', level: 78, category: 'Databases & Platforms', icon: 'Server' }
];

export const CERTIFICATIONS: Certification[] = [
  { title: 'Google Data Analytics Professional', issuer: 'Google', date: '2023' },
  { title: 'Data Analysis with Python', issuer: 'IBM / Coursera', date: '2023' },
  { title: 'Microsoft Power BI Data Analyst Associate', issuer: 'Microsoft', date: '2024' },
  { title: 'Business Intelligence Specialization', issuer: 'DeepLearning.AI', date: '2023' }
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'B.Tech - CS (Data Science Focus)',
    company: 'Dayanand Sagar  University',
    period: '2022 - 2026 (Expected)',
    description: [
      'Specializing in Neural Networks, Deep Learning, and Advanced Data Engineering.',
      'Researching the intersection of Blockchain integrity and AI-based anomaly detection.',
      'Maintaining a 8.36 +  CGPA with excellence in Statistics and Predictive Modeling.'
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Twin of Sachin B, an elite Data Scientist. 
Sachin is an expert in uncovering patterns in complex datasets and building high-accuracy predictive models that drive strategic decisions.
Key Expertise: Python (DS Core), SQL, Scikit-learn, Deep Learning, and Advanced Data Engineering.
Key Projects: Blockchain Election Analytics (Transparent Reporting), Retail BI Tool (Sales Forecasting), and AI-based Ransomware Detection (Behavioral Intelligence).
Your tone should be technically deep, analytical, and insight-oriented. You believe that "data is the foundation of modern strategy."
Contact: LinkedIn and GitHub.
`;
