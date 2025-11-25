"use client"

import { useState, useRef, useEffect } from "react"

interface PopupPosition {
  top: number
  left: number
}

export default function FeaturesBento() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [popupPosition, setPopupPosition] = useState<PopupPosition>({ top: 0, left: 0 })
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

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
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">UniQube System Capabilities</h2>
          <p className="text-lg text-slate-600">Advanced modular construction engineered for precision</p>
        </div>

        <div className="grid grid-cols-3 gap-6 auto-rows-[320px] md:auto-rows-[360px]">
          {/* 1. Modular Assembly - Top Left */}
          <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-shadow group">
            <div className="h-full flex flex-col">
              <div className="px-6 pt-6 pb-4">
                <h3 className="text-xl font-bold text-slate-900">Modular Assembly</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/modular-construction-units-stacked-assembly.jpg"
                  alt="Modular Assembly"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  ref={(el) => (buttonRefs.current["modular"] = el)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-slate-50"
                  onMouseEnter={() => handleMouseEnter("modular")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 2. Precision Engineering - Top Center */}
          <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-shadow group">
            <div className="h-full flex flex-col">
              <div className="px-6 pt-6 pb-4">
                <h3 className="text-xl font-bold text-slate-900">Technical data sheet</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/precision-measurement-construction-tolerances-engi.jpg"
                  alt="Precision Engineering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  ref={(el) => (buttonRefs.current["precision"] = el)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-slate-50"
                  onMouseEnter={() => handleMouseEnter("precision")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 3. Integrated Systems - Top Right */}
          <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-shadow group">
            <div className="h-full flex flex-col">
              <div className="px-6 pt-6 pb-4">
                <h3 className="text-xl font-bold text-slate-900">Pre-Integrated MEP</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/integrated-mep-systems-electrical-plumbing-hvac-co.jpg"
                  alt="Integrated Systems"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  ref={(el) => (buttonRefs.current["mep"] = el)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-slate-50"
                  onMouseEnter={() => handleMouseEnter("mep")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 4. Structural Performance - Bottom Left (2x1) */}
          <div className="col-span-2 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 hover:shadow-lg transition-shadow group">
            <div className="h-full flex flex-col">
              <div className="px-6 pt-6 pb-4">
                <h3 className="text-2xl font-bold text-slate-900">Structural Capacity</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/structural-frame-lgs-light-gauge-steel-building.jpg"
                  alt="Structural"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  ref={(el) => (buttonRefs.current["structural"] = el)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-slate-50"
                  onMouseEnter={() => handleMouseEnter("structural")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 5. Energy Efficiency - Bottom Right */}
          <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:shadow-lg transition-shadow group">
            <div className="h-full flex flex-col">
              <div className="px-6 pt-6 pb-4">
                <h3 className="text-xl font-bold text-white">Energy Efficient</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <img
                  src="/sustainable-green-construction-energy-efficient-bu.jpg"
                  alt="Energy Efficiency"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-300"
                />
                <button
                  ref={(el) => (buttonRefs.current["energy"] = el)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-slate-50"
                  onMouseEnter={() => handleMouseEnter("energy")}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
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
              <h4 className="font-bold text-slate-900 mb-2">
                {cardData[hoveredCard as keyof typeof cardData].title}
              </h4>
              <p className="text-sm text-slate-600 mb-3">
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
