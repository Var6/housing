import React from 'react'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h1>
        <p className="text-gray-700 text-center mb-8">
          Have questions or need help? Fill out the form below and our team will get back to you soon.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={5}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 border-t pt-8">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">About Us</h2>
          <p className="text-gray-700">
            Housing is dedicated to helping you find your dream home. Our platform connects renters and buyers with the best properties in the city. With a focus on quality, transparency, and customer satisfaction, we strive to make your property search easy and enjoyable.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
