'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ConstructionPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const constructionImages = [
    {
      src: '/images/construction/IMG-20210305-WA0039.jpg',
      alt: 'Residential Development Project',
      title: 'Residential Development Project'
    },
    {
      src: '/images/construction/IMG-20230319-WA0043.jpg',
      alt: 'Commercial Building Construction',
      title: 'Commercial Building Construction'
    },
    {
      src: '/images/construction/IMG-20230405-WA0009.jpg',
      alt: 'Foundation Work',
      title: 'Foundation Work'
    },
    {
      src: '/images/construction/IMG-20230405-WA0016.jpg',
      alt: 'Structural Framework',
      title: 'Structural Framework'
    },
    {
      src: '/images/construction/IMG-20230405-WA0017.jpg',
      alt: 'Construction Progress',
      title: 'Construction Progress'
    },
    {
      src: '/images/construction/IMG-20230405-WA0023.jpg',
      alt: 'Building Development',
      title: 'Building Development'
    },
    {
      src: '/images/construction/IMG-20230405-WA0031.jpg',
      alt: 'Construction Phase',
      title: 'Construction Phase'
    },
    {
      src: '/images/construction/IMG-20230712-WA0048.jpg',
      alt: 'Construction Progress',
      title: 'Construction Progress'
    },
    {
      src: '/images/construction/IMG-20240504-WA0042.jpg',
      alt: 'Advanced Construction Stage',
      title: 'Advanced Construction Stage'
    },
    {
      src: '/images/construction/IMG-20250515-WA0095.jpg',
      alt: 'Latest Construction Project',
      title: 'Latest Construction Project'
    }
  ]

  return (
    <>

      {/* Content */}
      <div className="relative z-10">
      {/* Hero Section */}
      <section
        className="py-20 px-6 md:px-10 text-center"
        style={{
          background: 'radial-gradient(circle, rgba(99, 124, 224, 1) 0%, rgba(130, 180, 237, 1) 100%)',
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Construction & Development
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
          End-to-end construction and real estate development services with proven expertise and quality craftsmanship
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-6 md:px-10 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Construction Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential Construction</h3>
              <p className="text-gray-600">Custom home construction with modern designs and quality materials.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial Development</h3>
              <p className="text-gray-600">Professional commercial buildings and office complexes.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Management</h3>
              <p className="text-gray-600">Complete project oversight from planning to completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 px-6 md:px-10 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Construction Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {constructionImages.map((image, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-blue-200/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
              <div className="p-6 bg-white/95 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section
        className="py-16 px-6 md:px-10"
        style={{
          background: 'radial-gradient(circle, rgba(99, 124, 224, 1) 0%, rgba(130, 180, 237, 1) 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Contact us today for a free consultation and quote for your construction and development needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+1234567890"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
