import React from 'react';
import { HeroScene } from '../components/3d/HeroScene';
import { Section } from './Section';
import { useProfile } from '../../core/application/useProfile';
import { ProjectCard } from './ProjectCard';

export const HomeView: React.FC = () => {
  const { profile, loading } = useProfile();

  if (loading || !profile) return (
    <div className="h-screen w-full flex items-center justify-center bg-forest-900 text-mist-100">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-t-2 border-emerald-500 rounded-full animate-spin"></div>
        <div className="text-xs font-mono tracking-widest uppercase opacity-70">Initializing Core...</div>
      </div>
    </div>
  );

  return (
    <main className="relative h-screen w-full bg-forest-900 overflow-hidden text-mist-50 font-sans selection:bg-emerald-500/30 selection:text-white">
      
      {/* 
         Combined Infrastructure & UI
         HeroScene now manages the Scroll context.
         The HTML content is passed as children to be rendered inside <Scroll html>.
      */}
      <HeroScene>
        
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none">
             <div className="flex items-center space-x-3 pointer-events-auto">
                 <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                 <span className="text-sm font-bold tracking-[0.2em] uppercase text-mist-100">Hex_Arch</span>
             </div>
             <nav className="hidden md:flex space-x-8 text-xs font-mono tracking-widest text-mist-300 pointer-events-auto">
                 <span className="cursor-pointer hover:text-white transition-colors">DOMAIN</span>
                 <span className="cursor-pointer hover:text-white transition-colors">APPLICATION</span>
                 <span className="cursor-pointer hover:text-white transition-colors">INFRASTRUCTURE</span>
             </nav>
        </header>

        {/* Content Flow */}
        <div className="w-full max-w-7xl mx-auto">

            {/* Hero Section */}
            <Section id="hero-section" className="items-center text-center pt-32">
                <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                        <span className="text-xs font-mono tracking-wider text-emerald-400 mr-3">● SYSTEM.ACTIVE</span>
                        <span className="w-[1px] h-3 bg-white/10 mx-2"></span>
                        <span className="text-xs tracking-widest text-mist-200 uppercase">{profile.tagline}</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-br from-mist-50 via-mist-200 to-mist-500 font-bold tracking-tight pb-4">
                        {profile.name}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-mist-300 font-light max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-8">
                        {profile.title} <span className="text-mist-500 mx-2">//</span> {profile.bio}
                    </p>
                </div>
                
                {/* Visual anchor */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4 opacity-50">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-mist-500">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500/50 to-transparent"></div>
                </div>
            </Section>

            {/* About Section - Glassmorphism Showcase */}
            <Section id="about-section" className="items-start">
                <div className="w-full md:w-2/3 lg:w-1/2 ml-auto">
                    <div className="p-10 md:p-14 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-20">
                            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-400"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </div>
                        
                        <h3 className="text-4xl font-serif text-white mb-8">Architectural <br/> Origins</h3>
                        <p className="text-mist-100 text-lg leading-loose font-light mb-8">
                            My work is built on the principles of <span className="text-emerald-300 font-normal">Hexagonal Architecture</span>—creating adaptable, enduring digital ecosystems that mimic the resilience of nature.
                        </p>
                        
                        <div className="space-y-4">
                            <h4 className="text-xs font-mono tracking-widest text-mist-400 uppercase border-b border-white/10 pb-2 mb-4">Core Competencies</h4>
                            <div className="flex flex-wrap gap-3">
                                {profile.skills.map(skill => (
                                    <span key={skill.id} className="px-4 py-2 rounded-lg bg-forest-900/50 border border-white/5 text-xs text-mist-200 hover:border-emerald-500/30 transition-colors cursor-default">
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Projects Section */}
            <Section id="projects-section" className="items-center">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex items-end justify-between mb-16 border-b border-white/5 pb-6">
                        <h3 className="text-5xl font-serif text-white">Selected Works</h3>
                        <span className="text-xs font-mono text-mist-500 mb-2">INDEX: 01 — 03</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {profile.projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </Section>

            <footer className="h-[30vh] flex flex-col items-center justify-center text-mist-500 text-sm border-t border-white/5 mt-20 bg-forest-950/50 backdrop-blur-sm">
                <div className="mb-6 opacity-50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <p className="font-light tracking-wide">&copy; {new Date().getFullYear()} {profile.name}</p>
                <p className="text-xs font-mono mt-2 text-mist-600">Built with React Three Fiber & Clean Architecture</p>
            </footer>

        </div>
      </HeroScene>
    </main>
  );
};