import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import React from 'react';
import SpotlightCard from './SpotlightCard';

interface BookingCTAProps {
  onBookNow: () => void;
  className?: string;
}

const BookingCTA: React.FC<BookingCTAProps> = ({ onBookNow, className = '' }) => {
  return (
    <section className={`py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <SpotlightCard className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-12">
            <motion.div
              className="mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <Calendar size={48} className="text-purple-300 mx-auto mb-4" />
            </motion.div>
            
            <motion.h2
              className="text-3xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              Ready to Begin Your Journey?
            </motion.h2>
            
            <motion.p
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              Join us monthly for an authentic movement experience. 
              <br className="hidden lg:block" />
              Reserve your spot and step into presence, play, and connection.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <motion.button
                onClick={onBookNow}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 flex items-center group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Spot Now
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="text-center">
                <p className="text-white/80 text-sm">
                  Message on WhatsApp to reserve
                </p>
                <p className="text-white/60 text-xs mt-1">
                  €25 • Monthly events • Adults 18+
                </p>
              </div>
            </motion.div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTA;