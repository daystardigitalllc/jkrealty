import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Award } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Kimberlya Sutherland",
      role: "Client • Bought & Sold Single Family Home",
      location: "Wilmington, DE • PA • FL",
      year: "2022",
      quote: "Whether you are buying or selling, Jeff has the skills, capabilities, and local knowledge – in Pennsylvania, Delaware, and Florida – to get the job done! My house sold literally overnight at a price over asking. Not only that, my new house was negotiated and sold within 2 days of viewing. Jeff’s office makes the entire buying and selling process seamless – just follow the directions! We’ll be reaching out again when we’re ready to sell in Philly and buy at the beach!",
      highlight: "Sold Overnight Over Asking Price & Bought New Home in 2 Days"
    },
    {
      id: 2,
      name: "Todd Sassaman",
      role: "Client • Bought & Sold Single Family Home",
      location: "Triangle, Wilmington, DE",
      year: "2023",
      quote: "Jeff helped me buy my house in 2020 and then sell it in 2023. He is very motivated and responsive. I am grateful for his help preparing my home for sale.",
      highlight: "Repeat Client - Bought in 2020, Sold in 2023"
    },
    {
      id: 3,
      name: "Sean Brenner",
      role: "Client • Sold Townhouse",
      location: "Claymont, DE",
      year: "2022",
      quote: "We worked with Jeff to sell our home in Delaware. He was responsible for the majority of sales in our development so it made sense to go with him. Despite this being right around the seller’s market was slowing up, Jeff got us listed in a matter of days and an over ask offer on the first weekend.",
      highlight: "Over-Ask Offer on First Weekend in Slowing Market"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 via-bahamas-50/40 to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bahamas-100 border border-bahamas-200 text-bahamas-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-bahamas-600" />
            Proven Client Success
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
            What Our Clients Say About Jeff
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real stories from homeowners who trusted Jeff Kralovec and the JKRG team to deliver record results in Delaware, Pennsylvania, and Florida.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-bahamas-200/80 relative">
            <Quote className="w-16 h-16 text-bahamas-200 absolute top-6 right-6 sm:top-8 sm:right-8 opacity-60" />

            {/* Stars */}
            <div className="flex items-center gap-1 text-gold-500 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-500" />
              ))}
            </div>

            {/* Highlight Banner */}
            <div className="inline-block bg-bahamas-50 text-bahamas-800 px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider mb-4 border border-bahamas-200">
              ⚡ {reviews[activeIndex].highlight}
            </div>

            {/* Quote Body */}
            <blockquote className="text-slate-800 text-lg sm:text-xl font-serif leading-relaxed italic mb-8">
              "{reviews[activeIndex].quote}"
            </blockquote>

            {/* Client Meta & Nav Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-bahamas-400 to-bahamas-600 text-white font-bold text-lg flex items-center justify-center shadow-md">
                  {reviews[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                    {reviews[activeIndex].name}
                    <CheckCircle2 className="w-4 h-4 text-bahamas-500" />
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {reviews[activeIndex].role} • {reviews[activeIndex].location}
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-bahamas-50 text-slate-700 hover:text-bahamas-600 flex items-center justify-center transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold text-slate-500 px-2">
                  {activeIndex + 1} / {reviews.length}
                </span>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-bahamas-50 text-slate-700 hover:text-bahamas-600 flex items-center justify-center transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={rev.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                activeIndex === idx
                  ? 'bg-white border-bahamas-500 shadow-lg scale-[1.02]'
                  : 'bg-white/70 border-slate-200 hover:border-bahamas-300 hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-1 text-gold-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-500" />
                ))}
              </div>
              <h5 className="font-bold text-slate-900 text-sm mb-1">{rev.name}</h5>
              <p className="text-xs text-bahamas-600 font-semibold mb-3">{rev.location}</p>
              <p className="text-xs text-slate-600 line-clamp-3 italic">
                "{rev.quote}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
