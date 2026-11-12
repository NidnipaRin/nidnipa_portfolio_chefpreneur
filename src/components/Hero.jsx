import React from "react";
import { ArrowDown, BookOpen, Utensils, Heart } from "lucide-react";

export default function Hero({ onOpenMenuModal }) {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Competition Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-burgundy-50 border border-burgundy/20 text-burgundy text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-burgundy animate-pulse"></span>
          <span>
            The Food School Presents : Chefpreneur Competition 2026 Application
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Storytelling Hook */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-handwriting text-2xl lg:text-3xl text-terracotta block tracking-wide">
                จากครัวคุณแม่ สู่ธุรกิจอาหารที่เติบโตได้จริง
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-thai font-bold text-burgundy leading-tight">
                “ชุบชีวิตรสชาติมรดกเปิปพิสดาร
                <br className="hidden sm:block" />
                สู่จานอาหารที่อบอุ่น
                <br className="hidden sm:block" />
                เหมือนได้กลับมากินข้าวที่บ้าน”
              </h1>
            </div>

            <p className="text-base sm:text-lg text-charcoal-light leading-relaxed max-w-2xl font-light">
              เมื่อรสมือของคุณแม่—ผู้ช่วยคนพิเศษของอากง ผู้ร่วมสร้างตำนานร้าน{" "}
              <strong className="text-charcoal font-medium">
                "ข้าวแกงจีนสวนกวางตุ้ง"
              </strong>{" "}
              ในอดีต ผสานเข้ากับดีกรี{" "}
              <strong className="text-burgundy font-medium">
                เชฟอาหารไทยมืออาชีพ
              </strong>
              , ทักษะ{" "}
              <strong className="text-burgundy font-medium">
                Full-stack Developer
              </strong>{" "}
              และความไว้วางใจจากลูกค้าเพจ{" "}
              <strong className="text-charcoal font-medium">
                The Ringredients
              </strong>{" "}
              ที่กลับมาซื้อซ้ำทุกปี
            </p>

            {/* Quick Stat Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="bg-white/80 border border-cream-200 rounded-2xl p-3 text-center shadow-card">
                <span className="block text-xl lg:text-2xl font-bold text-burgundy">
                  35+ ปี
                </span>
                <span className="text-[11px] text-charcoal-light">
                  รสชาติมรดกจากแม่
                </span>
              </div>
              <div className="bg-white/80 border border-cream-200 rounded-2xl p-3 text-center shadow-card">
                <span className="block text-xl lg:text-2xl font-bold text-burgundy">
                  Top 30
                </span>
                <span className="text-[11px] text-charcoal-light">
                  เวทีแข่งขันปรุงสุข
                </span>
              </div>
              <div className="bg-white/80 border border-cream-200 rounded-2xl p-3 text-center shadow-card">
                <span className="block text-xl lg:text-2xl font-bold text-burgundy">
                  Hybrid
                </span>
                <span className="text-[11px] text-charcoal-light">
                  Chef × Developer
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#menu"
                className="px-7 py-3.5 rounded-full bg-burgundy text-white font-medium text-sm hover:bg-burgundy-800 transition shadow-warm flex items-center gap-2 group"
              >
                <span>สำรวจเมนูซิกเนเจอร์</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#heritage"
                className="px-7 py-3.5 rounded-full bg-cream-200 text-charcoal font-medium text-sm hover:bg-wood/30 transition border border-cream-300 flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-burgundy" />
                <span>เรื่องราวคุณแม่ & อากง</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="lg:col-span-5 relative">
            {/* Decorative Stamp */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-dashed border-terracotta/40 flex items-center justify-center p-2 text-center rotate-12 z-20 pointer-events-none hidden sm:flex">
              <span className="font-handwriting text-xs text-burgundy leading-none">
                Authentic
                <br />
                Heritage
                <br />
                Recipe 1991
              </span>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-cream-200 shadow-soft relative z-10 space-y-4">
              {/* Hero Image Frame */}
              <div
                onClick={() => onOpenMenuModal("curry")}
                className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-cream-200 cursor-pointer group"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#9B1D30] via-[#9B1D30] to-[#800020] flex flex-col justify-between p-6 text-cream-50 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F7ECD4_1px,transparent_1px)] [background-size:16px_16px]"></div>

                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-[11px] tracking-wide text-cream-100 font-light border border-white/20">
                      HERO DISH
                    </span>
                    <span className="text-xs font-serif-thai text-warmgold tracking-wider">
                      รสชาติที่คิดถึง
                    </span>
                  </div>

                  <div className="relative z-10 my-auto text-center space-y-2">
                    <div className="w-16 h-16 mx-auto rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-lg">
                      <Utensils className="w-8 h-8 text-warmgold" />
                    </div>
                    <h3 className="text-2xl font-serif-thai font-bold text-cream-50 tracking-wide">
                      แกงกะหรี่จีนโบราณ
                    </h3>
                    <p className="text-xs text-cream-200/90 font-light max-w-xs mx-auto">
                      รสชาติเผ็ด เค็ม มันนัว จากเครื่องเทศไทยที่อะแดปโดยคนจีน
                      เสิร์ฟเคียงกุนเชียง พริกชี้ฟ้า แตงกวา และผักชีสด
                    </p>
                  </div>

                  <div className="relative z-10 flex justify-between items-end text-[11px] text-cream-200/80 pt-2 border-t border-white/15">
                    <span>ตำรับคุณแม่ ลูกมือเบอร์ 1</span>
                    <span className="underline group-hover:text-white transition">
                      คลิกดูสูตร &gt;
                    </span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="p-3 bg-cream-100/80 rounded-xl border border-cream-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-burgundy-50 border border-burgundy/20 flex items-center justify-center text-burgundy shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <p className="text-xs text-charcoal-light leading-snug">
                  <strong className="text-burgundy">"แม่คือคนทำตัวจริง"</strong>{" "}
                  —
                  ถ่ายทอดและควบคุมการเคี่ยวจนได้รสชาติระดับตำนานที่พร้อมสเกลเป็นธุรกิจ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
