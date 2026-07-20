import React from 'react';
import { Award, Heart, Shield, Sparkles, CheckCircle2, Phone, Mail, ArrowRight } from 'lucide-react';
import StatsSection from '../components/StatsSection';

export default function AboutPage({ setCurrentPage, onOpenValuationModal }) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-navy-900 via-bahamas-950 to-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bahamas-500/20 border border-bahamas-400/40 text-bahamas-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bahamas-400" />
            OUR COMPANY STORY
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            WHO WE ARE
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Delivering unrivaled real estate guidance with a passion for excellence across Delaware, Pennsylvania, and Florida.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Passion */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-bahamas-100 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-bahamas-50 text-bahamas-600 flex items-center justify-center font-bold">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              A PASSION FOR REAL ESTATE
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Real estate is more than just a transaction — it's your home, your investment, and your future. Whether you are searching for your dream house, seeking a strategic investment, or looking for a seamless, stress-free sale experience, we are dedicated to making your real estate goals an absolute success.
            </p>
          </div>

          {/* Responsibility */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-bahamas-100 space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-bahamas-50 text-bahamas-600 flex items-center justify-center font-bold">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              RESPONSIBILITY & INTEGRITY
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At the Jeff Kralovec Realty Group, we believe that every client deserves a strategy tailored to their specific situation. Guided by clear communication, strong negotiation, and a process that guides you from start to finish, we're here to make home searching and selling easy, smooth, and rewarding.
            </p>
          </div>

        </div>
      </section>

      {/* Meet Jeff Kralovec Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-navy-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-bahamas-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-bahamas-400/50 shadow-glow">
                <img
                  src="/images/jeff_pilot.jpg"
                  alt="Jeff Kralovec"
                  className="w-full h-[420px] object-cover object-top"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-bahamas-400">
                  MEET JEFF KRALOVEC
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  A Decade of Excellence
                </h2>
              </div>

              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bahamas-400 shrink-0 mt-0.5" />
                  <span><strong>Leader of Tri-State Group / JKRG:</strong> Over $45M+ in career sales volume across DE, PA & FL.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bahamas-400 shrink-0 mt-0.5" />
                  <span><strong>Advanced Market Tech Integration:</strong> Utilizing AI-powered market analytics & RealScout MLS syndication.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bahamas-400 shrink-0 mt-0.5" />
                  <span><strong>Record-Setting Listing Strategy:</strong> Homes listed with Jeff frequently sell overnight and over asking price.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-bahamas-400 shrink-0 mt-0.5" />
                  <span><strong>Licensed in 3 Key States:</strong> Delaware (Greenville HQ), Pennsylvania (Philadelphia/Main Line), and Florida (Coastal Properties).</span>
                </li>
              </ul>

              <blockquote className="p-4 rounded-2xl bg-bahamas-900/50 border-l-4 border-bahamas-400 text-sm text-bahamas-100 italic leading-relaxed">
                "As leader of Tri-State Group / JKRG, Jeff has 10+ years of experience helping homeowners and clients across every step of buying and selling, whether in Delaware, Pennsylvania, or Florida."
              </blockquote>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-2">
                <a
                  href="tel:2678580914"
                  className="w-full py-3 px-2 sm:px-6 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-glow transition-all flex items-center justify-center gap-1.5 text-center"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Call Office</span>
                </a>
                <button
                  onClick={onOpenValuationModal}
                  className="w-full py-3 px-2 sm:px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-[11px] sm:text-xs uppercase tracking-wider transition-all text-center flex items-center justify-center"
                >
                  <span className="truncate">Home Valuation</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Group & Office Photo Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-bahamas-100 space-y-6 text-center">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              The JKRG Team Experience
            </h3>
            <p className="text-slate-600 text-sm">
              Our full team of licensed agents and dedicated office staff are ready to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-2">
              <img
                src="/images/jkrg-group-photo.jpg"
                alt="JKRG Team Group Photo"
                className="w-full h-auto max-h-80 object-contain rounded-xl"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-2">
              <img
                src="/images/jkrg-photo.png"
                alt="JKRG Office Team"
                className="w-full h-auto max-h-80 object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => setCurrentPage('agents')}
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
            >
              View Individual Agent Bios
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
