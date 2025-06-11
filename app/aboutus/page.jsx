'use client'

import Image from 'next/image'
import React from 'react'

export default function Aboutus() {
  return (
    <section
      className="w-full text-white py-20 px-4 md:px-16"
      style={{
        background: 'radial-gradient(circle, rgba(99, 124, 224, 1) 0%, rgba(130, 180, 237, 1) 100%)',
      }}
    >
      {/* Our Team Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-20">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Meet the Brain behind this initiative</h2>
          <h3 className="text-xl font-semibold mb-4">Mr. Shailendra Jaiswal - Managing Director</h3>
          <p className="text-lg mb-4">
            Leading with vision and decades of industry expertise and expert portfolio. Handles 200cr+ projects with
            unmatched industry knowledge, strategic foresight, and a relentless commitment to quality.
          </p>
          <blockquote className="italic text-xl font-medium text-white/80 mt-6">
            “We are building relationships that last generations.”
            <br />
            <span className="font-bold text-white">— Mr. Jaiswal</span>
          </blockquote>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-105 hover:rotate-1 transition-transform duration-500">
            <Image
              src="/shailendra.jpg" // place your image in public/shailendra.jpg
              alt="Mr. Shailendra Jaiswal"
              width={240}
              height={240}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10">What Drives Us</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg">
          <div className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-white/20 transition">
            <h4 className="font-semibold mb-2">Transparency</h4>
            <p>Clear, honest communication in every interaction</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-white/20 transition">
            <h4 className="font-semibold mb-2">Innovation</h4>
            <p>Embracing technology to enhance client experience</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-white/20 transition">
            <h4 className="font-semibold mb-2">Integrity</h4>
            <p>Ethical practices in all business dealings</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-white/20 transition">
            <h4 className="font-semibold mb-2">Excellence</h4>
            <p>Delivering quality that exceeds expectations</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl shadow-md hover:bg-white/20 transition">
            <h4 className="font-semibold mb-2">Client-Centricity</h4>
            <p>Your success is our success</p>
          </div>
        </div>
      </div>
    </section>
  )
}