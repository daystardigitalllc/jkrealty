import React from 'react';
import { Phone, Sparkles, Home, Search } from 'lucide-react';

export default function MobileBottomBar({ onOpenListingModal, onOpenValuationModal }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] transition-all">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href="tel:2678580914"
          className="py-2.5 px-2 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-bold text-xs flex flex-col items-center justify-center gap-1 shadow-sm text-center"
        >
          <Phone className="w-4 h-4 text-bahamas-400" />
          <span>Call Jeff</span>
        </a>

        <button
          onClick={() => onOpenListingModal('house')}
          className="py-2.5 px-2 rounded-xl bg-bahamas-50 active:bg-bahamas-100 text-bahamas-800 border border-bahamas-200 font-bold text-xs flex flex-col items-center justify-center gap-1 shadow-sm text-center"
        >
          <Search className="w-4 h-4 text-bahamas-600" />
          <span>MLS Search</span>
        </button>

        <button
          onClick={onOpenValuationModal}
          className="py-2.5 px-2 rounded-xl bg-gradient-to-r from-bahamas-500 to-bahamas-600 active:from-bahamas-600 active:to-bahamas-700 text-white font-bold text-xs flex flex-col items-center justify-center gap-1 shadow-glow text-center"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span>Valuation</span>
        </button>
      </div>
    </div>
  );
}
