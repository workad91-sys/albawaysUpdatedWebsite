import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';
import { useLanguage, SunLogo } from './App';
import { experiencesData, Region } from './data/experiences';

export const ExperiencesPage = () => {
  const { t, dir } = useLanguage();
  const [activeRegion, setActiveRegion] = useState<Region>('Saudi Arabia');
  const [activeCountry, setActiveCountry] = useState<string>('All');

  const activeRegionData = experiencesData.find(d => d.region === activeRegion);

  const handleRegionChange = (region: Region) => {
    setActiveRegion(region);
    setActiveCountry('All');
  };

  const filteredCountries = activeRegionData?.countries.filter(
    c => activeCountry === 'All' || c.name === activeCountry
  );

  return (
    <div className="min-h-screen bg-brand-light pb-24 page-experiences">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1564762332974-5bf63a654c9d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Experiences Hero"
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

          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-brand-accent text-brand-dark px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 shadow-lg"
          >
            <Star size={14} /> {t.experiencesPage?.subtitle?.split(' ')[0] || 'Immerse'}
          </motion.span>
          <h1 className="font-display font-black text-5xl md:text-[8vw] text-brand-accent uppercase leading-[0.9] mb-8 tracking-tighter drop-shadow-2xl">
            {t.experiencesPage?.title || 'Our Experiences'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            {t.experiencesPage?.subtitle || 'Immerse yourself in unforgettable activities and tours designed to connect you with the heart of each destination.'}
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ChevronDown size={40} />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Region Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {experiencesData.map((data) => (
            <button
              key={data.region}
              onClick={() => handleRegionChange(data.region)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeRegion === data.region
                  ? 'bg-brand-accent text-brand-dark shadow-md'
                  : 'bg-white text-brand-dark/70 hover:bg-brand-accent/20'
              }`}
            >
              {data.region}
            </button>
          ))}
        </div>

        {/* Country Filter for LATAM */}
        {activeRegion === 'LATAM' && activeRegionData && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <button
              onClick={() => setActiveCountry('All')}
              className={`px-4 py-1.5 text-sm rounded-full transition-all ${
                activeCountry === 'All'
                  ? 'bg-brand-dark text-white shadow-md'
                  : 'bg-white text-brand-dark/70 hover:bg-brand-dark/10'
              }`}
            >
              All
            </button>
            {activeRegionData.countries.map((country) => (
              <button
                key={country.name}
                onClick={() => setActiveCountry(country.name)}
                className={`px-4 py-1.5 text-sm rounded-full transition-all ${
                  activeCountry === country.name
                    ? 'bg-brand-dark text-white shadow-md'
                    : 'bg-white text-brand-dark/70 hover:bg-brand-dark/10'
                }`}
              >
                {country.name}
              </button>
            ))}
          </motion.div>
        )}

        {/* Countries and Experiences */}
        {filteredCountries?.map((country, countryIndex) => (
          <motion.div
            key={country.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: countryIndex * 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-brand-accent mb-8 border-b border-brand-dark/10 pb-4">
              {country.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {country.experiences.map((exp, expIndex) => (
                <motion.div
                  key={exp.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: expIndex * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={exp.image}
                      alt={exp.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-accent mb-2">{exp.name}</h3>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">
                      {exp.brief}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
