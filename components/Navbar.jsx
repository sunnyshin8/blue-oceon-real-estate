'use client'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const GoogleTranslate = dynamic(() => import('./Language'), { ssr: false })

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ]

  const dropdownLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Register', href: '/register' },
    { name: 'About Us', href: '/aboutus' },
  ]

  // Combine links for mobile view to ensure everything is accessible
  const mobileLinks = [
    ...navLinks,
    ...dropdownLinks.filter(d => !navLinks.some(n => n.href === d.href))
  ]

  return (
    <nav className="shadow-md fixed w-full z-50 bg-[#729FF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Blue Ocean Building Solutions"
                width={50}
                height={50}
                className="mr-2"
              />
              <span className="text-xl md:text-2xl font-bold text-white hover:text-gray-200 transition duration-300 truncate max-w-[200px] md:max-w-none">
                Blue Ocean Building Solutions
              </span>
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.filter(link => link.name !== 'Home').map((link) => (
              <Link key={link.name} href={link.href} className="text-white hover:text-gray-200 font-medium">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Home + Translate + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="hidden md:block text-white hover:text-gray-200 font-medium">Home</Link>

            {/* Google Translate Dropdown (Desktop) */}
            <div className="hidden md:block">
              <GoogleTranslate />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-gray-200 text-4xl focus:outline-none z-50 relative"
              aria-label="Toggle menu"
            >
              <ion-icon name={isMobileMenuOpen ? "close-outline" : "reorder-four-outline"}></ion-icon>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-20 px-6 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col space-y-6 overflow-y-auto h-full pb-10">
          {mobileLinks.map((link, idx) => (
            <Link
              key={`${link.name}-${idx}`}
              href={link.href}
              className="text-gray-800 text-xl font-semibold border-b border-gray-100 pb-2 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-500 mb-2 text-sm uppercase tracking-wide">Language</p>
            <div className="w-full">
              <GoogleTranslate />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
