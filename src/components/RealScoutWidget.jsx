import React, { useState, useEffect, useRef } from 'react';
import { Home, Building, Layers, Sparkles, Check, MapPin } from 'lucide-react';

export default function RealScoutWidget({ 
  initialPropertyType = "SFR,MF,TC,LAL,MOBILE,OTHER", 
  title = "Featured Properties & MLS Listings",
  stateFilter = null // "DE", "PA", "FL" or null for All
}) {
  const [selectedType, setSelectedType] = useState(initialPropertyType);
  const [activeState, setActiveState] = useState(stateFilter);
  const containerRef = useRef(null);
  const agentId = "QWdlbnQtNzQ1MjM=";

  const categories = [
    { id: "SFR,MF,TC,LAL,MOBILE,OTHER", label: "All Properties", icon: Home, code: "SFR,MF,TC,LAL,MOBILE,OTHER" },
    { id: "SFR", label: "Single Family", icon: Home, code: "SFR" },
    { id: "TC,MF", label: "Condos & Townhomes", icon: Building, code: "TC,MF" },
    { id: "MF", label: "Multi-Family", icon: Layers, code: "MF" },
  ];

  const states = [
    { code: null, label: "All States" },
    { code: "DE", label: "Delaware" },
    { code: "PA", label: "Pennsylvania" },
    { code: "FL", label: "Florida" },
  ];

  // Client-Side DOM State Filter Engine for RealScout Listings
  useEffect(() => {
    if (!containerRef.current) return;

    const filterListingsByState = () => {
      if (!activeState) {
        // Show all if no state filter
        const allCards = containerRef.current.querySelectorAll('*');
        allCards.forEach((el) => {
          if (el.style && el.dataset && el.dataset.hiddenByState) {
            el.style.display = '';
            delete el.dataset.hiddenByState;
          }
        });
        return;
      }

      // Query cards or listing items inside the RealScout component or container
      const widget = containerRef.current.querySelector('realscout-office-listings');
      const root = widget?.shadowRoot || containerRef.current;
      
      const cards = root.querySelectorAll('.listing-card, .rs-listing-card, [class*="card"], [class*="listing"], article, div > a');

      cards.forEach((card) => {
        const text = card.textContent || '';
        const statePattern = new RegExp(`\\b(${activeState}|${activeState === 'DE' ? 'Delaware' : activeState === 'PA' ? 'Pennsylvania' : 'Florida'})\\b`, 'i');

        if (text && !statePattern.test(text) && card.children.length > 0) {
          card.style.display = 'none';
          card.dataset.hiddenByState = 'true';
        } else if (card.dataset && card.dataset.hiddenByState) {
          card.style.display = '';
          delete card.dataset.hiddenByState;
        }
      });
    };

    // Run filter immediately and set up observer for async RealScout DOM loads
    filterListingsByState();
    const interval = setInterval(filterListingsByState, 600);
    
    const observer = new MutationObserver(filterListingsByState);
    observer.observe(containerRef.current, { childList: true, subtree: true });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [activeState, selectedType]);

  return (
    <div ref={containerRef} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-card border border-bahamas-100 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-bahamas-50 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="relative z-10 space-y-4 sm:space-y-6">
        {/* Header & Filter Pill Bar */}
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

          {/* Quick Controls: State Selector + Category Pills */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            
            {/* State Filter Pills */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
              {states.map((st) => (
                <button
                  key={st.label}
                  onClick={() => setActiveState(st.code)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeState === st.code
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            {/* Property Type Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 pt-1 md:py-0 -mx-1 px-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedType === cat.code;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedType(cat.code)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1 shrink-0 ${
                      isSelected
                        ? 'bg-bahamas-500 text-white shadow-glow'
                        : 'bg-slate-100 text-slate-700 hover:bg-bahamas-50 hover:text-bahamas-700 border border-slate-200/80'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    {isSelected && <Check className="w-3 h-3 text-white ml-0.5" />}
                  </button>
                );
              })}
            </div>

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
