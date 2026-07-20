import React, { useState } from 'react';
import { X, Send, Home, DollarSign, Calendar, MapPin, CheckCircle2, Sparkles, Loader2 } from 'lucide-react';

export default function ValuationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    cityStateZip: '',
    propertyType: 'Single Family',
    bedrooms: '3',
    bathrooms: '2',
    estimatedSquareFeet: '',
    timeframe: 'Immediate (1-3 months)',
    condition: 'Good / Move-in Ready',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "bf3ddb61-aeb5-4cba-b9d2-d795f8e2c32f",
          subject: `🏡 HOME VALUATION REQUEST: ${formData.propertyAddress}`,
          from_name: "JKRG Valuation Desk",
          property_address: formData.propertyAddress,
          city_state_zip: formData.cityStateZip,
          property_type: formData.propertyType,
          bedrooms: formData.bedrooms,
          bathrooms: formData.bathrooms,
          sqft: formData.estimatedSquareFeet,
          timeframe: formData.timeframe,
          condition: formData.condition,
          seller_name: formData.name,
          seller_email: formData.email,
          seller_phone: formData.phone,
          notes: formData.notes
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError('There was an issue submitting your valuation request. Please try again or call (267) 858-0914.');
      }
    } catch (err) {
      setError('Connection error. Please check your internet connection or call (267) 858-0914.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyAddress: '',
      cityStateZip: '',
      propertyType: 'Single Family',
      bedrooms: '3',
      bathrooms: '2',
      estimatedSquareFeet: '',
      timeframe: 'Immediate (1-3 months)',
      condition: 'Good / Move-in Ready',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-modal">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-6">
            <div className="w-16 h-16 bg-bahamas-50 text-bahamas-600 rounded-full flex items-center justify-center mx-auto border border-bahamas-200 shadow-glow">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
              Valuation Request Submitted!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed font-light">
              Jeff Kralovec and our local valuation team have received your details for <strong>{formData.propertyAddress}</strong>. We will prepare your comprehensive Comparative Market Analysis (CMA) and deliver it shortly.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bahamas-50 border border-bahamas-200 text-bahamas-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-bahamas-500" />
                Free Comparative Market Analysis (CMA)
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                What Is Your Home Worth?
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Get an accurate, data-backed property valuation from Delaware, Pennsylvania & Florida top producers.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Property Details */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-bahamas-600 border-b border-slate-100 pb-1">
                  1. Property Details
                </h4>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.propertyAddress}
                    onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                    placeholder="123 Luxury Way"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      City, State, Zip *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.cityStateZip}
                      onChange={(e) => setFormData({ ...formData, cityStateZip: e.target.value })}
                      placeholder="Greenville, DE 19807"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none bg-white"
                    >
                      <option value="Single Family">Single Family Home</option>
                      <option value="Condo / Townhome">Condo / Townhome</option>
                      <option value="Multi-Family">Multi-Family</option>
                      <option value="Coastal Waterfront">Coastal / Waterfront Estate</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Beds
                    </label>
                    <select
                      value={formData.bedrooms}
                      onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none bg-white"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Baths
                    </label>
                    <select
                      value={formData.bathrooms}
                      onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                      className="w-full px-2.5 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none bg-white"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4+">4+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Est. SqFt
                    </label>
                    <input
                      type="text"
                      value={formData.estimatedSquareFeet}
                      onChange={(e) => setFormData({ ...formData, estimatedSquareFeet: e.target.value })}
                      placeholder="2,800"
                      className="w-full px-2.5 py-2 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Selling Timeline & Contact */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-bahamas-600 border-b border-slate-100 pb-1">
                  2. Seller Contact Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(267) 858-0914"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Selling Timeline
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none bg-white"
                  >
                    <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="Just curious / Refinancing">Just curious / Refinancing</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-bahamas-500 to-bahamas-600 hover:from-bahamas-600 hover:to-bahamas-700 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Preparing Valuation Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Home Valuation Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
