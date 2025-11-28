"use client"

import { useState, useRef, useEffect } from "react"

interface PopupPosition {
  top: number
  left: number
}

export default function FeaturesBento() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [popupPosition, setPopupPosition] = useState<PopupPosition>({ top: 0, left: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const updatePopupPosition = (cardId: string) => {
    const button = buttonRefs.current[cardId]
    if (button) {
      const rect = button.getBoundingClientRect()
      setPopupPosition({
        top: rect.top - 10,
        left: rect.left - 320 + rect.width
      })
    }
  }

  const handleMouseEnter = (cardId: string) => {
    setHoveredCard(cardId)
    updatePopupPosition(cardId)
  }

  const cardData = {
    modular: {
      title: "Modular Assembly System",
      description: "Factory-built precision modules with standardized connections for rapid on-site assembly.",
      image: "/modular-construction-units-stacked-assembly.jpg",
      features: [
        "50% faster construction time",
        "Quality controlled environment",
        "Weather-independent production"
      ]
    },
    precision: {
      title: "Technical data sheet",
      description: "CNC-manufactured components ensure perfect alignment and dimensional accuracy across all building elements.",
      image: "/precision-measurement-construction-tolerances-engi.jpg",
      features: [
        "Laser-guided measurements",
        "Automated quality control",
        "Zero-defect manufacturing"
      ]
    },
    mep: {
      title: "Pre-Integrated MEP Systems",
      description: "Electrical, plumbing, and HVAC systems factory-installed and tested before delivery to site.",
      image: "/integrated-mep-systems-electrical-plumbing-hvac-co.jpg",
      features: [
        "Pre-tested systems",
        "Reduced on-site coordination",
        "Plug-and-play connections"
      ]
    },
    structural: {
      title: "High-Performance Structural System",
      description: "Light Gauge Steel (LGS) frames engineered to meet rigorous load-bearing and seismic requirements.",
      image: "/structural-frame-lgs-light-gauge-steel-building.jpg",
      features: [
        "345 MPa yield strength",
        "Seismic zone certified",
        "Multi-story capability"
      ]
    },
    energy: {
      title: "Sustainable Energy Systems",
      description: "Advanced insulation and thermal management for superior energy performance and reduced operational costs.",
      image: "/sustainable-green-construction-energy-efficient-bu.jpg",
      features: [
        "High R-value insulation",
        "Thermal bridge elimination",
        "Up to 40% energy savings"
      ]
    }
  }

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Apple-style Typography */}
        <div className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-slate-900 mb-4 tracking-tight leading-tight">
            System Capabilities
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 font-light max-w-3xl mx-auto">
            Advanced modular construction engineered for precision
          </p>
        </div>

        {/* Mobile/Tablet: Single column stacked layout */}
        <div className="block md:hidden space-y-4">
          {/* 1. Modular Assembly */}
          <div className={`rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex flex-col">
              <div className="px-5 pt-5 pb-3">
                <h3 className="text-lg font-semibold text-slate-900 tracking-tight">Modular Assembly</h3>
              </div>
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/modular-construction-units-stacked-assembly.jpg"
                  alt="Modular Assembly"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-4 bg-white">
                <p className="text-sm text-slate-600 font-light mb-3">{cardData.modular.description}</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  {cardData.modular.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Precision Engineering */}
          <div className={`rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
            <div className="flex flex-col">
              <div className="px-5 pt-5 pb-3">
                <h3 className="text-lg font-semibold text-slate-900 tracking-tight">Technical Data Sheet</h3>
              </div>
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/precision-measurement-construction-tolerances-engi.jpg"
                  alt="Precision Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-4 bg-white">
                <p className="text-sm text-slate-600 font-light mb-3">{cardData.precision.description}</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  {cardData.precision.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Pre-Integrated MEP */}
          <div className={`rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
            <div className="flex flex-col">
              <div className="px-5 pt-5 pb-3">
                <h3 className="text-lg font-semibold text-slate-900 tracking-tight">Pre-Integrated MEP</h3>
              </div>
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/integrated-mep-systems-electrical-plumbing-hvac-co.jpg"
                  alt="Integrated Systems"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-4 bg-white">
                <p className="text-sm text-slate-600 font-light mb-3">{cardData.mep.description}</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  {cardData.mep.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 4. Structural Capacity */}
          <div className={`rounded-xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }}>
            <div className="flex flex-col">
              <div className="px-5 pt-5 pb-3">
                <h3 className="text-lg font-semibold text-slate-900 tracking-tight">Structural Capacity</h3>
              </div>
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/structural-frame-lgs-light-gauge-steel-building.jpg"
                  alt="Structural"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-4 bg-white">
                <p className="text-sm text-slate-600 font-light mb-3">{cardData.structural.description}</p>
                <ul className="text-xs text-slate-600 space-y-1">
                  {cardData.structural.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Energy Efficient */}
          <div className={`rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:shadow-lg transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '600ms' }}>
            <div className="flex flex-col">
              <div className="px-5 pt-5 pb-3">
                <h3 className="text-lg font-semibold text-white tracking-tight">Energy Efficient</h3>
              </div>
              <div className="h-48 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="/sustainable-green-construction-energy-efficient-bu.jpg"
                  alt="Energy Efficiency"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <div className="px-5 py-4 bg-slate-900">
                <p className="text-sm text-slate-300 font-light mb-3">{cardData.energy.description}</p>
                <ul className="text-xs text-slate-300 space-y-1">
                  {cardData.energy.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: Bento grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[280px] lg:auto-rows-[320px] xl:auto-rows-[360px]">
          {/* 1. Modular Assembly - Top Left */}
          <div className={`rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
            <div className="h-full flex flex-col">
              <div className="px-4 lg:px-6 pt-4 lg:pt-6 pb-3 lg:pb-4">
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 tracking-tight">Modular Assembly</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/modular-construction-units-stacked-assembly.jpg"
                  alt="Modular Assembly"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  ref={(el) => (buttonRefs.current["modular"] = el)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-orange-500 transition-colors group/btn"
                  onMouseEnter={() => handleMouseEnter("modular")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <svg className="w-4 h-4 text-slate-900 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 2. Precision Engineering - Top Center */}
          <div className={`rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '300ms' }}>
            <div className="h-full flex flex-col">
              <div className="px-4 lg:px-6 pt-4 lg:pt-6 pb-3 lg:pb-4">
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 tracking-tight">Technical Data Sheet</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/precision-measurement-construction-tolerances-engi.jpg"
                  alt="Precision Engineering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  ref={(el) => (buttonRefs.current["precision"] = el)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-orange-500 transition-colors group/btn"
                  onMouseEnter={() => handleMouseEnter("precision")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <svg className="w-4 h-4 text-slate-900 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 3. Integrated Systems - Top Right (spans 2 cols on md, 1 on lg) */}
          <div className={`md:col-span-2 lg:col-span-1 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
            <div className="h-full flex flex-col">
              <div className="px-4 lg:px-6 pt-4 lg:pt-6 pb-3 lg:pb-4">
                <h3 className="text-lg lg:text-xl font-semibold text-slate-900 tracking-tight">Pre-Integrated MEP</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/integrated-mep-systems-electrical-plumbing-hvac-co.jpg"
                  alt="Integrated Systems"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  ref={(el) => (buttonRefs.current["mep"] = el)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-orange-500 transition-colors group/btn"
                  onMouseEnter={() => handleMouseEnter("mep")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <svg className="w-4 h-4 text-slate-900 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 4. Structural Performance - Bottom Left (2x1 on lg) */}
          <div className={`lg:col-span-2 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }}>
            <div className="h-full flex flex-col">
              <div className="px-4 lg:px-6 pt-4 lg:pt-6 pb-3 lg:pb-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 tracking-tight">Structural Capacity</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/structural-frame-lgs-light-gauge-steel-building.jpg"
                  alt="Structural"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  ref={(el) => (buttonRefs.current["structural"] = el)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-orange-500 transition-colors group/btn"
                  onMouseEnter={() => handleMouseEnter("structural")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <svg className="w-4 h-4 text-slate-900 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 5. Energy Efficiency - Bottom Right */}
          <div className={`rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:shadow-lg transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '600ms' }}>
            <div className="h-full flex flex-col">
              <div className="px-4 lg:px-6 pt-4 lg:pt-6 pb-3 lg:pb-4">
                <h3 className="text-lg lg:text-xl font-semibold text-white tracking-tight">Energy Efficient</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="/sustainable-green-construction-energy-efficient-bu.jpg"
                  alt="Energy Efficiency"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-300"
                />
                <button
                  ref={(el) => (buttonRefs.current["energy"] = el)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-orange-500 transition-colors group/btn"
                  onMouseEnter={() => handleMouseEnter("energy")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <svg className="w-4 h-4 text-slate-900 group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Popup - Rendered outside grid to avoid clipping */}
        {hoveredCard && cardData[hoveredCard as keyof typeof cardData] && (
          <div
            className="fixed z-[9999] w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transition-opacity duration-200"
            style={{
              top: `${popupPosition.top}px`,
              left: `${popupPosition.left}px`,
              transform: 'translateY(-100%)'
            }}
            onMouseEnter={() => setHoveredCard(hoveredCard)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-100">
              <img
                src={cardData[hoveredCard as keyof typeof cardData].image}
                alt={cardData[hoveredCard as keyof typeof cardData].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-slate-900 mb-2 tracking-tight">
                {cardData[hoveredCard as keyof typeof cardData].title}
              </h4>
              <p className="text-sm text-slate-600 mb-3 font-light">
                {cardData[hoveredCard as keyof typeof cardData].description}
              </p>
              <ul className="text-xs text-slate-600 space-y-1">
                {cardData[hoveredCard as keyof typeof cardData].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
