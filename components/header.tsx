'use client'

import Image from 'next/image'
import { Menu, Phone, Mail, FileText } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">

        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* LOGO + TITLE */}
          <div className="flex items-center gap-3">
            {/* Logo container (transparent, no border, no box) */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10">
              <Image
                src="/logo.png"
                alt="UNI QUBE Logo"
                fill
                className="object-contain"
              />
            </div>

            <div className="leading-tight">
              <h1 className="text-neutral-900 font-bold text-base sm:text-xl tracking-tight">
                UNI QUBE
              </h1>
              <p className="text-[11px] sm:text-xs text-neutral-500">
                Modular Building System
              </p>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-8">

            <div className="text-right text-sm leading-tight">
              <p className="text-neutral-900 font-semibold">+971 6 526 2202</p>
              <p className="text-xs text-neutral-500">Customer Service</p>
            </div>

            <a
              href="mailto:service@uniqube.co"
              className="px-5 py-2 bg-neutral-900 text-white rounded-lg font-medium text-sm hover:bg-neutral-800 transition-all shadow-sm"
            >
              Contact
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-neutral-900" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-black/10 space-y-3 animate-in slide-in-from-top-2">
            
            <Link
              href="/docs"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 transition-colors"
            >
              <FileText className="w-4 h-4 text-neutral-900" />
              <span className="font-medium text-sm text-neutral-900">Installation Manual</span>
            </Link>

            <a
              href="tel:+97165262202"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-black/5 transition-colors"
            >
              <Phone className="w-4 h-4 text-neutral-900" />
              <div>
                <p className="text-neutral-900 font-semibold text-sm">+971 6 526 2202</p>
                <p className="text-xs text-neutral-500">Customer Service</p>
              </div>
            </a>

            <a
              href="mailto:service@uniqube.co"
              className="flex items-center gap-3 p-3 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="font-medium text-sm">Contact Us</span>
            </a>

          </div>
        )}
      </div>
    </header>
  )
}
