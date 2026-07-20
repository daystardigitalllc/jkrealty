import React, { useState } from 'react';
import { X, Home, Sparkles, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';

export default function ValuationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    address: '',
    city: '',
    state: 'DE',
    propertyType: 'Single Family',
    bedrooms: '3-4',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md transition-opacity duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-bahamas-200 overflow-hidden flex flex-col animate-modal">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-800 via-bahamas-900 to-navy-800 text-white p-6 flex items-center justify-between border-b border-bahamas-500/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-bahamas-500 flex items-center justify-center text-white shadow-glow">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">
                Instant Home Valuation
              </h3>
              <p className="text-xs text-bahamas-300">
                Get a custom comparative market analysis from Jeff Kralovec
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 bg-slate-50 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-serif font-bold text-slate-900">
                Valuation Request Received!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Jeff Kralovec and the JKRG team will prepare your personalized market analysis for <span className="font-bold text-slate-900">{formData.address}</span> and reach out shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-sm shadow-glow"
                >
                  Back to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-bahamas-50/70 border border-bahamas-200 rounded-2xl p-4 flex items-center gap-3 text-xs text-bahamas-800">
                <ShieldCheck className="w-5 h-5 text-bahamas-600 shrink-0" />
                <span>
                  Jeff Kralovec's listings frequently sell <strong>over asking price in days</strong>. Receive an exact market estimate with zero obligation.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Property Address *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. 123 Main Street"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 focus:ring-2 focus:ring-bahamas-200 text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / Neighborhood
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Greenville / Wilmington"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    State
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white font-medium"
                  >
                    <option value="DE">Delaware (DE)</option>
                    <option value="PA">Pennsylvania (PA)</option>
                    <option value="FL">Florida (FL)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white font-medium"
                  >
                    <option value="Single Family">Single Family Home</option>
                    <option value="Condo/Townhome">Condo / Townhome</option>
                    <option value="Multi-Family">Multi-Family</option>
                    <option value="Land/Waterfront">Waterfront / Land</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Bedrooms / Baths
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 4 Beds / 3 Baths"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jeff Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(267) 858-0914"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="yourname@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-bahamas-500 to-bahamas-600 hover:from-bahamas-600 hover:to-bahamas-700 text-white font-bold text-sm uppercase tracking-wider shadow-glow transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                Submit Valuation Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
