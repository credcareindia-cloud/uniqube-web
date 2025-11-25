export default function JoistsSection() {
  const joistTypes = [
    { code: '2F1/3F1/4F1', desc: 'Floor Joists', qty: 'Varies by level' },
    { code: 'RF1', desc: 'Roof Trusses', qty: 'As per design' },
    { code: 'CF1', desc: 'Ceiling Joists', qty: 'As per design' },
  ]

  return (
    <section id="joists" className="py-24 px-6 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Joists & Roof Trusses</h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Light gauge steel joists and trusses provide structural support for floors and roofs. These components are engineered to span distances while supporting designed loads efficiently.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full">
            <thead>
              <tr className="bg-card border-b-2 border-border">
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Code</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Description</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {joistTypes.map((item, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-card/50 transition-colors">
                  <td className="px-6 py-4 font-mono text-accent font-bold">{item.code}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.desc}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-card rounded-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Floor Systems</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Floor joists are designed for optimal span and load capacity. Each level utilizes precisely engineered components for rapid installation.
            </p>
            <img
              src="/floor-joist-system-steel-framework.jpg"
              alt="Floor Joists"
              className="w-full rounded-lg"
            />
          </div>

          <div className="p-8 bg-card rounded-xl border border-border">
            <h3 className="text-xl font-bold text-foreground mb-4">Roof Trusses</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Engineered roof trusses provide exceptional strength with minimal material. Prefabricated for precision and speed.
            </p>
            <img
              src="/roof-truss-steel-construction-engineering.jpg"
              alt="Roof Trusses"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
