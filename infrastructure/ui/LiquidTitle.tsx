import React from 'react';
import { motion, Variants } from 'framer-motion';

interface LiquidTitleProps {
  children: string;
  className?: string;
}

export const LiquidTitle: React.FC<LiquidTitleProps> = ({ children, className = '' }) => {
  // Container orchestrates the stagger effect for children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  // Individual letter animation
  const letterVariants: Variants = {
    hidden: {
      y: 100,
      opacity: 0,
      rotateX: -90,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  // Hover effect replicating MacOS Dock magnification
  const hoverVariants = {
    scale: 1.3,
    color: "#4ade80", // emerald-400
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  return (
    <motion.div
      className={`inline-block whitespace-pre-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
    >
      {children.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          whileHover={hoverVariants}
          className="inline-block origin-bottom perspective-1000"
          style={{ 
            // Ensure spaces have width, otherwise they collapse
            minWidth: char === ' ' ? '0.3em' : 'auto' 
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};