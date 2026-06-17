export interface Unit {
  bhk: string
  sqft: number
  price: string
  id?: string
  title?: string
  type?: string
  area?: string
  bedrooms?: number
  bathrooms?: number
  available?: boolean
  [key: string]: unknown
}

export interface LandDetails {
  isFarmland?: boolean
  priceRange?: string
  totalArea?: string
  pricePerUnit?: string
  dimensions?: string
  facing?: string
  roadWidth?: string
  boundaryWall?: string
  soilType?: string
  waterSource?: string
  electricity?: string
  approvals?: string
  surveyNumber?: string
  description?: string
  image?: string
  features?: string[]
  highlights?: string[]
  nearbyPlaces?: string[]
}

export interface Property {
  id: string
  kind: 'property' | 'farmhouse' | 'land'
  name: string
  developer?: string
  location?: string
  city?: string
  state?: string
  region?: string
  type?: string
  association?: string
  possession?: string
  structure?: string
  reraId?: string
  priceVisible?: boolean
  units?: Unit[]
  images?: unknown[]
  farmhouseDetails?: unknown
  landDetails?: LandDetails | null
}