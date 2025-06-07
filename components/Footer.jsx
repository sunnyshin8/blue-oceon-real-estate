'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        background: "radial-gradient(circle,rgba(99, 124, 224, 1) 0%, rgba(130, 180, 237, 1) 100%);",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">RealEstate</h3>
            <p className="text-white/80">
              Your trusted partner in finding the perfect property. Helping families and investors make smart choices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/80 hover:text-white transition duration-300">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition duration-300">Services</Link></li>
              <li><Link href="/projects" className="text-white/80 hover:text-white transition duration-300">Projects</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-white transition duration-300">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/buying" className="text-white/80 hover:text-white transition duration-300">Buying</Link></li>
              <li><Link href="/services/selling" className="text-white/80 hover:text-white transition duration-300">Selling</Link></li>
              <li><Link href="/services/renting" className="text-white/80 hover:text-white transition duration-300">Renting</Link></li>
              <li><Link href="/services/investment" className="text-white/80 hover:text-white transition duration-300">Investment</Link></li>
            </ul>
          </div>

          {/* Contact Info + Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-white/80 mb-6">
              <li>13-e, Tulsi Nagar Rd, Tulsi Nagar, Mahalaxmi Nagar</li>
              <li>Indore, Madhya Pradesh 452010</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: blueoceanbuildingsolutions@gmail.com</li>
            </ul>
            <div className="w-full h-48 rounded-md overflow-hidden shadow-lg border border-white/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3533264984326!2d75.92173439999999!3d22.7524573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d58b0f6bf51%3A0x2a96a380b27ab188!2sBlue%20Ocean%20Building%20Solution!5e1!3m2!1sen!2sin!4v1749124387566!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/30 mt-12 pt-6 text-center text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} RealEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
