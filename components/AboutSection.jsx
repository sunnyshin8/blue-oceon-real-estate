import Image from 'next/image'

export default function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">Your Trusted Real Estate Partner</h2>
        <p className="text-gray-600">
          With over 15 years of experience in the real estate market, we have helped thousands of families find their dream homes. Our commitment to excellence and customer satisfaction sets us apart in the industry.
        </p>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600">Expert guidance throughout your real estate journey</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600">Extensive network of properties and clients</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-gray-600">Personalized service tailored to your needs</p>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image
          src="/images/about-office.jpg"
          alt="Our Office"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
} 