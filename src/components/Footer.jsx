import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Footer({ setCurrentPage, onOpenValuationModal }) {
  const currentYear = new Date().getFullYear();

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-12 border-t-4 border-bahamas-500 relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-bahamas-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="J. Kralovec Realty Group" 
                className="h-14 w-auto bg-white/95 p-2 rounded-xl shadow-glow"
              />
              <div>
                <h3 className="font-display font-bold text-lg tracking-tight text-white">
                  J. KRALOVEC
                </h3>
                <p className="text-xs text-bahamas-400 font-semibold tracking-widest uppercase">
                  REALTY GROUP
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Elevating real estate in Delaware, Pennsylvania, and Florida with deep local market expertise, innovative property technology, and record-setting sales strategies.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-bahamas-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700 hover:border-bahamas-400 group shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-bahamas-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700 hover:border-bahamas-400 group shadow-sm"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-bahamas-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700 hover:border-bahamas-400 group shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-bahamas-400 mb-4">
              Site Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button onClick={() => setCurrentPage('home')} className="hover:text-bahamas-300 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('listings')} className="hover:text-bahamas-300 transition-colors">
                  Properties & Listings
                </button>
              </li>
              <li>
                <button onClick={() => onOpenListingModal('house')} className="hover:text-bahamas-300 transition-colors">
                  RealScout MLS Search
                </button>
              </li>
              <li>
                <button onClick={onOpenValuationModal} className="hover:text-bahamas-300 transition-colors font-bold text-bahamas-400">
                  Instant Home Valuation
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContactModal('Footer Link')} className="hover:text-bahamas-300 transition-colors">
                  General Contact & Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-bahamas-400 mb-4">
              State Markets
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('delaware')} className="text-slate-300 hover:text-bahamas-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-bahamas-400" />
                  Delaware Homes
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('pennsylvania')} className="text-slate-300 hover:text-bahamas-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-bahamas-400" />
                  Pennsylvania Homes
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('florida')} className="text-slate-300 hover:text-bahamas-300 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-bahamas-400" />
                  Florida Beach Properties
                </button>
              </li>
              <li className="pt-2 text-xs text-slate-400">
                Greenville • Wilmington • Triangle • Claymont • Rehoboth • Philly • Palm Beach
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-bahamas-400 mb-4">
              Greenville Office
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bahamas-400 shrink-0 mt-1" />
                <span>
                  3701 Kennett Pike<br />
                  Greenville, DE 19807
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-bahamas-400 shrink-0" />
                <a href="tel:2678580914" className="hover:text-bahamas-300 font-medium transition-colors">
                  (267) 858-0914
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-bahamas-400 shrink-0" />
                <a href="mailto:jeff.kralovec@compass.com" className="hover:text-bahamas-300 transition-colors text-xs truncate">
                  jeff.kralovec@compass.com
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenValuationModal}
                  className="w-full py-2 px-3 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow transition-all"
                >
                  Instant Home Valuation
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-bahamas-400" />
            <span>
              © {currentYear} J. Kralovec Realty Group. All Rights Reserved. Equal Housing Opportunity.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>Powered by RealScout Integration</span>
            <span className="text-slate-600">•</span>
            <span>Delaware, Pennsylvania & Florida Licensed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
