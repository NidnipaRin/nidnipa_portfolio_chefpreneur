import React from "react";
import { ArrowRight, ArrowDown, Play, Sparkles } from "lucide-react";
import Reveal from "../components/Reveal";
import {
  candidateInfo,
  signatureDishes,
  businessConceptData,
} from "../data/portfolioData";

export default function HomeView({ onNavigate, onOpenPitch }) {
  const { hero, secondary, expansion } = signatureDishes;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FFF5E1] text-[#4A3F35] overflow-x-hidden">
      {/* ================================================================
          📍 เซกชันที่ 1: HERO HEADER (แบนเนอร์ภาพวาดสีน้ำส่งต่อจานแกงกะหรี่)
          ภาพแบนเนอร์เต็มความกว้าง • ข้อความทับบนภาพพร้อมเงาคมชัด • ปล่อยโปร่งสบาย
          ================================================================ */}
      <section className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Full-bleed Banner Image */}
        <img
          src="/images/home/hero_banner_curry_hands.jpg"
          alt="A Taste of Our Heritage — จากครัวของแม่สู่เมนูที่สร้างแรงบันดาลใจ"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Soft, gentle gradient overlay to naturally contrast text while letting the painting shine through */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35 pointer-events-none"></div>

        {/* Floating Centered Content with crisp, high-legibility shadows */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 py-20 w-full flex flex-col items-center justify-center text-center">
          <Reveal direction="up" duration={700}>
            <div className="space-y-5 sm:space-y-6 flex flex-col items-center">
              {/* Competition Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold tracking-widest text-[#9B1D30] border border-white/80 shadow-md uppercase">
                <span>CHEFPRENEUR COMPETITION 2026 • THE FOOD SCHOOL</span>
              </div>

              {/* English Headline (Serif อบอุ่น) */}
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#FFF5E1] font-medium tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                “From Mom’s Kitchen to a New Beginning”
              </p>

              {/* Thai Main Headline (แบ่งเป็น 4 บรรทัด มีระยะห่างชัดเจน) */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif-thai font-extrabold text-white leading-relaxed drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-4xl flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                <span className="block">35 ปีที่ร้านระดับเปิบพิสดารปิดตัวลง...</span>
                <span className="block">แต่รสมือแม่ไม่เคยหายไป</span>
                <span className="block">สู่วันนี้ ที่ฉันตั้งใจนำความอบอุ่นนั้น</span>
                <span className="block">มาทำใหม่ให้ "ดีกว่าเดิม"</span>
              </h1>

              {/* Sub-headline (2 บรรทัดเล็ก) */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/95 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                ไม่ได้กลับมาเพื่อเปิดร้านเก่าของอากง... แต่กลับมาเพื่อส่งต่อแกงกะหรี่จีนที่แม่ทำให้กินมาตลอด 35 ปี
                <br className="hidden sm:inline" />
                ในมาตรฐานใหม่ที่เบาสบายท้อง พิถีพิถัน และพร้อมเป็นมื้อที่อบอุ่นใจสำหรับทุกคน
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
                <button
                  onClick={() => scrollTo("heritage")}
                  className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <span>สำรวจสูตรแห่งความทรงจำ ➔</span>
                </button>

                <button
                  onClick={onOpenPitch}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/40 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <span>ดูวิดีโอแนะนำตัว (30s) ▶</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <div
          onClick={() => scrollTo("heritage")}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-10 group"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/90 shadow-2xs text-[#4A3F35] text-xs font-medium hover:bg-white transition">
            <div className="w-1.5 h-1.5 rounded-full bg-[#9B1D30] animate-ping"></div>
            <span className="text-[10px] tracking-wider uppercase font-sans text-[#786E64]">
              Scroll to explore
            </span>
            <ArrowDown className="w-3 h-3 text-[#9B1D30] group-hover:translate-y-0.5 transition-transform" />
          </div>
        </div>
      </section>

      {/* ================================================================
          📍 เซกชันที่ 2: OUR HERITAGE (เรื่องราวต้นกำเนิดจากข้าวแกงจีนสวนกวางตุ้ง)
          คู่ภาพโพลารอยด์ซ้อนเหลื่อมเอียงองศา • เล่าเรื่องอบอุ่น • ปุ่มหางตั๋วคั่นหนังสือ
          ================================================================ */}
      <section
        id="heritage"
        className="scroll-mt-12 py-20 sm:py-28 bg-[#F7ECD4]/50 border-t border-[#EFE2C6]/50"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B1D30] block mb-2">
                1991 – 2026 · A WARM MEMORY, CRAFTED ANEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed lg:leading-[1.6]">
                35 ปีหลังจากร้านในตำนานปิดตัวลง...
                <br className="hidden sm:inline" /> ความอร่อยนั้นยังมีชีวิตอยู่ในครัวของแม่ และพร้อมก้าวสู่วันพรุ่งนี้ในแบบที่ "ดีกว่าเดิม"
              </h2>
              <div className="flex items-center justify-center gap-3 text-[#9B1D30]/40 mt-3">
                <span className="h-px w-10 bg-[#9B1D30]/20"></span>
                <span className="text-xs">✧</span>
                <span className="h-px w-10 bg-[#9B1D30]/20"></span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: Two Frameless Vintage Photos (พื้นหลังโปร่งใส ไร้กรอบ) */}
            <div className="lg:col-span-6 w-full flex justify-center items-center">
              <Reveal
                direction="right"
                delay={100}
                className="w-full flex justify-center"
              >
                <div className="relative w-full max-w-[440px] h-[360px] sm:h-[420px] mx-auto select-none">
                  {/* Photo 1: Mother at counter (Back/Left) */}
                  <img
                    src="/images/home/heritage_mom_vintage.png"
                    alt="คุณแม่ที่หน้าร้านข้าวแกงจีนสวนกวางตุ้ง"
                    className="absolute left-0 sm:left-2 top-2 sm:top-4 w-[190px] sm:w-[250px] h-auto object-contain drop-shadow-xl -rotate-6 hover:-rotate-1 hover:scale-105 transition-all duration-500 z-10"
                  />

                  {/* Photo 2: Ah-Gong holding Peep Pitsadan banner (Front/Right) */}
                  <img
                    src="/images/home/heritage_ahgong_peep.png"
                    alt="อากงถือป้ายรางวัลเปิบพิสดาร พ.ศ. 2534"
                    className="absolute right-0 sm:right-2 bottom-2 sm:bottom-4 w-[210px] sm:w-[270px] h-auto object-contain drop-shadow-2xl rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 z-20"
                  />
                </div>
              </Reveal>
            </div>

            {/* Right: Narrative Story & Bookmark Tag Link */}
            <div className="lg:col-span-6 space-y-5">
              <Reveal direction="left" delay={150}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="stamp-badge">AUTHENTIC HERITAGE</span>
                    <span className="text-xs font-semibold text-[#9B1D30]">
                      ความทรงจำที่มีชีวิต
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed">
                    เมื่อปี พ.ศ. 2534 ร้าน &ldquo;ข้าวแกงจีนสวนกวางตุ้ง&rdquo; ตำนานความอร่อยระดับ &lsquo;เปิบพิสดาร&rsquo; ของอากงได้ปิดฉากลงในวันที่คุณแม่แต่งงาน... แต่ตลอด 35 ปีที่ผ่านมา กลิ่นหอมของแกงกะหรี่จีนหม้อนั้นไม่เคยเลือนหายไปจากบ้านเราเลย เพราะคุณแม่—ผู้ช่วยคนเก่งที่ยืนเคียงข้างอากงมาตลอด—ได้เปลี่ยนจากการทำขาย มาเป็นมื้ออาหารแสนอบอุ่นที่คอยปลอบประโลมและเติมพลังให้ฉันเสมอมา
                  </p>

                  <p className="text-sm sm:text-base text-[#4A3F35] leading-relaxed">
                    วันนี้ ฉันตัดสินใจนำเมนูนี้มาขึ้นเวที Chefpreneur ไม่ใช่เพื่อกลับมาเปิดร้านเดิม หรือใช้ชื่อร้านเดิมของอากง แต่เพราะฉันอยากส่งต่อ &ldquo;ความรู้สึกเหมือนได้กลับมากินข้าวบ้านแม่&rdquo; ให้กับคนยุคนี้ ภายใต้ ชื่อใหม่และบ้านหลังใหม่ ที่ตั้งใจทำทุกอย่างให้ดีขึ้นกว่าเดิม เราเก็บความหอมนัวและหัวใจความอบอุ่นของรสมือแม่ไว้ครบถ้วน แต่ปรับให้ทานง่ายสบายท้องขึ้น พิถีพิถันและแม่นยำในทุกจาน เพื่อให้มื้อที่อบอุ่นที่สุดตลอด 35 ปีของฉัน กลายเป็นมื้อที่ดีที่สุดสำหรับทุกคน
                  </p>

                  {/* Bookmark-tail Style Link Button (หางตั๋วคั่นหนังสือสีน้ำตาลอ่อน) */}
                  <div className="pt-3">
                    <button
                      onClick={() => onNavigate("heritage")}
                      className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F7ECD4] hover:bg-[#EFE2C6] text-[#4A3F35] border border-[#EFE2C6] text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-xs transition-all duration-300 cursor-pointer"
                    >
                      <span>อ่านบันทึกความทรงจำฉบับเต็ม</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          📍 เซกชันที่ 3: OUR STRENGTH (3 จุดเด่นที่ผสานรวม - Hybrid Skills)
          เอา 01 02 03 ออก • ไอคอนใหญ่ขึ้นเด่นชัด • จัดวางไอคอนและหัวข้อตรงกลางคอลัมน์
          ================================================================ */}
      <section className="py-20 sm:py-28 bg-[#F7ECD4] border-t border-dashed border-[#4A3F35]/15">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B1D30] block mb-2">
                OUR STRENGTH
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed lg:leading-[1.6]">
                <span className="inline-block">
                  3 ทักษะที่หลอมรวม... เพื่อทำรสมือแม่ให้ "ดีกว่าเดิม"
                </span>
                <br />
                <span className="inline-block font-serif">
                  My Hybrid Skills
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#786E64] font-light mt-3 max-w-2xl mx-auto leading-relaxed">
                เพราะการสร้างแบรนด์ใหม่ให้แข็งแรง ต้องใช้มากกว่าแค่ความรักในการทำอาหาร ฉันจึงนำทักษะหน้าเตา วิธีคิดเชิงระบบ และหัวใจที่เข้าใจคนกิน มาผสานเข้าด้วยกัน
              </p>
            </div>
          </Reveal>

          {/* Minimalist 3-Column Layout — Centered Icons & Headings (No 01, 02, 03) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {/* Pillar: Certified Culinary & Standard */}
            <Reveal delay={100}>
              <div
                onClick={() => onNavigate("hybrid")}
                className="group flex flex-col items-center text-center justify-between h-full space-y-4 cursor-pointer md:border-r md:border-[#4A3F35]/10 md:pr-8"
              >
                <div className="space-y-3 flex flex-col items-center">
                  {/* Extra Large Hand-drawn Watercolor Illustration */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                    <img
                      src="/images/home/pillar_culinary.png"
                      alt="Certified Culinary & Standard"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35] group-hover:text-[#9B1D30] transition-colors">
                    Certified Culinary & Standard
                  </h3>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed max-w-xs">
                    ผ่านการอบรมเชฟอาหารไทย (OFOS) พร้อมพื้นฐานความเป๊ะจากศาสตร์เบเกอรี่และขนมปัง การันตีความคิดสร้างสรรค์ด้วยรางวัล Top 30 เวทีปรุงสุข 2024 และผลงานออกอากาศรายการ Bento Expo ช่อง NHK World-Japan
                  </p>
                </div>

                <div className="pt-4 border-t border-[#4A3F35]/10 w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-[#9B1D30]">
                  <span>ศาสตร์ครัวและความแม่นยำ</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    ➔
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Pillar: System & E-Commerce Thinking */}
            <Reveal delay={200}>
              <div
                onClick={() => onNavigate("hybrid")}
                className="group flex flex-col items-center text-center justify-between h-full space-y-4 cursor-pointer md:border-r md:border-[#4A3F35]/10 md:pr-8"
              >
                <div className="space-y-3 flex flex-col items-center">
                  {/* Extra Large Hand-drawn Watercolor Illustration */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                    <img
                      src="/images/home/pillar_software.png"
                      alt="System & E-Commerce Thinking"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35] group-hover:text-[#738C66] transition-colors">
                    System & E-Commerce Thinking
                  </h3>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed max-w-xs">
                    นำทักษะจากการเรียน Junior Software Developer มาใช้วางระบบธุรกิจอาหาร เคยร่วมพัฒนาเว็บจำลองขายชุด Cooking Kit อาหารไทย 4 ภาค ที่เชื่อมโยงตั้งแต่หน้าร้านออนไลน์ ไปจนถึงระบบตัดสต๊อกวัตถุดิบหลังบ้านเพื่อลด Food Waste
                  </p>
                </div>

                <div className="pt-4 border-t border-[#4A3F35]/10 w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-[#738C66]">
                  <span>วิธีคิดเชิงระบบ & หลังบ้าน</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    ➔
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Pillar: Proven Customer Trust */}
            <Reveal delay={300}>
              <div
                onClick={() => onNavigate("hybrid")}
                className="group flex flex-col items-center text-center justify-between h-full space-y-4 cursor-pointer"
              >
                <div className="space-y-3 flex flex-col items-center">
                  {/* Extra Large Hand-drawn Watercolor Illustration */}
                  <div className="w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                    <img
                      src="/images/home/pillar_customer_trust.png"
                      alt="Proven Customer Trust"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                    />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35] group-hover:text-[#9B1D30] transition-colors">
                    Proven Customer Trust
                  </h3>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed max-w-xs">
                    พิสูจน์รสมือจริงผ่านเพจ The Ringredients พื้นที่เล่าเรื่องอาหารและเปิดรับพรีออเดอร์โฮมเมดเบเกอรี่ที่มียอดสั่งจองเต็มทุกรอบ พร้อมอัตราการกลับมาซื้อซ้ำกว่า 85%+ จากความใส่ใจในทุกคำที่เสิร์ฟ
                  </p>
                </div>

                <div className="pt-4 border-t border-[#4A3F35]/10 w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-[#9B1D30]">
                  <span>คอมมูนิตี้และความผูกพัน</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    ➔
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom Slender Oval Button */}
          <Reveal delay={350}>
            <div className="text-center pt-14">
              <button
                onClick={() => onNavigate("hybrid")}
                className="group inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-[#9B1D30] text-[#9B1D30] hover:bg-[#9B1D30] hover:text-white text-xs font-semibold transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer"
              >
                <span>สำรวจทักษะไฮบริดทั้งหมด</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          📍 เซกชันที่ 4: SIGNATURE DISHES (พระเอกแกงกะหรี่จีนโบราณ)
          กล่องกระดาษสีเหลืองเนยสดใส #F7ECD4 • รูปสีน้ำแกงกะหรี่พร้อมตราประทับกลมหยัก • เมนูเสริม 3 รายการ
          ================================================================ */}
      <section className="py-20 sm:py-28 bg-[#F7ECD4]/60 border-t border-[#EFE2C6]/60">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B1D30] block mb-2">
                SIGNATURE DISH & MENU CONCEPT
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed lg:leading-[1.6]">
                หัวใจหลักของมื้ออาหาร... จากชามเด่นหน้าเตา สู่ความอบอุ่นที่ส่งตรงถึงบ้าน
              </h2>
              <p className="text-xs sm:text-sm text-[#786E64] font-light mt-3 max-w-2xl mx-auto leading-relaxed">
                เริ่มต้นจากเมนูพระเอกที่ฉันตั้งใจนำมาพิสูจน์ฝีมือบนเวทีการแข่งขัน เคียงข้างด้วยเมนูโฮมเมดรสมือแม่ และต่อยอดสู่ผลิตภัณฑ์ที่ส่งต่อความอร่อยไปได้ทุกที่
              </p>
            </div>
          </Reveal>

          {/* Featured Hero Dish Card — กล่องกระดาษสีเหลืองเนยอ่อนสดใส #F7ECD4 ขนาดใหญ่ */}
          <Reveal delay={100}>
            <div
              onClick={() => onNavigate("menu")}
              className="bg-[#FFF5E1] rounded-3xl overflow-hidden border border-[#EFE2C6] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group mb-12 relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Left: Real Food Photo with Circular Scalloped Red Stamp */}
                <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-[#F7ECD4]">
                  <img
                    src="/images/home/dish_chinese_curry.jpg"
                    alt="แกงกะหรี่จีนรสมือแม่ (สูตรต้นตำรับปรับสมดุลใหม่)"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Scalloped Red Stamp Badge (ป้ายตราประทับสีแดงกลมหยัก) */}
                  <div className="absolute top-4 left-4 w-20 h-20 rounded-full border-2 border-dashed border-[#B0303C] bg-[#B0303C]/90 text-white flex flex-col items-center justify-center p-2 shadow-md transform -rotate-12 backdrop-blur-xs text-center">
                    <span className="text-[9px] font-bold tracking-wider uppercase">
                      Signature
                    </span>
                    <span className="text-[10px] font-serif-thai font-bold leading-tight">
                      สูตรลับของครอบครัว
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/60 text-white text-[11px] backdrop-blur-xs">
                    ★ {hero.rating} ({hero.reviews})
                  </div>
                </div>

                {/* Right: Story & Details */}
                <div className="lg:col-span-6 p-7 sm:p-9 lg:p-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="stamp-badge">COMPETITION HERO DISH</span>
                    <span className="text-xs font-semibold text-[#9B1D30] uppercase tracking-wider">
                      SIGNATURE CONCEPT
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif-thai font-bold text-[#4A3F35] group-hover:text-[#9B1D30] transition-colors">
                      แกงกะหรี่จีนรสมือแม่ (สูตรต้นตำรับปรับสมดุลใหม่)
                    </h3>
                    <p className="text-xs sm:text-sm text-[#786E64] font-serif italic mt-0.5">
                      Modernized Heritage Chinese Yellow Curry
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                    แกงกะหรี่จีนแต้จิ๋วที่ใช้เครื่องเทศไทยผสานเทคนิคการผัดและเคี่ยวแบบอากง รสชาติเข้มข้น เผ็ด เค็ม มันนัว ไม่หวานเลี่ยน ปรับสมดุลใหม่ให้เนื้อแกงเนียนละมุน เบาสบายท้อง เสิร์ฟเคียงกุนเชียงทอด แตงกวากรอบ และพริกชี้ฟ้าสด
                  </p>

                  <div className="p-3.5 bg-[#F7ECD4] rounded-2xl border border-[#EFE2C6]/70 text-xs text-[#4A3F35] leading-relaxed flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#9B1D30] shrink-0" />
                    <span>รสชาติระดับ 'เปิบพิสดาร' ที่หาทานยากในปัจจุบัน ถอดรหัสจากรสมือแม่สู่สูตรมาตรฐานเชฟที่ควบคุมอัตราส่วนและเวลาเคี่ยวอย่างแม่นยำ เพื่อความอร่อยที่คงที่ทุกหม้อ</span>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-[#4A3F35]/10 text-xs font-semibold text-[#9B1D30]">
                    <span>สูตรมาตรฐานเชฟคงที่ทุกหม้อ</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      ดูรายละเอียดเมนู ➔
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* 3 Secondary Teaser Cards (ขอบโปร่งแสง ไร้กรอบเส้นหนา) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Secondary 1: กระดูกหมูตุ๋นน้ำแดง */}
            <Reveal delay={150}>
              <div
                onClick={() => onNavigate("menu")}
                className="bg-white/70 hover:bg-white rounded-3xl p-5 border border-[#EFE2C6]/60 shadow-2xs hover:shadow-xs transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full space-y-3"
              >
                <div className="space-y-3">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F7ECD4]">
                    <img
                      src="/images/home/dish_pork_ribs.jpg"
                      alt={secondary[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="stamp-box">{secondary[0].tag}</span>
                  </div>
                  <h4 className="text-base font-serif-thai font-bold text-[#4A3F35] group-hover:text-[#9B1D30] transition-colors">
                    {secondary[0].title}
                  </h4>
                  <p className="text-xs text-[#786E64] font-light leading-relaxed">
                    ซี่โครงหมูตุ๋นเต้าเจี้ยวโบราณไฟอ่อนจนเนื้อล่อนละลายในปาก
                    เมนูคู่โต๊ะยอดนิยม
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-[#9B1D30] font-semibold flex items-center justify-between">
                  <span>{secondary[0].role}</span>
                  <span>➔</span>
                </div>
              </div>
            </Reveal>

            {/* Secondary 2: โจ๊กฟักทองเนื้อเนียน */}
            <Reveal delay={200}>
              <div
                onClick={() => onNavigate("menu")}
                className="bg-white/70 hover:bg-white rounded-3xl p-5 border border-[#EFE2C6]/60 shadow-2xs hover:shadow-xs transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full space-y-3"
              >
                <div className="space-y-3">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F7ECD4]">
                    <img
                      src="/images/home/dish_pumpkin_porridge.jpg"
                      alt={secondary[1].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="stamp-box">{secondary[1].tag}</span>
                  </div>
                  <h4 className="text-base font-serif-thai font-bold text-[#4A3F35] group-hover:text-[#9B1D30] transition-colors">
                    {secondary[1].title}
                  </h4>
                  <p className="text-xs text-[#786E64] font-light leading-relaxed">
                    ข้าวหอมมะลิตุ๋นฟักทองหวานธรรมชาติ
                    ตอบโจทย์ลูกค้าสายสุขภาพและกลุ่มครอบครัว
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-[#9B1D30] font-semibold flex items-center justify-between">
                  <span>{secondary[1].role}</span>
                  <span>➔</span>
                </div>
              </div>
            </Reveal>

            {/* Expansion: Smart Cooking Kit (ภาพใหม่จริงที่กล่องแบรนด์ชัดเจน) */}
            <Reveal delay={250}>
              <div
                onClick={() => onNavigate("menu")}
                className="bg-white/70 hover:bg-white rounded-3xl p-5 border border-[#EFE2C6]/60 shadow-2xs hover:shadow-xs transition-all duration-300 cursor-pointer group flex flex-col justify-between h-full space-y-3"
              >
                <div className="space-y-3">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#F7ECD4]">
                    <img
                      src="/images/menu/ready_to_heat_curry.jpg"
                      alt="Ready-to-Heat & Smart Cooking Kit: อร่อยเหมือนมีแม่ทำให้กินที่บ้าน"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="stamp-box !border-[#8FA882]/50 !text-[#738C66]">
                      FUTURE EXPANSION
                    </span>
                  </div>
                  <h4 className="text-base font-serif-thai font-bold text-[#4A3F35] group-hover:text-[#738C66] transition-colors leading-snug">
                    Ready-to-Heat & Smart Cooking Kit: อร่อยเหมือนมีแม่ทำให้กินที่บ้าน
                  </h4>
                  <p className="text-xs text-[#786E64] font-light leading-relaxed">
                    ต่อยอดความอบอุ่นสู่ช่องทางออนไลน์ ด้วยแกงกะหรี่จีนแพ็กสุญญากาศพร้อมอุ่นทานทันที (Ready-to-Heat) และชุดพร้อมปรุงใน 15 นาที (Cooking Kit)
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-[#738C66] font-semibold flex items-center justify-between">
                  <span>ขยายโอกาสทางธุรกิจสู่ครัวทุกบ้านทั่วประเทศ</span>
                  <span>➔</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div className="text-center pt-14">
              <button
                onClick={() => onNavigate("menu")}
                className="group inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-[#9B1D30] text-[#9B1D30] hover:bg-[#9B1D30] hover:text-white text-xs font-semibold transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer"
              >
                <span>ดูเมนูและสูตรอาหารทั้งหมด</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          📍 เซกชันที่ 5: BUSINESS VISION (โมเดลธุรกิจที่เติบโตได้จริง)
          ข้อความเปลือยโปร่งตรงกลาง • การ์ด Soft Glassmorphism • ไอคอนสีน้ำลายเส้นคราฟต์
          ================================================================ */}
      <section className="py-20 sm:py-28 bg-[#FFF5E1] border-t border-dashed border-[#4A3F35]/15">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Naked Headline in Center (ข้อความเปลือยโปร่งตรงกลางหน้าเว็บ) */}
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9B1D30] block">
                BUSINESS VISION & SCALABILITY
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed lg:leading-[1.6]">
                Modern Heritage Comfort Food
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl text-[#4A3F35]/90 font-medium">
                  จากความอบอุ่นในครัวแม่ สู่ธุรกิจ 3 ช่องทางที่เติบโตได้จริง
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-[#786E64] font-light mt-3 leading-relaxed max-w-2xl mx-auto">
                ก้าวข้ามขีดจำกัดของร้านข้าวแกงยุคเก่า สู่การสร้างแบรนด์ใหม่ที่ไม่ได้พึ่งพาแค่คนเดินเข้าร้าน แต่พร้อมส่งต่อมื้ออาหารแสนอบอุ่นผ่าน 3 รูปแบบบริการที่ตอบโจทย์ชีวิตคนยุคนี้
              </p>
            </div>
          </Reveal>

          {/* 3 Revenue Channel Cards (Soft Glassmorphism bg-white/70 backdrop-blur-sm) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Channel 1: Dine-in & Delivery (หน้าร้านต้นแบบ) */}
            <Reveal delay={100}>
              <div
                onClick={() => onNavigate("business")}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-[#EFE2C6]/60 shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center">
                    <img
                      src="/images/home/model_dine_in.png"
                      alt="Dine-in & Delivery (หน้าร้านต้นแบบ)"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-xs"
                    />
                  </div>

                  <div className="text-center space-y-1.5">
                    <span className="stamp-badge">CHANNEL 01</span>
                    <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35]">
                      Dine-in & Delivery (หน้าร้านต้นแบบ)
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light text-center leading-relaxed">
                    เสิร์ฟความอบอุ่นสดใหม่จากหน้าเตา เริ่มต้นพิสูจน์โมเดลธุรกิจและรับฟีดแบ็กจริงที่ Test Kitchen at The Food School เพื่อสร้างฐานลูกค้าที่รักในรสชาติและเป็นครัวกลางควบคุมมาตรฐาน
                  </p>
                </div>

                <div className="pt-3 border-t border-[#4A3F35]/10 text-center text-xs font-semibold text-[#9B1D30]">
                  <span>เสิร์ฟความอบอุ่นจากหน้าเตา ➔</span>
                </div>
              </div>
            </Reveal>

            {/* Channel 2: Ready-to-Heat Pouches (พร้อมอุ่นทาน 3 นาที) */}
            <Reveal delay={200}>
              <div
                onClick={() => onNavigate("business")}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-[#EFE2C6]/60 shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center">
                    <img
                      src="/images/home/model_ready_to_heat.png"
                      alt="Ready-to-Heat Pouches (พร้อมอุ่นทาน 3 นาที)"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-xs"
                    />
                  </div>

                  <div className="text-center space-y-1.5">
                    <span className="stamp-badge">CHANNEL 02</span>
                    <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35]">
                      Ready-to-Heat Pouches (พร้อมอุ่นทาน 3 นาที)
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light text-center leading-relaxed">
                    แกงกะหรี่จีนและเมนูตุ๋นรสมือแม่แพ็กสุญญากาศเก็บความสด อุ่นร้อนพร้อมทานใน 3 นาที ตอบโจทย์คนทำงานคอนโดและครอบครัวที่อยากมีกับข้าวอร่อยๆ ติดตู้เย็นไว้ทานทุกวัน
                  </p>
                </div>

                <div className="pt-3 border-t border-[#4A3F35]/10 text-center text-xs font-semibold text-[#9B1D30]">
                  <span>อร่อยเหมือนแม่อุ่นกับข้าวรอที่บ้าน ➔</span>
                </div>
              </div>
            </Reveal>

            {/* Channel 3: Smart Cooking Kits (ชุดพร้อมปรุง 15 นาที) */}
            <Reveal delay={300}>
              <div
                onClick={() => onNavigate("business")}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-7 border border-[#EFE2C6]/60 shadow-xs hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col justify-between h-full space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center">
                    <img
                      src="/images/home/model_cooking_kit.png"
                      alt="Smart Cooking Kits (ชุดพร้อมปรุง 15 นาที)"
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-xs"
                    />
                  </div>

                  <div className="text-center space-y-1.5">
                    <span className="stamp-box !border-[#8FA882]/50 !text-[#738C66]">
                      CHANNEL 03
                    </span>
                    <h3 className="text-base sm:text-lg font-serif-thai font-bold text-[#4A3F35]">
                      Smart Cooking Kits (ชุดพร้อมปรุง 15 นาที)
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light text-center leading-relaxed">
                    ชุดวัตถุดิบพร้อมซอสแกงกะหรี่เบสเข้มข้นและ QR Code วิดีโอสอนทำ ให้ลูกค้าสนุกกับการปรุงอาหารรสมือแม่ทานเองที่บ้าน ขยายฐานลูกค้าออนไลน์จัดส่งได้ทั่วประเทศ
                  </p>
                </div>

                <div className="pt-3 border-t border-[#4A3F35]/10 text-center text-xs font-semibold text-[#738C66]">
                  <span>ส่งต่อความอร่อยทั่วประเทศ ➔</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={350}>
            <div className="text-center pt-4">
              <button
                onClick={() => onNavigate("business")}
                className="group inline-flex items-center gap-2 px-7 py-2.5 rounded-full border border-[#9B1D30] text-[#9B1D30] hover:bg-[#9B1D30] hover:text-white text-xs font-semibold transition-all duration-300 shadow-2xs hover:shadow-xs cursor-pointer"
              >
                <span>ดูแผนธุรกิจ & โมเดลการเติบโต</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================
          📍 เซกชันที่ 6: FOOTER CTA (Let's Create a Delicious Future Together)
          พื้นหลังเป็นภาพ ไว้ด้านล่าง.png • ข้อความอ่านง่ายเด่นชัด • ปุ่มทรงรีคู่
          ================================================================ */}
      <section className="relative overflow-hidden border-t border-[#EFE2C6]/70 py-20 sm:py-28 text-[#4A3F35]">
        {/* Background Image: ไว้ด้านล่าง.png */}
        <img
          src="/images/home/bottom_banner.png"
          alt="ไว้ด้านล่าง - Let's Create a Delicious Future Together"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Soft, luminous cream overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-[#FFF5E1]/85 backdrop-blur-[1px] pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-5">
          <Reveal>
            <div className="space-y-2">
              <span className="font-serif italic text-2xl sm:text-3xl text-[#9B1D30] block drop-shadow-xs">
                “Let's Create a Delicious Future Together”
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35] drop-shadow-xs">
                ร่วมเดินทางไปกับเรา เพื่อสืบสานและสร้างสรรค์อนาคตอาหารไทย
              </h3>
              <p className="text-xs sm:text-sm text-[#786E64] font-medium max-w-lg mx-auto leading-relaxed pt-1 drop-shadow-xs">
                ต่อยอดมรดกแห่งรสชาติไทยในตำนาน สู่โอกาสทางธุรกิจที่ยั่งยืน
                และความสุขในทุกมื้ออาหาร
              </p>
            </div>
          </Reveal>

          {/* 2 Cute Slender Pill Buttons Side by Side */}
          <Reveal delay={150}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
              <button
                onClick={onOpenPitch}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>ดูวิดีโอแนะนำตัว (30s)</span>
              </button>

              <button
                onClick={() => onNavigate("heritage")}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/95 hover:bg-[#F7ECD4] text-[#4A3F35] text-xs sm:text-sm font-semibold border border-[#EFE2C6] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span>เริ่มต้นจากเรื่องราว</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={250}>
            <div className="pt-8 text-[11px] text-[#786E64] font-medium tracking-wide border-t border-[#4A3F35]/15 mt-6">
              {candidateInfo.name} ({candidateInfo.nickname}) •{" "}
              {candidateInfo.brand} • {candidateInfo.competition}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
