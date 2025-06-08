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
    alert('Registration submitted!')
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 py-10 md:px-6 lg:px-8 bg-[#729FF2]"
    >
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 md:p-12 w-full max-w-xl border border-[#729FF2] transition-all duration-300">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-[#2B477B] tracking-wide drop-shadow-lg">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label className="block text-[#2B477B] mb-2 font-semibold text-lg">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-5 py-3 border border-[#729FF2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#729FF2] text-[#2B477B] bg-[#f7faff] placeholder-gray-400 transition"
            />
          </div>
          <div>
            <label className="block text-[#2B477B] mb-2 font-semibold text-lg">Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
              placeholder="Enter your mobile number"
              className="w-full px-5 py-3 border border-[#729FF2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#729FF2] text-[#2B477B] bg-[#f7faff] placeholder-gray-400 transition"
            />
          </div>
          <div>
            <label className="block text-[#2B477B] mb-2 font-semibold text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full px-5 py-3 border border-[#729FF2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#729FF2] text-[#2B477B] bg-[#f7faff] placeholder-gray-400 transition"
            />
          </div>
          <div>
            <label className="block text-[#2B477B] mb-2 font-semibold text-lg">Affiliated</label>
            <input
              type="text"
              name="affiliated"
              value={form.affiliated}
              onChange={handleChange}
              required
              placeholder="Affiliated organization"
              className="w-full px-5 py-3 border border-[#729FF2] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#729FF2] text-[#2B477B] bg-[#f7faff] placeholder-gray-400 transition"
            />
          </div>
          <div>
            <label className="block text-[#2B477B] mb-2 font-semibold text-lg">Certified</label>
            <div className="flex space-x-10 mt-1">
              <label className="flex items-center text-[#2B477B] font-medium cursor-pointer">
                <input
                  type="radio"
                  name="certified"
                  value="yes"
                  checked={form.certified === 'yes'}
                  onChange={handleChange}
                  required
                  className="accent-[#729FF2] w-5 h-5"
                />
                <span className="ml-2 text-lg">Yes</span>
              </label>
              <label className="flex items-center text-[#2B477B] font-medium cursor-pointer">
                <input
                  type="radio"
                  name="certified"
                  value="no"
                  checked={form.certified === 'no'}
                  onChange={handleChange}
                  required
                  className="accent-[#729FF2] w-5 h-5"
                />
                <span className="ml-2 text-lg">No</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#729FF2] to-[#2B477B] text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:from-[#4a7bd4] hover:to-[#1d2e4a] transition-all duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
