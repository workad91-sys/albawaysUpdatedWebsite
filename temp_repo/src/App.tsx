import React, { createContext, useContext, useState, useEffect } from 'react';
import { MapPin, Calendar, Star, ArrowRight, ArrowLeft, Mail, Phone, MapPin as MapPinIcon, Facebook, Twitter, Instagram, Youtube, Send, Users, Tent, ShieldCheck, Plane, Hexagon, Triangle, Circle, Square, Diamond, Octagon, Globe, Compass, Mountain } from 'lucide-react';
import { motion } from 'motion/react';
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { translations } from './translations';

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

const useLanguage = () => useContext(LanguageContext);

const LanguageSelector = () => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/us.svg' },
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/mx.svg' },
    { code: 'ar', name: 'العربية', flag: 'https://flagcdn.com/sa.svg' }
  ];

  const currentLang = languages.find(l => l.code === lang);

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-brand-dark/5 hover:bg-brand-dark/10 px-3 py-2 rounded-full transition text-sm font-medium"
      >
        <img src={currentLang?.flag} alt={currentLang?.name} className="w-5 h-5 rounded-full object-cover shrink-0" />
        <span className="hidden md:block uppercase">{currentLang?.code}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-36 bg-white border border-brand-dark/10 rounded-xl shadow-md overflow-hidden z-50">
          {languages.map(l => (
            <button
              key={l.code}
              onClick={() => {
                setLang(l.code as Language);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-brand-dark/5 transition flex items-center gap-3 ${lang === l.code ? 'text-brand-accent' : 'text-brand-dark'}`}
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
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="bg-brand-dark/10 backdrop-blur-lg border border-brand-dark/10 rounded-full px-4 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
            <Plane size={18} className="text-brand-dark" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide">ALBAWAYS</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-dark/80">
          <a href="#" className="text-brand-dark hover:text-brand-accent transition">{t.nav.home}</a>
          <a href="#about" className="hover:text-brand-dark transition">{t.nav.about}</a>
          <a href="#destinations" className="hover:text-brand-dark transition">{t.nav.destinations}</a>
          <a href="#experiences" className="hover:text-brand-dark transition">{t.nav.experiences}</a>
          <a href="#contact" className="hover:text-brand-dark transition">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSelector />
          <button className="hidden md:flex bg-brand-accent hover:bg-[#e59b30] text-brand-dark px-6 py-2 rounded-full text-sm font-semibold transition items-center gap-2">
            <Users size={16} />
            {t.nav.join}
          </button>
        </div>
      </div>
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

const Hero = () => {
  const { t, dir } = useLanguage();
  return (
    <section className="relative h-screen min-h-[800px] flex flex-col justify-center items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?auto=format&fit=crop&q=80" 
          alt="Desert Landscape"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-card/30 via-transparent to-brand-card"></div>
      </div>

      <div className="relative z-10 text-center w-full px-4 -mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1 }}
          className="font-display font-black text-[12vw] md:text-[8vw] leading-none tracking-tighter text-white uppercase drop-shadow-md"
        >
          {t.hero.title}
        </motion.h1>
      </div>

      <div className="absolute bottom-10 left-0 w-full px-6 md:px-16 flex flex-col lg:flex-row justify-between items-end z-20 gap-8">
        <div className="flex gap-4 overflow-x-auto pb-4 lg:pb-0 w-full lg:w-auto snap-x hide-scrollbar">
          <div className="snap-center"><StatCard icon={<Users size={20} />} number="10k+" text={t.hero.clients} /></div>
          <div className="snap-center"><StatCard icon={<Tent size={20} />} number="500+" text={t.hero.tours} /></div>
          <div className="snap-center"><StatCard icon={<ShieldCheck size={20} />} number="0" text={t.hero.incidents} /></div>
        </div>

        <div className="bg-brand-dark/10 backdrop-blur-md border border-brand-dark/20 p-4 rounded-3xl flex items-center gap-4 max-w-md w-full lg:w-auto">
          <img src="https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=150&q=80" alt="Monte Alban" className="w-24 h-24 rounded-2xl object-cover" />
          <div className="flex-1">
            <div className="text-xs text-brand-accent font-semibold mb-1 uppercase tracking-wider">{t.hero.featured}</div>
            <h3 className="font-bold text-lg leading-tight mb-1">{t.hero.featuredTitle}</h3>
            <p className="text-xs text-brand-dark/70 line-clamp-2">{t.hero.featuredDesc}</p>
          </div>
          <button className={`bg-white text-black p-4 rounded-full hover:bg-gray-200 transition shrink-0 ${dir === 'rtl' ? 'rotate-180' : ''}`}>
            <ArrowRight size={20} />
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
      <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">{title}</h3>
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  
  const images = [
    "https://images.unsplash.com/photo-1589271243958-d71e5aad340a?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80"
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.clientWidth / (window.innerWidth >= 768 ? 3 : 1);
      const newIndex = Math.round(Math.abs(scrollPosition) / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  const next = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.clientWidth / (window.innerWidth >= 768 ? 3 : 1);
      const newIndex = Math.min(currentIndex + 1, t.destinations.items.length - 1);
      scrollRef.current.scrollTo({
        left: dir === 'rtl' ? -(newIndex * itemWidth) : newIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const prev = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.clientWidth / (window.innerWidth >= 768 ? 3 : 1);
      const newIndex = Math.max(currentIndex - 1, 0);
      scrollRef.current.scrollTo({
        left: dir === 'rtl' ? -(newIndex * itemWidth) : newIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="destinations" className="py-24 px-6 md:px-16 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.destinations.subtitle}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold max-w-md">{t.destinations.title}</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-brand-dark/50 font-mono text-sm">0{currentIndex + 1} <span className="mx-2">—</span> 0{t.destinations.items.length}</span>
          <div className={`flex gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <button onClick={prev} className="w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-dark/10 transition">
              <ArrowLeft size={20} />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-dark/10 transition">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
        >
          {t.destinations.items.map((item, i) => (
            <div key={i} className="w-full md:w-[calc(33.333%-16px)] flex-shrink-0 snap-start">
              <DestinationCard 
                image={images[i]}
                title={item.title}
                location={item.location}
                duration={item.duration}
                featured={i === 1}
                t={t}
                dir={dir}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Discover = () => {
  const { t } = useLanguage();
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="text-center mb-16 relative z-10">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.discover.subtitle}</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold max-w-xl mx-auto">{t.discover.title}</h2>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 h-[500px] md:h-[700px] flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full opacity-25 pointer-events-none">
          <ComposableMap projection="geoMercator" projectionConfig={{ scale: 180, center: [0, 10] }} width={800} height={400} style={{ width: "100%", height: "100%" }}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#D1D5DB"
                    stroke="#9CA3AF"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            
            {/* LATAM Marker */}
            <Marker coordinates={[-65, -15]}>
              <g transform="translate(-12, -24)">
                <MapPin className="text-brand-accent" size={24} strokeWidth={2.5} />
              </g>
              <text textAnchor="middle" y={15} style={{ fill: "#FFFFFF", fontSize: "14px", fontWeight: "bold", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                {t.discover.latam}
              </text>
            </Marker>

            {/* North America Marker (Mexico) */}
            <Marker coordinates={[-102, 23]}>
              <g transform="translate(-12, -24)">
                <MapPin className="text-brand-accent" size={24} strokeWidth={2.5} />
              </g>
              <text textAnchor="middle" y={15} style={{ fill: "#FFFFFF", fontSize: "14px", fontWeight: "bold", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                {t.discover.northAmerica}
              </text>
            </Marker>

            {/* Saudi Arabia Marker */}
            <Marker coordinates={[-10, 20]}>
              {/* Intermediate point for curved line, no marker */}
            </Marker>

            {/* Saudi Arabia Marker */}
            <Marker coordinates={[45, 24]}>
              <g transform="translate(-12, -24)">
                <MapPin className="text-brand-accent" size={24} strokeWidth={2.5} />
              </g>
              <text textAnchor="middle" y={15} style={{ fill: "#FFFFFF", fontSize: "14px", fontWeight: "bold", textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                {t.discover.saudi}
              </text>
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

            {/* Dotted Line between North America and Saudi Arabia */}
            <Line
              from={[-102, 23]}
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

        <button className="relative z-10 bg-brand-accent hover:bg-[#e59b30] text-brand-dark px-8 py-3 rounded-full font-semibold transition mt-auto mb-4 pointer-events-auto">
          {t.discover.book}
        </button>
      </div>
    </section>
  );
};

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 px-6 md:px-16 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.about.subtitle}</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">{t.about.title}</h2>
        <p className="text-brand-dark/70 mb-6 leading-relaxed">
          {t.about.p1}
        </p>
        <p className="text-brand-dark/70 leading-relaxed">
          {t.about.p2}
        </p>
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
      <h3 className={`font-display font-bold text-xl mb-1 ${!active ? 'opacity-50' : ''}`}>{title}</h3>
      <div className={`flex items-center gap-4 text-xs text-brand-dark/70 ${!active ? 'opacity-50' : ''}`}>
        <div className="flex items-center gap-1"><MapPinIcon size={12} /> {location}</div>
      </div>
    </div>
  </div>
);

const Experiences = () => {
  const { t, dir } = useLanguage();
  const [filter, setFilter] = useState('all');
  
  const images = [
    "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?auto=format&fit=crop&q=80", // Saudi Arabia AlUla
    "https://images.unsplash.com/photo-1589271243958-d71e5aad340a?auto=format&fit=crop&q=80", // Saudi Arabia Riyadh
    "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80", // Mexico
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80", // Guatemala
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80", // Peru
    "https://images.unsplash.com/photo-1518182170546-076616fdcbac?auto=format&fit=crop&q=80", // Ecuador
    "https://images.unsplash.com/photo-1619546952812-520e98064a52?auto=format&fit=crop&q=80", // El Salvador
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80", // Colombia
    "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80", // Argentina
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80", // Brasil
    "https://images.unsplash.com/photo-1490100667990-4fced8021649?auto=format&fit=crop&q=80", // Chile
    "https://images.unsplash.com/photo-1503442862980-50ccb3f1d085?auto=format&fit=crop&q=80"  // Cuba
  ];
  const ratings = [4.9, 4.8, 4.8, 5.0, 4.9, 4.9, 4.7, 4.8, 4.9, 4.7, 4.8, 4.6];
  
  const filteredItems = filter === 'all' 
    ? t.experiences.items 
    : t.experiences.items.filter((item: any) => item.country === filter);

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
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.experiences.subtitle}</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold max-w-md">{t.experiences.title}</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className={`flex gap-2 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
            <button className="w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-dark/10 transition">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center hover:bg-brand-dark/10 transition">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {countries.map(c => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              filter === c.id 
                ? 'bg-[#e59b30] text-brand-dark shadow-md shadow-brand-accent/20' 
                : 'bg-brand-dark/5 text-brand-dark/70 hover:bg-brand-dark/10 hover:text-brand-dark'
            }`}
          >
            {c.flag && <span>{c.flag}</span>}
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item: any, i: number) => {
          const originalIndex = t.experiences.items.findIndex((orig: any) => orig.title === item.title);
          const countryData = countries.find(c => c.id === item.country);
          return (
            <ExperienceCard 
              key={i}
              image={images[originalIndex]}
              title={item.title}
              location={item.location}
              offset={i % 2 !== 0 && filteredItems.length > 2}
              active={item.active}
              comingSoonText={t.experiences.comingSoon}
              mostPicked={item.mostPicked}
              mostPickedText={t.experiences.mostPickedBadge}
              flag={countryData?.flag}
            />
          );
        })}
      </div>
    </section>
  );
};

const Clients = () => {
  const { t } = useLanguage();
  const clients = [
    { icon: <Hexagon size={32} />, name: "GlobalCorp" },
    { icon: <Triangle size={32} />, name: "Nexus" },
    { icon: <Circle size={32} />, name: "Aura" },
    { icon: <Square size={32} />, name: "Vertex" },
    { icon: <Diamond size={32} />, name: "Lumina" },
    { icon: <Octagon size={32} />, name: "Horizon" },
  ];

  return (
    <section className="py-24 px-6 md:px-16 border-t border-brand-dark/5">
      <div className="text-center mb-16">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.clients.subtitle}</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold">{t.clients.title}</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
        {clients.map((client, i) => (
          <div key={i} className="flex items-center gap-3 hover:opacity-100 transition cursor-pointer hover:text-brand-accent">
            {client.icon}
            <span className="font-display font-bold text-xl tracking-wider">{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Partners = () => {
  const { t } = useLanguage();
  const partners = [
    { icon: <Globe size={32} />, name: "AeroLines" },
    { icon: <Tent size={32} />, name: "CampGear" },
    { icon: <Compass size={32} />, name: "GeoTrek" },
    { icon: <ShieldCheck size={32} />, name: "SafeTravel" },
    { icon: <Mountain size={32} />, name: "EliteStays" },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-brand-card border-t border-brand-dark/5">
      <div className="text-center mb-16">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.partners.subtitle}</div>
        <h2 className="font-display text-3xl md:text-4xl font-bold">{t.partners.title}</h2>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
        {partners.map((partner, i) => (
          <div key={i} className="flex items-center gap-3 hover:opacity-100 transition cursor-pointer hover:text-brand-accent">
            {partner.icon}
            <span className="font-display font-bold text-xl tracking-wider">{partner.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Reviews = () => {
  const { t, dir } = useLanguage();
  return (
    <section className="py-32 px-6 md:px-16 text-center relative">
      <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{t.reviews.subtitle}</div>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">{t.reviews.title}</h2>
      
      <div className="max-w-3xl mx-auto relative">
        <span className={`absolute -top-10 ${dir === 'rtl' ? '-right-4 md:-right-10' : '-left-4 md:-left-10'} text-8xl text-brand-dark/5 font-serif`}>"</span>
        <p className="text-xl md:text-2xl leading-relaxed text-brand-dark/90 italic mb-8 relative z-10">
          "{t.reviews.quote}"
        </p>
        <span className={`absolute -bottom-20 ${dir === 'rtl' ? '-left-4 md:-left-10' : '-right-4 md:-right-10'} text-8xl text-brand-dark/5 font-serif`}>"</span>
        
        <div className="flex flex-col items-center">
          <div className="flex text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
          </div>
          <div className="font-bold">{t.reviews.name}</div>
          <div className="text-sm text-brand-dark/50">{t.reviews.role}</div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const { t } = useLanguage();
  const images = [
    "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518182170546-076616fdcbac?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1619546952812-520e98064a52?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1490100667990-4fced8021649?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503442862980-50ccb3f1d085?auto=format&fit=crop&q=80"
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-brand-card">
      <div className="text-center mb-16">
        <div className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2">{(t as any).gallery?.subtitle || "Memories"}</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold">{(t as any).gallery?.title || "Past Trips & Experiences"}</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className={`relative rounded-2xl overflow-hidden group ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}>
            <img 
              src={img} 
              alt={`Gallery image ${i + 1}`} 
              className="w-full h-full object-cover aspect-square transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-500"></div>
          </div>
        ))}
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
        <h2 className="font-display text-4xl md:text-5xl font-bold">{(t as any).contact?.title || "Contact Us"}</h2>
      </div>

      <form className="space-y-6 bg-brand-dark/5 p-8 rounded-3xl border border-brand-dark/10 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-brand-dark/70 mb-2">{(t as any).contact?.name || "Your Name"}</label>
            <input 
              type="text" 
              className="w-full bg-white border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-accent transition"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-brand-dark/70 mb-2">{(t as any).contact?.email || "Your Email"}</label>
            <input 
              type="email" 
              className="w-full bg-white border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-accent transition"
              placeholder="john@example.com"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-dark/70 mb-2">{(t as any).contact?.message || "Your Message"}</label>
          <textarea 
            rows={5}
            className="w-full bg-white border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-accent transition resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>
        <button type="button" className="w-full bg-[#e59b30] hover:bg-[#d4881e] text-brand-dark font-bold py-4 rounded-xl transition flex items-center justify-center gap-2">
          <Send size={18} />
          {(t as any).contact?.send || "Send Message"}
        </button>
      </form>
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
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
                <Plane size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-wide">ALBAWAYS</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t.footer.desc}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition"><TikTokIcon size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-accent transition"><WhatsAppIcon size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.services}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {t.footer.servicesList.map((item, i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.company}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              {t.footer.companyList.map((item, i) => (
                <li key={i}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.newsletter}</h4>
            <p className="text-white/60 text-sm mb-4">{t.footer.newsletterDesc}</p>
            <div className="flex">
              <input type="email" placeholder={t.footer.emailPlaceholder} className={`bg-white/5 border border-white/10 ${dir === 'rtl' ? 'rounded-r-lg' : 'rounded-l-lg'} px-4 py-3 w-full focus:outline-none focus:border-brand-accent text-sm`} />
              <button className={`bg-brand-accent hover:bg-[#e59b30] px-4 py-3 ${dir === 'rtl' ? 'rounded-l-lg' : 'rounded-r-lg'} transition flex items-center justify-center`}>
                <Send size={18} className={dir === 'rtl' ? 'rotate-180' : ''} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      <div className={`min-h-screen font-sans selection:bg-brand-accent/30 ${dir === 'rtl' ? 'font-arabic' : ''}`} dir={dir}>
        <Navbar />
        <Hero />
        <Destinations />
        <Discover />
        <About />
        <Experiences />
        <Clients />
        <Partners />
        <Gallery />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
