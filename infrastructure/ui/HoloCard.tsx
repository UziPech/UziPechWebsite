import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Project } from '../../core/domain/entities';

interface HoloCardProps {
  project: Project;
}

export const HoloCard: React.FC<HoloCardProps> = ({ project }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className="group relative rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden h-full cursor-pointer"
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => console.log(`Enter World: ${project.title}`)}
    >
      {/* 
        Spotlight Background 
        - Creates the glow effect behind the content
        - Moves with cursor
      */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.15),
              transparent 80%
            )
          `
        }}
      />

      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
        }}
      />

      {/* 
        Content Container
        - Relative z-10 to sit above the spotlight background
      */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
              System_ID: {project.id}
            </span>
            <h3 className="text-2xl font-serif text-white font-medium group-hover:text-emerald-300 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          
          {/* Active Status Indicator */}
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-mist-300 group-hover:bg-emerald-400 group-hover:shadow-[0_0_8px_#34d399] transition-all duration-300" />
          </div>
        </div>

        {/* Description */}
        <p className="text-mist-200 text-sm font-light leading-relaxed mb-8 flex-grow border-l border-white/10 pl-4 group-hover:border-emerald-500/30 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5 group-hover:border-emerald-500/20 transition-colors duration-300">
          {project.technologies.map(tech => (
            <span 
              key={tech} 
              className="px-2 py-1 text-[10px] font-mono text-mist-300 bg-white/5 rounded border border-white/5 
                         group-hover:bg-emerald-900/20 group-hover:text-emerald-200 group-hover:border-emerald-500/30 
                         transition-all duration-300 uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};