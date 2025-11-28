import { Building2, Shield, Thermometer, Frame, Paintbrush, Zap } from 'lucide-react'

export default function SystemOverview() {
  const features = [
    {
      icon: Building2,
      title: 'Light Gauge Steel',
      description: 'Galvanized steel framing providing structural integrity while maintaining lightweight properties. Fire and pest resistant.',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Waterproofing',
      description: 'Tyvek membrane system protecting from moisture infiltration while allowing vapor transmission.',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Thermometer,
      title: 'Insulation',
      description: 'Rockwool insulation (75kg/m³) providing superior thermal and acoustic performance with fire resistance.',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Frame,
      title: 'Thermal Windows',
      description: 'High-performance aluminum windows with thermal breaks and double-glazed glass for energy efficiency.',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      icon: Paintbrush,
      title: 'ACM Cladding',
      description: 'Fire-rated A2 aluminum composite panels providing aesthetics, weather protection, and fire safety.',
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: Zap,
      title: 'MEP Integration',
      description: 'Modular MEP systems designed for easy installation within wall and ceiling cavities.',
      gradient: 'from-amber-500 to-orange-600'
    },
  ]

  return (
    <section id="overview" className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6 shadow-lg">
            Our Technology
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            System
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Overview
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            The UNI QUBE system represents an innovative approach to modern construction, utilizing Light Gauge Steel framing technology combined with advanced building materials to create durable, energy-efficient structures.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300`}>
                    <Icon className={`w-8 h-8 group-hover:text-slate-900 transition-colors`} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-white transition-colors">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-white/90 transition-colors">{feature.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-slate-100 rounded-full opacity-50 group-hover:bg-white/20 transition-colors"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 shadow-2xl text-white">
            <h3 className="text-3xl font-black mb-4">Ready to Learn More?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl">
              Explore our comprehensive installation manual for detailed technical specifications and guidelines.
            </p>
            <a
              href="#installation-manual"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>View Installation Manual</span>
              <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
