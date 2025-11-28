import { Linkedin, Instagram, Twitter, Facebook, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Company Info - Takes 2 columns on desktop */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                <img src="/logo.png" alt="UniQube Logo" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </div>
              <span className="font-black text-xl sm:text-2xl tracking-tight">UNI QUBE</span>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-sm font-light">
              Revolutionizing modular construction with innovative Light Gauge Steel technology, delivering precision-engineered solutions worldwide.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm group">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm group">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm group">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 sm:w-11 sm:h-11 bg-white/10 hover:bg-orange-500 rounded-xl flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm group">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-white tracking-tight">Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#overview" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>System Overview</span>
                </a>
              </li>
              <li>
                <a href="#lgs-frames" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>LGS Frames</span>
                </a>
              </li>
              <li>
                <a href="#acm" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>ACM Cladding</span>
                </a>
              </li>
              <li>
                <a href="#windows" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Windows & Doors</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-white tracking-tight">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Documentation</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Specifications</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Case Studies</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Support</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-white tracking-tight">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="#" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Contact</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-sm sm:text-base text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2 group font-light">
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-10 sm:mb-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
            <div>
              <h4 className="font-semibold text-lg sm:text-2xl mb-1 sm:mb-2 tracking-tight">Stay Updated</h4>
              <p className="text-sm sm:text-base text-slate-300 font-light">Get the latest news and updates about UniQube innovations.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-xs sm:text-sm text-slate-300 font-light text-center sm:text-left">
              <span>© {currentYear} UniQube.</span>
              <span className="hidden sm:inline">•</span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors text-xs sm:text-sm font-light">
                Terms of Service
              </a>
              <span className="text-slate-600 text-xs">•</span>
              <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors text-xs sm:text-sm font-light">
                Privacy Policy
              </a>
              <span className="text-slate-600 text-xs">•</span>
              <a href="#" className="text-slate-300 hover:text-orange-400 transition-colors text-xs sm:text-sm font-light">
                Cookie Settings
              </a>
            </div>
          </div>

          {/* Made with love */}
          <div className="text-center mt-4 sm:mt-6 text-slate-500 text-xs sm:text-sm font-light">
            <p>Built with precision engineering and innovative technology</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
