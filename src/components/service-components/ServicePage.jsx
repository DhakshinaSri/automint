import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "Intelligent Business Automation",
      description: "Automate routine processes, approvals, reporting, documentation, and operational workflows to improve speed, consistency, and productivity. Our automation solutions are designed to reduce manual effort while maintaining flexibility and control.",
      bg: "bg-white",
      border: "border-[#C2E7DA]",
      tagColor: "text-[#3F94EF] bg-[#F1FFE7]",
      accentLine: "bg-[#3F94EF]",
      hasBenefits: true,
      listTitle: "Key Offerings",
      listItems: [
        "Workflow Automation", "Document Processing", "Digital Forms", "Approval Workflows",
        "Business Rule Automation", "Operational Dashboards", "Compliance Monitoring", "Automated Notifications"
      ],
      benefits: [
        "Faster processing times", "Reduced operational costs", "Improved accuracy",
        "Enhanced employee productivity", "Better customer experiences"
      ]
    },
    {
      id: "02",
      title: "Digital Transformation Consulting",
      description: "Digital transformation is more than adopting new technologies—it is about reimagining how businesses operate. Our consultants assess your current environment, identify opportunities for improvement, and develop strategic roadmaps that align technology initiatives with business priorities.",
      bg: "bg-[#F1FFE7]/40",
      border: "border-[#C2E7DA]/60",
      tagColor: "text-[#1A1B41] bg-[#C2E7DA]/40",
      accentLine: "bg-[#1A1B41]",
      hasBenefits: false,
      listTitle: "Services Include",
      listItems: [
        "Digital Maturity Assessment", "Transformation Roadmaps", "Business Process Reengineering",
        "Technology Advisory", "Change Management", "Innovation Strategy", "Digital Governance"
      ]
    },
    {
      id: "03",
      title: "Custom Software Development",
      description: "We design and develop scalable software solutions tailored to your organization’s unique requirements. Whether building enterprise platforms, customer portals, or mobile applications, our development process emphasizes usability, security, and long-term maintainability.",
      bg: "bg-white",
      border: "border-[#C2E7DA]",
      tagColor: "text-[#3F94EF] bg-[#F1FFE7]",
      accentLine: "bg-[#BAFF29]",
      hasBenefits: false,
      listTitle: "Development Capabilities",
      listItems: [
        "Enterprise Applications", "Web Platforms", "Mobile Applications", "API Development",
        "System Integration", "SaaS Platforms", "Cloud-Native Applications"
      ]
    },
    {
      id: "04",
      title: "Data Analytics & Business Intelligence",
      description: "Data is one of the most valuable assets within any organization. We help businesses collect, organize, analyze, and visualize data to support informed decision-making and uncover new growth opportunities.",
      bg: "bg-[#F1FFE7]/40",
      border: "border-[#C2E7DA]/60",
      tagColor: "text-[#1A1B41] bg-[#C2E7DA]/40",
      accentLine: "bg-[#3F94EF]",
      hasBenefits: false,
      listTitle: "Our Capabilities",
      listItems: [
        "Executive Dashboards", "KPI Monitoring", "Predictive Analytics", "Data Warehousing",
        "Reporting Solutions", "Performance Analytics", "Business Intelligence Platforms"
      ]
    },
    {
      id: "05",
      title: "Cloud Solutions",
      description: "Modern businesses require flexible, secure, and scalable infrastructure. Our cloud specialists help organizations migrate workloads, optimize cloud environments, and improve operational resilience.",
      bg: "bg-white",
      border: "border-[#C2E7DA]",
      tagColor: "text-[#3F94EF] bg-[#F1FFE7]",
      accentLine: "bg-[#1A1B41]",
      hasBenefits: false,
      listTitle: "Services",
      listItems: [
        "Cloud Migration", "Infrastructure Modernization", "Hybrid Cloud Solutions",
        "Backup & Disaster Recovery", "Cloud Security", "Managed Cloud Services"
      ]
    },
    {
      id: "06",
      title: "Cybersecurity & Governance",
      description: "Protecting digital assets is essential for business continuity. We implement security frameworks, risk assessments, and governance strategies that safeguard information while supporting regulatory compliance.",
      bg: "bg-[#1A1B41]",
      textColor: "text-white",
      border: "border-white/10",
      tagColor: "text-[#BAFF29] bg-white/5",
      accentLine: "bg-[#BAFF29]",
      hasBenefits: false,
      listTitle: "Services",
      listItems: [
        "Security Assessments", "Vulnerability Management", "Identity & Access Management",
        "Security Awareness Programs", "Compliance Consulting", "Incident Response Planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-[#1A1B41] font-sans selection:bg-[#BAFF29] selection:text-[#1A1B41] overflow-x-hidden relative">
      
      {/* HEADER ANCHOR: TECHNICAL TITLING */}
      <section className="relative px-4 sm:px-12 lg:px-24 pt-20 pb-16 border-b border-[#C2E7DA]/40 bg-white">
        <div className="max-w-6xl mx-auto w-full space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-none">
            Our Services
          </h1>
          <div className="w-16 h-[2px] bg-[#BAFF29] mt-4" />
        </div>
      </section>

      {/* CONTINUOUS ASYMMETRIC SOLUTIONS STREAM */}
      <section className="relative bg-white">
        {services.map((service, index) => {
          const isDark = service.textColor === "text-white";
          return (
            <div 
              key={service.id} 
              className={`border-b border-[#C2E7DA]/40 px-4 sm:px-12 lg:px-24 py-16 lg:py-24 transition-colors duration-300 group relative ${service.bg} ${service.textColor || 'text-[#1A1B41]'}`}
            >
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Micro Meta Indicators */}
                <div className="lg:col-span-4 space-y-4 lg:sticky lg:top-8">
                  <div className="flex items-center gap-3">
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight uppercase leading-snug">
                    {service.title}
                  </h2>
                  <div className={`h-1 w-12 rounded-full transform origin-left transition-transform duration-500 group-hover:scale-x-150 ${service.accentLine}`} />
                </div>

                {/* Primary Content & Capabilities Sub-Grid */}
                <div className="lg:col-span-8 space-y-8">
                  <p className={`text-base sm:text-base leading-relaxed font-normal ${isDark ? 'text-[#C2E7DA]' : 'text-[#1A1B41]/90'}`}>
                    {service.description}
                  </p>

                  {/* Offerings Grid */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.listItems.map((item, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center gap-3 p-3 rounded-xl border text-base font-medium transition-all duration-300 ${
                            isDark 
                              ? 'bg-white/5 border-white/10 hover:border-[#BAFF29]/40 text-white' 
                              : 'bg-white border-[#C2E7DA]/40 hover:border-[#3F94EF] shadow-sm'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isDark ? 'bg-[#BAFF29]' : 'bg-[#3F94EF]'}`} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Render Optional Benefits Context */}
                  {service.hasBenefits && service.benefits && (
                    <div className="pt-6 border-t border-[#C2E7DA]/40 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex gap-2.5 items-start text-base sm:text-base">
                            <span className="text-base font-mono font-bold text-[#3F94EF] bg-[#F1FFE7] px-1.5 py-0.5 rounded">
                              ✓
                            </span>
                            <span className="leading-normal opacity-90">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* FOOTER-LESS REINFORCEMENT STRIP */}
      <div className="h-4 w-full bg-gradient-to-r from-[#3F94EF] via-[#C2E7DA] to-[#BAFF29] opacity-20" />
    </div>
  );
}