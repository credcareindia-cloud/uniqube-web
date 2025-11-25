'use client'

import { useState } from 'react'

const navItems = [
  { label: 'Overview', id: 'overview' },
  { label: 'Foundation', id: 'foundation' },
  { label: 'LGS Frames', id: 'lgs-frames' },
  { label: 'Joists & Trusses', id: 'joists' },
  { label: 'Boards', id: 'boards' },
  { label: 'Waterproofing', id: 'waterproofing' },
  { label: 'Windows & Doors', id: 'windows' },
  { label: 'ACM Cladding', id: 'acm' },
  { label: 'Contact', id: 'contact' },
]

export default function Navigation() {
  const [activeId, setActiveId] = useState('overview')

  const scrollToSection = (id: string) => {
    setActiveId(id)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-16 z-40 w-full bg-primary/95 backdrop-blur-sm border-b border-border/40 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-6 flex gap-8 py-4 whitespace-nowrap">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-medium transition-colors py-2 border-b-2 ${
              activeId === item.id
                ? 'text-accent border-accent'
                : 'text-primary-foreground/70 border-transparent hover:text-primary-foreground'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
