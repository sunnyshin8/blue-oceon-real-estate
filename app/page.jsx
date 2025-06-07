'use client'

import { useState } from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import ProjectShowcase from '@/components/ProjectShowcase'
import BlogPreview from '@/components/BlogPreview'
import InquireForm from '@/components/InquireForm'

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="relative flex flex-col gap-20">
      {/* Ionicon Button with Dropdown */}
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
            <Link
              href="/enquiry"
              className="block py-2 px-2 rounded hover:bg-white hover:text-black transition"
            >
              Enquiry
            </Link>
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
      <AboutSection />
      <ServicesSection />
      <ProjectShowcase />
      <BlogPreview />
      <InquireForm />
    </div>
  )
}
