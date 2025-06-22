'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Debug Wrapper */}
      <div className="absolute inset-0 -z-10 bg-red-500"> {/* Red fallback */}
        <Image
          src="/images/home.jpg"
          alt="Luxury Home"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black bg-opacity-50" />

      {/* Hero Content */}
      <div className="relative h-full flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center md:text-left max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Find Your Dream Home
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover the perfect property that matches your lifestyle and aspirations
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg p-2 flex items-center max-w-2xl mx-auto md:mx-0">
              <input
                type="text"
                placeholder="Enter location, property type, or keyword..."
                className="flex-1 px-4 py-2 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Search
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-gray-200">Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm text-gray-200">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-gray-200">Locations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-gray-200">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
