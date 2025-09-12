import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <>
      {/* Main container: relative positioning is crucial for the overlay */}
      <div
        className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${assets.hero})` }}
      >
        {/* Overlay: adds a dark tint for better text contrast */}
        <div className="absolute inset-0"></div>

        {/* Content: z-10 places it above the overlay */}
        <div className="relative z-10 flex flex-col items-center text-center text-white p-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold drop-shadow-md">
            Your Health, Our Priority
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl">
            Providing exceptional care with advanced technology and a compassionate touch.
          </p>

        </div>
      </div>
    </>
  );
};

export default Hero;