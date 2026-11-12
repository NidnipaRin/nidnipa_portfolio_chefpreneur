import React from 'react';
import { ArrowLeft, Store, Sliders, Rocket, Check, Target, TrendingUp } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';

export default function BusinessPlanPage({ onBack, onNavigate }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-cream-200 pb-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-medium text-burgundy hover:text-burgundy-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>กลับสู่ Home</span>
        </button>
        <span className="text-xs text-charcoal-light font-serif">
          {candidateInfo.brand} • Test Kitchen Plan
        </span>
      </div>

      {/* Hero Header */}
      <div className="space-y-3">
        <span className="font-handwriting text-2xl text-terracotta block">
          กลยุทธ์การขยายผลทางธุรกิจ
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-thai font-bold text-burgundy leading-tight">
          Test Kitchen Plan — แผนปฏิบัติการ 3 เดือน: จาก Test Kitchen สู่ตลาดดิจิทัล
        </h1>
        <p className="text-sm text-charcoal-light leading-relaxed max-w-2xl font-light">
          ตอบโจทย์รางวัลใหญ่ของโครงการ Chefpreneur Competition 2026: เรียนรู้ทักษะ 6 เดือน และเปิดดำเนินธุรกิจจริง 3 เดือนที่ Test Kitchen at The Food School
        </p>
      </div>

      {/* Overall Roadmap Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-soft space-y-6">
        <h2 className="text-xl font-serif-thai font-bold text-burgundy">
          ภาพรวมเส้นทาง 9 เดือน (9-Month Chefpreneur Journey)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-charcoal-light">
          <div className="p-5 rounded-2xl bg-cream-50 border border-cream-200 space-y-2">
            <span className="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy font-mono font-bold text-[11px]">
              PHASE 1 : 6 เดือนแรก
            </span>
            <strong className="text-charcoal block text-base font-serif-thai">
              Culinary & Business Incubation
            </strong>
            <p className="leading-relaxed">
              ยกระดับทักษะการทำอาหารระดับสูง เรียนรู้เทคนิคการจัดการครัวมืออาชีพ (Kitchen Management), Food Hygiene มาตรฐานสากล, และการวางโมเดลธุรกิจร้านอาหารจากผู้เชี่ยวชาญของ The Food School
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-burgundy-50/50 border border-burgundy/20 space-y-2">
            <span className="px-3 py-1 rounded-full bg-burgundy text-white font-mono font-bold text-[11px]">
              PHASE 2 : 3 เดือนหลัง
            </span>
            <strong className="text-burgundy block text-base font-serif-thai">
              Real Test Kitchen Operation
            </strong>
            <p className="leading-relaxed">
              เปิดดำเนินธุรกิจจริง ณ Test Kitchen at The Food School เสิร์ฟแกงกะหรี่จีนโบราณและเมนูเสริม ทดสอบตลาดกับลูกค้าจริง และขยายผลเป็นแพลตฟอร์มสั่งซื้อ Smart Cooking Kit
            </p>
          </div>
        </div>
      </div>

      {/* 3-Month Test Kitchen Detailed Breakdown */}
      <div className="space-y-6">
        <h2 className="text-xl font-serif-thai font-bold text-burgundy">
          รายละเอียด Test Kitchen Plan (3 เดือน)
        </h2>

        {/* Month 1 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy font-mono text-xs font-bold">
              MONTH 01
            </span>
            <Store className="w-5 h-5 text-terracotta" />
          </div>
          <h3 className="text-lg font-bold text-charcoal">
            Dine-in Validation & Community Engagement
          </h3>
          <p className="text-xs text-charcoal-light leading-relaxed">
            เปิดให้บริการหน้าร้าน Test Kitchen เสิร์ฟแกงกะหรี่จีนโบราณสูตรมรดก และเมนูเสริม เพื่อทดสอบกระแสตอบรับและจัดเก็บข้อมูลจากลูกค้าจริง
          </p>
          <ul className="space-y-2 text-xs text-charcoal-light pt-2 border-t border-cream-200">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>เปิดตัวแบรนด์ {candidateInfo.brand} สู่สาธารณชน ณ The Food School</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>เก็บฟีดแบ็กความพึงพอใจผ่านระบบ Digital Survey ทันทีหลังมื้ออาหาร</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>เชิญชวนฐานแฟนเดิมจากเพจไดอารี่มาร่วมเป็นผู้ชิมกลุ่มแรก</span>
            </li>
          </ul>
          <div className="pt-2 text-[11px] font-medium text-terracotta">
            เป้าหมาย KPI: ยอดเสิร์ฟเฉลี่ย 50-60 จาน/วัน, อัตราความพึงพอใจในรสชาติมากกว่า 90%
          </div>
        </div>

        {/* Month 2 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-burgundy/30 shadow-soft space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-burgundy text-white font-mono text-xs font-bold">
              MONTH 02
            </span>
            <Sliders className="w-5 h-5 text-burgundy" />
          </div>
          <h3 className="text-lg font-bold text-charcoal">
            Operational & Cost Optimization
          </h3>
          <p className="text-xs text-charcoal-light leading-relaxed">
            ปรับปรุงกระบวนการเคี่ยว การเตรียมวัตถุดิบ (Mise en place) และการควบคุมต้นทุนด้วยซอฟต์แวร์ Recipe Costing Engine ที่พัฒนาขึ้นเอง
          </p>
          <ul className="space-y-2 text-xs text-charcoal-light pt-2 border-t border-cream-200">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>ควบคุม Food Waste ให้ต่ำกว่า 3% ด้วยการจัดตารางเคี่ยว Batch ที่แม่นยำ</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>ทดลองเปิด Pre-order Smart Cooking Kit แกงกะหรี่จีน 50 ชุดแรกให้ลูกค้านำกลับไปทำที่บ้าน</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>สร้าง Standard Operating Procedure (SOP) เพื่อให้ผู้ช่วยในครัวทำตามได้รสชาติคงที่</span>
            </li>
          </ul>
          <div className="pt-2 text-[11px] font-medium text-burgundy">
            เป้าหมาย KPI: Food Cost คงที่ 28-30%, สร้างรายได้เสริมจาก Pre-order ชุดแรก
          </div>
        </div>

        {/* Month 3 */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy font-mono text-xs font-bold">
              MONTH 03
            </span>
            <Rocket className="w-5 h-5 text-terracotta" />
          </div>
          <h3 className="text-lg font-bold text-charcoal">
            Digital Integration & Omnichannel Scale
          </h3>
          <p className="text-xs text-charcoal-light leading-relaxed">
            เปิดตัวแพลตฟอร์มสั่งซื้อ Smart Cooking Kit ควบคู่กับร้านอาหาร เปลี่ยนลูกค้า Dine-in เป็นสมาชิกซื้อซ้ำ และเตรียมโมเดลขยายธุรกิจ
          </p>
          <ul className="space-y-2 text-xs text-charcoal-light pt-2 border-t border-cream-200">
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>เชื่อมต่อระบบ E-commerce เพื่อส่งสินค้าแบบ Ready-to-Cook ทั่วประเทศ</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>สรุปผลการดำเนินงาน Test Kitchen ทั้งด้านยอดขาย ต้นทุน และ Customer Feedback</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>เตรียม Pitching ต่อยอดสู่ Compact Heritage Restaurant และการร่วมมือกับคู่ค้า</span>
            </li>
          </ul>
          <div className="pt-2 text-[11px] font-medium text-terracotta">
            เป้าหมาย KPI: สร้างโมเดลธุรกิจที่คืนทุนได้เร็ว และมีช่องทางรายได้ 2 ทาง (หน้าร้าน + ออนไลน์)
          </div>
        </div>

      </div>

      {/* Manifesto */}
      <div className="p-8 rounded-3xl bg-burgundy text-white text-center shadow-warm space-y-2">
        <h4 className="text-xl font-serif-thai font-bold">
          "รสชาติระดับตำนานไม่ควรถูกเก็บไว้แค่ในความทรงจำ แต่มันพร้อมแล้วที่จะถูกสร้างเป็นธุรกิจที่เติบโตอย่างยั่งยืน"
        </h4>
        <p className="text-xs text-cream-200 font-light">
          — นิษฐ์นิภา เกียรติคุณธรรม (ริน) | {candidateInfo.brand}
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="pt-4 flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-2.5 rounded-full bg-cream-200 text-charcoal text-xs hover:bg-cream-300 transition"
        >
          ← กลับสู่ Home
        </button>
        <button
          onClick={() => onNavigate('menu')}
          className="px-6 py-2.5 rounded-full bg-burgundy text-white text-xs hover:bg-burgundy-800 transition shadow-warm"
        >
          กลับไปดู Signature Dishes ทั้งหมด →
        </button>
      </div>

    </div>
  );
}
