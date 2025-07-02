'use client'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      title: 'Property Buying',
      description: 'Find your dream home with expert guidance and vast listings.',
      href: '/services/buying',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Property Selling',
      description: 'Sell your property at the best value with our market expertise.',
      href: '/services/selling',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Property Renting',
      description: 'Rent the perfect place or list your rental hassle-free.',
      href: '/services/renting',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: 'Commercial Real Estate Solutions',
      description: 'Tailored property services for commercial needs and investments.',
      href: '/services/commercial',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Real Estate Consulting & Due Diligence',
      description: 'Professional Advisory & due diligence support for smart real estate decisions.',
      href: '/services/consulting',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 6H7a2 2 0 01-2-2V6a2 2 0 012-2h8l4 4v10a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Construction & Development',
      description: 'End-to-end construction and real estate development services.',
      href: '/services/construction',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z" />
        </svg>
      ),
    },
    {
      title: 'Loan & Registry Support',
      description: 'Complete assistance with home loans and registry processes.',
      href: '/services/loan',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Property Management & Leasing',
      description: 'Professional property management and tenant leasing services.',
      href: '/services/management',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8m-4-4v4m5-8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2M3 10h2a2 2 0 012 2v10a2 2 0 01-2 2H3" />
        </svg>
      ),
    },
    {
      title: 'Interior Design & Renovation',
      description: 'Creative and functional design for all types of real estate.',
      href: '/services/interior',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 17l6-6 4 4 8-8" />
        </svg>
      ),
    },
  ]

  return (
    <section
      className="py-16 px-6 md:px-10"
      style={{
        background: 'radial-gradient(circle, rgba(99, 124, 224, 1) 0%, rgba(130, 180, 237, 1) 100%)',
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link href={service.href} key={index}>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer h-full flex flex-col justify-between">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p
                className={`text-gray-600 ${
                  service.title === 'Real Estate Consulting & Due Diligence' ? 'text-sm' : ''
                }`}
              >
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
