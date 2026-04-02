export type Region = 'Saudi Arabia' | 'LATAM';

export interface Destination {
  name: string;
  brief: string;
  image: string;
}

export interface Country {
  name: string;
  destinations: Destination[];
}

export interface RegionData {
  region: Region;
  countries: Country[];
}

export const destinationsData: RegionData[] = [
  {
    region: 'Saudi Arabia',
    countries: [
      {
        name: 'Saudi Arabia',
        destinations: [
          { name: 'Riyadh', brief: 'The vibrant capital city blending modern skyscrapers with historic roots.', image: 'https://images.unsplash.com/photo-1733896502795-4bd9f55abe4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Jeddah', brief: 'A bustling port city on the Red Sea, known for its historic Al-Balad district.', image: 'https://images.unsplash.com/photo-1727047841484-5c828ae14d5c?q=80&w=687&auto=format&fit=crop' },
          { name: 'AlUla', brief: 'An ancient oasis city featuring stunning rock formations and archaeological sites.', image: 'https://images.unsplash.com/photo-1742218410244-6eb97a4a6229?q=80&w=764&auto=format&fit=crop' },
          { name: 'Diriyah', brief: 'The birthplace of the first Saudi state, rich in mud-brick architecture.', image: 'https://plus.unsplash.com/premium_photo-1697729498632-c45b1f66b571?q=80&w=1170&auto=format&fit=crop' },
          { name: 'Abha', brief: 'A mountainous city known for its mild climate and traditional Asiri architecture.', image: 'https://plus.unsplash.com/premium_photo-1720520082386-e3502432ca83?q=80&w=1170&auto=format&fit=crop' },
          { name: 'Taif', brief: 'The city of roses, famous for its fragrant flower farms and cool mountain air.', image: 'https://images.unsplash.com/photo-1708991872571-c5f7db8ea2da?q=80&w=1170&auto=format&fit=crop' },
          { name: 'Makkah', brief: 'The holiest city in Islam, home to the Kaaba and the Grand Mosque.', image: 'https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?q=80&w=765&auto=format&fit=crop' },
          { name: 'Madinah', brief: 'The second holiest city, featuring the Prophet\'s Mosque and rich Islamic history.', image: 'https://images.unsplash.com/photo-1693305356807-2b94a61bdd06?q=80&w=627&auto=format&fit=crop' },
          { name: 'Rijal Almaa Heritage Village', brief: 'A stunning stone village that showcases the unique architecture of the Asir region.', image: 'https://images.unsplash.com/photo-1624532142970-1e938e2c93b3?q=80&w=1170&auto=format&fit=crop' },
          { name: 'Dammam', brief: 'A major coastal city in the Eastern Province, known for its beautiful corniche.', image: 'https://images.unsplash.com/photo-1671398996582-2e763b820f21?q=80&w=735&auto=format&fit=crop' },
          { name: 'Tabuk', brief: 'A northwestern city serving as a gateway to ancient archaeological sites and coastal beauty.', image: 'https://images.unsplash.com/photo-1712699718948-106bdba13fc2?q=80&w=1080&auto=format&fit=crop' },
          { name: 'Al Qassim', brief: 'The agricultural heartland of Saudi Arabia, famous for its dates and traditional markets.', image: 'https://picsum.photos/seed/qassim/800/600' },
          { name: 'Ushaiqer Heritage Village', brief: 'One of the oldest mud-brick villages in the Najd region, offering a glimpse into the past.', image: 'https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?q=80&w=1170&auto=format&fit=crop' }
        ]
      }
    ]
  },
  {
    region: 'LATAM',
    countries: [
      {
        name: 'Mexico',
        destinations: [
          { name: 'Mexico City', brief: 'A vibrant metropolis blending ancient Aztec history with modern culture and cuisine.', image: 'https://images.unsplash.com/photo-1547686669-9a8cb1a22d91?q=80&w=1074&auto=format&fit=crop' },
          { name: 'Puebla', brief: 'A colonial city known for its culinary history, colonial architecture, and Talavera pottery.', image: 'https://images.unsplash.com/photo-1689949606726-6cfae2abfbfa?q=80&w=687&auto=format&fit=crop' },
          { name: 'Oaxaca', brief: 'The cultural heart of Mexico, famous for its indigenous cultures, crafts, and gastronomy.', image: 'https://images.unsplash.com/photo-1562215589-b6d0ed3cfec8?q=80&w=1170&auto=format&fit=crop' },
          { name: 'Puerto Escondido', brief: 'A laid-back port and resort on Mexico\'s Pacific coast, famous for its many beaches and buzzing nightlife.', image: 'https://plus.unsplash.com/premium_photo-1697729995893-524dc0b91ecb?q=80&w=1332&auto=format&fit=crop' },
          { name: 'Tulum', brief: 'A coastal town featuring well-preserved Mayan ruins overlooking the Caribbean Sea.', image: 'https://images.unsplash.com/photo-1605216663980-b7ca6e9f2451?q=80&w=807&auto=format&fit=crop' },
          { name: 'Cancun', brief: 'A world-renowned tourist destination known for its white-sand beaches and vibrant nightlife.', image: 'https://images.unsplash.com/photo-1630252421399-ddde79af47b3?q=80&w=1074&auto=format&fit=crop' }
        ]
      },
      {
        name: 'Guatemala',
        destinations: [
          { name: 'Antigua', brief: 'A beautifully preserved Spanish colonial city surrounded by volcanoes.', image: 'https://images.unsplash.com/photo-1628128594359-25d5e30661dd?q=80&w=687&auto=format&fit=crop' },
          { name: 'Lake Atitlan', brief: 'A stunning volcanic lake surrounded by traditional Mayan villages.', image: 'https://images.unsplash.com/photo-1669176877597-da92c8a5bbfa?q=80&w=687&auto=format&fit=crop' },
          { name: 'Tikal', brief: 'One of the largest archaeological sites and urban centers of the pre-Columbian Maya civilization.', image: 'https://images.unsplash.com/photo-1642436443594-fff5e4dd0d0c?q=80&w=1170&auto=format&fit=crop' },
          { name: 'Semuc Champey', brief: 'A natural monument featuring a series of stepped, turquoise limestone pools.', image: 'https://images.unsplash.com/photo-1675185457371-aae4e3ea0270?q=80&w=1170&auto=format&fit=crop' },
          { name: 'Acatenango Volcano', brief: 'A stratovolcano offering challenging hikes and spectacular views of the active Fuego volcano.', image: 'https://images.unsplash.com/photo-1600131631619-cd42bdaf798f?q=80&w=687&auto=format&fit=crop' }
        ]
      },
      {
        name: 'El Salvador',
        destinations: [
          { name: 'San Salvador', brief: 'The bustling capital city, offering a mix of history, culture, and modern amenities.', image: 'https://images.unsplash.com/photo-1690384451505-2aef8ae1b0ef?q=80&w=687&auto=format&fit=crop' },
          { name: 'Suchitoto', brief: 'A charming colonial town known for its cobblestone streets and cultural arts scene.', image: 'https://images.unsplash.com/photo-1680374635221-aca00abf60f5?q=80&w=687&auto=format&fit=crop' },
          { name: 'El Tunco', brief: 'A popular surf town with a laid-back vibe, black sand beaches, and great waves.', image: 'https://images.unsplash.com/photo-1519421840190-84d0cab37fb1?q=80&w=764&auto=format&fit=crop' },
          { name: 'Santa Ana Volcano', brief: 'The highest volcano in El Salvador, featuring a stunning turquoise crater lake.', image: 'https://images.unsplash.com/photo-1701815843592-2aa411ab4860?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Lake Coatepeque', brief: 'A large crater lake surrounded by wooded hills, perfect for water sports and relaxation.', image: 'https://images.unsplash.com/photo-1608064626410-21c647573628?q=80&w=1172&auto=format&fit=crop' }
        ]
      },
      {
        name: 'Peru',
        destinations: [
          { name: 'Machu Picchu', brief: 'The iconic 15th-century Inca citadel set high in the Andes Mountains.', image: 'https://images.unsplash.com/photo-1664387518989-bb1d8574f078?q=80&w=688&auto=format&fit=crop' },
          { name: 'Cusco', brief: 'The historic capital of the Inca Empire, known for its archaeological remains and Spanish colonial architecture.', image: 'https://images.unsplash.com/photo-1593494441374-bad54249d0e8?q=80&w=1173&auto=format&fit=crop' },
          { name: 'Lima', brief: 'The bustling capital city, famous for its culinary scene and historic center.', image: 'https://images.unsplash.com/photo-1577587230708-187fdbef4d91?q=80&w=1171&auto=format&fit=crop' },
          { name: 'Sacred Valley', brief: 'A region in the Andes heartland of the Inca Empire, featuring ruins and traditional villages.', image: 'https://plus.unsplash.com/premium_photo-1697729872733-24e9e8186a47?q=80&w=1166&auto=format&fit=crop' },
          { name: 'Lake Titicaca', brief: 'The highest navigable lake in the world, known for its floating islands and indigenous cultures.', image: 'https://images.unsplash.com/photo-1620417396507-9a57523d16a6?q=80&w=1331&auto=format&fit=crop' }
        ]
      },
      {
        name: 'Ecuador',
        destinations: [
          { name: 'Galapagos Islands', brief: 'A volcanic archipelago renowned for its unique and fearless wildlife.', image: 'https://images.unsplash.com/photo-1521022125878-aa8a4ea78a5d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Quito', brief: 'The high-altitude capital city, featuring one of the best-preserved historic centers in the Americas.', image: 'https://images.unsplash.com/photo-1623190004465-c45de0db50c4?q=80&w=880&auto=format&fit=crop' },
          { name: 'Cotopaxi', brief: 'One of the world\'s highest active volcanoes, located in a beautiful national park.', image: 'https://images.unsplash.com/photo-1677008291720-1d55908075ca?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Cuenca', brief: 'A colonial city known for its stunning architecture, cobblestone streets, and Panama hats.', image: 'https://images.unsplash.com/photo-1592240819995-1f15496c97ee?q=80&w=1170&auto=format&fit=crop' }
        ]
      }
    ]
  }
];
