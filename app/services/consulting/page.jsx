'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Consulting() {
  const [selectedImage, setSelectedImage] = useState(null)

  const consultingImages = [
    { src: '/images/consulting/market-analysis.jpg', alt: 'Market analysis dashboard', title: 'Market Analysis' },
    { src: '/images/consulting/property-valuation.jpg', alt: 'Property valuation meeting', title: 'Property Valuation' },
    { src: '/images/consulting/investment-advisory.jpg', alt: 'Investment advisory session', title: 'Investment Advisory' },
    { src: '/images/consulting/due-diligence.jpg', alt: 'Due diligence process', title: 'Due Diligence' }
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
            Real Estate Consulting & Due Diligence
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Data-backed insights and research-driven consulting for informed real estate decisions.
          </p>
        </section>

        {/* Service Details Section */}
        <section className="py-16 px-6 md:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Strategic Real Estate Advisory
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">
              We provide data-backed insights and research-driven consulting to help clients make informed real estate decisions. From title verification to investment feasibility, we ensure every transaction is secure and value-driven.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Property Valuation & Market Analysis</h3>
                <p className="text-gray-600">Comprehensive market research and accurate property valuations based on current market trends.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Title Verification & Legal Checks</h3>
                <p className="text-gray-600">Thorough legal due diligence including title verification and compliance checks.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Advisory & Risk Assessment</h3>
                <p className="text-gray-600">Strategic investment guidance with comprehensive risk analysis and market insights.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Tracking and Performance Reporting</h3>
                <p className="text-gray-600">Ongoing performance monitoring with detailed ROI analysis and investment reports.</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-block text-lg"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Services Gallery */}
        <section className="py-16 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Consulting Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {consultingImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    {/* Placeholder for images */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
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
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">{selectedImage.title}</span>
                </div>
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
              Ready for Expert Real Estate Advisory?
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              Get professional consulting and due diligence support for your real estate decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Schedule Consultation
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