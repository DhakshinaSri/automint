import React from 'react';

export default function ProfessionalFluidStory() {
  const storySegments = [
    {
      label: "THE CONSTRAINTS",
      text: "Every organization strives to become faster, smarter, and more efficient, yet many remain constrained by outdated processes, disconnected systems, and manual operations."
    },
    {
      label: "THE FOUNDATION",
      text: "Automint was founded with a simple purpose: to help organizations embrace digital innovation in a practical, responsible, and business-focused way."
    },
    {
      label: "THE INTENT",
      text: "We recognized that technology should simplify work—not create complexity. It should empower employees, improve customer experiences, and enable organizations to make informed decisions with confidence."
    },
    {
      label: "THE IMPACT",
      text: "Today, Automint partners with businesses across industries to modernize operations, automate repetitive tasks, integrate digital platforms, and unlock the value of data through intelligent solutions that keep people at the center of every transformation."
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#1A1B41] text-white font-sans px-4 sm:px-12 lg:px-24 py-16 lg:py-24 z-10 overflow-hidden flex flex-col justify-center">
      
      {/* Precision Geometric Framework Background Accent */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-4 sm:left-[25%] w-[1px] h-full bg-[#C2E7DA]" />
        <div className="absolute top-0 left-[75%] w-[1px] h-full bg-[#C2E7DA]" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative z-10">
        
        {/* Left Column: Fixed Minimal Header Branding Block */}
        <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95] text-transparent bg-clip-text bg-gradient-to-br from-white via-[#C2E7DA] to-white/40">
            Our <br className="hidden lg:block" />Story
          </h2>
        </div>

        {/* Right Column: Linear Continuous Flow Architecture */}
        <div className="lg:col-span-8 space-y-4">
          {storySegments.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white/[0.02] border border-white/10 hover:border-[#BAFF29]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group transition-all duration-300"
            >


              {/* High-Legibility Scaled Typography */}
              <p className="text-base sm:text-lg text-[#C2E7DA] font-light leading-relaxed tracking-wide transition-colors duration-300 group-hover:text-white">
                {item.text}
              </p>

              {/* Corner Micro UX Tech Spec Decoration */}
              <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#BAFF29] rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Decorative Structural Baseline Grounding */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#BAFF29]/20 to-transparent mt-12" />

    </section>
  );
}