import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">About Us</h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Welcome to Housing! We are passionate about helping you find your perfect home.
        </p>
        <div className="space-y-4">
          <p className="text-gray-700">
            Our platform connects renters and buyers with the best properties in the city. We believe in quality, transparency, and customer satisfaction.
          </p>
          <p className="text-gray-700">
            Whether you are searching for a cozy apartment, a spacious house, or a luxury condo, Housing makes your property search easy and enjoyable.
          </p>
          <p className="text-gray-700">
            Our dedicated team is here to guide you every step of the way. Thank you for choosing Housing!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage