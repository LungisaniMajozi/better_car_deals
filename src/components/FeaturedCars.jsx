// src/components/FeaturedCars.jsx
import React from "react";
import mustangImg from "../assets/mustage.jpg";
import bmxImg from "../assets/bmx.jpg";
import rangerImg from "../assets/ranger.jpg";
const FeaturedCars = () => {
  const cars = [
    {
      name: "Ford Ranger",
      year: 2025,
      price: "ZAR 764,999.99",
      image: rangerImg,
    },
    {
      name: "Ford Mustang",
      year: 2022,
      price: "ZAR 760,500.00",
      image: mustangImg, // Local image
    },
    {
      name: "BMW X5",
      year: 2023,
      price: "ZAR 160,000.99",
      image: bmxImg,
    },
  ];

  return (
    <section id="featured-cars" className="py-20 bg-gray-50">
      {" "}
      {/* ← Added id here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 animate-fade-in-up">
            Featured Cars
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Check out our most popular vehicles right now.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                <p className="text-gray-600">{car.year}</p>
                <p className="text-2xl font-bold text-blue-600 mt-2">
                  {car.price}
                </p>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 liquid-hover">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
