import React from 'react';
import { Home, Building2, Layers, Sparkles, ArrowRight, ShieldCheck, MapPin, Phone, Award, Search, CheckCircle2 } from 'lucide-react';
import RealScoutWidget from '../components/RealScoutWidget';
import Testimonials from '../components/Testimonials';
import StatsSection from '../components/StatsSection';
import SEO, { organizationSchema } from '../components/SEO';

export default function HomePage({ setCurrentPage, onOpenListingModal, onOpenValuationModal }) {
  return (
    <div className="space-y-16 pb-16">
      <SEO 
        title="Luxury Real Estate in DE, PA & FL"
        description="Jeff Kralovec Realty Group - Premier real estate team serving Delaware, Pennsylvania, and Florida. Specializing in luxury homes, coastal properties, and record-setting sales."
        jsonLd={organizationSchema}
      />
      {/* Hero Section with Luxury Architecture Background */}
      <section className="relative bg-navy-900 text-white pt-12 pb-20 overflow-hidden min-h-[580px] flex items-center">
        {/* Background Image with Dark Bahamas Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/110850.jpg" 
            alt="Luxury Coastal Real Estate" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/90 to-navy-900/60" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bahamas-500/20 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bahamas-500/20 border border-bahamas-400/40 text-bahamas-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-bahamas-400" />
              Premier Tri-State Luxury Group • DE • PA • FL
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.15] text-white">
              Luxury Coastal & Tri-State Real Estate <br />
              <span className="text-gradient-bahamas bg-clip-text text-transparent bg-gradient-to-r from-bahamas-300 via-bahamas-400 to-white">
                Designed Around You.
              </span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-lg leading-relaxed max-w-2xl font-light">
              The <strong>Jeff Kralovec Realty Group</strong> delivers seamless, high-value real estate solutions across Delaware, Pennsylvania, and Florida. From over-asking home sales to coastal waterfront properties.
            </p>

            {/* Quick Search Action Pill Bar */}
            <div className="bg-navy-950/80 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/20 shadow-2xl max-w-xl space-y-3">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-bahamas-300 px-1 flex items-center justify-between">
                <span>Browse Listings by Category</span>
                <span className="text-[10px] text-slate-400">Powered by RealScout</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <button
                  id="btn-house"
                  onClick={() => onOpenListingModal('house')}
                  className="p-2.5 sm:p-3 rounded-xl bg-white/95 hover:bg-white active:bg-slate-100 text-slate-900 hover:text-bahamas-600 transition-all font-bold text-xs flex flex-col items-center gap-1 shadow-md hover:scale-[1.02] min-h-[44px]"
                >
                  <Home className="w-4 h-4 text-bahamas-500" />
                  <span>Single Family</span>
                </button>

                <button
                  id="btn-condo"
                  onClick={() => onOpenListingModal('condo')}
                  className="p-2.5 sm:p-3 rounded-xl bg-white/95 hover:bg-white active:bg-slate-100 text-slate-900 hover:text-bahamas-600 transition-all font-bold text-xs flex flex-col items-center gap-1 shadow-md hover:scale-[1.02] min-h-[44px]"
                >
                  <Building2 className="w-4 h-4 text-bahamas-500" />
                  <span>Condos & Towns</span>
                </button>

                <button
                  id="btn-mf"
                  onClick={() => onOpenListingModal('mf')}
                  className="p-2.5 sm:p-3 rounded-xl bg-white/95 hover:bg-white active:bg-slate-100 text-slate-900 hover:text-bahamas-600 transition-all font-bold text-xs flex flex-col items-center gap-1 shadow-md hover:scale-[1.02] min-h-[44px]"
                >
                  <Layers className="w-4 h-4 text-bahamas-500" />
                  <span>Multi-Family</span>
                </button>
              </div>
            </div>

            {/* Hero CTA Buttons - Side by Side on Mobile */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-1 max-w-xl">
              <button
                onClick={() => setCurrentPage('listings')}
                className="w-full py-3.5 px-2 sm:px-6 rounded-xl bg-gradient-to-r from-bahamas-500 to-bahamas-600 hover:from-bahamas-600 hover:to-bahamas-700 text-white font-bold text-[11px] sm:text-sm uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-1 sm:gap-2 text-center"
              >
                <span className="truncate">Explore Listings</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              </button>

              <button
                onClick={onOpenValuationModal}
                className="w-full py-3.5 px-2 sm:px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-[11px] sm:text-sm uppercase tracking-wider transition-all backdrop-blur-md text-center flex items-center justify-center"
              >
                <span className="truncate">Home Valuation</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex items-center gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-bahamas-400" />
                Over-Asking Price Track Record
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-bahamas-400" />
                Advanced RealScout MLS Tech
              </span>
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
                  onClick={() => onOpenContactModal('Greenville Office')}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs uppercase tracking-[0.15em] transition-all"
                >
                  Contact Greenville Office
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-2xl overflow-hidden border-2 border-bahamas-400/40 shadow-glow w-full max-w-md bg-white p-1.5">
                <img
                  src="/images/jkrg-group-photo.jpg"
                  alt="Jeff Kralovec Realty Group Team"
                  className="w-full h-auto max-h-[300px] sm:max-h-[340px] object-contain rounded-xl"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-navy-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-bahamas-500/30 flex items-center justify-between text-xs text-white font-bold">
                  <span>The Jeff Kralovec Realty Group (JKRG)</span>
                  <span className="text-bahamas-300 text-[10px] uppercase font-bold">5 REALTORS®</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
