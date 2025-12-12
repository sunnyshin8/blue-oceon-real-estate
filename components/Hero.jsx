'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative h-screen w-full overflow-hidden mt-0">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home.jpg"
          alt="Luxury Home"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center z-10 px-6">
        <div className="max-w-3xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-300 text-black font-bold text-3xl md:text-5xl lg:text-6xl px-4 md:px-6 py-4 shadow-md w-fit max-w-full leading-tight"
          >
            Turning Foundation<br />Into Fortune
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="bg-gray-300/50 text-black font-bold text-base md:text-xl px-4 md:px-6 py-2 shadow-md w-fit mt-4 max-w-full"
          >
            OUR LEGACY OF TRUST & TRANSFORMATION
          </motion.div>
        </div>
      </div>
    </div>
  );
}