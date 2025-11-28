'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Phone, Mail, Globe, Linkedin, Instagram, Twitter, Facebook, Send, Loader2 } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6 shadow-lg">
            Get In Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Your Project?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team to discuss how UniQube can revolutionize your construction project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Contact Info Cards - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phone Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-200 hover:border-orange-400 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Phone</p>
                  <a href="tel:+97165262202" className="text-xl font-black text-slate-900 hover:text-orange-500 transition-colors block">
                    +971 6 526 2202
                  </a>
                  <p className="text-sm text-slate-600 mt-2">Monday - Friday, 8 AM - 6 PM (GST)</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-200 hover:border-orange-400 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Email</p>
                  <a href="mailto:service@uniqube.co" className="text-xl font-black text-slate-900 hover:text-orange-500 transition-colors block break-all">
                    service@uniqube.co
                  </a>
                  <p className="text-sm text-slate-600 mt-2">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Website Card */}
            <div className="group bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-200 hover:border-orange-400 transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Website</p>
                  <a href="https://www.uniqube.co" target="_blank" rel="noopener noreferrer" className="text-xl font-black text-slate-900 hover:text-orange-500 transition-colors block">
                    www.uniqube.co
                  </a>
                  <p className="text-sm text-slate-600 mt-2">Explore our projects & resources</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl text-white">
              <h3 className="text-lg font-black mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border-2 border-slate-200">
              <div className="mb-8">
                <h3 className="text-3xl font-black text-slate-900 mb-2">Send Us a Message</h3>
                <p className="text-slate-600">Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 6 526 2202"
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none transition-all font-medium"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-black py-5 rounded-xl text-lg hover:from-orange-600 hover:to-red-600 transition-all shadow-xl hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
