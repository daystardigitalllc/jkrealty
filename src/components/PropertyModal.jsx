import React from 'react';
import { X, Sparkles } from 'lucide-react';

export default function PropertyModal({ isOpen, onClose, initialType = "house" }) {
  if (!isOpen) return null;

  const agentId = "QWdlbnQtNzQ1MjM=";

  let propertyType = "SFR";
  let displayTitle = "Single Family Homes";

  switch (initialType) {
    case "house":
      propertyType = "SFR";
      displayTitle = "Single Family Homes For Sale";
      break;
    case "condo":
      propertyType = "TC,MF";
      displayTitle = "Condos & Townhomes For Sale";
      break;
    case "mf":
      propertyType = "MF";
      displayTitle = "Multi-Family Properties";
      break;
    default:
      propertyType = "SFR,MF,TC,LAL,MOBILE,OTHER";
      displayTitle = "All Premier Listings";
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/80 backdrop-blur-md transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-5xl h-[94vh] sm:h-auto sm:max-h-[90vh] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-bahamas-200 overflow-hidden flex flex-col animate-modal">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-navy-800 via-bahamas-900 to-navy-800 text-white p-4 sm:p-6 flex items-center justify-between border-b border-bahamas-500/30 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-bahamas-500 flex items-center justify-center text-white shadow-glow">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-serif font-bold text-white leading-tight">
                {displayTitle}
              </h3>
              <p className="text-[10px] sm:text-xs text-bahamas-300">
                Jeff Kralovec Realty Group • RealScout Live Feed
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-2 sm:p-6 overflow-y-auto flex-1 bg-slate-50">
          <realscout-office-listings
            agent-encoded-id={agentId}
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
            listing-status="For Sale"
            property-types={propertyType}
          ></realscout-office-listings>
        </div>

        {/* Modal Footer */}
        <div className="bg-white p-3 sm:p-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-500 shrink-0">
          <span className="text-center sm:text-left text-[11px] sm:text-xs">Questions? Call Jeff at (267) 858-0914</span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 active:bg-slate-200 text-slate-800 font-bold rounded-xl transition-colors min-h-[44px]"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
