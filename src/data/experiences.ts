export type Region = 'Saudi Arabia' | 'LATAM';

export interface Experience {
  name: string;
  brief: string;
  image: string;
}

export interface CountryExperiences {
  name: string;
  experiences: Experience[];
}

export interface RegionExperiences {
  region: Region;
  countries: CountryExperiences[];
}

export const experiencesData: RegionExperiences[] = [
  {
    region: 'Saudi Arabia',
    countries: [
      {
        name: 'Saudi Arabia',
        experiences: [
          { name: 'Saudi Safari "Kashtah"', brief: 'Experience the traditional Saudi desert camping with authentic hospitality.', image: 'https://images.unsplash.com/photo-1716571349499-0b83f5dbb7a2?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Edge of the World hiking', brief: 'Hike along the dramatic cliffs of the Tuwaiq escarpment.', image: 'https://images.unsplash.com/photo-1733896502795-4bd9f55abe4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'AlUla Old Town tour', brief: 'Explore the labyrinth of mud-brick and stone houses in the historic old town of AlUla.', image: 'https://images.unsplash.com/photo-1742218410244-6eb97a4a6229?q=80&w=764&auto=format&fit=crop' },
          { name: 'Red Sea snorkeling', brief: 'Discover the vibrant marine life and pristine coral reefs of the Red Sea.', image: 'https://images.unsplash.com/photo-1669687917290-5d7bcf244165?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Rub\' al Khali desert camping', brief: 'Camp under the stars in the legendary Empty Quarter.', image: 'https://images.unsplash.com/photo-1612899326681-66508905b4ce?q=80&w=1171&auto=format&fit=crop' },
          { name: 'Asir National Park exploration', brief: 'Discover the pristine natural reserve with diverse wildlife and breathtaking landscapes.', image: 'https://plus.unsplash.com/premium_photo-1720520078624-3185e76f680d?q=80&w=687&auto=format&fit=crop' },
          { name: 'Wadi Al Disah valley trek', brief: 'Trek through the beautiful mountainous valley known for its towering sandstone cliffs and palm trees.', image: 'https://images.unsplash.com/photo-1712699718948-106bdba13fc2?q=80&w=1080&auto=format&fit=crop' },
          { name: 'Hegra (Mada’in Salih) archaeological tour', brief: 'Explore Saudi Arabia\'s first UNESCO World Heritage site, with monumental Nabataean tombs.', image: 'https://images.unsplash.com/photo-1681419670203-6b081b3c9fe1?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Al-Balad (Historic Jeddah) walking tour', brief: 'Visit the historic center of Jeddah, famous for its intricately designed coral stone houses.', image: 'https://images.unsplash.com/photo-1727047841484-5c828ae14d5c?q=80&w=687&auto=format&fit=crop' }
        ]
      }
    ]
  },
  {
    region: 'LATAM',
    countries: [
      {
        name: 'Mexico',
        experiences: [
          { name: 'Chichen Itza visit', brief: 'Witness the majestic Mayan pyramid at the break of dawn.', image: 'https://plus.unsplash.com/premium_photo-1697730073345-fcb1cdc8334c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Teotihuacan pyramid visit', brief: 'Climb the ancient Pyramid of the Sun for panoramic views.', image: 'https://images.unsplash.com/photo-1643177571935-5204362103fa?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Cenote swimming', brief: 'Swim in the crystal-clear waters of natural sinkholes.', image: 'https://images.unsplash.com/photo-1493508994801-b87b8970d035?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Coffee Experience', brief: 'Learn about the coffee-making process from bean to cup.', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'bioluminescence phenomenon', brief: 'Witness the magical glowing waters of the bioluminescent lagoons.', image: 'https://images.unsplash.com/photo-1594814532732-37c265b0dd3c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ]
      },
      {
        name: 'Guatemala',
        experiences: [
          { name: 'Lake Atitlan kayaking', brief: 'Paddle across the beautiful volcanic lake surrounded by Mayan villages.', image: 'https://images.unsplash.com/photo-1588472235276-7638965471e2?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Acatenango volcano overnight hike', brief: 'Hike up and camp to watch the neighboring Fuego volcano erupt.', image: 'https://images.unsplash.com/photo-1600131631619-cd42bdaf798f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Semuc Champey tubing', brief: 'Float down the river and explore the turquoise limestone pools.', image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Antigua coffee tour', brief: 'Tour the lush coffee plantations on the slopes of volcanoes.', image: 'https://images.unsplash.com/photo-1588252364673-d8e10e873b1c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Tikal jungle canopy walk', brief: 'Walk among the treetops near the ancient Mayan ruins.', image: 'https://images.unsplash.com/photo-1669025467363-ace9bad030dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ]
      },
      {
        name: 'El Salvador',
        experiences: [
          { name: 'El Tunco surfing', brief: 'Catch the perfect wave at this world-renowned surf spot.', image: 'https://images.unsplash.com/photo-1537519646099-335112f03225?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Santa Ana Volcano hike', brief: 'Hike to the crater of the highest volcano in El Salvador.', image: 'https://images.unsplash.com/photo-1701815843592-2aa411ab4860?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Suchitoto artisanal weaving workshop', brief: 'Learn traditional indigo dyeing and weaving techniques.', image: 'https://images.unsplash.com/photo-1759738099669-d64b0656f6cf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'El Imposible National Park trekking', brief: 'Trek through the dense tropical forest and discover hidden waterfalls.', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1275&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Costa del Sol beach horseback riding', brief: 'Ride along the sandy shores of the beautiful Costa del Sol.', image: 'https://images.unsplash.com/photo-1601563875044-2705bd767e31?q=80&w=1229&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ]
      },
      {
        name: 'Peru',
        experiences: [
          { name: 'Inca Trail hiking to Machu Picchu', brief: 'Embark on the classic trek to the lost city of the Incas.', image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Nazca Lines scenic flight', brief: 'Fly over the mysterious ancient geoglyphs in the desert.', image: 'https://images.unsplash.com/photo-1732966649021-322a4d2d7847?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Huacachina sandboarding', brief: 'Surf the massive sand dunes surrounding the desert oasis.', image: 'https://images.unsplash.com/photo-1643856545126-a20f97392fc9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Arequipa Colca Canyon condor watching', brief: 'Watch the majestic Andean condors soar over the deep canyon.', image: 'https://images.unsplash.com/photo-1663188632079-b284e13f0f7c?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Paracas desert buggy tour', brief: 'Experience an adrenaline-filled ride through the coastal desert.', image: 'https://images.unsplash.com/photo-1643856394581-5d9735aed690?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ]
      },
      {
        name: 'Ecuador',
        experiences: [
          { name: 'Galapagos snorkeling with sea lions', brief: 'Swim alongside playful sea lions and diverse marine life.', image: 'https://images.unsplash.com/photo-1521022125878-aa8a4ea78a5d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Quilotoa Lagoon hiking', brief: 'Hike around the stunning emerald crater lake.', image: 'https://images.unsplash.com/photo-1723425194648-2642d4890a52?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Cotopaxi volcano climb', brief: 'Challenge yourself with a climb up this iconic active volcano.', image: 'https://images.unsplash.com/photo-1677008291720-1d55908075ca?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Amazon rainforest canopy zip-lining', brief: 'Zip through the lush canopy of the Amazon basin.', image: 'https://images.unsplash.com/photo-1769795070373-aa9021325c86?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
          { name: 'Baños swing at the end of the world', brief: 'Swing over the edge of a mountain with breathtaking views.', image: 'https://images.unsplash.com/photo-1599508056291-5e368c54d63d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
        ]
      }
    ]
  }
];
