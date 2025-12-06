'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function LoanRegistry() {
  const [selectedImage, setSelectedImage] = useState(null)

  const serviceImages = [
    { src: '/images/loan-registry/loan-consultation.jpg', alt: 'Loan consultation meeting', title: 'Loan Consultation' },
    { src: '/images/loan-registry/document-signing.jpg', alt: 'Property document signing', title: 'Document Processing' },
    { src: '/images/loan-registry/legal-assistance.jpg', alt: 'Legal assistance session', title: 'Legal Support' },
    { src: '/images/loan-registry/registry-process.jpg', alt: 'Property registry process', title: 'Registry Services' }
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
            Loan & Registry Support
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Simplified financing and legal support with comprehensive mortgage and documentation assistance
          </p>
        </section>

        {/* Service Details Section */}
        <section className="py-16 px-6 md:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Simplified Financing & Legal Support
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">
              We simplify financing and legal processes with comprehensive support. Our experts guide clients through mortgage options and home loans, securing competitive rates and favorable terms. We also handle all property register as partner and documentation, ensuring transactions are transparent, compliant, and hassle-free.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Home Loan Assistance</h3>
                <p className="text-gray-600">Expert guidance through loan applications, eligibility assessment, and approval processes.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitive Rate Negotiations</h3>
                <p className="text-gray-600">Leverage our relationships with lenders to secure the best interest rates and terms.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation and register as partner</h3>
                <p className="text-gray-600">Complete handling of property documents, register as partner, and legal paperwork.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Compliance Support</h3>
                <p className="text-gray-600">Ensuring all transactions meet legal requirements and regulatory compliance.</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-block text-lg"
              >
                Get Loan & Legal Help
              </a>
            </div>
          </div>
        </section>

        {/* Process Gallery */}
        <section className="py-16 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Support Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    {/* Placeholder for images */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
              Need Help with Financing or Legal Support?
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              Contact us today for expert assistance with loans, documentation, and legal processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Consultation
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