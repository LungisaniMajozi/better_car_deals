// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-700 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 animate-fade-in-up">
          Find Your Dream Car at Better Prices
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 animate-fade-in-up delay-200">
          Discover premium vehicles with unbeatable deals and transparent
          pricing. We make buying your next car easy, fast, and affordable.
        </p>

        {/* Buttons */}
        <div className="space-x-4 flex justify-center">
          <Link
            to="/get-started"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 pulse-on-hover"
          >
            Get Started
          </Link>
          <button
            type="button"
            onClick={() => {
              const element = document.getElementById("featured-cars");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Browse Cars
          </button>{" "}
          {/* ✅ Properly closed with </button> */}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-bounce float"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Hero;
