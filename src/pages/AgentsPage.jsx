import React from 'react';
import { Phone, Mail, Award, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

export default function AgentsPage({ onOpenValuationModal }) {
  const agents = [
    {
      id: 1,
      name: "JEFF KRALOVEC",
      role: "OWNER & LEAD REALTOR®",
      license: "Licensed in DE, PA & FL",
      photo: "/images/jeff_pilot.jpg",
      phone: "(267) 858-0914",
      email: "jeff.kralovec@compass.com",
      highlights: [
        "Greater Wilmington & Tri-State Top Real Estate Agent",
        "Over $45M+ Total Sales Volume",
        "10+ Years of Real Estate Experience"
      ],
      bio: "Jeff is the founder and team leader of the Jeff Kralovec Realty Group at Compass. Known for over-asking sales and fast market turnaround, Jeff oversees client operations in Delaware, Pennsylvania, and Florida."
    },
    {
      id: 2,
      name: "CHARON HARRIS",
      role: "REALTOR®",
      license: "Licensed in DE & PA",
      photo: "/images/charon.jpg",
      phone: "(267) 858-0914",
      email: "charon.harris@compass.com",
      highlights: [
        "Licensed REALTOR® in DE & PA",
        "Strong background in luxury property management",
        "Expertise in New Castle County & PA suburbs"
      ],
      bio: "Charon brings exceptional client relations and property management expertise to JKRG. She specializes in guiding buyers and sellers through seamless residential real estate transactions."
    },
    {
      id: 3,
      name: "AUSTIN ZEBROOK",
      role: "REALTOR®",
      license: "Licensed REALTOR®",
      photo: "/images/450594470_10220311267211744_2598742644170641413_n.jpg",
      phone: "(267) 858-0914",
      email: "austin.zebrook@compass.com",
      highlights: [
        "5+ years in hospitality & client service",
        "Dedicated to personalized home recommendations",
        "Specializes in Wilmington & Delaware beaches"
      ],
      bio: "Austin brings a client-first hospitality approach to real estate. His focus is on matching buyers with their ideal homes and ensuring every step of the transaction exceeds expectations."
    },
    {
      id: 4,
      name: "PENNY ZEBROOK",
      role: "REALTOR®",
      license: "Licensed REALTOR®",
      photo: "/images/51918218_10213637386270891_6480446956299616256_n.jpg",
      phone: "(267) 858-0914",
      email: "penny.zebrook@compass.com",
      highlights: [
        "REALTOR® at Compass since 2020",
        "Deep local knowledge of New Castle County",
        "15+ years of real estate experience"
      ],
      bio: "With over 15 years in real estate, Penny provides unmatched local insight into New Castle County neighborhoods, school districts, and community values."
    },
    {
      id: 5,
      name: "BETH ANN KRALOVEC",
      role: "REALTOR®",
      license: "Licensed in PA & FL",
      photo: "/images/115547401_10163857001600032_6156952302831591604_n.jpg",
      phone: "(267) 858-0914",
      email: "bethann.kralovec@compass.com",
      highlights: [
        "REALTOR® in Pennsylvania & Florida",
        "Focus on luxury land & waterfront residences",
        "Strong commitment to client responsiveness"
      ],
      bio: "Beth Ann specializes in high-end land acquisitions, waterfront properties, and second-home relocation between Pennsylvania and Florida's coastal communities."
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-navy-900 via-bahamas-950 to-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-bahamas-500/20 border border-bahamas-400/40 text-bahamas-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-bahamas-400" />
            MEET OUR TEAM
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            TOP-NOTCH OFFICE STAFF AND AGENTS
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Our agents are dedicated professionals who understand both the market and the dreams behind every home move.
          </p>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-3xl overflow-hidden shadow-card border border-bahamas-100 hover:border-bahamas-300 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo & Badge */}
              <div className="relative h-72 overflow-hidden bg-slate-100">
                <img
                  src={agent.photo}
                  alt={agent.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-navy-900/80 backdrop-blur-md text-bahamas-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-bahamas-500/30">
                  {agent.license}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold text-bahamas-600 uppercase tracking-widest block">
                    {agent.role}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mt-0.5">
                    {agent.name}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mt-2">
                    {agent.bio}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700 font-medium">
                    {agent.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-bahamas-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact info */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <a
                    href={`tel:${agent.phone.replace(/[^0-9]/g, '')}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-bahamas-600 font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-bahamas-500" />
                    {agent.phone}
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-2 text-slate-500 hover:text-bahamas-600 transition-colors truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-bahamas-500 shrink-0" />
                    {agent.email}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-800 via-bahamas-900 to-navy-800 rounded-3xl p-8 sm:p-12 text-white text-center space-y-4 shadow-xl border border-bahamas-500/30">
          <h2 className="text-3xl font-serif font-bold text-white">
            Ready to Buy or Sell with Jeff's Team?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto font-light">
            Reach out directly to any of our agents or contact our Greenville, DE office for immediate assistance.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenValuationModal}
              className="px-8 py-3.5 rounded-xl bg-bahamas-500 hover:bg-bahamas-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow transition-all"
            >
              Get Free Home Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
