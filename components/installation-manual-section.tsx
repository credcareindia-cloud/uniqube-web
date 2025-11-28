"use client"

import Image from "next/image"
import { useState } from "react"
import { FileText, Wrench, CheckCircle, BarChart3, Image as ImageIcon } from "lucide-react"

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
  category: "structure" | "envelope" | "mep" | "finish" | "warranty"
}

const SECTIONS: SectionConfig[] = [
  {
    id: "foundation",
    code: "01",
    title: "Foundations & Base Connection",
    short: "Strip, raft, pad and slab foundations – tolerances, anchoring, QC.",
    discipline: "CIVIL / STRUCTURE",
    category: "structure",
    images: ["Foundation 3D", "Anchor bolt detail", "DPC + starter track 3D"],
  },
  {
    id: "lgsFrames",
    code: "02",
    title: "External & Internal LGS Frames",
    short: "Load-bearing / non-load-bearing walls, studs, tracks, bracing.",
    discipline: "STRUCTURE",
    category: "structure",
    images: ["Wall frame 3D", "Hold-down / bracket detail"],
  },
  {
    id: "floorJoists",
    code: "03",
    title: "Floor Joists & Subfloor",
    short: "Joists, noggins, deflection control, sheathing, service penetrations.",
    discipline: "STRUCTURE",
    category: "structure",
    images: ["Joist layout 3D", "Joist-to-wall connection"],
  },
  {
    id: "boarding",
    code: "04",
    title: "Boarding System (OSB, USG, Cement Board)",
    short: "Board types, fixing patterns, joint gapping, edge support.",
    discipline: "ARCHITECTURAL",
    category: "envelope",
    images: ["Wall board build-up 3D", "Screw pattern detail"],
  },
  {
    id: "waterproofing",
    code: "05",
    title: "Waterproofing System",
    short: "Tyvek + liquid-applied membranes for walls, roofs, wet areas.",
    discipline: "ARCHITECTURAL",
    category: "envelope",
    images: ["Tyvek wrap 3D", "Liquid waterproofing at balcony / bathroom"],
  },
  {
    id: "insulation",
    code: "06",
    title: "Insulation in Wall Cavity",
    short: "Rockwool, spray foam and light-weight concrete infill options.",
    discipline: "THERMAL / ACOUSTIC",
    category: "envelope",
    images: ["Wall cavity 3D with insulation variants"],
  },
  {
    id: "windowsDoors",
    code: "07",
    title: "Windows & Doors (Spec Overview)",
    short: "UPVC / aluminum windows and door systems – performance overview.",
    discipline: "ARCHITECTURAL",
    category: "envelope",
    images: ["Window types 3D", "Door leaf & frame types"],
  },
  {
    id: "cladding",
    code: "08",
    title: "Cladding System (ACP, Brick, Paint)",
    short: "Ventilated ACP, brick slips, render/paint systems and substructure.",
    discipline: "FACADE",
    category: "envelope",
    images: ["ACP substructure 3D", "Brick slip section"],
  },
  {
    id: "roofing",
    code: "09",
    title: "Roofing Envelope",
    short: "Standing seam, shingles, flat roof membranes, gutters, drainage.",
    discipline: "ROOFING",
    category: "envelope",
    images: ["Roof build-up 3D", "Ridge & eaves detail"],
  },
  {
    id: "mepOverview",
    code: "10",
    title: "MEP Overview",
    short: "High-level coordination of electrical, plumbing, HVAC in UniQube walls.",
    discipline: "MEP COORDINATION",
    category: "mep",
    images: ["MEP coordination section 3D"],
  },
  {
    id: "jointTreatment",
    code: "11",
    title: "Joint Treatment & Board Waterproofing",
    short: "Mesh, compounds, expansion joints, wet zone detailing.",
    discipline: "FINISH / ENVELOPE",
    category: "finish",
    images: ["Joint treatment 3D", "Wet area joint detail"],
  },
  {
    id: "flooring",
    code: "12",
    title: "Flooring System",
    short: "Tiles, vinyl/SPC, solid surface wet room floors.",
    discipline: "FINISH",
    category: "finish",
    images: ["Tile build-up 3D", "Wet room floor detail"],
  },
  {
    id: "ceilings",
    code: "13",
    title: "Ceiling System",
    short: "Gypsum ceilings, cement board soffits, access panels.",
    discipline: "FINISH / MEP",
    category: "finish",
    images: ["Ceiling frame + board 3D"],
  },
  {
    id: "painting",
    code: "14",
    title: "Painting & Finishing",
    short: "Primer, putty, top coats, interior & exterior systems.",
    discipline: "FINISH",
    category: "finish",
    images: ["Interior / exterior paint layer diagram"],
  },
  {
    id: "roofSystem",
    code: "15",
    title: "Roof Structural System",
    short: "Trusses, joists, hybrid roofs, structural tying.",
    discipline: "STRUCTURE",
    category: "structure",
    images: ["Truss 3D", "Roof-to-wall connection"],
  },
  {
    id: "facadeSystems",
    code: "16",
    title: "External Facade Systems",
    short: "ACP, brick slips, WPC, lap siding, stone – full facade logic.",
    discipline: "FACADE",
    category: "envelope",
    images: ["Facade build-up 3D"],
  },
  {
    id: "doorWindowInstall",
    code: "17",
    title: "Door & Window Installation",
    short: "Flashing, waterproofing, foam, sealants, expansion gaps.",
    discipline: "FACADE / ARCHITECTURAL",
    category: "envelope",
    images: ["Head / sill / jamb details"],
  },
  {
    id: "electrical",
    code: "18",
    title: "Electrical System",
    short: "Conduits, DB, circuits, smart-ready, testing & commissioning.",
    discipline: "MEP – ELECTRICAL",
    category: "mep",
    images: ["Conduit in LGS wall 3D", "DB layout sketch"],
  },
  {
    id: "plumbing",
    code: "19",
    title: "Plumbing System",
    short: "PPR, UPVC, manifolds, drainage slopes, testing.",
    discipline: "MEP – PLUMBING",
    category: "mep",
    images: ["Bathroom plumbing layout 3D"],
  },
  {
    id: "hvac",
    code: "20",
    title: "HVAC System",
    short: "Split, ducted, VRF systems – piping, drains, commissioning.",
    discipline: "MEP – HVAC",
    category: "mep",
    images: ["Split AC + drain detail", "Ducted system layout"],
  },
  {
    id: "warranty",
    code: "21",
    title: "UniQube Warranty System",
    short: "Structural, waterproofing, MEP, facade, finishes & conditions.",
    discipline: "LEGAL / QA",
    category: "warranty",
    images: ["Warranty coverage diagram"],
  },
]

const categoryColors = {
  structure: "from-blue-500 to-indigo-600",
  envelope: "from-green-500 to-emerald-600",
  mep: "from-purple-500 to-violet-600",
  finish: "from-orange-500 to-red-600",
  warranty: "from-slate-700 to-slate-900",
}

const categoryBadgeColors = {
  structure: "bg-blue-100 text-blue-700 border-blue-200",
  envelope: "bg-green-100 text-green-700 border-green-200",
  mep: "bg-purple-100 text-purple-700 border-purple-200",
  finish: "bg-orange-100 text-orange-700 border-orange-200",
  warranty: "bg-slate-100 text-slate-700 border-slate-200",
}

export default function InstallationManualSection() {
  const [activeId, setActiveId] = useState<SectionId>("foundation")
  const [activeTab, setActiveTab] = useState<"overview" | "method" | "qc" | "tds">("overview")
  const [mobileExpanded, setMobileExpanded] = useState(false)

  const active = SECTIONS.find((s) => s.id === activeId)!

  const handleSectionClick = (id: SectionId) => {
    setActiveId(id)
    setMobileExpanded(false) // Close mobile menu after selection
  }

  return (
    <section id="installation-manual" className="w-full py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6 border border-slate-200">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="UniQube Logo" fill className="object-contain" />
            </div>
            <span className="text-sm font-semibold text-slate-700">Installation Manual</span>
            <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-bold">21 Sections</span>
          </div>
          <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Complete Technical
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Documentation
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive step-by-step guides for UniQube assembly, quality control, and technical specifications
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Section Selector */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileExpanded(!mobileExpanded)}
              className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-6 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${categoryColors[active.category]} rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg`}>
                  {active.code}
                </div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">Section {active.code}</div>
                  <div className="text-lg font-semibold text-slate-900">{active.title}</div>
                </div>
              </div>
              <svg
                className={`w-6 h-6 text-slate-400 transition-transform ${mobileExpanded ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Mobile Dropdown Grid */}
            {mobileExpanded && (
              <div className="mt-4 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-3 gap-2">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className={`group relative p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        activeId === section.id
                          ? `border-transparent bg-gradient-to-br ${categoryColors[section.category]} shadow-lg`
                          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                      }`}
                    >
                      <div className={`text-xl font-black mb-1 ${
                        activeId === section.id ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                      }`}>
                        {section.code}
                      </div>
                      <div className={`text-[9px] font-semibold uppercase tracking-wide leading-tight ${
                        activeId === section.id ? "text-white/90" : "text-slate-600"
                      }`}>
                        {section.title.split(' ').slice(0, 2).join(' ')}
                      </div>

                      {activeId === section.id && (
                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full border-2 border-orange-500 animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Desktop Sidebar - Compact Grid View */}
          <aside className="hidden lg:block lg:w-80 shrink-0">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4 px-2">Select Section</div>
                <div className="grid grid-cols-2 gap-2">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className={`group relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                        activeId === section.id
                          ? `border-transparent bg-gradient-to-br ${categoryColors[section.category]} shadow-lg`
                          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-md"
                      }`}
                    >
                      <div className={`text-2xl font-black mb-1 ${
                        activeId === section.id ? "text-white" : "text-slate-400 group-hover:text-slate-600"
                      }`}>
                        {section.code}
                      </div>
                      <div className={`text-[10px] font-bold uppercase tracking-wide leading-tight ${
                        activeId === section.id ? "text-white/90" : "text-slate-600"
                      }`}>
                        {section.title.split(' ').slice(0, 3).join(' ')}
                      </div>

                      {/* Active indicator */}
                      {activeId === section.id && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-orange-500 animate-pulse"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Section Header Card */}
            <div className={`bg-gradient-to-br ${categoryColors[active.category]} rounded-3xl p-8 mb-8 text-white shadow-2xl animate-slide-up`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-6xl font-black opacity-90">{active.code}</span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                      {active.discipline}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight">{active.title}</h1>
                  <p className="text-lg text-white/90 leading-relaxed max-w-3xl">{active.short}</p>
                </div>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 flex-wrap">
                {[
                  { id: "overview", label: "Overview", Icon: FileText },
                  { id: "method", label: "Method", Icon: Wrench },
                  { id: "qc", label: "QC Check", Icon: CheckCircle },
                  { id: "tds", label: "Specs", Icon: BarChart3 },
                ].map((tab) => {
                  const TabIcon = tab.Icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-white text-slate-900 shadow-lg scale-105"
                          : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                      }`}
                    >
                      <TabIcon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 mb-8 animate-fade-in">
              {activeTab === "overview" && (
                <div className="prose prose-slate max-w-none">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 m-0">Overview & Scope</h3>
                      <p className="text-sm text-slate-500 m-0">Understanding the fundamentals</p>
                    </div>
                  </div>
                  <div className="text-slate-700 leading-relaxed space-y-4">
                    {renderOverview(active.id)}
                  </div>
                </div>
              )}

              {activeTab === "method" && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 m-0">Installation Method</h3>
                      <p className="text-sm text-slate-500 m-0">Step-by-step procedures</p>
                    </div>
                  </div>
                  <ol className="space-y-4">
                    {renderMethodSteps(active.id)}
                  </ol>
                </div>
              )}

              {activeTab === "qc" && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 m-0">Quality Control Checklist</h3>
                      <p className="text-sm text-slate-500 m-0">Must-pass requirements</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {renderQCItems(active.id)}
                  </ul>
                </div>
              )}

              {activeTab === "tds" && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                      <BarChart3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 m-0">Technical Specifications</h3>
                      <p className="text-sm text-slate-500 m-0">Detailed data & measurements</p>
                    </div>
                  </div>
                  <div className="text-slate-700">
                    {renderTDS(active.id)}
                  </div>
                </div>
              )}
            </div>

            {/* Images Section */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-8 text-white">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-black mb-1">3D & Detail Images</h3>
                  <p className="text-slate-400 text-sm">Visual documentation required</p>
                </div>
                <span className="bg-orange-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                  For 3D Team
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {active.images.map((img, index) => (
                  <div
                    key={img}
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-5 h-5" />
                      <span className="font-semibold text-sm">{img}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        /* Custom Scrollbar - Apple/Samsung Style */
        :global(.custom-scrollbar) {
          scrollbar-width: thin;
          scrollbar-color: rgba(148, 163, 184, 0.3) transparent;
        }

        :global(.custom-scrollbar::-webkit-scrollbar) {
          width: 8px;
        }

        :global(.custom-scrollbar::-webkit-scrollbar-track) {
          background: transparent;
          border-radius: 10px;
        }

        :global(.custom-scrollbar::-webkit-scrollbar-thumb) {
          background: linear-gradient(180deg, rgba(148, 163, 184, 0.3) 0%, rgba(100, 116, 139, 0.3) 100%);
          border-radius: 10px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }

        :global(.custom-scrollbar::-webkit-scrollbar-thumb:hover) {
          background: linear-gradient(180deg, rgba(148, 163, 184, 0.5) 0%, rgba(100, 116, 139, 0.5) 100%);
          background-clip: padding-box;
        }

        :global(.custom-scrollbar::-webkit-scrollbar-thumb:active) {
          background: linear-gradient(180deg, rgba(148, 163, 184, 0.7) 0%, rgba(100, 116, 139, 0.7) 100%);
          background-clip: padding-box;
        }
      `}</style>
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
            <span className="font-bold text-slate-900">Purpose:</span> Provide a stable, level, waterproof base that supports the
            UniQube LGS load-bearing superstructure.
          </p>
          <p>
            <span className="font-bold text-slate-900">Foundation Types:</span> UniQube supports three types depending on region
            and soil conditions:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">→</span>
              <span><strong>ICF Foundation (preferred)</strong> – USA, Canada, earthquake zones</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">→</span>
              <span><strong>Wet-Pour Reinforced Concrete Slab</strong> – Middle East, Africa, India</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl">→</span>
              <span><strong>Dry Construction Raised Foundation</strong> – Steel or concrete blocks</span>
            </li>
          </ul>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl mt-4">
            <p className="text-sm font-semibold text-orange-900 mb-0">
              Each foundation must meet the UniQube Structural TDS and pass QC Level 1–3 before LGS frame fixing begins.
            </p>
          </div>
        </>
      )
    case "lgsFrames":
      return (
        <>
          <p>
            <span className="font-bold text-slate-900">Overview:</span> UniQube uses robotic, precision-manufactured Light Gauge
            Steel (LGS) superstructure that forms:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">→</span>
              <span>Load-bearing external walls</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">→</span>
              <span>Internal partition walls (non-load-bearing)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">→</span>
              <span>Door/window openings</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">→</span>
              <span>Support for joists, trusses & mezzanines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">→</span>
              <span>Fire-safe service cavities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-500 text-xl">→</span>
              <span>Cladding substructure interface</span>
            </li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl mt-4">
            <p className="text-sm font-semibold text-blue-900 mb-0">
              LGS frames must sit on a level, square foundation (Section 1) for proper assembly. Frames are
              factory-produced; on-site focus is correct placement, plumb, level, squareness and fixing.
            </p>
          </div>
        </>
      )
    case "hvac":
      return (
        <>
          <p>
            This section standardises all UniQube HVAC installations: split, ducted split and VRF/VRV systems. It
            focuses on correct routing of copper piping, condensate drains, electrical feeds and fresh air where used.
          </p>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-xl mt-4">
            <p className="font-bold text-purple-900 mb-1">Target outcome:</p>
            <p className="text-sm text-purple-900 mb-0">
              No water dripping, no condensation damage, no noise issues and stable, efficient cooling across the building.
            </p>
          </div>
        </>
      )
    case "warranty":
      return (
        <>
          <p>
            The UniQube Warranty System defines what performance UniQube guarantees after installation is complete:
            structure, waterproofing, MEP, façade and finishes.
          </p>
          <div className="bg-slate-100 border-l-4 border-slate-700 p-4 rounded-r-xl mt-4">
            <p className="text-sm font-semibold text-slate-900 mb-0">
              It is tied directly to this installation manual. If the builder follows these steps and passes the QC
              checklists, UniQube can issue a formal multi-year warranty.
            </p>
          </div>
        </>
      )
    default:
      return (
        <>
          <p>
            This section summarises the purpose and scope of the <span className="font-bold">{shortTitle(id)}</span>{" "}
            part of the UniQube system.
          </p>
          <div className="bg-slate-100 border-l-4 border-slate-400 p-4 rounded-r-xl mt-4">
            <p className="text-sm text-slate-600 mb-0 italic">
              Detailed content for this section is available in the full documentation.
            </p>
          </div>
        </>
      )
  }
}

function renderMethodSteps(id: SectionId) {
  const steps = getMethodSteps(id)
  return steps.map((step, index) => (
    <li key={index} className="flex gap-4 group">
      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg group-hover:scale-110 transition-transform">
        {index + 1}
      </div>
      <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 group-hover:bg-slate-100 group-hover:border-slate-300 transition-all">
        <p className="text-slate-700 font-medium m-0">{step}</p>
      </div>
    </li>
  ))
}

function getMethodSteps(id: SectionId): string[] {
  switch (id) {
    case "foundation":
      return [
        "Verify foundation type and design drawings (strip, raft, pad, slab)",
        "Check top-of-concrete levels and flatness against UniQube tolerances",
        "Mark out wall lines and anchor positions using laser and string lines",
        "Drill and fix anchor bolts / chem anchors as per spacing table",
        "Install DPC / separation layer and starter track aligned to grid",
        "Sign off base QC before any LGS frame is stood up"
      ]
    case "lgsFrames":
      return [
        "Unload and identify wall panels as per factory tags and layout drawings",
        "Position tracks over approved starter track / base plate lines",
        "Stand panels, plumb with laser, and temporarily brace",
        "Fix to foundation and to adjoining walls as per connection details",
        "Add specified bracing, noggins and blocking at doors/windows",
        "Final plumb / level check, then release temporary bracing only after roof or diaphragm is in place"
      ]
    case "hvac":
      return [
        "Fix indoor unit location and confirm structural fixing and drain route",
        "Install and insulate copper piping with smooth bends; no joints in concealed sections",
        "Run condensate drain with continuous fall to safe discharge point",
        "Fix outdoor unit with clearances and anti-vibration pads",
        "Pressure test, vacuum to 500 microns, charge refrigerant by weight",
        "Commission: check delta-T, drain flow, noise and running current"
      ]
    case "warranty":
      return [
        "Confirm project has followed the UniQube installation manual sections 1–20",
        "Complete and sign all relevant QC checklists and photographic records",
        "Populate the project-specific warranty template with dates and scope",
        "Explain inclusions, exclusions and maintenance obligations to the client",
        "Issue digitally signed warranty certificate and store in UniQube system"
      ]
    default:
      return [
        "Review section-specific requirements and drawings",
        "Prepare materials and tools as per specifications",
        "Follow manufacturer guidelines and UniQube standards",
        "Document progress with photographs at key stages",
        "Complete QC checklist before proceeding to next phase"
      ]
  }
}

function renderQCItems(id: SectionId) {
  const items = getQCItems(id)
  return items.map((item, index) => (
    <li key={index} className="flex items-start gap-3 group">
      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center text-white font-black text-xs shadow-md group-hover:scale-110 transition-transform">
        ✓
      </div>
      <div className="flex-1 bg-green-50 border border-green-200 rounded-xl px-4 py-3 group-hover:bg-green-100 transition-colors">
        <p className="text-slate-700 font-medium m-0">{item}</p>
      </div>
    </li>
  ))
}

function getQCItems(id: SectionId): string[] {
  switch (id) {
    case "foundation":
      return [
        "Levels within tolerance over full building footprint",
        "No honeycombing or visible structural defects at anchor zones",
        "Anchor bolts at correct location, quantity and embedment depth",
        "DPC / separation membrane continuous, with no tears or gaps",
        "Base layout matches approved UniQube grid"
      ]
    case "lgsFrames":
      return [
        "All walls plumb, level and square within UniQube tolerance",
        "Correct stud spacing and gauge as per engineer's schedule",
        "Bracing and hold-downs installed wherever specified",
        "No site cutting of structural studs without written approval",
        "All fixings tight; no missing screws or anchors"
      ]
    case "hvac":
      return [
        "No water leakage from indoor units after 24-hour operation",
        "Drain lines fully visible at discharge and flowing freely",
        "Refrigerant pressures and temperatures within manufacturer range",
        "Noise levels acceptable inside and outside the unit",
        "Thermostats function correctly and are logically located"
      ]
    case "warranty":
      return [
        "QC checklists for all sections are complete and signed",
        "No major outstanding defects or leaks at time of handover",
        "Client has received maintenance guidelines",
        "Warranty terms, durations and exclusions clearly documented"
      ]
    default:
      return [
        "Visual inspection completed with no defects",
        "Measurements verified against drawings",
        "Materials meet specified standards",
        "Installation follows approved procedures",
        "Documentation completed and signed off"
      ]
  }
}

function renderTDS(id: SectionId) {
  switch (id) {
    case "foundation":
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
            <h4 className="font-black text-slate-900 mb-4 text-lg">Foundation Specifications</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Level Tolerance</div>
                <div className="text-2xl font-black text-orange-600">±3 mm max</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Surface Flatness</div>
                <div className="text-2xl font-black text-orange-600">±2 mm</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Concrete Grade</div>
                <div className="text-2xl font-black text-orange-600">C30–C35</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Anchor Bolt</div>
                <div className="text-2xl font-black text-orange-600">M10 SS</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Anchor Spacing</div>
                <div className="text-2xl font-black text-orange-600">500 mm</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Embed Depth</div>
                <div className="text-2xl font-black text-orange-600">150 mm</div>
              </div>
            </div>
          </div>
        </div>
      )
    case "lgsFrames":
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
            <h4 className="font-black text-slate-900 mb-4 text-lg">Material Specifications</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Yield (External)</div>
                <div className="text-2xl font-black text-blue-600">345 MPa</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Yield (Internal)</div>
                <div className="text-2xl font-black text-blue-600">230 MPa</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Galvanization</div>
                <div className="text-2xl font-black text-blue-600">Z180</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-xs text-slate-500 font-bold uppercase mb-1">Standard</div>
                <div className="text-2xl font-black text-blue-600">A1003</div>
              </div>
            </div>
            <div className="mt-4 bg-white rounded-xl p-4 shadow-sm">
              <p className="text-sm text-slate-600 m-0">
                Frame ID System: <strong>E1–E4</strong> (external), <strong>I1–I3</strong> (internal), Color-coded for identification.
              </p>
            </div>
          </div>
        </div>
      )
    case "warranty":
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl p-6 border border-slate-300">
            <h4 className="font-black text-slate-900 mb-4 text-lg">Warranty Durations</h4>
            <div className="space-y-3">
              {[
                { label: "Structural", duration: "10 years", color: "blue" },
                { label: "Waterproofing", duration: "5 years", color: "green" },
                { label: "MEP Systems", duration: "2 years", color: "purple" },
                { label: "Façade", duration: "5 years", color: "orange" },
                { label: "Finishes", duration: "1 year", color: "red" }
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 shadow-sm flex items-center justify-between">
                  <span className="font-bold text-slate-700">{item.label}</span>
                  <span className={`text-xl font-black text-${item.color}-600`}>{item.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    default:
      return (
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <p className="text-slate-600 m-0">
            Technical data sheets contain specifications for thickness, spacing, materials, fire ratings, and acoustic/thermal values.
          </p>
        </div>
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
