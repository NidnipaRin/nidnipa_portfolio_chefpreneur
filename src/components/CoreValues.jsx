import React from 'react';
import { Flame, Award, Cpu, HeartHandshake } from 'lucide-react';
import { coreValues } from '../data/portfolioData';

const iconMap = {
  Flame,
  Award,
  Cpu,
  HeartHandshake
};

export default function CoreValues() {
  return (
    <section className="py-12 bg-white border-y border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="font-handwriting text-xl text-terracotta">DNA ของ Chefpreneur</span>
          <h2 className="text-2xl sm:text-3xl font-serif-thai font-bold text-burgundy">
            4 เสาหลักสู่ความสำเร็จใน Test Kitchen
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val) => {
            const Icon = iconMap[val.icon] || Flame;
            return (
              <div
                key={val.id}
                className="p-6 rounded-2xl bg-cream-50 border border-cream-200 hover:border-burgundy/40 transition group shadow-card"
              >
                <div className="w-12 h-12 rounded-2xl bg-burgundy-50 text-burgundy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-serif text-terracotta font-medium tracking-wide block mb-1">
                  {val.id}. {val.tag}
                </span>
                <h3 className="text-base font-bold text-charcoal mb-2">{val.title}</h3>
                <p className="text-xs text-charcoal-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
