import React from 'react';
import { Section } from './Section';
import { HoloCard } from './HoloCard';
import { LiquidTitle } from './LiquidTitle';
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
            
            <div className="overflow-visible py-4">
                <LiquidTitle className="text-6xl md:text-9xl font-serif text-forest-900 font-bold tracking-tight">
                    {profile.name}
                </LiquidTitle>
            </div>
            
            <p className="text-xl md:text-3xl text-forest-700 font-light max-w-2xl mx-auto leading-relaxed">
                {profile.title}
            </p>
        </div>
      </Section>

      {/* SECTION 2: THE PROCESS (Philosophy)
          - Alignment: Center Left
          - Text: Transitioning to darker
      */}
      <Section id="process">
        <div className="w-full max-w-4xl mr-auto pl-10 md:pl-0 pointer-events-auto">
             <div className="mb-8 opacity-80 mix-blend-color-burn">
                 <LiquidTitle className="text-5xl md:text-7xl font-serif text-forest-900 leading-tight block">
                     I don't just write code.
                 </LiquidTitle>
                 <br />
                 <LiquidTitle className="text-5xl md:text-7xl font-serif italic text-emerald-800 leading-tight block">
                     I cultivate digital organisms.
                 </LiquidTitle>
             </div>
             <p className="text-lg text-forest-800 font-light max-w-xl border-l-2 border-emerald-600 pl-6">
                 {profile.bio}
             </p>
        </div>
      </Section>

      {/* SECTION 3: THE TOOLKIT 
          - Alignment: Right Side (using self-end on container)
          - Text: White (Background is darkening)
      */}
      <Section id="toolkit">
        <div className="w-full md:w-1/2 lg:w-5/12 self-end md:mr-10 pointer-events-auto">
             <div className="p-10 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl my-10 transform transition-transform hover:scale-[1.02] duration-500">
                <div className="mb-4 border-b border-white/20 pb-4">
                    <LiquidTitle className="text-4xl font-serif text-white">
                        The Toolkit
                    </LiquidTitle>
                </div>
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

      {/* SECTION 4: SELECTED WORKS (Visual Art Pieces)
          - Alignment: Center
          - Text: White
      */}
      <Section id="works">
        <div className="w-full max-w-6xl my-10 pointer-events-auto">
            <div className="text-center mb-16">
                <div className="mb-2">
                    <LiquidTitle className="text-5xl font-serif text-white">
                        Selected Works
                    </LiquidTitle>
                </div>
                <p className="text-mist-300 font-mono text-sm tracking-widest uppercase">Visual Portals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {profile.projects.map((project) => (
                    <HoloCard key={project.id} project={project} />
                ))}
            </div>
        </div>
      </Section>

      {/* SECTION 5: COLLABORATION (The Core)
          - Alignment: Center
          - Text: White/Neon
      */}
      <Section id="contact" className="text-center">
        <div className="relative z-10 pointer-events-auto space-y-8">
            <p className="text-emerald-400 font-mono tracking-[0.3em] uppercase text-sm animate-pulse">System Status: Waiting for Input</p>
            
            <div className="flex flex-col items-center">
                <LiquidTitle className="text-6xl md:text-8xl font-serif text-white font-bold block">
                    Ready to build
                </LiquidTitle>
                <LiquidTitle className="text-6xl md:text-8xl font-serif text-white font-bold block mt-2">
                    the future?
                </LiquidTitle>
            </div>

            <div className="pt-8">
                <a 
                   href="mailto:hello@example.com" 
                   className="inline-block px-12 py-4 bg-white text-forest-900 font-mono font-bold tracking-wider rounded-full hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                    INITIATE_CONTACT
                </a>
            </div>
            
            <footer className="absolute bottom-10 left-0 w-full text-center text-mist-500 text-[10px] font-mono opacity-40">
                <p>&copy; {new Date().getFullYear()} {profile.name}. Hexagonal Arch / Three.js R3F / React 19.</p>
            </footer>
        </div>
      </Section>

    </div>
  );
};