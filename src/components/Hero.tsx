import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import heroBg from '../assets/hero-bg.png';
import inscapeLogo from '../assets/INSCAPE.png';

// Separate component for cursor-following particles to avoid hooks in callback
const CursorFollowingParticle: React.FC<{
  cursorX: any;
  cursorY: any;
  index: number;
}> = ({ cursorX, cursorY, index }) => {
  const offsetX = (index % 2 === 0 ? 1 : -1) * (10 + index * 5);
  const offsetY = index * 8;
  
  const x = useTransform(cursorX, (x: number) => x + offsetX);
  const y = useTransform(cursorY, (y: number) => y + offsetY);
  
  return (
    <motion.div
      className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
      style={{
        x,
        y,
        opacity: 0.7 - index * 0.06,
        scale: 1 - index * 0.08,
      }}
      animate={{
        scale: [1 - index * 0.08, (1 - index * 0.08) * 1.3, 1 - index * 0.08],
        rotate: [0, 180, 360],
      }}
      transition={{
        scale: {
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 8 + index * 2,
          repeat: Infinity,
          ease: "linear",
        },
      }}
    />
  );
};

interface HeroProps {
  onBookNow: () => void;
  onLearnMore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow, onLearnMore }) => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Cursor tracking for particle effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const cursorY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden bg-black flex items-center justify-center"
      style={{ paddingTop: '6rem' }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: 'brightness(1) saturate(1.2)',
            willChange: 'transform',
            backfaceVisibility: 'hidden', // Prevent flicker
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/10" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <motion.img 
            src={inscapeLogo} 
            alt="InScape Movement" 
            className="h-32 md:h-48 lg:h-50 w-auto filter drop-shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light leading-relaxed max-w-4xl mx-auto"
        >
          {t('hero_subtitle')}
          <span className="block mt-2 text-lg md:text-xl text-white/70">
            {t('hero_description')}
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            onClick={onBookNow}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('book_now')}
          </motion.button>
          
          <motion.button
            onClick={onLearnMore}
            className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('join_us')}
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/60 text-sm mb-2 font-light">Discover the Journey</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 cursor-pointer"
            onClick={onLearnMore}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Interactive Particles Effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        
        {/* Ambient floating particles */}
        {Array.from({ length: 40 }).map((_, i) => {
          const size = Math.random() * 3 + 1;
          return (
            <motion.div
              key={`ambient-${i}`}
              className="absolute bg-white/30 rounded-full"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                willChange: 'transform, opacity',
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 6 + (i % 4), // More predictable timing
                repeat: Infinity,
                delay: (i % 3) * 0.5, // Staggered delays
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            />
          );
        })}
        
        {/* Glowing orbs */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-500/90 to-blue-500/90 rounded-full blur-sm"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              willChange: 'transform, opacity',
            }}
            animate={{
              scale: [1, 20, 1],
              opacity: [0.6, 0.9, 0.5],
            }}
            transition={{
              duration: 8 + (i % 3), // More predictable timing
              repeat: Infinity,
              delay: i * 0.8, // Staggered delays
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;