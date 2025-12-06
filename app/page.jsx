'use client'

import { useState } from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import Aboutus from '@/components/Aboutus'
import AboutSection from '@/components/AboutSection'
import ProjectShowcase from '@/components/ProjectShowcase'
import BlogPreview from '@/components/BlogPreview'
import InquireForm from '@/components/InquireForm'

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="relative flex flex-col">
      
      <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-gray-400 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 transition"
        >
          <ion-icon name="reorder-four-outline" size="large"></ion-icon>
        </button>
      <div className="absolute top-4 right-4 z-50">

        {dropdownOpen && (
          <div
            className="mt-3 w-60 rounded-lg shadow-xl text-white text-left py-4 px-4"
            style={{
              background: 'radial-gradient(circle,rgba(217, 98, 149, 1) 0%, rgba(30, 100, 186, 1) 100%);',
            }}
          >
            {/* <Link
              href="/enquiry"
              className="block py-2 px-2 rounded hover:bg-white hover:text-black transition"
            >
              Enquiry
            </Link> */}
            <Link
              href="/contact"
              className="block py-2 px-2 rounded hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
            <Link
              href="/register"
              className="block py-2 px-2 rounded hover:bg-white hover:text-black transition"
            >
              Register
            </Link>
            <Link
              href="/about"
              className="block py-2 px-2 rounded hover:bg-white hover:text-black transition"
            >
              About Us
            </Link>
          </div>
        )}
      </div>

      <Hero />
      <ServicesSection />
      <AboutSection />
      <Aboutus />
      
      {/* Our Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Projects</h2>
          <p className="text-lg text-gray-600 mb-12 text-center">We have worked with</p>
          <ProjectShowcase />
        </div>
      </section>

      {/* Our Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Blog</h2>
          <BlogPreview />
        </div>
      </section>

      <InquireForm />
    </div>
  )
}
