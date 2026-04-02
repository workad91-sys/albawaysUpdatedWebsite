import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { MapPin, Calendar, Star, ArrowRight, ArrowLeft, Mail, Phone, MapPin as MapPinIcon, Facebook, Twitter, Instagram, Youtube, Send, Users, Tent, ShieldCheck, Plane, Hexagon, Triangle, Circle, Square, Diamond, Octagon, Globe, Compass, Mountain, Target, Heart, Shield, Lightbulb, Briefcase, ChevronDown, Building2, Camera, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { translations } from './translations';
import { DestinationsPage } from './DestinationsPage';
import { ExperiencesPage } from './ExperiencesPage';
import { B2BProposal } from './B2BProposal';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type Language = 'en' | 'es' | 'ar';

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
  dir: 'ltr' | 'rtl';
}>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
  dir: 'ltr'
});

export const useLanguage = () => useContext(LanguageContext);

export type Page = 'home' | 'about' | 'contact' | 'destinations' | 'experiences' | 'privacy' | 'terms' | 'liability' | 'proposal';
const RouterContext = createContext<{
  page: Page;
  navigate: (page: Page, hash?: string) => void;
  setProposalParams: (params: { dest?: 'saudi' | 'latam'; type?: 'budget' | 'luxury'; client?: string; country?: string }) => void;
}>({ page: 'home', navigate: () => {}, setProposalParams: () => {} });
export const useRouter = () => useContext(RouterContext);

const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();
  const { page } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const isProposal = page === 'proposal';

  const languages = [
    { code: 'ar', name: 'العربية', flag: 'https://flagcdn.com/sa.svg' },
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/mx.svg' },
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/us.svg' }
  ];

  const currentLang = languages.find(l => l.code === lang);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-full transition text-sm font-medium ${isProposal ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-brand-dark/5 hover:bg-brand-dark/10 text-brand-dark'}`}
      >
        <img src={currentLang?.flag} alt={currentLang?.name} className="w-5 h-5 rounded-full object-cover shrink-0" />
        <span className="hidden md:block uppercase">{currentLang?.code}</span>
      </button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 w-36 border rounded-xl shadow-md overflow-hidden z-50 ${isProposal ? 'bg-brand-dark border-white/10' : 'bg-white border-brand-dark/10'}`}>
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code as Language);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition flex items-center gap-3 ${isProposal ? 'hover:bg-white/10' : 'hover:bg-brand-dark/5'} ${lang === l.code ? 'text-brand-accent' : isProposal ? 'text-white' : 'text-brand-dark'}`}
            >
              <img src={l.flag} alt={l.name} className="w-5 h-5 rounded-full object-cover shrink-0" />
              <span>{l.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const { t, dir } = useLanguage();
  const { page, navigate } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isProposal = page === 'proposal';

  const navLinks = [
    { name: t.nav.home, page: 'home' as Page },
    { name: t.nav.about, page: 'about' as Page },
    { name: t.nav.destinations, page: 'destinations' as Page },
    { name: t.nav.experiences, page: 'experiences' as Page },
    { name: 'B2B', page: 'proposal' as Page },
    { name: t.nav.contact, page: 'contact' as Page },
  ];

  const handleNavigate = (targetPage: Page) => {
    navigate(targetPage);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="bg-black/45 backdrop-blur-[20px] backdrop-saturate-[160%] border-b border-white/10 rounded-full px-4 md:px-6 py-3 flex items-center justify-between transition-all duration-500">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate('home')}>
          <img 
            src="https://lh3.googleusercontent.com/pw/AP1GczMUHzMINVbiVhias2ebcZvb3ezUoqEM-Y9k9-lzCSPSfRmHtm3amanPS6cCUUKEjctvofT3fS7bfvDUz1gBb2IutNzVFIzwiKBV5hv8Hf70ifh7oH5AGC7deiuOwgCSQIH3GPB3p90WxkVEIZK5_w5Z=w913-h913-s-no-gm?authuser=0" 
            alt="Albaways Logo" 
            className={`h-8 w-auto object-contain transition-all duration-500 brightness-0 invert`} 
          />
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium transition-colors duration-500 text-white/80">
          {navLinks.map((link) => (
            <button 
              key={link.page}
              onClick={() => handleNavigate(link.page)} 
              className={`nav-link transition ${page === link.page ? 'text-brand-accent' : 'hover:text-white'}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSelector />
          <button 
            onClick={() => navigate('contact', 'reach-out')}
            className="hidden md:flex bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full text-sm font-semibold transition items-center gap-2 shadow-lg"
          >
            <WhatsAppIcon size={18} />
            WhatsApp
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-black/90 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl z-40"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.page}
                  onClick={() => handleNavigate(link.page)} 
                  className={`text-lg font-medium py-2 border-b border-white/5 text-left ${page === link.page ? 'text-brand-accent' : 'text-white/80'}`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  navigate('contact', 'reach-out');
                  setIsMobileMenuOpen(false);
                }}
                className="mt-4 bg-[#25D366] text-white px-6 py-4 rounded-2xl text-center font-bold flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={20} />
                WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const StatCard = ({ icon, number, text }: { icon: React.ReactNode, number: string, text: string }) => (
  <div className="bg-brand-card/80 backdrop-blur-sm border border-brand-dark/5 p-4 rounded-2xl flex flex-col items-center justify-center min-w-[120px]">
    <div className="text-brand-accent mb-2">{icon}</div>
    <div className="font-display font-bold text-xl">{number}</div>
    <div className="text-xs text-brand-dark/60 text-center">{text}</div>
  </div>
);

export const SunLogo = ({ className = "" }: { className?: string }) => {
  const { page } = useRouter();
  const angles = [75, 50, 25, 0, -25, -50, -75]; // Right to Left sequence

  return (
    <div key={page} className={className}>
      <svg 
        viewBox="0 0 200 120" 
        className="w-full h-full animated-logo" 
        fill="currentColor"
      >
        {/* Arc - Drawing from Right to Left (0s - 1.0s) */}
        <path 
          d="M170 100 A70 70 0 0 0 30 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round"
          className="sun-arc"
        />
        
        {/* 7 Rays - Right to Left sequence (1.0s - 2.0s) */}
        {angles.map((angle, i) => {
          return (
            <path
              key={angle}
              className={`sun-ray ray-${i + 1}`}
              d="M100 2 L94 22 L106 22 Z"
              style={{ 
                ["--rotation" as any]: `${angle}deg`
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

const Hero = () => {
  const { t, dir } = useLanguage();
  const { navigate, setProposalParams } = useRouter();
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80" 
          alt="Desert Landscape"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark/90"></div>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4">
        <div className="relative flex items-center justify-center w-full max-w-7xl">
          {/* Sun behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
            <SunLogo className="w-[100vw] md:w-[80vw] h-auto text-brand-accent/20 drop-shadow-[0_0_30px_rgba(var(--brand-accent-rgb),0.3)]" />
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="font-display font-black text-[12vw] md:text-[8vw] leading-none tracking-tighter text-brand-accent uppercase drop-shadow-2xl z-10"
          >
            {t.hero.title}
          </motion.h1>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 3 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={40} />
      </motion.div>

      <div className="absolute bottom-10 left-0 w-full px-6 md:px-16 flex flex-col lg:flex-row justify-between items-end z-20 gap-8 pointer-events-none">
        <div className="flex gap-4 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto snap-x hide-scrollbar pointer-events-auto">
          <div className="snap-center"><StatCard icon={<Users size={20} />} number="10k+" text={t.hero.clients} /></div>
          <div className="snap-center"><StatCard icon={<Tent size={20} />} number="500+" text={t.hero.tours} /></div>
          <div className="snap-center"><StatCard icon={<ShieldCheck size={20} />} number="0" text={t.hero.incidents} /></div>
        </div>

        <div className="bg-brand-card/80 backdrop-blur-sm border border-brand-dark/5 p-4 rounded-2xl flex items-center gap-4 max-w-md w-full lg:w-auto pointer-events-auto">
          <img src="https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=150&q=80" alt="Monte Alban" className="w-20 h-20 rounded-xl object-cover" />
          <div className="flex-1">
            <div className="text-[10px] text-brand-dark/60 font-black uppercase tracking-[0.2em] mb-1">{t.hero.featured}</div>
            <h3 className="font-display font-bold text-xl text-brand-accent leading-tight mb-1">{t.hero.featuredTitle}</h3>
            <p className="text-xs text-brand-dark/60 line-clamp-2">{t.hero.featuredDesc}</p>
          </div>
          <button 
            onClick={() => {
              setProposalParams({ dest: 'latam', country: 'Mexico' });
              navigate('proposal', 'itinerary-section');
            }}
            className={`bg-brand-accent text-brand-dark p-3 rounded-full hover:bg-brand-dark hover:text-brand-accent transition shrink-0 ${dir === 'rtl' ? 'rotate-180' : ''}`}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

const DestinationCard = ({ image, title, location, duration, featured = false, t, dir }: any) => (
  <div className="relative rounded-3xl overflow-hidden group cursor-pointer w-full h-full shrink-0 snap-center">
    <img src={image} alt={title} className="w-full h-[400px] md:h-[500px] object-cover transition duration-700 group-hover:scale-110" />
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-card to-transparent"></div>
    <div className="absolute bottom-0 left-0 w-full p-8">
      <h3 className="font-display font-bold text-2xl md:text-3xl mb-2 text-brand-accent">{title}</h3>
      <div>
        <p className="text-brand-dark/80 text-sm mb-2">{location}</p>
        <div className="flex items-center gap-2 text-brand-accent text-sm font-medium">
          <Calendar size={16} />
          <span>{duration}</span>
        </div>
      </div>
    </div>
  </div>
);

const Destinations = () => {
  const { t, dir } = useLanguage();
  const { navigate } = useRouter();
  
  const images = [
    "https://images.unsplash.com/photo-1733896502795-4bd9f55abe4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1521216774850-01bc1c5fe0da?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1638041778229-afbcdf49fa28?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1632913582790-d0ec5882095a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  return (
    <section id="destinations" className="py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.destinations.subtitle}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold max-w-md text-brand-accent">{t.destinations.title}</h2>
        </div>
        <button onClick={() => navigate('destinations')} className="hidden md:flex items-center gap-2 text-brand-dark font-bold hover:text-brand-accent transition">
          {(t as any).destinations.seeMore || "See more"} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.destinations.items.slice(0, 4).map((item, i) => (
          <DestinationCard 
            key={i}
            image={images[i]}
            title={item.title}
            location={item.location}
            duration={item.duration}
            featured={i === 1}
            t={t}
            dir={dir}
          />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center md:hidden">
        <button onClick={() => navigate('destinations')} className="flex items-center gap-2 text-brand-dark font-bold hover:text-brand-accent transition">
          {(t as any).destinations.seeMore || "See more"} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </button>
      </div>
    </section>
  );
};

const Discover = () => {
  const { t } = useLanguage();
  const [tooltip, setTooltip] = useState({ show: false, content: "", x: 0, y: 0 });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.discover.subtitle}</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold max-w-xl mx-auto text-brand-accent">{t.discover.title}</h2>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 h-[500px] md:h-[700px] flex flex-col items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-full opacity-60 pointer-events-auto"
        >
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 180, center: [0, 10] }} width={800} height={400} style={{ width: "100%", height: "100%" }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const countryName = geo.properties.name;
                  const activeCountries = ["Saudi Arabia", "Mexico", "Guatemala", "Peru", "Ecuador", "El Salvador"];
                  const comingSoonCountries = ["Colombia", "Argentina", "Brazil", "Chile", "Cuba", "Puerto Rico", "Panama", "Portugal", "Spain", "Nicaragua", "Honduras"];
                  
                  let fillColor = "#D1D5DB";
                  let hoverColor = "#9CA3AF";
                  
                  if (activeCountries.includes(countryName)) {
                    fillColor = "#FBB040";
                    hoverColor = "#e59b30";
                  } else if (comingSoonCountries.includes(countryName)) {
                    fillColor = "#FDE0B2";
                    hoverColor = "#FCD34D";
                  }

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fillColor}
                      stroke="#9CA3AF"
                      strokeWidth={0.5}
                      onMouseEnter={(e) => {
                        setTooltip({ show: true, content: countryName, x: e.clientX, y: e.clientY });
                      }}
                      onMouseMove={(e) => {
                        setTooltip({ show: true, content: countryName, x: e.clientX, y: e.clientY });
                      }}
                      onMouseLeave={() => {
                        setTooltip(prev => ({ ...prev, show: false }));
                      }}
                      style={{
                        default: { outline: "none", transition: "all 250ms" },
                        hover: { outline: "none", fill: hoverColor, transition: "all 250ms" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
            
            {/* LATAM Marker */}
            <Marker coordinates={[-65, -15]}>
              <g className="group cursor-pointer">
                <g transform="translate(-12, -24)" className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-125 origin-bottom">
                  <MapPin className="text-brand-accent drop-shadow-md" size={24} strokeWidth={2.5} />
                </g>
                <text textAnchor="middle" y={15} className="transition-all duration-300 group-hover:text-lg" style={{ fill: "#000000", fontSize: "14px", fontWeight: "bold", stroke: "#FBB040", strokeWidth: "3px", paintOrder: "stroke" }}>
                  {t.discover.latam}
                </text>
              </g>
            </Marker>

            {/* Saudi Arabia Marker */}
            <Marker coordinates={[-10, 20]}>
              {/* Intermediate point for curved line, no marker */}
            </Marker>

            {/* Saudi Arabia Marker */}
            <Marker coordinates={[45, 24]}>
              <g className="group cursor-pointer">
                <g transform="translate(-12, -24)" className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-125 origin-bottom">
                  <MapPin className="text-brand-accent drop-shadow-md" size={24} strokeWidth={2.5} />
                </g>
                <text textAnchor="middle" y={15} className="transition-all duration-300 group-hover:text-lg" style={{ fill: "#000000", fontSize: "14px", fontWeight: "bold", stroke: "#FBB040", strokeWidth: "3px", paintOrder: "stroke" }}>
                  {t.discover.saudi}
                </text>
              </g>
            </Marker>

            {/* Dotted Line between LATAM and Saudi Arabia */}
            <Line
              from={[-65, -15]}
              to={[45, 24]}
              stroke="#FBB040"
              strokeWidth={2}
              strokeLinecap="round"
              strokeDasharray="6 6"
              style={{
                opacity: 0.3,
              }}
            />
          </ComposableMap>
        </div>

        {tooltip.show && (
          <div 
            className="fixed z-50 bg-brand-dark text-white px-3 py-1.5 rounded-lg text-sm font-bold pointer-events-none transform -translate-x-1/2 -translate-y-full mt-[-15px] shadow-lg"
            style={{ left: tooltip.x, top: tooltip.y }}
          >
            {tooltip.content}
          </div>
        )}

        <a href="https://docs.google.com/forms/" target="_blank" rel="noopener noreferrer" className="relative z-10 bg-brand-accent hover:bg-[#e59b30] text-brand-dark px-8 py-3 rounded-full font-semibold transition mt-auto mb-4 pointer-events-auto">
          {t.discover.book}
        </a>
      </div>
    </section>
  );
};

const About = () => {
  const { t, dir } = useLanguage();
  const { navigate } = useRouter();
  return (
    <section id="about" className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.about.subtitle}</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-accent">{t.about.title}</h2>
        <p className="text-brand-dark/70 mb-6 leading-relaxed">
          {t.about.p1}
        </p>
        <p className="text-brand-dark/70 leading-relaxed mb-8">
          {t.about.p2}
        </p>

        <button onClick={() => navigate('about')} className="flex items-center gap-2 text-brand-accent font-bold hover:text-[#e59b30] transition">
          {(t as any).about.readMore || "Read More"} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </button>
      </div>
      <div className="flex-1 relative w-full">
        <div className="aspect-square rounded-full bg-gradient-to-tr from-brand-accent/20 to-transparent absolute -inset-8 -z-10 blur-3xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80" 
          alt="Traveler" 
          className="rounded-3xl w-full object-cover aspect-[4/3] shadow-md border border-brand-dark/10"
        />
      </div>
    </section>
  );
};

const ExperienceCard = ({ image, title, location, offset = false, active = true, comingSoonText = "Coming soon", mostPicked = false, mostPickedText = "Most Picked" }: any) => (
  <div className={`relative rounded-3xl overflow-hidden group ${offset ? 'lg:translate-y-12' : ''} ${!active ? 'shadow-[0_0_15px_rgba(255,195,0,0.1)]' : ''}`}>
    <img src={image} alt={title} className={`w-full h-[350px] object-cover transition duration-700 ${active ? 'group-hover:scale-110' : 'grayscale opacity-60'}`} />
    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-card to-transparent"></div>
    {mostPicked && active && (
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-[#e59b30] text-brand-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
          <Star size={12} fill="currentColor" /> {mostPickedText}
        </span>
      </div>
    )}
    {!active && (
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <span className="text-[#FFC300] font-display font-bold text-2xl tracking-wider uppercase drop-shadow-md bg-black/40 px-4 py-2 rounded-lg backdrop-blur-sm">{comingSoonText}</span>
      </div>
    )}
    <div className="absolute bottom-0 left-0 w-full p-6">
      <h3 className={`font-display font-bold text-xl mb-1 text-brand-accent ${!active ? 'opacity-50' : ''}`}>{title}</h3>
      <div className={`flex items-center gap-4 text-xs text-brand-dark/70 ${!active ? 'opacity-50' : ''}`}>
        <div className="flex items-center gap-1"><MapPinIcon size={12} /> {location}</div>
      </div>
    </div>
  </div>
);

const Experiences = () => {
  const { t, dir } = useLanguage();
  const { navigate } = useRouter();
  
  const images = [
    "https://images.unsplash.com/photo-1681419670203-6b081b3c9fe1?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hegra
    "https://images.unsplash.com/photo-1733896502795-4bd9f55abe4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Edge of the World
    "https://plus.unsplash.com/premium_photo-1697730073345-fcb1cdc8334c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chichen Itza
    "https://images.unsplash.com/photo-1669025467363-ace9bad030dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Tikal
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80", // Peru
    "https://images.unsplash.com/photo-1521022125878-aa8a4ea78a5d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Ecuador
    "https://images.unsplash.com/photo-1701815843592-2aa411ab4860?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // El Salvador
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80", // Colombia
    "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80", // Argentina
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80", // Brasil
    "https://images.unsplash.com/photo-1490100667990-4fced8021649?auto=format&fit=crop&q=80", // Chile
    "https://images.unsplash.com/photo-1503442862980-50ccb3f1d085?auto=format&fit=crop&q=80"  // Cuba
  ];
  
  const countries = [
    { id: 'all', label: t.experiences.filterAll },
    { id: 'saudiArabia', label: t.experiences.countries.saudiArabia, flag: '🇸🇦' },
    { id: 'mexico', label: t.experiences.countries.mexico, flag: '🇲🇽' },
    { id: 'guatemala', label: t.experiences.countries.guatemala, flag: '🇬🇹' },
    { id: 'elSalvador', label: t.experiences.countries.elSalvador, flag: '🇸🇻' },
    { id: 'peru', label: t.experiences.countries.peru, flag: '🇵🇪' },
    { id: 'ecuador', label: t.experiences.countries.ecuador, flag: '🇪🇨' },
    { id: 'colombia', label: t.experiences.countries.colombia, flag: '🇨🇴' },
    { id: 'argentina', label: t.experiences.countries.argentina, flag: '🇦🇷' },
    { id: 'brasil', label: t.experiences.countries.brasil, flag: '🇧🇷' },
    { id: 'chile', label: t.experiences.countries.chile, flag: '🇨🇱' },
    { id: 'cuba', label: t.experiences.countries.cuba, flag: '🇨🇺' }
  ];

  return (
    <section id="experiences" className="py-24 px-6 md:px-16 bg-brand-card">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.experiences.subtitle}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold max-w-md text-brand-accent">{t.experiences.title}</h2>
        </div>
        <button onClick={() => navigate('experiences')} className="hidden md:flex items-center gap-2 text-brand-dark font-bold hover:text-brand-accent transition">
          {(t as any).destinations.seeMore || "See more"} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.experiences.items.slice(0, 4).map((item: any, i: number) => {
          const originalIndex = t.experiences.items.findIndex((orig: any) => orig.title === item.title);
          const countryData = countries.find(c => c.id === item.country);
          return (
            <ExperienceCard 
              key={i}
              image={images[originalIndex]}
              title={item.title}
              location={item.location}
              offset={i % 2 !== 0}
              active={item.active}
              comingSoonText={t.experiences.comingSoon}
              mostPicked={item.mostPicked}
              mostPickedText={t.experiences.mostPickedBadge}
              flag={countryData?.flag}
            />
          );
        })}
      </div>
      
      <div className="mt-12 flex justify-center md:hidden">
        <button onClick={() => navigate('experiences')} className="flex items-center gap-2 text-brand-dark font-bold hover:text-brand-accent transition">
          {(t as any).destinations.seeMore || "See more"} <ArrowRight size={16} className={dir === 'rtl' ? 'rotate-180' : ''} />
        </button>
      </div>
    </section>
  );
};

const Marquee = ({ items }: { items: any[] }) => {
  return (
    <div className="marquee-container [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
      <div className="marquee-content py-10">
        {/* First set of items */}
        {items.map((item, i) => (
          <div key={`first-${i}`} className="marquee-item px-16 flex items-center gap-6 group">
            <div className="flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 scale-90 group-hover:scale-100">
              {item.logo && (
                <img src={item.logo} alt={item.name} className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
              )}
              {item.icon && !item.logo && (
                <div className="text-brand-accent">{item.icon}</div>
              )}
              <span className="font-display font-bold text-2xl tracking-tight text-brand-accent whitespace-nowrap">{item.name}</span>
            </div>
          </div>
        ))}
        {/* Duplicated set for seamless loop */}
        {items.map((item, i) => (
          <div key={`second-${i}`} className="marquee-item px-16 flex items-center gap-6 group">
            <div className="flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 scale-90 group-hover:scale-100">
              {item.logo && (
                <img src={item.logo} alt={item.name} className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
              )}
              {item.icon && !item.logo && (
                <div className="text-brand-accent">{item.icon}</div>
              )}
              <span className="font-display font-bold text-2xl tracking-tight text-brand-accent whitespace-nowrap">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Clients = () => {
  const { t } = useLanguage();
  const clients = [
    { name: "Trip Story" },
    { name: "Colombian Embassy" },
    { name: "GoKSA" },
    { name: "Argentina Embassy" },
  ];

  return (
    <section className="py-24 border-t border-brand-dark/5 overflow-hidden">
      <div className="text-center mb-8 px-6">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.clients.subtitle}</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-accent">{t.clients.title}</h2>
      </div>
      <Marquee items={clients} />
    </section>
  );
};

const Partners = () => {
  const { t } = useLanguage();
  const partners = [
    { name: "GoKSA" },
    { name: "Alsarh Travel and Tourism" },
    { name: "Saudi Spanish Club" },
  ];

  return (
    <section className="py-24 border-t border-brand-dark/5 overflow-hidden bg-brand-card">
      <div className="text-center mb-8 px-6">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.partners.subtitle}</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-accent">{t.partners.title}</h2>
      </div>
      <Marquee items={partners} />
    </section>
  );
};

const Reviews = () => {
  const { t } = useLanguage();

  const reviews = useMemo(() => {
    const shuffled = [...t.reviews.list];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [t.reviews.list]);

  return (
    <section className="py-32 overflow-hidden bg-white">
      <div className="text-center mb-16 px-6">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.reviews.subtitle}</div>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-accent">{t.reviews.title}</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="marquee-container overflow-hidden rounded-3xl">
          <div className="marquee-content py-10 flex gap-6" style={{ animationDuration: '120s' }}>
            {/* First set */}
            {reviews.map((review, i) => (
              <div key={`first-${i}`} className="marquee-item flex-shrink-0">
                <div className="w-[300px] md:w-[400px] bg-brand-card p-8 rounded-3xl border border-brand-dark/5 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between whitespace-normal">
                  <div>
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-brand-dark/80 italic leading-relaxed mb-6">
                      "{review.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-brand-dark">{review.name}</div>
                    <div className="text-xs text-brand-accent font-medium tracking-wider uppercase mt-1">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Second set for loop */}
            {reviews.map((review, i) => (
              <div key={`second-${i}`} className="marquee-item flex-shrink-0">
                <div className="w-[300px] md:w-[400px] bg-brand-card p-8 rounded-3xl border border-brand-dark/5 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between whitespace-normal">
                  <div>
                    <div className="flex text-yellow-400 mb-4">
                      {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-brand-dark/80 italic leading-relaxed mb-6">
                      "{review.quote}"
                    </p>
                  </div>
                  <div>
                    <div className="font-bold text-brand-dark">{review.name}</div>
                    <div className="text-xs text-brand-accent font-medium tracking-wider uppercase mt-1">{review.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 px-6 md:px-16 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{(t as any).contact?.subtitle || "Get in Touch"}</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-accent">{(t as any).contact?.title || "Contact Us"}</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <a href="https://wa.me/966575725151" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 bg-brand-dark/5 hover:bg-[#25D366] hover:text-white p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm transition group">
          <WhatsAppIcon size={40} className="text-[#25D366] group-hover:text-white transition" />
          <span className="font-bold">WhatsApp</span>
        </a>
        <a href="mailto:contact@albaways.com?subject= contact%40albaways.com" className="flex flex-col items-center justify-center gap-4 bg-brand-dark/5 hover:bg-[#EA4335] hover:text-white p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm transition group">
          <Mail size={40} className="text-[#EA4335] group-hover:text-white transition" />
          <span className="font-bold">Email Us</span>
        </a>
        <a href="tel:+966575725151" className="flex flex-col items-center justify-center gap-4 bg-brand-dark/5 hover:bg-[#34A853] hover:text-white p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm transition group">
          <Phone size={40} className="text-[#34A853] group-hover:text-white transition" />
          <span className="font-bold">Call Us</span>
        </a>
        <a href="https://www.instagram.com/albawaysksa" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 bg-brand-dark/5 hover:bg-[#E1306C] hover:text-white p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm transition group">
          <Instagram size={40} className="text-[#E1306C] group-hover:text-white transition" />
          <span className="font-bold">Instagram</span>
        </a>
      </div>
    </section>
  );
};

const TikTokIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const WhatsAppIcon = ({ size = 18, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

const Footer = () => {
  const { t, dir } = useLanguage();
  const { navigate } = useRouter();
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 px-6 md:px-16 border-t border-white/5 relative overflow-hidden">
      {/* Decorative Mountain Silhouette at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full preserve-3d" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <button onClick={() => navigate('home')} className="flex items-center gap-2 mb-6 hover:opacity-80 transition">
              <img src="https://lh3.googleusercontent.com/pw/AP1GczMUHzMINVbiVhias2ebcZvb3ezUoqEM-Y9k9-lzCSPSfRmHtm3amanPS6cCUUKEjctvofT3fS7bfvDUz1gBb2IutNzVFIzwiKBV5hv8Hf70ifh7oH5AGC7deiuOwgCSQIH3GPB3p90WxkVEIZK5_w5Z=w913-h913-s-no-gm?authuser=0" alt="Albaways Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </button>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/albawaysksa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition"><Instagram size={18} /></a>
              <a href="https://wa.me/966575725151" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition"><WhatsAppIcon size={18} /></a>
              <a href="https://wa.me/966591251151" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition"><WhatsAppIcon size={18} /></a>
              <a href="mailto:contact@albaways.com?subject= contact%40albaways.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-accent">{t.footer.services}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><button onClick={() => navigate('about', 'services-section')} className="hover:text-white transition">{t.footer.servicesList[0]}</button></li>
              <li><button onClick={() => navigate('about', 'services-section')} className="hover:text-white transition">{t.footer.servicesList[1]}</button></li>
              <li><button onClick={() => navigate('about', 'services-section')} className="hover:text-white transition">{t.footer.servicesList[2]}</button></li>
              <li><button onClick={() => navigate('about', 'services-section')} className="hover:text-white transition">{t.footer.servicesList[3]}</button></li>
              <li><button onClick={() => navigate('about', 'services-section')} className="hover:text-white transition">{t.footer.servicesList[4]}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-accent">{t.footer.company}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><button onClick={() => navigate('about')} className="hover:text-white transition">{t.footer.companyList[0]}</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-white transition">{t.footer.companyList[1]}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-accent">{(t as any).footer.quickLinks || "Quick Links"}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><button onClick={() => navigate('home')} className="hover:text-white transition">{t.nav.home}</button></li>
              <li><button onClick={() => navigate('destinations')} className="hover:text-white transition">{t.nav.destinations}</button></li>
              <li><button onClick={() => navigate('experiences')} className="hover:text-white transition">{t.nav.experiences}</button></li>
              <li><button onClick={() => navigate('proposal')} className="hover:text-white transition">B2B Proposal</button></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
            <button onClick={() => navigate('privacy')} className="hover:text-white transition">{t.footer.privacy}</button>
            <button onClick={() => navigate('terms')} className="hover:text-white transition">{t.footer.terms}</button>
            <button onClick={() => navigate('liability')} className="hover:text-white transition">{(t.footer as any).liability}</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AboutPage = () => {
  const { t, dir } = useLanguage();
  const ap = (t as any).aboutPage;
  
  const valueIcons = [<Shield key="1" size={24} />, <Heart key="2" size={24} />, <Target key="3" size={24} />, <Lightbulb key="4" size={24} />];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-24 page-about"
    >
      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1529178670343-41fefeab98e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="About Hero" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark/90"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl flex flex-col items-center"
        >
          {/* Sun behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible -z-10">
            <SunLogo className="w-[100vw] md:w-[80vw] h-auto text-brand-accent/20 drop-shadow-[0_0_30px_rgba(var(--brand-accent-rgb),0.3)]" />
          </div>

          <h1 className="font-display font-black text-5xl md:text-[8vw] text-brand-accent uppercase leading-[0.9] mb-8 tracking-tighter drop-shadow-2xl">
            {ap.heroTitle}
          </h1>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown size={40} />
        </motion.div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto mb-24 text-center">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{ap.introSubtitle}</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 max-w-3xl mx-auto text-brand-accent leading-tight">{ap.introTitle}</h2>
        <div className="space-y-6 text-brand-dark/70 text-lg leading-relaxed max-w-4xl mx-auto">
          <p>{ap.introText1}</p>
          <p>{ap.introText2}</p>
        </div>
      </section>

      {/* Partner & Services */}
      <section id="services-section" className="py-24 px-6 md:px-16 mb-24 bg-brand-dark text-white rounded-[3rem] mx-6 md:mx-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1">
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8 text-brand-accent tracking-tight leading-none">
              {(t as any).about.partnerTitle}
            </h2>
            <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-6 opacity-80">{(t as any).about.servicesTitle}</div>
            <p className="text-white/70 text-xl leading-relaxed mb-12">{(t as any).about.partnerDesc}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {((t as any).about.services || []).map((service: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-accent text-xl mb-1">{service.title}</h4>
                    {service.desc && <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-brand-accent/80 italic font-medium mt-12 text-lg">{(t as any).about.partnerFooter}</p>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1682687220795-796d3f6f7000?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Services" className="rounded-3xl w-full object-cover aspect-[4/5] shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-card py-24 px-6 md:px-16 mb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{ap.missionSubtitle}</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-accent">{ap.missionTitle}</h2>
            <p className="text-brand-dark/70 text-lg leading-relaxed">{ap.missionText}</p>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80" alt="Mission" className="rounded-3xl w-full object-cover aspect-video shadow-lg" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 md:px-16 mb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="flex-1">
            <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{ap.valuesSubtitle}</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-accent">{ap.valuesTitle}</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {ap.values.map((val: any, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0">
                    {valueIcons[i % valueIcons.length]}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-accent text-lg mb-1">{val.title}</h4>
                    <p className="text-brand-dark/60 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img src="https://images.unsplash.com/photo-1749517841202-ef5cb6561e5e?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Core Values" className="rounded-3xl w-full object-cover aspect-video shadow-lg" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ContactPage = () => {
  const { t, dir } = useLanguage();
  const cp = (t as any).contactPage;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pb-24 page-contact"
    >
      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img src="https://images.unsplash.com/photo-1743500015919-adc576c481bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark/90"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl flex flex-col items-center"
        >
          {/* Sun behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible -z-10">
            <SunLogo className="w-[100vw] md:w-[80vw] h-auto text-brand-accent/20 drop-shadow-[0_0_30px_rgba(var(--brand-accent-rgb),0.3)]" />
          </div>

          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-lg"
          >
            <Mail size={14} /> {cp.infoSubtitle}
          </motion.span>
          <h1 className="font-display font-black text-5xl md:text-[8vw] text-brand-accent uppercase leading-[0.9] mb-8 tracking-tighter drop-shadow-2xl">
            {cp.heroTitle}
          </h1>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown size={40} />
        </motion.div>
      </section>

      <div id="reach-out" className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">
        {/* Info Section */}
        <div>
          <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{cp.infoSubtitle}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-brand-accent">{cp.infoTitle}</h2>
          <p className="text-brand-dark/70 text-lg leading-relaxed mb-12">{cp.infoText}</p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-accent/20 text-brand-accent rounded-2xl flex items-center justify-center shrink-0">
                <MapPinIcon size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1 text-brand-accent">{cp.addressTitle}</h3>
                <p className="text-brand-dark/70">{cp.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-accent/20 text-brand-accent rounded-2xl flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1 text-brand-accent">{cp.emailTitle}</h3>
                <p className="text-brand-dark/70">{cp.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-brand-accent/20 text-brand-accent rounded-2xl flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-1 text-brand-accent">{cp.phoneTitle}</h3>
                <p className="text-brand-dark/70 whitespace-pre-line">{cp.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Links Section */}
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6 w-full">
            <a href="https://wa.me/966575725151" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 bg-brand-dark/5 hover:bg-[#25D366] hover:text-white p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm transition group">
              <WhatsAppIcon size={40} className="text-[#25D366] group-hover:text-white transition" />
              <span className="font-bold">WhatsApp</span>
            </a>
            <a href="https://wa.me/966591251151" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 bg-brand-dark/5 hover:bg-[#25D366] hover:text-white p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm transition group">
              <WhatsAppIcon size={40} className="text-[#25D366] group-hover:text-white transition" />
              <span className="font-bold">WhatsApp</span>
            </a>
            <a href="tel:+966575725151" className="flex flex-col items-center justify-center gap-4 bg-brand-dark/5 hover:bg-[#34A853] hover:text-white p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm transition group">
              <Phone size={40} className="text-[#34A853] group-hover:text-white transition" />
              <span className="font-bold">Call Us</span>
            </a>
            <a href="tel:+966591251151" className="flex flex-col items-center justify-center gap-4 bg-brand-dark/5 hover:bg-[#34A853] hover:text-white p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm transition group">
              <Phone size={40} className="text-[#34A853] group-hover:text-white transition" />
              <span className="font-bold">Call Us</span>
            </a>
            <a href="mailto:contact@albaways.com" className="flex flex-col items-center justify-center gap-4 bg-brand-dark/5 hover:bg-[#EA4335] hover:text-white p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm transition group">
              <Mail size={40} className="text-[#EA4335] group-hover:text-white transition" />
              <span className="font-bold">Email Us</span>
            </a>
            <a href="https://www.instagram.com/albawaysksa" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-4 bg-brand-dark/5 hover:bg-[#E1306C] hover:text-white p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm transition group">
              <Instagram size={40} className="text-[#E1306C] group-hover:text-white transition" />
              <span className="font-bold">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HomePage = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <Hero />
    <About />
    <Destinations />
    <Experiences />
    <Discover />
    <Clients />
    <Partners />
    <Reviews />
  </motion.div>
);

const LegalPage = ({ type }: { type: 'privacy' | 'terms' | 'liability' }) => {
  const { t } = useLanguage();
  const content = (t as any).legal[type];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="pt-32 pb-24 px-6 md:px-16 max-w-4xl mx-auto min-h-[70vh]"
    >
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-brand-dark/5 shadow-sm">
        <h1 className="font-display font-bold text-3xl md:text-5xl mb-4 text-brand-accent">{content.title}</h1>
        <p className="text-brand-dark/50 text-sm mb-12">{content.lastUpdated}</p>
        
        <div className="space-y-10">
          {content.content.map((section: any, idx: number) => (
            <div key={idx}>
              <h2 className="font-bold text-xl md:text-2xl mb-4 text-brand-accent">{section.heading}</h2>
              <p className="text-brand-dark/70 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('albaways_lang');
      if (saved === 'en' || saved === 'es' || saved === 'ar') {
        return saved as Language;
      }

      const deviceLang = navigator.language.toLowerCase();
      if (deviceLang.startsWith('ar')) return 'ar';
      if (deviceLang.startsWith('es')) return 'es';
    }
    return 'en';
  });
  const [page, setPage] = useState<Page>('home');
  const [proposalParams, setProposalParams] = useState<{
    dest?: 'saudi' | 'latam';
    type?: 'budget' | 'luxury';
    client?: string;
    country?: string;
  }>({});

  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('proposal') !== null) {
      setPage('proposal');
      setProposalParams({
        dest: (params.get('dest') as any) || 'saudi',
        type: (params.get('type') as any) || 'luxury',
        client: params.get('client') || 'Partner'
      });
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    localStorage.setItem('albaways_lang', lang);
  }, [lang, dir]);

  const navigate = (newPage: Page, hash?: string) => {
    setPage(newPage);
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      <RouterContext.Provider value={{ page, navigate, setProposalParams }}>
        <div className={`min-h-screen font-sans selection:bg-brand-accent/30 ${dir === 'rtl' ? 'font-arabic' : ''} page-${page === 'proposal' ? 'b2b' : page}`} dir={dir}>
          <Navbar />
          {page === 'home' && <HomePage />}
          {page === 'about' && <AboutPage />}
          {page === 'destinations' && <DestinationsPage />}
          {page === 'experiences' && <ExperiencesPage />}
          {page === 'contact' && <ContactPage />}
          {page === 'privacy' && <LegalPage type="privacy" />}
          {page === 'terms' && <LegalPage type="terms" />}
          {page === 'liability' && <LegalPage type="liability" />}
          {page === 'proposal' && (
            <B2BProposal 
              key={`${proposalParams.dest}-${proposalParams.country}`}
              initialRegion={proposalParams.dest} 
              initialCountry={proposalParams.country} 
            />
          )}
          <Footer />
        </div>
      </RouterContext.Provider>
    </LanguageContext.Provider>
  );
}
