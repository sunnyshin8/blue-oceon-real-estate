'use client'

import Image from 'next/image'

export default function CommercialPage() {

  const commercialImages = [
    { src: '/images/commercial/IMG-20200617-WA0025.jpg', alt: 'Modern 5 star hotel stled  bedroom ', title: 'Modern 5 star hotel stled ' },
    { src: '/images/commercial/IMG-20200617-WA0033.jpg', alt: 'Office home Design', title: 'Office home  Design' },
    { src: '/images/commercial/IMG-20200617-WA0040.jpg', alt: 'Retail Complex', title: 'Retail Complex' },
    { src: '/images/commercial/Screenshot 2025-09-03 172703.png', alt: 'Commercial Project Overview', title: 'Commercial Project Overview' }
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
            Commercial Real Estate Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Tailored property services for commercial needs and investments. Explore our commercial projects and expertise.
          </p>
        </section>

        {/* Service Details Section */}
        <section className="py-16 px-6 md:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Commercial Real Estate Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">
              We specialize in commercial leasing, acquisition, and expansion for office, retail, and industrial spaces. With strategic site selection, market insights, and broker partnerships, we help businesses find spaces that accelerate growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Property Search</h3>
                <p className="text-gray-600">Comprehensive search and evaluation of available commercial properties matching your specific business requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lease Negotiation & Portfolio Management</h3>
                <p className="text-gray-600">Expert negotiation and ongoing portfolio management to optimize your commercial real estate investments.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Analysis and Site Selection</h3>
                <p className="text-gray-600">Strategic market research and site selection to identify optimal locations for business growth.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Broker Network Collaboration for Faster Deals</h3>
                <p className="text-gray-600">Leveraging our extensive broker network to accelerate deal completion and secure the best opportunities.</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-block text-lg"
              >
                Explore Commercial Solutions with Blue Ocean
              </a>
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="py-16 px-6 md:px-10 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Commercial Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {commercialImages.map((image, index) => (
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
              Ready for Your Next Commercial Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 drop-shadow-md">
              Contact us today for a free consultation and quote for your commercial real estate needs.
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
