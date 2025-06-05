import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">RealEstate</h3>
            <p className="text-gray-400">
              Your trusted partner in finding the perfect property.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/buying" className="text-gray-400 hover:text-white">Buying</Link></li>
              <li><Link href="/services/selling" className="text-gray-400 hover:text-white">Selling</Link></li>
              <li><Link href="/services/renting" className="text-gray-400 hover:text-white">Renting</Link></li>
              <li><Link href="/services/investment" className="text-gray-400 hover:text-white">Investment</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Real Estate Street</li>
              <li>City, State 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@realestate.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RealEstate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 