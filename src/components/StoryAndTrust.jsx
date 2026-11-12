import React from 'react';
import { Gift, Repeat, Target } from 'lucide-react';

export default function StoryAndTrust() {
  return (
    <section id="story-trust" className="py-16 bg-cream-50 border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-cream-200 shadow-soft">
          <div className="text-center space-y-3 mb-8">
            <span className="font-handwriting text-2xl text-terracotta">จากไดอารี่ สู่สนามจริง</span>
            <h2 className="text-2xl sm:text-3xl font-serif-thai font-bold text-burgundy">
              เพจ The Ringredients กับการพิสูจน์ "ความไว้วางใจที่วัดผลได้"
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-xs sm:text-sm text-charcoal-light leading-relaxed font-light">
              <p>
                เพจ <strong className="text-charcoal font-medium">The Ringredients</strong> เริ่มต้นจากความตั้งใจเรียบง่าย: เป็นพื้นที่บันทึกไดอารี่การทำอาหาร รีวิวร้านอาหาร และส่งต่อสิ่งที่ได้เรียนรู้จากครัว แม้จะมีผู้ติดตามเพียงหลักร้อย แต่ทุกบทสนทนาคือความสัมพันธ์ที่จริงใจ
              </p>
              <p>
                ทุกช่วงเทศกาลปีใหม่ ฉันจะเปิดรับทำขนมโฮมเมดเพียง 1 เดือนต่อปี มียอดสั่งเค้กประมาณ 20 ออเดอร์ และคุกกี้ประมาณ 40 ออเดอร์ สิ่งที่น่าภูมิใจที่สุดไม่ใช่ตัวเลขที่หวือหวา แต่คือการที่ <strong className="text-burgundy font-medium">"ลูกค้าคนเดิมกลับมาซื้อซ้ำต่อเนื่องทุกปี"</strong>
              </p>
              <div className="p-4 rounded-xl bg-cream-100 border border-cream-200">
                <span className="font-handwriting text-lg text-burgundy block">
                  "ถ้าเขาเชื่อใจในความสะอาดและรสมือเราในขนมปีใหม่... เขาจะยิ่งเชื่อมั่นในแกงกะหรี่จีนสูตรคุณแม่บนโต๊ะอาหารจริง"
                </span>
              </div>
            </div>

            {/* Trust Metric Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-cream-50 border border-cream-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-charcoal-light uppercase block">Annual New Year Orders</span>
                  <span className="text-2xl font-bold text-burgundy">60+ ออเดอร์ / ปี</span>
                  <span className="text-[11px] text-terracotta block">เค้ก 20 กล่อง + คุกกี้ 40 กล่อง (ทำคนเดียว)</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-burgundy-50 text-burgundy flex items-center justify-center">
                  <Gift className="w-6 h-6" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-cream-50 border border-cream-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-charcoal-light uppercase block">Repeat Purchase Rate</span>
                  <span className="text-2xl font-bold text-burgundy">85%+ ซื้อซ้ำ</span>
                  <span className="text-[11px] text-terracotta block">ลูกค้าติดตามตั้งแต่สมัยเริ่มเขียนไดอารี่</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-burgundy-50 text-burgundy flex items-center justify-center">
                  <Repeat className="w-6 h-6" />
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-burgundy text-white flex items-center justify-between">
                <div>
                  <span className="text-xs text-cream-200 uppercase block">The Mission Ahead</span>
                  <span className="text-lg font-bold block">The Food School Test Kitchen</span>
                  <span className="text-[11px] text-cream-200">เปลี่ยนความไว้ใจ สู่ร้านอาหารและสินค้าที่สเกลได้</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 text-cream-100 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
