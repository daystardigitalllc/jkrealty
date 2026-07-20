import React from 'react';
import { MapPin, CheckCircle2, Sparkles, Home, Building2 } from 'lucide-react';
import RealScoutWidget from '../components/RealScoutWidget';

export default function PennsylvaniaStatePage({ onOpenListingModal, onOpenValuationModal }) {
  const paMarkets = [
    { name: "Greater Philadelphia", detail: "Center City, Rittenhouse, & Metro Neighborhoods" },
    { name: "The Main Line", detail: "Bryn Mawr, Wayne, Villanova & Gladwyne" },
    { name: "Chester County", detail: "West Chester, Malvern & Kennett Square" },
    { name: "Delaware County", detail: "Media, Chadds Ford & Radnor Township" }
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
            Pennsylvania & Main Line Real Estate
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Representing buyers and sellers throughout Greater Philadelphia, the Main Line, and suburban PA communities with seamless tri-state relocation.
          </p>
        </div>
      </section>

      {/* PA Overview Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-bahamas-100 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-bahamas-600">
              PENNSYLVANIA EXPERTISE
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              Philadelphia & Suburban PA Market Dominance
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Jeff Kralovec and Beth Ann Kralovec bring deep market insight to Pennsylvania real estate. From historic luxury brownstones in Philadelphia to expansive Main Line estates and Chester County land.
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                Licensed PA REALTOR® representation backed by advanced market tools
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                Expert guidance for selling in PA and transitioning to DE or FL beach properties
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-navy-900 text-white rounded-2xl p-6 border border-bahamas-500/30 space-y-3">
            <h3 className="font-serif font-bold text-bahamas-300 text-lg">
              Client Spotlight
            </h3>
            <p className="text-xs text-slate-300 italic leading-relaxed">
              "We’ll be reaching out again when we’re ready to sell in Philly and buy at the beach! Jeff’s office makes the entire buying and selling process seamless – just follow the directions!"
            </p>
            <div className="text-xs font-bold text-bahamas-400">— Kimberlya Sutherland</div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paMarkets.map((m, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 hover:border-bahamas-400 transition-all">
              <div className="w-8 h-8 rounded-lg bg-navy-800 text-white flex items-center justify-center font-bold text-xs">
                PA
              </div>
              <h4 className="font-bold text-slate-900 text-base">{m.name}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RealScout MLS Feed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RealScoutWidget 
          initialPropertyType="SFR,MF,TC,LAL,MOBILE,OTHER"
          title="Pennsylvania Live MLS Feed"
          stateFilter="PA"
        />
      </section>

      {/* PA Valuation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 text-white rounded-3xl p-8 text-center space-y-4 shadow-xl border border-bahamas-500/30">
          <h3 className="text-2xl font-serif font-bold">
            Planning to Buy or Sell in Pennsylvania?
          </h3>
          <button
            onClick={onOpenValuationModal}
            className="px-6 py-3 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow transition-all"
          >
            Get PA Property Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
