'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BlogPost() {
  return (
    <div className="pt-16 bg-gray-50">
      {/* Blog Header */}
      <section className="bg-white py-12 px-6 md:px-10 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Market Analysis
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Future of Indian Real Estate: Challenges, Reforms, and the Road to a $1 Trillion Market
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>December 6, 2025</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white py-8 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/blog4.jpg"
              alt="Indian Real Estate"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="bg-white py-12 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">India's Real Estate at an Inflection Point</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              India's real estate sector has entered its most dynamic phase yet.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Valued at USD 482 billion in 2024 and projected to reach USD 1.18 trillion by 2033 (IMARC Group), the sector contributes nearly 8% to India's GDP, with the potential to touch 13% by 2030.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              But while the numbers look impressive, the structure beneath is far from smooth. The sector's growth has outpaced its systems, creating a paradox where opportunity and inefficiency coexist.
            </p>
          </div>

          {/* Section 1: Core Challenges */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Core Challenges Holding Real Estate Back</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Despite reforms like RERA and PMAY, real estate in India remains one of the most fragmented industries. The problems are systemic:
            </p>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Policy Gaps in Implementation</h3>
                <p className="text-lg text-gray-700">
                  Regulatory frameworks exist on paper, but enforcement varies by state. Delays in land approvals, inconsistent RERA application, and slow dispute resolution still discourage investors.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Data Without Insight</h3>
                <p className="text-lg text-gray-700">
                  Real estate generates enormous data on land records, supply, absorption, and pricing, yet less than 10% of this data is structured or used effectively. This lack of transparency leads to pricing mismatches, speculative investment, and buyer hesitation.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Fragmented Developer Ecosystem</h3>
                <p className="text-lg text-gray-700">
                  India has thousands of small- to mid-sized developers, often operating without standardized processes. This hyper-fragmentation leads to inconsistent quality, project delays, and financial instability.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Land Ownership & Title Risks</h3>
                <p className="text-lg text-gray-700">
                  Ambiguous ownership patterns and overlapping titles remain among the biggest risks. While digitization efforts like DILRMP (Digital India Land Records Modernization Programme) are underway, progress is uneven.
                </p>
              </div>

              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Construction Inefficiency</h3>
                <p className="text-lg text-gray-700">
                  Traditional construction methods are slow and vulnerable to cost escalation. Modular and prefab technologies common globally still account for less than 3% of India's total construction volume (CREDAI 2024).
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Structural Shifts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Structural Shifts Reshaping the Industry</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Despite challenges, positive change is underway, both regulatory and technological.
            </p>

            <div className="space-y-8">
              <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. RERA's Maturity</h3>
                <p className="text-lg text-gray-700">
                  Since its introduction in 2016, the Real Estate (Regulation and Development) Act has increased accountability. Over 114,000 projects and 95,000 agents are now registered nationwide (as of 2025, RERA Portal Data).
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Smart Cities and Urban Planning</h3>
                <p className="text-lg text-gray-700">
                  The Smart Cities Mission, with an investment of ₹7.5 billion, is reshaping infrastructure across 100+ cities. Urban land is being reimagined for better livability, sustainability, and integrated housing.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Rise of Tier 2 & 3 Markets</h3>
                <p className="text-lg text-gray-700">
                  As metros saturate, Tier 2 cities like Indore, Jaipur, Ahmedabad, and Kochi are witnessing double-digit growth. According to CBRE, property values in these cities rose 17.6% in 2024, outpacing metros.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Tech-Enabled Real Estate</h3>
                <p className="text-lg text-gray-700">
                  Proptech startups, digital registries, AI-led valuation tools, and modular design software are starting to change how assets are planned and executed. India's proptech industry, valued at $500 million, is expected to grow 5x by 2030.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Road Ahead */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Road Ahead: From Unorganized to Unstoppable</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              For India to fully realize its real estate potential, the next phase must focus on systemization, not just expansion.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-lg border border-blue-200 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">This means:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-lg text-gray-700">Data transparency across all state registries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-lg text-gray-700">Modular construction incentives to speed up affordable housing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-lg text-gray-700">Strict, uniform RERA enforcement across states.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-lg text-gray-700">Collaboration between developers, financiers, and tech innovators.</span>
                </li>
              </ul>
            </div>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The opportunity is immense, but only if India builds smarter, faster, and cleaner.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              The next decade will define the DNA of Indian real estate.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed italic font-semibold">
              Growth alone won't make the sector successful; efficiency, technology, and trust will.
            </p>
          </div>

          {/* CTA Section */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 md:p-12 rounded-lg text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want to stay informed about India's real estate transformation?
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Subscribe for trend analyses, data insights, and smart city updates.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
            >
              Subscribe Now
            </Link>
          </motion.div>

          {/* Back to Blog */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
