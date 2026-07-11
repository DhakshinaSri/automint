import React, { useState } from 'react';

export default function EditorialHome() {
  const [activeTab, setActiveTab] = useState(0);

  // Split your exact content chunks cleanly for the dynamic state engine
  const sectionsData = [
    {
      label: "OPERATIONAL DYNAMICS",
      text: "Modern businesses face increasing complexity—from managing operations and data to delivering exceptional customer experiences. At Automint, we help organizations simplify these challenges through intelligent technology, business automation, and digital transformation solutions designed around people."
    },
    {
      label: "CORE PHILOSOPHY",
      text: "Our philosophy is straightforward: technology should enhance human capability, not replace it. Every solution we create is intended to reduce repetitive work, improve operational efficiency, and enable teams to focus on innovation, collaboration, and strategic growth."
    },
    {
      label: "SYSTEM CAPABILITIES",
      text: "Whether you are modernizing legacy systems, streamlining workflows, integrating enterprise applications, or leveraging intelligent analytics, Automint delivers practical, scalable, and secure solutions tailored to your business objectives."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1A1B41] font-sans overflow-x-hidden selection:bg-[#BAFF29] selection:text-[#1A1B41] relative flex flex-col justify-between">
      
      {/* SECTION 1: EDITORIAL MASTER BANNER */}
      <header className="w-full px-6 sm:px-12 lg:px-24 pt-16 pb-8 border-b border-[#C2E7DA]/40 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-block text-xs font-black uppercase tracking-[0.25em] text-[#3F94EF]">
            Intelligent Automation. Human Excellence.
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
            Transforming Businesses Through Intelligent Technology and Human Expertise
          </h1>
        </div>
        
        <div className="border-t-2 md:border-t-0 md:border-l-2 border-[#BAFF29] pt-4 md:pt-0 md:pl-6 max-w-xs">
          <h2 className="text-sm sm:text-base font-bold text-[#1A1B41]/70 uppercase tracking-wider">
            Building Smarter Businesses, Empowering Better Decisions
          </h2>
        </div>
      </header>

      {/* SECTION 2: ASYMMETRIC CONTEMPORARY DISPLAY CANVAS */}
      <main className="flex-grow w-full flex flex-col lg:flex-row border-b border-[#C2E7DA]/40 min-h-[60vh]">
        
        {/* Left Control Panel: High-End Interactive Indicators */}
        <div className="w-full lg:w-2/5 p-6 sm:p-12 lg:p-24 flex flex-col justify-center gap-6 border-b lg:border-b-0 lg:border-r border-[#C2E7DA]/40 bg-[#F1FFE7]/20">
          {sectionsData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="text-left w-full block group focus:outline-none"
            >
              <div className="flex items-center justify-between py-4 border-b border-[#1A1B41]/10">
                <span className={`text-xs font-bold tracking-[0.2em] transition-all duration-300 ${
                  activeTab === index ? 'text-[#3F94EF] pl-4' : 'text-[#1A1B41]/40 group-hover:text-[#1A1B41] group-hover:pl-2'
                }`}>
                  {activeTab === index ? '■ ' : '□ '} {item.label}
                </span>

              </div>
            </button>
          ))}
        </div>

        {/* Right Fluid Panel: Content Architecture Transition Window */}
        <div className="w-full lg:w-3/5 p-6 sm:p-12 lg:p-24 flex flex-col justify-center relative bg-white">
          
          {/* Kinetic Geometric Background Matrix */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <div className={`absolute right-12 bottom-12 w-64 h-64 border border-[#3F94EF]/20 rounded-full transition-transform duration-1000 ease-out ${
              activeTab === 0 ? 'scale-100 translate-x-0' : activeTab === 1 ? 'scale-125 translate-x-12' : 'scale-75 -translate-y-12'
            }`} />
            <div className={`absolute right-24 top-12 w-32 h-32 bg-[#BAFF29]/10 rounded-xl transition-transform duration-1000 ease-out mix-blend-multiply ${
              activeTab === 0 ? 'rotate-45 scale-75' : activeTab === 1 ? 'rotate-90 scale-110 translate-y-8' : 'rotate-12 scale-100'
            }`} />
            <div className={`absolute left-12 bottom-24 w-48 h-48 bg-[#C2E7DA]/20 rounded-full blur-2xl transition-all duration-1000 ${
              activeTab === 1 ? 'opacity-100' : 'opacity-0'
            }`} />
          </div>

          {/* Core Content Presentation Area */}
          <div className="relative z-10 max-w-2xl transition-all duration-500 ease-in-out transform translate-y-0 opacity-100">
            
            {/* Displaying content dynamically but securely without modifying strings */}
            <p className="text-xl sm:text-2xl text-[#1A1B41] font-medium leading-relaxed tracking-tight transition-all duration-300">
              {sectionsData[activeTab].text}
            </p>
            
            {/* Micro UX Signature element */}
            <div className="mt-12 flex items-center gap-4">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-[#C2E7DA] to-transparent" />
            </div>

          </div>
        </div>

      </main>

      {/* Decorative Anchor Base */}
      <div className="h-4 w-full bg-gradient-to-r from-[#3F94EF] via-[#C2E7DA] to-[#BAFF29] opacity-30" />

    </div>
  );
}