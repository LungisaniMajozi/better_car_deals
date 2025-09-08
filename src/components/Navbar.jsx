// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600 animate-pulse">
              BetterCarDeals
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            {["Home", "Cars", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
