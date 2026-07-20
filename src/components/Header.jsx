import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Header({ currentPage, setCurrentPage, onOpenListingModal, onOpenValuationModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [marketsDropdownOpen, setMarketsDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'listings', label: 'Listings' },
    { id: 'about', label: 'About Us' },
    { id: 'agents', label: 'Agents' },
  ];

  const stateMarkets = [
    { id: 'delaware', label: 'Delaware', detail: 'Greenville, Wilmington & Beaches' },
    { id: 'pennsylvania', label: 'Pennsylvania', detail: 'Philadelphia & Main Line' },
    { id: 'florida', label: 'Florida', detail: 'Coastal & Beachfront' },
  ];

  const handleNavClick = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    setMarketsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 glass-header shadow-sm transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-navy-800 via-bahamas-900 to-navy-800 text-white text-xs py-2 px-4 border-b border-bahamas-500/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-bahamas-300">
              <Sparkles className="w-3.5 h-3.5 text-bahamas-400 animate-pulse" />
              Compass Tri-State Group: DE • PA • FL
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-bahamas-400" />
              3701 Kennett Pike, Greenville, DE 19807
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:2678580914" className="flex items-center gap-1.5 hover:text-bahamas-300 transition-colors font-medium">
              <Phone className="w-3 h-3 text-bahamas-400" />
              (267) 858-0914
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:jeff.kralovec@compass.com" className="flex items-center gap-1.5 hover:text-bahamas-300 transition-colors">
              <Mail className="w-3 h-3 text-bahamas-400" />
              jeff.kralovec@compass.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand Official Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group focus:outline-none text-left"
        >
          <img 
            src="/logo.svg" 
            alt="J. Kralovec Realty Group" 
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:block border-l border-slate-200 pl-3">
            <span className="bg-slate-900 text-white text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded border border-slate-700 block text-center">
              COMPASS
            </span>
            <span className="text-[10px] text-bahamas-600 font-bold tracking-widest uppercase block mt-0.5">
              TRI-STATE GROUP
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                currentPage === item.id
                  ? 'bg-bahamas-50 text-bahamas-700 border border-bahamas-200 shadow-sm'
                  : 'text-slate-700 hover:text-bahamas-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Markets Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMarketsDropdownOpen(!marketsDropdownOpen)}
              onMouseEnter={() => setMarketsDropdownOpen(true)}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                ['delaware', 'pennsylvania', 'florida'].includes(currentPage)
                  ? 'bg-bahamas-50 text-bahamas-700 border border-bahamas-200'
                  : 'text-slate-700 hover:text-bahamas-600 hover:bg-slate-50'
              }`}
            >
              State Markets
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${marketsDropdownOpen ? 'rotate-180 text-bahamas-600' : ''}`} />
            </button>

            {marketsDropdownOpen && (
              <div 
                className="absolute right-0 mt-1 w-64 glass-card rounded-2xl p-2 shadow-xl border border-bahamas-100 z-50 animate-modal"
                onMouseLeave={() => setMarketsDropdownOpen(false)}
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-bahamas-600 px-3 py-1.5">
                  Regional Expertise
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
                    <span className="text-sm font-bold">{m.label}</span>
                    <span className={`text-xs ${currentPage === m.id ? 'text-bahamas-100' : 'text-slate-500'}`}>
                      {m.detail}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              currentPage === 'contact'
                ? 'bg-bahamas-50 text-bahamas-700 border border-bahamas-200'
                : 'text-slate-700 hover:text-bahamas-600 hover:bg-slate-50'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => onOpenListingModal('house')}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-bahamas-700 bg-bahamas-50 hover:bg-bahamas-100 border border-bahamas-200 rounded-xl transition-all duration-200 shadow-sm"
          >
            Quick MLS Search
          </button>

          <button
            onClick={onOpenValuationModal}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-bahamas-500 to-bahamas-600 hover:from-bahamas-600 hover:to-bahamas-700 rounded-xl transition-all duration-200 shadow-glow hover:shadow-glow-lg"
          >
            Home Valuation
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:text-bahamas-600 hover:bg-slate-100 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-modal">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold text-left transition-all ${
                  currentPage === item.id
                    ? 'bg-bahamas-500 text-white shadow-sm'
                    : 'bg-slate-50 text-slate-800 hover:bg-bahamas-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-bold uppercase tracking-wider text-bahamas-600 px-1 mb-2">
              State Market Hubs
            </div>
            <div className="space-y-1.5">
              {stateMarkets.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleNavClick(m.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                    currentPage === m.id
                      ? 'bg-bahamas-500 text-white font-bold'
                      : 'bg-slate-50 text-slate-800'
                  }`}
                >
                  <span className="text-sm font-bold">{m.label} Real Estate</span>
                  <span className="text-xs opacity-75">{m.detail}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => { handleNavClick('contact'); }}
              className="w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm text-center"
            >
              Contact Jeff's Team
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenValuationModal(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-bahamas-500 to-bahamas-600 text-white font-bold text-sm shadow-glow text-center"
            >
              Get Instant Home Valuation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
