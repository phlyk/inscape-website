import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import SpotlightCard from './SpotlightCard';

interface BookingCTAProps {
  onBookNow: () => void;
  className?: string;
}

const BookingCTA: React.FC<BookingCTAProps> = ({ onBookNow, className = '' }) => {
  const { t } = useTranslation();
  
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
              {t('ready_to_begin')}
            </motion.h2>
            
            <motion.p
              className="text-xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              {t('join_monthly')}
              <br className="hidden lg:block" />
              {t('reserve_spot')}
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
                {t('book_spot_now')}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="text-center">
                <p className="text-white/80 text-sm">
                  {t('message_whatsapp')}
                </p>
                <p className="text-white/60 text-xs mt-1">
                  {t('monthly_adults')}
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