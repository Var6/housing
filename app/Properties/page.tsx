import React from 'react'

const properties = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    location: "Downtown, New York",
    price: "$2,500/mo",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "A beautiful apartment with 2 bedrooms, close to all amenities."
  },
  {
    id: 2,
    title: "Cozy Suburban House",
    location: "Brooklyn, New York",
    price: "$3,200/mo",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    description: "Spacious house with garden, perfect for families."
  },
  {
    id: 3,
    title: "Luxury Condo with Sea View",
    location: "Miami Beach, Florida",
    price: "$4,500/mo",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    description: "Enjoy the ocean breeze from your balcony in this luxury condo."
  }
]

const PropertiesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Available Properties</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map(property => (
          <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={property.image} alt={property.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-1">{property.location}</p>
              <p className="text-blue-500 font-bold mb-2">{property.price}</p>
              <p className="text-gray-700 mb-4">{property.description}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertiesPage
