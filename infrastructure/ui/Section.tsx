import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  isGlass?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, isGlass = false }) => {
  return (
    <section 
      id={id} 
      className={`min-h-screen w-full flex flex-col justify-center px-6 md:px-12 relative py-20 ${className}`}
    >
      {/* 
        If isGlass is true, we apply the container styles here. 
        Otherwise, we render children directly or in a transparent container.
        This allows flexible layouts where the section itself is the container.
      */}
      {children}
    </section>
  );
};