import { model, models, Schema, type InferSchemaType } from 'mongoose'

const unitSchema = new Schema(
  {
    bhk: { type: String, required: true },
    sqft: { type: Number, required: true },
    price: { type: String, required: true },
  },
  { _id: false },
)

const farmhouseDetailsSchema = new Schema(
  {
    priceRange: String,
    area: String,
    bedrooms: String,
    bathrooms: String,
    description: String,
    image: String,
    features: { type: [String], default: [] },
    highlights: { type: [String], default: [] },
    nearbyPlaces: { type: [String], default: [] },
  },
  { _id: false },
)

const landDetailsSchema = new Schema(
  {
    isFarmland: { type: Boolean, default: false },
    priceRange: String,
    totalArea: String,
    pricePerUnit: String,
    dimensions: String,
    facing: String,
    roadWidth: String,
    boundaryWall: String,
    soilType: String,
    waterSource: String,
    electricity: String,
    approvals: String,
    surveyNumber: String,
    description: String,
    image: String,
    features: { type: [String], default: [] },
    highlights: { type: [String], default: [] },
    nearbyPlaces: { type: [String], default: [] },
  },
  { _id: false },
)

const propertySchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    kind: { type: String, enum: ['property', 'farmhouse', 'land'], default: 'property', index: true },
    name: { type: String, required: true },
    developer: { type: String, default: '' },
    location: { type: String, required: true },
    city: { type: String, required: true, index: true },
    state: { type: String, required: true },
    region: { type: String, default: '' },
    type: { type: String, default: '' },
    association: { type: String, default: '' },
    possession: { type: String, default: '' },
    structure: { type: String, default: '' },
    reraId: { type: String, default: '' },
    priceVisible: { type: Boolean, default: true },
    units: { type: [unitSchema], default: [] },
    images: { type: [String], default: [] },
    farmhouseDetails: { type: farmhouseDetailsSchema, default: null },
    landDetails: { type: landDetailsSchema, default: null },
  },
  { timestamps: true },
)

export type PropertyDocument = InferSchemaType<typeof propertySchema>

export const PropertyModel = models.Property || model('Property', propertySchema)
