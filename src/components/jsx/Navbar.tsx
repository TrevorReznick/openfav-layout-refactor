// src/components/Navbar.jsx
import React from 'react'

const Navbar = () => (
  <nav className="navbar bg-primary text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-lg font-bold">AI Workflow</h1>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-300">
          Features
        </a>
        <a href="#" className="hover:text-gray-300">
          Pricing
        </a>
        <a href="#" className="hover:text-gray-300">
          Contact
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
