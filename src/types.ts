export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  image: string;
  githubUrl: string;
  demoUrl: string;
  features: string[];
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    impact: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  achievements: string[];
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100 percentage
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: Skill[];
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string; // MD elements
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  body: string;
  author: string;
  role: string;
  company: string;
  avatarSeed: string; // seed for nice avatars
}
