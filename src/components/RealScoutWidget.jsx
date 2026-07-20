import React, { useState } from 'react';
import { Home, Building, Layers, Sparkles, Check } from 'lucide-react';

export default function RealScoutWidget({ 
  initialPropertyType = "SFR,MF,TC,LAL,MOBILE,OTHER", 
  title = "Featured Properties & MLS Listings"
}) {
  const [selectedType, setSelectedType] = useState(initialPropertyType);
  const agentId = "QWdlbnQtNzQ1MjM=";

  const categories = [
    { id: "SFR,MF,TC,LAL,MOBILE,OTHER", label: "All Properties", icon: Home, code: "SFR,MF,TC,LAL,MOBILE,OTHER" },
    { id: "SFR", label: "Single Family", icon: Home, code: "SFR" },
    { id: "TC,MF", label: "Condos & Townhomes", icon: Building, code: "TC,MF" },
    { id: "MF", label: "Multi-Family", icon: Layers, code: "MF" },
  ];

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-card border border-bahamas-100 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-bahamas-50 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="relative z-10 space-y-4 sm:space-y-6">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bahamas-50 border border-bahamas-200 text-bahamas-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-bahamas-500" />
              Live MLS Feed
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              {title}
            </h3>
          </div>

          {/* Property Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 pt-1 md:py-0 -mx-1 px-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedType === cat.code;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedType(cat.code)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1.5 shrink-0 min-h-[40px] ${
                    isSelected
                      ? 'bg-bahamas-500 text-white shadow-glow'
                      : 'bg-slate-100 text-slate-700 hover:bg-bahamas-50 hover:text-bahamas-700 border border-slate-200/80 active:bg-slate-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-white ml-0.5" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* RealScout Web Component Container */}
        <div className="min-h-[420px] sm:min-h-[480px] bg-slate-50 rounded-xl sm:rounded-2xl p-1.5 sm:p-4 border border-slate-100 transition-all overflow-x-auto">
          <realscout-office-listings
            agent-encoded-id={agentId}
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale"
            property-types={selectedType}
          ></realscout-office-listings>
        </div>

        {/* RealScout Disclosure */}
        <div className="text-center pt-1">
          <p className="text-[11px] text-slate-400">
            Powered by RealScout MLS Data • Live updates for Delaware, Pennsylvania & Florida listings
          </p>
        </div>
      </div>
    </div>
  );
}
