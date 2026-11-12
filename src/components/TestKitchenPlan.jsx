import React from 'react';
import { Store, Sliders, Rocket, Check } from 'lucide-react';
import { testKitchenPlan } from '../data/portfolioData';

const iconMap = [Store, Sliders, Rocket];

export default function TestKitchenPlan() {
  return (
    <section id="business" className="py-16 lg:py-24 bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-handwriting text-2xl text-terracotta">แผนปฏิบัติการ The Food School</span>
          <h2 className="text-3xl font-serif-thai font-bold text-burgundy">
            3-Month Scalability Plan at Test Kitchen
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-light mt-1">
            การทดสอบและต่อยอดจาก 6 เดือนแห่งการเรียนรู้ สู่การเปิดดำเนินธุรกิจจริง 3 เดือน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testKitchenPlan.map((plan, index) => {
            const Icon = iconMap[index] || Store;
            const isHighlighted = index === 1;

            return (
              <div
                key={plan.month}
                className={`bg-white rounded-3xl p-7 border ${
                  isHighlighted ? 'border-burgundy/30 shadow-soft' : 'border-cream-200 shadow-card'
                } relative flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full font-mono text-xs font-bold ${
                        isHighlighted ? 'bg-burgundy text-white' : 'bg-burgundy-50 text-burgundy'
                      }`}
                    >
                      {plan.month}
                    </span>
                    <Icon className={`w-5 h-5 ${isHighlighted ? 'text-burgundy' : 'text-terracotta'}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-charcoal">{plan.title}</h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    {plan.desc}
                  </p>

                  <ul className="space-y-2 text-xs text-charcoal-light pt-2 border-t border-cream-200">
                    {plan.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`mt-6 pt-4 border-t border-cream-200 text-[11px] font-medium ${
                    isHighlighted ? 'text-burgundy' : 'text-terracotta'
                  }`}
                >
                  {plan.kpi}
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Manifesto Box */}
        <div className="mt-12 p-8 rounded-3xl bg-burgundy text-white text-center max-w-4xl mx-auto shadow-warm space-y-3">
          <h3 className="text-xl sm:text-2xl font-serif-thai font-bold">
            "รสชาติระดับตำนานไม่ควรถูกเก็บไว้แค่ในความทรงจำ...<br className="hidden sm:inline" />
            แต่มันพร้อมแล้วที่จะถูกสร้างเป็นธุรกิจที่เติบโตอย่างยั่งยืน ในมือของ Chefpreneur คนนี้"
          </h3>
          <p className="text-xs text-cream-200 font-light">
            — นิษฐ์นิภา เกียรติคุณธรรม (ริน) | ผู้ก่อตั้ง The Ringredients
          </p>
        </div>

      </div>
    </section>
  );
}
