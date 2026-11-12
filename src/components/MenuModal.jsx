import React from 'react';
import { X } from 'lucide-react';
import { menuItems } from '../data/portfolioData';

export default function MenuModal({ activeMenuKey, onClose }) {
  if (!activeMenuKey) return null;

  const item = menuItems.find((m) => m.id === activeMenuKey);
  if (!item || !item.details) return null;

  const { details } = item;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 no-print">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-cream-200 shadow-2xl space-y-5 relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-charcoal hover:bg-burgundy hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-4 text-xs">
          <div>
            <span className="text-terracotta font-serif text-[11px] block uppercase tracking-wider">
              Recipe & Tasting Profile
            </span>
            <h3 className="text-xl font-serif-thai font-bold text-burgundy mt-0.5">
              {details.title}
            </h3>
            <span className="text-charcoal-light font-medium block">
              {details.subtitle}
            </span>
          </div>

          <div className="p-3.5 bg-cream-50 rounded-xl border border-cream-200 space-y-1">
            <span className="font-bold text-charcoal block">Tasting Notes:</span>
            <p className="text-charcoal-light leading-relaxed">{details.tasting}</p>
          </div>

          <div className="p-3.5 bg-cream-50 rounded-xl border border-cream-200 space-y-1">
            <span className="font-bold text-charcoal block">Serving & Pairing:</span>
            <p className="text-charcoal-light leading-relaxed">{details.pairing}</p>
          </div>

          <div className="p-3.5 bg-burgundy-50 rounded-xl border border-burgundy/20 space-y-1">
            <span className="font-bold text-burgundy block">Costing & Scalability:</span>
            <p className="text-burgundy-900 font-medium">{details.costing}</p>
            <p className="text-charcoal-light pt-1 leading-relaxed">{details.scaling}</p>
          </div>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full bg-cream-200 text-charcoal text-xs font-medium hover:bg-cream-300 transition"
          >
            ปิดหน้าต่าง
          </button>
        </div>

      </div>
    </div>
  );
}
