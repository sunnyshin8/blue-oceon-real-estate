'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function RentingPage() {
  const [selectedImage, setSelectedImage] = useState(null)

  const rentingImages = [
    {
      src: '/images/renting/IMG-20200626-WA0023.jpg',
      alt: 'Modern Apartment Exterior',
      title: 'Modern Apartment Exterior',
    },
    {
      src: '/images/renting/IMG-20200626-WA0024.jpg',
      alt: 'Spacious Cabin',
      title: 'Spacious Cabin',
    },
    {
      src: '/images/renting/IMG-20200626-WA0026.jpg',
      alt: 'Luxury Bedroom Design',
      title: 'Luxury Bedroom Design',
    },
    {
      src: '/images/renting/IMG-20200626-WA0029.jpg',
      alt: 'Fully Furnished Conference room',
      title: 'Fully Furnished Conference room',
    },
    {
      src: '/images/renting/IMG-20200626-WA0030.jpg',
      alt: 'Elegant Bathroom Setup',
      title: 'Elegant Bathroom Setup',
    },
    {
      src: '/images/renting/IMG-20200629-WA0032.jpg',
      alt: 'Cozy Balcony View',
      title: 'Cozy Balcony View',
    },
  ]

  return (
    <>
      <div className="relative z-10">
        <section
          className="py-20 px-6 md:px-10 text-center"
          style={{
            background: 'radial-gradient(circle, rgba(99, 124, 224, 1) 0%, rgba(130, 180, 237, 1) 100%)',
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Renting Solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Find your dream home with our renting solutions. Explore our renting projects and expertise.
          </p>
        </section>

        <section className="py-16 px-6 md:px-10 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Renting Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {rentingImages.map((image, index) => (
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

        <section
          className="py-16 px-6 md:px-10"
          style={{
            background: 'radial-gradient(circle, rgba(99, 124, 224, 1) 0%, rgba(130, 180, 237, 1) 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Rent Your Dream Home?
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              Contact us today to explore our renting options and find the perfect place for you.
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

