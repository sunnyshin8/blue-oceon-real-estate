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

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (API call or validation)
    alert('Registration submitted!')
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-[#729FF2] overflow-auto pt-24 pb-8"
    >
      <div className="bg-white rounded-3xl shadow-2xl px-2 sm:px-4 md:px-6 py-6 sm:py-8 w-full max-w-md mx-2 border border-[#729FF2] transition-all duration-300">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-[#2B477B] tracking-wide drop-shadow-lg">
          Registration Form
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
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#729FF2] to-[#2B477B] text-white py-2 rounded-xl font-bold text-base shadow-lg hover:from-[#4a7bd4] hover:to-[#1d2e4a] transition-all duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}