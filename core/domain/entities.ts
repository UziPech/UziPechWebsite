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
  name: "Alex Architect",
  title: "Creative Technologist",
  tagline: "Bridging Nature & Digital Systems",
  bio: "I build scalable digital ecosystems inspired by organic patterns. Specializing in Clean Architecture and 3D web experiences.",
  projects: [
    {
      id: "1",
      title: "EcoSphere",
      description: "A real-time climate data visualization platform using WebGL.",
      technologies: ["React", "Three.js", "GraphQL"],
    },
    {
      id: "2",
      title: "Neural Nest",
      description: "AI-driven architecture generation tool for sustainable housing.",
      technologies: ["Python", "TensorFlow", "Next.js"],
    },
    {
      id: "3",
      title: "Flux Finance",
      description: "High-frequency trading dashboard with hexagonal architecture.",
      technologies: ["TypeScript", "WebSocket", "D3.js"],
    }
  ],
  skills: [
    { id: "1", name: "React / Next.js", category: "frontend" },
    { id: "2", name: "Three.js / WebGL", category: "frontend" },
    { id: "3", name: "Node.js", category: "backend" },
    { id: "4", name: "System Design", category: "architecture" },
  ]
};