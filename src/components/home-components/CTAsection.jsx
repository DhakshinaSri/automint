import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeCTASection() {
  return (
    <section className="relative w-full bg-[#BAFF29] text-[#1A1B41] font-sans px-4 sm:px-12 lg:px-24 py-16 lg:py-20 z-10 overflow-hidden select-none">
      
      {/* Editorial Structural Background Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-4 sm:left-[35%] w-[1px] h-full bg-[#1A1B41]" />
        <div className="absolute top-[50%] left-0 w-full h-[1px] bg-[#1A1B41]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Column: Heading & Framework Micro-Tags */}
        <div className="lg:col-span-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-[0.95]">
            Ready to Simplify Your <br />Business Complexity?
          </h2>
          <p className="text-xs sm:text-sm font-medium opacity-80 max-w-xl leading-relaxed">
            Partner with our cross-disciplinary team to build practical, scalable, and secure technology solutions built entirely around your strategic growth objectives.
          </p>
        </div>

        {/* Right Column: High-End Programmatic Navigation Trigger */}
        <div className="lg:col-span-4 flex lg:justify-end">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3.5 border border-[#1A1B41] text-xs font-bold uppercase tracking-wider rounded-xl bg-[#1A1B41] text-white hover:bg-white hover:text-[#1A1B41] transition-all duration-300 shadow-md hover:shadow-xl group w-full sm:w-auto"
          >
            Start a Conversation
            <svg 
              className="w-3.5 h-3.5 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>

      {/* Baseline Isolation Ribbon */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#3F94EF]/30" />

    </section>
  );
}