import React from 'react';
import { Camera } from 'lucide-react';

export default function HeritageStory() {
  return (
    <section id="heritage" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Vintage Photo Memory Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-cream-200 shadow-soft relative">
              
              <div className="aspect-[4/3] rounded-2xl bg-[#3D2C29] p-6 text-cream-100 flex flex-col justify-between relative overflow-hidden border border-wood/40">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-burgundy/80 text-[10px] text-white tracking-widest uppercase">
                    Archival Record
                  </span>
                  <span className="text-xs font-serif text-warmgold">พ.ศ. 2534</span>
                </div>

                <div className="relative z-10 text-center space-y-3 my-auto">
                  <div className="w-14 h-14 mx-auto rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Camera className="w-6 h-6 text-warmgold" />
                  </div>
                  <h4 className="font-serif-thai text-xl font-bold text-cream-50">
                    คุณแม่ — ลูกมือเบอร์ 1<br />ของร้านข้าวแกงจีนสวนกวางตุ้ง
                  </h4>
                  <p className="text-xs text-cream-200/80 font-light max-w-xs mx-auto">
                    ภาพถ่ายความทรงจำหลังเวทีกองถ่ายรายการเปิปพิสดาร ยืนเคียงข้างคุณดวงตา ตุงคะมณี ในยุคที่รสชาติของร้านโด่งดังที่สุด
                  </p>
                </div>

                <div className="relative z-10 text-[10px] text-cream-300/70 border-t border-white/15 pt-2 flex justify-between">
                  <span>ออกรายการอร่อยบาทเดียว</span>
                  <span>ลงหนังสือพิมพ์หลายฉบับ</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-cream-200 text-center">
                <p className="font-handwriting text-lg text-burgundy">
                  “ร้านปิดตัวลงในวันที่แม่แต่งงาน... แต่ความทรงจำและรสมือยังอยู่ในใจเสมอ”
                </p>
              </div>

            </div>
          </div>

          {/* Right: Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="font-handwriting text-2xl text-terracotta">เรื่องเล่าเบื้องหลังรสชาติ</span>
              <h2 className="text-3xl font-serif-thai font-bold text-burgundy leading-snug">
                วันที่ร้านปิดตัวลง คือวันที่ตำนานถูกฝากไว้ในรสมือของคุณแม่
              </h2>
            </div>

            <div className="prose prose-sm text-charcoal-light space-y-4 leading-relaxed font-light">
              <p>
                ย้อนกลับไปในปี พ.ศ. 2534 ร้าน <strong className="text-charcoal font-medium">"ข้าวแกงจีนสวนกวางตุ้ง"</strong> คือหนึ่งในร้านอาหารที่เคยสร้างปรากฏการณ์ ได้รับรางวัลเปิปพิสดาร ออกรายการโทรทัศน์ และมีข่าวลงหนังสือพิมพ์มากมาย ในเวลานั้น คนที่ยืนเคี่ยวหม้อแกง ปรุงวัตถุดิบ และเป็นลูกมือเบอร์ 1 ตัวจริงของอากง ก็คือ <strong className="text-burgundy font-medium">"แม่ของฉัน"</strong>
              </p>
              <p>
                วันที่แม่แต่งงาน ร้านถูกปิดตัวลงอย่างถาวรเพราะไม่มีใครช่วยทำต่อ ป้ายรางวัลและชื่อร้านในอดีตอาจกลายเป็นเรื่องที่ถูกส่งต่อและผูกขาดอยู่กับความขัดแย้งในหมู่ญาติ แต่สิ่งหนึ่งที่ไม่เคยมีใครพรากไปได้ คือ <strong className="text-charcoal font-medium">"รสมือและจิตวิญญาณแห่งการปรุง"</strong> ที่แม่ได้ถ่ายทอดลงในทุกจานอาหารที่ทำให้ฉันกินตั้งแต่เด็ก
              </p>
              <div className="p-5 rounded-2xl bg-burgundy-50 border-l-4 border-burgundy text-burgundy-900 text-sm">
                <strong className="block font-medium mb-1">ทำไมต้องเป็น The Ringredients วันนี้?</strong>
                ฉันไม่ต้องการทวงคืนชื่อเก่าในอดีต เพราะชื่อเป็นเพียงสมมติ แต่รสชาติที่สร้างความสุขให้ผู้คนคือของจริง ฉันตั้งใจชุบชีวิตแกงกะหรี่จีนสูตรมรดกนี้ขึ้นมาใหม่ ด้วยความรู้เชฟอาหารไทยมืออาชีพ และระบบธุรกิจที่โปร่งใส ยั่งยืน ในนามของ <em>The Ringredients</em>
              </div>
            </div>

            {/* Timeline Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3 bg-white rounded-xl border border-cream-200 text-xs shadow-card">
                <span className="font-bold text-burgundy block mb-1">พ.ศ. 2534 (ปิดร้าน)</span>
                <span>ร้านข้าวแกงจีนสวนกวางตุ้งปิดตัวลง แม่แยกมาสร้างครอบครัว</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-cream-200 text-xs shadow-card">
                <span className="font-bold text-burgundy block mb-1">การบ่มเพาะฝีมือ</span>
                <span>เรียนรู้รสมือจากแม่ + ประกาศนียบัตรเชฟอาหารไทยมืออาชีพ</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-cream-200 text-xs shadow-card">
                <span className="font-bold text-burgundy block mb-1">2026 Test Kitchen</span>
                <span>พาแกงกะหรี่จีนในตำนาน กลับมามีชีวิตอีกครั้งที่ The Food School</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
