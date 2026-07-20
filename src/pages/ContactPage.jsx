import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ShieldCheck, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    market: 'Delaware',
    message: ''
  });

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
          subject: `Contact Page Inquiry: ${formData.subject} (${formData.market})`,
          from_name: "JKRG Contact Page",
          client_name: formData.name,
          client_email: formData.email,
          client_phone: formData.phone,
          subject_topic: formData.subject,
          preferred_market: formData.market,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError('There was an issue submitting your message. Please try again or call (267) 858-0914.');
      }
    } catch (err) {
      setError('Connection error. Please check your internet connection or call (267) 858-0914.');
    } finally {
      setLoading(false);
    }
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Jeff Kralovec Realty Group",
    "description": "Contact Jeff Kralovec Realty Group offices in Greenville DE, PA, and Florida.",
    "url": "https://daystardigitalllc.github.io/jkrealty/#/contact"
  };

  return (
    <div className="space-y-16 pb-16">
      <SEO 
        title="Contact Jeff Kralovec Realty Group"
        description="Contact Jeff Kralovec Realty Group in Greenville DE, Pennsylvania, and Florida. Call (267) 858-0914 or email jeff.kralovec@compass.com."
        canonicalUrl="https://daystardigitalllc.github.io/jkrealty/#/contact"
        jsonLd={contactSchema}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-navy-900 via-bahamas-950 to-navy-900 text-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bahamas-500/20 border border-bahamas-400/40 text-bahamas-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <MessageSquare className="w-3.5 h-3.5 text-bahamas-400" />
            Greenville Office & Regional Advisory
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Contact Our Team
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            We are here to assist with buying, selling, or advising on luxury real estate across Delaware, Pennsylvania, and Florida.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-bahamas-500">
                Greenville Headquarters
              </span>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mt-1">
                Jeff Kralovec Realty Group
              </h2>
              <p className="text-slate-600 text-sm mt-2 font-light">
                Serving client needs across New Castle County, Sussex County beaches, Greater Philadelphia, and Florida coastal markets.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bahamas-50 text-bahamas-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Main Office Location</h4>
                  <p className="text-xs text-slate-600 mt-0.5">3701 Kennett Pike, Greenville, DE 19807</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bahamas-50 text-bahamas-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Direct Phone Line</h4>
                  <a href="tel:2678580914" className="text-xs text-bahamas-600 font-bold hover:underline mt-0.5 block">
                    (267) 858-0914
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bahamas-50 text-bahamas-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Email Address</h4>
                  <a href="mailto:jeff.kralovec@compass.com" className="text-xs text-bahamas-600 font-bold hover:underline mt-0.5 block">
                    jeff.kralovec@compass.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-bahamas-50 text-bahamas-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Advisory Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Monday – Sunday: 8:00 AM – 8:00 PM EST</p>
                </div>
              </div>
            </div>

            {/* Social Brand Icons */}
            <div className="p-6 rounded-2xl bg-navy-900 text-white space-y-3 shadow-md">
              <h4 className="text-xs font-bold uppercase tracking-wider text-bahamas-300">
                Connect With JKRG
              </h4>
              <p className="text-xs text-slate-300">
                Follow our latest property walk-throughs, market updates, and exclusive listings on social media.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-bahamas-500 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-bahamas-500 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.32 1.54-1.34 2.54-.05.99.36 2.01 1.11 2.67.82.72 1.99.96 3.03.68 1.05-.27 1.94-1.09 2.27-2.12.21-.69.25-1.42.24-2.14V.02z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-bahamas-500 text-white flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-bahamas-50 text-bahamas-600 rounded-full flex items-center justify-center mx-auto border border-bahamas-200 shadow-glow">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for contacting <strong>Jeff Kralovec Realty Group</strong>. Your message has been routed to our team and we will respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3.5 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-bahamas-500">
                      Online Form
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out the form below to connect with Jeff or an advisor in your market region.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
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
                          className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
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
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Inquiry Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none bg-white"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Buying Real Estate">Buying Real Estate</option>
                          <option value="Schedule Property Tour">Schedule Property Tour</option>
                          <option value="Relocation Services">Relocation Services</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Market Region
                        </label>
                        <select
                          value={formData.market}
                          onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none bg-white"
                        >
                          <option value="Delaware">Delaware</option>
                          <option value="Pennsylvania">Pennsylvania</option>
                          <option value="Florida">Florida</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Message / Details *
                      </label>
                      <textarea
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share any details about your real estate needs..."
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-bahamas-500 to-bahamas-600 hover:from-bahamas-600 hover:to-bahamas-700 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message to Office</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
