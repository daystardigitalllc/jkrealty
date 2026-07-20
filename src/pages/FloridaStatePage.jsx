import React from 'react';
import { MapPin, CheckCircle2, Sparkles, Sun, Waves, Compass } from 'lucide-react';
import RealScoutWidget from '../components/RealScoutWidget';

export default function FloridaStatePage({ onOpenListingModal, onOpenValuationModal }) {
  const flMarkets = [
    { name: "Palm Beach & West Palm", detail: "Luxury Estates, Intracoastal Villas & Oceanfront Living" },
    { name: "Naples & Marco Island", detail: "Gulf Coast Beachfront Residences & Golf Club Communities" },
    { name: "Miami & Fort Lauderdale", detail: "Modern High-Rise Condominiums & Deepwater Dockage Estates" },
    { name: "Sarasota & Tampa Bay", detail: "Cultural Coastal Haven & Barrier Island Retreats" }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-navy-900 via-bahamas-950 to-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Background Bahamas Blue Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bahamas-400/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bahamas-500/20 border border-bahamas-400/40 text-bahamas-300 text-xs font-bold uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5 text-bahamas-400" />
            FLORIDA COASTAL & BEACHES
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Florida Luxury Waterfront & Beach Real Estate
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Your bridge between the Northeast and Sunshine State. Full licensed representation for Palm Beach, Naples, Miami, and coastal Florida living.
          </p>
        </div>
      </section>

      {/* FL Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-bahamas-100 shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-bahamas-600">
              SUNSHINE STATE EXPERTISE
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              Florida Beach & Waterfront Concierge
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              With licensed agents Jeff Kralovec and Beth Ann Kralovec, JKRG provides seamless assistance for Northeast clients purchasing Florida winter retreats, waterfront investment properties, or primary coastal homes.
            </p>
            <ul className="space-y-2 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                Licensed REALTOR® status in Florida & Pennsylvania
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                Specialized in luxury land, deepwater dockage, and waterfront modern residences
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                Tax-advantaged Florida residency & second-home acquisition strategy
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-bahamas-500 to-bahamas-700 text-white rounded-2xl p-6 shadow-glow space-y-3">
            <div className="flex items-center gap-2">
              <Waves className="w-5 h-5" />
              <h3 className="font-serif font-bold text-white text-lg">
                Coastal Property Advisory
              </h3>
            </div>
            <p className="text-xs text-bahamas-50 leading-relaxed">
              Whether searching for an oceanfront condominium in Palm Beach or a private estate in Naples, our team ensures your Florida purchase is handled with absolute precision.
            </p>
            <button
              onClick={onOpenValuationModal}
              className="w-full py-2.5 rounded-xl bg-white text-bahamas-800 font-bold text-xs uppercase tracking-wider shadow-md hover:bg-bahamas-50 transition-colors"
            >
              Schedule Florida Beach Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Florida Markets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flMarkets.map((m, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 hover:border-bahamas-400 transition-all">
              <div className="w-8 h-8 rounded-lg bg-bahamas-500 text-white flex items-center justify-center font-bold text-xs">
                FL
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
          title="Florida Live MLS Feed"
          stateFilter="FL"
        />
      </section>

    </div>
  );
}
