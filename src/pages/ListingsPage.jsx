import React from 'react';
import { Home, Sparkles, Filter, Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import RealScoutWidget from '../components/RealScoutWidget';

export default function ListingsPage({ onOpenListingModal, onOpenValuationModal }) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-navy-900 via-bahamas-950 to-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bahamas-500/20 border border-bahamas-400/40 text-bahamas-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bahamas-400" />
            REALSCOUT MLS FEED
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Exclusive Listings & MLS Properties
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Browse live homes, townhouses, condos, multi-family, and waterfront properties for sale across Delaware, Pennsylvania, and Florida.
          </p>
        </div>
      </section>

      {/* Main RealScout Listing Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RealScoutWidget 
          initialPropertyType="SFR,MF,TC,LAL,MOBILE,OTHER"
          title="All Live Office Listings"
        />
      </section>

      {/* Buying Advice & Concierge Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-bahamas-100 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-bahamas-600 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              VIP Buyer Concierge Service
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Don't See What You're Looking For?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Properties in Delaware, PA, and Florida move quickly. Jeff Kralovec's team has access to off-market pocket listings, coming-soon inventory, and custom RealScout automated alerts.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <a
              href="tel:2678580914"
              className="w-full py-3.5 px-4 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider text-center shadow-glow transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call (267) 858-0914
            </a>
            <button
              onClick={onOpenValuationModal}
              className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-bahamas-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
            >
              Request Custom Property Search
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
