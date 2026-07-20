import React, { useState, useEffect, useRef } from 'react';
import { Home, Building, Layers, Sparkles, Check } from 'lucide-react';

export default function RealScoutWidget({ 
  initialPropertyType = "SFR,MF,TC,LAL,MOBILE,OTHER", 
  title = "Featured Properties & MLS Listings",
  stateFilter = null
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

  // Deep Shadow DOM Penetrating Filter Engine
  useEffect(() => {
    const applyStateFilter = () => {
      if (!containerRef.current) return;
      const widget = containerRef.current.querySelector('realscout-office-listings');
      if (!widget) return;

      // Collect all DOM roots (Shadow Root + Light DOM)
      const roots = [];
      if (widget.shadowRoot) roots.push(widget.shadowRoot);
      roots.push(widget);
      roots.push(containerRef.current);

      roots.forEach((root) => {
        // Query potential card elements inside RealScout widget
        const elements = root.querySelectorAll('a, article, [class*="card"], [class*="listing"], [class*="item"]');

        elements.forEach((el) => {
          // Identify card boundary elements (elements that link to listings or have card classes)
          const isCard = el.tagName === 'A' || el.tagName === 'ARTICLE' || (el.className && typeof el.className === 'string' && (el.className.includes('card') || el.className.includes('listing')));

          if (isCard) {
            const content = el.innerText || el.textContent || '';

            if (activeState) {
              // Keywords matching the state or key cities in that state
              const deKeywords = 'DE|Delaware|Greenville|Wilmington|Claymont|Rehoboth|Lewes|Dewey';
              const paKeywords = 'PA|Pennsylvania|Philadelphia|Philly|Main Line|Chester|Media|Radnor';
              const flKeywords = 'FL|Florida|Palm Beach|Naples|Miami|Sarasota|Tampa';

              const activeKeywords = activeState === 'DE' ? deKeywords : activeState === 'PA' ? paKeywords : flKeywords;
              const regex = new RegExp(`\\b(${activeKeywords})\\b`, 'i');

              if (!regex.test(content)) {
                el.style.setProperty('display', 'none', 'important');
              } else {
                el.style.setProperty('display', '', '');
              }
            } else {
              el.style.setProperty('display', '', '');
            }
          }
        });
      });
    };

    // Run filter loop to catch dynamic rendering from RealScout script
    applyStateFilter();
    const interval = setInterval(applyStateFilter, 400);

    let observer = null;
    const widget = containerRef.current?.querySelector('realscout-office-listings');
    if (widget?.shadowRoot) {
      observer = new MutationObserver(applyStateFilter);
      observer.observe(widget.shadowRoot, { childList: true, subtree: true });
    }

    return () => {
      clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, [activeState, selectedType]);

  return (
    <div ref={containerRef} className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-card border border-bahamas-100 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-bahamas-50 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="relative z-10 space-y-4 sm:space-y-6">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bahamas-50 border border-bahamas-200 text-bahamas-700 text-[11px] font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-bahamas-500" />
              Live MLS Feed
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
              {title}
            </h3>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* State Filter Buttons */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
              {states.map((st) => (
                <button
                  key={st.label}
                  onClick={() => setActiveState(st.code)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                    activeState === st.code
                      ? 'bg-navy-900 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 active:bg-slate-200'
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>

            {/* Property Type Buttons */}
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedType === cat.code;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedType(cat.code)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-1 shrink-0 min-h-[36px] ${
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
