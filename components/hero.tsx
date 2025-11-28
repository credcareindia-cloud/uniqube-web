'use client'

import { ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Hero() {
  const [showMainVideo, setShowMainVideo] = useState(false)
  const logoVideoRef = useRef<HTMLVideoElement>(null)
  const mainVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const logoVideo = logoVideoRef.current
    if (logoVideo) {
      const handleLogoEnd = () => {
        setShowMainVideo(true)
        // Start main video with fade in
        if (mainVideoRef.current) {
          mainVideoRef.current.play()
        }
      }
      logoVideo.addEventListener('ended', handleLogoEnd)
      return () => logoVideo.removeEventListener('ended', handleLogoEnd)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Logo Animation Video - Plays first */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showMainVideo ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <video
          ref={logoVideoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://yvt4zt8otzn0p90m.public.blob.vercel-storage.com/VID-20251128-WA0005_1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Video Background - Plays after logo animation */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${showMainVideo ? 'opacity-100' : 'opacity-0'}`}>
        <video
          ref={mainVideoRef}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="uni.mp4" type="video/mp4" />
        </video>

        {/* Minimal gradient overlay - only for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Main Content - Centered and Minimal - Only visible when main video plays */}
      <div className={`relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 transition-opacity duration-1000 ${showMainVideo ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10 animate-fade-in">

          {/* Main Headline - Apple-style Typography */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-white leading-[0.95] tracking-tight">
              Revolutionary
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white/90 leading-tight tracking-tight">
              Modular Construction
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed pt-2 sm:pt-3 md:pt-4 px-2">
              Precision-engineered building systems for the future
            </p>
          </div>

          {/* CTA Buttons - Minimal Apple-style */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center pt-4 sm:pt-6 md:pt-8">
            <button
              onClick={() => scrollToSection('overview')}
              className="w-full sm:w-auto group px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-white text-black rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
            >
              <span>Explore System</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 border-2 border-white/30 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
            </button>
          </div>

          {/* Minimal Stats - Clean Apple-style */}
          <div className="pt-8 sm:pt-12 md:pt-16">
            <div className="inline-flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-white/20 backdrop-blur-md bg-white/10 rounded-2xl sm:rounded-full px-2 py-3 border border-white/20">
              {[
                { value: '50%', label: 'Faster' },
                { value: '30+', label: 'Projects' },
                { value: '100%', label: 'Quality' },
              ].map((stat, index) => (
                <div key={index} className="px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-0 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-0.5 sm:mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-xs md:text-sm text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Minimal - Only visible when main video plays */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-1000 ${showMainVideo ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
