import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev === 2 ? 0 : prev + 1));
    }, 3000); // controla la duración de cada fase

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero_agroindustrial_tivan.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 md:px-10 flex items-center">
        <div className="w-full text-white">

          <AnimatePresence mode="wait">

            {/* TEXTO 1 */}
            {step === 0 && (
              <motion.h1
                key="title1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-extrabold leading-[1.1]"
              >
                Nutriendo y protegiendo <br />
                <span className="text-green-400">
                  tus cultivos
                </span>
              </motion.h1>
            )}

            {/* TEXTO 2 */}
            {step === 1 && (
              <motion.h1
                key="title2"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.8 }}
                className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-extrabold leading-[1.1]"
              >
                Impulsando la eficiencia <br />
                <span className="text-green-400">
                  en el campo
                </span>
              </motion.h1>
            )}

          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}