import React from 'react';
import { MapPin, Phone, CheckCircle2, Sparkles, Home, Building2, ArrowRight } from 'lucide-react';
import RealScoutWidget from '../components/RealScoutWidget';

export default function DelawareStatePage({ onOpenListingModal, onOpenValuationModal }) {
  const deMarkets = [
    { name: "Greenville", type: "Luxury Estates & Greenville Office HQ", zip: "19807" },
    { name: "Wilmington & Triangle", type: "Historic & Suburban Homes", zip: "19802 / 19806" },
    { name: "Claymont", type: "Townhomes & Residential Developments", zip: "19703" },
    { name: "Rehoboth & Lewes", type: "Coastal Luxury & Beach Properties", zip: "19971 / 19958" },
    { name: "Dewey Beach & Bethany", type: "Oceanfront Vacation Residences", zip: "19971" }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-navy-900 via-bahamas-950 to-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bahamas-500/20 border border-bahamas-400/40 text-bahamas-300 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-bahamas-400" />
            STATE MARKET HUB
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Delaware Real Estate & Coastal Living
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            From our Greenville headquarters at 3701 Kennett Pike to Wilmington and the Delaware Beaches. Zero state sales tax, low property taxes, and record home values.
          </p>
        </div>
      </section>

      {/* HQ Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-bahamas-100 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-bahamas-600">
              GREENVILLE HEADQUARTERS
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              3701 Kennett Pike, Greenville, DE 19807
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Jeff Kralovec and the JKRG team operate directly from Greenville, Delaware. We hold a dominant market presence in New Castle County developments, securing over-asking offers in record time.
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                Proven track record in Wilmington, Triangle, Greenville & Claymont
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                Deep coastal expertise for Rehoboth, Lewes & Dewey Beach acquisitions
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-bahamas-50 rounded-2xl p-6 border border-bahamas-200 space-y-4">
            <h3 className="font-serif font-bold text-slate-900 text-lg">
              Delaware Client Success Record
            </h3>
            <p className="text-xs text-slate-600 italic leading-relaxed">
              "We worked with Jeff to sell our home in Delaware. He was responsible for the majority of sales in our development so it made sense to go with him... Jeff got us listed in a matter of days and an over ask offer on the first weekend."
            </p>
            <div className="text-xs font-bold text-bahamas-700">— Sean Brenner (Claymont, DE)</div>
          </div>
        </div>
      </section>

      {/* Local Delaware Communities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              Featured Delaware Neighborhoods & Zip Codes
            </h2>
            <p className="text-slate-600 text-xs mt-1">
              Top communities served by Jeff Kralovec Realty Group
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {deMarkets.map((m, idx) => (
              <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2 hover:border-bahamas-400 transition-all">
                <div className="w-8 h-8 rounded-lg bg-bahamas-500 text-white flex items-center justify-center font-bold text-xs">
                  DE
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{m.name}</h4>
                <p className="text-xs text-slate-500">{m.type}</p>
                <span className="text-[10px] font-semibold text-bahamas-600 block">{m.zip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RealScout MLS Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RealScoutWidget 
          initialPropertyType="SFR,MF,TC,LAL,MOBILE,OTHER"
          title="Delaware Live MLS Feed"
        />
      </section>

      {/* State Valuation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl border border-bahamas-500/30">
          <h3 className="text-2xl font-serif font-bold">
            Selling Your Delaware Home?
          </h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            Get an instant comparative market valuation prepared by Jeff Kralovec.
          </p>
          <button
            onClick={onOpenValuationModal}
            className="px-6 py-3 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow transition-all"
          >
            Get Delaware Home Valuation
          </button>
        </div>
      </section>

    </div>
  );
}
