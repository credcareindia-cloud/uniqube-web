export default function WindowsSection() {
  return (
    <section id="windows" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Windows & Doors</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Thermal Break Technology</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our advanced window systems incorporate thermal breaks that dramatically reduce heat transfer, improving energy efficiency by up to 40%. The double-glazed configuration with low-E coatings provides superior insulation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Powder-coated aluminum frames are available in multiple finishes with a 25-year warranty, ensuring lasting beauty and performance.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold">→</span>
                <div>
                  <p className="font-semibold text-foreground">Double Glazing</p>
                  <p className="text-sm text-muted-foreground">Low-E coating for optimal insulation</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold">→</span>
                <div>
                  <p className="font-semibold text-foreground">Thermal Breaks</p>
                  <p className="text-sm text-muted-foreground">Up to 40% improved energy efficiency</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-accent font-bold">→</span>
                <div>
                  <p className="font-semibold text-foreground">Multiple Finishes</p>
                  <p className="text-sm text-muted-foreground">Anodized or powder-coated options</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/thermal-break-aluminum-windows-double-glazing-mode.jpg"
              alt="Thermal Break Windows"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
