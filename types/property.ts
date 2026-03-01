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

export interface Property {
  id: string
  kind: 'property' | 'farmhouse'
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
}