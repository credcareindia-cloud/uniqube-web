export default function AcmSection() {
  const specs = [
    { label: 'Product', value: 'Alubond FR-A2' },
    { label: 'Fire Rating', value: 'A2-s1, d0' },
    { label: 'Thickness', value: '4mm' },
    { label: 'Weight', value: '8.0 kg/m²' },
    { label: 'Core', value: 'Mineral-filled' },
    { label: 'Warranty', value: '10 years' },
  ]

  return (
    <section id="acm" className="py-24 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">ACM Cladding System</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/aluminum-composite-cladding-panels-modern-facade-f.jpg"
              alt="ACM Cladding"
              className="w-full rounded-xl"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Fire-Rated Aluminum Composite</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Alubond FR-A2 panels meet the most stringent fire safety standards including EN 13501 A2-s1, d0 and NFPA 285. The mineral-filled core is non-combustible.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Available in unlimited colors and finishes, ACM cladding offers architects complete design freedom while maintaining exceptional performance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {specs.map((spec, idx) => (
            <div key={idx} className="p-6 bg-card rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">{spec.label}</p>
              <p className="text-2xl font-bold text-accent">{spec.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Design & Performance Benefits</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-foreground mb-3">Aesthetics</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Unlimited color options</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Multiple finishes available</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Premium architectural appeal</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Performance</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Weather resistant</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Fire-rated protection</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>Long-term durability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
