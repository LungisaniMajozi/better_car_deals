// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">
              BetterCarDeals
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#featured-cars"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Cars
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>
          <Link
            to="/get-started"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
