import { motion, useScroll, useTransform } from "framer-motion";
import { AudioLines, Heart, Speaker } from "lucide-react";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import djPhoto from "../assets/philkami-headshot-colours-min.png";
import { SOCIAL_LINKS } from "../config/constants";

const DJIntroduction: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-gradient-to-b from-gray-900 via-black to-purple-900/20 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div className="max-w-6xl mx-auto" style={{ opacity }}>
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {t("meet_your")} {t("journey_guide")}
              </span>
            </motion.h2>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Photo Side */}
            <motion.div
              className="flex justify-center lg:justify-end order-1 lg:order-1"
              style={{ y, rotateX, scale }}
            >
              <div className="relative">
                {/* Glowing background rings */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0px rgba(168, 85, 247, 0.4)",
                      "0 0 0 20px rgba(168, 85, 247, 0.1)",
                      "0 0 0 40px rgba(168, 85, 247, 0.05)",
                      "0 0 0 0px rgba(168, 85, 247, 0.4)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-full p-1"
                  style={{
                    background: "conic-gradient(from 0deg, #a855f7, #3b82f6, #8b5cf6, #a855f7)",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-black" />
                </motion.div>

                {/* Main photo */}
                <motion.div
                  className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 60px rgba(168, 85, 247, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={djPhoto}
                    alt="philkami - INSCAPE Movement DJ"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
                </motion.div>

                {/* Floating music icons */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Speaker size={24} className="text-white" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -15, 0, 15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <AudioLines size={28} className="text-white" />
                </motion.div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              className="text-center lg:text-left order-2 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <motion.div
                className="mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                whileTap={{ 
                  scale: 1.2, 
                  x: -60,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <Heart size={48} className="text-purple-400 mx-auto lg:mx-0 mb-4 cursor-pointer" />
              </motion.div>

              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false }}
              >
                {t("meet_your")}{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {t("journey_guide")}
                </span>
              </motion.h2>

              <motion.div
                className="space-y-4 text-lg text-white/90 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <p>
                  <span className="text-purple-300 font-semibold">{t("dj_intro_1")}</span>
                </p>
                <p>{t("dj_intro_2")}</p>
                <p>
                  <span className="text-blue-300 font-medium">{t("dj_intro_3")}</span>
                </p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
              >
                <motion.a
                  href={SOCIAL_LINKS.soundcloud}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Speaker size={20} className="mr-2" />
                  {t("explore_mixes")}
                </motion.a>

                <motion.div
                  className="text-center sm:text-left text-white/70 text-sm flex items-center justify-center lg:justify-start"
                  whileHover={{ scale: 1.02 }}
                >
                  <span>{t("creating_spaces")}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
};

export default DJIntroduction;
