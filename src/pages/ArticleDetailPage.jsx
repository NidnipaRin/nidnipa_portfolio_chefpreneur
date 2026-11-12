import React from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { editorialArticles, candidateInfo } from '../data/portfolioData';

export default function ArticleDetailPage({ articleId, onBack, onNavigate }) {
  const article = editorialArticles.find((a) => a.id === articleId) || editorialArticles[0];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
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
          {candidateInfo.brand} • {article.category}
        </span>
      </div>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-terracotta">
          <span className="px-3 py-1 rounded-full bg-burgundy-50 text-burgundy font-medium text-[11px]">
            {article.tag}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif-thai font-bold text-burgundy leading-snug">
          {article.title}
        </h1>

        <p className="text-base text-charcoal-light leading-relaxed font-light">
          {article.excerpt}
        </p>
      </div>

      {/* Featured Header Card */}
      <div className={`aspect-[16/9] rounded-3xl bg-gradient-to-br ${article.gradient} p-8 text-cream-100 flex flex-col justify-between shadow-soft border border-wood/30 relative overflow-hidden`}>
        <div className="flex justify-between items-start">
          <span className="text-[10px] bg-white/20 px-3 py-1 rounded-full backdrop-blur-md uppercase tracking-wider">
            {candidateInfo.brand} Special Feature
          </span>
          <span className="text-xs font-serif text-warmgold">{article.badgeText}</span>
        </div>

        <div className="my-auto text-center space-y-2">
          <span className="font-handwriting text-3xl text-warmgold">
            ความผูกพัน • คุณภาพ • ความจริงใจ
          </span>
          <h3 className="text-xl sm:text-2xl font-serif-thai font-bold text-white">
            {article.title}
          </h3>
        </div>

        <div className="text-[11px] text-cream-200/80 flex justify-between border-t border-white/20 pt-3">
          <span>โดย นิษฐ์นิภา เกียรติคุณธรรม</span>
          <span>Chefpreneur Competition 2026</span>
        </div>
      </div>

      {/* Article Body Content */}
      <div className="prose prose-sm text-charcoal-light leading-relaxed space-y-5 text-xs sm:text-sm font-light">
        {article.id === 'article-mother-1991' && (
          <>
            <p>
              กลิ่นหอมของเครื่องเทศที่ลอยคลุ้งอยู่ในครัวตอนเช้า คือความทรงจำแรกในชีวิตที่ฉันจำความได้ ร้าน <strong>"ข้าวแกงจีนสวนกวางตุ้ง"</strong> คือจุดเริ่มต้นของทุกอย่าง ร้านอาหารที่เคยได้รับรางวัลเปิปพิสดาร ได้ออกรายการโทรทัศน์อร่อยบาทเดียว และมีข่าวตัดแปะลงหนังสือพิมพ์มากมาย
            </p>
            <p>
              แต่คนที่อยู่เบื้องหลังกระทะใบใหญ่และหม้อเคี่ยวใบโต คือคุณแม่ของฉัน ผู้เป็นลูกมือเบอร์ 1 คนสุดท้ายของอากง วันที่แม่แต่งงานในปี พ.ศ. 2534 ร้านจำเป็นต้องปิดตัวลงเพราะอากงไม่มีคนช่วยทำต่อ ทรัพย์สินและป้ายรางวัลถูกเก็บไว้ในความทรงจำและความขัดแย้งของญาติพี่น้อง
            </p>
            <div className="p-4 rounded-2xl bg-cream-100 border-l-4 border-burgundy text-burgundy font-serif-thai">
              "แม่ไม่เคยเสียใจที่ร้านปิด แต่แม่บอกเสมอว่า ถ้าวันไหนรินพร้อม... จงนำรสชาตินี้กลับมาทำให้คนที่รักกินอีกครั้ง"
            </div>
            <p>
              วันนี้ ฉันจึงขอพารสชาตินี้กลับมา ไม่ใช่เพื่ออ้างสิทธิ์หรือชื่อร้านเก่า แต่เพื่อส่งต่อรสชาติที่มีชีวิตจริงๆ ในชื่อของ <strong>{candidateInfo.brand}</strong>
            </p>
          </>
        )}

        {article.id === 'article-tech-chef' && (
          <>
            <p>
              หลายคนมักมองว่าศาสตร์ของครัวและศาสตร์ของโค้ดคอมพิวเตอร์เป็นสองขั้วที่ไม่มีวันบรรจบกัน แต่สำหรับฉัน การเขียนโค้ดและการทำอาหารคือสิ่งเดียวกัน: <strong>"มันคือการสร้างสรรค์สิ่งที่มีโครงสร้าง เพื่อส่งมอบประสบการณ์ที่ดีที่สุดให้ผู้ใช้"</strong>
            </p>
            <p>
              ในฐานะ Junior Software Developer ที่ผ่านหลักสูตร Full-stack ฉันมองการเคี่ยวแกงกะหรี่จีนเหมือนกับ Algorithm ที่ต้องมีขั้นตอน (Steps) ที่ชัดเจน วัดอุณหภูมิได้ และคำนวณต้นทุนต่อหน่วย (Unit Cost) ได้อย่างแม่นยำ
            </p>
            <div className="p-4 rounded-2xl bg-burgundy-50 border-l-4 border-burgundy text-burgundy font-serif-thai">
              "เชฟที่ดีทำให้คนประทับใจ... แต่วิศวกรที่ดีทำให้ธุรกิจเติบโตได้อย่างยั่งยืนและมีระบบ"
            </div>
            <p>
              ด้วยเหตุนี้ ฉันจึงพัฒนาเครื่องมือคำนวณต้นทุนอาหารอัตโนมัติ และสถาปัตยกรรม Smart Cooking Kit เพื่อให้มั่นใจว่าเมื่อเราก้าวเข้าสู่ Test Kitchen at The Food School เราจะบริหารงานได้อย่างมืออาชีพตั้งแต่วันแรก
            </p>
          </>
        )}

        {article.id === 'article-testkitchen-plan' && (
          <>
            <p>
              เวที <strong>Chefpreneur Competition 2026</strong> มอบโอกาสที่ยิ่งใหญ่ที่สุด นั่นคือเส้นทาง 9 เดือนที่แบ่งเป็น 6 เดือนแห่งการบ่มเพาะทักษะเชฟ และ 3 เดือนแห่งการเปิดดำเนินธุรกิจจริงที่ Test Kitchen at The Food School
            </p>
            <p>
              แผน 3 เดือนของฉันถูกวางไว้อย่างเป็นระบบ: เริ่มต้นจากเดือนที่ 1 ในการทดสอบรสชาติกับกลุ่มลูกค้า Dine-in หน้าร้าน, เดือนที่ 2 ในการควบคุมต้นทุนและทำ Pre-order ชุด Cooking Kit, และเดือนที่ 3 ในการเชื่อมต่อระบบสั่งซื้อออนไลน์แบบ Omnichannel
            </p>
            <div className="p-4 rounded-2xl bg-cream-100 border-l-4 border-burgundy text-burgundy font-serif-thai">
              "เพราะเป้าหมายสูงสุดไม่ใช่แค่ชนะการแข่งขัน แต่คือการสร้างแบรนด์อาหารที่เติบโตได้จริงในโลกธุรกิจ"
            </div>
            <p>
              ฉันพร้อมแล้วที่จะทุ่มเททั้งทักษะเชฟอาหารไทยมืออาชีพ และระบบเทคโนโลยี เพื่อพิสูจน์บทบาท Chefpreneur คนต่อไป
            </p>
          </>
        )}
      </div>

      {/* Article Footer & Navigation */}
      <div className="pt-8 border-t border-cream-200 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="px-6 py-2.5 rounded-full bg-cream-200 text-charcoal text-xs hover:bg-cream-300 transition"
        >
          ← กลับสู่ Home
        </button>

        <button
          onClick={() => onNavigate('heritage')}
          className="px-6 py-2.5 rounded-full bg-burgundy text-white text-xs hover:bg-burgundy-800 transition shadow-warm"
        >
          ดู Our Heritage ทั้งหมด →
        </button>
      </div>

    </div>
  );
}
