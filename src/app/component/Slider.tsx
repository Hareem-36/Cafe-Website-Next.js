"use client"
import React, { useState } from 'react';

type Review = {
  name: string;
  location: string;
  review: string;
};

const reviews: Review[] = [
  {
    name: 'Ahmed Ali',
    location: 'Customer Review',
    review:
      'Exceptional service! I am extremely satisfied with PrimeCraft’s service. They know their clients and provide excellent support.',
  },
  {
    name: 'Hareem Malik',
    location: 'Customer Review',
    review:
      'When PrimeCraft was contacted, they immediately understood my problem and offered the best solution.',
  },
  {
    name: 'Haris Ahmed',
    location: 'Customer Review',
    review:
      'PrimeCraft provides a family-like environment and quality, high standards. I feel like I can rely on them anytime.',
  },
];

const CustomerReviewSlider = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-[#D2B48C] p-4">

      <h2 className="text-4xl font-bold text-center mb-6 text-pink-900 underline">Customer Reviews</h2>
      <div className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <blockquote className="text-lg italic text-gray-600">{reviews[current].review}</blockquote>
          <p className="mt-4 font-bold text-blue-900">{reviews[current].name}</p>
          <p className="text-gray-500 ">{reviews[current].location}</p>
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 text-2xl font-bold text-blue-800 p-2 hover:text-gray-700"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 text-2xl font-bold text-blue-800 p-2 hover:text-gray-700"
        >
          &#10095;
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex mt-4 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              index === current ? 'bg-blue-900' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviewSlider;
