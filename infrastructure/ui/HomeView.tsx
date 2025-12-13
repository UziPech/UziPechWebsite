import React from 'react';
import { HeroScene } from '../components/3d/HeroScene';
import { useProfile } from '../../core/application/useProfile';
import { Overlay } from './Overlay';

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
         HeroScene manages the ScrollControls.
         The Overlay is passed as children and rendered inside <Scroll html>.
      */}
      <HeroScene>
        
        {/* Navigation / HUD - Scrolls with content in this setup */}
        <header className="w-full px-6 py-8 flex justify-between items-center relative z-50">
             <div className="flex items-center space-x-3">
                 <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                 <span className="text-sm font-bold tracking-[0.2em] uppercase text-forest-900 mix-blend-difference">Hex_Arch</span>
             </div>
             <nav className="hidden md:flex space-x-8 text-xs font-mono tracking-widest text-forest-800 mix-blend-difference">
                 <span className="cursor-pointer hover:text-emerald-600 transition-colors">PROFILE</span>
                 <span className="cursor-pointer hover:text-emerald-600 transition-colors">STACK</span>
                 <span className="cursor-pointer hover:text-emerald-600 transition-colors">WORKS</span>
             </nav>
        </header>

        {/* Main Content Overlay */}
        <Overlay />

      </HeroScene>
    </main>
  );
};