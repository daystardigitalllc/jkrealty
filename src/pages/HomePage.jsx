import React, { useState } from 'react';
import { 
  Phone, Search, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, Key, Sparkles 
} from 'lucide-react';
import RealScoutWidget from '../components/RealScoutWidget';
import SEO, { organizationSchema } from '../components/SEO';

export default function HomePage({ setCurrentPage, onOpenListingModal, onOpenValuationModal, onOpenContactModal }) {
  // Testimonial Carousel State
  const reviews = [
    {
      id: 1,
      name: "KIMBERLYA SUTHERLAND",
      detail: "Bought & Sold Single Family Home • Wilmington, DE & FL",
      quote: "The level of discretion and market insight provided by the J Kralovec team was extraordinary. They found us a sanctuary that was never even listed.",
      subquote: "Whether you are buying or selling, Jeff has the skills, capabilities, and local knowledge – in DE, PA, and FL – to get the job done! My house sold overnight at a price over asking."
    },
    {
      id: 2,
      name: "TODD SASSAMAN",
      detail: "Bought & Sold Single Family Home • Triangle, Wilmington, DE",
      quote: "Jeff is extremely motivated, professional, and responsive. He prepared our home to sell for maximum value and guided every step seamlessly.",
      subquote: "Grateful for his expertise and deep market knowledge in Delaware and Pennsylvania."
    },
    {
      id: 3,
      name: "SEAN BRENNER",
      detail: "Sold Townhouse • Claymont, DE",
      quote: "Jeff got us listed in a matter of days and brought us an over-ask offer on the first weekend, even in a shifting market.",
      subquote: "His dominance in local property sales made him the obvious and best choice."
    }
  ];

  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const el = document.getElementById('mls-listings');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans">
      <SEO 
        title="Luxury Real Estate in DE, PA & FL | J. Kralovec Realty Group"
        description="J Kralovec Realty Group - Premier luxury real estate team serving Delaware, Pennsylvania, and Florida."
        jsonLd={organizationSchema}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH FLOATING FILTER BAR                                 */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[620px] lg:min-h-[700px] flex items-center justify-center text-white overflow-hidden bg-navy-900">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/110850.jpg" 
            alt="Luxury Coastal & Waterfront Living" 
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Subtle gradient dark overlay matching luxury oceanfront photography */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-navy-900/60" />
        </div>

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 pb-28 text-center flex flex-col items-center">
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight leading-[1.1] max-w-4xl text-white drop-shadow-md">
            Your Gateway to Crystalline Living
          </h1>

          <p className="mt-4 text-sm sm:text-lg text-slate-200 font-light max-w-2xl tracking-wide">
            Delivering premier luxury & coastal real estate solutions across Delaware, Pennsylvania, and Florida.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full max-w-lg">
            <button
              onClick={() => {
                const el = document.getElementById('mls-listings');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-bahamas-500 hover:bg-bahamas-600 active:bg-bahamas-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 min-h-[52px]"
            >
              <Search className="w-4 h-4" />
              <span>Search Listings</span>
            </button>

            <a
              href="tel:2678580914"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 active:bg-white/30 text-white border border-white/30 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 min-h-[52px]"
            >
              <Phone className="w-4 h-4 text-bahamas-400" />
              <span>Call Jeff (267) 858-0914</span>
            </a>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REALSCOUT LIVE MLS FEED INTEGRATION                                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <RealScoutWidget 
          initialPropertyType="SFR,MF,TC,LAL,MOBILE,OTHER"
        />
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY DISCERNING CLIENTS CHOOSE J KRALOVEC (2x2 BENTO GRID SECTION)     */}
      {/* ========================================================================= */}
      <section className="py-24 bg-slate-100/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-bahamas-600 block">
                THE STANDARD OF EXCELLENCE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-slate-900 leading-[1.2]">
                Why Discerning Clients Choose J Kralovec
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                We don't just sell properties; we facilitate a lifestyle of unparalleled luxury. Our deep-rooted tri-state connections and architectural insight provide our clients with opportunities invisible to the public market.
              </p>

              {/* Bullet Features */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-bahamas-100 text-bahamas-700 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5 text-bahamas-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Unrivaled Expertise</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Decades of navigating the complex high-end Delaware, Pennsylvania, and Florida markets with precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-bahamas-100 text-bahamas-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-5 h-5 text-bahamas-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Global Network</h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Direct access to the region's most exclusive buyers, luxury developers, and off-market sanctuaries.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Bento Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Box 1: Sales Volume */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900">
                    $45M+
                  </h3>
                </div>
                <div className="pt-6 border-t border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  IN TOTAL SALES VOLUME
                </div>
              </div>

              {/* Box 2: Founder Photo */}
              <div className="bg-slate-900 rounded-2xl overflow-hidden relative shadow-sm min-h-[200px] border border-slate-200/80 group">
                <img 
                  src="/images/jkrg-photo.png" 
                  alt="Jeff Kralovec" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-serif font-bold block">Jeff Kralovec</span>
                  <span className="text-[10px] text-bahamas-300 font-semibold uppercase tracking-wider block">Founder & Principal</span>
                </div>
              </div>

              {/* Box 3: Dark Quote Block */}
              <div className="bg-navy-900 text-white rounded-2xl p-8 shadow-md flex flex-col justify-between min-h-[220px]">
                <blockquote className="text-xs sm:text-sm font-light leading-relaxed text-slate-200">
                  "Every property has a story; we place it in front of those who appreciate it."
                </blockquote>
                <div className="pt-4 border-t border-navy-800 text-[10px] font-bold uppercase tracking-wider text-bahamas-300">
                  — J. KRALOVEC, FOUNDER
                </div>
              </div>

              {/* Box 4: Closed Transactions */}
              <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm flex flex-col justify-between min-h-[220px]">
                <div className="w-10 h-10 rounded-xl bg-bahamas-50 text-bahamas-600 flex items-center justify-center mb-4">
                  <Key className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-4xl font-serif font-bold text-slate-900">
                    75+
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Off-market & record transactions successfully closed.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TESTIMONIAL QUOTE CAROUSEL SECTION                                    */}
      {/* ========================================================================= */}
      <section className="py-28 bg-white border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-8">
          
          {/* Quote Mark Icon */}
          <div className="text-6xl font-serif text-bahamas-300 font-bold leading-none select-none">
            ”
          </div>

          {/* Review Body */}
          <blockquote className="text-xl sm:text-3xl font-serif italic text-slate-800 leading-relaxed font-normal">
            "{reviews[activeReviewIndex].quote}"
          </blockquote>

          {/* Subquote details */}
          <p className="text-xs sm:text-sm text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            {reviews[activeReviewIndex].subquote}
          </p>

          {/* Author Name */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">
              {reviews[activeReviewIndex].name}
            </h4>
            <p className="text-[11px] text-slate-400 font-medium mt-1">
              {reviews[activeReviewIndex].detail}
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={handlePrevReview}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-bahamas-600 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextReview}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-bahamas-600 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CALL TO ACTION BANNER                                                 */}
      {/* ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-navy-900 text-white min-h-[380px] flex items-center justify-center text-center p-8 sm:p-16 shadow-2xl border border-navy-800">
          {/* Background Overlay Image */}
          <div className="absolute inset-0 z-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" 
              alt="Coastal Luxury Sanctuary" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-2xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-medium tracking-tight text-white">
              Ready to find your sanctuary?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Our advisors are standing by to curate a bespoke selection of properties that align with your lifestyle and vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => onOpenContactModal()}
                className="w-full sm:w-auto px-8 py-3.5 bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                BOOK A CONSULTATION
              </button>

              <button
                onClick={() => setCurrentPage('listings')}
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/40 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                EXPLORE LISTINGS
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
