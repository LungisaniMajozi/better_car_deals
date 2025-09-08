// src/components/CTA.jsx
import React from "react";

const CTA = () => {
  const handleRipple = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.clientX - button.getBoundingClientRect().left}px`;
    ripple.style.top = `${e.clientY - button.getBoundingClientRect().top}px`;
    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up">
          Ready to Drive Your Dream Car?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Join thousands of satisfied customers who found their perfect ride
          with us.
        </p>
        <button
          onClick={handleRipple}
          className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          Start Shopping Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
