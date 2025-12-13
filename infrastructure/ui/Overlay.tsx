import React from 'react';
import { Section } from './Section';
import { ProjectCard } from './ProjectCard';
import { useProfile } from '../../core/application/useProfile';

export const Overlay: React.FC = () => {
  const { profile } = useProfile();

  if (!profile) return null;

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col relative z-10 pointer-events-none">
      
      {/* SECTION 1: THE SKY (Intro) 
          - Alignment: Center
          - Text: Dark (Forest-900)
      */}
      <Section id="intro" className="text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up pointer-events-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 backdrop-blur-sm">
                <span className="text-xs font-mono tracking-widest text-forest-800 uppercase">{profile.tagline}</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-serif text-forest-900 font-bold tracking-tight">
                {profile.name}
            </h1>
            
            <p className="text-xl md:text-3xl text-forest-700 font-light max-w-2xl mx-auto leading-relaxed">
                {profile.title}
            </p>
        </div>
      </Section>

      {/* SECTION 2: THE TOOLKIT 
          - Alignment: Right Side (using self-end on container)
          - Text: White (Background is darkening)
      */}
      <Section id="toolkit">
        <div className="w-full md:w-1/2 lg:w-5/12 self-end md:mr-10 pointer-events-auto">
             <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl my-10 transform transition-transform hover:scale-[1.02] duration-500">
                <h3 className="text-4xl font-serif text-white mb-4 border-b border-white/20 pb-4">The Toolkit</h3>
                <p className="text-xs font-mono text-emerald-300 mb-8 uppercase tracking-widest">
                    Game Dev & 3D Commerce R&D
                </p>

                <div className="flex flex-wrap gap-3">
                    {profile.skills.map((skill) => (
                        <span key={skill.id} className="px-3 py-2 rounded-md bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-400/50 transition-all duration-300 text-sm text-mist-100 cursor-default">
                            {skill.name}
                        </span>
                    ))}
                </div>
             </div>
        </div>
      </Section>

      {/* SECTION 3: SELECTED WORKS
          - Alignment: Center
          - Text: White
      */}
      <Section id="works">
        <div className="w-full max-w-6xl my-10 pointer-events-auto">
            <div className="text-center mb-16">
                <h3 className="text-5xl font-serif text-white mb-2">Selected Works</h3>
                <p className="text-mist-300 font-mono text-sm tracking-widest uppercase">Architecture & Innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {profile.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            
            <footer className="mt-20 text-center text-mist-500 text-xs font-mono opacity-50">
                <p>&copy; {new Date().getFullYear()} {profile.name}. System Operational.</p>
            </footer>
        </div>
      </Section>
    </div>
  );
};