export default function SystemOverview() {
  const features = [
    {
      icon: '🏗️',
      title: 'Light Gauge Steel',
      description: 'Galvanized steel framing providing structural integrity while maintaining lightweight properties. Fire and pest resistant.'
    },
    {
      icon: '🛡️',
      title: 'Waterproofing',
      description: 'Tyvek membrane system protecting from moisture infiltration while allowing vapor transmission.'
    },
    {
      icon: '🌡️',
      title: 'Insulation',
      description: 'Rockwool insulation (75kg/m³) providing superior thermal and acoustic performance with fire resistance.'
    },
    {
      icon: '🪟',
      title: 'Thermal Windows',
      description: 'High-performance aluminum windows with thermal breaks and double-glazed glass for energy efficiency.'
    },
    {
      icon: '🎨',
      title: 'ACM Cladding',
      description: 'Fire-rated A2 aluminum composite panels providing aesthetics, weather protection, and fire safety.'
    },
    {
      icon: '⚡',
      title: 'MEP Integration',
      description: 'Modular MEP systems designed for easy installation within wall and ceiling cavities.'
    },
  ]

  return (
    <section id="overview" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">System Overview</h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            The UNI QUBE system represents an innovative approach to modern construction, utilizing Light Gauge Steel framing technology combined with advanced building materials to create durable, energy-efficient structures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-xl bg-card border border-border hover:border-accent hover:bg-card/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
