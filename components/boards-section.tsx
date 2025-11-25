export default function BoardsSection() {
  const boards = [
    {
      type: 'OSB',
      use: 'External sheathing and floor decking',
      thickness: '3/8" to 1-1/8"',
      fastening: '2" screws @ 12" O.C.'
    },
    {
      type: 'Cement Board',
      use: 'Wet areas, moisture-prone zones',
      thickness: '6-12mm',
      fastening: 'Corrosion-resistant fasteners'
    },
    {
      type: 'Gypsum Board',
      use: 'Interior finishes and fire protection',
      thickness: '12.5-15mm',
      fastening: 'Joint compound and tape finish'
    },
  ]

  return (
    <section id="boards" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Sheathing & Finish Boards</h2>
        
        <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          The UNI QUBE system uses various board types for sheathing and finishing, each serving specific purposes in the building envelope.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {boards.map((board, idx) => (
            <div key={idx} className="p-8 bg-card border border-border rounded-xl hover:border-accent transition-colors">
              <h3 className="text-2xl font-bold text-accent mb-4">{board.type}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Use</p>
                  <p className="text-foreground font-semibold">{board.use}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Thickness</p>
                  <p className="text-foreground font-semibold">{board.thickness}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Fastening</p>
                  <p className="text-foreground font-semibold">{board.fastening}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
