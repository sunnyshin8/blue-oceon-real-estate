'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <div
      className="py-20 px-6 md:px-20 text-white"
      style={{
        background: 'radial-gradient(circle, rgba(99, 124, 224, 1) 0%, rgba(130, 180, 237, 1) 100%)',
      }}
    >
      
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
        About Blue Ocean Building Solutions
      </h2>
      <p className="text-center text-xl mb-16 font-light">
        Excellence in Real Estate Transformation
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <h3 className="text-3xl font-semibold mb-4">Our Legacy of Trust & Transformation</h3>
          <p className="mb-4">
            At Blue Ocean Building Solutions, we believe that turning a dream home into reality is more
            than just placing bricks and beams. It's about trust, consistency, and a vision that never
            wavers. What began as a bold step into the real estate space is now growing into a trusted
            name people choose with confidence.
          </p>
          <p className="mb-4">
            As the 3rd generation, redefining the real estate market, we bring decades of inherited
            wisdom combined with modern innovation.
          </p>
          <p>
            We aspire to become pioneers in transforming the unorganized real estate sector into a more
            structured, transparent, and client-first experience. With each project, we're not just
            building homes, we're crafting the beginning of journeys, memories, and legacies.
          </p>
        </div>
        <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/about-office.jpg"
            alt="Our Office"
            fill
            className="object-cover"
          />
        </div>
      </div>

      
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, bounce: 0.3 }}
        className="bg-white text-gray-800 rounded-xl p-8 md:p-12 mb-12 shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4 text-[#2B477B]">Our Mission</h3>
        <p className="text-lg leading-relaxed">
          Our mission is to professionalize and streamline the real estate industry, transforming a
          fragmented market into a transparent, organized sector. We are committed to delivering
          comprehensive, end-to-end solutions through a holistic approach tailored to each client's unique
          needs.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Through experience, innovation, and deep local expertise, we empower all clients to confidently
          navigate their real estate journey. Our goal is to make every transaction efficient, clear, and
          rewarding by leveraging technology, honest advice, and dedicated support.
        </p>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6, bounce: 0.3 }}
        className="bg-white text-gray-800 rounded-xl p-8 md:p-12 shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4 text-[#2B477B]">Our Vision</h3>
        <p className="text-lg leading-relaxed">
          Our vision is to become the region's most trusted real estate partner, known for exceptional
          service, innovation, and integrity. We envision a future where every realty need from buying a
          home to expanding a commercial portfolio is met with personalized, seamless solutions under one
          roof, powered by modern technology and expert guidance.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          By continuously innovating and setting new standards for transparency and excellence, we aim to
          build lasting relationships and transform the way our community experiences real estate.
          Ultimately, we seek to shape a more organized and client-centric market that delivers lasting
          value and peace of mind to all.
        </p>
      </motion.div>
    </div>
  )
}
