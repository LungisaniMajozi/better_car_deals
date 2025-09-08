// src/components/Features.jsx
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Lowest Prices",
      desc: "We guarantee the best price on every vehicle.",
      icon: "💰",
    },
    {
      title: "Quality Vehicles",
      desc: "All cars are inspected and certified.",
      icon: "✅",
    },
    {
      title: "Fast Delivery",
      desc: "Get your car delivered in just days.",
      icon: "🚚",
    },
  ];

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/traffic-loop.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img
            src="/fallback.jpg"
            alt="Traffic"
            className="w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-16 animate-fade-in-up delay-200">
          We offer the best selection, lowest prices, and hassle-free
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 pulse-on-hover"
            >
              <div className="text-5xl mb-4 drop-shadow-lg">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-200">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
