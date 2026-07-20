import React from 'react';
import { Phone, Sparkles } from 'lucide-react';

export default function MobileBottomBar({ onOpenValuationModal }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] transition-all">
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href="tel:2678580914"
          className="py-3 px-3 rounded-xl bg-slate-900 active:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm text-center min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-bahamas-400 shrink-0" />
          <span>Call Jeff (267) 858-0914</span>
        </a>

        <button
          onClick={onOpenValuationModal}
          className="py-3 px-3 rounded-xl bg-gradient-to-r from-bahamas-500 to-bahamas-600 active:from-bahamas-600 active:to-bahamas-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-glow text-center min-h-[44px]"
        >
          <Sparkles className="w-4 h-4 text-white shrink-0" />
          <span>Instant Valuation</span>
        </button>
      </div>
    </div>
  );
}
