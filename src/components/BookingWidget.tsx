import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BOOKING_LINKS } from '../config/constants';

interface BookingWidgetProps {
  className?: string;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ className = '' }) => {
  const { t } = useTranslation();
  
  return (
    <section id="booking-widget" className={`py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Header */}
          <div className="text-center mb-12">
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
              {t('booking_widget_title')}
            </motion.h2>
            
            <motion.p
              className="text-xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              {t('booking_widget_subtitle')}
            </motion.p>
          </div>

          {/* BilletWeb Iframe Container */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            {/* BilletWeb Integration */}
            <div className="relative w-full" style={{ minHeight: '600px' }}>
              <iframe
                src={BOOKING_LINKS.billetWeb}
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none',
                  borderRadius: '12px',
                }}
                title="InScape Movement Event Booking"
                className="bg-white rounded-xl shadow-xl"
                loading="lazy"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
              
              {/* Loading overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center pointer-events-none">
                <div className="text-white/60 text-center">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Calendar size={32} className="mx-auto mb-2" />
                  </motion.div>
                  <p className="text-sm">Loading booking system...</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="text-white/80 text-sm mb-4">
                Secure online booking powered by BilletWeb
              </p>
              <motion.a
                href={BOOKING_LINKS.billetWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-300 hover:text-purple-200 text-sm font-medium transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
              >
                <ExternalLink size={16} className="mr-1" />
                Open in new window
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingWidget;