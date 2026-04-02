import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Globe, 
  Users, 
  Zap, 
  ArrowRight, 
  MapPin, 
  Star, 
  Clock, 
  MessageSquare,
  ChevronDown,
  Download,
  Briefcase,
  ArrowLeft,
  Utensils,
  Car,
  Hotel,
  UserCheck
} from 'lucide-react';
import { useLanguage, SunLogo } from './App';

// --- Data Definitions ---

const COUNTRIES = {
  saudi: [
    { name: "Kingdom Portfolio", status: "Active", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?auto=format&fit=crop&q=80" },
  ],
  latam: [
    { name: "Mexico", status: "Active", image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80" },
    { name: "Guatemala", status: "Active", image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80" },
    { name: "El Salvador", status: "Active", image: "https://images.unsplash.com/photo-1626474686930-f1e496b62f5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Nicaragua", status: "Active", image: "https://images.unsplash.com/photo-1599147092320-9ce79b36caa4?q=80&w=1259&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Honduras", status: "Active", image: "https://images.unsplash.com/photo-1637353831495-80b454520a24?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Peru", status: "Active", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80" },
    { name: "Ecuador", status: "Active", image: "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80" },
    { name: "Argentina", status: "Coming Soon", image: "https://images.unsplash.com/photo-1494783329112-4a6795291178?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Spain", status: "Coming Soon", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Colombia", status: "Coming Soon", image: "https://images.unsplash.com/photo-1532443603613-61fa154742cd?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Brazil", status: "Coming Soon", image: "https://images.unsplash.com/photo-1619546952812-520e98064a52?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Cuba", status: "Coming Soon", image: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Portugal", status: "Coming Soon", image: "https://images.unsplash.com/photo-1513735492246-483525079686?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ]
};

const COUNTRY_ITINERARIES: Record<string, { day: string; title: string; desc: string }[]> = {
  "Kingdom Portfolio": [
    { day: "Day 1", title: "Arrival in Riyadh", desc: "Arrive in Riyadh. Check into your hotel and take a sunset walk around the Kingdom Centre." },
    { day: "Day 2", title: "Historic Riyadh", desc: "Visit the Al Rajhi Mosque in the morning to admire its grand architecture. In the afternoon, explore the Masmak Fortress and the historic Diriyah district." },
    { day: "Day 3", title: "Edge of the World", desc: "Day trip to the Edge of the World (Jebel Fihrayn) for breathtaking cliff views." },
    { day: "Day 4", title: "Fly to AlUla", desc: "Fly to AlUla. Visit the Elephant Rock at sunset." },
    { day: "Day 5", title: "Hegra Exploration", desc: "Explore Hegra (Madain Salih), the UNESCO-listed Nabatean tombs." },
    { day: "Day 6", title: "Ancient Inscriptions", desc: "Visit Dadan and Jabal Ikmah to see ancient inscriptions and the \"library\" of the desert." },
    { day: "Day 7", title: "AlUla Oasis", desc: "Relax in the AlUla Oasis and walk the Heritage Trail." },
    { day: "Day 8", title: "Medina Spiritual Journey", desc: "Drive to Medina. Visit the perimeter of the Prophet’s Mosque and the Mount Uhud site." },
    { day: "Day 9", title: "High-Speed Rail to Jeddah", desc: "Take the Haramain High-Speed Railway to Jeddah." },
    { day: "Day 10", title: "Al-Balad Heritage", desc: "Explore Al-Balad (Historic Jeddah), famous for its coral-stone architecture and traditional souks." },
    { day: "Day 11", title: "Jeddah Corniche", desc: "Walk the Jeddah Corniche and see the Floating Mosque (Fatima Al-Zahra Mosque)." },
    { day: "Day 12", title: "Asir Mountains & Abha", desc: "Fly to Abha. Explore the colorful Rijal Almaa heritage village in the Asir mountains." },
    { day: "Day 13", title: "Hanging Village", desc: "Visit the High City of Abha and the Al-Habala \"hanging village\" via cable car." },
    { day: "Day 14", title: "Souq Al-Thulatha & Departure", desc: "Final shopping at the Souq Al-Thulatha before your departure from Abha or Riyadh." }
  ],
  "Mexico": [
    { day: "Day 1", title: "Arrival in CDMX", desc: "Arrive in Mexico City. Evening walk through Chapultepec Park." },
    { day: "Day 2", title: "Anthropology & Aztec Ruins", desc: "Explore the National Museum of Anthropology and the Templo Mayor (Aztec ruins)." },
    { day: "Day 3", title: "Teotihuacan Pyramids", desc: "Visit the ancient pyramids of Teotihuacan. Climb the Pyramid of the Sun." },
    { day: "Day 4", title: "Xochimilco Floating Gardens", desc: "Boat ride through the floating gardens of Xochimilco (enjoy fresh corn and juices)." },
    { day: "Day 5", title: "Monte Albán & Oaxaca", desc: "Fly to Oaxaca. Visit the Monte Albán archaeological site." },
    { day: "Day 6", title: "Hierve el Agua", desc: "Visit the Tule Tree and the petrified waterfalls of Hierve el Agua." },
    { day: "Day 7", title: "Textile Workshop & Tuxtla", desc: "Traditional textile workshop in Teotitlán del Valle. Fly to Tuxtla Gutiérrez." },
    { day: "Day 8", title: "Sumidero Canyon", desc: "Boat tour of the massive Sumidero Canyon." },
    { day: "Day 9", title: "Palenque Mayan Ruins", desc: "Drive to Palenque. Explore the jungle-shrouded Mayan ruins." },
    { day: "Day 10", title: "Waterfalls Exploration", desc: "Visit the Misol-Ha and Agua Azul waterfalls." },
    { day: "Day 11", title: "Fortified Campeche", desc: "Drive to Campeche. Walk the historic fortified walls of the city." },
    { day: "Day 12", title: "Uxmal Magician's Pyramid", desc: "Visit Uxmal, famous for its rounded Magician’s Pyramid." },
    { day: "Day 13", title: "Chichén Itzá & Cenote", desc: "Explore the world-famous Chichén Itzá. Afternoon swim in a freshwater Cenote." },
    { day: "Day 14", title: "Cancún Departure", desc: "Transfer to Cancún for your flight home." }
  ],
  "Guatemala": [
    { day: "Day 1", title: "Arrival & Antigua", desc: "Arrive in Guatemala City; transfer to Antigua." },
    { day: "Day 2", title: "Pacaya Volcano Hike", desc: "Hike the Pacaya Volcano to see active lava flows and roast marshmallows." },
    { day: "Day 3", title: "Jade & Cacao", desc: "Visit the Jade Museum and a local cacao workshop in Antigua." },
    { day: "Day 4", title: "Lake Atitlán Villages", desc: "Travel to Lake Atitlán. Boat tour to the village of San Juan La Laguna to see weaving cooperatives." },
    { day: "Day 5", title: "Indian Nose Sunrise", desc: "Sunrise hike to Indian Nose for the best view of the lake’s three volcanoes." },
    { day: "Day 6", title: "Chichicastenango Market", desc: "Visit the colorful Chichicastenango Market (Thursday/Sunday only) to see indigenous trade." },
    { day: "Day 7", title: "Flores Lakeside", desc: "Fly to Flores. Sunset walk along the lakefront." },
    { day: "Day 8", title: "Tikal National Park", desc: "Full day at Tikal National Park, exploring the tallest pyramids in the Mayan world." },
    { day: "Day 9", title: "Yaxhá Ruins", desc: "Visit the lakeside ruins of Yaxhá for a quieter, nature-filled experience." },
    { day: "Day 10", title: "Departure", desc: "Return to Guatemala City via Flores for your international flight." }
  ],
  "El Salvador": [
    { day: "Day 1", title: "Arrival in San Salvador", desc: "Arrive in San Salvador. Visit the National Palace." },
    { day: "Day 2", title: "El Boquerón Volcano", desc: "Hike to the crater of the San Salvador Volcano (El Boquerón)." },
    { day: "Day 3", title: "Mayan Pompeii", desc: "Visit Joya de Cerén, the \"Pompeii of the Americas,\" and the San Andrés ruins." },
    { day: "Day 4", title: "Ruta de las Flores", desc: "Travel to the Ruta de las Flores. Explore the murals of Ataco." },
    { day: "Day 5", title: "Coffee & Night Market", desc: "Coffee plantation tour (without the tasting if preferred) and the Nahuizalco night market." },
    { day: "Day 6", title: "Santa Ana Volcano", desc: "Hike the Santa Ana Volcano for a view of the turquoise sulfur lake." },
    { day: "Day 7", title: "Lake Coatepeque", desc: "Relax at Lake Coatepeque, a caldera lake perfect for boat rides." },
    { day: "Day 8", title: "La Libertad Pier", desc: "Travel to La Libertad. See the local fish market at the pier." },
    { day: "Day 9", title: "Tazumal Ruins", desc: "Visit the Tazumal ruins, the most impressive Mayan site in the country." },
    { day: "Day 10", title: "Departure", desc: "Transfer to the airport for departure." }
  ],
  "Nicaragua": [
    { day: "Day 1", title: "Arrival & Granada", desc: "Arrive in Managua; transfer to Granada." },
    { day: "Day 2", title: "Kayaking Isletas", desc: "Kayak through the Isletas de Granada in Lake Nicaragua." },
    { day: "Day 3", title: "Masaya Lava Lake", desc: "Visit the glowing lava lake of Masaya Volcano at night." },
    { day: "Day 4", title: "Ometepe Island", desc: "Travel to Ometepe Island (an island formed by two volcanoes)." },
    { day: "Day 5", title: "San Ramon Waterfall", desc: "Hike to the San Ramon Waterfall on the slopes of Maderas Volcano." },
    { day: "Day 6", title: "Ojo de Agua", desc: "Visit the Ojo de Agua natural crystal-clear spring pools." },
    { day: "Day 7", title: "León Art & History", desc: "Travel to León. Visit the Ortiz Gurdián Art Foundation." },
    { day: "Day 8", title: "Volcano Boarding", desc: "Experience Volcano Boarding down Cerro Negro." },
    { day: "Day 9", title: "Juan Venado Nature Reserve", desc: "Visit the Juan Venado Island Nature Reserve for turtle spotting." },
    { day: "Day 10", title: "Departure", desc: "Transfer back to Managua for your flight." }
  ],
  "Honduras": [
    { day: "Day 1", title: "Arrival & Copán", desc: "Arrive in San Pedro Sula; transfer to Copán Ruinas." },
    { day: "Day 2", title: "Copán Archaeological Site", desc: "Explore the Copán Archaeological Site, famous for its detailed stelae and hieroglyphic stairway." },
    { day: "Day 3", title: "Macaw Mountain", desc: "Visit Macaw Mountain Bird Park to see rescued scarlet macaws." },
    { day: "Day 4", title: "Lake Yojoa & Waterfall", desc: "Travel to Lake Yojoa. Visit the Pulhapanzak Waterfall." },
    { day: "Day 5", title: "Birdwatching", desc: "Boat tour on Lake Yojoa for birdwatching and nature photography." },
    { day: "Day 6", title: "Pico Bonito", desc: "Travel to La Ceiba. Visit the Pico Bonito National Park." },
    { day: "Day 7", title: "Roatán Island", desc: "Ferry to Roatán Island." },
    { day: "Day 8", title: "Mesoamerican Reef", desc: "Snorkeling at West Bay (part of the Mesoamerican Reef)." },
    { day: "Day 9", title: "Gumbalimba Park", desc: "Visit the Gumbalimba Park to see monkeys and sloths." },
    { day: "Day 10", title: "Departure", desc: "Fly from Roatán to San Pedro Sula for your departure." }
  ],
  "Peru": [
    { day: "Day 1", title: "Arrival in Lima", desc: "Arrive in Lima. Walk through the Miraflores district." },
    { day: "Day 2", title: "Larco Museum", desc: "Visit the Larco Museum to learn about pre-Columbian history." },
    { day: "Day 3", title: "Cusco Acclimatization", desc: "Fly to Cusco. Rest and acclimatize with a visit to the Qorikancha (Sun Temple)." },
    { day: "Day 4", title: "Sacsayhuamán Fortress", desc: "Explore the massive stones of the Sacsayhuamán fortress." },
    { day: "Day 5", title: "Sacred Valley", desc: "Travel to the Sacred Valley. Visit the Pisac Market and ruins." },
    { day: "Day 6", title: "Maras & Moray", desc: "Explore the Maras Salt Mines and the circular terraces of Moray." },
    { day: "Day 7", title: "Machu Picchu", desc: "Train to Aguas Calientes. Afternoon visit to Machu Picchu." },
    { day: "Day 8", title: "Huayna Picchu", desc: "Morning hike to Huayna Picchu or the Sun Gate. Return to Cusco." },
    { day: "Day 9", title: "Rainbow Mountain", desc: "Day trip to Rainbow Mountain (Vinicunca)." },
    { day: "Day 10", title: "Departure", desc: "Last-minute souvenir shopping at San Pedro Market before flying to Lima." }
  ],
  "Ecuador": [
    { day: "Day 1", title: "Arrival & Equator", desc: "Arrive in Quito. Visit the Mitad del Mundo (Equator line)." },
    { day: "Day 2", title: "TelefériQo Views", desc: "Take the TelefériQo cable car for a view of the Andes." },
    { day: "Day 3", title: "Cotopaxi Volcano", desc: "Drive to Cotopaxi National Park to see the active snow-capped volcano." },
    { day: "Day 4", title: "Quilotoa Crater Lake", desc: "Visit the emerald Quilotoa Crater Lake." },
    { day: "Day 5", title: "Fly to Galápagos", desc: "Fly to the Galápagos Islands (Baltra/Santa Cruz). Visit the Charles Darwin Research Station." },
    { day: "Day 6", title: "North Seymour Island", desc: "Boat excursion to North Seymour Island to see Blue-footed Boobies." },
    { day: "Day 7", title: "Tortuga Bay", desc: "Relax at Tortuga Bay and see giant marine iguanas." },
    { day: "Day 8", title: "Isabela Island", desc: "Ferry to Isabela Island. Visit the Flamingo Estuary." },
    { day: "Day 9", title: "Sierra Negra Volcano", desc: "Hike the Sierra Negra Volcano, one of the largest craters in the world." },
    { day: "Day 10", title: "Departure", desc: "Return to Baltra and fly back to Quito for your international flight." }
  ]
};

const EXECUTION_DETAILS = (region: string) => ({
  budget: {
    accommodation: region === 'saudi' ? "3-4 Star Hotels" : "Boutique Hostels & Guesthouses",
    transport: "Regional Shuttles & Shared Vans",
    support: "Local Leads & Community Guides",
    meals: "Local Markets & Street Food Gems"
  },
  luxury: {
    accommodation: "5-Star Hotels, Palaces & Private Villas",
    transport: "Private Chauffeur & Internal Flights",
    support: "Senior Private Concierge (24/7)",
    meals: "Fine Dining & Exclusive Culinary Experiences"
  }
});

const DEFAULT_TIMELINE = [
  { day: "Day 1", title: "Arrival & Strategic Briefing", desc: "Private transfer to primary hub. Evening briefing on local operational nuances." },
  { day: "Day 2-4", title: "Cultural Deep Dive", desc: "Curated experiences focusing on heritage and local interaction." },
  { day: "Day 5-8", title: "Regional Expansion", desc: "Transition to secondary destination via optimized logistics." },
  { day: "Day 9-12", title: "Adventure & Immersion", desc: "High-impact activities tailored to partner branding." },
  { day: "Day 13-14", title: "Impact Review & Departure", desc: "Final debrief and seamless airport coordination." }
];

// --- Sub-Components ---

const Step1Gateway = ({ onSelect }: { onSelect: (region: 'saudi' | 'latam') => void }) => (
  <div className="min-h-screen bg-black flex flex-col">
    {/* Hero Section */}
    <div className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
      {/* Sun behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible -z-10 opacity-20">
        <SunLogo className="w-[120vw] md:w-[80vw] h-auto text-[#FDB933]" />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h1 className="font-display font-black text-6xl md:text-[7vw] text-white uppercase leading-[0.85] mb-6 tracking-tighter">
          One Partner. <br />
          <span className="text-[#FDB933]">Two Worlds.</span>
        </h1>
        <p className="text-white/60 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
          White-label execution for Saudi Arabia and Latin America. We provide the ground operations; you provide the brand.
        </p>
      </motion.div>
    </div>

    {/* Split Choice */}
    <div className="flex-1 flex flex-col md:flex-row">
      <motion.div 
        whileHover={{ flex: 1.2 }}
        onClick={() => onSelect('saudi')}
        className="flex-1 relative group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10"
      >
        <img 
          src="https://images.unsplash.com/photo-1669572203575-0ec541360e2a?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
          alt="Saudi Arabia"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
          <span className="text-[#FDB933] font-black tracking-[0.3em] text-sm mb-4">INBOUND EXECUTION</span>
          <h2 className="text-white font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6">Saudi Arabia</h2>
          <p className="text-white/60 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            International Partners entering the Kingdom. Seamless ground handling and local expertise.
          </p>
          <div className="mt-8 w-16 h-16 rounded-full border border-[#FDB933] flex items-center justify-center text-[#FDB933] group-hover:bg-[#FDB933] group-hover:text-black transition-all duration-500">
            <ArrowRight size={32} />
          </div>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ flex: 1.2 }}
        onClick={() => onSelect('latam')}
        className="flex-1 relative group cursor-pointer overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
          alt="LATAM"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
          <span className="text-[#FDB933] font-black tracking-[0.3em] text-sm mb-4">REGIONAL EXPERTISE</span>
          <h2 className="text-white font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6">Latin America</h2>
          <p className="text-white/60 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Saudi & Gulf Partners entering LATAM. Deep cultural bridges and operational excellence.
          </p>
          <div className="mt-8 w-16 h-16 rounded-full border border-[#FDB933] flex items-center justify-center text-[#FDB933] group-hover:bg-[#FDB933] group-hover:text-black transition-all duration-500">
            <ArrowRight size={32} />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const Step2Navigator = ({ region, onBack, onSelect }: { region: 'saudi' | 'latam', onBack: () => void, onSelect: (country: string) => void }) => {
  const list = COUNTRIES[region];
  
  return (
    <div className="min-h-screen bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#FDB933] font-black uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all"
        >
          <ArrowLeft size={16} /> Back to Gateway
        </button>
        
        <h2 className="font-display font-black text-5xl md:text-7xl text-white uppercase tracking-tighter mb-16">
          Select <span className="text-[#FDB933]">Destination</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {list.map((country, i) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => country.status === 'Active' && onSelect(country.name)}
              className={`group relative aspect-[4/5] rounded-[40px] overflow-hidden cursor-pointer ${country.status !== 'Active' ? 'opacity-50 grayscale cursor-not-allowed' : ''}`}
            >
              <img src={country.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={country.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2 inline-block ${country.status === 'Active' ? 'bg-[#FDB933] text-black' : 'bg-white/20 text-white'}`}>
                  {country.status}
                </span>
                <h3 className="text-white font-display font-black text-3xl uppercase tracking-tighter group-hover:text-[#FDB933] transition-colors">
                  <span className="text-[#FDB933]">{country.name}</span>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Step3Summary = ({ country, region, onBack }: { country: string, region: string, onBack: () => void }) => {
  const [tier, setTier] = useState<'budget' | 'luxury'>('luxury');
  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const details = EXECUTION_DETAILS(region)[tier];
  const timeline = COUNTRY_ITINERARIES[country] || DEFAULT_TIMELINE;

  return (
    <div className="min-h-screen bg-white text-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-black/40 font-black uppercase tracking-widest text-xs mb-12 hover:text-black transition-all"
        >
          <ArrowLeft size={16} /> Back to Navigator
        </button>

        {/* Component A: Strategic Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          <div className="lg:col-span-2">
            <h2 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-8">
              {country}: <br />
              <span className="text-[#FDB933]">Strategic Overview</span>
            </h2>
            
            <div className="flex flex-wrap gap-12 mt-12">
              <div>
                <p className="text-black/40 uppercase tracking-widest text-[10px] font-black mb-2">Duration</p>
                <p className="text-3xl font-display font-black">{timeline.length} Days</p>
              </div>
              <div className="w-px h-12 bg-black/10 hidden sm:block"></div>
              <div>
                <p className="text-black/40 uppercase tracking-widest text-[10px] font-black mb-2">Execution</p>
                <p className="text-3xl font-display font-black">100% White-label</p>
              </div>
              <div className="w-px h-12 bg-black/10 hidden sm:block"></div>
              <div>
                <p className="text-[#FDB933] uppercase tracking-widest text-[10px] font-black mb-2">Margins</p>
                <p className="text-3xl font-display font-black">15%+ Avg ROI</p>
              </div>
            </div>

            <div className="mt-16 p-10 bg-black text-white rounded-[40px] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageSquare size={80} />
              </div>
              <p className="text-xl italic leading-relaxed relative z-10">
                "Our operational expertise in {country} ensures that your brand remains the hero. We handle the complexity; you reap the loyalty."
              </p>
              <p className="mt-6 text-[#FDB933] font-black uppercase tracking-widest text-xs">— Albaways Operations Team</p>
            </div>
          </div>

          <div className="bg-black text-white p-12 rounded-[50px] flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="font-display font-black text-3xl uppercase tracking-tighter mb-8 text-[#FDB933]">Transparent B2B Pricing</h3>
              <p className="text-white/60 mb-8">Net Rates Provided Upon Verification. Access our wholesale pricing structure for verified partners.</p>
              <div className="inline-block bg-[#FDB933] text-black px-4 py-2 rounded-full font-black text-xs uppercase tracking-widest mb-12">
                AVG Partner ROI Starts From : 15%
              </div>
            </div>
            <div className="space-y-4">
              <button className="w-full bg-[#FDB933] text-black py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-colors">
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>

        {/* Component B: The Dynamic Toggle */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
            <h3 className="font-display font-black text-4xl uppercase tracking-tighter">Execution <span className="text-[#FDB933]">Tiers</span></h3>
            
            <div className="flex bg-black/5 p-2 rounded-full border border-black/5">
              <button 
                onClick={() => setTier('budget')}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${tier === 'budget' ? 'bg-black text-white shadow-xl' : 'text-black/40 hover:text-black'}`}
              >
                {region === 'saudi' ? 'Comfort' : 'Budget'}
              </button>
              <button 
                onClick={() => setTier('luxury')}
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${tier === 'luxury' ? 'bg-black text-white shadow-xl' : 'text-black/40 hover:text-black'}`}
              >
                Luxury
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Hotel />, label: "Accommodation", value: details.accommodation },
              { icon: <Car />, label: "Transport", value: details.transport },
              { icon: <UserCheck />, label: "Guided Support", value: details.support },
              { 
                icon: <Utensils />, 
                label: "Meals", 
                value: "According to itinerary",
                subValue: tier === 'budget' ? "Local Markets & Street Food Gems" : "Fine Dining & Exclusive Culinary Experiences",
                subIcon: tier === 'budget' ? "🏪" : "🍷"
              }
            ].map((item, i) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-black/5 rounded-[40px] border border-black/5 hover:border-[#FDB933]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-black text-[#FDB933] flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <p className="text-black/40 uppercase tracking-widest text-[10px] font-black mb-2">{item.label}</p>
                <p className="font-bold text-lg leading-tight mb-2">{item.value}</p>
                {'subValue' in item && (
                  <div className="flex items-center gap-2 text-sm text-black/60 bg-white/50 p-3 rounded-2xl border border-black/5">
                    <span className="text-lg">{(item as any).subIcon}</span>
                    <span>{(item as any).subValue}</span>
                  </div>
                )}
                {!('subValue' in item) && (
                  <p className="text-sm text-black/60">{(item as any).value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Component C: The Journey Card */}
        <div id="itinerary-section" className="mb-24">
          <h3 className="font-display font-black text-4xl uppercase tracking-tighter mb-12">Sample <span className="text-[#FDB933]">{timeline.length} Day</span> Experience</h3>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div 
                key={i} 
                onClick={() => setExpandedDay(expandedDay === i ? null : i)}
                className={`group rounded-[32px] p-8 border transition-all duration-500 cursor-pointer ${expandedDay === i ? 'bg-black text-white border-black' : 'bg-black/5 text-black border-black/5 hover:bg-black/10'}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <span className={`font-display font-black text-3xl transition-colors ${expandedDay === i ? 'text-[#FDB933]' : 'text-black/20 group-hover:text-[#FDB933]'}`}>{item.day}</span>
                    <h4 className="font-bold text-xl">{item.title}</h4>
                  </div>
                  <div className={`transition-transform duration-500 ${expandedDay === i ? 'rotate-180 text-[#FDB933]' : 'text-black/20'}`}>
                    <ChevronDown size={24} />
                  </div>
                </div>
                <AnimatePresence>
                  {expandedDay === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-6 text-sm opacity-60 leading-relaxed pl-20">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Full itinerary CTA — Mexico only */}
          {country === 'Mexico' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 p-10 bg-black rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div>
                <p className="text-[#FDB933] text-xs font-black uppercase tracking-widest mb-2">Full Programme Available</p>
                <h4 className="text-white font-display font-black text-2xl uppercase tracking-tighter">View the Complete Mexico Itinerary</h4>
                <p className="text-white/40 text-sm mt-2">14 & 10 day options · Guided Autonomy philosophy · Fully detailed day-by-day</p>
              </div>
              <a
                href="/mexico-2025"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-3 bg-[#FDB933] text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
              >
                View Itinerary <ArrowRight size={16} />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

export const B2BProposal = ({ initialRegion, initialCountry }: { initialRegion?: 'saudi' | 'latam', initialCountry?: string }) => {
  const [step, setStep] = useState(initialCountry ? 3 : initialRegion ? 2 : 1);
  const [region, setRegion] = useState<'saudi' | 'latam'>(initialRegion || 'saudi');
  const [country, setCountry] = useState(initialCountry || '');

  const handleRegionSelect = (r: 'saudi' | 'latam') => {
    setRegion(r);
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCountrySelect = (c: string) => {
    setCountry(c);
    setStep(3);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans selection:bg-[#FDB933] selection:text-black page-b2b">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Step1Gateway onSelect={handleRegionSelect} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <Step2Navigator 
              region={region} 
              onBack={() => setStep(1)} 
              onSelect={handleCountrySelect} 
            />
          </motion.div>
        )}

        {step === 3 && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
          >
            <Step3Summary 
              country={country} 
              region={region}
              onBack={() => setStep(2)} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer & Trust (Fixed) */}
      <section className="py-32 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[#FDB933] text-sm font-bold uppercase tracking-widest mb-4 block">Our Foundation</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tighter">Why Partners <span className="text-[#FDB933]">Trust Albaways</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            {[
              { icon: <Clock size={40} />, value: "24/7", label: "Operational Support" },
              { icon: <Users size={40} />, value: "100+", label: "Local Field Experts" },
              { icon: <ShieldCheck size={40} />, value: "99%", label: "Partner Success Rate" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8 text-[#FDB933]">
                  {stat.icon}
                </div>
                <p className="text-6xl md:text-8xl font-display font-black mb-4 tracking-tighter">{stat.value}</p>
                <p className="text-white/40 uppercase tracking-[0.3em] font-black text-xs">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-32">
            <div className="text-center mb-20">
              <h3 className="font-display font-black text-4xl uppercase tracking-tighter mb-4">Our <span className="text-[#FDB933]">White-Label</span> Promise</h3>
              <p className="text-white/40 max-w-xl mx-auto">A seamless 4-step process designed to protect your brand and maximize impact.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Consultation", desc: "Deep dive into your brand's specific travel DNA and client profiles." },
                { title: "Curation", desc: "Bespoke itinerary design with 100% unbranded documentation." },
                { title: "Live Execution", desc: "On-the-ground handling by experts trained in your brand standards." },
                { title: "Impact Report", desc: "Post-trip analytics and feedback to drive future growth." }
              ].map((step, i) => (
                <div key={i} className="relative p-10 bg-white/5 rounded-[40px] border border-white/10">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-[#FDB933] text-black flex items-center justify-center font-black text-xl shadow-lg">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-[#FDB933]">{step.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
