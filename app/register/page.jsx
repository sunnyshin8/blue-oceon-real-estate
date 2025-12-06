'use client'
import { useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    affiliated: '',
    certified: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.mobile,
          propertyType: 'register as partner',
          location: form.affiliated || 'N/A',
          budget: 'N/A',
          message: `Certified: ${form.certified}`,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setForm({
          name: '',
          mobile: '',
          email: '',
          affiliated: '',
          certified: '',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('register as partner error:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-[#729FF2] overflow-auto pt-24 pb-8"
    >
      <div className="bg-white rounded-3xl shadow-2xl px-2 sm:px-4 md:px-6 py-6 sm:py-8 w-full max-w-md mx-2 border border-[#729FF2] transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-[#2B477B] tracking-wide drop-shadow-lg">
          register as partner Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[#2B477B] mb-1 font-semibold text-base">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-[#729FF2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#729FF2] text-[#2B477B] bg-[#f7faff] placeholder-gray-400 transition"
            />
          </div>
          <div>
            <label className="block text-[#2B477B] mb-1 font-semibold text-base">Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
              className="w-full px-4 py-2 border border-[#729FF2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#729FF2] text-[#2B477B] bg-[#f7faff] placeholder-gray-400 transition"
            />
          </div>
          <div>
            <label className="block text-[#2B477B] mb-1 font-semibold text-base">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-[#729FF2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#729FF2] text-[#2B477B] bg-[#f7faff] placeholder-gray-400 transition"
            />
          </div>
          <div>
            <label className="block text-[#2B477B] mb-1 font-semibold text-base">Affiliated</label>
            <input
              type="text"
              name="affiliated"
              value={form.affiliated}
              onChange={handleChange}
              placeholder="Affiliated organization"
              className="w-full px-4 py-2 border border-[#729FF2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#729FF2] text-[#2B477B] bg-[#f7faff] placeholder-gray-400 transition"
            />
          </div>
          <div>
            <label className="block text-[#2B477B] mb-1 font-semibold text-base">Certified</label>
            <div className="flex space-x-6 mt-1">
              <label className="flex items-center text-[#2B477B] font-medium cursor-pointer">
                <input
                  type="radio"
                  name="certified"
                  value="yes"
                  checked={form.certified === 'yes'}
                  onChange={handleChange}
                  className="accent-[#729FF2] w-4 h-4"
                />
                <span className="ml-2 text-base">Yes</span>
              </label>
              <label className="flex items-center text-[#2B477B] font-medium cursor-pointer">
                <input
                  type="radio"
                  name="certified"
                  value="no"
                  checked={form.certified === 'no'}
                  onChange={handleChange}
                  required
                  className="accent-[#729FF2] w-4 h-4"
                />
                <span className="ml-2 text-base">No</span>
              </label>
            </div>
          </div>
          
          {status === 'success' && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-sm">
              register as partner successful! We'll contact you soon.
            </div>
          )}
          
          {status === 'error' && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-sm">
              register as partner failed. Please try again or contact us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#729FF2] to-[#2B477B] text-white py-2 rounded-xl font-bold text-base shadow-lg hover:from-[#4a7bd4] hover:to-[#1d2e4a] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  )
}