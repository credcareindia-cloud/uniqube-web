export default function LgsFrames() {
  const specs = [
    { label: 'Carbon (C)', value: '≤0.25%' },
    { label: 'Iron (Fe)', value: '98-99%' },
    { label: 'Thickness', value: '0.8-1.5mm' },
    { label: 'Yield Strength', value: '33 KSI' },
  ]

  return (
    <section id="lgs-frames" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Light Gauge Steel Frames</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              LGS wall frames form the structural skeleton of the building. These galvanized steel components are lightweight yet strong, providing excellent durability and resistance to environmental factors.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, idx) => (
                <div key={idx} className="p-4 bg-card rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">{spec.label}</p>
                  <p className="text-xl font-bold text-accent">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="/light-gauge-steel-frames-galvanized-metal-construc.jpg"
              alt="LGS Frames"
              className="w-full rounded-xl"
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">Key Advantages</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-muted-foreground">
              <span className="text-accent font-bold">•</span>
              <span>Lightweight yet structurally superior to traditional methods</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <span className="text-accent font-bold">•</span>
              <span>Corrosion resistance through galvanization process</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <span className="text-accent font-bold">•</span>
              <span>Dimensional precision for rapid assembly</span>
            </li>
            <li className="flex gap-3 text-muted-foreground">
              <span className="text-accent font-bold">•</span>
              <span>Non-combustible for enhanced fire safety</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
