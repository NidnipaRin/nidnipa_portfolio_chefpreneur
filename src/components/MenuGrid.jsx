import React from 'react';
import { Info, Sparkles, Flame, Coffee, Package, Binary, Cake, ChevronRight, ArrowDown, Play } from 'lucide-react';
import { menuItems } from '../data/portfolioData';

const cardGradientMap = {
  curry: 'from-[#800020] via-[#800020] to-[#800020]',
  chicken_ribs: 'from-[#4A3B32] via-[#2F231D] to-[#1E1612]',
  congee: 'from-[#B37A3E] via-[#8C5824] to-[#593714]',
  cooking_kit: 'from-[#2D3748] via-[#1A202C] to-[#171923]',
  costing_tool: 'from-[#1C4E4F] via-[#133839] to-[#0A1F20]',
  bakery: 'from-[#7B3F61] via-[#5C2B47] to-[#3E1A2E]'
};

export default function MenuGrid({ onOpenMenuModal, onScrollToSimulator }) {
  return (
    <section id="menu" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-handwriting text-2xl text-terracotta">หัวใจแห่งรสชาติ</span>
            <h2 className="text-3xl font-serif-thai font-bold text-burgundy">เมนูซิกเนเจอร์ และระบบนิเวศความอร่อย</h2>
            <p className="text-xs sm:text-sm text-charcoal-light mt-1">
              คิดค้นและพัฒนาเพื่อรองรับทั้ง Dine-in หน้าร้าน Test Kitchen และชุด Ready-to-Cook
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-charcoal-light bg-cream-200/80 px-4 py-2 rounded-full border border-cream-300">
            <Info className="w-4 h-4 text-burgundy" />
            <span>คลิกที่การ์ดเพื่อดูรายละเอียดสูตรและต้นทุน</span>
          </div>
        </div>

        {/* 6-Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {menuItems.map((item) => {
            const gradient = cardGradientMap[item.id] || 'from-[#800020] to-[#800020]';
            
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-card hover:shadow-warm transition group flex flex-col justify-between"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className={`relative aspect-[16/10] bg-gradient-to-br ${gradient} p-6 flex flex-col justify-between text-cream-100 overflow-hidden`}>
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 rounded-full bg-black/40 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm border border-white/20">
                        {item.tag}
                      </span>
                      <span className="text-xs font-serif text-warmgold">{item.accent}</span>
                    </div>
                    
                    <div className="my-auto text-center space-y-1">
                      {item.id === 'curry' && <Sparkles className="w-8 h-8 text-warmgold mx-auto mb-1" />}
                      {item.id === 'chicken_ribs' && <Flame className="w-8 h-8 text-warmgold mx-auto mb-1" />}
                      {item.id === 'congee' && <Coffee className="w-8 h-8 text-cream-100 mx-auto mb-1" />}
                      {item.id === 'cooking_kit' && <Package className="w-8 h-8 text-blue-400 mx-auto mb-1" />}
                      {item.id === 'costing_tool' && <Binary className="w-8 h-8 text-teal-300 mx-auto mb-1" />}
                      {item.id === 'bakery' && <Cake className="w-8 h-8 text-pink-300 mx-auto mb-1" />}

                      <h4 className="text-xl font-serif-thai font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-cream-200 font-light">{item.subtitle}</p>
                    </div>

                    <div className="text-[11px] text-cream-300 flex justify-between border-t border-white/20 pt-2">
                      <span>{item.subtext}</span>
                      <span>The Ringredients</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.badges.map((b, bIdx) => (
                        <span key={bIdx} className="text-[10px] px-2.5 py-1 rounded-full bg-cream-100 text-charcoal border border-cream-200">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  {item.details ? (
                    <button
                      onClick={() => onOpenMenuModal(item.id)}
                      className="w-full py-2.5 rounded-xl bg-cream-200 hover:bg-burgundy hover:text-white text-xs font-medium text-charcoal transition flex items-center justify-center gap-1.5"
                    >
                      <span>ดูข้อมูล Tasting Notes & Costing</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  ) : item.isSimulatorLink ? (
                    <button
                      onClick={onScrollToSimulator}
                      className="w-full py-2.5 rounded-xl bg-cream-200 hover:bg-burgundy hover:text-white text-xs font-medium text-charcoal transition flex items-center justify-center gap-1.5"
                    >
                      <span>ทดลองกดคำนวณต้นทุนสด</span>
                      <Play className="w-3.5 h-3.5" />
                    </button>
                  ) : item.isTrustLink ? (
                    <a
                      href="#story-trust"
                      className="w-full py-2.5 rounded-xl bg-cream-200 hover:bg-burgundy hover:text-white text-xs font-medium text-charcoal transition flex items-center justify-center gap-1.5"
                    >
                      <span>อ่านบันทึกความไว้วางใจ</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#tech"
                      className="w-full py-2.5 rounded-xl bg-cream-200 hover:bg-burgundy hover:text-white text-xs font-medium text-charcoal transition flex items-center justify-center gap-1.5"
                    >
                      <span>ดูสถาปัตยกรรมระบบ Tech</span>
                      <ArrowDown className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
