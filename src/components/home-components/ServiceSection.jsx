import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeServicesSection() {
  const corporateServices = [
    {
      title: "Intelligent Business Automation",
      desc: "Automate routine processes, approvals, reporting, documentation, and operational workflows.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4" />
        </svg>
      )
    },
    {
      title: "Digital Transformation Consulting",
      desc: "Assess current environments, identify improvements, and develop strategic roadmaps.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Custom Software Development",
      desc: "Design and develop scalable software solutions emphasizing usability, security, and maintenance.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Data Analytics & Business Intelligence",
      desc: "Collect, organize, analyze, and visualize data to support informed decision-making.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    },
    {
      title: "Cloud Solutions",
      desc: "Migrate workloads, optimize cloud environments, and improve operational resilience.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Cybersecurity & Governance",
      desc: "Implement security frameworks, risk assessments, and secure governance strategies.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full bg-white text-[#1A1B41] font-sans px-4 sm:px-12 lg:px-24 py-20 z-10 overflow-hidden border-b border-[#C2E7DA]/40">
      
      {/* Structural Minimalist Grid Matrix (Visual Element) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-4 sm:left-[25%] w-[1px] h-full bg-[#C2E7DA]" />
        <div className="absolute top-[50%] left-0 w-full h-[1px] bg-[#C2E7DA]" />
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-12 relative z-10">
        
        {/* Upper Frame Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#C2E7DA]/60">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase leading-none">
              Our Services
            </h2>
          </div>

          <div className="flex-shrink-0">
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center px-5 py-2.5 border border-[#1A1B41] text-[10px] font-bold uppercase tracking-wider rounded bg-white hover:bg-[#1A1B41] hover:text-white transition-all duration-300 group"
            >
              Explore All Services
              <svg className="w-3 h-3 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Contemporary Editorial Capability Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#F1FFE7]/20 border border-[#C2E7DA]/50 hover:border-[#3F94EF] rounded-xl p-5 transition-all duration-300 group flex flex-col justify-between min-h-[160px] hover:bg-white hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  {/* Clean SVG Vector Output Container */}
                  <div className="text-[#3F94EF] group-hover:text-[#1A1B41] transition-colors duration-300 p-2 bg-white rounded-lg border border-[#C2E7DA]/30 shadow-sm">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-sm font-bold tracking-tight text-[#1A1B41] group-hover:text-[#3F94EF] transition-colors duration-200">
                  {service.title}
                </h3>
              </div>

              <p className="text-base text-[#1A1B41]/70 leading-relaxed font-normal mt-2 border-t border-[#C2E7DA]/20 pt-2">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}