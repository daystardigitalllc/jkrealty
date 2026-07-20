import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Sparkles, CheckCircle2, Clock } from 'lucide-react';

export default function ContactPage({ onOpenValuationModal }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    state: 'Delaware',
    intent: 'Buying a Home',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-navy-900 via-bahamas-950 to-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bahamas-500/20 border border-bahamas-400/40 text-bahamas-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bahamas-400" />
            GET IN TOUCH
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Contact Jeff Kralovec Realty Group
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We’re here to help with all your buying, renting, selling, and property questions. Reach out anytime!
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information & Office Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Greenville Office Card */}
            <div className="bg-white rounded-3xl p-8 border border-bahamas-100 shadow-card space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-bahamas-500 to-bahamas-700 text-white flex items-center justify-center font-bold text-lg shadow-glow">
                  JK
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-900">
                    Greenville HQ Office
                  </h3>
                  <p className="text-xs text-bahamas-600 font-semibold uppercase">
                    Jeff Kralovec Realty Group
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-bahamas-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Office Address</strong>
                    <span>3701 Kennett Pike<br />Greenville, DE 19807</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-bahamas-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Direct Phone</strong>
                    <a href="tel:2678580914" className="text-bahamas-700 hover:underline font-bold">
                      (267) 858-0914
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-bahamas-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Official Email</strong>
                    <a href="mailto:jeff.kralovec@compass.com" className="text-slate-600 hover:text-bahamas-600">
                      jeff.kralovec@compass.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-bahamas-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Hours of Operation</strong>
                    <span>Monday - Sunday: 8:00 AM - 8:00 PM (EST)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={onOpenValuationModal}
                  className="w-full py-3 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow transition-all"
                >
                  Request Instant Home Valuation
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-navy-900 text-white rounded-3xl p-6 shadow-xl border border-bahamas-500/30 space-y-3">
              <h4 className="font-serif font-bold text-bahamas-300 text-base">
                Follow Jeff Kralovec Real Estate
              </h4>
              <p className="text-xs text-slate-300">
                Stay updated with behind-the-scenes listing tours, market updates, and real estate tips.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-bahamas-500 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  Facebook
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-bahamas-500 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  TikTok
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-bahamas-500 text-white text-xs font-bold transition-all border border-slate-700"
                >
                  Instagram
                </a>
              </div>
            </div>

          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-bahamas-100 shadow-card space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-serif font-bold text-slate-900">
                  Send Jeff a Message
                </h3>
                <p className="text-xs text-slate-500">
                  Fill out the form below and Jeff or an agent from our office will reply promptly.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-slate-900">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-slate-900">{form.name}</span>. We have received your inquiry and will contact you at <span className="font-bold text-slate-900">{form.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-bahamas-500 text-white font-bold text-xs uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white"
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
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Target State Market
                      </label>
                      <select
                        value={form.state}
                        onChange={(e) => setForm({ ...form, state: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white font-medium"
                      >
                        <option value="Delaware">Delaware (DE)</option>
                        <option value="Pennsylvania">Pennsylvania (PA)</option>
                        <option value="Florida">Florida (FL)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        How Can We Help?
                      </label>
                      <select
                        value={form.intent}
                        onChange={(e) => setForm({ ...form, intent: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white font-medium"
                      >
                        <option value="Buying a Home">Buying a Home</option>
                        <option value="Selling a Home">Selling a Home</option>
                        <option value="Home Valuation">Home Valuation</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Property Details
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Tell us about your timeline, ideal location, or home features..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-bahamas-500 text-sm bg-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-bahamas-500 to-bahamas-600 hover:from-bahamas-600 hover:to-bahamas-700 text-white font-bold text-sm uppercase tracking-wider shadow-glow transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message To Jeff Kralovec
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
