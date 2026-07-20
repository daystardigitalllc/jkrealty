import React from 'react';
import { Award, TrendingUp, Home, Calendar } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      value: "75+",
      label: "Homes Sold",
      description: "Proven track record across DE, PA & FL",
      icon: Home
    },
    {
      id: 2,
      value: "$250M+",
      label: "Total Sales Volume",
      description: "Record-setting luxury & residential sales",
      icon: TrendingUp
    },
    {
      id: 3,
      value: "10+",
      label: "Years Experience",
      description: "Trusted local leadership & expertise",
      icon: Calendar
    }
  ];

  return (
    <section className="relative bg-navy-900 py-14 text-white overflow-hidden border-y border-bahamas-500/20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,163,224,0.15)_0,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((st) => {
            const Icon = st.icon;
            return (
              <div key={st.id} className="pt-6 md:pt-0 md:px-8 first:pt-0 space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-bahamas-500/20 border border-bahamas-400/30 text-bahamas-400 mx-auto flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
                  {st.value}
                </div>
                <div className="font-serif font-semibold text-lg text-bahamas-300">
                  {st.label}
                </div>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  {st.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
