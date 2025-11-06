'use client'

import Image from 'next/image'

export default function InteriorPage() {

  const interiorImages = [
    { src: '/images/interior/IMG_20210321_172051_876.jpg', alt: 'Modern Partition Design', title: 'Modern Partition Design' },
    { src: '/images/interior/IMG-20200617-WA0024.jpg', alt: 'Elegant TV Unit', title: 'Elegant TV Unit' },
    { src: '/images/interior/IMG-20200617-WA0026.jpg', alt: 'Contemporary Living Room', title: 'Contemporary Living Room' },
    { src: '/images/interior/IMG-20200617-WA0028.jpg', alt: 'Stylish Wardrobe', title: 'Stylish Wardrobe' },
    { src: '/images/interior/IMG-20200617-WA0030.jpg', alt: 'Master Bedroom', title: 'Master Bedroom' },
    { src: '/images/interior/IMG-20200617-WA0034.jpg', alt: 'Luxury Bedroom', title: 'Luxury Bedroom' },
    { src: '/images/interior/IMG-20200617-WA0038.jpg', alt: 'Designer Ceiling', title: 'Designer Ceiling' },
    { src: '/images/interior/IMG-20250515-WA0067.jpg', alt: 'Premium Interior Finish', title: 'Premium Interior Finish' },
    { src: '/images/interior/IMG-20250515-WA0070.jpg', alt: 'Elegant Hallway', title: 'Elegant Hallway' },
    { src: '/images/interior/IMG-20250515-WA0077.jpg', alt: 'Modern Workspace', title: 'Modern Workspace' },
    { src: '/images/interior/IMG-20250515-WA0078.jpg', alt: 'Creative Wall Design', title: 'Creative Wall Design' },
    { src: '/images/interior/IMG-20250515-WA0079.jpg', alt: 'Luxury Lounge', title: 'Luxury Lounge' }
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
            Interior Design & Renovation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Transform your spaces with functional, inspiring designs that reflect your lifestyle and brand identity.
          </p>
        </section>

        {/* Service Details Section */}
        <section className="py-16 px-6 md:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Transform Your Spaces
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">
              Our interior design team creates functional, inspiring, aesthetic spaces that reflect your lifestyle and brand identity. From concept to completion, we handle every detail — from space planning to material selection — transforming homes and offices with creativity, smart design, and timeless elegance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Design & Space Planning</h3>
                <p className="text-gray-600">Tailored design solutions that maximize functionality while reflecting your personal style.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Selection & Procurement</h3>
                <p className="text-gray-600">Expert selection of high-quality materials, furniture, and finishes for lasting beauty.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Renovation and Fit-out Execution</h3>
                <p className="text-gray-600">Complete renovation services with skilled craftsmen ensuring perfect implementation.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Optimization and Execution</h3>
                <p className="text-gray-600">Streamlined project management ensuring timely completion within budget.</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-block text-lg"
              >
                Book a Design Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 px-6 md:px-10 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Interior Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {interiorImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-blue-200/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="py-16 px-6 md:px-10"
          style={{
            background: 'radial-gradient(circle, rgba(99, 124, 224, 1) 0%, rgba(130, 180, 237, 1) 100%)',
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              Contact us today for a free consultation and quote for your interior design and renovation needs.
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
