'use client'

import Image from 'next/image'

export default function BuyingSelling() {

  const projectImages = [
    { src: '/images/buying-selling/IMG-20210222-WA0018.jpg', alt: 'Property Transaction', title: 'Property Transaction' },
    { src: '/images/buying-selling/IMG-20210222-WA0021.jpg', alt: 'Real Estate Service', title: 'Real Estate Service' },
    { src: '/images/buying-selling/IMG-20210222-WA0022.jpg', alt: 'Property Deal', title: 'Property Deal' },
    { src: '/images/buying-selling/IMG-20210222-WA0024.jpg', alt: 'Real Estate Consultation', title: 'Real Estate Consultation' },
    { src: '/images/buying-selling/IMG-20210222-WA0025.jpg', alt: 'Property Management', title: 'Property Management' },
    { src: '/images/buying-selling/IMG-20210222-WA0026.jpg', alt: 'Real Estate Process', title: 'Real Estate Process' },
    { src: '/images/buying-selling/IMG-20210305-WA0039.jpg', alt: 'Property Development', title: 'Property Development' },
    { src: '/images/buying-selling/IMG-20250515-WA0095.jpg', alt: 'Modern Property', title: 'Modern Property' }
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
            Property Buying & Selling
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Expert guidance for buyers and sellers through every step of their real estate transaction
          </p>
        </section>

        {/* Service Details Section */}
        <section className="py-16 px-6 md:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Expert Property Transactions
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">
              We assist buyers and sellers through every step of their real estate transaction. With deep local market expertise and advanced listing tools, we help clients find their ideal home or achieve the best price for their property. Our transparent, customer-focused approach ensures a smooth and stress-free experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Analysis & Property Valuation</h3>
                <p className="text-gray-600">Comprehensive market research and accurate property valuations to ensure optimal pricing strategies.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Marketing & Digital Outreach</h3>
                <p className="text-gray-600">Multi-channel marketing campaigns and digital presence to maximize property exposure.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Negotiation & Offer Management</h3>
                <p className="text-gray-600">Professional negotiation skills to secure the best deals for both buyers and sellers.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">End-to-End Transaction Support</h3>
                <p className="text-gray-600">Complete support from initial consultation to final closing and key handover.</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-block text-lg"
              >
                Get a Free Property Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 px-6 md:px-10 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Process in Action
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projectImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
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
      </div>
    </>
  )
}