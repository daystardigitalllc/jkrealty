import React, { useState } from 'react';
import { X, Send, Phone, Mail, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, agentName = null }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'General Inquiry',
    preferredState: 'Delaware',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      topic: 'General Inquiry',
      preferredState: 'Delaware',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-modal">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-5">
            <div className="w-16 h-16 bg-bahamas-50 text-bahamas-600 rounded-full flex items-center justify-center mx-auto border border-bahamas-200">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              Message Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              Thank you for reaching out to <strong>Jeff Kralovec Realty Group</strong>. A member of our team will contact you shortly.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bahamas-50 border border-bahamas-200 text-bahamas-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                <MessageSquare className="w-3.5 h-3.5 text-bahamas-500" />
                General Contact & Inquiry
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                {agentName ? `Contact ${agentName}` : 'Get In Touch With Our Office'}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Have a question or looking to buy/invest? Send us a message and our advisors will assist you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
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
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Buying a Home">Buying a Home</option>
                    <option value="Schedule Property Tour">Schedule Property Tour</option>
                    <option value="Relocation Advisory">Relocation Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Market Region
                  </label>
                  <select
                    value={formData.preferredState}
                    onChange={(e) => setFormData({ ...formData, preferredState: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none bg-white"
                  >
                    <option value="Delaware">Delaware</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Florida">Florida</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  How can we help you? *
                </label>
                <textarea
                  rows="3"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your property interests, timeline, or questions..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-xs focus:ring-2 focus:ring-bahamas-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-subtle transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit General Inquiry
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
