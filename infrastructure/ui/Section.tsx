import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children }) => {
  return (
    <section 
      id={id} 
      // Strict layout rules: 100vh height, flex column, centered content, padding 10
      className={`h-screen w-full flex flex-col justify-center items-center p-10 relative ${className}`}
    >
      {children}
    </section>
  );
};