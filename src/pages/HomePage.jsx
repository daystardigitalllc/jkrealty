import React from 'react';
import { Home, Building2, Layers, Sparkles, ArrowRight, ShieldCheck, MapPin, Phone, Award, Search, CheckCircle2 } from 'lucide-react';
import RealScoutWidget from '../components/RealScoutWidget';
import Testimonials from '../components/Testimonials';
import StatsSection from '../components/StatsSection';

export default function HomePage({ setCurrentPage, onOpenListingModal, onOpenValuationModal }) {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-navy-900 via-bahamas-950 to-navy-900 text-white pt-12 pb-20 overflow-hidden">
        {/* Background Glowing Coastal Gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bahamas-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-bahamas-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bahamas-500/20 border border-bahamas-400/40 text-bahamas-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-bahamas-400" />
                Premier Compass Luxury Group • DE • PA • FL
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.15] text-white">
                Luxury Coastal & Tri-State Real Estate <br />
                <span className="text-gradient-bahamas bg-clip-text text-transparent bg-gradient-to-r from-bahamas-300 via-bahamas-400 to-white">
                  Designed Around You.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
                Led by <strong>Jeff Kralovec</strong>, our team delivers seamless, high-value real estate solutions across Delaware, Pennsylvania, and Florida. From over-asking home sales to coastal waterfront properties.
              </p>

              {/* Quick Search Action Pill Bar (matching user's script logic) */}
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-2xl max-w-xl space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-bahamas-300 px-1 flex items-center justify-between">
                  <span>Browse Listings by Category</span>
                  <span className="text-[10px] text-slate-400">Powered by RealScout</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <button
                    id="btn-house"
                    onClick={() => onOpenListingModal('house')}
                    className="p-3 rounded-xl bg-white/90 hover:bg-white text-slate-900 hover:text-bahamas-600 transition-all font-bold text-xs flex flex-col items-center gap-1 shadow-md hover:scale-[1.02]"
                  >
                    <Home className="w-4 h-4 text-bahamas-500" />
                    Single Family
                  </button>

                  <button
                    id="btn-condo"
                    onClick={() => onOpenListingModal('condo')}
                    className="p-3 rounded-xl bg-white/90 hover:bg-white text-slate-900 hover:text-bahamas-600 transition-all font-bold text-xs flex flex-col items-center gap-1 shadow-md hover:scale-[1.02]"
                  >
                    <Building2 className="w-4 h-4 text-bahamas-500" />
                    Condos & Townhomes
                  </button>

                  <button
                    id="btn-mf"
                    onClick={() => onOpenListingModal('mf')}
                    className="p-3 rounded-xl bg-white/90 hover:bg-white text-slate-900 hover:text-bahamas-600 transition-all font-bold text-xs flex flex-col items-center gap-1 shadow-md hover:scale-[1.02]"
                  >
                    <Layers className="w-4 h-4 text-bahamas-500" />
                    Multi-Family
                  </button>
                </div>
              </div>

              {/* Hero CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentPage('listings')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-bahamas-500 to-bahamas-600 hover:from-bahamas-600 hover:to-bahamas-700 text-white font-bold text-sm uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center gap-2"
                >
                  Explore All Listings
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenValuationModal}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm uppercase tracking-wider transition-all backdrop-blur-md"
                >
                  Instant Home Valuation
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 flex items-center gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-bahamas-400" />
                  Over-Asking Price Track Record
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-bahamas-400" />
                  Compass Network Tech
                </span>
              </div>
            </div>

            {/* Hero Image Card Spotlight */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden shadow-2xl border-2 border-bahamas-400/30 group">
                <img
                  src="/images/jeff_pilot.jpg"
                  alt="Jeff Kralovec - Leader of JKRG"
                  className="w-full h-[460px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Card */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent flex flex-col justify-end p-6">
                  <div className="glass-card-dark p-4 rounded-2xl border border-bahamas-500/40 text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-bahamas-300">
                        Lead REALTOR®
                      </span>
                      <span className="bg-bahamas-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        COMPASS
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-xl text-white">
                      Jeff Kralovec
                    </h3>
                    <p className="text-xs text-slate-300">
                      Licensed in Delaware, Pennsylvania & Florida with over $45M+ in closed sales.
                    </p>
                    <div className="pt-1 flex items-center justify-between text-xs text-bahamas-300 font-medium">
                      <span>(267) 858-0914</span>
                      <button 
                        onClick={() => setCurrentPage('about')}
                        className="underline hover:text-white"
                      >
                        Read Full Bio →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* RealScout Live MLS Feed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RealScoutWidget 
          initialPropertyType="SFR,MF,TC,LAL,MOBILE,OTHER"
          title="Explore Current MLS Listings"
        />
      </section>

      {/* Regional State Markets Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bahamas-50 border border-bahamas-200 text-bahamas-700 text-xs font-bold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-bahamas-500" />
              Regional Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Serving Premier Markets Across 3 States
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Whether buying a primary residence in Delaware, selling in Greater Philadelphia, or purchasing a beach retreat in Florida, we guide you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Delaware Card */}
            <div 
              onClick={() => setCurrentPage('delaware')}
              className="group bg-slate-50 hover:bg-bahamas-50/50 rounded-3xl p-8 border border-slate-200 hover:border-bahamas-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-bahamas-500 text-white flex items-center justify-center font-bold text-lg shadow-glow">
                  DE
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-bahamas-600 transition-colors">
                  Delaware Real Estate
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Greenville, Wilmington, Triangle, Claymont, Rehoboth Beach, Lewes, and Dewey Beach. Low property taxes & coastal living.
                </p>
                <ul className="space-y-2 text-xs font-medium text-slate-700 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                    Greenville HQ (3701 Kennett Pike)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                    Over-ask selling record in Claymont & Wilmington
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between text-bahamas-700 font-bold text-xs uppercase tracking-wider">
                <span>Explore DE Listings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pennsylvania Card */}
            <div 
              onClick={() => setCurrentPage('pennsylvania')}
              className="group bg-slate-50 hover:bg-bahamas-50/50 rounded-3xl p-8 border border-slate-200 hover:border-bahamas-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-navy-800 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  PA
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-bahamas-600 transition-colors">
                  Pennsylvania Real Estate
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Philadelphia, Main Line, Delaware County, and Chester County. Modern suburban estates & vibrant city homes.
                </p>
                <ul className="space-y-2 text-xs font-medium text-slate-700 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                    Main Line & Philadelphia luxury homes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                    Seamless multi-state relocations
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between text-bahamas-700 font-bold text-xs uppercase tracking-wider">
                <span>Explore PA Listings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Florida Card */}
            <div 
              onClick={() => setCurrentPage('florida')}
              className="group bg-slate-50 hover:bg-bahamas-50/50 rounded-3xl p-8 border border-slate-200 hover:border-bahamas-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-bahamas-400 to-bahamas-600 text-white flex items-center justify-center font-bold text-lg shadow-glow">
                  FL
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 group-hover:text-bahamas-600 transition-colors">
                  Florida Beach & Coastal
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Palm Beach, Naples, Miami, and Gulf Coast waterfront residences. Sunshine State vacation homes & tax-friendly living.
                </p>
                <ul className="space-y-2 text-xs font-medium text-slate-700 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                    Waterfront & Beachfront specialists
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                    Second-home & luxury investments
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between text-bahamas-700 font-bold text-xs uppercase tracking-wider">
                <span>Explore FL Listings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Meet the Team Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-900 via-bahamas-950 to-navy-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-bahamas-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-bahamas-300">
                Top-Notch Office Staff & Agents
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Let Our Team Take Care of You
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
                Our agents are dedicated professionals who understand both the market and the dreams behind every move. With deep local knowledge, industry expertise, and personalized attention, we ensure your buying or selling experience is smooth, transparent, and rewarding.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('agents')}
                  className="px-6 py-3 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow transition-all"
                >
                  Meet All 5 Team Agents
                </button>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Contact Our Office
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-bahamas-400/40 shadow-glow max-w-sm">
                <img
                  src="/images/jkrg-group-photo.jpg"
                  alt="Jeff Kralovec Realty Group Team"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-white">
                    The Jeff Kralovec Realty Group (JKRG)
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
