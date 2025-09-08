// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturedCars from "./components/FeaturedCars";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      <Navbar />
      <Hero />
      <Features /> {/* Now has video background */}
      <FeaturedCars />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
