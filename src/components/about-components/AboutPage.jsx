import React from 'react';

export default function AboutPage() {
  const missionItems = [
    { title: "Deliver", text: "innovative and practical technology solutions that solve real business challenges." },
    { title: "Simplify", text: "complex operations through intelligent automation and digital integration." },
    { title: "Empower", text: "organizations with secure, scalable, and future-ready technologies." },
    { title: "Foster", text: "long-term partnerships built on trust, transparency, and measurable outcomes." },
    { title: "Enable", text: "people to perform at their best by eliminating repetitive tasks and enhancing productivity." }
  ];

  const coreValues = [
    { title: "Innovation with Purpose", text: "We embrace emerging technologies that deliver tangible business value and meaningful outcomes." },
    { title: "Customer Commitment", text: "Our clients’ success defines our success. We work collaboratively to understand their goals and deliver solutions that exceed expectations." },
    { title: "Integrity", text: "Transparency, accountability, and ethical business practices guide every decision we make." },
    { title: "Excellence", text: "We maintain the highest standards in quality, execution, and customer service." },
    { title: "Collaboration", text: "We believe the best solutions emerge from diverse perspectives and close partnerships." },
    { title: "Continuous Learning", text: "Technology evolves rapidly, and so do we. Continuous improvement is part of our culture." }
  ];

  const whyChooseUs = [
    { title: "Business-First Approach", text: "We begin by understanding your business objectives before recommending technology solutions. This ensures every investment contributes directly to measurable outcomes." },
    { title: "Human-Centered Innovation", text: "Technology should enhance the capabilities of people, enabling them to focus on creativity, problem-solving, and strategic initiatives." },
    { title: "Customized Solutions", text: "Every organization is unique. We design solutions tailored to your industry, operational model, and long-term goals." },
    { title: "Scalable Technologies", text: "Our solutions are built to grow alongside your business, supporting expansion and evolving operational requirements." },
    { title: "Enterprise-Grade Security", text: "Security, compliance, and data protection are integrated into every stage of solution design and implementation." },
    { title: "Long-Term Partnership", text: "From initial consultation to ongoing support, we remain committed to helping our clients achieve continuous improvement." }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1A1B41] font-sans selection:bg-[#BAFF29] selection:text-[#1A1B41] overflow-x-hidden relative">
      
      {/* SECTION 1: IDENTITY & CAPABILITY CROSS-GRID */}
      <section className="relative px-4 sm:px-12 lg:px-24 py-16 md:py-24 border-b border-[#C2E7DA]/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Asymmetric Side Header */}
          <div className="lg:col-span-4 space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase leading-none">
              Who <br className="hidden lg:block"/>We Are
            </h1>
          </div>

          {/* Editorial Streamed Content */}
          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-[#1A1B41]/90 leading-relaxed font-normal">
            <p className="text-lg sm:text-xl font-medium tracking-tight text-[#1A1B41] border-l-4 border-[#BAFF29] pl-4">
              Automint is a technology consulting and digital transformation company dedicated to helping organizations navigate the evolving digital landscape. We specialize in designing intelligent business solutions that improve operational efficiency, strengthen decision-making, and accelerate sustainable growth.
            </p>
            <p>
              Our expertise spans enterprise software development, workflow automation, cloud technologies, business intelligence, data engineering, cybersecurity, and intelligent digital platforms. Every solution is carefully aligned with our clients’ strategic objectives, ensuring technology becomes a catalyst for business success rather than an isolated investment.
            </p>
            <p className="pt-4 border-t border-[#C2E7DA]/40 text-base sm:text-base text-[#1A1B41]/70 tracking-wide">
              We serve organizations of all sizes—from emerging startups to large enterprises—across healthcare, education, manufacturing, finance, logistics, retail, government, and professional services.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE NORTH STAR (VISION & MISSION OVERLAPPING LAYER) */}
      <section className="relative px-4 sm:px-12 lg:px-24 py-20 bg-[#F1FFE7]/50 border-b border-[#C2E7DA]/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Vision Block */}
          <div className="lg:col-span-5 bg-white border border-[#C2E7DA] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between group hover:border-[#3F94EF] transition-colors duration-300">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase">Vision</h2>
              <p className="text-sm sm:text-base text-[#1A1B41]/80 leading-relaxed font-semibold">
                To become a globally trusted technology partner, enabling organizations to achieve sustainable growth through intelligent innovation, operational excellence, and human-centered digital transformation.
              </p>
            </div>
            <div className="w-12 h-1 bg-[#3F94EF] mt-8 rounded-full" />
          </div>

          {/* Mission Continuous Flow Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase">Mission</h2>
            </div>
            
            <div className="space-y-3">
              {missionItems.map((item, index) => (
                <div key={index} className="bg-white border border-[#C2E7DA]/40 rounded-xl p-4 flex gap-4 items-start group hover:shadow-md transition-all">
                  <span className="text-xs font-mono font-bold text-[#3F94EF] bg-[#F1FFE7] px-2 py-0.5 rounded">
                    {index + 1}
                  </span>
                  <p className="text-base sm:text-base leading-relaxed text-[#1A1B41]/90">
                    <strong className="text-[#1A1B41] font-bold">{item.title}</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: CORE VALUES ASYMMETRIC MESH GRID */}
      <section className="relative px-4 sm:px-12 lg:px-24 py-20 bg-white border-b border-[#C2E7DA]/40">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div key={index} className="border-t border-[#1A1B41]/10 pt-4 group hover:border-[#BAFF29] transition-colors duration-300">
                <h3 className="text-base font-bold text-[#1A1B41] mb-2 tracking-tight group-hover:text-[#3F94EF] transition-colors">
                  {value.title}
                </h3>
                <p className="text-base sm:text-base text-[#1A1B41]/80 leading-relaxed font-normal">
                  {value.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE AUTOMINT MATRIX FLOW */}
      <section className="relative px-4 sm:px-12 lg:px-24 py-20 bg-[#1A1B41] text-white overflow-hidden">
        
        {/* Abstract Background Design Grid */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-[50%] w-[1px] h-full bg-white" />
          <div className="absolute top-[50%] left-0 w-full h-[1px] bg-white" />
        </div>

        <div className="max-w-6xl mx-auto space-y-16 relative z-10">
          
          {/* Section Dynamic Heading Block */}
          <div className="border-l-4 border-[#BAFF29] pl-4 max-w-2xl space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase leading-none">
              Why Choose Automint
            </h2>
            <h3 className="text-sm sm:text-base font-bold text-[#BAFF29] uppercase tracking-wider pt-1">
              A Trusted Partner for Intelligent Transformation
            </h3>
            <p className="text-base sm:text-base text-[#C2E7DA] font-normal max-w-xl pt-2">
              Organizations choose Automint because we combine technical expertise with a deep understanding of business operations. Our approach is practical, collaborative, and results-oriented.
            </p>
          </div>

          {/* Core Grid Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#BAFF29]/40 transition-all duration-300 group flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-2">
                    <span className="text-[10px] font-mono font-bold text-[#BAFF29]">0{index + 1}</span>
                  </div>
                  <h4 className="text-base font-bold tracking-tight text-white transition-colors group-hover:text-[#BAFF29]">
                    {item.title}
                  </h4>
                  <p className="text-base sm:text-base text-[#C2E7DA] leading-relaxed font-normal transition-colors group-hover:text-white/90">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}