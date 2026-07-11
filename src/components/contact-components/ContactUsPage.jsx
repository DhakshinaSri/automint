import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from "@/components/contact-components/ContactForm";

export default function ContactUsPage() {
  // Color Palette Reference Mapping matching corporate identity
  const colors = {
    primary: '#3F94EF',    // Dodger blue
    secondary: '#C2E7DA',  // Aero blue
    surface: '#F1FFE7',    // Honeydew
    textHeavy: '#1A1B41',  // Space cadet
    accent: '#BAFF29',     // Bitter lime
  };

  // Professional vertical entrance animation (strictly level)
  const faderUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  return (
    <main className="w-full min-h-screen select-none relative bg-white">
      
      {/* Dynamic Background Accents using new corporate theme colors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-1/4 -right-40 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{ backgroundColor: colors.surface }}
        />
        <div 
          className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          style={{ backgroundColor: colors.secondary }}
        />
      </div>

      {/* --- SECTION 1: HEADER & PRIMARY CONTACT HUB --- */}
      <section className="relative z-10 pt-32 pb-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          
          {/* Typographical Header Section */}
          <motion.div variants={faderUp} className="space-y-4 max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase leading-none" style={{ color: colors.textHeavy }}>
              Let's connect
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed max-w-xl" style={{ color: colors.textHeavy }}>
              Reach out to our engineering and consulting teams to begin simplifying operational complexity through purposeful technology.
            </p>
          </motion.div>

          {/* Address & Hours (Left) + ContactForm (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Pillar: Typographical Details (Card-Free) */}
            <div className="lg:col-span-5 space-y-20">
              {/* Corporate Office */}
              <div className="space-y-6">
                <h3 className="text-sm font-bold tracking-widest uppercase opacity-40" style={{ color: colors.textHeavy }}>
                  Corporate Office
                </h3>
                <div className="text-sm sm:text-base font-normal leading-relaxed" style={{ color: colors.textHeavy }}>
                  <p className="font-black text-xl mb-1" style={{ color: colors.primary }}>Automint</p>
                  <p className="opacity-80">GoodWorks GCC Nexus, 6th Floor</p>
                  <p className="opacity-80">Jupiter Block, Prestige Tech Park ORR</p>
                  <p className="opacity-80">Marathahalli – Kadubeesanahalli</p>
                  <p className="opacity-80">Bengaluru, Karnataka – 560103</p>
                  <p className="opacity-80">India</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="space-y-8">
                <h3 className="text-sm font-bold tracking-widest uppercase opacity-40" style={{ color: colors.textHeavy }}>
                  Business Hours
                </h3>
                <div className="space-y-4">
                  <div className="border-b pb-3" style={{ borderColor: colors.secondary }}>
                    <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: colors.primary }}>Weekdays</p>
                    <p className="text-sm font-medium" style={{ color: colors.textHeavy }}>Monday – Friday: 9:00 AM – 6:00 PM (IST)</p>
                  </div>
                  <div className="border-b pb-3" style={{ borderColor: colors.secondary }}>
                    <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: colors.primary }}>Saturdays</p>
                    <p className="text-sm font-medium" style={{ color: colors.textHeavy }}>Saturday: 9:30 AM – 1:30 PM (IST)</p>
                  </div>
                  <div className="pb-3">
                    <p className="text-[9px] font-bold uppercase tracking-wider mb-0.5" style={{ color: colors.primary }}>Sundays</p>
                    <p className="text-sm font-medium" style={{ color: colors.textHeavy }}>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pillar: Native Contact Form Embed */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}