import { motion, useInView } from 'framer-motion';
import { Clock, Euro, Heart, MapPin, Music, Shield, Users } from 'lucide-react';
import React, { useRef } from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 ${className}`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} className="text-white" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const MainContent: React.FC = () => {
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
              viewport={{ once: true }}
            >
              What is InScape Movement?
            </motion.h2>
            <motion.div
              className="text-xl lg:text-2xl text-white/90 leading-relaxed space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                It's simple: you step into the hall, the music rises, and everything else falls away.
              </p>
              <p>
                Two hours of moving however you want with no judgment, no distractions.
              </p>
              <p>
                People, both alone and together, are guided by the music, discovering what the moment brings.
              </p>
              <p className="text-lg text-purple-300 font-medium">
                No talking, no phones, no substances — only presence, play, and connection.
              </p>
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
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Shield}
              title="Safe Space"
              description="A non-judgmental environment to connect with your body, the music, and express authentically. Non-verbal connection with others is welcomed."
              delay={0}
            />
            <FeatureCard
              icon={Music}
              title="Living Soundscape"
              description="Experience a diverse, ever-evolving musical journey that guides your movement through different phases and emotions."
              delay={0.1}
            />
            <FeatureCard
              icon={Heart}
              title="Gentle Guidance"
              description="Receive gentle invitations to awareness of body, space, others, and silence, along with different forms of movement exploration."
              delay={0.2}
            />
            <FeatureCard
              icon={Users}
              title="Bilingual Experience"
              description="Guided in both French & English, adapting to what's needed in the moment for our diverse community."
              delay={0.3}
            />
            <FeatureCard
              icon={Heart}
              title="Barefoot Connection"
              description="Dance without shoes (barefoot or dance socks) to deepen your connection with the ground and your body."
              delay={0.4}
            />
            <FeatureCard
              icon={Users}
              title="Community Circle"
              description="After dancing, join our closing circle with time for sharing and authentic community connection."
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
              viewport={{ once: true }}
            >
              Music Journey
            </motion.h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Wave-like Journey</h3>
                  <p className="text-white/90 leading-relaxed">
                    Experience a carefully crafted DJ set that navigates through different phases: 
                    <span className="text-purple-300 font-medium"> Rise, Peak, Transition, Challenge, Land</span>
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-300">Diverse & Surprising</h3>
                  <p className="text-white/90 leading-relaxed">
                    Strong emphasis on diversity and surprise: ambient, jazz, downtempo, world, electronic, 
                    techno, bass music, instrumental hip-hop, even occasional rock — and many more genres.
                  </p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-pink-300">Live & Adaptive</h3>
                  <p className="text-white/90 leading-relaxed">
                    Live flowing DJ set that adapts to the energy in the room. 
                    Expect most tracks to be unfamiliar — discovery is intentional.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <Music size={48} className="text-purple-400 mb-4 mx-auto lg:mx-0" />
                  <h3 className="text-2xl font-bold mb-4">Professional Sound System</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Immerse yourself in high-quality professional sound that brings every beat, 
                    every melody, every silence to life.
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
                    Listen on SoundCloud
                  </motion.a>
                </div>
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
            Practical Details
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <MapPin size={32} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-white/90">26 Rue Marca, Pau</p>
              <p className="text-sm text-white/70 mt-2">~3 mins walk from Place Verdun Sud</p>
            </motion.div>
            
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Clock size={32} className="text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Schedule</h3>
              <p className="text-white/90">Doors: 19:45</p>
              <p className="text-white/90">Movement: 20:00 → 22:00</p>
              <p className="text-sm text-white/70 mt-2">Please arrive before 20:00</p>
            </motion.div>
            
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Euro size={32} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contribution</h3>
              <p className="text-white/90">€25 cash on the door</p>
              <p className="text-sm text-white/70 mt-2">Concessions for students/job-seekers available</p>
            </motion.div>
            
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center md:col-span-2 lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Users size={32} className="text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Age & Parking</h3>
              <p className="text-white/90">Adults only 18+</p>
              <p className="text-sm text-white/70 mt-2">Free parking Saturday evenings</p>
            </motion.div>
            
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center md:col-span-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Heart size={32} className="text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">What to Bring</h3>
              <p className="text-white/90">Comfortable clothes & water bottle</p>
              <p className="text-sm text-white/70 mt-2">Toilet & running water available on site</p>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default MainContent;