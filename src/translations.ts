import { legalContent } from './data/legalContent';

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      destinations: "Destinations",
      experiences: "Experiences",
      contact: "Contact",
      join: "Join Traveller"
    },
    hero: {
      title: "Find Your Path",
      clients: "Satisfied Clients",
      tours: "Tours Organized",
      incidents: "Incidents",
      featured: "Featured",
      featuredTitle: "Mexico 14 days trip",
      featuredDesc: "We organize professional adventures in the most beautiful corners of LATAM."
    },
    destinations: {
      subtitle: "Popularly",
      title: "Most Popular Destinations",
      from: "From",
      days: "Days",
      seeMore: "See more",
      items: [
        { title: "Saudi Arabia", location: "Saudi Arabia", duration: "14 Days" },
        { title: "Mexico", location: "Mexico", duration: "14 Days" },
        { title: "Guatemala & El Salvador", location: "Central America", duration: "12 Days" },
        { title: "Peru & Ecuador", location: "South America", duration: "14 Days" }
      ]
    },
    destinationsPage: {
      title: "Our Destinations",
      subtitle: "Explore our carefully curated destinations across the globe, offering unique experiences and unforgettable memories.",
      comingSoon: "Coming Soon",
      comingSoonDesc: "We are constantly expanding our horizons to bring you more unforgettable experiences. Stay tuned for these exciting new destinations!"
    },
    experiencesPage: {
      title: "Our Experiences",
      subtitle: "Immerse yourself in unforgettable activities and tours designed to connect you with the heart of each destination."
    },
    discover: {
      subtitle: "Discover",
      title: "Discover the world through our eyes",
      latam: "LATAM",
      saudi: "Saudi Arabia",
      book: "Keep me posted"
    },
    about: {
      subtitle: "About Us",
      title: "We are Albaways",
      p1: "Founded with a passion for the unseen, Albaways is a Saudi Company specializing in the majestic landscapes of Saudi Arabia and the vibrant cultures of Latin America. We bridge worlds, offering unparalleled access to hidden gems and iconic landmarks alike.",
      p2: "By investing in local expertise and sustainable travel practices, Albaways seamlessly connects travelers to memorable experiences. Whether it's the ancient tombs of Hegra or the towering peaks of Patagonia, our curated journeys are designed to transform your perspective and leave a lasting impact.",
      partnerTitle: "Your Best Operational Partner in Saudi Arabia",
      partnerDesc: "At Albaways, we specialize in crafting authentic experiences and executing seamless logistics across every corner of Saudi Arabia.",
      servicesTitle: "Our Services",
      services: [
        { title: "Authentic & Exclusive Experiences", desc: "" },
        { title: "Accommodation", desc: "From boutique hotels to 5-star luxury." },
        { title: "Guides", desc: "Local experts fluent in Spanish." },
        { title: "Transportation", desc: "Modern fleet (Sedans, SUVs, Buses)." },
        { title: "Visa Assistance", desc: "" },
        { title: "Flight Ticket Management", desc: "" }
      ],
      partnerFooter: "We ensure every detail is carefully handled, allowing you to focus on what matters most – the journey.",
      readMore: "Read More"
    },
    aboutPage: {
      heroTitle: "Our Story",
      introSubtitle: "Who We Are",
      introTitle: "Bridging Cultures, Creating Experiences",
      introText1: "Albaways is a Saudi Company, founded by two passionate Saudi travelers Ibrahim Alzuwayid and Faisal Alotaibi with a love for Latin America. We specialize in connecting the rich heritage of Saudi Arabia with the vibrant cultures of Latin America.",
      introText2: "Our mission goes beyond travel – it's about building cultural bridges, offering authentic experiences, and opening new horizons for exploration and understanding between the Arab world and Latin cultures.",
      missionSubtitle: "Our Mission",
      missionTitle: "Transforming Perspectives",
      missionText: "To provide unparalleled access to hidden gems and iconic landmarks, ensuring every journey is sustainable, respectful of local communities, and deeply enriching for our travelers.",
      valuesSubtitle: "Core Values",
      valuesTitle: "What Drives Us",
      values: [
        { title: "Excellence", desc: "We strive for perfection in every detail of your journey." },
        { title: "Sustainability", desc: "Protecting the environments and cultures we visit." },
        { title: "Authenticity", desc: "Delivering genuine experiences that reflect the true spirit of a destination." },
        { title: "Innovation", desc: "Constantly seeking new ways to enhance the travel experience." }
      ]
    },
    experiences: {
      subtitle: "Experiences",
      title: "Top experiences for you",
      filterAll: "All",
      comingSoon: "Coming soon",
      mostPickedBadge: "Most Picked",
      countries: {
        saudiArabia: "Saudi Arabia",
        mexico: "Mexico",
        guatemala: "Guatemala",
        elSalvador: "El Salvador",
        peru: "Peru",
        ecuador: "Ecuador",
        colombia: "Colombia",
        argentina: "Argentina",
        brasil: "Brasil",
        chile: "Chile",
        cuba: "Cuba"
      },
      items: [
        { title: "Hegra Ancient City", location: "AlUla, KSA", duration: "3 Days", country: "saudiArabia", active: true, mostPicked: true },
        { title: "Edge of the World", location: "Riyadh, KSA", duration: "2 Days", country: "saudiArabia", active: true, mostPicked: true },
        { title: "Chichén Itzá", location: "Mexico", duration: "2 Days", country: "mexico", active: true, mostPicked: true },
        { title: "Tikal Ruins", location: "Guatemala", duration: "3 Days", country: "guatemala", active: true, mostPicked: true },
        { title: "Machu Picchu", location: "Peru", duration: "5 Days", country: "peru", active: true, mostPicked: true },
        { title: "Galapagos Islands", location: "Ecuador", duration: "7 Days", country: "ecuador", active: true, mostPicked: true },
        { title: "Volcano Hike", location: "El Salvador", duration: "1 Day", country: "elSalvador", active: true, mostPicked: false },
        { title: "Cartagena Colors", location: "Colombia", duration: "4 Days", country: "colombia", active: false, mostPicked: false },
        { title: "Patagonia Trek", location: "Argentina", duration: "6 Days", country: "argentina", active: false, mostPicked: false },
        { title: "Amazon Rainforest", location: "Brasil", duration: "5 Days", country: "brasil", active: false, mostPicked: false },
        { title: "Atacama Desert", location: "Chile", duration: "4 Days", country: "chile", active: false, mostPicked: false },
        { title: "Havana Nights", location: "Cuba", duration: "3 Days", country: "cuba", active: false, mostPicked: false }
      ]
    },
    reviews: {
      subtitle: "Review",
      title: "What our clients say",
      list: [
        {
          quote: "I was skeptical about Mexico as a first-time group traveler, but Albaways made it feel safe, authentic, and incredibly fun. The attention to detail was 10/10. I’d repeat this exact trip tomorrow.",
          name: "Nader",
          role: "Traveler | Saudi Arabia",
          stars: 5
        },
        {
          quote: "Truly an exceptional experience. They took care of the heavy lifting so we could just enjoy the culture. Professional, organized, and genuinely great people to travel with.",
          name: "Talal",
          role: "Traveler | Saudi Arabia",
          stars: 5
        },
        {
          quote: "The best part was the lack of stress. For a solo traveler used to doing everything myself, it was a luxury to have Albaways handle it all so perfectly. Looking forward to the next destination!",
          name: "Abdulrahman",
          role: "Traveler | Saudi Arabia",
          stars: 5
        },
        {
          quote: "Unforgettable. The itinerary was a perfect mix of hidden gems and must-see spots. Albaways has a deep knowledge of LATAM that really shows. Highly recommended!",
          name: "Ibrahim",
          role: "Traveler | Saudi Arabia",
          stars: 5
        },
        {
          quote: "I went in thinking this would be my only group trip, and I came out planning my next one with them. If you want a seamless experience in Mexico, look no further.",
          name: "Abdulaziz",
          role: "Traveler | Saudi Arabia",
          stars: 5
        },
        {
          quote: "Top-tier organization. Everything was punctual and high-quality. As someone who values their independence, I never felt restricted, just well-taken care of.",
          name: "Omar",
          role: "Traveler | Saudi Arabia",
          stars: 5
        },
        {
          quote: "Incredible vibes and even better management. Albaways knows how to bridge the gap between Saudi and Latin American cultures perfectly. A truly five-star experience.",
          name: "Mohsen",
          role: "Traveler | Saudi Arabia",
          stars: 5
        },
        {
          quote: "The most organized group trip I’ve ever seen. They converted a group of solo travelers into a loyal community. That says everything you need to know about their quality.",
          name: "Nawaf",
          role: "Traveler | Saudi Arabia",
          stars: 5
        },
        {
          quote: "Our 14-day circuit around the Kingdom was a masterclass in local immersion. From the hidden gems in the desert to the hospitality of the team, we saw the real Saudi Arabia. Simply authentic.",
          name: "Olga",
          role: "Traveler | Mexico",
          stars: 5
        },
        {
          quote: "The Riyadh day tours were fascinating, but the 'Kashtah' picnic was the highlight. Albaways brings a level of professionalism and good manners that makes you feel welcome from day one.",
          name: "Maria",
          role: "Traveler | Spain",
          stars: 5
        },
        {
          quote: "Edge of the World was breathtaking, but it was the punctuality and the food options that impressed me most. They know all the best local spots that you won't find in guidebooks.",
          name: "Laura",
          role: "Traveler | Colombia",
          stars: 5
        },
        {
          quote: "I’ve traveled globally, and the professionalism here is world-class. The Red Dunes safari was thrilling, and the traditional Saudi picnic was a beautiful touch of culture.",
          name: "Richard",
          role: "Traveler | Argentina",
          stars: 5
        },
        {
          quote: "Albaways doesn't just show you sights; they give you a deep dive into Saudi life. The camel and quad riding were great, but the authentic conversations were the best part.",
          name: "Facundo",
          role: "Traveler | Uruguay",
          stars: 5
        },
        {
          quote: "Everything was perfectly timed. Punctuality is clearly a priority for them. We did the Riyadh tour and the dunes, and every detail was handled with great behavior and respect.",
          name: "Sandra",
          role: "Traveler | Spain",
          stars: 5
        },
        {
          quote: "The 14-day trip was the best decision we made. We saw things we never could have found on our own. Authentic, professional, and very well-mannered staff.",
          name: "Rafael",
          role: "Traveler | Peru",
          stars: 5
        },
        {
          quote: "If you want to see the true heart of the Kingdom, go with Albaways. Their hidden gems and food choices were incredible. They truly are experts in Saudi hospitality.",
          name: "Carmen",
          role: "Traveler | Chile",
          stars: 5
        },
        {
          quote: "The Red Dunes safari was a blast! Beyond the adventure, the team’s professionalism and the quality of the 'Kashtah' made it feel like a premium experience.",
          name: "Viviana",
          role: "Traveler | Ecuador",
          stars: 5
        },
        {
          quote: "Expertly handled. From Riyadh to the deep desert, we felt safe and immersed in the culture. The punctuality and manners of our guides were exceptional.",
          name: "Silvia",
          role: "Traveler | Spain",
          stars: 5
        },
        {
          quote: "An unforgettable journey. The level of local immersion they provide is rare. They took us to the best food spots in Riyadh and showed us the true soul of the country.",
          name: "Lani",
          role: "Traveler | Costa Rica",
          stars: 5
        },
        {
          quote: "A perfect circuit of the Kingdom. Every day was a new discovery. The team is professional, polite, and clearly passionate about their heritage.",
          name: "Rita",
          role: "Traveler | Panama",
          stars: 5
        },
        {
          quote: "Riyadh and the Edge of the World were stunning. Albaways made the logistics invisible so we could just enjoy the magic of the dunes and the horses. Exceptional service.",
          name: "Francois",
          role: "Traveler | France",
          stars: 5
        }
      ]
    },
    clients: {
      subtitle: "Trust",
      title: "We worked with"
    },
    partners: {
      subtitle: "Network",
      title: "Our Partners"
    },
    gallery: {
      subtitle: "Memories",
      title: "Past Trips & Experiences"
    },
    contact: {
      subtitle: "Get in Touch",
      title: "Contact Us",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message"
    },
    contactPage: {
      heroTitle: "Contact Us",
      infoSubtitle: "Reach Out",
      infoTitle: "We'd Love to Hear From You",
      infoText: "Whether you have a question about our tours, need assistance with booking, or just want to share your travel dreams, our team is ready to help.",
      addressTitle: "Our Office",
      address: "Riyadh, Saudi Arabia",
      emailTitle: "Email Us",
      email: "contact@albaways.com",
      phoneTitle: "Call Us",
      phone: "+966 5757 2 5151 / +966 5912 5 1151"
    },
    footer: {
      desc: "Albaways seamlessly connects millions of travelers to memorable experiences in Saudi Arabia and LATAM.",
      services: "Services",
      servicesList: ["Create Experiences", "Accommodation", "Professional Multi Lingual Tour guides and Tour Leaders", "Transportation", "Visa and Flight ticket assistance"],
      company: "Company",
      companyList: ["About Us", "Contact"],
      quickLinks: "Quick Links",
      rights: "Albaways. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms and conditions",
      liability: "Liability Disclaimer Agreement"
    },
    proposal: {
      hero: {
        subtitle: "Exclusive B2B Proposal",
        title: "Your Operational Excellence in {destination}",
        cta: "Request Custom Draft"
      },
      justify: {
        name: "{destination}",
        subtitle: "Why {destination}?",
        title: "A Strategic Opportunity",
        saudi: {
          name: "Saudi Arabia",
          items: [
            { title: "The New Frontier", desc: "Saudi Arabia is the world's fastest-growing tourism destination, offering a unique first-mover advantage for your brand." },
            { title: "Untouched Heritage", desc: "Access to UNESCO sites like Hegra and the historic Diriyah before the global crowds arrive." },
            { title: "Luxury Infrastructure", desc: "World-class resorts like Habitas AlUla and The Red Sea project provide a seamless luxury experience." }
          ]
        },
        latam: {
          name: "Latin America",
          items: [
            { title: "Cultural Depth", desc: "Vibrant traditions and ancient civilizations in Mexico, Peru, and Guatemala that resonate with global travelers." },
            { title: "Diverse Landscapes", desc: "From the Blue crystal lakes in Mexico Amazonian jungles of Ecuador." },
            { title: "High Value", desc: "Premium experiences at competitive operational costs, maximizing your agency's margins." }
          ]
        }
      },
      trust: {
        subtitle: "Credibility",
        title: "Why Partners Trust Albaways",
        stats: [
          { label: "On-Ground Support", value: "24/7" },
          { label: "Local Experts", value: "100+" },
          { label: "Success Rate", value: "99%" }
        ]
      },
      marketFit: {
        subtitle: "Profitability",
        title: "Target Market Fit",
        segments: [
          { title: "Corporate Incentives", desc: "High-end rewards for top performers, featuring exclusive gala dinners and team-building in remote locations." },
          { title: "Luxury Leisure", desc: "Bespoke journeys for high-net-worth individuals who demand privacy, exclusivity, and local authenticity." },
          { title: "Special Interest", desc: "Photography, history, or adventure focused groups looking for deep immersion and expert guidance." }
        ]
      },
      itinerary: {
        subtitle: "The Journey",
        title: "Sample 7-Day Experience",
        saudi: [
          { day: "Day 1", title: "Riyadh: The Modern Pulse", desc: "Arrival, private transfer to a 5-star hotel, and welcome dinner at the Edge of the World." },
          { day: "Day 2-3", title: "AlUla: Living Museum", desc: "Private flight to AlUla, exploration of Hegra, and a luxury desert camp experience." },
          { day: "Day 4-5", title: "Jeddah: Red Sea Gateway", desc: "Historical tour of Al-Balad and a private yacht experience on the Red Sea." },
          { day: "Day 6-7", title: "Modern Vision & Departure", desc: "Visit to NEOM exhibition and seamless VIP airport departure." }
        ],
        latam: [
          { day: "Day 1", title: "Arrival & Colonial Charm", desc: "Welcome in Mexico City or Lima with a private chef's table experience." },
          { day: "Day 2-3", title: "Ancient Wonders", desc: "Guided exploration of Chichén Itzá or Machu Picchu with exclusive sunrise access." },
          { day: "Day 4-5", title: "Natural Immersion", desc: "Private expedition into the Amazon or the Sacred Valley of the Incas." },
          { day: "Day 6-7", title: "Cultural Pulse & Departure", desc: "Local artisan workshops and seamless VIP transfer to the airport." }
        ]
      },
      included: {
        subtitle: "Clarity",
        title: "What's Included",
        items: ["All 5-Star Accommodations", "Private Luxury Transportation", "Certified Multilingual Guides", "Internal Flights & Logistics", "Exclusive Entrance Fees", "24/7 Dedicated Concierge"]
      },
      pricing: {
        subtitle: "Investment",
        title: "Transparent B2B Pricing",
        luxury: { price: "From $4,500", label: "Per Person (Net)" },
        budget: { price: "From $2,200", label: "Per Person (Net)" }
      },
      addons: {
        subtitle: "Upsell",
        title: "Premium Add-ons",
        items: [
          { title: "Private Jet Charters", desc: "For ultimate speed and privacy between remote destinations." },
          { title: "VIP Meet & Greet", desc: "Fast-track through all customs and immigration checkpoints." },
          { title: "Exclusive Gala Dinners", desc: "In historic ruins or remote desert locations under the stars." }
        ]
      },
      blueprint: {
        subtitle: "Operational Excellence",
        title: "Our White-Label Promise",
        steps: [
          { title: "Consultation", desc: "We learn your brand's DNA and specific group needs to ensure perfect alignment." },
          { title: "Tailored Curation", desc: "We build an itinerary that feels impossible to replicate, exclusive to your brand." },
          { title: "Live Execution", desc: "Our operational team manages every second on-site, acting as your local office." },
          { title: "Impact Report", desc: "Post-trip feedback and success metrics for your brand's future growth." }
        ]
      },
      cta: {
        title: "Ready to scale your {destination} operations?",
        subtitle: "Let's build your next success story together. Our team is ready to draft your first custom proposal.",
        primary: "Request Custom Quote",
        secondary: "Download Unbranded PDF"
      }
    },
    legal: legalContent.en
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      destinations: "Destinos",
      experiences: "Experiencias",
      contact: "Contacto",
      join: "Únete"
    },
    hero: {
      title: "Encuentra Tu Camino",
      clients: "Clientes Satisfechos",
      tours: "Tours Organizados",
      incidents: "Incidentes",
      featured: "Destacado",
      featuredTitle: "Viaje a México de 14 días",
      featuredDesc: "Organizamos aventuras profesionales en los rincones más hermosos de LATAM."
    },
    destinations: {
      subtitle: "Popular",
      title: "Destinos Más Populares",
      from: "Desde",
      days: "Días",
      seeMore: "Ver más",
      items: [
        { title: "Arabia Saudita", location: "Arabia Saudita", duration: "14 Días" },
        { title: "México", location: "México", duration: "14 Días" },
        { title: "Guatemala & El Salvador", location: "Centroamérica", duration: "12 Días" },
        { title: "Perú & Ecuador", location: "Sudamérica", duration: "14 Días" }
      ]
    },
    destinationsPage: {
      title: "Nuestros Destinos",
      subtitle: "Explore nuestros destinos cuidadosamente seleccionados en todo el mundo, que ofrecen experiencias únicas y recuerdos inolvidables.",
      comingSoon: "Próximamente",
      comingSoonDesc: "Estamos constantemente expandiendo nuestros horizontes para brindarle experiencias más inolvidables. ¡Estén atentos a estos emocionantes nuevos destinos!"
    },
    experiencesPage: {
      title: "Nuestras Experiencias",
      subtitle: "Sumérjase en actividades y tours inolvidables diseñados para conectarlo con el corazón de cada destino."
    },
    discover: {
      subtitle: "Descubre",
      title: "Descubre el mundo a través de nuestros ojos",
      latam: "LATAM",
      saudi: "Arabia Saudita",
      book: "Manténganme informado"
    },
    about: {
      subtitle: "Sobre Nosotros",
      title: "Somos Albaways",
      p1: "Fundada con pasión por lo inexplorado, Albaways es una empresa saudí especializada en los majestuosos paisajes de Arabia Saudita y las vibrantes culturas de América Latina. Unimos mundos, ofreciendo acceso sin igual a joyas ocultas y lugares emblemáticos.",
      p2: "Al invertir en experiencia local y prácticas de viaje sostenibles, Albaways conecta a los viajeros con experiencias memorables. Ya sean las antiguas tumbas de Hegra o los imponentes picos de la Patagonia, nuestros viajes están diseñados para transformar tu perspectiva y dejar un impacto duradero.",
      partnerTitle: "Tu Mejor Socio Operativo en Arabia Saudita",
      partnerDesc: "En Albaways, nos especializamos en crear experiencias auténticas y ejecutar una logística impecable en cada rincón de Arabia Saudita.",
      servicesTitle: "Nuestros Servicios",
      services: [
        { title: "Experiencias Auténticas y Exclusivas", desc: "" },
        { title: "Alojamiento", desc: "Desde hoteles boutique hasta lujo de 5 estrellas." },
        { title: "Guías", desc: "Expertos locales con fluidez en español." },
        { title: "Transporte", desc: "Flota moderna (Sedanes, SUVs, Autobuses)." },
        { title: "Asistencia de Visado", desc: "" },
        { title: "Gestión de Billetes de Vuelo", desc: "" }
      ],
      partnerFooter: "Nos aseguramos de que cada detalle se maneje cuidadosamente, permitiéndote concentrarte en lo que más importa: el viaje.",
      readMore: "Leer Más"
    },
    aboutPage: {
      heroTitle: "Nuestra Historia",
      introSubtitle: "Quiénes Somos",
      introTitle: "Uniendo Culturas, Creando Experiencias",
      introText1: "Albaways es una empresa saudí, fundada por dos apasionados viajeros saudíes, Ibrahim Alzuwayid y Faisal Alotaibi, con un profundo amor por América Latina. Nos especializamos en conectar la rica herencia de Arabia Saudita con las vibrantes culturas de América Latina.",
      introText2: "Nuestra misión va más allá de los viajes: se trata de construir puentes culturales, ofrecer experiencias auténticas y abrir nuevos horizontes para la exploración y el entendimiento entre el mundo árabe y las culturas latinas.",
      missionSubtitle: "Nuestra Misión",
      missionTitle: "Transformando Perspectivas",
      missionText: "Proporcionar un acceso sin igual a joyas ocultas y lugares emblemáticos, asegurando que cada viaje sea sostenible, respetuoso con las comunidades locales y profundamente enriquecedor para nuestros viajeros.",
      valuesSubtitle: "Valores Fundamentales",
      valuesTitle: "Lo Que Nos Impulsa",
      values: [
        { title: "Excelencia", desc: "Nos esforzamos por la perfección en cada detalle de tu viaje." },
        { title: "Sostenibilidad", desc: "Protegiendo los entornos y culturas que visitamos." },
        { title: "Autenticidad", desc: "Ofreciendo experiencias genuinas que reflejan el verdadero espíritu de un destino." },
        { title: "Innovación", desc: "Buscando constantemente nuevas formas de mejorar la experiencia de viaje." }
      ]
    },
    experiences: {
      subtitle: "Experiencias",
      title: "Las mejores experiencias para ti",
      filterAll: "Todos",
      comingSoon: "Próximamente",
      mostPickedBadge: "Más Elegido",
      countries: {
        saudiArabia: "Arabia Saudita",
        mexico: "México",
        guatemala: "Guatemala",
        elSalvador: "El Salvador",
        peru: "Perú",
        ecuador: "Ecuador",
        colombia: "Colombia",
        argentina: "Argentina",
        brasil: "Brasil",
        chile: "Chile",
        cuba: "Cuba"
      },
      items: [
        { title: "Ciudad Antigua de Hegra", location: "AlUla, KSA", duration: "3 Días", country: "saudiArabia", active: true, mostPicked: true },
        { title: "El Fin del Mundo", location: "Riad, KSA", duration: "2 Días", country: "saudiArabia", active: true, mostPicked: true },
        { title: "Chichén Itzá", location: "México", duration: "2 Días", country: "mexico", active: true, mostPicked: true },
        { title: "Ruinas de Tikal", location: "Guatemala", duration: "3 Días", country: "guatemala", active: true, mostPicked: true },
        { title: "Machu Picchu", location: "Perú", duration: "5 Días", country: "peru", active: true, mostPicked: true },
        { title: "Islas Galápagos", location: "Ecuador", duration: "7 Días", country: "ecuador", active: true, mostPicked: true },
        { title: "Caminata al Volcán", location: "El Salvador", duration: "1 Día", country: "elSalvador", active: true, mostPicked: false },
        { title: "Colores de Cartagena", location: "Colombia", duration: "4 Días", country: "colombia", active: false, mostPicked: false },
        { title: "Trek en Patagonia", location: "Argentina", duration: "6 Días", country: "argentina", active: false, mostPicked: false },
        { title: "Selva Amazónica", location: "Brasil", duration: "5 Días", country: "brasil", active: false, mostPicked: false },
        { title: "Desierto de Atacama", location: "Chile", duration: "4 Días", country: "chile", active: false, mostPicked: false },
        { title: "Noches de La Habana", location: "Cuba", duration: "3 Días", country: "cuba", active: false, mostPicked: false }
      ]
    },
    reviews: {
      subtitle: "Reseñas",
      title: "Lo que dicen nuestros clientes",
      list: [
        {
          quote: "Era escéptico sobre México como viajero en grupo por primera vez, pero Albaways lo hizo sentir seguro, auténtico e increíblemente divertido. La atención al detalle fue 10/10. Repetiría este viaje exacto mañana.",
          name: "Nader",
          role: "Viajero | Arabia Saudita",
          stars: 5
        },
        {
          quote: "Realmente una experiencia excepcional. Se encargaron de todo el trabajo pesado para que pudiéramos disfrutar de la cultura. Profesionales, organizados y gente genuinamente genial para viajar.",
          name: "Talal",
          role: "Viajero | Arabia Saudita",
          stars: 5
        },
        {
          quote: "Lo mejor fue la falta de estrés. Para un viajero solitario acostumbrado a hacerlo todo yo mismo, fue un lujo que Albaways lo manejara todo tan perfectamente. ¡Esperando el próximo destino!",
          name: "Abdulrahman",
          role: "Viajero | Arabia Saudita",
          stars: 5
        },
        {
          quote: "Inolvidable. El itinerario fue una mezcla perfecta de joyas ocultas y lugares imperdibles. Albaways tiene un profundo conocimiento de LATAM que realmente se nota. ¡Muy recomendado!",
          name: "Ibrahim",
          role: "Viajero | Arabia Saudita",
          stars: 5
        },
        {
          quote: "Fui pensando que este sería mi único viaje en grupo y salí planeando el siguiente con ellos. Si quieres una experiencia perfecta en México, no busques más.",
          name: "Abdulaziz",
          role: "Viajero | Arabia Saudita",
          stars: 5
        },
        {
          quote: "Organización de primer nivel. Todo fue puntual y de alta calidad. Como alguien que valora su independencia, nunca me sentí restringido, solo bien cuidado.",
          name: "Omar",
          role: "Viajero | Arabia Saudita",
          stars: 5
        },
        {
          quote: "Vibras increíbles y una gestión aún mejor. Albaways sabe cómo cerrar la brecha entre las culturas saudí y latinoamericana perfectamente. Una experiencia verdaderamente de cinco estrellas.",
          name: "Mohsen",
          role: "Viajero | Arabia Saudita",
          stars: 5
        },
        {
          quote: "El viaje en grupo más organizado que he visto. Convirtieron a un grupo de viajeros solitarios en una comunidad leal. Eso dice todo lo que necesitas saber sobre su calidad.",
          name: "Nawaf",
          role: "Viajero | Arabia Saudita",
          stars: 5
        },
        {
          quote: "Nuestro circuito de 14 días por el Reino fue una clase magistral de inmersión local. Desde las joyas ocultas en el desierto hasta la hospitalidad del equipo, vimos la verdadera Arabia Saudita. Simplemente auténtico.",
          name: "Olga",
          role: "Viajera | México",
          stars: 5
        },
        {
          quote: "Los tours de un día por Riad fueron fascinantes, pero el picnic 'Kashtah' fue lo mejor. Albaways aporta un nivel de profesionalismo y buenos modales que te hace sentir bienvenido desde el primer día.",
          name: "Maria",
          role: "Viajera | España",
          stars: 5
        },
        {
          quote: "Edge of the World fue impresionante, pero fue la puntualidad y las opciones de comida lo que más me impresionó. Conocen todos los mejores lugares locales que no encontrarás en las guías.",
          name: "Laura",
          role: "Viajera | Colombia",
          stars: 5
        },
        {
          quote: "He viajado por todo el mundo y el profesionalismo aquí es de clase mundial. El safari por las dunas rojas fue emocionante y el picnic tradicional saudí fue un hermoso toque de cultura.",
          name: "Richard",
          role: "Viajero | Argentina",
          stars: 5
        },
        {
          quote: "Albaways no solo te muestra lugares; te sumerge profundamente en la vida saudí. El paseo en camello y cuatrimoto fue genial, pero las conversaciones auténticas fueron la mejor parte.",
          name: "Facundo",
          role: "Viajero | Uruguay",
          stars: 5
        },
        {
          quote: "Todo estuvo perfectamente cronometrado. La puntualidad es claramente una prioridad para ellos. Hicimos el tour de Riad y las dunas, y cada detalle fue manejado con gran comportamiento y respeto.",
          name: "Sandra",
          role: "Viajera | España",
          stars: 5
        },
        {
          quote: "El viaje de 14 días fue la mejor decisión que tomamos. Vimos cosas que nunca podríamos haber encontrado por nuestra cuenta. Personal auténtico, profesional y muy bien educado.",
          name: "Rafael",
          role: "Viajero | Perú",
          stars: 5
        },
        {
          quote: "Si quieres ver el verdadero corazón del Reino, ve con Albaways. Sus joyas ocultas y opciones de comida fueron increíbles. Realmente son expertos en hospitalidad saudí.",
          name: "Carmen",
          role: "Viajera | Chile",
          stars: 5
        },
        {
          quote: "¡El safari por las dunas rojas fue genial! Más allá de la aventura, el profesionalismo del equipo y la calidad del 'Kashtah' lo hicieron sentir como una experiencia premium.",
          name: "Viviana",
          role: "Viajera | Ecuador",
          stars: 5
        },
        {
          quote: "Manejado por expertos. Desde Riad hasta el desierto profundo, nos sentimos seguros y sumergidos en la cultura. La puntualidad y los modales de nuestros guías fueron excepcionales.",
          name: "Silvia",
          role: "Viajera | España",
          stars: 5
        },
        {
          quote: "Un viaje inolvidable. El nivel de inmersión local que brindan es raro. Nos llevaron a los mejores lugares de comida en Riad y nos mostraron el verdadero alma del país.",
          name: "Lani",
          role: "Viajera | Costa Rica",
          stars: 5
        },
        {
          quote: "Un circuito perfecto por el Reino. Cada día era un nuevo descubrimiento. El equipo es profesional, educado y claramente apasionado por su herencia.",
          name: "Rita",
          role: "Viajera | Panamá",
          stars: 5
        },
        {
          quote: "Riad y Edge of the World fueron impresionantes. Albaways hizo que la logística fuera invisible para que pudiéramos disfrutar de la magia de las dunas y los caballos. Servicio excepcional.",
          name: "Francois",
          role: "Viajero | Francia",
          stars: 5
        }
      ]
    },
    clients: {
      subtitle: "Confianza",
      title: "Hemos trabajado con"
    },
    partners: {
      subtitle: "Red",
      title: "Nuestros Socios"
    },
    gallery: {
      subtitle: "Recuerdos",
      title: "Viajes Pasados y Experiencias"
    },
    contact: {
      subtitle: "Ponte en Contacto",
      title: "Contáctanos",
      name: "Tu Nombre",
      email: "Tu Correo",
      message: "Tu Mensaje",
      send: "Enviar Mensaje"
    },
    contactPage: {
      heroTitle: "Contáctanos",
      infoSubtitle: "Comunícate",
      infoTitle: "Nos Encantaría Escucharte",
      infoText: "Ya sea que tengas una pregunta sobre nuestros tours, necesites ayuda con tu reserva o simplemente quieras compartir tus sueños de viaje, nuestro equipo está listo para ayudarte.",
      addressTitle: "Nuestra Oficina",
      address: "Riad, Arabia Saudita",
      emailTitle: "Envíanos un Correo",
      email: "contact@albaways.com",
      phoneTitle: "Llámanos",
      phone: "+966 5757 2 5151 / +966 5912 5 1151"
    },
    footer: {
      desc: "Albaways conecta a millones de viajeros con experiencias memorables en Arabia Saudita y LATAM.",
      services: "Servicios",
      servicesList: ["Crear Experiencias", "Alojamiento", "Guías Turísticos y Líderes de Tour Profesionales Multilingües", "Transporte", "Asistencia con Visas y Boletos de Vuelo"],
      company: "Empresa",
      companyList: ["Sobre Nosotros", "Contacto"],
      quickLinks: "Enlaces Rápidos",
      rights: "Albaways. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos y condiciones",
      liability: "Acuerdo de exención de responsabilidad"
    },
    proposal: {
      hero: {
        subtitle: "Propuesta B2B Exclusiva",
        title: "Tu Excelencia Operativa en {destination}",
        cta: "Solicitar Borrador Personalizado"
      },
      justify: {
        name: "{destination}",
        subtitle: "¿Por qué {destination}?",
        title: "Una Oportunidad Estratégica",
        saudi: {
          name: "Arabia Saudita",
          items: [
            { title: "La Nueva Frontera", desc: "Arabia Saudita es el destino turístico de más rápido crecimiento en el mundo, ofreciendo una ventaja competitiva única para su marca." },
            { title: "Patrimonio Intacto", desc: "Acceso a sitios de la UNESCO como Hegra y la histórica Diriyah antes de que lleguen las multitudes globales." },
            { title: "Infraestructura de Lujo", desc: "Resorts de clase mundial como Habitas AlUla y el proyecto The Red Sea brindan una experiencia de lujo perfecta." }
          ]
        },
        latam: {
          name: "América Latina",
          items: [
            { title: "Profundidad Cultural", desc: "Tradiciones vibrantes y civilizaciones antiguas en México, Perú y Guatemala que resuenan con los viajeros globales." },
            { title: "Paisajes Diversos", desc: "Desde los lagos de cristal azul en México hasta las selvas amazónicas de Ecuador." },
            { title: "Alto Valor", desc: "Experiencias premium a costos operativos competitivos, maximizando los márgenes de su agencia." }
          ]
        }
      },
      trust: {
        subtitle: "Credibilidad",
        title: "Por qué los socios confían en Albaways",
        stats: [
          { label: "Soporte en el Terreno", value: "24/7" },
          { label: "Expertos Locales", value: "100+" },
          { label: "Tasa de Éxito", value: "99%" }
        ]
      },
      marketFit: {
        subtitle: "Rentabilidad",
        title: "Ajuste al Mercado Objetivo",
        segments: [
          { title: "Incentivos Corporativos", desc: "Recompensas de alta gama para los mejores empleados, con cenas de gala exclusivas y team-building en lugares remotos." },
          { title: "Ocio de Lujo", desc: "Viajes a medida para personas de alto patrimonio que exigen privacidad, exclusividad y autenticidad local." },
          { title: "Interés Especial", desc: "Grupos enfocados en fotografía, historia o aventura que buscan una inmersión profunda y guía experta." }
        ]
      },
      itinerary: {
        subtitle: "El Viaje",
        title: "Experiencia de Muestra de 7 Días",
        saudi: [
          { day: "Día 1", title: "Riad: El Pulso Moderno", desc: "Llegada, traslado privado a un hotel de 5 estrellas y cena de bienvenida en el Fin del Mundo." },
          { day: "Día 2-3", title: "AlUla: Museo Vivo", desc: "Vuelo privado a AlUla, exploración de Hegra y experiencia en un campamento de lujo en el desierto." },
          { day: "Día 4-5", title: "Yeda: Puerta al Mar Rojo", desc: "Tour histórico de Al-Balad y experiencia en yate privado en el Mar Rojo." },
          { day: "Día 6-7", title: "Visión Moderna y Salida", desc: "Visita a la exhibición NEOM y salida VIP sin contratiempos del aeropuerto." }
        ],
        latam: [
          { day: "Día 1", title: "Llegada y Encanto Colonial", desc: "Bienvenida en Ciudad de México o Lima con una experiencia privada de mesa del chef." },
          { day: "Día 2-3", title: "Maravillas Antiguas", desc: "Exploración guiada de Chichén Itzá o Machu Picchu con acceso exclusivo al amanecer." },
          { day: "Día 4-5", title: "Inmersión Natural", desc: "Expedición privada a la Amazonía o al Valle Sagrado de los Incas." },
          { day: "Día 6-7", title: "Pulso Cultural y Salida", desc: "Talleres de artesanos locales y traslado VIP sin contratiempos al aeropuerto." }
        ]
      },
      included: {
        subtitle: "Claridad",
        title: "Qué está Incluido",
        items: ["Todos los Alojamientos de 5 Estrellas", "Transporte de Lujo Privado", "Guías Multilingües Certificados", "Vuelos Internos y Logística", "Entradas Exclusivas", "Conserjería Dedicada 24/7"]
      },
      pricing: {
        subtitle: "Inversión",
        title: "Precios B2B Transparentes",
        luxury: { price: "Desde $4,500", label: "Por Persona (Neto)" },
        budget: { price: "Desde $2,200", label: "Por Persona (Neto)" }
      },
      addons: {
        subtitle: "Venta Adicional",
        title: "Complementos Premium",
        items: [
          { title: "Vuelos Privados", desc: "Para máxima velocidad y privacidad entre destinos remotos." },
          { title: "VIP Meet & Greet", desc: "Vía rápida en todos los aeropuertos." },
          { title: "Cenas de Gala Exclusivas", desc: "En ubicaciones históricas o remotas en el desierto bajo las estrellas." }
        ]
      },
      blueprint: {
        subtitle: "Excelencia Operativa",
        title: "Nuestra Promesa de Marca Blanca",
        steps: [
          { title: "Consulta", desc: "Aprendemos el ADN de su marca y las necesidades específicas del grupo para asegurar una alineación perfecta." },
          { title: "Curaduría a Medida", desc: "Construimos un itinerario que parece imposible de replicar, exclusivo para su marca." },
          { title: "Ejecución en Vivo", desc: "Nuestro equipo operativo gestiona cada segundo en el sitio, actuando como su oficina local." },
          { title: "Informe de Impacto", desc: "Comentarios posteriores al viaje y métricas de éxito para el crecimiento futuro de su marca." }
        ]
      },
      cta: {
        title: "¿Listo para escalar sus operaciones en {destination}?",
        subtitle: "Construyamos juntos su próxima historia de éxito. Nuestro equipo está listo para redactar su primera propuesta personalizada.",
        primary: "Solicitar Cotización Personalizada",
        secondary: "Descargar PDF sin Marca"
      }
    },
    legal: legalContent.es
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      destinations: "الوجهات",
      experiences: "تجارب",
      contact: "اتصل بنا",
      join: "انضم كمسافر"
    },
    hero: {
      title: "اكتشف مسارك",
      clients: "عملاء راضون",
      tours: "جولات منظمة",
      incidents: "حوادث",
      featured: "مميز",
      featuredTitle: "رحلة المكسيك لمدة 14 يوماً",
      featuredDesc: "ننظم مغامرات احترافية في أجمل زوايا أمريكا اللاتينية."
    },
    destinations: {
      subtitle: "شائع",
      title: "الوجهات الأكثر شعبية",
      from: "يبدأ من",
      days: "أيام",
      seeMore: "عرض المزيد",
      items: [
        { title: "المملكة العربية السعودية", location: "السعودية", duration: "14 يوم" },
        { title: "المكسيك", location: "المكسيك", duration: "14 يوم" },
        { title: "غواتيمالا & السلفادور", location: "أمريكا الوسطى", duration: "12 يوم" },
        { title: "بيرو & الإكوادور", location: "أمريكا الجنوبية", duration: "14 يوم" }
      ]
    },
    destinationsPage: {
      title: "وجهاتنا",
      subtitle: "استكشف وجهاتنا المختارة بعناية في جميع أنحاء العالم، والتي تقدم تجارب فريدة وذكريات لا تُنسى.",
      comingSoon: "قريباً",
      comingSoonDesc: "نحن نوسع آفاقنا باستمرار لنجلب لك المزيد من التجارب التي لا تُنسى. ترقبوا هذه الوجهات الجديدة المثيرة!"
    },
    experiencesPage: {
      title: "تجاربنا",
      subtitle: "انغمس في أنشطة وجولات لا تُنسى مصممة لربطك بقلب كل وجهة."
    },
    discover: {
      subtitle: "اكتشف",
      title: "اكتشف العالم من خلال عيوننا",
      latam: "أمريكا اللاتينية",
      saudi: "السعودية",
      book: "ابقني على اطلاع"
    },
    about: {
      subtitle: "من نحن",
      title: "نحن ألبويز",
      p1: "تأسست ألبويز بشغف لاكتشاف المجهول، وهي شركة سعودية متخصصة في المناظر الطبيعية الخلابة في المملكة العربية السعودية والثقافات النابضة بالحياة في أمريكا اللاتينية. نحن نربط بين العوالم، ونوفر وصولاً لا مثيل له إلى الجواهر الخفية والمعالم الشهيرة على حد سواء.",
      p2: "من خلال الاستثمار في الخبرات المحلية وممارسات السفر المستدامة، تربط ألبويز المسافرين بتجارب لا تُنسى. سواء كانت مقابر الحجر القديمة أو قمم باتاغونيا الشاهقة، فقد تم تصميم رحلاتنا لتغيير منظورك وترك أثر دائم.",
      partnerTitle: "شريكك التشغيلي الأفضل في المملكة العربية السعودية",
      partnerDesc: "في ألبويز، نحن متخصصون في صياغة تجارب أصيلة وتنفيذ لوجستيات سلسة في كل ركن من أركان المملكة العربية السعودية.",
      servicesTitle: "خدماتنا",
      services: [
        { title: "تجارب أصيلة وحصرية", desc: "" },
        { title: "الإقامة", desc: "من الفنادق البوتيك إلى الفخامة ذات الـ 5 نجوم." },
        { title: "المرشدون", desc: "خبراء محليون يتقنون اللغة الإسبانية." },
        { title: "النقل", desc: "أسطول حديث (سيارات سيدان، سيارات الدفع الرباعي، حافلات)." },
        { title: "المساعدة في التأشيرة", desc: "" },
        { title: "إدارة تذاكر الطيران", desc: "" }
      ],
      partnerFooter: "نحن نضمن التعامل مع كل التفاصيل بعناية، مما يتيح لك التركيز على ما يهم أكثر - الرحلة.",
      readMore: "اقرأ المزيد"
    },
    aboutPage: {
      heroTitle: "قصتنا",
      introSubtitle: "من نحن",
      introTitle: "نربط الثقافات، ونصنع التجارب",
      introText1: "ألبويز هي شركة سعودية، أسسها مسافران سعوديان شغوفان، إبراهيم الزويد وفيصل العتيبي، يجمعهما حب أمريكا اللاتينية. نحن متخصصون في ربط التراث الغني للمملكة العربية السعودية بالثقافات النابضة بالحياة في أمريكا اللاتينية.",
      introText2: "مهمتنا تتجاوز مجرد السفر - إنها تتعلق ببناء جسور ثقافية، وتقديم تجارب أصيلة، وفتح آفاق جديدة للاستكشاف والتفاهم بين العالم العربي والثقافات اللاتينية.",
      missionSubtitle: "مهمتنا",
      missionTitle: "تغيير وجهات النظر",
      missionText: "توفير وصول لا مثيل له إلى الجواهر الخفية والمعالم الشهيرة، مع ضمان أن تكون كل رحلة مستدامة، وتحترم المجتمعات المحلية، وتثري مسافرينا بعمق.",
      valuesSubtitle: "القيم الأساسية",
      valuesTitle: "ما يحركنا",
      values: [
        { title: "التميز", desc: "نسعى جاهدين للكمال في كل تفاصيل رحلتك." },
        { title: "الاستدامة", desc: "حماية البيئات والثقافات التي نزورها." },
        { title: "الأصالة", desc: "تقديم تجارب حقيقية تعكس الروح الحقيقية للوجهة." },
        { title: "الابتكار", desc: "البحث المستمر عن طرق جديدة لتعزيز تجربة السفر." }
      ]
    },
    experiences: {
      subtitle: "تجارب",
      title: "أفضل التجارب لك",
      filterAll: "الكل",
      comingSoon: "قريباً",
      mostPickedBadge: "الأكثر اختياراً",
      countries: {
        saudiArabia: "السعودية",
        mexico: "المكسيك",
        guatemala: "غواتيمالا",
        elSalvador: "السلفادور",
        peru: "بيرو",
        ecuador: "الإكوادور",
        colombia: "كولومبيا",
        argentina: "الأرجنتين",
        brasil: "البرازيل",
        chile: "تشيلي",
        cuba: "كوبا"
      },
      items: [
        { title: "مدينة الحجر القديمة", location: "العلا، السعودية", duration: "3 أيام", country: "saudiArabia", active: true, mostPicked: true },
        { title: "حافة العالم", location: "الرياض، السعودية", duration: "يومان", country: "saudiArabia", active: true, mostPicked: true },
        { title: "تشيتشن إيتزا", location: "المكسيك", duration: "يومان", country: "mexico", active: true, mostPicked: true },
        { title: "أطلال تيكال", location: "غواتيمالا", duration: "3 أيام", country: "guatemala", active: true, mostPicked: true },
        { title: "ماتشو بيتشو", location: "بيرو", duration: "5 أيام", country: "peru", active: true, mostPicked: true },
        { title: "جزر غالاباغوس", location: "الإكوادور", duration: "7 أيام", country: "ecuador", active: true, mostPicked: true },
        { title: "تسلق البركان", location: "السلفادور", duration: "يوم واحد", country: "elSalvador", active: true, mostPicked: false },
        { title: "ألوان قرطاجنة", location: "كولومبيا", duration: "4 أيام", country: "colombia", active: false, mostPicked: false },
        { title: "رحلة باتاغونيا", location: "الأرجنتين", duration: "6 أيام", country: "argentina", active: false, mostPicked: false },
        { title: "غابات الأمازون", location: "البرازيل", duration: "5 أيام", country: "brasil", active: false, mostPicked: false },
        { title: "صحراء أتاكاما", location: "تشيلي", duration: "4 أيام", country: "chile", active: false, mostPicked: false },
        { title: "ليالي هافانا", location: "كوبا", duration: "3 أيام", country: "cuba", active: false, mostPicked: false }
      ]
    },
    reviews: {
      subtitle: "التقييمات",
      title: "ماذا يقول عملاؤنا",
      list: [
        {
          quote: "كنت متشككًا بشأن المكسيك كمسافر لأول مرة في مجموعة، لكن ألبويز جعلتني أشعر بالأمان والأصالة والمتعة الكبيرة. الاهتمام بالتفاصيل كان 10/10. سأكرر هذه الرحلة غدًا.",
          name: "نادر",
          role: "مسافر | المملكة العربية السعودية",
          stars: 5
        },
        {
          quote: "تجربة استثنائية حقًا. لقد اهتموا بكل الأمور الصعبة حتى نتمكن من الاستمتاع بالثقافة. فريق محترف ومنظم وأشخاص رائعون حقًا للسفر معهم.",
          name: "طلال",
          role: "مسافر | المملكة العربية السعودية",
          stars: 5
        },
        {
          quote: "أفضل جزء كان غياب التوتر. بالنسبة لمسافر منفرد اعتاد على القيام بكل شيء بنفسه، كان من الفخامة أن تتولى ألبويز كل شيء بشكل مثالي. أتطلع للوجهة القادمة!",
          name: "عبدالرحمن",
          role: "مسافر | المملكة العربية السعودية",
          stars: 5
        },
        {
          quote: "لا تُنسى. كان خط الرحلة مزيجًا مثاليًا من الجواهر الخفية والأماكن التي يجب رؤيتها. ألبويز لديها معرفة عميقة بأمريكا اللاتينية تظهر بوضوح. موصى به بشدة!",
          name: "إبراهيم",
          role: "مسافر | المملكة العربية السعودية",
          stars: 5
        },
        {
          quote: "ذهبت وأنا أعتقد أن هذه ستكون رحلتي الوحيدة مع مجموعة، وخرجت وأنا أخطط لرحلتي القادمة معهم. إذا كنت تريد تجربة سلسة في المكسيك، فلا تبحث أكثر.",
          name: "عبدالعزيز",
          role: "مسافر | المملكة العربية السعودية",
          stars: 5
        },
        {
          quote: "تنظيم من الدرجة الأولى. كل شيء كان في الموعد وبجودة عالية. كشخص يقدر استقلاليته، لم أشعر أبدًا بالتقييد، بل بالرعاية الجيدة.",
          name: "عمر",
          role: "مسافر | المملكة العربية السعودية",
          stars: 5
        },
        {
          quote: "أجواء رائعة وإدارة أفضل. ألبويز تعرف كيف تجسر الفجوة بين الثقافتين السعودية واللاتينية بشكل مثالي. تجربة خمس نجوم حقًا.",
          name: "محسن",
          role: "مسافر | المملكة العربية السعودية",
          stars: 5
        },
        {
          quote: "أكثر رحلة جماعية منظمة رأيتها على الإطلاق. لقد حولوا مجموعة من المسافرين المنفردين إلى مجتمع مخلص. هذا يقول كل شيء عن جودتهم.",
          name: "نواف",
          role: "مسافر | المملكة العربية السعودية",
          stars: 5
        },
        {
          quote: "كانت جولتنا التي استمرت 14 يومًا حول المملكة درساً في الانغماس المحلي. من الجواهر الخفية في الصحراء إلى ضيافة الفريق، رأينا السعودية الحقيقية. أصالة ببساطة.",
          name: "أولغا",
          role: "مسافرة | المكسيك",
          stars: 5
        },
        {
          quote: "كانت جولات الرياض اليومية رائعة، لكن نزهة 'كشتة' كانت الأبرز. ألبويز تقدم مستوى من الاحترافية وحسن التعامل يجعلك تشعر بالترحيب من اليوم الأول.",
          name: "ماريا",
          role: "مسافرة | إسبانيا",
          stars: 5
        },
        {
          quote: "كانت حافة العالم مذهلة، لكن الالتزام بالمواعيد وخيارات الطعام هي التي أبهرتني أكثر. إنهم يعرفون أفضل الأماكن المحلية التي لن تجدها في كتب الإرشاد.",
          name: "لورا",
          role: "مسافرة | كولومبيا",
          stars: 5
        },
        {
          quote: "لقد سافرت عالميًا، والاحترافية هنا عالمية المستوى. كان سفاري الكثبان الحمراء مثيرًا، وكانت النزهة السعودية التقليدية لمسة ثقافية جميلة.",
          name: "ريتشارد",
          role: "مسافر | الأرجنتين",
          stars: 5
        },
        {
          quote: "ألبويز لا تكتفي بعرض المعالم السياحية؛ بل تمنحك غوصًا عميقًا في الحياة السعودية. ركوب الجمال والدبابات كان رائعًا، لكن المحادثات الحقيقية كانت الجزء الأفضل.",
          name: "فاكوندو",
          role: "مسافر | أوروغواي",
          stars: 5
        },
        {
          quote: "كل شيء كان في وقته تمامًا. الالتزام بالمواعيد أولوية واضحة لديهم. قمنا بجولة الرياض والكثبان، وتم التعامل مع كل تفصيل بسلوك رائع واحترام.",
          name: "ساندرا",
          role: "مسافرة | إسبانيا",
          stars: 5
        },
        {
          quote: "كانت رحلة الـ 14 يومًا أفضل قرار اتخذناه. رأينا أشياء لم نكن لنجدها بمفردنا أبدًا. طاقم عمل أصيل ومحترف ومهذب للغاية.",
          name: "رافائيل",
          role: "مسافر | بيرو",
          stars: 5
        },
        {
          quote: "إذا كنت تريد رؤية القلب الحقيقي للمملكة، فاذهب مع ألبويز. كانت جواهرهم الخفية وخيارات الطعام مذهلة. إنهم حقًا خبراء في الضيافة السعودية.",
          name: "كارمن",
          role: "مسافرة | تشيلي",
          stars: 5
        },
        {
          quote: "كان سفاري الكثبان الحمراء رائعًا! بعيدًا عن المغامرة، جعل احتراف الفريق وجودة 'الكشتة' التجربة تبدو وكأنها تجربة متميزة.",
          name: "فيفيانا",
          role: "مسافرة | الإكوادور",
          stars: 5
        },
        {
          quote: "تم التعامل مع كل شيء بخبرة. من الرياض إلى أعماق الصحراء، شعرنا بالأمان والانغماس في الثقافة. كان الالتزام بالمواعيد وأخلاق مرشدينا استثنائية.",
          name: "سيلفيا",
          role: "مسافرة | إسبانيا",
          stars: 5
        },
        {
          quote: "رحلة لا تُنسى. مستوى الانغماس المحلي الذي يقدمونه نادر. أخذونا إلى أفضل أماكن الطعام في الرياض وأظهروا لنا الروح الحقيقية للبلاد.",
          name: "لاني",
          role: "مسافرة | كوستاريكا",
          stars: 5
        },
        {
          quote: "جولة مثالية في المملكة. كان كل يوم اكتشافًا جديدًا. الفريق محترف ومهذب ومن الواضح أنهم شغوفون بتراثهم.",
          name: "ريتا",
          role: "مسافرة | بنما",
          stars: 5
        },
        {
          quote: "كانت الرياض وحافة العالم مذهلة. جعلت ألبويز الخدمات اللوجستية غير مرئية حتى نتمكن من الاستمتاع بسحر الكثبان والخيول. خدمة استثنائية.",
          name: "فرانسوا",
          role: "مسافر | فرنسا",
          stars: 5
        }
      ]
    },
    clients: {
      subtitle: "ثقة",
      title: "عملنا مع"
    },
    partners: {
      subtitle: "شبكتنا",
      title: "شركاؤنا"
    },
    gallery: {
      subtitle: "ذكريات",
      title: "رحلات سابقة وتجارب"
    },
    contact: {
      subtitle: "تواصل معنا",
      title: "اتصل بنا",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "رسالتك",
      send: "إرسال الرسالة"
    },
    contactPage: {
      heroTitle: "اتصل بنا",
      infoSubtitle: "تواصل معنا",
      infoTitle: "يسعدنا أن نسمع منك",
      infoText: "سواء كان لديك سؤال حول جولاتنا، أو تحتاج إلى مساعدة في الحجز، أو ترغب فقط في مشاركة أحلام سفرك، فإن فريقنا مستعد للمساعدة.",
      addressTitle: "مكتبنا",
      address: "الرياض، المملكة العربية السعودية",
      emailTitle: "راسلنا",
      email: "contact@albaways.com",
      phoneTitle: "اتصل بنا",
      phone: "+966 5757 2 5151 / +966 5912 5 1151"
    },
    footer: {
      desc: "تربط ألبويز بسلاسة ملايين المسافرين بتجارب لا تُنسى في المملكة العربية السعودية وأمريكا اللاتينية.",
      services: "الخدمات",
      servicesList: ["تصميم التجارب", "الإقامة", "مرشدون سياحيون وقادة جولات محترفون متعددو اللغات", "المواصلات", "المساعدة في استخراج التأشيرات وتذاكر الطيران"],
      company: "الشركة",
      companyList: ["من نحن", "اتصل بنا"],
      quickLinks: "روابط سريعة",
      rights: "ألبويز. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      liability: "اتفاقية إخلاء المسؤولية"
    },
    proposal: {
      hero: {
        subtitle: "عرض حصري للشركات (B2B)",
        title: "تميزك التشغيلي في {destination}",
        cta: "اطلب مسودة مخصصة"
      },
      justify: {
        name: "{destination}",
        subtitle: "لماذا {destination}؟",
        title: "فرصة استراتيجية",
        saudi: {
          name: "المملكة العربية السعودية",
          items: [
            { title: "الحدود الجديدة", desc: "المملكة العربية السعودية هي الوجهة السياحية الأسرع نمواً في العالم، مما يوفر ميزة تنافسية فريدة لعلامتك التجارية." },
            { title: "تراث لم يمس", desc: "الوصول إلى مواقع اليونسكو مثل الحجر والدرعية التاريخية قبل وصول الحشود العالمية." },
            { title: "بنية تحتية فاخرة", desc: "منتجعات عالمية المستوى مثل هابيتاس العلا ومشروع البحر الأحمر توفر تجربة فاخرة سلسة." }
          ]
        },
        latam: {
          name: "أمريكا اللاتينية",
          items: [
            { title: "عمق ثقافي", desc: "تقاليد نابضة بالحياة وحضارات قديمة في المكسيك وبيرو وغواتيمالا تلقى صدى لدى المسافرين العالميين." },
            { title: "مناظر طبيعية متنوعة", desc: "من بحيرات الكريستال الزرقاء في المكسيك إلى غابات الأمازون في الإكوادور." },
            { title: "قيمة عالية", desc: "تجارب متميزة بتكاليف تشغيلية تنافسية، مما يعظم هوامش ربح وكالتك." }
          ]
        }
      },
      trust: {
        subtitle: "المصداقية",
        title: "لماذا يثق الشركاء في ألبويز",
        stats: [
          { label: "دعم ميداني", value: "24/7" },
          { label: "خبراء محليون", value: "100+" },
          { label: "معدل النجاح", value: "99%" }
        ]
      },
      marketFit: {
        subtitle: "الربحية",
        title: "ملاءمة السوق المستهدف",
        segments: [
          { title: "الحوافز المؤسسية", desc: "مكافآت راقية لأفضل الموظفين أداءً، تتميز بعشاء غالا حصري وبناء فرق في مواقع نائية." },
          { title: "الترفيه الفاخر", desc: "رحلات مفصلة للأفراد ذوي الملاءة المالية العالية الذين يطلبون الخصوصية والتميز والأصالة المحلية." },
          { title: "اهتمامات خاصة", desc: "مجموعات تركز على التصوير الفوتوغرافي أو التاريخ أو المغامرة تبحث عن انغماس عميق وتوجيه خبير." }
        ]
      },
      itinerary: {
        subtitle: "الرحلة",
        title: "نموذج تجربة لمدة 7 أيام",
        saudi: [
          { day: "اليوم 1", title: "الرياض: النبض الحديث", desc: "الوصول، نقل خاص إلى فندق 5 نجوم، وعشاء ترحيبي في حافة العالم." },
          { day: "اليوم 2-3", title: "العلا: متحف حي", desc: "رحلة خاصة إلى العلا، استكشاف الحجر، وتجربة مخيم صحراوي فاخر." },
          { day: "اليوم 4-5", title: "جدة: بوابة البحر الأحمر", desc: "جولة تاريخية في البلد وتجربة يخت خاص في البحر الأحمر." },
          { day: "اليوم 6-7", title: "الرؤية الحديثة والمغادرة", desc: "زيارة معرض نيوم ومغادرة VIP سلسة من المطار." }
        ],
        latam: [
          { day: "اليوم 1", title: "الوصول والسحر الاستعماري", desc: "ترحيب في مدينة المكسيك أو ليما مع تجربة طاولة الشيف الخاصة." },
          { day: "اليوم 2-3", title: "عجائب قديمة", desc: "استكشاف موجه لتشيتشن إيتزا أو ماتشو بيتشو مع وصول حصري عند شروق الشمس." },
          { day: "اليوم 4-5", title: "انغماس طبيعي", desc: "رحلة استكشافية خاصة في الأمازون أو الوادي المقدس للإنكا." },
          { day: "اليوم 6-7", title: "النبض الثقافي والمغادرة", desc: "ورش عمل للحرفيين المحليين ونقل VIP سلس إلى المطار." }
        ]
      },
      included: {
        subtitle: "الوضوح",
        title: "ماذا يشمل العرض",
        items: ["جميع أماكن الإقامة 5 نجوم", "نقل فاخر خاص", "مرشدون معتمدون متعددو اللغات", "رحلات داخلية ولوجستيات", "رسوم دخول حصرية", "خدمة كونسيرج مخصصة 24/7"]
      },
      pricing: {
        subtitle: "الاستثمار",
        title: "أسعار B2B شفافة",
        luxury: { price: "تبدأ من 4,500 دولار", label: "للشخص الواحد (صافي)" },
        budget: { price: "تبدأ من 2,200 دولار", label: "للشخص الواحد (صافي)" }
      },
      addons: {
        subtitle: "خدمات إضافية",
        title: "إضافات متميزة",
        items: [
          { title: "طائرات خاصة", desc: "لأقصى قدر من السرعة والخصوصية بين الوجهات النائية." },
          { title: "استقبال VIP", desc: "مسار سريع في جميع نقاط التفتيش الجمركي والهجرة." },
          { title: "عشاء غالا حصري", desc: "في أطلال تاريخية أو مواقع صحراوية نائية تحت النجوم." }
        ]
      },
      blueprint: {
        subtitle: "التميز التشغيلي",
        title: "وعدنا للعلامة البيضاء",
        steps: [
          { title: "الاستشارة", desc: "نتعرف على هوية علامتك التجارية واحتياجات المجموعة المحددة لضمان التوافق التام." },
          { title: "تنسيق مخصص", desc: "نبني مسار رحلة يبدو من المستحيل تكراره، حصري لعلامتك التجارية." },
          { title: "التنفيذ المباشر", desc: "يدير فريقنا التشغيلي كل ثانية في الموقع، ليعمل كمكتبك المحلي." },
          { title: "تقرير الأثر", desc: "ملاحظات ما بعد الرحلة ومقاييس النجاح لنمو علامتك التجارية في المستقبل." }
        ]
      },
      cta: {
        title: "هل أنت مستعد لتوسيع عملياتك في {destination}؟",
        subtitle: "لنصنع قصة نجاحك القادمة معاً. فريقنا مستعد لصياغة أول عرض مخصص لك.",
        primary: "اطلب عرض سعر مخصص",
        secondary: "تحميل ملف PDF بدون علامة تجارية"
      }
    },
    legal: legalContent.ar
  }
};
