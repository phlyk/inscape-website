import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
import heroBg from '../assets/hero-bg.png';
import inscapeLogo from '../assets/INSCAPE.png';

interface HeroProps {
  onBookNow: () => void;
  onLearnMore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookNow, onLearnMore }) => {
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
            className="h-24 md:h-32 lg:h-40 w-auto filter drop-shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </motion.div>
        
        {/* Movement Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white/90 tracking-wider">
            Movement
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-light leading-relaxed max-w-4xl mx-auto"
        >
          Step into the hall, let the music rise, and let everything else fall away.
          <span className="block mt-2 text-lg md:text-xl text-white/70">
            Two hours of authentic movement. No judgment. No distractions. Just presence.
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
            Book Your Journey
          </motion.button>
          
          <motion.button
            onClick={onLearnMore}
            className="border-2 border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
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
        {/* Cursor-following particles (desktop only) */}
        {!isMobile && Array.from({ length: 8 }).map((_, i) => {
          const delay = i * 0.1;
          const distance = 20 + i * 15;
          return (
            <motion.div
              key={`cursor-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
              style={{
                x: useTransform(cursorX, (x) => x - distance * Math.cos(delay)),
                y: useTransform(cursorY, (y) => y - distance * Math.sin(delay)),
                opacity: 0.6 - i * 0.05,
                scale: 1 - i * 0.1,
              }}
            />
          );
        })}
        
        {/* Ambient floating particles */}
        {Array.from({ length: 30 }).map((_, i) => {
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
              }}
              animate={{
                y: [-30, 30, -30],
                x: [-10, 10, -10],
                opacity: [0.1, 0.6, 0.1],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          );
        })}
        
        {/* Glowing orbs */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-sm"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;