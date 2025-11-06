'use client'

import Image from 'next/image'

export default function ConstructionPage() {

  const constructionImages = [
    {
      src: '/images/construction/IMG_20210408_184022_114.jpg',
      alt: 'Construction Project',
      title: 'Construction Project'
    },
    {
      src: '/images/construction/IMG-20210222-WA0022.jpg',
      alt: 'Building Development',
      title: 'Building Development'
    },
    {
      src: '/images/construction/IMG-20210305-WA0039.jpg',
      alt: 'Residential Development',
      title: 'Residential Development'
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
      alt: 'Building Construction',
      title: 'Building Construction'
    },
    {
      src: '/images/construction/IMG-20230405-WA0031.jpg',
      alt: 'Construction Phase',
      title: 'Construction Phase'
    },
    {
      src: '/images/construction/IMG-20240504-WA0042.jpg',
      alt: 'Modern Construction',
      title: 'Modern Construction'
    },
    {
      src: '/images/construction/IMG-20250515-WA0095.jpg',
      alt: 'Latest Project',
      title: 'Latest Project'
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
            Quality construction services from blueprints to finishing touches for residential and commercial projects.
          </p>
        </section>

        {/* Service Details Section */}
        <section className="py-16 px-6 md:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
              Quality Construction Services
            </h2>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-center">
              From blueprints to finishing touches, we deliver residential and commercial projects that combine functionality, aesthetics, and innovation. Our project management expertise ensures timely delivery, quality control, and cost efficiency at every stage. By managing everything from design and permits to construction execution, we deliver residential and commercial projects on time and within budget. Our commitment to safety, innovation, and sustainability ensures modern, enduring structures.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Planning & Design</h3>
                <p className="text-gray-600">Comprehensive project planning and architectural design services tailored to your vision.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Permit & Approval Management</h3>
                <p className="text-gray-600">Complete handling of permits, approvals, and regulatory compliance for smooth project execution.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Construction Execution</h3>
                <p className="text-gray-600">Expert construction teams ensuring the highest quality standards and craftsmanship.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Budget and Timeline Control</h3>
                <p className="text-gray-600">Strict project management to ensure on-time delivery within agreed budgets.</p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-block text-lg"
              >
                Request a Construction Quote
              </a>
            </div>
          </div>
        </section>      {/* Project Gallery */}
      <section className="py-16 px-6 md:px-10 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Our Construction Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {constructionImages.map((image, index) => (
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
