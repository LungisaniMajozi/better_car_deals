// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturedCars from "./components/FeaturedCars";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import GetStarted from "./pages/GetStarted";

import useScrollToHash from "./hooks/useScrollToHash"; // ← Import hook

function App() {
  useScrollToHash(); // ← Use it

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans relative">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <FeaturedCars />
                <CTA />
                <Footer />
              </>
            }
          />
          {/* === Get Started Page (Register / Login) === */}
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
