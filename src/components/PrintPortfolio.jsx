import React from 'react';
import { QrCode } from 'lucide-react';
import { candidateInfo, signatureDishes, businessConceptData } from '../data/portfolioData';

export default function PrintPortfolio() {
  const { hero, secondary, expansion } = signatureDishes;
  const { headline, targetAudience, valuePropositions, revenueStreams, competitiveEdge } = businessConceptData;

  return (
    <div className="print-only">
      
      {/* PAGE 1: Cover & Heritage Hook */}
      <div className="print-page page-break bg-white text-charcoal">
        <div className="flex justify-between items-center border-b-2 border-burgundy pb-3 mb-6">
          <div>
            <span className="text-xs font-bold text-burgundy uppercase tracking-wider block">
              The Food School Presents
            </span>
            <span className="text-sm font-serif-thai font-bold">
              CHEFPRENEUR COMPETITION 2026 — APPLICATION PORTFOLIO
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm font-serif-thai font-bold text-burgundy">
              {candidateInfo.brand}
            </span>
            <span className="text-[10px] text-gray-500 block">
              {candidateInfo.englishName}
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center my-6 space-y-2">
          <span className="text-xs font-bold text-terracotta tracking-widest uppercase">
            From Family Heritage to Scalable Business
          </span>
          <h1 className="text-2xl font-serif-thai font-bold text-burgundy leading-snug">
            “ชุบชีวิตรสชาติมรดกเปิปพิสดาร สู่จานอาหารที่อบอุ่นเหมือนได้กลับมากินข้าวที่บ้าน”
          </h1>
          <p className="text-xs text-gray-600 max-w-xl mx-auto">
            เมื่อความผูกพันในครัวของคุณแม่ ผสานเข้ากับดีกรีเชฟอาหารไทยมืออาชีพ ทักษะโปรแกรมเมอร์ และความไว้วางใจจากลูกค้า เพื่อสร้างธุรกิจอาหารและ Smart Cooking Kit ที่เติบโตได้จริงในโลกยุคใหม่
          </p>
        </div>

        {/* 2-Photo Visual Bond */}
        <div className="grid grid-cols-2 gap-6 my-6">
          <div className="border border-gray-300 rounded-xl p-4 bg-gray-50 text-center space-y-2">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center p-4">
              <span className="text-xs text-gray-600 font-serif">
                ภาพถ่ายวินเทจ พ.ศ. 2534<br />คุณแม่ในกองถ่ายรายการเปิปพิสดาร
              </span>
            </div>
            <span className="text-xs font-bold text-burgundy block">คุณแม่ — ในฐานะลูกมือเบอร์ 1</span>
            <p className="text-[10px] text-gray-500">
              ผู้ร่วมสร้างตำนานร้านข้าวแกงจีนสวนกวางตุ้ง และผู้ถ่ายทอดรสมือที่แท้จริง
            </p>
          </div>

          <div className="border border-gray-300 rounded-xl p-4 bg-gray-50 text-center space-y-2">
            <div className="aspect-[4/3] bg-burgundy-50 rounded-lg flex items-center justify-center p-4">
              <span className="text-xs text-burgundy font-serif">
                ภาพถ่ายคุณริน<br />ในลุคเชฟทำอาหาร รอยยิ้มอบอุ่น
              </span>
            </div>
            <span className="text-xs font-bold text-burgundy block">ริน — ทายาทผู้สืบทอดสูตร</span>
            <p className="text-[10px] text-gray-500">
              เชฟอาหารไทยมืออาชีพ & นักพัฒนาซอฟต์แวร์ ผู้พร้อมขับเคลื่อน Test Kitchen
            </p>
          </div>
        </div>

        {/* Candidate Profile Box */}
        <div className="border-2 border-burgundy/40 rounded-xl p-5 bg-burgundy-50/40 mt-6">
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
              <span className="font-bold text-burgundy block mb-1">ข้อมูลผู้สมัคร (Candidate Profile):</span>
              <p><strong>ชื่อ-สกุล:</strong> {candidateInfo.name} ({candidateInfo.nickname}) | {candidateInfo.englishName}</p>
              <p><strong>แบรนด์:</strong> {candidateInfo.brand}</p>
              <p><strong>Hero Dish:</strong> {candidateInfo.heroDish}</p>
            </div>
            <div>
              <span className="font-bold text-burgundy block mb-1">3 แกนหลักของตัวตน (3-Pillar Identity):</span>
              <p><strong>1. Heritage Keeper:</strong> ทายาทผู้ถือครองและยกระดับสูตรมรดกจากครัวแม่</p>
              <p><strong>2. Certified Professional:</strong> เชฟอาหารไทยมืออาชีพ & Top 30 ปรุงสุข</p>
              <p><strong>3. Tech & Brand Operator:</strong> นักพัฒนาซอฟต์แวร์ & ผู้ก่อตั้ง {candidateInfo.brand}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-[10px] text-gray-400">
          หน้า 1 จาก 4 — เอกสารประกอบการสมัคร Chefpreneur Competition 2026
        </div>
      </div>

      {/* PAGE 2: Hybrid Skills */}
      <div className="print-page page-break bg-white text-charcoal">
        <div className="flex justify-between items-center border-b-2 border-burgundy pb-3 mb-6">
          <span className="text-sm font-serif-thai font-bold text-burgundy">
            HYBRID SKILLS (ขีดความสามารถแบบไฮบริด 3 มิติ)
          </span>
          <span className="text-[10px] text-gray-500">{candidateInfo.brand} × The Food School</span>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold text-burgundy font-serif-thai">
            ผสานศาสตร์ครัว มาตรฐานเทค และสายสัมพันธ์ลูกค้าจริง
          </h2>
          <p className="text-xs text-gray-600">
            เพราะ Chefpreneur ตัวจริง ไม่ได้มีแค่ฝีมือทำอาหาร แต่ต้องมีระบบหลังบ้านที่แม่นยำ และฐานความไว้วางใจจากผู้บริโภค
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="border border-gray-300 rounded-xl p-3.5 bg-gray-50 text-xs flex flex-col justify-between">
            <div>
              <span className="font-bold text-burgundy block mb-2 text-sm border-b pb-1">
                1. Certified Culinary
              </span>
              <ul className="space-y-2 text-[11px] text-gray-700">
                <li>• <strong>เชฟอาหารไทยมืออาชีพ:</strong> ผ่านมาตรฐานฝีมือแรงงานแห่งชาติ ระดับ 1</li>
                <li>• <strong>Top 30 ปรุงสุข:</strong> สูตรได้รับการตีพิมพ์ในเล่ม Cookbook ปรุงสุข</li>
                <li>• <strong>ABC Cooking Studio:</strong> จบหลักสูตร Basic Bread & Cake</li>
                <li>• <strong>NHK Bento Expo:</strong> นำเสนอข้าวกล่องออกอากาศช่อง NHK World ญี่ปุ่น</li>
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t text-[10px] text-gray-500 font-medium">
              มาตรฐานสุขอนามัยและรสชาติคงที่
            </div>
          </div>

          <div className="border-2 border-burgundy/40 rounded-xl p-3.5 bg-burgundy-50/30 text-xs flex flex-col justify-between">
            <div>
              <span className="font-bold text-burgundy block mb-2 text-sm border-b border-burgundy/20 pb-1">
                2. Software Architecture
              </span>
              <ul className="space-y-2 text-[11px] text-gray-700">
                <li>• <strong>Junior Software Developer:</strong> สำเร็จหลักสูตร Full-stack</li>
                <li>• <strong>Cooking Kits Platform:</strong> ออกแบบระบบจำลอง E-commerce วัตถุดิบ 4 ภาค</li>
                <li>• <strong>Food Business Logic:</strong> ควบคุมสต็อกและลด Waste ในครัวอย่างแม่นยำ</li>
                <li>• <strong>Scaleable Architecture:</strong> พร้อมเชื่อมโยงหน้าร้านกับเดลิเวอรี่</li>
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t border-burgundy/20 text-[10px] text-burgundy font-medium">
              ระบบแม่นยำและสเกลได้จริง
            </div>
          </div>

          <div className="border border-gray-300 rounded-xl p-3.5 bg-gray-50 text-xs flex flex-col justify-between">
            <div>
              <span className="font-bold text-burgundy block mb-2 text-sm border-b pb-1">
                3. Proven Trust
              </span>
              <ul className="space-y-2 text-[11px] text-gray-700">
                <li>• <strong>Organic Community:</strong> เพจไดอารี่ที่มีผู้ติดตามเหนียวแน่น</li>
                <li>• <strong>Proven Track Record:</strong> เปิดขายปีใหม่ 1 เดือน/ปี เค้ก 20 คุกกี้ 40 ออเดอร์</li>
                <li>• <strong>High Retention:</strong> ลูกค้าเก่ากลับมาสั่งซื้อซ้ำ 85%+ ด้วยความไว้ใจ</li>
                <li>• <strong>Scaling Potential:</strong> พร้อมขยายความไว้วางใจนี้สู่ร้านอาหารจริง</li>
              </ul>
            </div>
            <div className="mt-3 pt-2 border-t text-[10px] text-gray-500 font-medium">
              มีฐานลูกค้ารอสนับสนุนหน้าร้าน
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gray-100 border-l-4 border-burgundy my-6 text-xs text-gray-700">
          <strong className="text-burgundy block mb-1">Bottom Callout:</strong>
          "รินพร้อมแล้วที่จะนำความเป๊ะทั้ง 3 ด้านนี้ มาชุบชีวิตแกงกะหรี่จีนสูตรมรดก ให้กลายเป็นธุรกิจที่เติบโตได้จริงที่ The Food School Test Kitchen"
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-[10px] text-gray-400">
          หน้า 2 จาก 4 — เอกสารประกอบการสมัคร Chefpreneur Competition 2026
        </div>
      </div>

      {/* PAGE 3: Signature Dishes (Hero Dish Largest) */}
      <div className="print-page page-break bg-white text-charcoal">
        <div className="flex justify-between items-center border-b-2 border-burgundy pb-3 mb-6">
          <span className="text-sm font-serif-thai font-bold text-burgundy">
            SIGNATURE DISHES & MENU ECOSYSTEM
          </span>
          <span className="text-[10px] text-gray-500">{candidateInfo.brand} Signature</span>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold text-burgundy font-serif-thai">
            แกงกะหรี่จีนสูตรมรดก (Hero Dish) และระบบนิเวศความอร่อย
          </h2>
          <p className="text-xs text-gray-600">
            รสชาติดั้งเดิมจากครัวคุณแม่ ชูเป็นเมนูหลักประจำร้าน เสริมด้วยเมนูอบอุ่น และต่อยอดเป็นชุดทำเองที่บ้าน
          </p>
        </div>

        {/* Hero Dish Feature (Largest) */}
        <div className="border-2 border-burgundy rounded-xl p-5 bg-burgundy-50/40 my-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-[10px] font-bold bg-burgundy text-white px-2.5 py-0.5 rounded-full uppercase">
                HERO DISH (เมนูหลักอันดับ 1)
              </span>
              <h3 className="text-lg font-bold text-burgundy font-serif-thai mt-1">
                {hero.title} ({hero.englishTitle})
              </h3>
            </div>
            <span className="text-sm font-mono font-bold text-burgundy">{hero.price}</span>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed mb-2">
            <strong>เอกลักษณ์เฉพาะ:</strong> รสชาติเผ็ด เค็ม มันนัว จากเครื่องเทศไทยที่ปรับโดยคนจีน เคี่ยวจนกลมกล่อม เสิร์ฟคู่กุนเชียงทอด แตงกวา และพริกชี้ฟ้า ถอดสูตรมาตรฐานเชฟเพื่อให้รสชาติคงที่ทุกจาน
          </p>
          <div className="text-[11px] text-burgundy font-medium bg-white p-2.5 rounded-lg border border-burgundy/20">
            {hero.highlight}
          </div>
        </div>

        {/* 2 Secondary Dishes + 1 Expansion */}
        <div className="grid grid-cols-3 gap-3 my-4">
          <div className="border border-gray-300 rounded-xl p-3 bg-gray-50 text-xs">
            <span className="text-[10px] font-bold text-burgundy block mb-1">เมนูรอง #01</span>
            <strong className="block text-charcoal">{secondary[0].title}</strong>
            <p className="text-[11px] text-gray-600 mt-1">{secondary[0].desc}</p>
          </div>
          <div className="border border-gray-300 rounded-xl p-3 bg-gray-50 text-xs">
            <span className="text-[10px] font-bold text-burgundy block mb-1">เมนูรอง #02</span>
            <strong className="block text-charcoal">{secondary[1].title}</strong>
            <p className="text-[11px] text-gray-600 mt-1">{secondary[1].desc}</p>
          </div>
          <div className="border-2 border-indigo-200 rounded-xl p-3 bg-indigo-50/40 text-xs">
            <span className="text-[10px] font-bold text-indigo-800 block mb-1">ส่วนต่อยอด</span>
            <strong className="block text-charcoal">{expansion.title}</strong>
            <p className="text-[11px] text-gray-600 mt-1">{expansion.desc}</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-[10px] text-gray-400">
          หน้า 3 จาก 4 — เอกสารประกอบการสมัคร Chefpreneur Competition 2026
        </div>
      </div>

      {/* PAGE 4: Business Concept & Model */}
      <div className="print-page bg-white text-charcoal">
        <div className="flex justify-between items-center border-b-2 border-burgundy pb-3 mb-6">
          <span className="text-sm font-serif-thai font-bold text-burgundy">
            BUSINESS CONCEPT & BUSINESS MODEL
          </span>
          <span className="text-[10px] text-gray-500">Modern Heritage Platform</span>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold text-burgundy font-serif-thai">
            {headline}
          </h2>
          <p className="text-xs text-gray-600">
            โมเดลธุรกิจอาหารแบบ Hybrid ผสานการรับประทานที่ร้าน เข้ากับชุดทำอาหารสำเร็จรูป Ready-to-Cook เพื่อการสเกล
          </p>
        </div>

        {/* Target Audience */}
        <div className="border border-gray-300 rounded-xl p-3.5 bg-gray-50 text-xs mb-3">
          <strong className="text-burgundy block mb-1">กลุ่มเป้าหมาย (Target Audience):</strong>
          <ul className="space-y-1 text-[11px] text-gray-700">
            {targetAudience.map((t, idx) => (
              <li key={idx}>• <strong>{t.group}:</strong> {t.need}</li>
            ))}
          </ul>
        </div>

        {/* Revenue Streams */}
        <div className="border border-gray-300 rounded-xl p-3.5 bg-white text-xs mb-3 space-y-2">
          <strong className="text-burgundy block">โมเดลรายได้ (Hybrid Revenue Streams):</strong>
          <div className="grid grid-cols-3 gap-2 text-[10px] text-gray-700">
            {revenueStreams.map((r, idx) => (
              <div key={idx} className="p-2 bg-gray-50 rounded border">
                <strong className="text-charcoal block">{r.title}</strong>
                <p className="mt-0.5">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Manifesto & QR Placeholder */}
        <div className="border-2 border-burgundy rounded-xl p-5 bg-burgundy text-white my-4 flex justify-between items-center">
          <div className="space-y-1 max-w-md">
            <p className="text-xs font-serif-thai italic leading-relaxed">
              "รสชาติระดับตำนานไม่ควรถูกเก็บไว้แค่ในความทรงจำ แต่มันพร้อมแล้วที่จะถูกสร้างเป็นธุรกิจที่เติบโตอย่างยั่งยืน... ในมือของ Chefpreneur คนนี้"
            </p>
            <span className="text-[11px] text-cream-200 font-bold block pt-1">
              {candidateInfo.name} ({candidateInfo.nickname}) | {candidateInfo.brand}
            </span>
          </div>
          <div className="w-20 h-20 bg-white rounded-lg p-1 text-center shrink-0 flex flex-col items-center justify-center text-charcoal">
            <QrCode className="w-12 h-12 text-burgundy" />
            <span className="text-[8px] font-sans font-bold mt-0.5">SCAN WEB</span>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-[10px] text-gray-400">
          หน้า 4 จาก 4 — เอกสารประกอบการสมัคร Chefpreneur Competition 2026
        </div>
      </div>

    </div>
  );
}
