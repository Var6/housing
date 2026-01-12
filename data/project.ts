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
      'https://images.unsplash.com/photo-1600566752734-bd17126a3223?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=80',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80'
    ]
  }
]