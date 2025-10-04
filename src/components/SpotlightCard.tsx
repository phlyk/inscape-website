import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
  viewport?: any;
  [key: string]: any;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = '', 
  initial,
  animate,
  transition,
  whileHover,
  viewport,
  ...props 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current && isHovered) {
        const rect = ref.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        ref.current.style.setProperty('--spotlight-x', `${x}%`);
        ref.current.style.setProperty('--spotlight-y', `${y}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered]);

  return (
    <motion.div
      ref={ref}
      className={`relative group overflow-hidden ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      viewport={viewport}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      {...props}
    >
      {/* Enhanced Spotlight effect */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(255,255,255,0.25), transparent 60%)`
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default SpotlightCard;