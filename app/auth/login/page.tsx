'use client'
import React, { useState } from 'react'

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l-lg ${isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${!isLogin ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        {isLogin ? (
          <form className="space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
            <p className="text-sm text-center text-gray-500 mt-2">
              Forgot your password?
            </p>
          </form>
        ) : (
          <form className="space-y-4">
            <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
            >
              Signup
            </button>
          </form>
        )}
      </div>
    </div>
  )
}


export default LoginSignupPage
