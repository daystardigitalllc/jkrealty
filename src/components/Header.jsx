import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown, Sparkles, Building, Home, ArrowRight, ShieldCheck, UserCheck, Compass } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, onOpenListingModal, onOpenValuationModal, onOpenContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'buy' | 'sell' | 'markets' | 'about'
  const [mobileExpanded, setMobileExpanded] = useState({});

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileAccordion = (key) => {
    setMobileExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 shadow-sm">
      {/* Top Luxury Announcement Bar */}
      <div className="bg-navy-950 text-white text-[11px] py-1.5 px-3 sm:px-4 border-b border-bahamas-500/20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          {/* Left Text */}
          <div className="flex items-center gap-1.5 text-slate-300 min-w-0">
            <Sparkles className="w-3 h-3 text-bahamas-400 shrink-0" />
            <span className="hidden md:inline tracking-wider text-[10px] uppercase font-semibold text-bahamas-300 truncate">
              J Kralovec Realty Group • Delaware • Pennsylvania • Florida
            </span>
            <span className="md:hidden tracking-wider text-[10px] uppercase font-semibold text-bahamas-300 truncate">
              J Kralovec Realty Group
            </span>
          </div>

          {/* Right Phone Link */}
          <div className="flex items-center shrink-0">
            <a 
              href="tel:2678580914" 
              className="flex items-center gap-1 hover:text-bahamas-300 transition-colors font-medium text-slate-200 text-[11px] sm:text-xs"
            >
              <Phone className="w-3 h-3 text-bahamas-400 shrink-0" />
              <span className="font-mono text-[11px] sm:text-xs">(267) 858-0914</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Douglas Elliman-Style Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none text-left shrink-0 min-w-0"
        >
          <img 
            src="/logo.svg" 
            alt="J. Kralovec Realty Group" 
            className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-slate-950 font-serif font-bold text-base sm:text-xl tracking-tight leading-none">
              J Kralovec
            </span>
            <span className="text-[8px] sm:text-[9.5px] text-slate-500 font-semibold tracking-[0.18em] uppercase mt-0.5 sm:mt-1">
              REALTY GROUP
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              <Compass className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-800 shrink-0" />
              <span className="text-[7px] sm:text-[8px] font-bold tracking-[0.18em] uppercase text-slate-700">
                COMPASS
              </span>
            </div>
          </div>
        </button>

        {/* Primary Desktop Nav with Nested Dropdowns */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3">
          
          {/* 1. BUY DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('buy')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('listings')}
              className={`px-3 py-2 text-sm sm:text-base uppercase tracking-[0.2em] font-cormorant font-normal transition-all duration-200 flex items-center gap-1 ${
                currentPage === 'listings' || activeDropdown === 'buy'
                  ? 'text-bahamas-600 font-semibold border-b-2 border-bahamas-500'
                  : 'text-slate-950 hover:text-bahamas-600'
              }`}
            >
              Buy
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'buy' ? 'rotate-180 text-bahamas-600' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'buy' && (
              <div className="absolute left-0 mt-1 w-72 bg-white rounded-2xl p-3 shadow-2xl border border-slate-200/90 z-50 animate-modal">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-3 py-1.5 border-b border-slate-100">
                  Search & Explore Properties
                </div>
                <div className="space-y-1 pt-1.5">
                  <button
                    onClick={() => handleNavClick('listings')}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-bahamas-50 text-slate-800 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold group-hover:text-bahamas-600">All Live MLS Listings</div>
                      <div className="text-[11px] text-slate-500">Explore tri-state luxury properties</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-bahamas-600 group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    onClick={() => handleNavClick('delaware')}
                    className="w-full text-left px-3.5 py-2 rounded-xl hover:bg-bahamas-50 text-slate-800 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold group-hover:text-bahamas-600">Delaware Homes</div>
                      <div className="text-[11px] text-slate-500">Greenville, Wilmington & Beaches</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('pennsylvania')}
                    className="w-full text-left px-3.5 py-2 rounded-xl hover:bg-bahamas-50 text-slate-800 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold group-hover:text-bahamas-600">Pennsylvania Estates</div>
                      <div className="text-[11px] text-slate-500">Philadelphia & Main Line</div>
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('florida')}
                    className="w-full text-left px-3.5 py-2 rounded-xl hover:bg-bahamas-50 text-slate-800 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold group-hover:text-bahamas-600">Florida Coastal</div>
                      <div className="text-[11px] text-slate-500">Palm Beach & Coastal Sanctuaries</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 2. SELL DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('sell')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={onOpenValuationModal}
              className={`px-3 py-2 text-sm sm:text-base uppercase tracking-[0.2em] font-cormorant font-normal transition-all duration-200 flex items-center gap-1 ${
                activeDropdown === 'sell'
                  ? 'text-bahamas-600 font-semibold border-b-2 border-bahamas-500'
                  : 'text-slate-950 hover:text-bahamas-600'
              }`}
            >
              Sell
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'sell' ? 'rotate-180 text-bahamas-600' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'sell' && (
              <div className="absolute left-0 mt-1 w-72 bg-white rounded-2xl p-3 shadow-2xl border border-slate-200/90 z-50 animate-modal">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-3 py-1.5 border-b border-slate-100">
                  Seller Services & Advisory
                </div>
                <div className="space-y-1 pt-1.5">
                  <button
                    onClick={() => { setActiveDropdown(null); onOpenValuationModal(); }}
                    className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-bahamas-50 text-slate-800 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-bold text-bahamas-600">Request Home Valuation</div>
                      <div className="text-[11px] text-slate-500">Instant confidential market analysis</div>
                    </div>
                    <Sparkles className="w-3.5 h-3.5 text-bahamas-500 shrink-0" />
                  </button>

                  <button
                    onClick={() => handleNavClick('about')}
                    className="w-full text-left px-3.5 py-2 rounded-xl hover:bg-bahamas-50 text-slate-800 transition-all group"
                  >
                    <div className="text-xs font-bold group-hover:text-bahamas-600">Track Record ($250M+ Volume)</div>
                    <div className="text-[11px] text-slate-500">Off-market & record-setting results</div>
                  </button>

                  <button
                    onClick={() => { setActiveDropdown(null); onOpenContactModal(); }}
                    className="w-full text-left px-3.5 py-2 rounded-xl hover:bg-bahamas-50 text-slate-800 transition-all group"
                  >
                    <div className="text-xs font-bold group-hover:text-bahamas-600">Schedule Seller Consultation</div>
                    <div className="text-[11px] text-slate-500">Connect with Jeff & top advisors</div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 3. LOCATIONS DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('markets')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => handleNavClick('delaware')}
              className={`px-3 py-2 text-sm sm:text-base uppercase tracking-[0.2em] font-cormorant font-normal transition-all duration-200 flex items-center gap-1 ${
                ['delaware', 'pennsylvania', 'florida'].includes(currentPage) || activeDropdown === 'markets'
                  ? 'text-bahamas-600 font-semibold border-b-2 border-bahamas-500'
                  : 'text-slate-950 hover:text-bahamas-600'
              }`}
            >
              Locations
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'markets' ? 'rotate-180 text-bahamas-600' : 'text-slate-400'}`} />
            </button>

            {activeDropdown === 'markets' && (
              <div className="absolute left-0 mt-1 w-72 bg-white rounded-2xl p-3 shadow-2xl border border-slate-200/90 z-50 animate-modal">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-3 py-1.5 border-b border-slate-100">
                  Regional Premier Locations
                </div>
                <div className="space-y-1 pt-1.5">
                  <button
                    onClick={() => handleNavClick('delaware')}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all ${
                      currentPage === 'delaware' ? 'bg-bahamas-500 text-white' : 'hover:bg-bahamas-50 text-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold">Delaware Market</div>
                    <div className={`text-[11px] ${currentPage === 'delaware' ? 'text-bahamas-100' : 'text-slate-500'}`}>
                      Greenville, Wilmington & Beaches
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('pennsylvania')}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all ${
                      currentPage === 'pennsylvania' ? 'bg-bahamas-500 text-white' : 'hover:bg-bahamas-50 text-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold">Pennsylvania Market</div>
                    <div className={`text-[11px] ${currentPage === 'pennsylvania' ? 'text-bahamas-100' : 'text-slate-500'}`}>
                      Philadelphia & Main Line
                    </div>
                  </button>

                  <button
                    onClick={() => handleNavClick('florida')}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl transition-all ${
                      currentPage === 'florida' ? 'bg-bahamas-500 text-white' : 'hover:bg-bahamas-50 text-slate-800'
                    }`}
                  >
                    <div className="text-xs font-bold">Florida Market</div>
                    <div className={`text-[11px] ${currentPage === 'florida' ? 'text-bahamas-100' : 'text-slate-500'}`}>
                      Palm Beach & Coastal Sanctuaries
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 4. ABOUT */}
          <button
            onClick={() => handleNavClick('about')}
            className={`px-3 py-2 text-sm sm:text-base uppercase tracking-[0.2em] font-cormorant font-normal transition-all duration-200 ${
              currentPage === 'about'
                ? 'text-bahamas-600 font-semibold border-b-2 border-bahamas-500'
                : 'text-slate-950 hover:text-bahamas-600'
            }`}
          >
            About
          </button>

          {/* 5. AGENTS */}
          <button
            onClick={() => handleNavClick('agents')}
            className={`px-3 py-2 text-sm sm:text-base uppercase tracking-[0.2em] font-cormorant font-normal transition-all duration-200 ${
              currentPage === 'agents'
                ? 'text-bahamas-600 font-semibold border-b-2 border-bahamas-500'
                : 'text-slate-950 hover:text-bahamas-600'
            }`}
          >
            Agents
          </button>

          {/* 6. CONTACT */}
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3 py-2 text-sm sm:text-base uppercase tracking-[0.2em] font-cormorant font-normal transition-all duration-200 ${
              currentPage === 'contact'
                ? 'text-bahamas-600 font-semibold border-b-2 border-bahamas-500'
                : 'text-slate-950 hover:text-bahamas-600'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right Action Trigger */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => onOpenContactModal()}
            className="px-6 py-2.5 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 active:bg-bahamas-700 text-white font-bold text-xs uppercase tracking-[0.15em] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Inquire
          </button>
        </div>

        {/* Mobile Hamburger & Inquire Trigger */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
          <button
            onClick={() => onOpenContactModal()}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-sm"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 sm:p-2.5 rounded-xl text-slate-900 bg-slate-100 hover:bg-slate-200 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Accordion Style with Nested Dropdowns) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-8 space-y-3 shadow-2xl animate-modal max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1.5">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left ${
                currentPage === 'home' ? 'bg-bahamas-500 text-white' : 'bg-slate-50 text-slate-900'
              }`}
            >
              Home
            </button>

            {/* Buy Accordion */}
            <div className="bg-slate-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('buy')}
                className="w-full px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 flex justify-between items-center"
              >
                <span>Buy</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileExpanded.buy ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded.buy && (
                <div className="px-4 pb-3 space-y-1 pt-1 border-t border-slate-200/60">
                  <button
                    onClick={() => handleNavClick('listings')}
                    className="w-full text-left py-2 px-3 rounded-lg text-xs font-semibold text-bahamas-600 hover:bg-white"
                  >
                    Explore All Live MLS Listings
                  </button>
                  <button
                    onClick={() => handleNavClick('delaware')}
                    className="w-full text-left py-2 px-3 rounded-lg text-xs text-slate-700 hover:bg-white"
                  >
                    Delaware Luxury Properties
                  </button>
                  <button
                    onClick={() => handleNavClick('pennsylvania')}
                    className="w-full text-left py-2 px-3 rounded-lg text-xs text-slate-700 hover:bg-white"
                  >
                    Pennsylvania Estates
                  </button>
                  <button
                    onClick={() => handleNavClick('florida')}
                    className="w-full text-left py-2 px-3 rounded-lg text-xs text-slate-700 hover:bg-white"
                  >
                    Florida Coastal Sanctuaries
                  </button>
                </div>
              )}
            </div>

            {/* Sell Accordion */}
            <div className="bg-slate-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('sell')}
                className="w-full px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 flex justify-between items-center"
              >
                <span>Sell</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileExpanded.sell ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded.sell && (
                <div className="px-4 pb-3 space-y-1 pt-1 border-t border-slate-200/60">
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenValuationModal(); }}
                    className="w-full text-left py-2 px-3 rounded-lg text-xs font-semibold text-bahamas-600 hover:bg-white"
                  >
                    Request Home Valuation
                  </button>
                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenContactModal(); }}
                    className="w-full text-left py-2 px-3 rounded-lg text-xs text-slate-700 hover:bg-white"
                  >
                    Seller Consultation & Advisory
                  </button>
                </div>
              )}
            </div>

            {/* Locations Accordion */}
            <div className="bg-slate-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('markets')}
                className="w-full px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 flex justify-between items-center"
              >
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileExpanded.markets ? 'rotate-180' : ''}`} />
              </button>
              {mobileExpanded.markets && (
                <div className="px-4 pb-3 space-y-1 pt-1 border-t border-slate-200/60">
                  <button
                    onClick={() => handleNavClick('delaware')}
                    className="w-full text-left py-2 px-3 rounded-lg text-xs text-slate-700 hover:bg-white flex justify-between"
                  >
                    <span>Delaware</span>
                    <span className="text-[10px] text-slate-400">Greenville / Wilmington</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('pennsylvania')}
                    className="w-full text-left py-2 px-3 rounded-lg text-xs text-slate-700 hover:bg-white flex justify-between"
                  >
                    <span>Pennsylvania</span>
                    <span className="text-[10px] text-slate-400">Main Line</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('florida')}
                    className="w-full text-left py-2 px-3 rounded-lg text-xs text-slate-700 hover:bg-white flex justify-between"
                  >
                    <span>Florida</span>
                    <span className="text-[10px] text-slate-400">Palm Beach</span>
                  </button>
                </div>
              )}
            </div>

            {/* About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left ${
                currentPage === 'about' ? 'bg-bahamas-500 text-white' : 'bg-slate-50 text-slate-900'
              }`}
            >
              About
            </button>

            {/* Agents */}
            <button
              onClick={() => handleNavClick('agents')}
              className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left ${
                currentPage === 'agents' ? 'bg-bahamas-500 text-white' : 'bg-slate-50 text-slate-900'
              }`}
            >
              Agents
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left ${
                currentPage === 'contact' ? 'bg-bahamas-500 text-white' : 'bg-slate-50 text-slate-900'
              }`}
            >
              Contact
            </button>

          </div>
        </div>
      )}
    </header>
  );
}
