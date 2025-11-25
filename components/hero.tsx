'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://yvt4zt8otzn0p90m.public.blob.vercel-storage.com/WhatsApp%20Video%202025-11-24%20at%2018.02.23_fee7fe3c.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Revolutionary Modular
            <span className="block text-accent"> Construction</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 font-light">
            Innovation in Building Systems
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('overview')}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-white/90 transition-all shadow-lg"
            >
              Explore System
            </Button>

            <Button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Watch Video
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-pulse">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
