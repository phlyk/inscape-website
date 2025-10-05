import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Euro, Heart, MapPin, Music, Shield, Users } from 'lucide-react';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SpotlightCard from './SpotlightCard';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 ${className}`}
      style={{ y, opacity }}
    >
      {children}
    </motion.section>
  );
};

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <SpotlightCard
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: false }}
      whileHover={{ y: -5 }}
    >
      <Icon size={32} className="text-purple-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/90">{description}</p>
    </SpotlightCard>
  );
};

const MainContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white">
      {/* What is InScape Movement */}
      <Section id="what-to-expect" className="bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              {t('what_is_inscape')}
            </motion.h2>
            <motion.div
              className="text-xl lg:text-2xl text-white/90 leading-relaxed space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: false }}
            >
              {t('what_is_description').split('\n').map((paragraph, index) => (
                <p key={index} className={index === 3 ? "text-lg text-purple-300 font-medium" : ""}>
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section id="key-features" className="bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            {t('key_features')}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title={t('safe_space')}
              description={t('safe_space_desc')}
              delay={0}
            />
            <FeatureCard
              icon={Music}
              title={t('diverse_soundscape')}
              description={t('diverse_soundscape_desc')}
              delay={0.1}
            />
            <FeatureCard
              icon={Heart}
              title={t('gentle_guidance')}
              description={t('gentle_guidance_desc')}
              delay={0.2}
            />
            <FeatureCard
              icon={Users}
              title={t('bilingual')}
              description={t('bilingual_desc')}
              delay={0.3}
            />
            <FeatureCard
              icon={Heart}
              title={t('barefoot')}
              description={t('barefoot_desc')}
              delay={0.4}
            />
            <FeatureCard
              icon={Users}
              title={t('closing_circle')}
              description={t('closing_circle_desc')}
              delay={0.5}
            />
          </div>
        </div>
      </Section>

      {/* Music Journey */}
      <Section id="music-journey" className="bg-gradient-to-b from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            >
              {t('musical_journey')}
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <SpotlightCard className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">{t('wave_structure')}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {t('wave_structure_desc')}
                  </p>
                </SpotlightCard>
                
                <SpotlightCard className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-300">{t('diversity')}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {t('diversity_desc')}
                  </p>
                </SpotlightCard>
                
                <SpotlightCard className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-pink-300">{t('responsive')}</h3>
                  <p className="text-white/90 leading-relaxed">
                    {t('responsive_desc')} {t('discovery_desc')}
                  </p>
                </SpotlightCard>
              </motion.div>
              
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
              >
                <SpotlightCard className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <Music size={48} className="text-purple-400 mb-4 mx-auto lg:mx-0" />
                  <h3 className="text-2xl font-bold mb-4">{t('sound_system')}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {t('sound_system_desc')}
                  </p>
                  <motion.a
                    href="https://soundcloud.com/philkami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Music size={20} className="mr-2" />
                    {t('soundcloud')}
                  </motion.a>
                </SpotlightCard>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Practical Details */}
      <Section id="practical-details" className="bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t('practical_details')}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SpotlightCard
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <MapPin size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('location')}</h3>
              <p className="text-white/90">{t('location_desc')}</p>
              <p className="text-sm text-white/70 mt-2">{t('parking_desc')}</p>
            </SpotlightCard>
            
            <SpotlightCard
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <Clock size={32} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('arrival')}</h3>
              <p className="text-white/90">{t('arrival_desc')}</p>
              <p className="text-white/90">{t('movement_time_desc')}</p>
              <p className="text-sm text-white/70 mt-2">{t('age_desc')}</p>
            </SpotlightCard>
            
            <SpotlightCard
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <Euro size={32} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('contribution')}</h3>
              <p className="text-white/90">{t('contribution_desc')}</p>
              <p className="text-sm text-white/70 mt-2"></p>
            </SpotlightCard>
            
            <SpotlightCard
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <Users size={32} className="text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('parking')}</h3>
              <p className="text-white/90">{t('parking_desc')}</p>
              <p className="text-sm text-white/70 mt-2"></p>
            </SpotlightCard>
            
            <SpotlightCard
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center md:col-span-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              whileHover={{ y: -5 }}
            >
              <Heart size={32} className="text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('bring')}</h3>
              <p className="text-white/90">{t('bring_desc')}</p>
              <p className="text-sm text-white/70 mt-2">{t('facilities_desc')}</p>
            </SpotlightCard>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MainContent;