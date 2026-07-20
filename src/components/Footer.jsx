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
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-bahamas-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700 hover:border-bahamas-400"
                aria-label="Facebook"
              >
                <span className="font-bold text-sm">f</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-bahamas-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700 hover:border-bahamas-400"
                aria-label="TikTok"
              >
                <span className="font-bold text-xs">TikTok</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 hover:bg-bahamas-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-slate-700 hover:border-bahamas-400"
                aria-label="Instagram"
              >
                <span className="font-bold text-xs">IG</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-bahamas-400 mb-4">
              Site Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => navigateTo('home')} className="text-slate-300 hover:text-bahamas-300 transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('listings')} className="text-slate-300 hover:text-bahamas-300 transition-colors">
                  Featured Properties
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="text-slate-300 hover:text-bahamas-300 transition-colors">
                  Who We Are
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('agents')} className="text-slate-300 hover:text-bahamas-300 transition-colors">
                  Our Team & Staff
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="text-slate-300 hover:text-bahamas-300 transition-colors">
                  Contact Jeff Kralovec
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
