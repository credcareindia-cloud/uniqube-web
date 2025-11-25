"use client"

export default function FeaturesBento() {
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
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-slate-50">
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
                <h3 className="text-xl font-bold text-slate-900">±5mm Tolerances</h3>
              </div>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100">
                <img
                  src="/precision-measurement-construction-tolerances-engi.jpg"
                  alt="Precision Engineering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-slate-50">
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
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-slate-50">
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
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-slate-50">
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
                <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-slate-50">
                  <svg className="w-4 h-4 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
