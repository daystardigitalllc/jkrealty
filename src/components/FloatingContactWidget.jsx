import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingContactWidget() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 animate-fade-in">
      <div className="relative flex items-center bg-slate-950/90 text-white rounded-full p-2 pr-4 shadow-2xl border border-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-bahamas-500/20 group">
        
        {/* Call Icon Button */}
        <a
          href="tel:2678580914"
          className="p-3 rounded-full bg-slate-900 text-white hover:bg-bahamas-500 hover:text-white transition-all duration-200 flex items-center justify-center relative group/btn"
          aria-label="Call Agent"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-white bg-slate-900 rounded-md opacity-0 pointer-events-none group-hover/btn:opacity-100 transition-opacity whitespace-nowrap border border-white/10 shadow-lg">
            Call Agent
          </span>
        </a>

        {/* Divider */}
        <div className="h-6 w-[1px] bg-white/15 mx-2.5 sm:mx-3" />

        {/* Text Icon Button */}
        <a
          href="sms:5618068999"
          className="p-3 rounded-full bg-slate-900 text-white hover:bg-bahamas-500 hover:text-white transition-all duration-200 flex items-center justify-center relative group/btn"
          aria-label="Text Agent"
        >
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase text-white bg-slate-900 rounded-md opacity-0 pointer-events-none group-hover/btn:opacity-100 transition-opacity whitespace-nowrap border border-white/10 shadow-lg">
            Text Agent
          </span>
        </a>

        {/* Desktop Title Hint */}
        <div className="hidden sm:flex flex-col ml-3 text-left">
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider leading-none">
            Direct Line
          </span>
          <span className="text-[11px] text-bahamas-300 font-extrabold uppercase tracking-widest mt-0.5 whitespace-nowrap">
            Text or Call
          </span>
        </div>
      </div>
    </div>
  );
}
