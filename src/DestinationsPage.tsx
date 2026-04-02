import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, ChevronDown } from 'lucide-react';
import { useLanguage, SunLogo } from './App';
import { destinationsData, Region } from './data/destinations';

export const DestinationsPage = () => {
  const { t, dir } = useLanguage();
  const [activeRegion, setActiveRegion] = useState<Region>('Saudi Arabia');
  const [activeCountry, setActiveCountry] = useState<string>('All');

  const activeRegionData = destinationsData.find(d => d.region === activeRegion);

  const handleRegionChange = (region: Region) => {
    setActiveRegion(region);
    setActiveCountry('All');
  };

  const filteredCountries = activeRegionData?.countries.filter(
    c => activeCountry === 'All' || c.name === activeCountry
  );

  return (
    <div className="min-h-screen bg-brand-light pb-24 page-destinations">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1504814532849-cff240bbc503?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Destinations Hero" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
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
            <Globe size={14} /> {t.destinationsPage?.subtitle?.split(' ')[0] || 'Explore'}
          </motion.span>
          <h1 className="font-display font-black text-5xl md:text-[8vw] text-brand-accent uppercase leading-[0.9] mb-8 tracking-tighter drop-shadow-2xl">
            {t.destinationsPage?.title || 'Our Destinations'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
            {t.destinationsPage?.subtitle || 'Explore our carefully curated destinations across the globe, offering unique experiences and unforgettable memories.'}
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
          {destinationsData.map((data) => (
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

        {/* Country Filter (if region has multiple countries) */}
        {activeRegionData && activeRegionData.countries.length > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-12"
          >
            <div className="flex items-center gap-2 mb-4 text-brand-dark/40">
              <MapPin size={14} className="text-brand-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Filter by Country</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setActiveCountry('All')}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 border ${
                  activeCountry === 'All'
                    ? 'bg-brand-dark text-white border-brand-dark shadow-lg scale-105'
                    : 'bg-white text-brand-dark/60 border-brand-dark/10 hover:border-brand-accent/30'
                }`}
              >
                All
              </button>
              {activeRegionData.countries.map((country) => (
                <button
                  key={country.name}
                  onClick={() => setActiveCountry(country.name)}
                  className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 border ${
                    activeCountry === country.name
                      ? 'bg-brand-dark text-white border-brand-dark shadow-lg scale-105'
                      : 'bg-white text-brand-dark/60 border-brand-dark/10 hover:border-brand-accent/30'
                  }`}
                >
                  {country.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Countries and Destinations */}
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
              {country.destinations.map((dest, destIndex) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: destIndex * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-accent mb-2">{dest.name}</h3>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">
                      {dest.brief}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 text-center bg-brand-card p-12 md:p-16 rounded-3xl border border-brand-dark/5 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/20 text-brand-accent mb-6">
              <Globe size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-accent mb-4">
              {t.destinationsPage?.comingSoon || 'Coming Soon'}
            </h3>
            <p className="text-brand-dark/60 text-lg max-w-2xl mx-auto mb-10">
              {t.destinationsPage?.comingSoonDesc || 'We are constantly expanding our horizons to bring you more unforgettable experiences. Stay tuned for these exciting new destinations!'}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['Colombia', 'Brazil', 'Argentine', 'Chile', 'Cuba', 'Puerto Rico', 'Panama', 'Portugal', 'Spain', 'Nicaragua', 'Honduras'].map((country, idx) => (
                <motion.span 
                  key={country} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 bg-white rounded-full text-brand-dark font-medium shadow-sm border border-brand-dark/5 hover:border-brand-accent/30 hover:shadow-md transition-all cursor-default flex items-center gap-2"
                >
                  <MapPin size={16} className="text-brand-accent" />
                  {country}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
