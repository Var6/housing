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
  price?:boolean
  association?:string
}

const rawProjects: Project[] = [
  {
    id: 'piramal-mahalaxmi',
    name: 'Piramal Mahalaxmi',
    developer: 'Piramal Realty',
    location: 'Jacob Circle',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    association:"Prudent Properties",
    units: [
      { bhk: '2 BHK',sqft:762,price:'5.60Cr' },
      { bhk: '3 BHK',sqft:106,price:'7.99Cr' },
      { bhk: '4 BHK',sqft:185,price:'416.50Cr' }
    ],
    possession: 'December2025',
    structure: 'G+73',
    reraId: 'P51900015854',
    images: [
      '/PIRAMAL MAHALAXMI/1.jpg',
      '/PIRAMAL MAHALAXMI/2.jpg',
      '/PIRAMAL MAHALAXMI/3.jpg',
      '/PIRAMAL MAHALAXMI/4.jpg',
    ]
  },
  {
  id: "centurion-farm-house-jewar",
  name: "Centurion Farm House",
  developer: "Centurion Group",
  location: "Jewar Airport,YamunaExpressway",
  city: "Greater Noida",
  state: "Uttar Pradesh",
   price: false,
  region: "Yamuna Expressway",
  units: [
    { bhk: "Independent Farmhouse",sqft:4500,price:"OnRequest" }
  ],
  possession: "Ready to Move",
  structure: "Independent Farmhouse Villas",
  type: "Farmhouse",
  reraId: undefined,
  images: [
    'centurionfarmhousejewar/4.JPG',
    'centurionfarmhousejewar/5.JPG',
    'centurionfarmhousejewar/6.JPG',
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
   price: false,
  type: "Farmhouse",
  units: [
    { bhk: "Independent Farmhouse",sqft:280,price:"OnRequest" },
  ],
  possession: "Ready to Move",
  structure: "Luxury Gated Farmhouse Community",
  reraId: undefined,
  images: [
    'lotus-farms-techzone/5.JPG',
    'lotus-farms-techzone/6.JPG',
    'lotus-farms-techzone/7.JPG',
  ]
},
  {
    id: 'lt-gateway-sewri',
    name: 'L&T Gateway',
    developer: 'L&T Realty',
    location: 'Sewri',
    city: 'Mumbai',
    state: 'Maharashtra',
     association:"Prudent Properties",
    region: 'CST to Mulund',
    units: [
      { bhk: '3 BHK',sqft:125,price:'6.52Cr' },
      { bhk: '4 BHK',sqft:198,price:'11.21Cr' },
      { bhk: '4.5 BHK',sqft:225,price:'12.22Cr' }
    ],
    possession: 'December 2028',
    structure: 'Stilt + 541414',
    reraId: 'P51900054969',
    images: [
      'lt-gateway-sewri/6.jpg',
      'lt-gateway-sewri/7.jpg',
      'lt-gateway-sewri/8.jpg',
      'lt-gateway-sewri/9.jpg',
    ]
  },
  {
    id: 'birla-niyaara-worli',
    name: 'Birla Niyaara',
    developer: 'Birla Estates',
    location: 'Worli',
    city: 'Mumbai',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '3 BHK',sqft:115,price:'14.65Cr' },
      { bhk: '6 BHK',sqft:377,price:'48.50Cr' }
    ],
    possession: 'March 2028',
    structure: 'G + 65',
    reraId: 'P51900031916',
    images: [
      '/birla-niyaara-worli12.jpg',
      '/birla-niyaara-worli13.jpg',
      '/birla-niyaara-worli17.jpg',
      '/birla-niyaara-worli18.jpg',
      '/birla-niyaara-worli19.jpg',
      '/birla-niyaara-worli20.jpg',
    ]
  },
  {
    id: 'godrej-horizon-wadala',
    name: 'Godrej Horizon',
    developer: 'Godrej Properties',
    location: 'Wadala',
    city: 'Mumbai',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK',sqft:68958,price:'2.99Cr' },
      { bhk: '2 BHK',sqft:73925,price:'3.10Cr' },
      { bhk: '3 BHK',sqft:10521,price:'4.25Cr' },
      { bhk: '3 BHK',sqft:123212,price:'4.98Cr' },
    ],
    possession: 'June 2026',
    structure: 'G + 44',
    reraId: 'P51900034851',
    images: [
      '/jodreg-horizon-wadala40.jpg',
      '/jodreg-horizon-wadala41.jpg',
      '/jodreg-horizon-wadala42.jpg',
      '/jodreg-horizon-wadala43.jpg',
      '/jodreg-horizon-wadala44.jpg',
    ]
  },
  {
    id: 'godrej-nurture-bhandup',
    name: 'Godrej Nurture',
    developer: 'Godrej Properties',
    location: 'Bhandup',
    city: 'Mumbai',
    state: 'Maharashtra',
     association:"Prudent Properties",
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK',sqft:655,price:'1.65Cr'},
      { bhk: '2 BHK',sqft:704,price:'1.91Cr'},
      { bhk: '3 BHK',sqft:901,price:'2.48Cr'}
    ],
    possession: 'March 2031',
    structure:'G + 40',
    reraId: 'P51800077080',
    images: [
      'godrej-nurture-bhandup/67.webp',
      'godrej-nurture-bhandup/68.jfif',
      'godrej-nurture-bhandup/69.jpeg',
      'godrej-nurture-bhandup/70.jfif',
      'godrej-nurture-bhandup/71.jfif',
    ]
  },
  {
    id: 'exquisite-thane',
    name: 'Exquisite',
    developer: 'Godrej Properties',
    location: 'Waghbil',
     association:"Prudent Properties",
    city: 'Thane',
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2 BHK',sqft:655,price:'1.75Cr'},
      { bhk: '2 BHK',sqft:724,price:'1.90Cr'},
      { bhk: '3 BHK',sqft:922,price:'2.45Cr'},
    ],
    possession: 'March 2025',
    structure: '4 Podium + 38',
    reraId: 'P51700024496',
    images: [
      '/equisite-thane2555.jpg',
      '/equisite-thane4566.jpg',
      '/equisite-thane6547.jpg',
      '/equisite-thane8967.jpg',
    ]
  },
  {
    id: 'mahindra-happinest-kalyan',
    name: 'Happinest Kalyan',
     association:"Prudent Properties",
    developer: 'Mahindra Lifespaces',
    location: 'Kalyan',
    city: 'Kalyan',
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2 BHK',sqft:536,price:'57Lacs'},
      { bhk: '2 BHK',sqft:600,price:'67Lacs'}
    ],
    possession: 'Ready Possession',
    structure: 'G + 14',
    reraId: 'P51700022981',
    images: [
      '/mahindrahappinest-kalyan0967.jpg',
      '/mahindrahappinest-kalyan2525.jpg',
      '/mahindrahappinest-kalyan4747.jpg',
      '/mahindrahappinest-kalyan5679.jpg',
      '/mahindrahappinest-kalyan9087.jpg',
      '/mahindrahappinest-kalyan74747.jpg',
    ]
  },
  {
    id: 'godrej-bayview-vashi',
    name: 'Godrej Bayview',
    developer: 'Godrej Properties',
    location: 'Vashi',
     association:"Prudent Properties",
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    region: 'Vashi to Panvel',
    units: [
      { bhk:'2 BHK',sqft:870,price:'3.3547Cr'},
      { bhk:'3 BHK',sqft:126,price:'4.9574Cr'},
    ],
    possession: 'December 2027',
    structure: 'G + 26',
    reraId: 'P51700031726',
    images: [
      '/godrej-bayview-vashi456.jpg',
      '/godrej-bayview-vashi4567.jpg',
      '/godrej-bayview-vashi5657.jpg',
      '/godrej-bayview-vashi9877.jpg',
      '/godrej-bayview-vashi58558.jpg',
      '/godrej-bayview-vashi85888.jpg',
    ]
  },
  // Add these missing properties after the last project in your data file

  {
    id: 'piramal-aranya-byculla',
    name: 'Piramal Aranya',
    developer: 'Piramal Realty',
    location: 'Rani Baug, Byculla',
     association:"Prudent Properties",
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk:'3 BHK',sqft:105,price:'6.10Cr'},
      { bhk:'4 BHK',sqft:284,price:'14.69Cr'}
    ],
    possession: 'Ready Possession',
    structure: 'G + 52',
    reraId: 'P51900018039',
    images: [
      '/piramal-aranya-byculla3456.jpg',
      '/piramal-aranya-byculla34567.jpg',
      '/piramal-aranya-byculla121212.jpg',
      '/piramal-aranya-byculla8988.jpg',
    ]
  },
  {
    id: 'lt-island-mahim',
    name: 'L&T Island',
    developer: 'L&T Realty',
    location: 'Mahim',
     association:"Prudent Properties",
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk:'2 BHK',sqft:68,price:'2.81Cr'},
      { bhk:'2 BHK',sqft:767,price:'3.24Cr'},
      { bhk:'3 BHK',sqft:104,price:'4.21Cr'},
      { bhk:'3 BHK',sqft:136,price:'5.67Cr'},
    ],
    possession: 'June 2028',
    structure: 'G + 5P + 34',
    reraId: 'P51900046369',
    images: [
      '/lt-island-mahim21.jpg',
      '/lt-island-mahim22.jpg',
      '/lt-island-mahim23.jpg',
      '/lt-island-mahim24.jpg',
      '/lt-island-mahim25.jpg',
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
     association:"Prudent Properties",
    units: [
      { bhk: '4 BHK',sqft:215,price:'18.90Cr'},
      { bhk: '4 BHK',sqft:259,price:'21Cr'},
      { bhk: '5 BHK',sqft:308,price:'29.50Cr'}
    ],
    possession: 'Ready Possession',
    structure: '5P + 63',
    reraId: 'P519000006367',
    images: [
      '/rustomjee-crown-prabhadevi27.jpg',
      '/rustomjee-crown-prabhadevi28.jpg',
      '/rustomjee-crown-prabhadevi29.jpg',
      '/rustomjee-crown-prabhadevi30.jpg',
      '/rustomjee-crown-prabhadevi31.jpg',
    ]
  },
  {
    id: 'rustomjee-180-bayview-matunga',
    name: '180° Bay View',
    developer: 'Rustomjee',
    location: 'Matunga',
    city: 'Mumbai',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk:'2 BHK',sqft:824,price:'4.15Cr'},
      { bhk:'3 BHK',sqft:122,price:'6.11Cr'},
      { bhk:'4 BHK',sqft:164,price:'8.32Cr'}
    ],
    possession: 'June 2029',
    structure: 'G + 37',
    reraId: 'P51900066547',
    images: [
      '/rustomjee-180bayview-matunga35.jpg',
      '/rustomjee-crown-prabhadevi36.jpg',
      '/rustomjee-crown-prabhadevi37.jpg',
      '/rustomjee-crown-prabhadevi38.jpg',
      '/rustomjee-crown-prabhadevi/39.jpg',
    ]
  },
  {
    id: 'lt-77-crossroads-ghatkopar',
    name: 'L&T 77 Cross-Roads',
    developer: 'L&T Realty',
    location: 'Ghatkopar',
     association:"Prudent Properties",
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk:'1 BHK',sqft:413,price:'1.17Cr'},
      { bhk:'2 BHK',sqft:574,price:'1.66Cr'},
      { bhk:'2 BHK',sqft:637,price:'1.94Cr'}
    ],
    possession: 'December 2026',
    structure: 'G + 26',
    reraId: 'P51800003446',
    images: [
      '/lt-77-crossroads-ghatkopar48.jpg',
      '/lt-77-crossroads-ghatkopar49.jpg',
      '/lt-77-crossroads-ghatkopar50.jpg',
      '/lt-77-crossroads-ghatkopar51.jpg',
      '/lt-77-crossroads-ghatkopar52.jpg',
    ]
  },
  {
    id: 'adani-the-views-ghatkopar',
    name: 'The Views',
    developer: 'Adani Realty',
     association:"Prudent Properties",
    location: 'Ghatkopar',
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
     { bhk: '2 BHK', sqft: 834, price: '2.88 Cr' },
      { bhk: '2 BHK',sqft:953,price:'3.60Cr'},
      { bhk: '4 BHK',sqft:158,price:'5.80Cr'}
    ],
    possession: 'December 2025',
    structure: '2B + Stilt + 21',
    reraId: 'P51900031165',
    images: [
      '/adani-the-views-ghatkopar56.jpg',
      '/adani-the-views-ghatkopar57.jpg',
      '/adani-the-views-ghatkopar58.jpg',
      '/adani-the-views-ghatkopar59.jpg',
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
  type: 'Commercial',
  possession: 'Under Construction',
  price: false,
  structure: '2B + Stilt + 6',
  reraId: '',
  images: [
    '/cyberthum-sector-140a1254.jpg',
    '/cyberthum-sector-140a4144.jpg',
    '/cyberthum-sector-140a6969.jpg',
    '/cyberthum-sector-140a7858.jpg',
    '/cyberthum-sector-140a45747.jpg',
    ],
  },
  {
  id: 'grandthum-techzone-4',
  name: 'Grandthum',
  developer: 'Bhutani Group',
  location: 'Techzone 4',

  city: 'Greater Noida',
  type:"Residential",
   price: false,
  state: 'Uttar Pradesh',
  region: 'Noida Extension',
  units: [
   
  ],
  possession: 'Under Construction',
  structure: '2B + Stilt + 8',
  reraId: '',
  images: [
    '/grandthum-techzone-2525.jpg',
    '/grandthum-techzone-4732.jpg',
    '/grandthum-techzone-5858.jpg',
    '/grandthum-techzone-6974.jpg',
    '/grandthum-techzone-6985.jpg',
    '/grandthum-techzone-7887.jpg'
  ],
  },
  {
    id: 'adani-codename-triumph-kanjurmarg',
    name: 'Codename Triumph',
    developer: 'Adani Realty',
    location: 'Kanjurmarg',
    city: 'Mumbai',
    state: 'Maharashtra',
     association:"Prudent Properties",
    region: 'CST to Mulund',
    units: [
      { bhk: '2BHK',sqft:738,price:'2.09Cr'},
      { bhk: '2BHK',sqft:826,price:'2.48Cr'},
      { bhk: '3BHK',sqft:117,price:'3.42Cr'},
      { bhk: '3BHK',sqft:134,price:'4.20Cr'}
    ],
    possession: 'December 2028',
    structure: 'G + 3P + 34',
    reraId: 'P51800055166',
    images: [
      '/adani-codename-triumph-kanjurmarg62.jpg',
      '/adani-codename-triumph-kanjurmarg63.jpg',
      '/adani-codename-triumph-kanjurmarg64.jpg',
      '/adani-codename-triumph-kanjurmarg65.jpg',
      '/adani-codename-triumph-kanjurmarg66.jpg',
    ]
  },
  {
    id: 'piramal-revanta-mulund',
    name: 'Piramal Revanta',
    developer: 'Piramal Realty',
    location: 'Mulund',
     association:"Prudent Properties",
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2BHK',sqft:854,price:'2.77Cr'},
      { bhk: '3BHK',sqft:119,price:'3.72Cr'}
    ],
    possession: 'November 2028',
    structure: 'G + 47',
    reraId: 'P51800018099',
    images: [
      '/piramal-revanta-mulund74.jpg',
      '/piramal-revanta-mulund75.jpg',
      '/piramal-revanta-mulund76.jpg',
      '/piramal-revanta-mulund77.jpg',
      '/piramal-revanta-mulund78.jpg',
    ]
  },
  {
    id: 'prestige-city-mulund-forest-hills',
    name: 'Prestige City - Forest Hills',
    developer: 'Prestige Group',
    location: 'Mulund',
    city: 'Mumbai',
    state: 'Maharashtra',
     association:"Prudent Properties",
    region: 'CST to Mulund',
    units: [
      { bhk: '3BHK',sqft:102,price:'2.89Cr' },
      { bhk: '3BHK',sqft:133,price:'3.79Cr' },
      { bhk: '4BHK',sqft:175,price:'5.09Cr'},
      { bhk: '4BHK',sqft:213,price:'6.09Cr'}
    ],
    possession: 'December 2029',
    structure: 'G + 54',
    reraId: 'P51800077457',
    images: [
      '/prestige-city-mulund-forest-hills77.jpg',
      '/prestige-city-mulund-forest-hills78.jpg',
      '/prestige-city-mulund-forest-hills79.jpg',
      '/prestige-city-mulund-forest-hills80.jpg',
      '/prestige-city-mulund-forest-hills81.jpg',
    ]
  },
  {
    id: 'prestige-city-mulund-seista',
    name: 'Prestige City - Seista',
    developer: 'Prestige Group',
    location: 'Mulund',
     association:"Prudent Properties",
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK',sqft:102,price:'2.75Cr'},
      { bhk: '3 BHK',sqft:136,price:'3.80Cr'},
      { bhk: '3 BHK',sqft:148,price:'4.40Cr'}
    ],
    possession: 'June 2025',
    structure: 'G + 54',
    reraId: 'P51800005285',
    images: [
      '/prestige-city-mulund-seista82.jpg',
      '/prestige-city-mulund-seista83.jpg',
      '/prestige-city-mulund-seista84.jpg',
      '/prestige-city-mulund-seista85.jpg',
      '/prestige-city-mulund-seista86.jpg',
    ]
  },
  {
    id: 'prestige-city-mulund-bellanza',
    name: 'Prestige City - Bellanza',
    developer: 'Prestige Group',
    location: 'Mulund',
    city: 'Mumbai',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2BHK',sqft:842,price:'2.23Cr'},
      { bhk: '3BHK',sqft:910,price:'2.35Cr'},
      { bhk: '4BHK Duplex',sqft:1450,price:'4.66Cr'},
      { bhk: '4BHK Duplex',sqft:1722,price:'5.29Cr'}
    ],
    possession: 'June 2026',
    structure: 'G + 54',
    reraId: 'P51800045339',
    images: [
      '/prestige-city-mulund-bellanza89.jpg',
      '/prestige-city-mulund-bellanza90.jpg',
      '/prestige-city-mulund-bellanza91.jpg',
      '/prestige-city-mulund-bellanza92.jpg',
      '/prestige-city-mulund-bellanza93.jpg',
      '/prestige-city-mulund-bellanza94.jpg',
    ]
  },
  {
    id: 'oberoi-enigma-mulund',
    name: 'Enigma',
    developer: 'Oberoi Realty',
    location: 'LBS Road, Mulund',
    city: 'Mumbai',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '3BHK',sqft:112, price:'4.60Cr'},
      { bhk: '4BHK',sqft:213,price:'7.10Cr'}
    ],
    possession: 'Ready Possession',
    structure: 'Stilt + 62',
    reraId: 'P51800002656',
    images: [
      '/oberoi-enigma-mulund96.jpg',
      '/oberoi-enigma-mulund97.jpg',
      '/oberoi-enigma-mulund98.jpg',
      '/oberoi-enigma-mulund99.jpg',
      '/oberoi-enigma-mulund100.jpg',
      '/oberoi-enigma-mulund101.jpg',
      '/oberoi-enigma-mulund102.jpg',
    ]
  },
  {
    id: 'oberoi-eternia-mulund',
    name: 'Eternia',
    developer: 'Oberoi Realty',
    location: 'LBS Road, Mulund',
     association:"Prudent Properties",
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '3 BHK', sqft:932, price:'3.40Cr'},
      { bhk: '3 BHK', sqft:104, price:'3.95Cr '},
    ],
    possession: 'Ready Possession',
    structure: 'Stilt + 60',
    reraId: 'P51800006141',
    images: [
      'oberoi-eternia-mulund/105.jfif',
      'oberoi-eternia-mulund/106.jfif',
      'oberoi-eternia-mulund/107.jfif',
      'oberoi-eternia-mulund/108.jpg',
      'oberoi-eternia-mulund/109.jfif',
    ]
  },
  {
    id: 'lt-rejuve-360-mulund',
    name: 'Rejuve 360',
    developer: 'L&T Realty',
    location: 'LBS Road, Mulund',
     association:"Prudent Properties",
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK',sqft:750,price:'2.41Cr'},
      { bhk: '2.5 BHK',sqft:912,price:'2.91Cr'},
      { bhk: '3.5 BHK',sqft:131,price:'4.25Cr'}
    ],
    possession: 'June 2027',
    structure: 'G + 57',
    reraId: 'P51800023075',
    images: [
      'lt-rejuve-360-mulund/112.jfif',
      'lt-rejuve-360-mulund/113.jpg',
      'lt-rejuve-360-mulund/114.jpg',
      'lt-rejuve-360-mulund/115.jfif',
      'lt-rejuve-360-mulund/116.jfif',
      'lt-rejuve-360-mulund/117.jfif',
    ]
  },
  {
    id: 'kalpataru-summit-mulund',
    name: 'Kalpataru Summit',
    developer: 'Kalpataru',
    location: 'LBS Marg, Mulund',
     association:"Prudent Properties",
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: 'Office',sqft:454,price:'1.76Cr'},
      { bhk: 'Office',sqft:771,price:'2.87Cr'},
      { bhk: 'Office',sqft:973,price:'3.58Cr'}
    ],
    possession: 'July 2026',
    structure: 'G + 33',
    reraId: 'P51800033272',
    images: [
      'kalpataru-summit-mulund/6.jpg',
      'kalpataru-summit-mulund/787.jfif',
      'kalpataru-summit-mulund/4454.jfif',
      'kalpataru-summit-mulund/4555.webp',
      'kalpataru-summit-mulund/4747.jfif',
      'kalpataru-summit-mulund/41444.jfif',
      'kalpataru-summit-mulund/74747.jfif',
      'kalpataru-summit-mulund/74858.jfif',
    ]
  },
  {
    id: 'puravankara-clermont-chembur',
    name: 'Clermont',
    developer: 'Puravankara',
    location: 'Chembur',
     association:"Prudent Properties",
    city: 'Mumbai',
    state: 'Maharashtra',
    region: 'CST to Mulund',
    units: [
      { bhk: '2 BHK',sqft:533,price:'2.45Cr'},
      { bhk: '3 BHK',sqft:975,price:'4.45Cr'}
    ],
    possession: 'June 2027',
    structure: 'G + 17',
    reraId: 'P51800028427',
    images: [
      'puravankara-clermont-chembur/568.jfif',
      'puravankara-clermont-chembur/858.jfif',
      'puravankara-clermont-chembur/3233.jfif',
      'puravankara-clermont-chembur/4747.jfif',
      'puravankara-clermont-chembur/525585.jfif',
      'puravankara-clermont-chembur/788778.jfif',
    ]
  },
  {
    id: 'godrej-ascend-thane',
    name: 'Godrej Ascend',
    developer: 'Godrej Properties',
    location: 'Kolshet Road,Thane',
     association:"Prudent Properties",
    city: 'Thane',
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2 BHK',sqft:734,price:'1.8 Cr'},
      { bhk: '3 BHK',sqft:855,price:'1.99Cr'},
      { bhk: '3 BHK',sqft:971,price:'2.69Cr'}
    ],
    possession: 'December 2028',
    structure: 'G + 44',
    reraId: 'P51700053668',
    images: [
      'godrej-ascend-thane/414.jfif',
      'godrej-ascend-thane/1414.jfif',
      'godrej-ascend-thane/2525.jfif',
      'godrej-ascend-thane/8588.jfif',
      'godrej-ascend-thane/25252.jfif',
      'godrej-ascend-thane/78787.png',
      'godrej-ascend-thane/87878.jfif',
    ]
  },
  {
    id: 'godrej-forest-ville-thane',
    name: 'Forest Ville',
    developer: 'Godrej Properties',
    location: 'Kolshet Road,Thane',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3 BHK',sqft:109, price:'1.87Cr' },
      { bhk: '3 BHK + Studio',sqft:136,price:'2.49 Cr' }
    ],
    possession: 'December 2029',
    structure: 'G + 60',
    reraId: 'P51700050312',
    images: [
      'godrej-forest-ville-thane/858.webp',
      'godrej-forest-ville-thane/4747.jfif',
      'godrej-forest-ville-thane/7477.jfif',
      'godrej-forest-ville-thane/8588.jfif',
      'godrej-forest-ville-thane/858585.jfif',
    ]
  },
  {
    id: 'raymond-tenx-habitat-thane',
    name: 'Raymond TenX Habitat',
    developer: 'Raymond Realty',
    location: 'Pokhran Road,Thane',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2BHK',sqft:595,price:'1.62Cr'},
      { bhk: '2BHK', sqft:670,price:'1.90Cr'}
    ],
    possession: 'December 2025',
    structure: 'G + 42',
    reraId: 'P51700034190',
    images: [
      'raymond-tenx-habitat-thane/2121.jfif',
      'raymond-tenx-habitat-thane/5258.jpg',
      'raymond-tenx-habitat-thane/7877.jfif',
      'raymond-tenx-habitat-thane/8989.jpg',
      'raymond-tenx-habitat-thane/74747.jpg',
      'raymond-tenx-habitat-thane/74774.webp',
    ]
  },
   {
    id: 'piramal-aranya-rani-baug',
    name: ': PIRAMAL REALTY',
    developer: ' PIRAMAL REALTY',
    location: ' BYCULLA, MUMBAI',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3BHK',sqft:1050, price:'6.10Cr'},
      { bhk: '4BHK',sqft:2844, price:'14.69Cr'}
    ],
    possession: ' READY POSSESION',
    structure: 'G + 52',
    reraId: 'P51900018039',
    images: [
      'piramal-aranya-byculla/11.jfif',
      'piramal-aranya-byculla/12.jfif',
      'piramal-aranya-byculla/13.jfif',
      'piramal-aranya-byculla/14.jfif',
      'piramal-aranya-byculla/15.jfif',
    ]
  },
 {
    id: 'the-views-ghatkopar',
    name: ': THE VIEWS - GHATKOPAR',
    developer: '  ADANI REALTY',
    location: '  Ghatkopar,Mumbai',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2BHK', sqft: 834, price: '2.88Cr' },
      { bhk: '2BHK', sqft: 953, price: '3.60Cr' },
      { bhk: '4BHK', sqft: 1587, price: '5.80Cr' }
    ],
    possession: ' Dec 2025',
    structure: '2B + Stilt + 21',
    reraId: 'P51900031165',
    images: [
      'piramal-aranya-byculla/11.jfif',
      'piramal-aranya-byculla/12.jfif',
      'piramal-aranya-byculla/13.jfif',
      'piramal-aranya-byculla/14.jfif',
      'piramal-aranya-byculla/15.jfif',
    ]
  },
   {
    id: 'codename-triumph-kanjurmarg',
    name: ': CODENAME TRIUMPH-KANJURMARG',
    developer: ' ADANI REALTY',
    location: '  KANJURMARG,Mumbai',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2BHK', sqft: 738, price: '2.09Cr' },
      { bhk: '2BHK', sqft: 826, price: '2.48Cr' },
      { bhk: '3BHK', sqft: 1175, price: '3.42Cr' },
      { bhk: '3BHK', sqft: 1347, price: '4.20Cr' }
    ],
    possession: ' READY POSSESION',
    structure: 'G + 52',
    reraId: 'P51900018039',
    images: [
      'piramal-aranya-byculla/11.jfif',
      'piramal-aranya-byculla/12.jfif',
      'piramal-aranya-byculla/13.jfif',
      'piramal-aranya-byculla/14.jfif',
      'piramal-aranya-byculla/15.jfif',
    ]
  },
 {
    id: '9 PBR – PALM BEACH ROAD',
    name: ':9 PBR – PALM BEACH ROAD',
    developer: ' ADANI REALTY',
    location: ' Palm Beach Road, Mumbai',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2.5BHK', sqft: 1070, price: '3.60Cr' },
      { bhk: '3BHK', sqft: 1300, price: '4.82Cr' },
      { bhk: '3BHK', sqft: 1560, price: '6.24Cr' },
      { bhk: '3.5BHK', sqft: 1770, price: '7.0Cr' }
    ],
    possession: ' READY POSSESION',
    structure: ' 2B+G+12',
    reraId: ' P51700032812',
    images: [
      '9 PBR – PALM BEACH ROAD/4747.jfif',
      '9 PBR – PALM BEACH ROAD/6369.jfif',
      '9 PBR – PALM BEACH ROAD/8589.jfif',
      '9 PBR – PALM BEACH ROAD/8787.jfif',
      '9 PBR – PALM BEACH ROAD/9689.jfif',
    ]
  },
  {
   id: 'chesterton-thane',
    name: 'CHESTERTON - THAN',
    developer: ' House Of Hiranandani',
    location: '  Thane, Mumbai',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: 'SHOP', sqft: 3885, price: '2.11Cr' }
    ],
    possession:' READY POSSESION',
    structure: 'G + 10',
    reraId: ' P51700019400',
    images: [
      'CHESTERTON - THANE/565.jfif',
      'CHESTERTON - THANE/747.jpg',
      'CHESTERTON - THANE/898.jfif',
      'CHESTERTON - THANE/969.jpg',
      'CHESTERTON - THANE/47474.webp',
    ]
  },
  {
    id: 'west-gate-thane',
    name: 'WEST GATE - THANE',
    developer: ': House Of Hiranandani.',
    location: '  Waghbil,Thane',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2 BHK',sqft: 483454 ,price:'1.23Cr' },
      { bhk: '2 BHK',sqft: 677212, price:'1.72Cr' },
      { bhk: '3 BHK',sqft: 1095235,price:'3.01Cr' },
      { bhk: '4 BHK',sqft : 1622363, price:'5.06Cr' }
    ],
    possession: ' READY POSSESION',
    structure: '  Stilt+47',
    reraId: '  Stilt+4',
    images: [
      'WESTGATE-THANE/2525.jfif',
      'WESTGATE-THANE/3687.avif',
      'WESTGATE-THANE/4545.jfif',
      'WESTGATE-THANE/6565.jfif',
      'WESTGATE-THANE/6969.jfif',
    ]
  },
  {
    id: 'godrej-nurture-bhandup',
    name: 'GODREJ NURTURE-BHANDUP',
    developer: ':  GODREJ PROPERTIES.',
    location: ' : LBS Marg, Bhandup',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2BHK', sqft: 655, price: '1.65Cr' },
      { bhk: '2BHK', sqft: 704, price: '1.91Cr' },
      { bhk: '3BHK', sqft: 901, price: '2.48Cr' }
    ],
    possession: ' READY POSSESION',
    structure: '  : G+40',
    reraId: '   P51800077080',
    images: [
      'GODREJ NURTURE-BHANDUP/67.webp',
      'GODREJ NURTURE-BHANDUP/68.jfif',
      'GODREJ NURTURE-BHANDUP/69.jpeg',
      'GODREJ NURTURE-BHANDUP/70.jfif',
      'GODREJ NURTURE-BHANDUP/71.jfif',
    ]
  },
{
    id: 'forest-ville-thane',
    name: 'FOREST VILLE -THANE',
    developer: ' Godrej Properties.',
    location: '   Kolshet Rd, Thane',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3BHK', sqft: 1090, price: '1.87Cr' },
      { bhk: '3BHK+Studio', sqft: 1367, price: '2.49Cr' }
    ],
    possession: ' December 2029',
    structure: '   G+60',
    reraId: '  P51700050312',
    images: [
      'FOREST VILLE -THANE/1447.jfif',
      'FOREST VILLE -THANE/4747.jfif',
      'FOREST VILLE -THANE/5874.jfif',
      'FOREST VILLE -THANE/6968.jfif',
      'FOREST VILLE -THANE/85878.jfif',
    ]
  },
  {
    id: 'westgate-thane-premium',
    name: 'WEST GATE - THANE (Premium)',
    developer: ': House Of Hiranandani.',
    location: '  Waghbil,Thane',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2BHK', sqft: 4834, price: '1.23Cr' },
      { bhk: '2BHK', sqft: 6772, price: '1.72Cr' },
      { bhk: '3BHK', sqft: 10952, price: '3.01Cr' },
      { bhk: '4BHK', sqft: 16223, price: '5.06Cr' }
    ],
    possession: ' READY POSSESION',
    structure: '  Stilt+47',
    reraId: '  Stilt+4',
    images: [
      'WESTGATE-THANE/2525.jfif',
      'WESTGATE-THANE/3687.avif',
      'WESTGATE-THANE/4545.jfif',
      'WESTGATE-THANE/6565.jfif',
      'WESTGATE-THANE/74747.jfif',
    ]
  },
{
    id: 'raymond-tenx-era',
    name: 'RAYMOND REALTY',
    developer: ': House Of Hiranandani.',
    location: '   MAHARASHTRA',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2BHK', sqft: 615, price: '1.66Cr' },
      { bhk: '2BHK', sqft: 711, price: '1.89Cr' },
      { bhk: '3BHK', sqft: 814, price: '2.24Cr' },
      { bhk: '3BHK', sqft: 894, price: '2.43Cr' }
    ],
    possession: '  DECEMBER 2027',
    structure: '  G + 42',
    reraId: '  Stilt+4',
    images: [
      'RAYMOND TENX ERA/4144.jpeg',
      'RAYMOND TENX ERA/6969.jfif',
      'RAYMOND TENX ERA/25858.jfif',
      'RAYMOND TENX ERA/74747.jfif',
    ]
  },
  {
    id: 'the-address-by-gs',
    name: 'THE ADDRESS BY GS',
    developer: ':  RAYMOND REALTY.',
    location: '   MAHARASHTRA',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3BHK', sqft: 1217, price: '3.35Cr' },
      { bhk: '4BHK', sqft: 1548, price: '4.19Cr' }
    ],
    possession: ' DEC 2027',
    structure: '   G + 40',
    reraId: '  Stilt+4',
    images: [
      'THE ADDRESS BY GS/5252.jpg',
      'THE ADDRESS BY GS/5858.webp',
      'THE ADDRESS BY GS/6996.jfif',
      'THE ADDRESS BY GS/25898.jfif',
    ]
  },
  {
    id: 'park-avenue-high-street',
    name: 'THE ADDRESS BY GS',
    developer: ':  RAYMOND REALTY.',
    location: '   MAHARASHTRA',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3BHK', sqft: 1217, price: '3.35Cr' },
      { bhk: '4BHK', sqft: 1548, price: '4.19Cr' }
    ],
    possession: ' DEC 2027',
    structure: '   G + 40',
    reraId: '  Stilt+4',
    images: [
      'THE ADDRESS BY GS/2124.jfif',
      'THE ADDRESS BY GS/3674.jfif',
      'THE ADDRESS BY GS/5256.jfif',
      'THE ADDRESS BY GS/8587.jfif',
      'THE ADDRESS BY GS/9697.jfif',
    ]
  },
  {
    id: 'solitaire-thane',
    name: 'SOLITAIRE - THANE',
    developer: '  House Of Hiranandani.',
    location: '   : GB Road, Thane',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '1BHK', sqft: 409, price: '1.05Cr' }
    ],
    possession: ' Ready Possession',
    structure: '   : G + 36',
    reraId: '   P51700000413',
    images: [
      'SOLITAIRE - THANE/1241.jfif',
      'SOLITAIRE - THANE/5256.jfif',
      'SOLITAIRE - THANE/6589.jfif',
      'SOLITAIRE - THANE/7474.jfif',
    ]
  },
  {
    id: 'chesterton-thane-shop',
    name: 'CHESTERTON - THANE (Shop)',
    developer: '  House Of Hiranandani.',
    location: '   : : Thane, Mumbai',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: 'SHOP', sqft: 389, price: '2.11Cr' }
    ],
    possession: ' Ready Possession',
    structure: '   : G + 10',
    reraId: '    P51700019400',
    images: [
      'CHESTERTON - THANE/565.jfif',
      'CHESTERTON - THANE/747.jpg',
      'CHESTERTON - THANE/898.jfif',
      'CHESTERTON - THANE/969.jpg',
      'CHESTERTON - THANE/47474.webp',
    ]
  },
  {
    id: 'tata-serein-thane',
    name: 'TATA SEREIN - THANE',
    developer: '  TATA Housing.',
    location:'Pokhran Road No.2, Thane',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3 BHK',sqft:1140,price:'3.25 Cr' }
    ],
    possession: ' May 2027',
    structure: '   : G + 27',
    reraId: '    P51700052235',
    images: [
      'Contact for Images',
    ]
  },
  {
    id: 'rustomjee-ubtown-urbania-thane',
    name: 'RUSTOMJEE UBTOWN URBANIA THANE',
    developer: ' RUSTOMJEE.',
    location: ': Majiwada, Thane',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk:'2 BHK',sqft:579 ,price:'1.29 Cr' },
      { bhk:'2 BHK',sqft:682 ,price:'1.70 Cr' },
      { bhk:'3 BHK',sqft:878 ,price:'2.15 Cr' },
      { bhk:'3 BHK',sqft:1121,price:' 2.95 Cr' },
    ],
    possession: '  December 2027',
    structure: '   :  G + 53',
    reraId: '    P51700050803',
    images: [
      'Contact for Images',
    ]
  },
  {
    id: 'verdant-vistas-thane',
    name: 'VERDANT VISTAS -THANE',
    developer: ' RUSTOMJEE.',
    location: ': Majiwada, Thane',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3BHK', sqft: 1157, price: '2.71Cr' },
      { bhk: '4BHK', sqft: 1760, price: '4.38Cr' },
      { bhk: '4BHK', sqft: 2204, price: '5.69Cr' }
    ],
    possession: 'December 2029',
    structure: 'G+46',
    reraId: 'P51700077136',
    images: [
      'VERDANT VISTAS -THANE121.jpg',
      'VERDANT VISTAS -THANE212.jpg',
      'VERDANT VISTAS -THANE656.jpg',
      'VERDANT VISTAS -THANE858.jpg',
    ]
  },
  {
    id: 'PIRAMAL VAIKUNTH – THANE',
    name: 'PIRAMAL VAIKUNTH – THANE',
    developer: ' PIRAMAL REALTY.',
    location: ':  Balkum, Thane.',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '1.5BHK', sqft: 455, price: '1.12Cr' },
      { bhk: '2BHK', sqft: 530, price: '1.32Cr' },
      { bhk: '2BHK', sqft: 555, price: '1.49Cr' }
    ],
    possession: 'December 2029',
    structure: 'G+46',
    reraId: 'P51700077136',
    images: [
      'PIRAMAL VAIKUNTH – THANE658.jpg',
      'PIRAMAL VAIKUNTH – THANE747.jpg',
      'PIRAMAL VAIKUNTH – THANE858.jpg',
      'PIRAMAL VAIKUNTH – THANE969.jpg',
    ]
  },
  {
    id: 'KALPATARU PARK CITY',
    name: 'KALPATARU PARK CITY',
    developer: '  KALPATARU.',
    location: ':   Kolshet, Thane.',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '1BHK', sqft: 468, price: '94Lacs' },
      { bhk: '2BHK', sqft: 531, price: '1.25Cr' },
      { bhk: '2BHK', sqft: 665, price: '1.52Cr' }
    ],
    possession: 'MARCH 2027',
    structure: '6P + 40',
    reraId: 'P51700055574',
    images: [
      'KALPATARU PARK CITY656.jpg',
      'KALPATARU PARK CITY747.jpg',
      'KALPATARU PARK CITY858.jpg',
      'KALPATARU PARK CITY878.jpg',
      'KALPATARU PARK CITY969.jpg',
    ]
  },
  {
    id: 'HOH – Woodspring KALYAN',
    name: 'HOH – Woodspring KALYAN',
    developer: 'House Of Hiranandani',
    location: ': Kalyan, Mumbai',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '1BHK', sqft: 445, price: '56.89Lacs' },
      { bhk: '1BHK', sqft: 461, price: '61.52Lacs' },
      { bhk: '2BHK', sqft: 642, price: '83.66Lacs' }
    ],
    possession: 'Dec 2027',
    structure: 'G + 25',
    reraId: 'P51700050785',
    images: [
      'HOH – Woodspring KALYAN258.jpg',
      'HOH – Woodspring KALYAN369.jpg',
      'HOH – Woodspring KALYAN747.jpg',
      'HOH – Woodspring KALYAN895.jpg',
      'HOH – Woodspring KALYAN985.jpg',
    ]
  },
  {
    id: 'GODREJ NIRVAAN - KALYAN',
    name: 'GODREJ NIRVAAN - KALYAN',
    developer: ' Godrej Properties',
    location: ': Thane Extension',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '1BHK', sqft: 461, price: '53.99Lacs' },
      { bhk: '2BHK', sqft: 595, price: '75.99Lacs' },
      { bhk: '2BHK', sqft: 675, price: '85.99Lacs' }
    ],
    possession: 'Ready Possession',
    structure: 'G + 25',
    reraId: 'P51700022148',
    images: [
      'GODREJ NIRVAAN - KALYAN365.jpg',
      'GODREJ NIRVAAN - KALYAN658.jpg',
      'GODREJ NIRVAAN - KALYAN854.jpg',
      'GODREJ NIRVAAN - KALYAN968.jpg',
    ]
  },
  {
    id: 'GODREJ RIVIERA - KALYAN',
    name: 'GODREJ RIVIERA - KALYAN',
    developer: ' Godrej Properties',
    location: '  Ambivali, Kalyan',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '1BHK', sqft: 371, price: '44.99Lacs' },
      { bhk: '2BHK', sqft: 503, price: '67.99Lacs' },
      { bhk: '2BHK', sqft: 660, price: '89.99Lacs' }
    ],
    possession: 'December 2026',
    structure: 'G + 22',
    reraId: 'P51700032552',
    images: [
      'GODREJ RIVIERA - KALYAN471.jpg',
      'GODREJ RIVIERA - KALYAN696.jpg',
      'GODREJ RIVIERA - KALYAN748.jpg',
      'GODREJ RIVIERA - KALYAN898.jpg',
    ]
  },
{
    id: 'BIRLA VANYA - KALYAN',
    name: 'BIRLA VANYA - KALYAN',
    developer: '  BIRLA ESTATES',
    location: '   Shahad, Kalyan.',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '2BHK', sqft: 729, price: '1.10Cr' },
      { bhk: '3BHK', sqft: 877, price: '1.45Cr' },
      { bhk: '4BHK', sqft: 1315, price: '2.35Cr' }
    ],
    possession: 'Ready Possession',
    structure: 'G + 32',
    reraId: 'P51700019178',
    images: [
      'BIRLA VANYA - KALYAN636.jpg',
      'BIRLA VANYA - KALYAN747.jpg',
      'BIRLA VANYA - KALYAN857.jpg',
      'BIRLA VANYA - KALYAN895.jpg',
    ]
  },
  {
    id: 'METROPLEX - SHILPHATA',
    name: 'METROPLEX - SHILPHATA',
    developer: ' PROVIDENT HOUSING',
    location: '   Shilphata, Thane.',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '1BHK', sqft: 459, price: '54Lacs' },
      { bhk: '2BHK', sqft: 643, price: '84Lacs' },
      { bhk: '2BHK', sqft: 749, price: '1.08Cr' }
    ],
    possession: 'Dec 2025',
    structure: 'G + 30',
    reraId: 'P51700025841',
    images: [
      'METROPLEX - SHILPHATA421.jpg',
      'METROPLEX - SHILPHATA475.jpg',
      'METROPLEX - SHILPHATA858.jpg',
      'METROPLEX - SHILPHATA969.jpg',
    ]
  },
{
    id: 'rustomjee-prive-bkc',
    name: 'RUSTOMJEE PRIVE - BKC',
    developer: ' RUSTOMJEE',
    location: '   BKC.',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3BHK', sqft: 1088, price: '6Cr' },
      { bhk: '3BHK', sqft: 1350, price: '7.25Cr' }
    ],
    possession: 'NOVEMBER 2029',
    structure: 'G + 19',
    reraId: 'P51800079537',
    images: [
      'RUSTOMJEE PRIVE - BKC475.jpg',
      'RUSTOMJEE PRIVE - BKC639.jpg',
      'RUSTOMJEE PRIVE - BKC748.jpg',
      'RUSTOMJEE PRIVE - BKC818.jpg',
    ]
  },
  {
    id: 'ten-bkc-bandra',
    name: 'TEN BKC - BANDRA',
    developer: '  ADANI REALTY',
    location: '    KALANAGAR BANDRA.',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3BHK', sqft: 1050, price: '6.95Cr' },
      { bhk: '3BHK', sqft: 1389, price: '9.10Cr' }
    ],
    possession: 'March 2025',
    structure: '2B + G + 22',
    reraId: 'P51800004889',
    images: [
      'TEN BKC - BANDRA457.jpg',
      'TEN BKC - BANDRA747.jpg',
      'TEN BKC - BANDRA888.jpg',
      'TEN BKC - BANDRA969.jpg',
    ]
  },
  {
    id: 'rustomjee-erika-bandra',
    name: 'RUSTOMJEE ERIKA - BANDRA',
    developer: '  : RUSTOMJEE',
    location: '    KALANAGAR BANDRA.',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk: '3BHK', sqft: 541, price: '3.10Cr' },
      { bhk: '3BHK', sqft: 620, price: '3.50Cr' }
    ],
    possession: 'December 2025',
    structure: 'G + 23',
    reraId: 'P51800033014',
    images: [
      'RUSTOMJEE ERIKA - BANDRA124.jpg',
      'RUSTOMJEE ERIKA - BANDRA457.jpg',
      'RUSTOMJEE ERIKA - BANDRA696.jpg',
      'RUSTOMJEE ERIKA - BANDRA859.jpg',
    ]
  },
  {
    id: 'rustomjee-parishram-pali-hill',
    name: 'RUSTOMJEE PARISHRAM – PALI HILL',
    developer: '  : RUSTOMJEE',
    location: '    Bandra, Pali Hill..',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk:'4 BHK',sqft:2725,price:'42.80 Cr*' },
      { bhk:'4BHK',sqft:3672,price:'54.81 Cr' },
],
    possession: ':    Ready Possession.',
    structure: '    :  G + 14',
    reraId: '   P51800005738',
    images: [
      'RUSTOMJEE PARISHRAM – PALI HILL585.jpg',
      'RUSTOMJEE PARISHRAM – PALI HILL698.jpg',
      'RUSTOMJEE PARISHRAM – PALI HILL785.jpg',
      'RUSTOMJEE PARISHRAM – PALI HILL885.jpg',
      'RUSTOMJEE PARISHRAM – PALI HILL968.jpg',
    ]
  },
  {
    id: 'WESTBAY – ANDHERI',
    name: 'WESTBAY – ANDHERI',
    developer: '  :  ADANI REALTY',
    location: '   : ANDHERI (W)..',
    city: 'Thane',
     association:"Prudent Properties",
    state: 'Maharashtra',
    region: 'Thane to Kalyan',
    units: [
      { bhk:'3BHK',sqft:1153,price:'4.56 Cr*' },
      { bhk:'3BHK',sqft:1552,price:'5.27 Cr' },
],
    possession: 'OCTOBER 2028',
    structure: 'G + 24',
    reraId: 'P51800047539',
    images: [
      'WESTBAY – ANDHERI/662.jfif',
      'WESTBAY – ANDHERI/745.jfif',
      'WESTBAY – ANDHERI/747.jpg',
      'WESTBAY – ANDHERI/969.jpeg',
    ]
  },
    {
    id: 'elixer-powai',
    name: 'ELIXER - POWAI',
    developer: '  :   L&T REALTY',
    location: '   : POWAI Mumbai',
    city: 'Mumbai',
     association:" Powai, Mumbai",
    state: 'Maharashtra',
    region: 'Mumbai Central',
    units: [
      { bhk:'2 BHK',sqft:600,price:'2.45 Cr*' },
      { bhk: '3 BHK', sqft:990, price:'3.72 Cr' },
],
    possession: 'OCTOBER 2028',
    structure: '4B + G + 24',
    reraId: 'P51800047539',
    images: [
      'Contact for Images',
    ],
  }]

const normalizePublicAssetPath = (path: string) => {
  if (!path) return path
  const trimmedPath = path.trim()
  if (
    trimmedPath.startsWith('/') ||
    trimmedPath.startsWith('http://') ||
    trimmedPath.startsWith('https://') ||
    trimmedPath.startsWith('data:')
  ) {
    return trimmedPath
  }

  return `/${trimmedPath}`
}

export const projects: Project[] = rawProjects.map((project) => ({
  ...project,
  images: project.images.map(normalizePublicAssetPath),
}))

