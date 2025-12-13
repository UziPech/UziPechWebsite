export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'design' | 'architecture';
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  projects: Project[];
  skills: Skill[];
}

export const initialProfile: Profile = {
  name: "Uziel Castillo",
  title: "Solutions Architect & Full Stack Developer",
  tagline: "Transforming complex business needs into scalable digital ecosystems.",
  bio: "Specializing in high-performance web applications, game development, and 3D commerce solutions.",
  projects: [
    {
      id: "1",
      title: "SaaS Gastronómico",
      description: "A comprehensive point-of-sale system with Union Architecture.",
      technologies: ["React", "POS Logic", "Union Arch"],
    },
    {
      id: "2",
      title: "Hospital Asset Manager",
      description: "Asset tracking system featuring Neumorphism UI and role-based access.",
      technologies: ["Flutter", "Neumorphism", "Role Mgmt"],
    },
    {
      id: "3",
      title: "Vivero 3D Shop",
      description: "Immersive e-commerce experience integrating game development logic.",
      technologies: ["3D Commerce", "Game Dev", "WebGL"],
    }
  ],
  skills: [
    { id: "1", name: "Flutter (Flame Engine)", category: "frontend" },
    { id: "2", name: "React 19", category: "frontend" },
    { id: "3", name: "Supabase", category: "backend" },
    { id: "4", name: "MongoDB", category: "backend" },
    { id: "5", name: "Python", category: "backend" },
    { id: "6", name: "Node.js", category: "backend" },
  ]
};