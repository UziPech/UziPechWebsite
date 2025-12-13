import React from 'react';
import { Project } from '../../core/domain/entities';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      
      <div className="mb-6">
        <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-mono text-emerald-500/80 tracking-widest uppercase">Project_0{project.id}</span>
            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-emerald-400 transition-colors"></div>
        </div>
        <h4 className="text-2xl font-serif text-mist-50 group-hover:text-white transition-colors">
            {project.title}
        </h4>
      </div>
      
      <p className="text-mist-200 text-sm leading-relaxed mb-8 font-light border-l border-white/10 pl-4">
        {project.description}
      </p>
      
      <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="text-[10px] font-mono uppercase tracking-wider text-mist-400 bg-forest-950/30 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};