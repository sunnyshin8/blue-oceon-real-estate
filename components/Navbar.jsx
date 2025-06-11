'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="shadow-md fixed w-full z-50" style={{ backgroundColor: '#729FF2' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="RealEstate" width={100} height={100} className="mr-2" />
            <span className="text-2xl font-bold text-white">RealEstate</span>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-white hover:text-gray-200">About</Link>
            <Link href="/services" className="text-white hover:text-gray-200">Services</Link>
            <Link href="/projects" className="text-white hover:text-gray-200">Projects</Link>
            <Link href="/blog" className="text-white hover:text-gray-200">Blog</Link>
            {/* <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link> */}
          </div>

          {/* Right: Home + Dropdown */}
          <div className="relative flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-gray-200">Home</Link>

            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white hover:text-gray-200 text-3xl focus:outline-none top-8"
            >
              <ion-icon name="reorder-four-outline"></ion-icon>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-12 bg-white text-gray-800 rounded shadow-md py-2 w-40 z-50">
                <Link href="/enquiry" className="block px-4 py-2 hover:bg-gray-100">Enquiry</Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link>
                <Link href="/register" className="block px-4 py-2 hover:bg-gray-100">Register</Link>
                <Link href="/aboutus" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
