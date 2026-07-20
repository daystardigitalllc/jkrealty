import React, { useState } from 'react';
import { ArrowRight, Share2, Bell, Globe, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer({ setCurrentPage, onOpenValuationModal, onOpenContactModal }) {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-200">
          
          {/* Column 1: Brand & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="J Kralovec" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-slate-900 font-serif font-bold text-2xl tracking-tight">
                J Kralovec
              </span>
            </div>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm font-light">
              Defining the pinnacle of luxury real estate across Delaware, Pennsylvania, and Florida.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2 text-slate-400">
              <button 
                onClick={() => onOpenContactModal('Share Footer')}
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-bahamas-500 hover:text-bahamas-600 flex items-center justify-center transition-colors"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onOpenContactModal('Subscribe Footer')}
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-bahamas-500 hover:text-bahamas-600 flex items-center justify-center transition-colors"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
              </button>
              <button 
                onClick={() => navigateTo('home')}
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-bahamas-500 hover:text-bahamas-600 flex items-center justify-center transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <button onClick={() => navigateTo('listings')} className="hover:text-bahamas-600 transition-colors">
                  Featured Listings
                </button>
              </li>
              <li>
                <button onClick={onOpenValuationModal} className="hover:text-bahamas-600 transition-colors">
                  Instant Home Valuation
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('delaware')} className="hover:text-bahamas-600 transition-colors">
                  Delaware Real Estate
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('pennsylvania')} className="hover:text-bahamas-600 transition-colors">
                  Pennsylvania Real Estate
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('florida')} className="hover:text-bahamas-600 transition-colors">
                  Florida Beach Properties
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Information (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Information
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-bahamas-600 transition-colors">
                  About Our Founder
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('agents')} className="hover:text-bahamas-600 transition-colors">
                  Market Intelligence & Team
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContactModal('Concierge Services')} className="hover:text-bahamas-600 transition-colors">
                  Concierge Advisory Services
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-bahamas-600 transition-colors">
                  Greenville, DE HQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Private List Signup (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Newsletter
            </h4>
            <p className="text-xs text-slate-500 font-light leading-relaxed">
              Join our private list for off-market updates and exclusive market reports.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-bahamas-50 text-bahamas-700 text-xs font-bold border border-bahamas-200">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-1">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-bahamas-500 bg-slate-50"
                />
                <button 
                  type="submit"
                  className="p-2.5 rounded-lg bg-bahamas-600 hover:bg-bahamas-700 text-white transition-colors shrink-0"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
          <div>
            © {currentYear} J Kralovec Realty Group. All rights reserved. Equal Housing Opportunity.
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <button onClick={() => onOpenContactModal('Privacy Policy')} className="hover:text-slate-600 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onOpenContactModal('Terms of Service')} className="hover:text-slate-600 transition-colors">
              Terms of Service
            </button>
            <button onClick={() => onOpenContactModal('Disclaimers')} className="hover:text-slate-600 transition-colors">
              Disclaimers
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
