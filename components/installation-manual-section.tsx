"use client"

import { useState } from "react"

const SECTIONS = [
  {
    id: "foundation",
    code: "01",
    title: "Foundations & Base Connection",
    short: "Strip, raft, pad and slab foundations – tolerances, anchoring, QC.",
    discipline: "CIVIL / STRUCTURE",
  },
  {
    id: "lgsFrames",
    code: "02",
    title: "External & Internal LGS Frames",
    short: "Load-bearing / non-load-bearing walls, studs, tracks, bracing.",
    discipline: "STRUCTURE",
  },
  {
    id: "floorJoists",
    code: "03",
    title: "Floor Joists & Subfloor",
    short: "Joists, noggins, deflection control, sheathing, service penetrations.",
    discipline: "STRUCTURE",
  },
  {
    id: "boarding",
    code: "04",
    title: "Boarding System (OSB, USG, Cement Board)",
    short: "Board types, fixing patterns, joint gapping, edge support.",
    discipline: "ARCHITECTURAL",
  },
  {
    id: "waterproofing",
    code: "05",
    title: "Waterproofing System",
    short: "Tyvek + liquid-applied membranes for walls, roofs, wet areas.",
    discipline: "ARCHITECTURAL",
  },
  {
    id: "insulation",
    code: "06",
    title: "Insulation in Wall Cavity",
    short: "Rockwool, spray foam and light-weight concrete infill options.",
    discipline: "THERMAL / ACOUSTIC",
  },
  {
    id: "windowsDoors",
    code: "07",
    title: "Windows & Doors (Spec Overview)",
    short: "UPVC / aluminum windows and door systems – performance overview.",
    discipline: "ARCHITECTURAL",
  },
  {
    id: "cladding",
    code: "08",
    title: "Cladding System (ACP, Brick, Paint)",
    short: "Ventilated ACP, brick slips, render/paint systems and substructure.",
    discipline: "FACADE",
  },
  {
    id: "roofing",
    code: "09",
    title: "Roofing Envelope",
    short: "Standing seam, shingles, flat roof membranes, gutters, drainage.",
    discipline: "ROOFING",
  },
  {
    id: "mepOverview",
    code: "10",
    title: "MEP Overview",
    short: "High-level coordination of electrical, plumbing, HVAC in UniQube walls.",
    discipline: "MEP COORDINATION",
  },
  {
    id: "jointTreatment",
    code: "11",
    title: "Joint Treatment & Board Waterproofing",
    short: "Mesh, compounds, expansion joints, wet zone detailing.",
    discipline: "FINISH / ENVELOPE",
  },
  {
    id: "flooring",
    code: "12",
    title: "Flooring System",
    short: "Tiles, vinyl/SPC, solid surface wet room floors.",
    discipline: "FINISH",
  },
  {
    id: "ceilings",
    code: "13",
    title: "Ceiling System",
    short: "Gypsum ceilings, cement board soffits, access panels.",
    discipline: "FINISH / MEP",
  },
  {
    id: "painting",
    code: "14",
    title: "Painting & Finishing",
    short: "Primer, putty, top coats, interior & exterior systems.",
    discipline: "FINISH",
  },
  {
    id: "roofSystem",
    code: "15",
    title: "Roof Structural System",
    short: "Trusses, joists, hybrid roofs, structural tying.",
    discipline: "STRUCTURE",
  },
  {
    id: "facadeSystems",
    code: "16",
    title: "External Facade Systems",
    short: "ACP, brick slips, WPC, lap siding, stone – full facade logic.",
    discipline: "FACADE",
  },
  {
    id: "doorWindowInstall",
    code: "17",
    title: "Door & Window Installation",
    short: "Flashing, waterproofing, foam, sealants, expansion gaps.",
    discipline: "FACADE / ARCHITECTURAL",
  },
  {
    id: "electrical",
    code: "18",
    title: "Electrical System",
    short: "Conduits, DB, circuits, smart-ready, testing & commissioning.",
    discipline: "MEP – ELECTRICAL",
  },
  {
    id: "plumbing",
    code: "19",
    title: "Plumbing System",
    short: "PPR, UPVC, manifolds, drainage slopes, testing.",
    discipline: "MEP – PLUMBING",
  },
  {
    id: "hvac",
    code: "20",
    title: "HVAC System",
    short: "Split, ducted, VRF systems – piping, drains, commissioning.",
    discipline: "MEP – HVAC",
  },
  {
    id: "warranty",
    code: "21",
    title: "UniQube Warranty System",
    short: "Structural, waterproofing, MEP, facade, finishes & conditions.",
    discipline: "LEGAL / QA",
  },
]

export default function InstallationManualSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Installation Manual - 21 Sections</h2>
          <p className="text-lg text-slate-600">Complete technical documentation for UniQube assembly</p>
        </div>

        {/* Sections List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECTIONS.map((section) => (
            <div
              key={section.id}
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
              className="bg-white rounded-xl border-2 border-slate-200 p-6 cursor-pointer hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-orange-500 bg-orange-50 px-3 py-1 rounded-full">
                    {section.code}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 uppercase">{section.discipline}</span>
                </div>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm group-hover:text-orange-600 transition-colors">
                {section.title}
              </h3>
              <p className="text-xs text-slate-600 mb-3">{section.short}</p>
            </div>
          ))}
        </div>

        {/* CTA to Full Manual */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Need comprehensive installation guidance?</p>
          <a
            href="/docs"
            className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors"
          >
            Open Full Installation Manual
          </a>
        </div>
      </div>
    </section>
  )
}
