export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  accentColor: string;
  problem: string;
  solution: string;
  contribution: string;
  learnings: string[];
  visualType: 'healthcare' | 'iot' | 'graphics';
}

export interface SkillItem {
  name: string;
  level: string;
  stage: 'foundation' | 'exploring';
  category: string;
  description: string;
  iconName: string;
  topics: string[];
}

export interface AcademicNode {
  period: string;
  level: string;
  institution?: string;
  location?: string;
  score: string;
  percentage?: string;
  rank?: string;
  admissionMode?: string;
  highlight: string;
  metricType: string;
}

export interface Certificate {
  id: string;
  organization: string;
  title: string;
  issuerLogo: string;
  category: string;
  verificationNote: string;
}

export interface LabTopic {
  title: string;
  tag: string;
  focusArea: string;
  status: string;
}
