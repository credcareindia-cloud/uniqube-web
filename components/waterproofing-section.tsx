export default function WaterproofingSection() {
  return (
    <section id="waterproofing" className="py-24 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Waterproofing System</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/tyvek-waterproofing-membrane-installation-building.jpg"
              alt="Waterproofing System"
              className="w-full rounded-xl"
            />
          </div>

          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Tyvek waterproofing membrane system protects the building envelope from water infiltration while allowing moisture vapor to escape, preventing moisture accumulation within walls.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Vapor Permeability</h4>
                  <p className="text-sm text-muted-foreground">Allows moisture escape while blocking liquid water</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Durability</h4>
                  <p className="text-sm text-muted-foreground">UV resistant and maintains integrity for years</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Ease of Application</h4>
                  <p className="text-sm text-muted-foreground">Simple installation with minimal fasteners</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card rounded-xl border border-border">
              <h4 className="font-bold text-foreground mb-3">Specification</h4>
              <p className="text-muted-foreground text-sm">
                <strong>Product:</strong> Tyvek HomeWrap<br/>
                <strong>Weight:</strong> 34 gsm<br/>
                <strong>Tear Strength:</strong> High durability
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
