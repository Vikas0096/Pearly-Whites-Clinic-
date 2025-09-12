import React, { useState, useEffect, useCallback } from 'react';
import { patientReviews } from '../assets/assets'; 
const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
     
      prevIndex === patientReviews.length - 1 ? 0 : prevIndex + 1
    );
  }, [patientReviews.length]); 
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
    
      prevIndex === 0 ? patientReviews.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

 
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, slideInterval);

    
    return () => {
      clearInterval(timer);
    };
  }, [nextSlide]); 

  return (
    <div className="w-full bg-gray-50 py-12 md:py-20 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
          What Our Patients Say
        </h2>
        <p className="text-center text-gray-500 mb-8 md:mb-12">
          Real stories from our valued patients.
        </p>

      
        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
        
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {patientReviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full p-8 md:p-12 flex flex-col items-center text-center"
              >
                <img
                  src={review.avatar}
                  alt={`${review.name}'s avatar`}
                  className="w-24 h-24 rounded-full mb-4 border-4 border-blue-100 object-cover shadow-md"
                />
                <p className="text-lg italic text-gray-600 mb-6 max-w-2xl">
                  "{review.review}"
                </p>
                <div className="font-semibold text-gray-900">{review.name}</div>
                <div className="text-sm text-gray-500">{review.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSlider;