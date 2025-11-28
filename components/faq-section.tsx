"use client"

import { useState } from "react"
import { ChevronDown, Mail, Phone, Package, Blocks, Wrench, Home, Frame, Droplets, Snowflake, Ruler, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  category: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    category: "Container & Materials",
    question: "What elements come in the containers?",
    answer:
      "Pre-assembled wall panels with exterior finish, rockwool insulation, MEP installations (where applicable), windows, doors, door handles, cabinetry, tile, flooring material, countertop material, plumbing fixtures, electrical fixtures, roofing material, siding material, drywall, trim material, and bathroom fixtures.",
  },
  {
    category: "Container & Materials",
    question: "What range of options are available?",
    answer:
      "We offer low cost, mid-range, and luxury options for each material and component. All items are available in the local US markets including window hardware sourced from our USA offices.",
  },
  {
    category: "Container & Materials",
    question: "How do I get replacement items if something breaks?",
    answer:
      "All items we use are available in the local US markets. Replacement items can be sourced from local hardware stores or purchased independently online. For items like windows and doors, we maintain stock in our USA warehouse and can assemble and send replacements from our local assembly unit.",
  },
  {
    category: "Wall Assembly",
    question: "What is the typical wall assembly from inside to outside?",
    answer:
      "The assembly consists of drywall, metal studs filled with insulation, sheathing, waterproof layer, furring strips, and then siding.",
  },
  {
    category: "Wall Assembly",
    question: "What metal studs are used?",
    answer:
      'For exterior walls: 6" deep studs. For interior walls: 3.5" deep studs at 16" on center. Dimensions depend on structural integrity requirements.',
  },
  {
    category: "Wall Assembly",
    question: "What insulation is used in the walls?",
    answer:
      'We use 150mm thick high-density Rockwool for 6" walls and 89mm thick Rockwool for 3.5" walls. Alternative options include spray foam and Glasswool depending on project requirements.',
  },
  {
    category: "Wall Assembly",
    question: "What drywall thickness is used?",
    answer:
      'Generally 1/2" thickness, but we can supply customized thickness based on structural calculations and requirements.',
  },
  {
    category: "Wall Assembly",
    question: "What is the maximum ceiling height?",
    answer: "Maximum ceiling height for any room in the home is 10-11 feet.",
  },
  {
    category: "Assembly Process",
    question: "What comes pre-assembled vs. assembled on-site?",
    answer:
      "Wall panels come pre-assembled with exterior finish, Rockwool, and MEP installations (where applicable). On-site assembly includes interior finishes, ceiling, plumbing fixtures, flooring material, and trim.",
  },
  {
    category: "Assembly Process",
    question: "Are metal studs, insulation, and sheathing pre-assembled?",
    answer:
      "Yes, metal studs, insulation, and sheathing come assembled together in the shipping container. Drywall, waterproof layer, and siding are added on-site once the wall is positioned.",
  },
  {
    category: "Roofing",
    question: "What roof joists are used?",
    answer:
      'Light Gauge Steel (LGS) joists ranging from 10" to 12" deep at 16" on center spacing. For depths greater than 12", we provide roof trusses.',
  },
  {
    category: "Roofing",
    question: "Can homes have pitched or flat roofs?",
    answer: "Both pitched roofs and flat roofs are possible depending on design requirements.",
  },
  {
    category: "Roofing",
    question: "What happens if there is a roof leak?",
    answer:
      "Roof leaks fall under the warranty of our system. We have a local team that will rectify any roofing issues promptly.",
  },
  {
    category: "Windows",
    question: "What window options are available?",
    answer:
      "Aluminum frame windows with thermal break, double or triple glazed with high-end finishes and durable coatings including polyester and PVDF paint systems. Fixed windows can be made in any dimension. Openable windows can be up to 7 feet × 3 feet. Curtain wall systems have no height or width limits.",
  },
  {
    category: "Windows",
    question: "What are the key window ratings?",
    answer:
      "U-value ranges from 0.25-0.31 BTU/hr/sq.ft/°F for double glazed. Triple glazed windows: 0.11-0.19 BTU/hr/sq.ft/°F. SHGC: 0.25-0.47. Visual transmission: 30-70%.",
  },
  {
    category: "Windows",
    question: "Are windows delivered pre-installed?",
    answer: "Yes, windows are fully assembled and ready to install upon delivery.",
  },
  {
    category: "Windows",
    question: "How do I replace windows or glass?",
    answer:
      "Complete replacement manuals are provided. Glass can be replaced on-site with local fabricators using the provided specifications. Window frame replacement details are included in the fixing manual.",
  },
  {
    category: "Plumbing",
    question: "What plumbing lines are used?",
    answer:
      'We use PEX (plastic), copper, or PVC pipe systems depending on client requirements and local city codes. Line sizing is typically 5/8" for main distribution.',
  },
  {
    category: "Plumbing",
    question: "When are plumbing lines installed?",
    answer:
      "All plumbing works are pre-installed in walls at the factory and shipped to the site. Connection methodology is provided in the manual and can be handled by semi-skilled plumbers.",
  },
  {
    category: "HVAC",
    question: "Do you provide water heaters?",
    answer:
      "No, water heaters are not included. Clients can choose their own system including electric heat pump or gas tankless options.",
  },
  {
    category: "HVAC",
    question: "What HVAC ductwork is used?",
    answer:
      "A combination of circular metal, rectangular metal, and flexible ductwork materials depending on system design and requirements.",
  },
  {
    category: "Design & Engineering",
    question: "Are there limitations to interior/exterior design?",
    answer:
      "No limitations. Our team provides full design flexibility with customized CAD drawings, structural calculations, and detailed shop drawings for each project.",
  },
  {
    category: "Design & Engineering",
    question: "What is your team engagement on-site?",
    answer:
      "Our team provides all design and drawings including detail shop drawings with structural calculations. On-site, certified general contractors in your region handle end-to-end construction from foundation to interior finishing.",
  },
  {
    category: "Costs & Contracts",
    question: "How is total construction cost calculated?",
    answer:
      "Preliminary proposals are quoted on a per-square-foot basis. Once we receive a letter of intent, we provide a detailed cost proposal broken down by component.",
  },
]

const categories = Array.from(new Set(faqData.map((item) => item.category)))

const categoryColors: Record<string, string> = {
  "Container & Materials": "from-blue-500 to-indigo-600",
  "Wall Assembly": "from-green-500 to-emerald-600",
  "Assembly Process": "from-purple-500 to-violet-600",
  "Roofing": "from-orange-500 to-red-600",
  "Windows": "from-cyan-500 to-blue-600",
  "Plumbing": "from-teal-500 to-cyan-600",
  "HVAC": "from-pink-500 to-rose-600",
  "Design & Engineering": "from-amber-500 to-orange-600",
  "Costs & Contracts": "from-slate-700 to-slate-900",
}

const categoryIcons: Record<string, any> = {
  "Container & Materials": Package,
  "Wall Assembly": Blocks,
  "Assembly Process": Wrench,
  "Roofing": Home,
  "Windows": Frame,
  "Plumbing": Droplets,
  "HVAC": Snowflake,
  "Design & Engineering": Ruler,
  "Costs & Contracts": DollarSign,
}

export default function FAQSection() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleItem = (question: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(question)) {
      newExpanded.delete(question)
    } else {
      newExpanded.add(question)
    }
    setExpandedItems(newExpanded)
  }

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setMobileMenuOpen(false)
  }

  const filteredFAQ = selectedCategory ? faqData.filter((item) => item.category === selectedCategory) : faqData

  return (
    <section className="w-full py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6 shadow-lg">
            Got Questions?
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
            Frequently Asked
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Everything you need to know about UniQube modular construction systems
          </p>
        </div>

        {/* Mobile Category Selector */}
        <div className="lg:hidden mb-8">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              {(() => {
                const CategoryIcon = categoryIcons[selectedCategory]
                return (
                  <>
                    <div className={`w-12 h-12 bg-gradient-to-br ${categoryColors[selectedCategory]} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-0.5">Category</div>
                      <div className="text-base sm:text-lg font-semibold text-slate-900">{selectedCategory}</div>
                    </div>
                  </>
                )
              })()}
            </div>
            <ChevronDown
              className={`w-6 h-6 text-slate-400 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* Mobile Category Dropdown */}
          {mobileMenuOpen && (
            <div className="mt-4 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 max-h-[60vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-2">
                {categories.map((category) => {
                  const CategoryIcon = categoryIcons[category]
                  return (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={cn(
                        "w-full group relative px-5 py-4 rounded-xl font-semibold text-sm transition-all duration-300 text-left",
                        selectedCategory === category
                          ? `bg-gradient-to-br ${categoryColors[category]} text-white shadow-lg`
                          : "bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 hover:shadow-md"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <CategoryIcon className="w-5 h-5" />
                        <span>{category}</span>
                      </div>
                      {selectedCategory === category && (
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 w-2 h-2 bg-white rounded-full border-2 border-orange-500 animate-pulse"></div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Category Filter with Modern Design */}
        <div className="hidden lg:block mb-12">
          <div className="text-center mb-6">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Select Category</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const CategoryIcon = categoryIcons[category]
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "group relative px-6 py-4 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-105 tracking-tight",
                    selectedCategory === category
                      ? `bg-gradient-to-br ${categoryColors[category]} text-white shadow-xl`
                      : "bg-white text-slate-700 border-2 border-slate-200 hover:border-slate-300 shadow-md"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <CategoryIcon className="w-5 h-5" />
                    <span>{category}</span>
                  </div>
                  {selectedCategory === category && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-orange-500 animate-pulse"></div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* FAQ Items with Modern Design */}
        <div className="space-y-3 sm:space-y-4 mb-16">
          {filteredFAQ.map((item, index) => {
            const isExpanded = expandedItems.has(item.question)
            return (
              <div
                key={index}
                className={cn(
                  "group rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300",
                  isExpanded
                    ? "bg-white shadow-2xl border-2 border-orange-400"
                    : "bg-white shadow-md border-2 border-slate-200 hover:border-slate-300 hover:shadow-lg"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => toggleItem(item.question)}
                  className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between transition-colors"
                >
                  <div className="flex items-start gap-3 sm:gap-4 text-left flex-1">
                    <div className={cn(
                      "flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-black text-base sm:text-lg shadow-lg transition-transform",
                      isExpanded ? `bg-gradient-to-br ${categoryColors[selectedCategory]} scale-110` : "bg-slate-400 group-hover:scale-110"
                    )}>
                      {index + 1}
                    </div>
                    <h3 className={cn(
                      "text-sm sm:text-base md:text-lg font-semibold transition-colors flex-1 tracking-tight",
                      isExpanded ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                    )}>
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ml-2 sm:ml-4 transition-all duration-300",
                      isExpanded ? "rotate-180 text-orange-500" : "text-slate-400 group-hover:text-slate-600"
                    )}
                  />
                </button>

                {isExpanded && (
                  <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                    <div className="sm:pl-14 pr-0 sm:pr-10">
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border-l-4 border-orange-500">
                        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact CTA with Modern Design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl sm:rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white shadow-2xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="inline-block bg-orange-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide mb-4 sm:mb-6 shadow-lg">
                Still Need Help?
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 tracking-tight">Let's Talk About Your Project</h3>
              <p className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto font-light">
                Contact our team for more detailed information about UniQube modular construction
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="mailto:arbab@mulkholdings.com"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-full font-semibold text-base sm:text-lg hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Email Us</span>
                </a>
                <a
                  href="tel:+971566856608"
                  className="group px-6 sm:px-8 py-3 sm:py-4 border-2 sm:border-3 border-white text-white rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-slate-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden xs:inline">Call +971 56 6856608</span>
                  <span className="xs:hidden">Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
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
