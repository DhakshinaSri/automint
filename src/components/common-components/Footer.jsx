import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  // Color Palette Mapping from "Blue Palette Inspo.webp"
  const colors = {
    planetary: '#334EAC', // Vibrant Royal Blue
    venus: '#BAD6EB',     // Soft Light Blue
    universe: '#7096D1',  // Muted Steel Blue
    meteor: '#F7F2EB',    // Warm Off-White
    milkyway: '#FFF9F0',  // Cream White
    galaxy: '#081F5C',    // Deep Midnight Blue (Footer Background Base)
    sky: '#D0E3FF',       // Airy Blue Accent
  };

  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Intelligent Business Automation",
    "Digital Transformation Consulting",
    "Custom Software Development",
    "Data Analytics & Business Intelligence",
    "Cloud Solutions",
    "Cybersecurity & Governance"
  ];

  return (
    <footer 
      className="w-full relative z-20 pt-20 pb-12 px-6 sm:px-12 lg:px-24 select-none"
      style={{ backgroundColor: colors.galaxy, color: colors.meteor }}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* --- TOP ROW: QUICK LINKS & SERVICES LIST --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Brand & Narrative Left Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight text-white">
                Automint
              </h2>
              <div className="h-[2px] w-12" style={{ backgroundColor: colors.planetary }} />
            </div>
            <p className="text-base font-light leading-relaxed opacity-80">
              Transforming businesses through intelligent technology and human expertise. Simplifying complexity with security and scalability.
            </p>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight text-white">
                Quick Links
              </h3>
            </div>
            <nav className="flex flex-col space-y-3">
              {menus.map((menu, idx) => (
                <Link 
                  key={idx} 
                  to={menu.path}
                  className="text-base font-medium transition-all duration-300 transform hover:translate-x-1 hover:text-white"
                  style={{ color: colors.meteor }}
                >
                  {menu.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Clickable List of Services */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tight text-white">
                Our Services
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link 
                    to="/services" 
                    className="flex items-start space-x-2 font-medium opacity-80 transition-all duration-300 hover:opacity-100 hover:text-white group"
                  >
                    <span className="leading-tight">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider Line */}
        <div className="h-[1px] w-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* --- BOTTOM ROW: CONTACT, ADDRESS & HOURS --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Corporate Office Address Section */}
          <div className="md:col-span-6 space-y-4">
            <h4 className="font-bold text-sm tracking-widest uppercase text-white" style={{ color: colors.venus }}>
              Corporate Office
            </h4>
            <div className="space-y-1 text-sm font-light opacity-80 leading-relaxed">
              <p className="font-bold text-base text-white">Automint</p>
              <p>GoodWorks GCC Nexus, 6th Floor Jupiter Block, <br /> Prestige Tech Park ORR Marathahalli - Kadubeesanahalli <br /> Bengaluru, Karnataka – 560103 -India</p>
            </div>
          </div>

          {/* Business Hours Section */}
          <div className="md:col-span-6 space-y-4">
            <h4 className="font-bold text-sm tracking-widest uppercase text-white" style={{ color: colors.venus }}>
              Business Hours
            </h4>
            <div className="space-y-2 text-sm font-light opacity-80 leading-relaxed">
              <div>
                <span className="font-bold uppercase text-[10px] tracking-wider block opacity-50">Weekdays</span>
                <p>Monday – Friday: 9:00 AM – 6:00 PM (IST)</p>
              </div>
              <div>
                <span className="font-bold uppercase text-[10px] tracking-wider block opacity-50">Saturdays</span>
                <p>Saturday: 9:30 AM – 1:30 PM (IST)</p>
              </div>
              <div>
                <span className="font-bold uppercase text-[10px] tracking-wider block opacity-50">Sundays</span>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* Secondary Divider Line for Copyright Isolation */}
        <div className="h-[1px] w-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* --- END ROW: PURE COPYRIGHT BASELINING --- */}
        <div className="pt-2 flex justify-start items-center">
          <p className="text-xs font-mono opacity-40">
            &copy; {new Date().getFullYear()} Automint. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}