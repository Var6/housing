// data/projects.ts
export type Unit = {
  bhk: string
  sqft: number
  price: string
}

export type Project = {
  id: string
  name: string
  developer: string
  location: string
  city: string
  state: string
  region: string
  units: Unit[]
  possession: string
  structure: string
  reraId?: string
  images: string[]
  type?: string
}

export const projects: Project[] = [
  {
    id: 'piramal-mahalaxmi',
    name: 'Piramal Mahalaxmi',
    developer: 'Piramal Realty',
    location: 'Jacob Circle',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 762, price: '5.60 Cr' },
      { bhk: '3 BHK', sqft: 1066, price: '7.99 Cr' },
      { bhk: '4 BHK', sqft: 1850, price: '16.50 Cr' }
    ],
    possession: 'December 2025',
    structure: 'G + 73',
    reraId: 'P51900015854',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'
    ]
  },
  {
  id: "centurion-farm-house-jewar",
  name: "Centurion Farm House",
  developer: "Centurion Group",
  location: "Jewar Airport, Yamuna Expressway",
  city: "Greater Noida",
  state: "Uttar Pradesh",
  region: "Yamuna Expressway",
  units: [
    { bhk: "Independent Farmhouse", sqft: 4500, price: "On Request" }
  ],
  possession: "Ready to Move",
  structure: "Independent Farmhouse Villas",
  type: "Farmhouse",
  reraId: undefined,
  images: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
  ]
},
{
  id: "lotus-farms-techzone",
  name: "Lotus Farms House",
  developer: "Lotus Group",
  location: "Techzone",
  city: "Greater Noida",
  state: "Uttar Pradesh",
  region: "Noida Extension",
  type: "Farmhouse",
  units: [
    { bhk: "Independent Farmhouse", sqft: 2800, price: "On Request" },
  ],
  possession: "Ready to Move",
  structure: "Luxury Gated Farmhouse Community",
  reraId: undefined,
  images: [
    "/layout.png",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80"
  ]
},
  {
    id: 'lt-gateway-sewri',
    name: 'L&T Gateway',
    developer: 'L&T Realty',
    location: 'Sewri',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '3 BHK', sqft: 1258, price: '6.52 Cr' },
      { bhk: '4 BHK', sqft: 1980, price: '11.21 Cr' },
      { bhk: '4.5 BHK', sqft: 2250, price: '12.22 Cr' }
    ],
    possession: 'December 2028',
    structure: 'Stilt + 54',
    reraId: 'P51900054969',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80'
    ]
  },
  {
    id: 'birla-niyaara-worli',
    name: 'Birla Niyaara',
    developer: 'Birla Estates',
    location: 'Worli',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '3 BHK', sqft: 1151, price: '14.65 Cr' },
      { bhk: '6 BHK', sqft: 3776, price: '48.50 Cr' }
    ],
    possession: 'March 2028',
    structure: 'G + 65',
    reraId: 'P51900031916',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80'
    ]
  },
  {
    id: 'godrej-horizon-wadala',
    name: 'Godrej Horizon',
    developer: 'Godrej Properties',
    location: 'Wadala',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 689, price: '2.99 Cr' },
      { bhk: '2 BHK', sqft: 739, price: '3.10 Cr' },
      { bhk: '3 BHK', sqft: 1050, price: '4.25 Cr' },
      { bhk: '3 BHK', sqft: 1232, price: '4.98 Cr' }
    ],
    possession: 'June 2026',
    structure: 'G + 44',
    reraId: 'P51900034851',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80'
    ]
  },
  {
    id: 'godrej-nurture-bhandup',
    name: 'Godrej Nurture',
    developer: 'Godrej Properties',
    location: 'Bhandup',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 655, price: '1.65 Cr' },
      { bhk: '2 BHK', sqft: 704, price: '1.91 Cr' },
      { bhk: '3 BHK', sqft: 901, price: '2.48 Cr' }
    ],
    possession: 'March 2031',
    structure: 'G + 40',
    reraId: 'P51800077080',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80'
    ]
  },
  {
    id: 'exquisite-thane',
    name: 'Exquisite',
    developer: 'Godrej Properties',
    location: 'Waghbil',
    city: 'Thane',
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2 BHK', sqft: 655, price: '1.75 Cr' },
      { bhk: '2 BHK', sqft: 724, price: '1.90 Cr' },
      { bhk: '3 BHK', sqft: 922, price: '2.45 Cr' }
    ],
    possession: 'March 2025',
    structure: '4 Podium + 38',
    reraId: 'P51700024496',
    images: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
      'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80'
    ]
  },
  {
    id: 'mahindra-happinest-kalyan',
    name: 'Happinest Kalyan',
    developer: 'Mahindra Lifespaces',
    location: 'Kalyan',
    city: 'Kalyan',
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2 BHK', sqft: 536, price: '57 Lacs' },
      { bhk: '2 BHK', sqft: 600, price: '67 Lacs' }
    ],
    possession: 'Ready Possession',
    structure: 'G + 14',
    reraId: 'P51700022981',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573471509-aa76c5be96b3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-acd4262e0995?w=1200&q=80'
    ]
  },
  {
    id: 'godrej-bayview-vashi',
    name: 'Godrej Bayview',
    developer: 'Godrej Properties',
    location: 'Vashi',
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    region: 'Vashi to Panvel',
    units: [
      { bhk: '2 BHK', sqft: 870, price: '3.35 Cr' },
      { bhk: '3 BHK', sqft: 1260, price: '4.95 Cr' }
    ],
    possession: 'December 2027',
    structure: 'G + 26',
    reraId: 'P51700031726',
    images: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752734-bd17126a3223?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80'
    ]
  },
  // Add these missing properties after the last project in your data file

  {
    id: 'piramal-aranya-byculla',
    name: 'Piramal Aranya',
    developer: 'Piramal Realty',
    location: 'Rani Baug, Byculla',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '3 BHK', sqft: 1050, price: '6.10 Cr' },
      { bhk: '4 BHK', sqft: 2844, price: '14.69 Cr' }
    ],
    possession: 'Ready Possession',
    structure: 'G + 52',
    reraId: 'P51900018039',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80'
    ]
  },
  {
    id: 'lt-island-mahim',
    name: 'L&T Island',
    developer: 'L&T Realty',
    location: 'Mahim',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 681, price: '2.81 Cr' },
      { bhk: '2 BHK', sqft: 767, price: '3.24 Cr' },
      { bhk: '3 BHK', sqft: 1042, price: '4.21 Cr' },
      { bhk: '3 BHK', sqft: 1365, price: '5.67 Cr' }
    ],
    possession: 'June 2028',
    structure: 'G + 5P + 34',
    reraId: 'P51900046369',
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
      'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80'
    ]
  },
  {
    id: 'rustomjee-crown-prabhadevi',
    name: 'Rustomjee Crown',
    developer: 'Rustomjee',
    location: 'Prabhadevi',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '4 BHK', sqft: 2156, price: '18.90 Cr' },
      { bhk: '4 BHK', sqft: 2599, price: '21 Cr' },
      { bhk: '5 BHK', sqft: 3088, price: '29.50 Cr' }
    ],
    possession: 'Ready Possession',
    structure: '5P + 63',
    reraId: 'P519000006367',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&q=80'
    ]
  },
  {
    id: 'rustomjee-180-bayview-matunga',
    name: '180° Bay View',
    developer: 'Rustomjee',
    location: 'Matunga',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 824, price: '4.15 Cr' },
      { bhk: '3 BHK', sqft: 1221, price: '6.11 Cr' },
      { bhk: '4 BHK', sqft: 1644, price: '8.32 Cr' }
    ],
    possession: 'June 2029',
    structure: 'G + 37',
    reraId: 'P51900066547',
    images: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
      'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80'
    ]
  },
  {
    id: 'lt-77-crossroads-ghatkopar',
    name: 'L&T 77 Cross-Roads',
    developer: 'L&T Realty',
    location: 'Ghatkopar',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '1 BHK', sqft: 413, price: '1.17 Cr' },
      { bhk: '2 BHK', sqft: 574, price: '1.66 Cr' },
      { bhk: '2 BHK', sqft: 637, price: '1.94 Cr' }
    ],
    possession: 'December 2026',
    structure: 'G + 26',
    reraId: 'P51800003446',
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
      'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80'
    ]
  },
  {
    id: 'adani-the-views-ghatkopar',
    name: 'The Views',
    developer: 'Adani Realty',
    location: 'Ghatkopar',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 834, price: '2.88 Cr' },
      { bhk: '2 BHK', sqft: 953, price: '3.60 Cr' },
      { bhk: '4 BHK', sqft: 1587, price: '5.80 Cr' }
    ],
    possession: 'December 2025',
    structure: '2B + Stilt + 21',
    reraId: 'P51900031165',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573471509-aa76c5be96b3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-acd4262e0995?w=1200&q=80'
    ]
  },
  {
  id: 'cyberthum-sector-140a',
  name: 'Cyberthum',
  developer: 'Bhutani Group',
  location: 'Sector 140A',
  city: 'Greater Noida',
  state: 'Uttar Pradesh',
  region: 'Noida Expressway',
  units: [],
  possession: 'Under Construction',
  structure: '2B + Stilt + 6 ',
  reraId: '',
  images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80'
    ],
  },
  {
  id: 'grandthum-techzone-4',
  name: 'Grandthum',
  developer: 'Bhutani Group',
  location: 'Techzone 4',
  city: 'Greater Noida',
  state: 'Uttar Pradesh',
  region: 'Noida Extension',
  units: [
   
  ],
  possession: 'Under Construction',
  structure: '2B + Stilt + 8',
  reraId: '',
  images: [
    '/grandthum/G1.jpg',
    '/grandthum/g2.jpg',
    '/grandthum/g3.jpg',
    '/grandthum/g4.jpg',
  ],
  },
  {
    id: 'adani-codename-triumph-kanjurmarg',
    name: 'Codename Triumph',
    developer: 'Adani Realty',
    location: 'Kanjurmarg',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 738, price: '2.09 Cr' },
      { bhk: '2 BHK', sqft: 826, price: '2.48 Cr' },
      { bhk: '3 BHK', sqft: 1175, price: '3.42 Cr' },
      { bhk: '3 BHK', sqft: 1347, price: '4.20 Cr' }
    ],
    possession: 'December 2028',
    structure: 'G + 3P + 34',
    reraId: 'P51800055166',
    images: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752734-bd17126a3223?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80'
    ]
  },
  {
    id: 'piramal-revanta-mulund',
    name: 'Piramal Revanta',
    developer: 'Piramal Realty',
    location: 'Mulund',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 854, price: '2.77 Cr' },
      { bhk: '3 BHK', sqft: 1192, price: '3.72 Cr' }
    ],
    possession: 'November 2028',
    structure: 'G + 47',
    reraId: 'P51800018099',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'
    ]
  },
  {
    id: 'prestige-city-mulund-forest-hills',
    name: 'Prestige City - Forest Hills',
    developer: 'Prestige Group',
    location: 'Mulund',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '3 BHK', sqft: 1020, price: '2.89 Cr' },
      { bhk: '3 BHK', sqft: 1330, price: '3.79 Cr' },
      { bhk: '4 BHK', sqft: 1750, price: '5.09 Cr' },
      { bhk: '4 BHK', sqft: 2130, price: '6.09 Cr' }
    ],
    possession: 'December 2029',
    structure: 'G + 54',
    reraId: 'P51800077457',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80'
    ]
  },
  {
    id: 'prestige-city-mulund-seista',
    name: 'Prestige City - Seista',
    developer: 'Prestige Group',
    location: 'Mulund',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 1024, price: '2.75 Cr' },
      { bhk: '3 BHK', sqft: 1367, price: '3.80 Cr' },
      { bhk: '3 BHK', sqft: 1480, price: '4.40 Cr' }
    ],
    possession: 'June 2025',
    structure: 'G + 54',
    reraId: 'P51800005285',
    images: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
      'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80'
    ]
  },
  {
    id: 'prestige-city-mulund-bellanza',
    name: 'Prestige City - Bellanza',
    developer: 'Prestige Group',
    location: 'Mulund',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 842, price: '2.23 Cr' },
      { bhk: '3 BHK', sqft: 910, price: '2.35 Cr' },
      { bhk: '4 BHK Duplex', sqft: 1450, price: '4.66 Cr' },
      { bhk: '4 BHK Duplex', sqft: 1722, price: '5.29 Cr' }
    ],
    possession: 'June 2026',
    structure: 'G + 54',
    reraId: 'P51800045339',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573471509-aa76c5be96b3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-acd4262e0995?w=1200&q=80'
    ]
  },
  {
    id: 'oberoi-enigma-mulund',
    name: 'Enigma',
    developer: 'Oberoi Realty',
    location: 'LBS Road, Mulund',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '3 BHK', sqft: 1127, price: '4.60 Cr' },
      { bhk: '4 BHK', sqft: 2130, price: '7.10 Cr' }
    ],
    possession: 'Ready Possession',
    structure: 'Stilt + 62',
    reraId: 'P51800002656',
    images: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752734-bd17126a3223?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80',
    ]
  },
  {
    id: 'oberoi-eternia-mulund',
    name: 'Eternia',
    developer: 'Oberoi Realty',
    location: 'LBS Road, Mulund',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '3 BHK', sqft: 932, price: '3.40 Cr' },
      { bhk: '3 BHK', sqft: 1049, price: '3.95 Cr' }
    ],
    possession: 'Ready Possession',
    structure: 'Stilt + 60',
    reraId: 'P51800006141',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80'
    ]
  },
  {
    id: 'lt-rejuve-360-mulund',
    name: 'Rejuve 360',
    developer: 'L&T Realty',
    location: 'LBS Road, Mulund',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 750, price: '2.41 Cr' },
      { bhk: '2.5 BHK', sqft: 912, price: '2.91 Cr' },
      { bhk: '3.5 BHK', sqft: 1312, price: '4.25 Cr' }
    ],
    possession: 'June 2027',
    structure: 'G + 57',
    reraId: 'P51800023075',
    images: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80',
      'https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb?w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200&q=80'
    ]
  },
  {
    id: 'kalpataru-summit-mulund',
    name: 'Kalpataru Summit',
    developer: 'Kalpataru',
    location: 'LBS Marg, Mulund',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: 'Office', sqft: 454, price: '1.76 Cr' },
      { bhk: 'Office', sqft: 771, price: '2.87 Cr' },
      { bhk: 'Office', sqft: 973, price: '3.58 Cr' }
    ],
    possession: 'July 2026',
    structure: 'G + 33',
    reraId: 'P51800033272',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80'
    ]
  },
  {
    id: 'puravankara-clermont-chembur',
    name: 'Clermont',
    developer: 'Puravankara',
    location: 'Chembur',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK', sqft: 533, price: '2.45 Cr' },
      { bhk: '3 BHK', sqft: 975, price: '4.45 Cr' }
    ],
    possession: 'June 2027',
    structure: 'G + 17',
    reraId: 'P51800028427',
    images: [
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80'
    ]
  },
  {
    id: 'godrej-ascend-thane',
    name: 'Godrej Ascend',
    developer: 'Godrej Properties',
    location: 'Kolshet Road, Thane',
    city: 'Thane',
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2 BHK', sqft: 734, price: '1.87 Cr' },
      { bhk: '3 BHK', sqft: 855, price: '1.99 Cr' },
      { bhk: '3 BHK', sqft: 971, price: '2.69 Cr' }
    ],
    possession: 'December 2028',
    structure: 'G + 44',
    reraId: 'P51700053668',
    images: [
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&q=80',
      'https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=1200&q=80'
    ]
  },
  {
    id: 'godrej-forest-ville-thane',
    name: 'Forest Ville',
    developer: 'Godrej Properties',
    location: 'Kolshet Road, Thane',
    city: 'Thane',
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3 BHK', sqft: 1090, price: '1.87 Cr' },
      { bhk: '3 BHK + Studio', sqft: 1367, price: '2.49 Cr' }
    ],
    possession: 'December 2029',
    structure: 'G + 60',
    reraId: 'P51700050312',
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573471509-aa76c5be96b3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687644-acd4262e0995?w=1200&q=80'
    ]
  },
  {
    id: 'raymond-tenx-habitat-thane',
    name: 'Raymond TenX Habitat',
    developer: 'Raymond Realty',
    location: 'Pokhran Road, Thane',
    city: 'Thane',
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2 BHK', sqft: 595, price: '1.62 Cr' },
      { bhk: '2 BHK', sqft: 670, price: '1.90 Cr' }
    ],
    possession: 'December 2025',
    structure: 'G + 42',
    reraId: 'P51700034190',
    images: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752734-bd17126a3223?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80'
    ]
  }
]