import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Users,
  ShoppingBag,
  Store,
  Package,
  Flame,
  Award,
  ArrowRightCircle,
  Sprout,
  ShieldCheck,
} from 'lucide-react';
import Reveal from '../components/Reveal';
import { candidateInfo } from '../data/portfolioData';

export default function BusinessConceptPage({ onBack, onNavigate }) {
  return (
    <div className="min-h-screen bg-[#FFF5E1] text-[#4A3F35] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#9B1D30]/20 relative overflow-x-hidden">
      
      <div className="relative z-10 max-w-6xl mx-auto space-y-16 sm:space-y-24">

        {/* ========================================================
            TOP BAR / BREADCRUMB
            ======================================================== */}
        <Reveal direction="down">
          <div className="flex items-center justify-between border-b border-dashed border-[#EFE2C6] pb-4">
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-2 text-xs font-medium text-[#4A3F35] hover:text-[#9B1D30] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#786E64] group-hover:-translate-x-0.5 transition-transform" />
              <span>กลับสู่ Home</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9B1D30]/60 animate-pulse"></span>
              <span className="text-xs text-[#786E64] font-serif tracking-wider">
                {candidateInfo.brand} • Editorial Business Journal
              </span>
            </div>
          </div>
        </Reveal>

        {/* ========================================================
            📍 ส่วนหัวและแก่นของธุรกิจ (HERO & CORE CONCEPT)
            แบ่งซ้าย-ขวาแบบเปิดโล่ง (ไม่มีกล่องทึบสีเลือดหมู)
            ======================================================== */}
        <Reveal direction="up">
          <section className="space-y-8">
            
            {/* Top Tag & Main Headline */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7ECD4] border border-[#EFE2C6] text-[11px] font-semibold text-[#9B1D30] tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#9B1D30]" />
                <span>✨ BUSINESS CONCEPT & SCALABLE MODEL</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-thai font-extrabold text-[#4A3F35] leading-normal sm:leading-relaxed lg:leading-[1.55]">
                Modern Heritage Comfort Food: จากมื้ออาหารที่อบอุ่นใจ สู่โมเดลธุรกิจที่เติบโตได้จริง
              </h1>
            </div>

            {/* Two-Column Open Hero Spread */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
              
              {/* Left Column (Typography & Vision Statement) */}
              <div className="lg:col-span-6 space-y-5">
                <p className="text-base sm:text-lg text-[#4A3F35] font-serif-thai leading-relaxed font-normal">
                  "การนำรสมือแกงกะหรี่จีนแต้จิ๋วจากร้านตำนานย่านตลาดสวนกวางตุ้ง ที่แม่ยังคงทำให้ฉันกินตลอด 35 ปีหลังจากร้านอากงปิดตัวลง มาพัฒนาสู่ <strong className="text-[#9B1D30] font-bold">แบรนด์ใหม่และโมเดลธุรกิจอาหารยุคใหม่</strong> ที่ผสาน <span className="text-[#9B1D30] font-semibold">'ความอบอุ่นและมาตรฐานเชฟ'</span> เข้ากับ <span className="text-[#8FA882] font-semibold">'การบริหารจัดการครัวและช่องทางจัดจำหน่ายทั้งออฟไลน์-ออนไลน์'</span> เพื่อให้ความอร่อยจากก้นครัวของแม่ เติบโตได้อย่างแข็งแรงและยั่งยืน"
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#F7ECD4] border border-dashed border-[#EFE2C6] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#9B1D30] tracking-wider uppercase font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9B1D30]"></span>
                    <span>• THE FEASIBILITY THESIS (ทำไมธุรกิจนี้ถึงเป็นไปได้จริงและควรเกิดขึ้น)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                    ในตลาดที่เต็มไปด้วยแกงกะหรี่ญี่ปุ่นและอินเดีย "แกงกะหรี่จีนแต้จิ๋วรสมือแม่ที่ปรับให้เบาสบายท้อง" คือช่องว่างทางการตลาดที่มีเสน่ห์และหาทานยาก เราออกแบบโมเดลธุรกิจที่ไม่พึ่งพาแค่ยอดขายหน้าร้านเพียงอย่างเดียว แต่ใช้หน้าร้าน (Dine-in) เป็นจุดสร้างความเชื่อมั่น แล้วขยายการเติบโตด้วยสินค้าพร้อมอุ่น (Ready-to-Heat) และชุดพร้อมปรุง (Cooking Kit) ที่ส่งตรงถึงบ้านได้ทุกวัน
                  </p>
                </div>
              </div>

              {/* Right Column (Visual Bridge: Heritage Curry Bowl ➔ Modern Smart Cooking Kit) */}
              <div className="lg:col-span-6">
                <div className="bg-[#F7ECD4] rounded-3xl p-6 sm:p-8 border border-dashed border-[#EFE2C6] relative overflow-hidden shadow-paper">
                  
                  {/* Subtle Stamp in background */}
                  <div className="absolute top-2 right-4 text-[9px] font-mono tracking-widest text-[#9B1D30]/30 uppercase font-bold">
                    HERITAGE TO INNOVATION
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-10">
                    
                    {/* Visual 1: Heritage Curry Bowl */}
                    <div className="flex-1 flex flex-col items-center text-center group">
                      <div className="w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center relative">
                        <img
                          src="/images/business/concept_curry_bowl.png"
                          alt="หม้อแกงกะหรี่โบราณในตำนาน"
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#9B1D30]/10 text-[#9B1D30] text-[11px] font-semibold">
                        35-Year Heritage
                      </span>
                      <p className="text-xs font-serif-thai font-bold text-[#4A3F35] mt-1">
                        จากสูตรเปิบพิสดารปี 2534
                      </p>
                      <span className="text-[10px] text-[#786E64] font-light">
                        (ความอบอุ่นในครัวแม่ตลอด 35 ปี)
                      </span>
                    </div>

                    {/* Hand-drawn Bridge Arrow */}
                    <div className="flex flex-col items-center justify-center text-[#9B1D30] py-2 sm:py-0 shrink-0">
                      <div className="hidden sm:flex flex-col items-center gap-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#9B1D30] font-semibold">
                          Crafted Anew
                        </span>
                        <div className="w-12 h-px bg-dashed border-t-2 border-dashed border-[#9B1D30]/60"></div>
                        <span className="text-lg leading-none">➔</span>
                      </div>
                      <div className="sm:hidden flex items-center gap-2 my-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#9B1D30] font-semibold">
                          Crafted Anew
                        </span>
                        <span className="text-lg leading-none">↓</span>
                      </div>
                    </div>

                    {/* Visual 2: Smart Cooking Kit */}
                    <div className="flex-1 flex flex-col items-center text-center group">
                      <div className="w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center relative">
                        <img
                          src="/images/business/concept_cooking_kit.png"
                          alt="กล่องชุด Smart Cooking Kit นวัตกรรมพร้อมปรุง"
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <span className="mt-2 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#8FA882]/15 text-[#738C66] text-[11px] font-semibold">
                        Scalable Brand
                      </span>
                      <p className="text-xs font-serif-thai font-bold text-[#4A3F35] mt-1">
                        สู่แบรนด์ใหม่ 3 ช่องทาง
                      </p>
                      <span className="text-[10px] text-[#786E64] font-light">
                        (เสิร์ฟร้อนหน้าร้าน • พร้อมอุ่น • พร้อมปรุง)
                      </span>
                    </div>

                  </div>

                  {/* Caption underneath bridge */}
                  <div className="text-center mt-5 pt-3 border-t border-dashed border-[#EFE2C6]/70">
                    <p className="text-[11px] text-[#786E64] font-serif italic">
                      "จากหม้อแกงที่แม่ทำให้กินที่บ้าน สู่ธุรกิจที่ส่งมอบความอบอุ่นถึงทุกครอบครัว"
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </section>
        </Reveal>

        {/* ========================================================
            📍 เซกชัน 01: กลุ่มลูกค้าเป้าหมาย (CUSTOMER SEGMENTS & MARKET INSIGHTS)
            Editorial 3-Column ไร้กรอบสี่เหลี่ยมล้อมรอบ + ภาพ Persona สีน้ำ
            ======================================================== */}
        <Reveal delay={150}>
          <section className="space-y-8 pt-4">
            
            <div className="flex items-center justify-between border-b border-dashed border-[#EFE2C6] pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B1D30] block">
                  SECTION 01 • MARKET INSIGHTS
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-thai font-bold text-[#4A3F35] mt-1">
                  กลุ่มลูกค้าเป้าหมาย (Customer Segments)
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-[#786E64] font-serif italic">
                <span>3 Core Personas</span>
              </div>
            </div>

            {/* 3 Open Magazine Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Persona 01: Urban Young Professionals */}
              <div className="space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between border-b border-dashed border-[#4A3F35]/15 pb-2">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-[#9B1D30]/40 leading-none">
                      01.
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#786E64] uppercase">
                      Young Pro
                    </span>
                  </div>

                  {/* Persona Illustration (Watercolor Cutout) */}
                  <div className="h-44 sm:h-48 flex items-center justify-center p-2">
                    <img
                      src="/images/business/persona_office.png"
                      alt="คนวัยทำงานในเมืองกับมื้ออาหารคุณภาพ"
                      className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35] leading-snug">
                    Urban Young Professionals
                    <span className="block text-xs text-[#786E64] font-light mt-0.5 font-sans">
                      (คนรุ่นใหม่และวัยทำงานในเมือง)
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed font-light">
                    มองหา Comfort Food รสชาติแท้ที่มีเรื่องราวและคุณภาพสูงในวันที่เร่งรีบ ต้องการมื้ออาหารที่เติมเต็มพลังใจหลังเลิกงาน
                  </p>
                </div>

                {/* Insight Box */}
                <div className="p-3.5 rounded-xl bg-[#F7ECD4] border-l-2 border-[#9B1D30] text-xs text-[#4A3F35] leading-relaxed">
                  <strong className="text-[#9B1D30] block font-semibold mb-0.5">📌 Market Insight:</strong>
                  ตอบโจทย์คนเมืองที่เหนื่อยล้าจากการทำงานและโหยหาอาหารโฮมเมดรสมือแม่ที่อร่อยจริง สบายท้อง โดยไม่ต้องเสียเวลาเคี่ยวแกงเองหลายชั่วโมง (เหมาะกับ Dine-in, Delivery และ Ready-to-Heat)
                </div>
              </div>

              {/* Persona 02: Modern Families & Health Conscious */}
              <div className="space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between border-b border-dashed border-[#4A3F35]/15 pb-2">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-[#9B1D30]/40 leading-none">
                      02.
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#786E64] uppercase">
                      Family & Health
                    </span>
                  </div>

                  {/* Persona Illustration (Watercolor Cutout) */}
                  <div className="h-44 sm:h-48 flex items-center justify-center p-2">
                    <img
                      src="/images/business/persona_family.png"
                      alt="ครอบครัวล้อมวงทานอาหารอบอุ่น"
                      className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35] leading-snug">
                    Modern Families & Health Conscious
                    <span className="block text-xs text-[#786E64] font-light mt-0.5 font-sans">
                      (กลุ่มครอบครัวและสายสุขภาพ)
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed font-light">
                    ต้องการมื้ออาหารที่อุ่นใจ สบายท้อง วัตถุดิบปลอดภัย โซเดียมต่ำ ทานได้ทุกวัย ตั้งแต่เด็กจนถึงผู้สูงอายุ (เช่น โจ๊กฟักทองและซี่โครงหมูตุ๋น)
                  </p>
                </div>

                {/* Insight Box */}
                <div className="p-3.5 rounded-xl bg-[#F7ECD4] border-l-2 border-[#8FA882] text-xs text-[#4A3F35] leading-relaxed">
                  <strong className="text-[#738C66] block font-semibold mb-0.5">📌 Market Insight:</strong>
                  เติมเต็มมื้ออาหารของครอบครัวด้วยเมนูที่ทานร่วมกันได้ทุกวัย ตั้งแต่เด็กจนถึงผู้สูงอายุ (ด้วยแกงกะหรี่จีนสูตรลดมัน โจ๊กฟักทองหวานธรรมชาติ และซี่โครงหมูตุ๋นเปื่อยนุ่มลดโซเดียม)
                </div>
              </div>

              {/* Persona 03: Home Cooks & Food Explorers */}
              <div className="space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-baseline justify-between border-b border-dashed border-[#4A3F35]/15 pb-2">
                    <span className="font-serif text-3xl sm:text-4xl font-light text-[#9B1D30]/40 leading-none">
                      03.
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#786E64] uppercase">
                      Home Cook
                    </span>
                  </div>

                  {/* Persona Illustration (Watercolor Cutout) */}
                  <div className="h-44 sm:h-48 flex items-center justify-center p-2">
                    <img
                      src="/images/business/persona_home_cook.png"
                      alt="คนกำลังสนุกกับการทำอาหารเองในครัว"
                      className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35] leading-snug">
                    Home Cooks & Food Explorers
                    <span className="block text-xs text-[#786E64] font-light mt-0.5 font-sans">
                      (คนรักการทำอาหารเองที่บ้าน)
                    </span>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed font-light">
                    อยากทำอาหารอร่อยระดับเชฟทานเองหรือเลี้ยงเพื่อนที่บ้านง่ายๆ ใน 15 นาที โดยไม่ต้องเตรียมเครื่องเทศที่ซับซ้อน ได้ความภาคภูมิใจในฝีมือตัวเอง
                  </p>
                </div>

                {/* Insight Box */}
                <div className="p-3.5 rounded-xl bg-[#F7ECD4] border-l-2 border-[#9B1D30] text-xs text-[#4A3F35] leading-relaxed">
                  <strong className="text-[#9B1D30] block font-semibold mb-0.5">📌 Market Insight:</strong>
                  ทลายข้อจำกัดเรื่องระยะทาง ขยายฐานลูกค้าสู่คนที่อยู่ไกลหรือต่างจังหวัด ให้สามารถปรุงแกงกะหรี่จีนรสชาติเป๊ะเหมือนเชฟมาทำให้ที่บ้านใน 15 นาทีผ่านชุด Cooking Kit
                </div>
              </div>

            </div>

          </section>
        </Reveal>

        {/* ========================================================
            📍 เซกชัน 02: คุณค่าที่ส่งมอบและพันธกิจความยั่งยืน
            (VALUE PROPOSITIONS & ETHICAL SOURCING)
            พื้นหลังสีเหลืองเนยอ่อนจางๆ (bg-[#F7ECD4]/70)
            ======================================================== */}
        <Reveal delay={200}>
          <section className="bg-[#F7ECD4]/70 rounded-3xl p-6 sm:p-10 border border-dashed border-[#EFE2C6] space-y-8 shadow-paper">
            
            <div className="border-b border-dashed border-[#EFE2C6] pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#738C66] block">
                SECTION 02 • VALUE CREATION & SUSTAINABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-thai font-bold text-[#4A3F35] mt-1">
                คุณค่าที่ส่งมอบและพันธกิจความยั่งยืน
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column (4 Core Value Propositions - Editorial List) */}
              <div className="lg:col-span-7 space-y-3.5">
                
                {/* Value 1 */}
                <div className="p-4 rounded-2xl bg-white/90 border border-[#EFE2C6]/60 flex items-start gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                  <CheckCircle2 className="w-5 h-5 text-[#8FA882] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed">
                    <strong className="font-semibold text-[#4A3F35] block font-serif-thai text-sm sm:text-base">
                      รสชาติต้นตำรับที่หาทานยาก แต่ทานง่ายขึ้น:
                    </strong>
                    <span className="text-[#786E64] font-light">
                      ส่งต่อเสน่ห์แกงกะหรี่จีนแต้จิ๋วผสานเครื่องเทศไทยที่มีเอกลักษณ์ไม่ซ้ำใครในตลาด ปรับสมดุลใหม่ให้เนื้อแกงเนียนละมุน ซดง่าย เบาสบายท้อง
                    </span>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="p-4 rounded-2xl bg-white/90 border border-[#EFE2C6]/60 flex items-start gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                  <CheckCircle2 className="w-5 h-5 text-[#8FA882] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed">
                    <strong className="font-semibold text-[#4A3F35] block font-serif-thai text-sm sm:text-base">
                      รสมือแม่ที่ไม่เคยเพี้ยน ด้วยมาตรฐานเชฟ:
                    </strong>
                    <span className="text-[#786E64] font-light">
                      ถอดรหัสสูตรกะด้วยสายตาเป็น Recipe Sheet ควบคุมสัดส่วน อุณหภูมิ และเวลาเคี่ยวอย่างแม่นยำ เพื่อให้ได้รสชาติที่นิ่งเป๊ะเหมือนกันทุกชามและทุกซอง
                    </span>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="p-4 rounded-2xl bg-white/90 border border-[#EFE2C6]/60 flex items-start gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                  <CheckCircle2 className="w-5 h-5 text-[#8FA882] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed">
                    <strong className="font-semibold text-[#4A3F35] block font-serif-thai text-sm sm:text-base">
                      ส่งมอบความอบอุ่นได้ทุกที่ ทุกเวลา:
                    </strong>
                    <span className="text-[#786E64] font-light">
                      เปลี่ยนขั้นตอนการเคี่ยวแกงอันยาวนานในครัวเรา ให้กลายเป็นมื้อที่สะดวกและรวดเร็วสำหรับลูกค้า ไม่ว่าจะแวะทานที่ร้าน อุ่นร้อนใน 3 นาที หรือปรุงเองใน 15 นาที
                    </span>
                  </div>
                </div>

                {/* Value 4 */}
                <div className="p-4 rounded-2xl bg-white/90 border border-[#EFE2C6]/60 flex items-start gap-3.5 shadow-2xs hover:shadow-xs transition-shadow">
                  <CheckCircle2 className="w-5 h-5 text-[#8FA882] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed">
                    <strong className="font-semibold text-[#4A3F35] block font-serif-thai text-sm sm:text-base">
                      ปลอดภัย ใส่ใจเหมือนทำให้คนในบ้านทาน:
                    </strong>
                    <span className="text-[#786E64] font-light">
                      คัดสรรวัตถุดิบคุณภาพดี ปรับลดไขมันและโซเดียม ดึงความหวานธรรมชาติจากวัตถุดิบโดยไม่พึ่งผงชูรส เพื่อให้เป็น Comfort Food ที่ทานได้สบายใจทุกวัน
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Column (Our Ethical Sourcing Polaroid Note) */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-[#EFE2C6] space-y-4 relative group transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  
                  {/* Washi Tape Accent */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#8FA882]/30 backdrop-blur-xs -rotate-2 rounded-xs border border-white/40 pointer-events-none" />

                  {/* Polaroid Image of Produce */}
                  <div className="aspect-[16/10] sm:aspect-[4/3] rounded-2xl bg-[#F7ECD4] overflow-hidden border border-[#EFE2C6]/60 shadow-xs">
                    <img
                      src="/images/business/ethical_sourcing_real.jpg"
                      alt="ผลผลิตฟักเขียวและเครื่องเทศสมุนไพรจากเกษตรกรไทย"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Note Caption */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-1.5 text-xs font-serif-thai font-bold text-[#738C66]">
                      <Sprout className="w-4 h-4 text-[#738C66]" />
                      <span>Our Ethical Sourcing • วัตถุดิบด้วยใจ</span>
                    </div>
                    <p className="text-xs text-[#4A3F35] leading-relaxed font-light">
                      "🌾 <strong className="font-medium">Local Support & Sustainability:</strong> ฉันตั้งใจรับซื้อผลผลิตฟักทองและเครื่องเทศคุณภาพจากเกษตรกรท้องถิ่นโดยตรง เพื่อส่งต่อความสดใหม่สู่ชามอาหาร และเติบโตไปพร้อมกับชุมชนอย่างยั่งยืน"
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </section>
        </Reveal>

        {/* ========================================================
            📍 เซกชัน 03: โมเดลการสร้างรายได้ 3 ช่องทาง
            (3-TIER REVENUE MODEL)
            3 การ์ดมนโปร่งสบาย พร้อมภาพโพลารอยด์ผลิตภัณฑ์จริง
            ======================================================== */}
        <Reveal delay={250}>
          <section className="space-y-8 pt-4">
            
            <div className="flex items-center justify-between border-b border-dashed border-[#EFE2C6] pb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B1D30] block">
                  SECTION 03 • FINANCIAL FEASIBILITY
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif-thai font-bold text-[#4A3F35] mt-1">
                  โมเดลการสร้างรายได้ 3 ช่องทาง (3-Tier Revenue Model)
                </h2>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs text-[#786E64] font-serif italic">
                <span>Diversified Revenue Engine</span>
              </div>
            </div>

            {/* 3 Revenue Channel Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Channel 01: Dine-in & Flagship Experience */}
              <div className="bg-white/90 rounded-3xl p-6 sm:p-7 shadow-xs border border-[#EFE2C6]/70 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  
                  {/* Polaroid Visual */}
                  <div className="h-44 rounded-2xl overflow-hidden border border-[#EFE2C6]/60 shadow-2xs group relative">
                    <img
                      src="/images/business/channel_dine_in_real.jpg"
                      alt="Channel 01: Dine-in & Flagship Experience"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#9B1D30]/15 text-[#9B1D30] text-[11px] font-semibold">
                      <Store className="w-3 h-3" />
                      <span>Channel 01</span>
                    </span>
                    <span className="text-[10px] text-[#786E64] font-mono uppercase">
                      Experience
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35]">
                    Dine-in & Test Kitchen Flagship
                  </h3>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                    เริ่มต้นเปิดให้บริการจริงและพิสูจน์ตลาดที่ Test Kitchen at The Food School (พร้อมระบบ Delivery ในพื้นที่) ทำหน้าที่เป็นหน้าร้านต้นแบบสร้างความประทับใจแรก และเป็นครัวกลางในการควบคุมคุณภาพการผลิต
                  </p>
                </div>

                <div className="pt-3 border-t border-dashed border-[#EFE2C6] flex items-center justify-between text-xs">
                  <span className="text-[#786E64] font-light">Gross Margin</span>
                  <span className="font-semibold text-[#9B1D30] font-mono">~60-65%</span>
                </div>
              </div>

              {/* Channel 02: Smart Cooking Kit (Growth Engine) */}
              <div className="bg-white/90 rounded-3xl p-6 sm:p-7 shadow-xs border border-[#EFE2C6]/70 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow relative">
                
                {/* Growth Badge */}
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#8FA882] text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                  ★ Growth Engine
                </div>

                <div className="space-y-3">
                  
                  {/* Polaroid Visual */}
                  <div className="h-44 rounded-2xl overflow-hidden border border-[#8FA882]/30 shadow-2xs group relative">
                    <img
                      src="/images/business/channel_cooking_kit_real.jpg"
                      alt="Channel 02: Smart Cooking Kit (ชุดพร้อมปรุง 15 นาที)"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8FA882]/20 text-[#738C66] text-[11px] font-semibold">
                      <Package className="w-3 h-3" />
                      <span>Channel 02</span>
                    </span>
                    <span className="text-[10px] text-[#738C66] font-mono uppercase font-bold">
                      Scalable
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35]">
                    Smart Cooking Kit (ชุดพร้อมปรุง 15 นาที)
                  </h3>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                    ชุดพร้อมปรุงแกงกะหรี่จีนรสมือแม่ (เบสซอสแกงเข้มข้น + เครื่องเทศชั่งตวงเป๊ะ + QR วิดีโอสอนทำ) ทลายข้อจำกัดเรื่องพื้นที่หน้าร้าน จัดส่งความอร่อยได้ทั่วประเทศ
                  </p>
                </div>

                <div className="pt-3 border-t border-dashed border-[#EFE2C6] flex items-center justify-between text-xs">
                  <span className="text-[#786E64] font-light">High Scalable Margin</span>
                  <span className="font-semibold text-[#738C66] font-mono">~45-50%</span>
                </div>
              </div>

              {/* Channel 03: Ready-to-Heat Pouch */}
              <div className="bg-white/90 rounded-3xl p-6 sm:p-7 shadow-xs border border-[#EFE2C6]/70 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  
                  {/* Polaroid Visual */}
                  <div className="h-44 rounded-2xl overflow-hidden border border-[#EFE2C6]/60 shadow-2xs group relative">
                    <img
                      src="/images/business/channel_ready_to_heat_real.jpg"
                      alt="Channel 03: Ready-to-Heat Pouch (ซองพร้อมอุ่นทาน 3 นาที)"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#9B1D30]/15 text-[#9B1D30] text-[11px] font-semibold">
                      <Flame className="w-3 h-3" />
                      <span>Channel 03</span>
                    </span>
                    <span className="text-[10px] text-[#786E64] font-mono uppercase">
                      Recurring
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35]">
                    Ready-to-Heat Pouch (ซองพร้อมอุ่นทาน 3 นาที)
                  </h3>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                    แกงกะหรี่จีนและเมนูตุ๋นบรรจุสุญญากาศเก็บความสด อุ่นร้อนพร้อมทานใน 3 นาที ตอบโจทย์การซื้อตุนติดตู้เย็นของคนเมือง สร้างยอดสั่งซื้อซ้ำและรายได้หมุนเวียนต่อเนื่อง (Recurring Revenue)
                  </p>
                </div>

                <div className="pt-3 border-t border-dashed border-[#EFE2C6] flex items-center justify-between text-xs">
                  <span className="text-[#786E64] font-light">Retort Pouch Margin</span>
                  <span className="font-semibold text-[#9B1D30] font-mono">~40-45%</span>
                </div>
              </div>

            </div>

          </section>
        </Reveal>

        {/* ========================================================
            📍 เซกชัน 04: ความได้เปรียบทางการแข่งขัน
            (UNFAIR COMPETITIVE ADVANTAGES)
            3 บล็อกข้อความพร้อมตราประทับสีชาด (Inkan Stamp Badge)
            ======================================================== */}
        <Reveal delay={300}>
          <section className="space-y-8 pt-4">
            
            <div className="border-b border-dashed border-[#EFE2C6] pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B1D30] block">
                SECTION 04 • STRATEGIC MOATS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-thai font-bold text-[#4A3F35] mt-1">
                ความได้เปรียบทางการแข่งขัน (Unfair Competitive Advantages)
              </h2>
            </div>

            {/* 3 Strategic Moat Pillar Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Pillar 01 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#F7ECD4]/80 border border-[#EFE2C6] space-y-3 relative overflow-hidden shadow-paper hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#9B1D30]/10 text-[#9B1D30] border border-[#9B1D30]/30 flex items-center justify-center text-xs font-bold font-serif">
                    💮
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#9B1D30] uppercase">
                    Pillar 01
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35]">
                  35-Year Authentic Heritage, Made Better
                </h3>
                <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                  ต้นทุนทางรสชาติและเรื่องราวของครอบครัวที่มีอยู่จริงจากตำนานเปิบพิสดาร ถูกนำมาพัฒนาใหม่ให้ดีกว่าเดิม จนได้รสชาติแกงกะหรี่จีนแต้จิ๋วที่เป็นเอกลักษณ์เฉพาะตัวและลอกเลียนแบบได้ยาก
                </p>
              </div>

              {/* Pillar 02 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#F7ECD4]/80 border border-[#EFE2C6] space-y-3 relative overflow-hidden shadow-paper hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#9B1D30]/10 text-[#9B1D30] border border-[#9B1D30]/30 flex items-center justify-center text-xs font-bold font-serif">
                    💮
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#9B1D30] uppercase">
                    Pillar 02
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35]">
                  Culinary Precision & System Thinking
                </h3>
                <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                  ผสานทักษะครัวไทยและวินัยการชั่งตวงจากเบเกอรี่ เข้ากับวิธีคิดเชิงระบบจากการเรียนพัฒนาซอฟต์แวร์ ทำให้สามารถวางมาตรฐานสูตร (Recipe Standardization) และควบคุมต้นทุน-สต๊อกวัตถุดิบในครัวได้อย่างแม่นยำ
                </p>
              </div>

              {/* Pillar 03 */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#F7ECD4]/80 border border-[#EFE2C6] space-y-3 relative overflow-hidden shadow-paper hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-[#9B1D30]/10 text-[#9B1D30] border border-[#9B1D30]/30 flex items-center justify-center text-xs font-bold font-serif">
                    💮
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#9B1D30] uppercase">
                    Pillar 03
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35]">
                  E-Commerce Readiness & Proven Community
                </h3>
                <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                  มีความเข้าใจในการวางระบบขายออนไลน์ทั้งหน้าบ้าน-หลังบ้าน พร้อมฐานคอมมูนิตี้จริงจากเพจ The Ringredients ที่มียอดสั่งซื้อซ้ำกว่า 85%+ พิสูจน์ถึงความสามารถในการสื่อสารและสร้างความผูกพันกับลูกค้าจริง
                </p>
              </div>

            </div>

          </section>
        </Reveal>

        {/* ========================================================
            BOTTOM NAVIGATION
            Slender Minimal Buttons
            ======================================================== */}
        <Reveal delay={350}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-dashed border-[#EFE2C6]">
            <button
              onClick={onBack}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white hover:bg-[#F7ECD4] text-[#4A3F35] border border-[#EFE2C6] text-xs font-medium transition shadow-2xs inline-flex items-center justify-center gap-2 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#786E64] transition-transform group-hover:-translate-x-0.5" />
              <span>กลับสู่ Home</span>
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white text-xs font-medium transition shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>ดู Signature Dishes ทั้งหมด</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>

      </div>

    </div>
  );
}
