import React, { useState } from 'react';

export default function EditorialHomeContinued() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative min-h-screen bg-white text-[#1A1B41] font-sans px-6 sm:px-12 lg:px-24 py-24 z-10 overflow-hidden flex flex-col justify-center"> 
      <div className="max-w-7xl mx-auto w-full space-y-16">
        {/* Section Header with Asymmetric Typography Block */}
        <div className="border-l-8 border-[#3F94EF] pl-6 max-w-3xl transform transition-transform duration-500 hover:translate-x-2">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-[#1A1B41]">
            Technology That Works <br />
            <span className="text-[#3F94EF]">for People</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Core Philosophy (Spans 7 columns for asymmetrical weight) */}
          <div 
            className={`lg:col-span-7 bg-white border border-[#C2E7DA] p-8 sm:p-12 rounded-3xl transition-all duration-500 ease-out flex flex-col justify-between relative overflow-hidden group ${
              hoveredCard === 1 ? 'shadow-2xl -translate-y-2 border-[#3F94EF]' : 'shadow-md'
            }`}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Kinetic decorative background accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-[#BAFF29] rounded-bl-full transition-transform duration-500 origin-top-right ${
              hoveredCard === 1 ? 'scale-110 opacity-20' : 'scale-75 opacity-0'
            }`} />

            <div className="space-y-6 relative z-10">
              <p className="text-xl sm:text-2xl text-[#1A1B41] font-medium leading-relaxed tracking-tight">
                At Automint, we believe successful digital transformation begins with understanding people, processes, and business goals. Technology is a powerful enabler, but lasting success comes from combining intelligent systems with human expertise.
              </p>
            </div>
            
            <div className="pt-12 flex items-center justify-between border-t border-[#C2E7DA]/40 mt-8">
              <div className="w-8 h-8 rounded-full bg-[#1A1B41] flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:rotate-45">→</div>
            </div>
          </div>

          {/* Card 2: Strategic Client Approach (Spans 5 columns) */}
          <div 
            className={`lg:col-span-5 bg-white border border-[#C2E7DA] p-8 sm:p-12 rounded-3xl transition-all duration-500 ease-out flex flex-col justify-between relative overflow-hidden group ${
              hoveredCard === 2 ? 'shadow-2xl -translate-y-2 border-[#BAFF29]' : 'shadow-md'
            }`}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-[#1A1B41]/90 leading-relaxed">
                Rather than offering one-size-fits-all products, we work closely with every client to understand operational challenges, identify opportunities for improvement, and implement technology strategies that support sustainable growth.
              </p>
            </div>

            <div className="pt-12 flex items-center justify-between border-t border-[#C2E7DA]/40 mt-8">
              <span className={`w-3 h-3 rounded-full transition-colors duration-300 ${hoveredCard === 2 ? 'bg-[#BAFF29] animate-ping' : 'bg-[#C2E7DA]'}`} />
            </div>
          </div>

          {/* Card 3: The Multidisciplinary Team Infrastructure (Full Width Base Layer) */}
          <div 
            className={`lg:col-span-12 bg-[#1A1B41] text-white p-8 sm:p-12 lg:p-16 rounded-3xl transition-all duration-500 ease-out flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden group ${
              hoveredCard === 3 ? 'shadow-2xl scale-[1.01]' : 'shadow-md'
            }`}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Ambient Kinetic Gradient Glow within the dark element */}
            <div className={`absolute -right-24 -bottom-24 w-96 h-96 bg-[#3F94EF] rounded-full filter blur-[100px] transition-opacity duration-700 ${
              hoveredCard === 3 ? 'opacity-30' : 'opacity-10'
            }`} />

            <div className="max-w-3xl space-y-4 relative z-10">
              <p className="text-lg sm:text-xl lg:text-2xl text-[#F1FFE7] font-normal leading-relaxed tracking-wide">
                Our multidisciplinary team of business consultants, software engineers, automation specialists, cloud architects, data analysts, and cybersecurity professionals collaborates with organizations to design solutions that create measurable value.
              </p>
            </div>

            <div className="flex-shrink-0 relative z-10 flex flex-col items-start md:items-end gap-2">
              <div className="text-4xl lg:text-5xl font-black text-[#BAFF29] tracking-tighter">100%</div>
              <div className="text-xs font-mono tracking-widest text-[#C2E7DA] uppercase">Collaborative Alignment</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}