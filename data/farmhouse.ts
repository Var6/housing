export type FarmhouseProperty = {
  id: string
  name: string
  location: string
  city: string
  state: string
  type: string
  price: string
  priceRange: string
  area: string
  bedrooms: string
  bathrooms: string
  description: string
  image: string
  images: string[]
  features: string[]
  highlights: string[]
  nearbyPlaces: string[]
}

export const farmhouseProperties: FarmhouseProperty[] = [
  {
    id: 'centurion-farm-house-jewar',
    name: 'Centurion Farm House',
    location: 'Jewar Airport, Yamuna Expressway',
    city: 'Greater Noida',
    state: 'Uttar Pradesh',
    type: 'Premium Farmhouse',
    price: 'On Request',
    priceRange: 'Premium Segment',
    area: '4500 sq.ft',
    bedrooms: 'Independent Farmhouse',
    bathrooms: 'Modern Fittings',
    description:
      'Centurion Farm House offers premium farmhouse living with peaceful surroundings and strong connectivity to the Yamuna Expressway and Jewar Airport zone.',
    image: '/centurianfarmhousejewar/4.jpg',
    images: [
      '/centurianfarmhousejewar/4.jpg',
      '/centurianfarmhousejewar/5.jpg',
      '/centurianfarmhousejewar/6.jpg',
    ],
    features: [
      'Spacious independent farmhouse layout',
      'Green and low-density environment',
      'Secure gated access',
      'Weekend and long-stay friendly',
    ],
    highlights: [
      'Strategic location near Jewar Airport growth corridor',
      'Excellent potential for capital appreciation',
      'Ideal for private family use and leisure stays',
    ],
    nearbyPlaces: [
      'Jewar International Airport - approx. 5 minutes',
      'Yamuna Expressway - approx. 2 minutes',
      'Healthcare centres in nearby sectors',
      'Retail and daily-needs hubs in reachable distance',
    ],
  },
  {
    id: 'lotus-farms-techzone',
    name: 'Lotus Farms House',
    location: 'Techzone, Greater Noida',
    city: 'Greater Noida',
    state: 'Uttar Pradesh',
    type: 'Luxury Farmhouse Community',
    price: 'On Request',
    priceRange: 'Luxury Segment',
    area: 'Multiple Plot Sizes Available',
    bedrooms: 'Independent Farmhouse',
    bathrooms: 'Premium Fittings',
    description:
      'Lotus Farms House blends natural open spaces with modern luxury planning in the Techzone belt, suitable for both lifestyle and investment buyers.',
    image: '/lotus-farms-techzone/5.jfif',
    images: [
      '/lotus-farms-techzone/5.jfif',
      '/lotus-farms-techzone/6.jpeg',
      '/lotus-farms-techzone/7.jpg',
      '/lotus-farms-techzone/8.jpg',
    ],
    features: [
      'Luxury gated farmhouse community',
      'Open green surroundings and low congestion',
      'Strong road connectivity to Noida and Delhi NCR',
      'Suitable for weekend retreat and full-time living',
    ],
    highlights: [
      'Located in fast-developing Noida extension zone',
      'Growing infrastructure and demand profile',
      'Balanced lifestyle and investment potential',
    ],
    nearbyPlaces: [
      'Noida-Greater Noida Expressway - direct access',
      'Pari Chowk - approx. 15 minutes',
      'Knowledge Park - approx. 20 minutes',
      'Educational institutions in close proximity',
    ],
  },
]
