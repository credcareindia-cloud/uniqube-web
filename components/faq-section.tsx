"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
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

export default function FAQSection() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0])

  const toggleItem = (question: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(question)) {
      newExpanded.delete(question)
    } else {
      newExpanded.add(question)
    }
    setExpandedItems(newExpanded)
  }

  const filteredFAQ = selectedCategory ? faqData.filter((item) => item.category === selectedCategory) : faqData

  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about UniQube modular construction systems
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-lg font-medium transition-all",
                selectedCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filteredFAQ.map((item, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card hover:border-accent/30 transition-colors"
            >
              <button
                onClick={() => toggleItem(item.question)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">{item.question}</h3>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-accent flex-shrink-0 ml-4 transition-transform",
                    expandedItems.has(item.question) && "rotate-180",
                  )}
                />
              </button>

              {expandedItems.has(item.question) && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-foreground leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-8 bg-muted rounded-lg text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Contact our team for more detailed information about UniQube modular construction
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:arbab@mulkholdings.com"
              className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Email Us
            </a>
            <a
              href="tel:+971566856608"
              className="px-6 py-2 border-2 border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
            >
              Call +971 56 6856608
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
