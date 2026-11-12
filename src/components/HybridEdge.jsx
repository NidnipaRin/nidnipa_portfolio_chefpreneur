import React from 'react';
import { CheckCircle2, Code, Terminal, Calculator, Layers, Heart, ShoppingBag, Users, TrendingUp, Sparkles, ShieldCheck, Check } from 'lucide-react';
import { hybridEdge } from '../data/portfolioData';

export default function HybridEdge() {
  const { culinary, tech, trust } = hybridEdge;

  return (
    <section id="pillars" className="py-16 bg-cream-100/60 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-handwriting text-2xl text-terracotta">ขีดความสามารถแบบ 3 มิติ</span>
          <h2 className="text-3xl font-serif-thai font-bold text-burgundy">
            ผสานศาสตร์ครัว มาตรฐานเทค และสายสัมพันธ์ลูกค้าจริง
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-light mt-2">
            เพราะ Chefpreneur ยุคใหม่ ไม่ใช่แค่คนทำอาหารเก่ง แต่ต้องมีระบบหลังบ้านที่แม่นยำ และมีฐานความไว้วางใจที่พร้อมสเกล
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Culinary Skills */}
          <div className="bg-white rounded-3xl p-7 border border-cream-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-burgundy-50 text-burgundy flex items-center justify-center font-bold">1</span>
                <span className="text-xs font-serif text-terracotta uppercase tracking-wider">{culinary.badge}</span>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-4">{culinary.title}</h3>
              
              <ul className="space-y-3.5 text-xs text-charcoal-light">
                {culinary.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-cream-200">
              <span className="text-[11px] text-terracotta font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                {culinary.footer}
              </span>
            </div>
          </div>

          {/* Column 2: Software & System Architecture */}
          <div className="bg-white rounded-3xl p-7 border border-burgundy/30 shadow-soft relative flex flex-col justify-between">
            <div className="absolute -top-3 right-6 bg-burgundy text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {tech.badge}
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-burgundy text-white flex items-center justify-center font-bold">2</span>
                <span className="text-xs font-serif text-terracotta uppercase tracking-wider">Tech & Systems</span>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-4">{tech.title}</h3>
              
              <ul className="space-y-3.5 text-xs text-charcoal-light">
                <li className="flex items-start gap-2.5">
                  <Code className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span><strong>{tech.items[0].title}:</strong> {tech.items[0].desc}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Terminal className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span><strong>{tech.items[1].title}:</strong> {tech.items[1].desc}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Calculator className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span><strong>{tech.items[2].title}:</strong> {tech.items[2].desc}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span><strong>{tech.items[3].title}:</strong> {tech.items[3].desc}</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-cream-200">
              <span className="text-[11px] text-burgundy font-medium flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                {tech.footer}
              </span>
            </div>
          </div>

          {/* Column 3: Trust Validation */}
          <div className="bg-white rounded-3xl p-7 border border-cream-200 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-xl bg-burgundy-50 text-burgundy flex items-center justify-center font-bold">3</span>
                <span className="text-xs font-serif text-terracotta uppercase tracking-wider">{trust.badge}</span>
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-4">{trust.title}</h3>
              
              <ul className="space-y-3.5 text-xs text-charcoal-light">
                <li className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span><strong>{trust.items[0].title}:</strong> {trust.items[0].desc}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span><strong>{trust.items[1].title}:</strong> {trust.items[1].desc}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Users className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span><strong>{trust.items[2].title}:</strong> {trust.items[2].desc}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span><strong>{trust.items[3].title}:</strong> {trust.items[3].desc}</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-cream-200">
              <span className="text-[11px] text-terracotta font-medium flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                {trust.footer}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
