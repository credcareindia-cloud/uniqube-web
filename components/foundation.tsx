export default function Foundation() {
  return (
    <section id="foundation" className="py-24 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Foundation System</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img
              src="/concrete-foundation-system-engineering-blueprints.jpg"
              alt="Foundation System"
              className="w-full rounded-xl"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Engineered Foundation Design</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our foundation system is engineered to provide optimal support for light gauge steel structures. The design incorporates proper drainage, vapor barriers, and reinforcement to ensure long-term stability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With precise anchor bolt positioning and grade-level specifications, the foundation integrates seamlessly with the LGS frame system.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Concrete Grade</p>
                <p className="text-lg font-bold text-foreground">M30 (30 MPa)</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Depth</p>
                <p className="text-lg font-bold text-foreground">600-1000mm</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Reinforcement</p>
                <p className="text-lg font-bold text-foreground">ASTM A615</p>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">Anchor Bolts</p>
                <p className="text-lg font-bold text-foreground">M20 @ 1.5m</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
