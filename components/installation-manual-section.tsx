"use client"

import Image from "next/image"
import { useState } from "react"

type SectionId =
  | "foundation"
  | "lgsFrames"
  | "floorJoists"
  | "flooring"
  | "boarding"
  | "waterproofing"
  | "insulation"
  | "windowsDoors"
  | "cladding"
  | "roofing"
  | "mepOverview"
  | "jointTreatment"
  | "ceilings"
  | "painting"
  | "roofSystem"
  | "facadeSystems"
  | "doorWindowInstall"
  | "electrical"
  | "plumbing"
  | "hvac"
  | "warranty"

interface SectionConfig {
  id: SectionId
  code: string
  title: string
  short: string
  discipline: string
  images: string[]
}

const SECTIONS: SectionConfig[] = [
  {
    id: "foundation",
    code: "01",
    title: "Foundations & Base Connection",
    short: "Strip, raft, pad and slab foundations – tolerances, anchoring, QC.",
    discipline: "CIVIL / STRUCTURE",
    images: ["Foundation 3D", "Anchor bolt detail", "DPC + starter track 3D"],
  },
  {
    id: "lgsFrames",
    code: "02",
    title: "External & Internal LGS Frames",
    short: "Load-bearing / non-load-bearing walls, studs, tracks, bracing.",
    discipline: "STRUCTURE",
    images: ["Wall frame 3D", "Hold-down / bracket detail"],
  },
  {
    id: "floorJoists",
    code: "03",
    title: "Floor Joists & Subfloor",
    short: "Joists, noggins, deflection control, sheathing, service penetrations.",
    discipline: "STRUCTURE",
    images: ["Joist layout 3D", "Joist-to-wall connection"],
  },
  {
    id: "boarding",
    code: "04",
    title: "Boarding System (OSB, USG, Cement Board)",
    short: "Board types, fixing patterns, joint gapping, edge support.",
    discipline: "ARCHITECTURAL",
    images: ["Wall board build-up 3D", "Screw pattern detail"],
  },
  {
    id: "waterproofing",
    code: "05",
    title: "Waterproofing System",
    short: "Tyvek + liquid-applied membranes for walls, roofs, wet areas.",
    discipline: "ARCHITECTURAL",
    images: ["Tyvek wrap 3D", "Liquid waterproofing at balcony / bathroom"],
  },
  {
    id: "insulation",
    code: "06",
    title: "Insulation in Wall Cavity",
    short: "Rockwool, spray foam and light-weight concrete infill options.",
    discipline: "THERMAL / ACOUSTIC",
    images: ["Wall cavity 3D with insulation variants"],
  },
  {
    id: "windowsDoors",
    code: "07",
    title: "Windows & Doors (Spec Overview)",
    short: "UPVC / aluminum windows and door systems – performance overview.",
    discipline: "ARCHITECTURAL",
    images: ["Window types 3D", "Door leaf & frame types"],
  },
  {
    id: "cladding",
    code: "08",
    title: "Cladding System (ACP, Brick, Paint)",
    short: "Ventilated ACP, brick slips, render/paint systems and substructure.",
    discipline: "FACADE",
    images: ["ACP substructure 3D", "Brick slip section"],
  },
  {
    id: "roofing",
    code: "09",
    title: "Roofing Envelope",
    short: "Standing seam, shingles, flat roof membranes, gutters, drainage.",
    discipline: "ROOFING",
    images: ["Roof build-up 3D", "Ridge & eaves detail"],
  },
  {
    id: "mepOverview",
    code: "10",
    title: "MEP Overview",
    short: "High-level coordination of electrical, plumbing, HVAC in UniQube walls.",
    discipline: "MEP COORDINATION",
    images: ["MEP coordination section 3D"],
  },
  {
    id: "jointTreatment",
    code: "11",
    title: "Joint Treatment & Board Waterproofing",
    short: "Mesh, compounds, expansion joints, wet zone detailing.",
    discipline: "FINISH / ENVELOPE",
    images: ["Joint treatment 3D", "Wet area joint detail"],
  },
  {
    id: "flooring",
    code: "12",
    title: "Flooring System",
    short: "Tiles, vinyl/SPC, solid surface wet room floors.",
    discipline: "FINISH",
    images: ["Tile build-up 3D", "Wet room floor detail"],
  },
  {
    id: "ceilings",
    code: "13",
    title: "Ceiling System",
    short: "Gypsum ceilings, cement board soffits, access panels.",
    discipline: "FINISH / MEP",
    images: ["Ceiling frame + board 3D"],
  },
  {
    id: "painting",
    code: "14",
    title: "Painting & Finishing",
    short: "Primer, putty, top coats, interior & exterior systems.",
    discipline: "FINISH",
    images: ["Interior / exterior paint layer diagram"],
  },
  {
    id: "roofSystem",
    code: "15",
    title: "Roof Structural System",
    short: "Trusses, joists, hybrid roofs, structural tying.",
    discipline: "STRUCTURE",
    images: ["Truss 3D", "Roof-to-wall connection"],
  },
  {
    id: "facadeSystems",
    code: "16",
    title: "External Facade Systems",
    short: "ACP, brick slips, WPC, lap siding, stone – full facade logic.",
    discipline: "FACADE",
    images: ["Facade build-up 3D"],
  },
  {
    id: "doorWindowInstall",
    code: "17",
    title: "Door & Window Installation",
    short: "Flashing, waterproofing, foam, sealants, expansion gaps.",
    discipline: "FACADE / ARCHITECTURAL",
    images: ["Head / sill / jamb details"],
  },
  {
    id: "electrical",
    code: "18",
    title: "Electrical System",
    short: "Conduits, DB, circuits, smart-ready, testing & commissioning.",
    discipline: "MEP – ELECTRICAL",
    images: ["Conduit in LGS wall 3D", "DB layout sketch"],
  },
  {
    id: "plumbing",
    code: "19",
    title: "Plumbing System",
    short: "PPR, UPVC, manifolds, drainage slopes, testing.",
    discipline: "MEP – PLUMBING",
    images: ["Bathroom plumbing layout 3D"],
  },
  {
    id: "hvac",
    code: "20",
    title: "HVAC System",
    short: "Split, ducted, VRF systems – piping, drains, commissioning.",
    discipline: "MEP – HVAC",
    images: ["Split AC + drain detail", "Ducted system layout"],
  },
  {
    id: "warranty",
    code: "21",
    title: "UniQube Warranty System",
    short: "Structural, waterproofing, MEP, facade, finishes & conditions.",
    discipline: "LEGAL / QA",
    images: ["Warranty coverage diagram"],
  },
]

export default function InstallationManualSection() {
  const [activeId, setActiveId] = useState<SectionId>("foundation")

  const active = SECTIONS.find((s) => s.id === activeId)!

  return (
    <section id="installation-manual" className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-10 h-10">
              <Image src="/logo.png" alt="UniQube Logo" fill className="object-contain" />
            </div>
            <div>
              <div className="text-base font-bold tracking-tight text-slate-900">UniQube – Installation Manual</div>
              <div className="text-xs text-slate-500">Sections 1–21</div>
            </div>
          </div>
          {/* <div className="flex items-center gap-3 flex-wrap">
            <button className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              Download PDF
            </button>
            <span className="text-xs rounded-full border border-slate-300 bg-slate-50 px-3 py-1.5 text-slate-600 font-medium">
              v2.0 Project-specific
            </span>
          </div> */}
        </div>

        <div className="flex gap-6">
          {/* Sidebar Navigation */}
          <aside className="hidden md:block w-72 shrink-0">
            <div className="sticky top-24 space-y-3 max-h-[calc(100vh-120px)] overflow-y-auto pr-3">
              <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold px-1 mb-3">Sections</div>
              <nav className="space-y-2">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveId(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm leading-snug transition ${
                      activeId === section.id
                        ? "border-orange-400 bg-orange-50 text-slate-900 shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-slate-500">{section.code}</span>
                      <span className="text-xs text-slate-500">{section.discipline}</span>
                    </div>
                    <div className="truncate text-sm font-semibold text-slate-900">{section.title}</div>
                    <div className="text-xs text-slate-600 line-clamp-2 mt-1">{section.short}</div>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-6 pb-12">
            {/* Section header */}
            <section className="rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Section {active.code} · {active.discipline}
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mt-1">{active.title}</h1>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white">
                    Web View + PDF
                  </span>
                </div>
              </div>
              <p className="text-base text-slate-700 leading-relaxed">{active.short}</p>
            </section>

            {/* Content cards */}
            <section className="grid gap-6 md:grid-cols-2">
              {/* Overview card */}
              <article className="rounded-2xl border-2 border-slate-200 bg-white p-6 flex flex-col shadow-sm hover:shadow-md transition">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h2 className="text-base font-bold text-slate-900">1. Overview & Scope</h2>
                  <span className="text-xs rounded-full bg-orange-50 border border-orange-200 px-2.5 py-1 text-orange-700 font-medium">
                    Read first
                  </span>
                </div>
                <div className="text-sm text-slate-700 space-y-2 leading-relaxed">{renderOverview(active.id)}</div>
              </article>

              {/* Method card */}
              <article className="rounded-2xl border-2 border-slate-200 bg-white p-6 flex flex-col shadow-sm hover:shadow-md transition">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h2 className="text-base font-bold text-slate-900">2. Installation Method</h2>
                  <span className="text-xs rounded-full bg-blue-50 border border-blue-200 px-2.5 py-1 text-blue-700 font-medium">
                    Step-by-step
                  </span>
                </div>
                <ol className="mt-2 space-y-2 text-sm text-slate-700 list-decimal list-inside">
                  {renderMethod(active.id)}
                </ol>
              </article>

              {/* QC card */}
              <article className="rounded-2xl border-2 border-slate-200 bg-white p-6 flex flex-col shadow-sm hover:shadow-md transition">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h2 className="text-base font-bold text-slate-900">3. QC Checklist</h2>
                  <span className="text-xs rounded-full bg-green-50 border border-green-200 px-2.5 py-1 text-green-700 font-medium">
                    Must pass
                  </span>
                </div>
                <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">{renderQC(active.id)}</ul>
              </article>

              {/* TDS card */}
              <article className="rounded-2xl border-2 border-slate-200 bg-white p-6 flex flex-col shadow-sm hover:shadow-md transition">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <h2 className="text-base font-bold text-slate-900">4. TDS & Notes</h2>
                  <span className="text-xs rounded-full bg-purple-50 border border-purple-200 px-2.5 py-1 text-purple-700 font-medium">
                    Specs
                  </span>
                </div>
                <div className="text-sm text-slate-700 space-y-2 leading-relaxed">{renderTDS(active.id)}</div>
              </article>
            </section>

            {/* Images required */}
            <section className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between gap-2 mb-3">
                <h2 className="text-base font-bold text-slate-900">3D & Detail Images to Attach</h2>
                <span className="text-xs rounded-full bg-slate-100 border border-slate-300 px-2.5 py-1 text-slate-700 font-medium">
                  For 3D team
                </span>
              </div>
              <ul className="flex flex-wrap gap-3 text-sm">
                {active.images.map((img) => (
                  <li
                    key={img}
                    className="rounded-lg border-2 border-slate-300 bg-white px-4 py-2 text-slate-700 font-medium"
                  >
                    {img}
                  </li>
                ))}
              </ul>
            </section>
          </main>
        </div>
      </div>
    </section>
  )
}

// ---------- CONTENT RENDERERS ----------

function renderOverview(id: SectionId) {
  switch (id) {
    case "foundation":
      return (
        <>
          <p>
            <span className="font-semibold">Purpose:</span> Provide a stable, level, waterproof base that supports the
            UniQube LGS load-bearing superstructure.
          </p>
          <p>
            <span className="font-semibold">Foundation Types:</span> UniQube supports three types depending on region
            and soil conditions:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-1 text-slate-600">
            <li>
              <span className="text-slate-700">ICF Foundation (preferred)</span> – USA, Canada, earthquake zones
            </li>
            <li>
              <span className="text-slate-700">Wet-Pour Reinforced Concrete Slab</span> – Middle East, Africa, India
            </li>
            <li>
              <span className="text-slate-700">Dry Construction Raised Foundation</span> – Steel or concrete blocks
            </li>
          </ul>
          <p className="pt-2">
            Each foundation must meet the UniQube Structural TDS and pass QC Level 1–3 before LGS frame fixing begins.
          </p>
        </>
      )
    case "lgsFrames":
      return (
        <>
          <p>
            <span className="font-semibold">Overview:</span> UniQube uses robotic, precision-manufactured Light Gauge
            Steel (LGS) superstructure that forms:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-1 text-slate-600">
            <li>
              <span className="text-slate-700">Load-bearing external walls</span>
            </li>
            <li>
              <span className="text-slate-700">Internal partition walls (non-load-bearing)</span>
            </li>
            <li>
              <span className="text-slate-700">Door/window openings</span>
            </li>
            <li>
              <span className="text-slate-700">Support for joists, trusses & mezzanines</span>
            </li>
            <li>
              <span className="text-slate-700">Fire-safe service cavities</span>
            </li>
            <li>
              <span className="text-slate-700">Cladding substructure interface</span>
            </li>
          </ul>
          <p className="pt-2">
            LGS frames must sit on a level, square foundation (Section 1) for proper assembly. Frames are
            factory-produced; on-site focus is correct placement, plumb, level, squareness and fixing.
          </p>
        </>
      )
    case "hvac":
      return (
        <>
          <p>
            This section standardises all UniQube HVAC installations: split, ducted split and VRF/VRV systems. It
            focuses on correct routing of copper piping, condensate drains, electrical feeds and fresh air where used.
          </p>
          <p>
            <span className="font-semibold">Target outcome:</span> No water dripping, no condensation damage, no noise
            issues and stable, efficient cooling across the building.
          </p>
        </>
      )
    case "warranty":
      return (
        <>
          <p>
            The UniQube Warranty System defines what performance UniQube guarantees after installation is complete:
            structure, waterproofing, MEP, façade and finishes.
          </p>
          <p>
            It is tied directly to this installation manual. If the builder follows these steps and passes the QC
            checklists, UniQube can issue a formal multi-year warranty.
          </p>
        </>
      )
    default:
      return (
        <>
          <p>
            This section summarises the purpose and scope of the <span className="font-semibold">{shortTitle(id)}</span>{" "}
            part of the UniQube system.
          </p>
          <p className="text-slate-500">
            Replace this placeholder with the full text we already developed in chat for this section.
          </p>
        </>
      )
  }
}

function renderMethod(id: SectionId) {
  switch (id) {
    case "foundation":
      return (
        <>
          <li>Verify foundation type and design drawings (strip, raft, pad, slab)</li>
          <li>Check top-of-concrete levels and flatness against UniQube tolerances</li>
          <li>Mark out wall lines and anchor positions using laser and string lines</li>
          <li>Drill and fix anchor bolts / chem anchors as per spacing table</li>
          <li>Install DPC / separation layer and starter track aligned to grid</li>
          <li>Sign off base QC before any LGS frame is stood up</li>
        </>
      )
    case "lgsFrames":
      return (
        <>
          <li>Unload and identify wall panels as per factory tags and layout drawings</li>
          <li>Position tracks over approved starter track / base plate lines</li>
          <li>Stand panels, plumb with laser, and temporarily brace</li>
          <li>Fix to foundation and to adjoining walls as per connection details</li>
          <li>Add specified bracing, noggins and blocking at doors/windows</li>
          <li>Final plumb / level check, then release temporary bracing only after roof or diaphragm is in place</li>
        </>
      )
    case "hvac":
      return (
        <>
          <li>Fix indoor unit location and confirm structural fixing and drain route</li>
          <li>Install and insulate copper piping with smooth bends; no joints in concealed sections</li>
          <li>Run condensate drain with continuous fall to safe discharge point</li>
          <li>Fix outdoor unit with clearances and anti-vibration pads</li>
          <li>Pressure test, vacuum to 500 microns, charge refrigerant by weight</li>
          <li>Commission: check delta-T, drain flow, noise and running current</li>
        </>
      )
    case "warranty":
      return (
        <>
          <li>Confirm project has followed the UniQube installation manual sections 1–20</li>
          <li>Complete and sign all relevant QC checklists and photographic records</li>
          <li>Populate the project-specific warranty template with dates and scope</li>
          <li>Explain inclusions, exclusions and maintenance obligations to the client</li>
          <li>Issue digitally signed warranty certificate and store in UniQube system</li>
        </>
      )
    default:
      return (
        <>
          <li>Paste the step-by-step method for this section</li>
          <li>Each step should be specific, measurable and easy for site teams to follow</li>
        </>
      )
  }
}

function renderQC(id: SectionId) {
  switch (id) {
    case "foundation":
      return (
        <>
          <li>Levels within tolerance over full building footprint</li>
          <li>No honeycombing or visible structural defects at anchor zones</li>
          <li>Anchor bolts at correct location, quantity and embedment depth</li>
          <li>DPC / separation membrane continuous, with no tears or gaps</li>
          <li>Base layout matches approved UniQube grid</li>
        </>
      )
    case "lgsFrames":
      return (
        <>
          <li>All walls plumb, level and square within UniQube tolerance</li>
          <li>Correct stud spacing and gauge as per engineer's schedule</li>
          <li>Bracing and hold-downs installed wherever specified</li>
          <li>No site cutting of structural studs without written approval</li>
          <li>All fixings tight; no missing screws or anchors</li>
        </>
      )
    case "hvac":
      return (
        <>
          <li>No water leakage from indoor units after 24-hour operation</li>
          <li>Drain lines fully visible at discharge and flowing freely</li>
          <li>Refrigerant pressures and temperatures within manufacturer range</li>
          <li>Noise levels acceptable inside and outside the unit</li>
          <li>Thermostats function correctly and are logically located</li>
        </>
      )
    case "warranty":
      return (
        <>
          <li>QC checklists for all sections are complete and signed</li>
          <li>No major outstanding defects or leaks at time of handover</li>
          <li>Client has received maintenance guidelines</li>
          <li>Warranty terms, durations and exclusions clearly documented</li>
        </>
      )
    default:
      return (
        <>
          <li>Paste the QC bullet list for this section</li>
          <li>QC items should be visual, checkable and binary (pass / fail)</li>
        </>
      )
  }
}

function renderTDS(id: SectionId) {
  switch (id) {
    case "foundation":
      return (
        <>
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">Foundation Types:</p>
            <div className="space-y-1 text-[12px]">
              <div className="flex justify-between">
                <span>Level Tolerance:</span>
                <span className="font-semibold text-orange-600">±3 mm max</span>
              </div>
              <div className="flex justify-between">
                <span>Surface Flatness:</span>
                <span className="font-semibold text-orange-600">±2 mm</span>
              </div>
              <div className="flex justify-between">
                <span>Concrete Grade:</span>
                <span className="font-semibold text-orange-600">C30–C35 min</span>
              </div>
              <div className="flex justify-between">
                <span>Anchor Bolt Size:</span>
                <span className="font-semibold text-orange-600">M10 SS</span>
              </div>
              <div className="flex justify-between">
                <span>Anchor Spacing:</span>
                <span className="font-semibold text-orange-600">500 mm (20")</span>
              </div>
              <div className="flex justify-between">
                <span>Embed Depth:</span>
                <span className="font-semibold text-orange-600">150 mm (6")</span>
              </div>
              <div className="flex justify-between">
                <span>Waterproofing:</span>
                <span className="font-semibold text-orange-600">Tyvek/TPO</span>
              </div>
              <div className="flex justify-between">
                <span>Curing Time:</span>
                <span className="font-semibold text-orange-600">7–14 days full</span>
              </div>
            </div>
          </div>
        </>
      )
    case "lgsFrames":
      return (
        <>
          <div className="space-y-2">
            <p className="font-semibold text-slate-900">Material Specifications:</p>
            <div className="space-y-1 text-[12px]">
              <div className="flex justify-between">
                <span>Yield Strength (External):</span>
                <span className="font-semibold text-orange-600">345 MPa</span>
              </div>
              <div className="flex justify-between">
                <span>Yield Strength (Internal):</span>
                <span className="font-semibold text-orange-600">230 MPa</span>
              </div>
              <div className="flex justify-between">
                <span>Galvanization:</span>
                <span className="font-semibold text-orange-600">Z180</span>
              </div>
              <div className="flex justify-between">
                <span>Standard:</span>
                <span className="font-semibold text-orange-600">ASTM A1003</span>
              </div>
              <div className="flex justify-between">
                <span>Thickness:</span>
                <span className="font-semibold text-orange-600">1.20 mm</span>
              </div>
              <div className="flex justify-between">
                <span>Stud Spacing:</span>
                <span className="font-semibold text-orange-600">As per schedule</span>
              </div>
            </div>
            <p className="pt-1 text-slate-600">
              Frame ID System: E1–E4 (external), I1–I3 (internal), Color-coded for identification.
            </p>
          </div>
        </>
      )
    case "hvac":
      return (
        <>
          <p>
            Record AC capacities, refrigerant type, design room loads, duct sizes and allowed line lengths per
            manufacturer specifications.
          </p>
          <p className="text-slate-600">
            Link to commissioning sheet with pressures, temperatures, and delta-T measurements.
          </p>
        </>
      )
    case "warranty":
      return (
        <>
          <p className="font-semibold text-slate-900">Warranty Durations:</p>
          <div className="space-y-1 text-[12px]">
            <div className="flex justify-between">
              <span>Structural:</span>
              <span className="font-semibold text-orange-600">10 years</span>
            </div>
            <div className="flex justify-between">
              <span>Waterproofing:</span>
              <span className="font-semibold text-orange-600">5 years</span>
            </div>
            <div className="flex justify-between">
              <span>MEP Systems:</span>
              <span className="font-semibold text-orange-600">2 years</span>
            </div>
            <div className="flex justify-between">
              <span>Façade:</span>
              <span className="font-semibold text-orange-600">5 years</span>
            </div>
            <div className="flex justify-between">
              <span>Finishes:</span>
              <span className="font-semibold text-orange-600">1 year</span>
            </div>
          </div>
        </>
      )
    default:
      return (
        <>
          <p>
            This card contains TDS-style data: thickness, spacing, materials, fire ratings, and acoustic/thermal values.
          </p>
        </>
      )
  }
}

function shortTitle(id: SectionId): string {
  const map: Partial<Record<SectionId, string>> = {
    foundation: "Foundations",
    lgsFrames: "LGS Frames",
    floorJoists: "Floor System",
    boarding: "Boarding System",
    waterproofing: "Waterproofing",
    insulation: "Insulation",
    windowsDoors: "Windows & Doors",
    cladding: "Cladding",
    roofing: "Roofing Envelope",
    mepOverview: "MEP Overview",
    jointTreatment: "Joint Treatment",
    flooring: "Flooring",
    ceilings: "Ceilings",
    painting: "Painting & Finishes",
    roofSystem: "Roof Structural System",
    facadeSystems: "Facade Systems",
    doorWindowInstall: "Door & Window Installation",
    electrical: "Electrical System",
    plumbing: "Plumbing System",
    hvac: "HVAC System",
    warranty: "Warranty System",
  }
  return map[id] ?? "this section"
}
