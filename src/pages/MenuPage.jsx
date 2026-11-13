import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Star,
  Package,
  Clock,
  Utensils,
  ShieldCheck,
  Flame,
  Award,
  CheckCircle2,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { candidateInfo } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";

export default function MenuPage({ onBack, onNavigate }) {
  const { lang, isEn } = useLanguage();
  const t = translations[lang].menuPage;

  return (
    <div className="min-h-screen bg-[#FFF5E1] text-[#4A3F35] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#9B1D30]/20">
      {/* Top Bar / Navigation Breadcrumb */}
      <div className="max-w-6xl mx-auto flex items-center justify-between border-b border-dashed border-[#EFE2C6] pb-4 mb-8 sm:mb-12">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-medium text-[#4A3F35] hover:text-[#9B1D30] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#786E64] group-hover:-translate-x-0.5 transition-transform" />
          <span>{isEn ? "Back to Home" : "กลับสู่ Home"}</span>
        </button>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#9B1D30]/60 animate-pulse"></span>
          <span className="text-xs text-[#786E64] font-serif tracking-wider">
            {candidateInfo.brand} • Culinary Journal Edition
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {/* ========================================================
            HERO HEADER SECTION
            ======================================================== */}
        <Reveal>
          <section className="space-y-5 text-center sm:text-left max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F7ECD4] border border-[#EFE2C6] text-[11px] font-semibold text-[#9B1D30] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#9B1D30]" />
              <span>{t.tag}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-thai font-extrabold text-[#4A3F35] leading-normal sm:leading-relaxed lg:leading-[1.55]">
              {t.headline}
            </h1>

            <div className="flex items-center justify-center sm:justify-start gap-3 text-[#9B1D30]/40 py-1">
              <span className="h-px w-12 bg-[#9B1D30]/30"></span>
              <span className="text-xs">✧</span>
              <span className="h-px w-12 bg-[#9B1D30]/30"></span>
            </div>

            <p className="text-sm sm:text-base text-[#786E64] font-light leading-relaxed">
              {t.desc}
            </p>

            {/* Chef's Craft Statement Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#F7ECD4]/90 border border-dashed border-[#EFE2C6] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#9B1D30]/5 rounded-bl-full pointer-events-none" />
              <div className="flex items-start gap-3">
                <span className="text-lg text-[#9B1D30] font-serif mt-0.5">
                  &ldquo;
                </span>
                <p className="text-xs sm:text-sm text-[#4A3F35] font-serif-thai italic leading-relaxed">
                  {t.quote}
                </p>
                <span className="text-lg text-[#9B1D30] font-serif self-end">
                  &rdquo;
                </span>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ========================================================
            เซกชันที่ 1: พระเอกระดับตำนาน (HERO DISH) — EDITORIAL SPREAD
            ======================================================== */}
        <Reveal>
          <section className="bg-[#F7ECD4] rounded-3xl border border-[#EFE2C6] shadow-sm overflow-hidden p-6 sm:p-8 lg:p-10 relative">
            {/* Background subtle watermark stamp */}
            <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full border-8 border-[#9B1D30]/5 pointer-events-none flex items-center justify-center -rotate-12">
              <span className="text-[10px] font-mono tracking-widest text-[#9B1D30]/10 uppercase font-black text-center">
                CHEFPRENEUR
                <br />
                HERITAGE
                <br />
                CRAFT 2026
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Visual & Legacy Heritage Spread */}
              <div className="lg:col-span-6 space-y-4">
                <div className="relative group overflow-hidden rounded-2xl bg-white border border-[#EFE2C6]/80 shadow-md">
                  <img
                    src="/images/menu/chinese_curry_photo.jpg"
                    alt={
                      isEn
                        ? "Mother's Heritage Chinese Yellow Curry (Modern Balanced Recipe)"
                        : "แกงกะหรี่จีนรสมือแม่ (สูตรต้นตำรับปรับสมดุลใหม่)"
                    }
                    className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Vintage Inkan Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#EFE2C6] shadow-sm text-xs font-semibold text-[#9B1D30]">
                    <span className="text-[#9B1D30]">★</span>
                    <span>
                      {isEn ? "35 Years of Heritage" : "35 ปีแห่งความทรงจำ"}
                    </span>
                    <span className="text-[#4A3F35]/30 mx-0.5">•</span>
                    <span className="font-serif italic text-[#786E64] text-[11px]">
                      Heritage Chinese Yellow Curry
                    </span>
                  </div>

                  {/* Red Inkan / Seal Stamp */}
                  <div className="absolute bottom-4 right-4 bg-[#9B1D30]/90 text-white text-[11px] font-serif-thai font-semibold px-3 py-1.5 rounded-xl shadow-md border border-white/40 flex items-center gap-1.5 backdrop-blur-xs">
                    <Award className="w-3.5 h-3.5 text-white/90" />
                    <span>
                      {isEn
                        ? "Family Recipe Elevated to Chef Standards"
                        : "สูตรพิเศษของครอบครัว สู่มาตรฐานเชฟรุ่นใหม่"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#786E64] px-1 font-serif italic">
                  <span>Photo: Authentic Chinese Yellow Curry Recipe</span>
                  <span className="text-[#9B1D30] font-sans font-medium">
                    Hero Signature Dish
                  </span>
                </div>
              </div>

              {/* Right Side: Story, Flavor & Standardization (Editorial Layout) */}
              <div className="lg:col-span-6 space-y-5 flex flex-col justify-between">
                {/* Header Rating & Title */}
                <div className="space-y-2 border-b border-dashed border-[#EFE2C6] pb-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-[#9B1D30]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-[#9B1D30] text-[#9B1D30]"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-[#4A3F35]">
                        5.0
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#9B1D30]/10 text-[#9B1D30] text-xs font-semibold border border-[#9B1D30]/20">
                      {isEn
                        ? "★ Peep Pitsadan Legacy 1991"
                        : "★ ตำนานเปิบพิสดาร พ.ศ. 2534"}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-serif-thai font-bold text-[#4A3F35]">
                      {isEn
                        ? "Mother's Heritage Chinese Yellow Curry (Modern Balanced Recipe)"
                        : "แกงกะหรี่จีนรสมือแม่ (สูตรต้นตำรับปรับสมดุลใหม่)"}
                    </h2>
                    <span className="text-xs sm:text-sm font-serif italic text-[#786E64] block mt-0.5">
                      Modernized Heritage Chinese Yellow Curry
                    </span>
                  </div>
                </div>

                {/* Original Description */}
                <p className="text-sm text-[#4A3F35] leading-relaxed font-light">
                  <strong className="font-semibold text-[#4A3F35]">
                    {isEn ? "Heart of Flavor:" : "หัวใจแห่งรสชาติ:"}
                  </strong>{" "}
                  {isEn
                    ? "The charm of this half-Thai, half-Teochew Chinese curry that Ah-Gong created and Mom has cooked for me for 35 years. Distinguished by aromatic spices stir-fried to perfection—rich, mildly spicy, savory-forward, and warmly rounded without being sweet or heavy. Paired with crispy Chinese sausage, chilled cucumber, and fresh goat horn chili for perfect contrast."
                    : "เสน่ห์ของแกงกะหรี่จีนลูกครึ่งไทย-แต้จิ๋วที่อากงริเริ่มและแม่เคี่ยวให้ฉันกินมาตลอด 35 ปี โดดเด่นด้วยกลิ่นหอมเครื่องเทศที่ผัดจนสุกหอม รสชาติเข้มข้น เผ็ดนิด เค็มนำ มันนัวกลมกล่อมโดยไม่หวานเลี่ยน ทานคู่กับกุนเชียงทอดหั่นเฉียง แตงกวากรอบ และพริกชี้ฟ้าซอยที่ตัดรสกันอย่างลงตัว"}
                </p>

                {/* Craft Evolution Note */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border-l-4 border-[#9B1D30] border-y border-r border-[#EFE2C6]/60 shadow-2xs space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#9B1D30] uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {isEn
                        ? "CRAFT EVOLUTION NOTE · What We Made Better"
                        : "CRAFT EVOLUTION NOTE · สิ่งที่เราทำใหม่ให้ดีกว่าเดิม"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed">
                    <strong className="font-semibold">
                      {isEn ? "Highlight:" : "จุดเด่น:"}
                    </strong>{" "}
                    {isEn
                      ? "Elevating the rare Peep Pitsadan legacy flavor for today's palate. We reduced heavy flour thickening and excess fat of the old-style recipe, using refined simmering techniques and natural sweetness from fresh ingredients. The result: a velvety, easy-to-sip, digestion-friendly broth—decoded into a Standardized Recipe Sheet for 100% consistent flavor in every bowl."
                      : "ยกระดับรสชาติเปิบพิสดารที่หาทานยาก ให้ตอบโจทย์คนยุคปัจจุบัน เราลดความข้นหนืดของแป้งและไขมันส่วนเกินแบบยุคเก่าลง ใช้เทคนิคการเคี่ยวและดึงรสหวานธรรมชาติจากวัตถุดิบเข้ามาแทนที่ ทำให้ได้น้ำแกงที่เนียนนุ่ม ซดง่าย สบายท้อง พร้อมถอดรหัสสูตรเป็นสัดส่วนมาตรฐาน (Standardized Recipe) ที่นิ่งเป๊ะทุกชาม"}
                  </p>
                </div>

                {/* 3 Detail Columns with Friendly Cute Line Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 bg-white/80 rounded-2xl border border-[#EFE2C6]/60 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#4A3F35] text-xs font-bold font-serif-thai">
                      <Utensils className="w-4 h-4 text-[#9B1D30]" />
                      <span>
                        {isEn ? "Signature Accompaniments" : "เครื่องเคียงชูรส"}
                      </span>
                    </div>
                    <p className="text-[#786E64] text-xs leading-relaxed font-light">
                      {isEn
                        ? "Crispy sweet Chinese sausage, crunchy cucumber, fresh sliced goat horn chili, and cilantro—adding texture dimensions and cutting through richness."
                        : "กุนเชียงทอดหอมหวาน, แตงกวากรอบ, พริกชี้ฟ้าสดซอย และผักชี ช่วยเพิ่มมิติเนื้อสัมผัสและตัดความเข้มข้น"}
                    </p>
                  </div>

                  <div className="p-3.5 bg-white/80 rounded-2xl border border-[#EFE2C6]/60 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#4A3F35] text-xs font-bold font-serif-thai">
                      <ShieldCheck className="w-4 h-4 text-[#738C66]" />
                      <span>{isEn ? "Chef Standards" : "มาตรฐานเชฟ"}</span>
                    </div>
                    <p className="text-[#786E64] text-xs leading-relaxed font-light">
                      {isEn
                        ? "Visual estimation replaced with Recipe Sheet—spice ratios, temperatures, and simmering times controlled 100% for perfect consistency."
                        : "เปลี่ยนการกะด้วยสายตาเป็น Recipe Sheet คุมปริมาณเครื่องเทศ อุณหภูมิ และเวลาเคี่ยวคงที่ 100%"}
                    </p>
                  </div>

                  <div className="p-3.5 bg-white/80 rounded-2xl border border-[#EFE2C6]/60 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#4A3F35] text-xs font-bold font-serif-thai">
                      <Flame className="w-4 h-4 text-[#9B1D30]" />
                      <span>
                        {isEn ? "Competition Role" : "บทบาทในการแข่งขัน"}
                      </span>
                    </div>
                    <p className="text-[#786E64] text-xs leading-relaxed font-light">
                      {isEn
                        ? "The Hero Dish of the competition—proving both culinary craftsmanship and the potential to build a distinctive new brand in the market."
                        : "Hero Dish ประจำเวที ที่ใช้พิสูจน์ทั้งรสมือและศักยภาพการสร้างแบรนด์ใหม่ที่มีเอกลักษณ์ชัดเจนในตลาด"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ========================================================
            เซกชันที่ 2: เมนูรองเสริมทัพ (SUPPORTING DISHES)
            ======================================================== */}
        <section className="space-y-8">
          <Reveal>
            <div className="space-y-2 border-b border-dashed border-[#EFE2C6] pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9B1D30] block">
                {t.supportingTag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed">
                {t.supportingHeadline}
              </h3>
              <p className="text-xs sm:text-sm text-[#786E64] font-light max-w-2xl leading-relaxed">
                {isEn
                  ? "For the 3-month Test Kitchen operation, these supporting dishes are designed to create complete meals for groups and families, including health-conscious diners, while sharing prep systems and ingredients with the hero dish for maximum efficiency."
                  : "เมื่อต้องเปิดขายจริงใน Test Kitchen ตลอด 3 เดือน เมนูเสริมเหล่านี้ถูกออกแบบมาเพื่อสร้างมื้ออาหารที่สมบูรณ์แบบสำหรับลูกค้าที่มาเป็นกลุ่มหรือครอบครัว รวมถึงดูแลคนรักสุขภาพ โดยใช้วัตถุดิบและระบบการเตรียมครัว (Prep) ร่วมกับเมนูหลักได้อย่างคุ้มค่า"}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* เมนูย่อยที่ 1: กระดูกหมูตุ๋นเต้าเจี้ยวน้ำแดง */}
            <Reveal delay={100}>
              <div className="bg-[#F7ECD4]/60 rounded-3xl p-6 sm:p-8 space-y-5 border border-dashed border-[#EFE2C6] hover:bg-[#F7ECD4] transition-colors duration-300 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {/* Photo with Inkan Seal */}
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-[#EFE2C6]/60 shadow-xs aspect-[16/10] group">
                    <img
                      src="/images/menu/pork_ribs_photo.jpg"
                      alt={
                        isEn
                          ? "Slow-Cooked Pork Ribs with Ancient Soy"
                          : "กระดูกหมูตุ๋นเต้าเจี้ยวน้ำแดง"
                      }
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-[#9B1D30] border border-[#EFE2C6] shadow-xs">
                      <span>SUPPORTING DISH</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#9B1D30]/90 text-white text-[10px] font-serif-thai font-semibold px-2.5 py-1 rounded-lg shadow-sm border border-white/30">
                      {isEn
                        ? "Slow-Cooked Technique"
                        : "สูตรตุ๋นไฟอ่อน Slow-cooked"}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35]">
                      {isEn
                        ? "Slow-Cooked Pork Ribs with Ancient Soy"
                        : "กระดูกหมูตุ๋นเต้าเจี้ยวน้ำแดง"}
                    </h4>
                    <span className="text-xs font-serif italic text-[#786E64] block mt-0.5">
                      {isEn
                        ? "Heritage Braised Pork Ribs"
                        : "Slow-Cooked Pork Ribs with Ancient Soy"}
                    </span>
                  </div>

                  {/* เนื้อหาเดิม */}
                  <p className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed font-light">
                    {isEn
                      ? "Prime pork ribs gently braised with fermented bean paste over low heat until melt-in-mouth tender. Perfectly balanced sweet-savory notes that complement the heritage curry beautifully."
                      : "ซี่โครงหมูคัดพิเศษตุ๋นกับเต้าเจี้ยวไฟอ่อนจนเนื้อล่อนละลายในปาก รสชาติเค็มหวานกลมกล่อม ทานง่าย เข้ากับแกงกะหรี่ได้อย่างลงตัว"}
                  </p>

                  {/* เพิ่มมุมมองการต่อยอดรสชาติ */}
                  <div className="p-3.5 bg-white/80 rounded-xl border-l-2 border-[#9B1D30] text-xs text-[#4A3F35] leading-relaxed space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-[#9B1D30]">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        {isEn
                          ? "Flavor Evolution Approach:"
                          : "มุมมองการต่อยอดรสชาติ:"}
                      </span>
                    </div>
                    <span>
                      {isEn
                        ? "Elevated with modern low-temperature slow-cooking to maximize collagen extraction and tenderness, with a reduced-sodium formula for deeper, more refined sweet-savory depth."
                        : "ยกระดับด้วยเทคนิคการคุมอุณหภูมิ Slow-cooking สมัยใหม่ ดึงคอลลาเจนและความนุ่มละมุนออกมาเต็มที่ พร้อมปรับสูตรลดโซเดียม ให้ความเค็มหวานกลมกล่อมลึกซึ้งยิ่งขึ้น"}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-dashed border-[#EFE2C6] flex items-center justify-between text-xs text-[#786E64] font-medium">
                  <span className="flex items-center gap-1.5 text-[#9B1D30]">
                    <span>✦</span>
                    <span>
                      {isEn
                        ? "+ Pairs with the hero dish for a complete satisfying meal"
                        : "+ เมนูทานคู่จานหลัก เติมเต็มมื้ออาหารให้อิ่มอร่อยครบสำรับ"}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>

            {/* เมนูย่อยที่ 2: โจ๊กฟักทองเนื้อเนียน สูตรคุณแม่ */}
            <Reveal delay={150}>
              <div className="bg-[#F7ECD4]/60 rounded-3xl p-6 sm:p-8 space-y-5 border border-dashed border-[#EFE2C6] hover:bg-[#F7ECD4] transition-colors duration-300 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {/* Photo with Inkan Seal */}
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-[#EFE2C6]/60 shadow-xs aspect-[16/10] group">
                    <img
                      src="/images/menu/pumpkin_congee_photo.jpg"
                      alt={
                        isEn
                          ? "Mother's Velvety Pumpkin Congee"
                          : "โจ๊กฟักทองเนื้อเนียน สูตรคุณแม่"
                      }
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-[#738C66] border border-[#EFE2C6] shadow-xs">
                      <span>HEALTH &amp; WELLNESS</span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-[#738C66]/90 text-white text-[10px] font-serif-thai font-semibold px-2.5 py-1 rounded-lg shadow-sm border border-white/30">
                      {isEn
                        ? "100% Natural Sweetness"
                        : "หวานละมุนธรรมชาติ 100%"}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35]">
                      {isEn
                        ? "Mother's Velvety Pumpkin Congee"
                        : "โจ๊กฟักทองเนื้อเนียน สูตรคุณแม่"}
                    </h4>
                    <span className="text-xs font-serif italic text-[#786E64] block mt-0.5">
                      {isEn
                        ? "Wholesome Heritage Congee"
                        : "Mother's Velvety Pumpkin Congee"}
                    </span>
                  </div>

                  {/* เนื้อหาเดิม */}
                  <p className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed font-light">
                    {isEn
                      ? "Hom Mali rice simmered with fresh sweet pumpkin until velvety smooth like cream soup. Light on digestion, packed with energy and vitamins, supporting local pumpkin growers."
                      : "ข้าวหอมมะลิตุ๋นกับฟักทองสดหวานธรรมชาติติดจนเนื้อเนียนนุ่มดุจซุปครีม เบาสบายท้อง ให้พลังงานและวิตามิน สนับสนุนผลผลิตฟักทองจากเกษตรกร"}
                  </p>

                  {/* เพิ่มมุมมองการต่อยอดรสชาติ */}
                  <div className="p-3.5 bg-white/80 rounded-xl border-l-2 border-[#738C66] text-xs text-[#4A3F35] leading-relaxed space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-[#738C66]">
                      <Sparkles className="w-3.5 h-3.5 shrink-0" />
                      <span>
                        {isEn
                          ? "Flavor Evolution Approach:"
                          : "มุมมองการต่อยอดรสชาติ:"}
                      </span>
                    </div>
                    <span>
                      {isEn
                        ? "Blending pumpkin and congee into a refined, velvety texture. Showcasing 100% natural sweetness from fresh ingredients without any added sugar."
                        : "ผสานรสชาติของฟักทองและโจ๊กให้เนื้อเนียนละเอียด ละมุนลิ้น ชูความหวานละเมียดจากธรรมชาติ 100% โดยไม่พึ่งพาน้ำตาลปรุงแต่ง"}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-dashed border-[#EFE2C6] flex items-center justify-between text-xs text-[#786E64] font-medium">
                  <span className="flex items-center gap-1.5 text-[#738C66]">
                    <span>✦</span>
                    <span>
                      {isEn
                        ? "For health-conscious diners and family dining"
                        : "ตอบโจทย์ลูกค้าสายสุขภาพ และกลุ่มครอบครัว"}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================
            เซกชันที่ 3: ก้าวกระโดดสู่นวัตกรรม (FUTURE EXPANSION & INNOVATION)
            ======================================================== */}
        <Reveal delay={150}>
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#8FA882]/40 shadow-xs p-6 sm:p-8 lg:p-10 space-y-6 relative overflow-hidden">
            {/* Top header strip with Recipe Kit Icon */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dashed border-[#8FA882]/30 pb-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8FA882]/20 text-[#738C66] flex items-center justify-center font-bold shadow-2xs flex-shrink-0">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#8FA882]/15 text-[#738C66] text-[11px] font-semibold mb-1">
                    <span>{t.expansionTag}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed">
                    {t.expansionHeadline}
                  </h4>
                  <span className="text-xs font-serif italic text-[#786E64]">
                    Home Comfort Expansion: Ready-to-Heat Pouch &amp; DIY
                    Cooking Kit
                  </span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7ECD4] border border-[#EFE2C6] text-xs font-semibold text-[#9B1D30] shrink-0">
                <span>
                  {isEn
                    ? "Expanding Comfort to Your Home"
                    : "ต่อยอดความอบอุ่นสู่ที่บ้าน"}
                </span>
              </div>
            </div>

            {/* Content & Photo Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-5 space-y-4">
                {/* Product 1: Ready-to-Heat Pouch */}
                <div className="relative overflow-hidden rounded-2xl bg-[#F7ECD4] border border-[#9B1D30]/30 shadow-xs aspect-[16/10] group">
                  <img
                    src="/images/menu/ready_to_heat_curry.jpg"
                    alt={
                      isEn
                        ? "1. Ready-to-Heat: Heritage Curry in 3 Minutes"
                        : "1. Ready-to-Heat: แกงกะหรี่จีนพร้อมอุ่นทานใน 3 นาที"
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#9B1D30] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#9B1D30]/30 shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#9B1D30]" />
                    <span>1. Ready-to-Heat (3 Mins)</span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-light px-2.5 py-0.5 rounded-full">
                    {isEn
                      ? "Vacuum-sealed microwave pouch"
                      : "ถุงสุญญากาศพร้อมอุ่นไมโครเวฟ"}
                  </div>
                </div>

                {/* Product 2: Smart Cooking Kit */}
                <div className="relative overflow-hidden rounded-2xl bg-[#F7ECD4] border border-[#8FA882]/30 shadow-xs aspect-[16/10] group">
                  <img
                    src="/images/menu/cooking_kit_photo.jpg"
                    alt={
                      isEn
                        ? "2. Smart Cooking Kit: 15-Minute DIY Kit"
                        : "2. Smart Cooking Kit: ชุดพร้อมปรุงใน 15 นาที"
                    }
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#738C66] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#8FA882]/30 shadow-xs flex items-center gap-1">
                    <Package className="w-3 h-3 text-[#738C66]" />
                    <span>2. Smart Cooking Kit (15 Mins)</span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-light px-2.5 py-0.5 rounded-full">
                    {isEn
                      ? "Ingredients + Sauce Base + QR Code"
                      : "ชุดวัตถุดิบ + ซอสเบส + QR Code"}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {/* เนื้อหาย่อหน้าแรก */}
                <p className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed font-light">
                  {isEn
                    ? "Because we don't want our deliciousness to stop at the restaurant door, and we understand modern lifestyles vary greatly. As the business scales, I plan to extend our heritage curry into 2 at-home product formats:"
                    : "เพราะเราไม่อยากให้ความอร่อยหยุดอยู่แค่ในร้าน และเข้าใจดีว่าคนยุคใหม่มีไลฟ์สไตล์ที่ต่างกัน เมื่อธุรกิจก้าวเข้าสู่เฟสของการขยายตัว ฉันจึงวางแผนต่อยอดแกงกะหรี่จีนรสมือแม่สู่ 2 รูปแบบผลิตภัณฑ์สำหรับทานที่บ้าน:"}
                </p>

                {/* กล่องไฮไลต์ที่ 1 */}
                <div className="p-4 rounded-2xl bg-[#F7ECD4]/80 border-l-3 border-[#9B1D30] text-xs sm:text-sm text-[#4A3F35] font-light leading-relaxed">
                  <div className="flex items-center gap-1.5 font-semibold text-[#9B1D30] mb-1">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      {isEn
                        ? "1. Ready-to-Heat (3-Minute Quick Comfort) — For exhausting work days:"
                        : "1. Ready-to-Heat (พร้อมอุ่นทานใน 3 นาที) — สำหรับวันทำงานที่เหนื่อยล้า:"}
                    </span>
                  </div>
                  {isEn
                    ? "Pre-cooked heritage curry vacuum-sealed for freshness. Simply heat and serve over steaming rice for instant comfort. Perfect for busy urbanites who crave authentic home-cooked flavor—like having mom's dinner waiting at home."
                    : "แกงกะหรี่จีนปรุงสุกพร้อมทานบรรจุในถุงสุญญากาศเก็บความสด เพียงนำไปอุ่นร้อนก็พร้อมราดข้าวสวยร้อนๆ ได้ทันที ตอบโจทย์คนเมืองที่ใช้ชีวิตเร่งรีบแต่อยากกินอาหารรสมือแม่ที่อร่อยจริงและสบายท้อง เหมือนมีแม่อุ่นกับข้าวรอไว้ที่บ้าน"}
                </div>

                {/* กล่องไฮไลต์ที่ 2 */}
                <div className="p-4 rounded-2xl bg-[#F7ECD4]/80 border-l-3 border-[#8FA882] text-xs sm:text-sm text-[#4A3F35] font-light leading-relaxed">
                  <div className="flex items-center gap-1.5 font-semibold text-[#738C66] mb-1">
                    <Utensils className="w-3.5 h-3.5 shrink-0" />
                    <span>
                      {isEn
                        ? "2. Smart Cooking Kit (15-Minute Chef DIY) — For special hands-on meals:"
                        : "2. Smart Cooking Kit (ชุดพร้อมปรุงใน 15 นาที) — สำหรับมื้อพิเศษที่อยากลงมือทำ:"}
                    </span>
                  </div>
                  {isEn
                    ? "A complete ingredient kit with pre-measured concentrated curry base and curated spices, plus a step-by-step QR code video tutorial. Anyone can cook restaurant-quality Chinese curry at home in just 15 minutes."
                    : "ชุดวัตถุดิบจัดเตรียมครบเซ็ตพร้อมเบสซอสแกงกะหรี่เข้มข้นและเครื่องเทศชั่งตวงเป๊ะ มาพร้อม QR Code วิดีโอสอนทำทีละขั้นตอน ให้ใครๆ ก็สามารถปรุงแกงกะหรี่จีนระดับเชฟทานเองที่บ้านได้ง่ายๆ"}
                </div>

                {/* กล่องไฮไลต์ที่ 3 */}
                <div className="p-4 sm:p-5 bg-[#8FA882]/10 rounded-2xl border border-[#8FA882]/20 text-xs sm:text-sm text-[#4A3F35] font-medium leading-relaxed flex items-start gap-3">
                  <Flame className="w-4 h-4 text-[#9B1D30] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#738C66] font-semibold mb-0.5">
                      {isEn
                        ? " Future Growth Engine:"
                        : "โอกาสการเติบโตของธุรกิจ (Future Growth Engine):"}
                    </strong>
                    <span className="text-[#786E64] font-light">
                      {isEn
                        ? "Leveraging my E-Commerce system skills to build a second revenue stream through online ordering and nationwide delivery, expanding the customer base far beyond physical store limitations."
                        : "เชื่อมโยงกับทักษะการทำระบบ E-Commerce ที่ฉันมี เพื่อสร้างรายได้ช่องทางที่ 2 ผ่านการสั่งซื้อออนไลน์และจัดส่งทั่วประเทศ ขยายฐานลูกค้าได้กว้างไกลโดยไม่ต้องพึ่งพาพื้นที่หน้าร้านเพียงอย่างเดียว"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* ========================================================
            BOTTOM NAVIGATION
            ======================================================== */}
        <Reveal>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-dashed border-[#EFE2C6]">
            <button
              onClick={onBack}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white hover:bg-[#F7ECD4] text-[#4A3F35] border border-[#EFE2C6] text-xs font-medium transition shadow-2xs inline-flex items-center justify-center gap-2 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#786E64] transition-transform group-hover:-translate-x-0.5" />
              <span>{isEn ? "Back to Home" : "กลับสู่ Home"}</span>
            </button>
            <button
              onClick={() => onNavigate("business")}
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white text-xs font-medium transition shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{t.nextBtn}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
