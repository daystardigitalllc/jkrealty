import React, { useState } from 'react';
import { Phone, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, onOpenListingModal, onOpenValuationModal, onOpenContactModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [marketsDropdownOpen, setMarketsDropdownOpen] = useState(false);

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    setMarketsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stateMarkets = [
    { id: 'delaware', label: 'Delaware', detail: 'Greenville, Wilmington & Beaches' },
    { id: 'pennsylvania', label: 'Pennsylvania', detail: 'Philadelphia & Main Line' },
    { id: 'florida', label: 'Florida', detail: 'Coastal & Beachfront' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-navy-900 text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-bahamas-500/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300 truncate">
            <span className="flex items-center gap-1 font-medium text-bahamas-300 truncate">
              <Sparkles className="w-3 h-3 text-bahamas-400 shrink-0" />
              <span className="truncate">Jeff Kralovec Realty Group • DE • PA • FL</span>
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-xs">
            <a href="tel:2678580914" className="flex items-center gap-1 hover:text-bahamas-300 transition-colors font-medium text-white">
              <Phone className="w-3 h-3 text-bahamas-400" />
              <span>(267) 858-0914</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group focus:outline-none text-left shrink-0"
        >
          <img 
            src="/logo.svg" 
            alt="J. Kralovec Realty Group" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-slate-900 font-serif font-bold text-base sm:text-xl tracking-tight leading-none">
              J Kralovec
            </span>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
              REALTY GROUP
            </span>
          </div>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center space-x-1 lg:space-x-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
              currentPage === 'home'
                ? 'text-bahamas-600 font-bold border-b-2 border-bahamas-500'
                : 'text-slate-700 hover:text-bahamas-600'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('listings')}
            className={`px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
              currentPage === 'listings'
                ? 'text-bahamas-600 font-bold border-b-2 border-bahamas-500'
                : 'text-slate-700 hover:text-bahamas-600'
            }`}
          >
            Buy
          </button>

          <button
            onClick={onOpenValuationModal}
            className="px-3.5 py-2 text-xs uppercase tracking-wider font-semibold text-slate-700 hover:text-bahamas-600 transition-all duration-200"
          >
            Sell
          </button>

          {/* State Markets Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMarketsDropdownOpen(!marketsDropdownOpen)}
              onMouseEnter={() => setMarketsDropdownOpen(true)}
              className={`px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-200 flex items-center gap-1 ${
                ['delaware', 'pennsylvania', 'florida'].includes(currentPage)
                  ? 'text-bahamas-600 font-bold border-b-2 border-bahamas-500'
                  : 'text-slate-700 hover:text-bahamas-600'
              }`}
            >
              Developments & Markets
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${marketsDropdownOpen ? 'rotate-180 text-bahamas-600' : ''}`} />
            </button>

            {marketsDropdownOpen && (
              <div 
                className="absolute right-0 mt-1 w-64 bg-white rounded-2xl p-2 shadow-xl border border-slate-200 z-50 animate-modal"
                onMouseLeave={() => setMarketsDropdownOpen(false)}
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-3 py-1.5">
                  Regional Markets
                </div>
                {stateMarkets.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => handleNavClick(m.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl transition-all duration-150 flex flex-col ${
                      currentPage === m.id
                        ? 'bg-bahamas-500 text-white font-medium shadow-sm'
                        : 'hover:bg-bahamas-50 text-slate-800'
                    }`}
                  >
                    <span className="text-xs font-bold">{m.label}</span>
                    <span className={`text-[11px] ${currentPage === m.id ? 'text-bahamas-100' : 'text-slate-500'}`}>
                      {m.detail}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('about')}
            className={`px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
              currentPage === 'about'
                ? 'text-bahamas-600 font-bold border-b-2 border-bahamas-500'
                : 'text-slate-700 hover:text-bahamas-600'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3.5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
              currentPage === 'contact'
                ? 'text-bahamas-600 font-bold border-b-2 border-bahamas-500'
                : 'text-slate-700 hover:text-bahamas-600'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Inquire Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => onOpenContactModal('Inquire Header')}
            className="px-6 py-2.5 rounded-lg bg-bahamas-500 hover:bg-bahamas-600 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Inquire
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenContactModal('Inquire Mobile')}
            className="px-4 py-2 rounded-lg bg-bahamas-500 text-white font-semibold text-xs uppercase tracking-wider mr-1"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-800 bg-slate-100 hover:bg-slate-200 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-8 space-y-3 shadow-xl animate-modal max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left bg-slate-50 text-slate-900"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('listings')}
              className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left bg-slate-50 text-slate-900"
            >
              Buy Listings
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenValuationModal(); }}
              className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left bg-slate-50 text-slate-900"
            >
              Sell / Home Valuation
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left bg-slate-50 text-slate-900"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left bg-slate-50 text-slate-900"
            >
              Contact
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              State Market Hubs
            </div>
            <div className="space-y-1">
              {stateMarkets.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleNavClick(m.id)}
                  className="w-full text-left px-4 py-2.5 rounded-xl bg-slate-50 text-slate-900 text-xs font-semibold flex justify-between items-center"
                >
                  <span>{m.label}</span>
                  <span className="text-[10px] text-slate-500">{m.detail}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
