import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Award,
  Sparkles,
  BookOpen,
  Code,
  Heart,
  Quote,
  Play,
  X,
  Maximize2,
  CheckCircle2,
  Laptop,
  Layers,
  ShoppingBag,
  Tv,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { candidateInfo } from "../data/portfolioData";

export default function HybridEdgePage({ onBack, onNavigate }) {
  // State for Interactive Certificate Stack
  const [activeCert, setActiveCert] = useState(0);

  // State for Browser Showcase Tabs: 'customer' | 'admin'
  const [browserTab, setBrowserTab] = useState("customer");

  // State for Video Modal (NHK World Broadcast)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // State for Image Lightbox (viewing any image in full size)
  const [lightboxImg, setLightboxImg] = useState(null);

  // Certificate Data
  const certificates = [
    {
      id: "culinary",
      badgeNum: "01.",
      label: "Culinary Master",
      title: "เชฟอาหารไทยมืออาชีพ (Master Thai Chef)",
      issuer: "THACCA & กรมส่งเสริมอุตสาหกรรม (DIPROM)",
      year: "2567",
      desc: "ผ่านการอบรมโครงการ OFOS (THACCA) เข้าใจลึกซึ้งถึงธรรมชาติของเครื่องเทศ การเคี่ยวน้ำแกง และมาตรฐานสุขอนามัยในครัวมืออาชีพ พร้อมผสานศาสตร์เค้กและขนมปังจาก ABC Cooking Studio ที่ช่วยฝึกความเป๊ะในการชั่งตวงอัตราส่วนอย่างแม่นยำ",
      image: "/images/hybrid/cert_thai_chef.jpg",
      tagColor: "bg-[#9B1D30]/15 text-[#9B1D30] border-[#9B1D30]/30",
    },
    {
      id: "cake",
      badgeNum: "02.",
      label: "Cake & Pastry",
      title: "Basic 18 Lessons Cake Course",
      issuer: "ABC Cooking Studio Thailand & Worldwide",
      year: "2024",
      desc: "มาตรฐานการทำขนมเค้ก เบเกอรี่ และพาสทรีระดับสากลจากสตูดิโอสอนทำอาหารชั้นนำของญี่ปุ่น เข้าใจโครงสร้างเคมีของแป้ง น้ำตาล และเนยอย่างลึกซึ้ง",
      image: "/images/hybrid/cert_cake.jpg",
      tagColor: "bg-[#8FA882]/20 text-[#738C66] border-[#8FA882]/40",
    },
    {
      id: "bread",
      badgeNum: "03.",
      label: "Artisan Bread",
      title: "Basic 24 Lessons Bread Course",
      issuer: "ABC Cooking Studio Thailand & Worldwide",
      year: "2024",
      desc: "หลักสูตรการนวด หมัก และอบขนมปังโฮมเมดสไตล์ญี่ปุ่น 24 รูปแบบ ทั้งขนมปังเนื้อนุ่ม ขนมปังธัญพืชเพื่อสุขภาพ และขนมปังขึ้นรูปเชิงช่างฝีมือ",
      image: "/images/hybrid/cert_bread.jpg",
      tagColor: "bg-[#9B1D30]/15 text-[#9B1D30] border-[#9B1D30]/30",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5E1] text-[#4A3F35] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative selection:bg-[#EFE2C6] selection:text-[#9B1D30]">
      {/* Container with Magazine Editorial Max-width */}
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-24">
        {/* ========================================================
            TOP BREADCRUMB
            ======================================================== */}
        <div className="flex items-center justify-between border-b border-[#4A3F35]/10 pb-4">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-xs font-medium text-[#4A3F35] hover:text-[#9B1D30] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#786E64] group-hover:-translate-x-0.5 transition-transform" />
            <span>กลับสู่ Home</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="stamp-badge">
              From Kitchen to Code & Community
            </span>
          </div>
        </div>


          {/* ========================================================
              PAGE HERO TITLE: CHEF-DEVELOPER'S SCRAPBOOK
              ======================================================== */}
          <Reveal>
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#9B1D30] font-semibold block">
              MY PROFILE, EXPERIENCE & CULINARY JOURNEY
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-serif-thai font-bold text-[#4A3F35] leading-[1.8] sm:leading-[1.85] lg:leading-[1.9] space-y-2 sm:space-y-3">
              <span className="block">บันทึกประสบการณ์และทักษะรอบด้าน...</span>
              <span className="block">ที่หล่อหลอมตัวตนของฉันในวันนี้</span>
            </h1>
            <div className="flex items-center justify-center gap-3 text-[#9B1D30]/40 py-1">
              <span className="h-px w-10 bg-[#9B1D30]/20"></span>
              <span className="text-xs">✧</span>
              <span className="h-px w-10 bg-[#9B1D30]/20"></span>
            </div>
            <p className="text-sm sm:text-base text-[#786E64] font-light leading-relaxed max-w-2xl mx-auto">
              รวบรวมทุกก้าวของการเรียนรู้และลงมือทำจริง—ตั้งแต่พื้นฐานการเรียนเชฟ รางวัลจากเวทีการแข่งขัน การฝึกคิดวางระบบอีคอมเมิร์ซ ไปจนถึงการทำเพจและเปิดรับออเดอร์จริง เพื่อเป็นรากฐานสำคัญในการก้าวสู่ Chefpreneur
            </p>
          </div>
        </Reveal>

{/* ----------------------------------------------------
    NEW SECTION: BACKGROUND IMAGE + INFO BOX
---------------------------------------------------- */}
<section className="mt-12 mb-12">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
    <div className="lg:col-span-5">
      <img src="/images/my_background.png" alt="Portrait" className="w-full max-w-[500px] object-cover" />
    </div>
    <div className="lg:col-span-7 relative">
      <div className="bg-[#F7ECD4]/85 rounded-3xl p-6 sm:p-8 border border-[#EFE2C6] shadow-xs transform -rotate-1">
        <div className="absolute -top-3.5 left-6 bg-[#9B1D30]/15 border border-[#9B1D30]/30 backdrop-blur-xs px-3 py-1 rounded-sm text-[11px] font-mono tracking-wider font-semibold text-[#800020] shadow-2xs rotate-[-2deg]">
          MY BACKGROUND &amp; 100% READINESS
        </div>
        <h3 className="text-lg sm:text-xl font-serif-thai font-bold text-[#4A3F35] leading-[1.8] sm:leading-[1.85] mb-3">
          จากนักออกแบบเครื่องประดับระดับ Luxury... สู่วันที่เป็น "คุณแม่" และพร้อมทุ่มเท 100% บนเส้นทางอาหาร
        </h3>
        <p className="text-sm text-[#786E64] leading-relaxed">
          ฉันไม่ได้จบสายอาหารมาโดยตรง แต่เริ่มต้นอาชีพในฐานะ Luxury Jewelry Designer ที่ดูแลและวาดแบบเครื่องประดับมูลค่าหลักหมื่นถึงหลักล้านบาท ประสบการณ์นั้นหล่อหลอมให้ฉันใส่ใจในรายละเอียดขั้นสุด เข้าใจศิลปะการจัดวาง และรู้วิธีสร้างมูลค่าเพิ่มให้สินค้า โดยในระหว่างที่ทำงานประจำ ฉันได้ใช้เวลาว่างไปกับการเติมเต็มความสุขที่ฉันรัก นั่นคือการไปเรียนทำเค้กและขนมปังอย่างจริงจัง
          จนเมื่อก้าวเข้าสู่บทบาทของ "การเป็นคุณแม่" และปรับรูปแบบงานมาเป็นฟรีแลนซ์ ฉันยิ่งเข้าใจคุณค่าของมื้ออาหารที่แม่ทำให้กิน จึงตัดสินใจเดินหน้าต่อยอดความฝันอย่างเต็มตัว ทั้งการไปเรียนหลักสูตรเชฟอาหารไทยเพิ่มเติม และการเรียนรู้ระบบอีคอมเมิร์ซ วันนี้ฉันมีความพร้อมด้านเวลา 100% ที่จะทุ่มเทให้กับโปรแกรม 9 เดือนของ The Food School เพื่อเจียระไนแกงกะหรี่จีนรสมือแม่ ให้กลายเป็นแบรนด์ใหม่ที่งดงามและแข็งแกร่งที่สุด
        </p>
      </div>
    </div>
  </div>
</section>


        {/* ========================================================
            SECTION 1: CULINARY MASTERY & GLOBAL SPOTLIGHT
            ความเชี่ยวชาญด้านอาหารและรางวัลระดับสากล
            ======================================================== */}
        <section className="space-y-16 pt-4">
          {/* Section Header */}
          <Reveal>
            <div className="space-y-2 border-b border-[#4A3F35]/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-serif text-3xl font-light text-[#9B1D30]/50">
                  01.
                </span>
                <span className="stamp-badge">Part One • Culinary Mastery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed">
                พื้นฐานครัวไทย ความแม่นยำ และรางวัลความภูมิใจ
              </h2>
              <p className="text-xs sm:text-sm text-[#786E64] font-light">
                ผสานความเข้าใจในรากเหง้าอาหารไทย เข้ากับวินัยการชั่งตวงระดับกรัมจากเบเกอรี่ เพื่อเปลี่ยนสูตรกะด้วยสายตาของแม่ ให้เป็นมาตรฐานใหม่ที่นิ่งเป๊ะทุกชาม
              </p>
            </div>
          </Reveal>

          {/* ----------------------------------------------------
              BLOCK 1.1: CHEF PORTRAIT (LEFT) & THE TRILOGY OF MASTERY (RIGHT)
              ภาพเชฟเด่นชัดด้านซ้าย นอกกล่องส้ม (ขนาดใหญ่เท่ากล่องส้ม + เอียงดุ๊กดิ๊ก + ดาววิบวับ)
              ---------------------------------------------------- */}
          <div className="flex justify-center">


            {/* Right Column: Warm Orange/Butter Box with 3 Certificates */}
            <div className="max-w-3xl w-full mx-auto">
              <div className="bg-[#F7ECD4]/85 rounded-3xl p-5 sm:p-7 border border-[#EFE2C6] shadow-xs space-y-4">
                <Reveal direction="left">
                  {/* Header & Carousel Controller */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#4A3F35]/10">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="stamp-badge">TRILOGY OF MASTERY</span>
                        <span className="text-[11px] font-mono text-[#9B1D30] font-semibold">
                          3 Disciplines
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif-thai font-bold text-[#4A3F35]">
                        3 พื้นฐานสำคัญ (อาหารไทย • เค้ก • ขนมปัง)
                      </h3>
                    </div>

                    {/* Step Arrows */}
                    <div className="flex items-center gap-1.5 self-start sm:self-auto">
                      <button
                        onClick={() =>
                          setActiveCert((prev) =>
                            prev === 0 ? certificates.length - 1 : prev - 1,
                          )
                        }
                        className="w-8 h-8 rounded-full bg-white hover:bg-[#EFE2C6] text-[#4A3F35] border border-[#EFE2C6] flex items-center justify-center transition shadow-2xs cursor-pointer"
                        title="ใบก่อนหน้า"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-mono text-[#786E64] px-1 font-semibold">
                        0{activeCert + 1} / 03
                      </span>
                      <button
                        onClick={() =>
                          setActiveCert((prev) =>
                            prev === certificates.length - 1 ? 0 : prev + 1,
                          )
                        }
                        className="w-8 h-8 rounded-full bg-white hover:bg-[#EFE2C6] text-[#4A3F35] border border-[#EFE2C6] flex items-center justify-center transition shadow-2xs cursor-pointer"
                        title="ใบถัดไป"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 3 Tabs Pill Bar (Always clearly shows all 3 certificates) */}
                  <div className="flex flex-wrap gap-2">
                    {certificates.map((cert, idx) => (
                      <button
                        key={cert.id}
                        onClick={() => setActiveCert(idx)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                          activeCert === idx
                            ? "bg-[#9B1D30] text-white shadow-xs font-semibold"
                            : "bg-white/80 text-[#786E64] hover:bg-white border border-[#EFE2C6]"
                        }`}
                      >
                        <span className="font-serif font-light">
                          {cert.badgeNum}
                        </span>
                        <span>{cert.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Desktop: Horizontal Fanned-out Accordion Spread (พัดคลี่แบบกึ่งซ้อน) */}
                  <div className="hidden sm:flex gap-3 h-[260px] pt-1">
                    {certificates.map((cert, idx) => {
                      const isActive = activeCert === idx;
                      return (
                        <div
                          key={cert.id}
                          onClick={() => setActiveCert(idx)}
                          className={`rounded-2xl border transition-all duration-500 ease-out overflow-hidden cursor-pointer flex ${
                            isActive
                              ? "flex-[3] bg-[#FFF5E1] border-[#9B1D30]/60 shadow-xs p-4 gap-4 items-center"
                              : "flex-[1] bg-white/70 hover:bg-white border-[#EFE2C6] hover:border-[#9B1D30]/40 p-3 flex-col justify-between items-center text-center opacity-85 hover:opacity-100"
                          }`}
                        >
                          {isActive ? (
                            /* Expanded Active Certificate Card */
                            <>
                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLightboxImg(cert.image);
                                }}
                                className="w-36 shrink-0 aspect-[3/4] bg-[#F7ECD4] rounded-xl overflow-hidden border border-[#EFE2C6] shadow-2xs cursor-pointer group relative"
                              >
                                <img
                                  src={cert.image}
                                  alt={cert.title}
                                  className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform"
                                />
                                <div className="absolute inset-0 bg-[#4A3F35]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  <span className="px-2 py-0.5 rounded-full bg-white/95 text-[10px] font-semibold text-[#4A3F35] shadow-xs flex items-center gap-1">
                                    <Maximize2 className="w-3 h-3 text-[#9B1D30]" />{" "}
                                    ดูภาพเต็ม
                                  </span>
                                </div>
                              </div>

                              <div className="space-y-1.5 flex-1 min-w-0 text-left">
                                <div className="flex items-center justify-between gap-1">
                                  <span
                                    className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${cert.tagColor}`}
                                  >
                                    {cert.badgeNum} {cert.label}
                                  </span>
                                  <span className="text-[11px] font-mono text-[#786E64]">
                                    {cert.year}
                                  </span>
                                </div>

                                <h4 className="text-sm sm:text-base font-serif-thai font-bold text-[#4A3F35] leading-snug line-clamp-2">
                                  {cert.title}
                                </h4>

                                <p className="text-[11px] text-[#9B1D30] font-medium flex items-center gap-1 truncate">
                                  <Award className="w-3.5 h-3.5 shrink-0" />
                                  <span className="truncate">
                                    {cert.issuer}
                                  </span>
                                </p>

                                <p className="text-xs text-[#786E64] font-light leading-relaxed line-clamp-3">
                                  {cert.desc}
                                </p>

                                <div className="pt-1.5">
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setLightboxImg(cert.image);
                                    }}
                                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#9B1D30] hover:text-[#B0303C] cursor-pointer"
                                  >
                                    <Maximize2 className="w-3 h-3" />
                                    <span>คลิกดูใบประกาศขยายเต็มจอ</span>
                                  </button>
                                </div>
                              </div>
                            </>
                          ) : (
                            /* Collapsed Peeking Card (Fanned Side Tab) */
                            <>
                              <div className="space-y-1">
                                <span className="font-serif text-xl font-light text-[#9B1D30]/50 block">
                                  {cert.badgeNum}
                                </span>
                                <span className="text-[10px] font-bold text-[#4A3F35] uppercase tracking-wider block font-serif-thai truncate">
                                  {cert.label}
                                </span>
                              </div>

                              {/* Peeking Mini Certificate Thumbnail */}
                              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-[#EFE2C6]/60 bg-[#F7ECD4] p-1 shadow-2xs">
                                <img
                                  src={cert.image}
                                  alt={cert.title}
                                  className="w-full h-full object-contain"
                                />
                              </div>

                              <span className="text-[10px] text-[#9B1D30] font-medium bg-[#F7ECD4] px-2 py-0.5 rounded-full border border-[#EFE2C6]">
                                คลิกเพื่อดู ↗
                              </span>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Mobile Steppable Card (sm:hidden) */}
                  <div className="sm:hidden bg-[#FFF5E1] rounded-2xl border border-[#EFE2C6] p-4 space-y-3">
                    <div className="flex gap-3 items-center">
                      <div
                        onClick={() =>
                          setLightboxImg(certificates[activeCert].image)
                        }
                        className="w-24 shrink-0 aspect-[3/4] bg-[#F7ECD4] rounded-lg overflow-hidden border border-[#EFE2C6] relative cursor-pointer"
                      >
                        <img
                          src={certificates[activeCert].image}
                          alt={certificates[activeCert].title}
                          className="w-full h-full object-contain p-1"
                        />
                      </div>
                      <div className="space-y-1 text-left flex-1 min-w-0">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${certificates[activeCert].tagColor}`}
                        >
                          {certificates[activeCert].badgeNum}{" "}
                          {certificates[activeCert].label}
                        </span>
                        <h4 className="text-xs font-serif-thai font-bold text-[#4A3F35] leading-snug line-clamp-2">
                          {certificates[activeCert].title}
                        </h4>
                        <p className="text-[10px] text-[#9B1D30] truncate">
                          {certificates[activeCert].issuer}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setLightboxImg(certificates[activeCert].image)
                      }
                      className="w-full py-1.5 rounded-full bg-[#F7ECD4] text-[#9B1D30] border border-[#EFE2C6] text-[11px] font-semibold flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>ขยายดูใบประกาศเต็ม</span>
                    </button>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------
              BLOCK 1.2: AWARD-WINNING & WORLD BROADCAST
              เวทีปรุงสุข & NHK Bento Expo
              ---------------------------------------------------- */}
          <div className="pt-8">
            <Reveal>
              <div className="text-center mb-10">
                <span className="stamp-badge">Award & Global Spotlight</span>
                <h3 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35] mt-2">
                  เวทีการแข่งขัน และเรื่องราวที่ไปไกลระดับสากล
                </h3>
              </div>
            </Reveal>

            {/* 2-Column Open Magazine Editorial separated by dashed line */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 md:divide-x md:divide-dashed md:divide-[#4A3F35]/20">
              {/* Left Column: เวทีปรุงสุข (Top 30 & Cookbook Selected) */}
              <div className="space-y-6">
                <Reveal delay={100}>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="stamp-box">เวทีปรุงสุข 2024</span>
                          <span className="text-xs font-semibold text-[#9B1D30]">
                            Top 30 Finalist
                          </span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-serif-thai font-bold text-[#4A3F35] leading-snug mt-2">
                          เดอะ คาสซ่า ริบอาย — ยกระดับวัตถุดิบท้องถิ่นสู่เมนูสุขภาพใน Cookbook ระดับประเทศ
                        </h4>
                      </div>

                      {/* Floating Watercolor Sticker: Prungsuk Dish */}
                      <div
                        onClick={() =>
                          setLightboxImg(
                            "/images/hybrid/prungsuk_watercolor.png",
                          )
                        }
                        className="relative shrink-0 cursor-pointer group"
                        title="คลิกดูภาพวาดสีน้ำเมนูปรุงสุขขยายใหญ่"
                      >
                        <span className="absolute -top-2 -right-1 text-[#9B1D30] text-sm animate-twinkle pointer-events-none">
                          ✨
                        </span>
                        <span className="absolute -bottom-1 -left-2 text-[#8FA882] text-xs animate-twinkle-delay pointer-events-none">
                          ✦
                        </span>
                        <img
                          src="/images/hybrid/prungsuk_watercolor.png"
                          alt="ภาพวาดสีน้ำจานเมนูปรุงสุข เดอะ คาสซ่า ริบอาย"
                          className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto drop-shadow-md animate-gentle-tilt group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                      พิสูจน์ทักษะการปรับสูตรให้ "ดีต่อสุขภาพขึ้นแต่ยังอร่อย" บนเวทีการแข่งขันปรุงสุข ด้วยการนำแป้งมันสำปะหลังไร้กลูเตนมาทำเบเกิลคู่กับเนื้อริบอายโพนยางคำและมูสกระเทียมดำ จนเข้ารอบ 30 ทีมสุดท้ายและได้รับคัดเลือกตีพิมพ์ลงหนังสือ Prungsuk Selected Cookbook
                    </p>

                    {/* Scrapbook Visual Cluster: Team photo + Dish + Cookbook Cover */}
                    <div className="relative pt-4 pb-2">
                      <div className="grid grid-cols-12 gap-3 items-center">
                        {/* Team Photo */}
                        <div
                          onClick={() =>
                            setLightboxImg("/images/hybrid/prungsuk_team.jpg")
                          }
                          className="col-span-6 rounded-2xl overflow-hidden border border-[#EFE2C6] shadow-2xs bg-[#F7ECD4] cursor-pointer group transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative"
                        >
                          {/* Washi Tape */}
                          <div className="absolute top-1 left-3 w-16 h-4 bg-[#9B1D30]/30 -rotate-2 rounded-xs pointer-events-none z-10"></div>
                          <img
                            src="/images/hybrid/prungsuk_team.jpg"
                            alt="บรรยากาศการแข่งขันเวทีปรุงสุข"
                            className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="p-1.5 text-center bg-[#FFF5E1] text-[10px] text-[#786E64]">
                            บรรยากาศแข่งขันรอบชิง
                          </div>
                        </div>

                        {/* Dish Recipe Photo */}
                        <div
                          onClick={() =>
                            setLightboxImg("/images/hybrid/prungsuk_dish.jpg")
                          }
                          className="col-span-6 rounded-2xl overflow-hidden border border-[#EFE2C6] shadow-2xs bg-[#F7ECD4] cursor-pointer group transform rotate-1 hover:rotate-0 transition-transform duration-300 relative"
                        >
                          <img
                            src="/images/hybrid/prungsuk_dish.jpg"
                            alt="จานเมนู เดอะ คาสซ่า ริบอาย ในเล่ม Cookbook"
                            className="w-full h-32 sm:h-36 object-cover group-hover:scale-105 transition-transform"
                          />
                          <div className="p-1.5 text-center bg-[#FFF5E1] text-[10px] text-[#786E64]">
                            หน้าสูตรอาหารในเล่มจริง
                          </div>
                        </div>
                      </div>

                      {/* Small Cookbook Cover Badge Floating Overlay */}
                      <div
                        onClick={() =>
                          setLightboxImg("/images/hybrid/prungsuk_cookbook.jpg")
                        }
                        className="mt-3 p-2 rounded-xl bg-[#F7ECD4] border border-[#EFE2C6] flex items-center gap-3 cursor-pointer hover:bg-[#EFE2C6] transition"
                      >
                        <img
                          src="/images/hybrid/prungsuk_cookbook.jpg"
                          alt="หน้าปก Prungsuk Selected Cookbook"
                          className="w-10 h-13 object-cover rounded-md shadow-2xs"
                        />
                        <div className="text-left space-y-0.5">
                          <span className="text-[11px] font-bold text-[#4A3F35] block font-serif-thai">
                            Prungsuk Selected Cookbook
                          </span>
                          <span className="text-[10px] text-[#786E64] block">
                            บันทึกสูตรและคุณค่าทางโภชนาการอย่างเป็นทางการ
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bookmark Tag CTA Link */}
                    <div className="pt-2">
                      <a
                        href="https://book.extraqube.app/read/cookbook-prungsuk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7ECD4] hover:bg-[#EFE2C6] text-[#9B1D30] border border-[#9B1D30]/40 text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-300"
                      >
                        <span>เปิดดูสูตรอาหารใน Cookbook ออนไลน์</span>
                        <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: NHK Bento Expo (World Broadcast) */}
              <div className="space-y-6 md:pl-8 lg:pl-10">
                <Reveal delay={200}>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="stamp-box !border-[#9B1D30]/60 !text-[#B0303C]">
                            NHK WORLD-JAPAN
                          </span>
                          <span className="text-xs font-semibold text-[#9B1D30]">
                            Bento Expo Feature
                          </span>
                        </div>

                        <h4 className="text-lg sm:text-xl font-serif-thai font-bold text-[#4A3F35] leading-snug mt-2">
                          รายการ Bento Expo ประเทศญี่ปุ่น — ส่งต่อความอบอุ่นของครอบครัวผ่านมื้ออาหาร
                        </h4>
                      </div>

                      {/* Floating Watercolor Sticker: Bento Box */}
                      <div
                        onClick={() =>
                          setLightboxImg(
                            "/images/hybrid/nhk_bento_watercolor.png",
                          )
                        }
                        className="relative shrink-0 cursor-pointer group"
                        title="คลิกดูภาพวาดสีน้ำขยายใหญ่"
                      >
                        <span className="absolute -top-1.5 -right-1 text-[#9B1D30] text-xs animate-twinkle pointer-events-none">
                          ✨
                        </span>
                        <span className="absolute -bottom-1 -left-1 text-[#8FA882] text-xs animate-twinkle-delay pointer-events-none">
                          ✦
                        </span>
                        <img
                          src="/images/hybrid/nhk_bento_watercolor.png"
                          alt="ภาพวาดสีน้ำข้าวกล่องเบนโตะ Bento Box"
                          className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto drop-shadow-md animate-gentle-tilt-reverse group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                      ผลงานข้าวกล่องเบนโตะ "Smily Bento for an Adopted Daughter" ที่ได้รับคัดเลือกให้ออกอากาศทางช่อง NHK World Japan สะท้อนตัวตนของฉันที่เชื่อเสมอว่า "อาหารคือภาษาของความรักและความอบอุ่นในครอบครัว"
                    </p>

                    {/* Visual: Broadcast Screen + Bento Close-up */}
                    <div className="relative pt-4 pb-2 space-y-3">
                      {/* NHK TV Frame */}
                      <div
                        onClick={() => setIsVideoModalOpen(true)}
                        className="rounded-2xl overflow-hidden border border-[#EFE2C6] shadow-sm bg-[#FFF5E1] cursor-pointer group relative"
                      >
                        {/* Japanese Stamp Badge on Top Right */}
                        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-[#9B1D30]/90 text-white text-[10px] font-bold tracking-wider uppercase border border-white/40 shadow-xs flex items-center gap-1">
                          <Tv className="w-3 h-3" /> NHK World Broadcast
                        </div>

                        <div className="relative aspect-[16/9] overflow-hidden bg-black/5">
                          <img
                            src="/images/hybrid/nhk_broadcast.jpg"
                            alt="NHK World Bento Expo - Rin Thailand"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Play overlay icon */}
                          <div className="absolute inset-0 bg-[#4A3F35]/25 flex items-center justify-center group-hover:bg-[#4A3F35]/35 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-white/95 text-[#9B1D30] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                              <Play className="w-5 h-5 fill-current ml-0.5" />
                            </div>
                          </div>
                        </div>

                        <div className="p-2.5 bg-[#F7ECD4] text-center text-xs text-[#4A3F35] font-medium flex items-center justify-between px-4">
                          <span>
                            รายการ NHK World: Bento Posts (Rin, Thailand)
                          </span>
                          <span className="text-[11px] text-[#9B1D30] font-semibold flex items-center gap-1">
                            ดูคลิป <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>

                      {/* Bento Close-up Sub-card */}
                      <div
                        onClick={() =>
                          setLightboxImg("/images/hybrid/nhk_bento_closeup.jpg")
                        }
                        className="p-2.5 rounded-2xl bg-[#FFF5E1] border border-[#EFE2C6] flex items-center gap-3.5 cursor-pointer hover:bg-[#F7ECD4] transition shadow-2xs"
                      >
                        <img
                          src="/images/hybrid/nhk_bento_closeup.jpg"
                          alt="ภาพเบนโตะชัดๆ Smily Bento"
                          className="w-14 h-14 object-cover rounded-xl shrink-0"
                        />
                        <div className="text-left space-y-0.5">
                          <span className="text-xs font-bold text-[#4A3F35] block font-serif-thai">
                            Smily Bento Set (รายละเอียดองค์ประกอบจาน)
                          </span>
                          <span className="text-[11px] text-[#786E64] block">
                            ปลาแซลมอนสด, ข้าวรอยยิ้ม, ไก่คาราอาเกะ
                            และผลไม้สดคู่ซอส
                          </span>
                        </div>
                        <Maximize2 className="w-4 h-4 text-[#786E64] ml-auto shrink-0" />
                      </div>
                    </div>

                    {/* Pop-up Video Modal Link Button */}
                    <div className="pt-2">
                      <button
                        onClick={() => setIsVideoModalOpen(true)}
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all duration-300 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>ชมคลิปออกอากาศย้อนหลัง (คลิกดูวิดีโอ) ↗</span>
                      </button>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------
              SPECIAL SWEET MEMORY CARD: ทับทิมกรอบนอกสถานที่ (Catering)
              การ์ดโน้ตสีเหลืองเนยอ่อน แปะแทรกไว้ในสมุดสูตรอาหาร (Scrapbook)
              ---------------------------------------------------- */}
          <Reveal delay={250}>
            <div className="mt-12 bg-[#F7ECD4]/90 rounded-3xl border border-[#EFE2C6] p-5 sm:p-7 shadow-xs relative">
              {/* Scrapbook Washi Tape on top edge - Fully Visible */}
              <div className="absolute -top-3 left-8 sm:left-12 w-28 sm:w-32 h-6 bg-[#9B1D30]/35 rotate-1 rounded-xs pointer-events-none backdrop-blur-xs border-y border-dashed border-[#9B1D30]/40 shadow-2xs z-10"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                {/* Left: Text & Operational Highlights */}
                <div className="lg:col-span-7 space-y-3.5 text-left">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="stamp-badge !bg-white/80">
                          Catering Experience • Special Memo
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35] leading-snug">
                        Sweet Memory: บทพิสูจน์รสมือหน้างานจริงกับ "ทับทิมกรอบ" นอกสถานที่
                      </h3>
                    </div>

                    {/* Floating Watercolor Sticker: Tub Tim Krob Bowl */}
                    <div
                      onClick={() =>
                        setLightboxImg("/images/hybrid/tubtim_watercolor.png")
                      }
                      className="relative shrink-0 cursor-pointer group"
                      title="คลิกดูภาพวาดสีน้ำขยายใหญ่"
                    >
                      <span className="absolute -top-1.5 -right-1 text-[#9B1D30] text-xs animate-twinkle pointer-events-none">
                        ✨
                      </span>
                      <span className="absolute -bottom-1 -left-1 text-[#9B1D30] text-xs animate-twinkle-delay pointer-events-none">
                        ✦
                      </span>
                      <img
                        src="/images/hybrid/tubtim_watercolor.png"
                        alt="ภาพวาดสีน้ำทับทิมกรอบ"
                        className="w-20 sm:w-24 md:w-28 lg:w-32 h-auto drop-shadow-md animate-gentle-tilt group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                    "เพราะเพื่อนและรุ่นพี่ในคลาสเชฟเชื่อมั่นในรสมือการทำขนมของฉัน จึงชวนไปร่วมทีม Catering จัดเลี้ยงนอกสถานที่ เพื่อรับผิดชอบเมนูขนมหวานอย่าง 'ทับทิมกรอบ' โอกาสพิเศษครั้งนี้เปลี่ยนฉันจากคนทำอาหารในบ้าน สู่การรับมือกับงานครัวสเกลใหญ่—ที่ได้ฝึกทั้งการคำนวณปริมาณเสิร์ฟให้แม่นยำ การคุมคุณภาพกะทิและวัตถุดิบให้สดใหม่หน้างาน และการส่งมอบความสุขให้แขกจำนวนมากในเวลาจำกัด"
                  </p>

                  {/* Operational Capabilities Badges */}
                  <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-[#4A3F35]">
                    <div className="px-3 py-1.5 rounded-full bg-white/90 border border-[#EFE2C6] flex items-center gap-1.5 shadow-2xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9B1D30]"></span>
                      <span>Portion Calculation (คำนวณปริมาณเสิร์ฟแม่นยำ)</span>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-white/90 border border-[#EFE2C6] flex items-center gap-1.5 shadow-2xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8FA882]"></span>
                      <span>
                        Real-time Ingredient Stocking (จัดการสต๊อกหน้างานสดใหม่)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: Polaroid Visual Cluster */}
                <div className="lg:col-span-5 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {/* Photo 1: Chef Rin at Catering line */}
                  <div
                    onClick={() =>
                      setLightboxImg("/images/hybrid/catering_rin_chef.jpg")
                    }
                    className="bg-white p-2 rounded-2xl border border-[#EFE2C6] shadow-xs cursor-pointer group transform -rotate-1 hover:rotate-0 transition-transform duration-300 w-36 sm:w-40 shrink-0"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-xl bg-[#F7ECD4]">
                      <img
                        src="/images/hybrid/catering_rin_chef.jpg"
                        alt="คุณรินหน้าไลน์อาหารจัดเลี้ยง Catering"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <p className="pt-1.5 pb-0.5 text-center text-[10px] font-serif-thai text-[#786E64] truncate">
                      หน้าไลน์จัดเลี้ยง Catering
                    </p>
                  </div>

                  {/* Photo 2: Tub Tim Krob Bowl */}
                  <div
                    onClick={() =>
                      setLightboxImg("/images/hybrid/catering_tubtim_bowl.jpg")
                    }
                    className="bg-white p-2 rounded-2xl border border-[#EFE2C6] shadow-xs cursor-pointer group transform rotate-2 hover:rotate-0 transition-transform duration-300 w-36 sm:w-40 shrink-0"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-xl bg-[#F7ECD4]">
                      <img
                        src="/images/hybrid/catering_tubtim_bowl.jpg"
                        alt="ถ้วยขนมหวานทับทิมกรอบกะทิสด"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <p className="pt-1.5 pb-0.5 text-center text-[10px] font-serif-thai text-[#786E64] truncate">
                      ทับทิมกรอบกะทิสดหอมกรุ่น
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Mini Tray Thumbnails */}
              <div className="mt-4 pt-3 border-t border-[#4A3F35]/10 flex items-center justify-between flex-wrap gap-2 text-[11px] text-[#786E64]">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#4A3F35]">
                    ภาพวัตถุดิบจัดเลี้ยงสดใหม่:
                  </span>
                  <button
                    onClick={() =>
                      setLightboxImg("/images/hybrid/catering_tubtim_tray.jpg")
                    }
                    className="inline-flex items-center gap-1 hover:text-[#9B1D30] transition cursor-pointer underline"
                  >
                    ถาดทับทิมกรอบ ↗
                  </button>
                  <span>•</span>
                  <button
                    onClick={() =>
                      setLightboxImg(
                        "/images/hybrid/catering_jackfruit_tray.jpg",
                      )
                    }
                    className="inline-flex items-center gap-1 hover:text-[#9B1D30] transition cursor-pointer underline"
                  >
                    ถาดขนุนทองเชื่อม ↗
                  </button>
                </div>

                <span className="text-[10px] text-[#9B1D30] font-medium flex items-center gap-1">
                  คลิกที่รูปเพื่อขยายใหญ่ <Maximize2 className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ========================================================
            SECTION 2: SOFTWARE DEVELOPER & FOOD BUSINESS ARCHITECTURE
            จากหน้าเตาสู่สถาปัตยกรรมโค้ด
            ======================================================== */}
        <section className="space-y-10 pt-8 border-t border-[#4A3F35]/10">
          {/* Handwritten connecting arrow note */}
          <Reveal>
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="font-serif text-3xl font-light text-[#8FA882]/70 block">
                02.
              </span>
              <span className="stamp-badge !bg-[#8FA882]/15 !border-[#8FA882]/40 !text-[#738C66]">
                Part Two • Food Business Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-thai font-bold text-[#4A3F35]">
                เมื่อความเข้าใจในครัว... ถูกต่อยอดด้วยวิธีคิดแบบนักพัฒนาระบบ
              </h2>
              <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                จากการเรียน Junior Software Developer และร่วมกับทีมพัฒนาโปรเจกต์เว็บไซต์ E-Commerce จำลองสำหรับขาย "ชุด Cooking Kit อาหารไทย 4 ภาค" ทำให้ฉันมองธุรกิจอาหารทะลุปรุโปร่งทั้งหน้าบ้านและหลังบ้าน ไม่ใช่แค่ทำให้อร่อย แต่ต้องจัดการสต๊อกและต้นทุนได้อย่างเป็นระบบ
              </p>
            </div>
          </Reveal>

          {/* Interactive Browser Showcase (Customer View vs Admin Stock View) */}
          <Reveal delay={150}>
            <div className="space-y-4">
              {/* Tab Selector Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setBrowserTab("customer")}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    browserTab === "customer"
                      ? "bg-[#9B1D30] text-white shadow-xs"
                      : "bg-[#F7ECD4] text-[#786E64] hover:bg-[#EFE2C6] border border-[#EFE2C6]"
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>หน้าร้านสำหรับลูกค้า (Customer View)</span>
                </button>

                <button
                  onClick={() => setBrowserTab("admin")}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    browserTab === "admin"
                      ? "bg-[#738C66] text-white shadow-xs"
                      : "bg-[#F7ECD4] text-[#786E64] hover:bg-[#EFE2C6] border border-[#EFE2C6]"
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>ระบบจัดการสต๊อกหลังบ้าน (Admin Stock System)</span>
                </button>
              </div>

              {/* Gentle Translucent Browser Frame */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-[#4A3F35]/15 shadow-sm overflow-hidden p-4 sm:p-6 space-y-4">
                {/* Browser Top Bar with Earth-tone Dots */}
                <div className="flex items-center justify-between pb-3 border-b border-[#4A3F35]/10 text-xs text-[#786E64]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#9B1D30]/60 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#EFE2C6] border border-[#EFE2C6] inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#8FA882]/70 inline-block"></span>
                    <span className="ml-2 font-mono text-[11px] text-[#786E64] hidden sm:inline">
                      {browserTab === "customer"
                        ? "https://thattae.vercel.app/ (Customer View)"
                        : "https://thattae.vercel.app/admin/inventory (Admin View)"}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-[#9B1D30] font-semibold">
                    {browserTab === "customer"
                      ? "Frontend Experience"
                      : "Backend & Stock Ops"}
                  </span>
                </div>

                {/* Browser Screen Content based on Tab */}
                <div className="relative rounded-2xl overflow-hidden border border-[#EFE2C6]/70 bg-[#F7ECD4]">
                  {browserTab === "customer" ? (
                    <div
                      onClick={() =>
                        setLightboxImg("/images/hybrid/dev_customer_view.jpg")
                      }
                      className="cursor-pointer group relative"
                    >
                      <img
                        src="/images/hybrid/dev_customer_view.jpg"
                        alt="ภาพแคปหน้าจอเว็บไซต์ฝั่งลูกค้า That-Tae"
                        className="w-full h-auto object-cover max-h-[500px]"
                      />
                      <div className="absolute inset-0 bg-[#4A3F35]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-xs font-semibold text-[#4A3F35] shadow-md flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-[#9B1D30]" />{" "}
                          คลิกดูรูปเต็ม
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        setLightboxImg("/images/hybrid/dev_admin_view.png")
                      }
                      className="cursor-pointer group relative"
                    >
                      <img
                        src="/images/hybrid/dev_admin_view.png"
                        alt="ภาพแคปหน้าจอระบบหลังบ้าน คลังวัตถุดิบ 4 ภาค Admin"
                        className="w-full h-auto object-cover max-h-[500px]"
                      />
                      <div className="absolute inset-0 bg-[#4A3F35]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-xs font-semibold text-[#4A3F35] shadow-md flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-[#8FA882]" />{" "}
                          คลิกดูรูปเต็ม
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Sweet Butter Recipe/Architecture Explanation Card (No Dark Box) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F7ECD4] border border-[#EFE2C6] space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#4A3F35] font-serif-thai flex items-center gap-1.5">
                      <Code className="w-4 h-4 text-[#9B1D30]" />
                      <span>{"</> เข้าใจทั้งคนกิน (หน้าร้าน) และคนทำครัว (หลังบ้าน)"}</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#786E64] bg-white/80 px-2 py-0.5 rounded-full">
                      Next.js • Tailwind CSS • Vercel
                    </span>
                  </div>

                  <p className="text-xs text-[#786E64] font-light leading-relaxed">
                    ออกแบบประสบการณ์สั่งซื้อที่เข้าใจง่ายสำหรับลูกค้า พร้อมระบบหลังบ้านให้แอดมินจัดการการจัดส่ง เช็กสต๊อกสินค้า และตรวจสอบปริมาณวัตถุดิบที่ถูกใช้ไปแบบออนไลน์—ซึ่งเป็นแนวคิดเดียวกันกับที่ฉันจะนำมาใช้บริหารจัดการครัวและควบคุมต้นทุนใน Test Kitchen
                  </p>
                </div>

                {/* Call to Action: Live Demo Link */}
                <div className="pt-2 text-center">
                  <a
                    href="https://thattae.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <Laptop className="w-4 h-4" />
                    <span>ทดลองใช้งานเว็บไซต์ระบบจริง (Live Demo)</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ========================================================
            SECTION 3: PROVEN CUSTOMER TRUST — THE RINGREDIENTS
            คอมมูนิตี้และความไว้วางใจจากลูกค้าจริง
            ======================================================== */}
        <section className="space-y-10 pt-8 border-t border-[#4A3F35]/10">
          {/* Section Header */}
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#4A3F35]/10 pb-4 relative">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-3xl font-light text-[#9B1D30]/50">
                    03.
                  </span>
                  <span className="stamp-badge">
                    Part Three • Proven Customer Trust
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif-thai font-bold text-[#4A3F35]">
                  บันทึกการเดินทาง และความไว้วางใจจากคนกินจริง
                </h2>
                <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                  The Ringredients เริ่มต้นจากการเป็นไดอารี่บันทึกความสุขในการเรียนทำอาหาร แจกสูตรง่ายๆ ที่คิดเอง และรีวิวของอร่อยที่ชอบ จนเติบโตเป็นคอมมูนิตี้เล็กๆ ที่ผู้คนเชื่อมั่นในรสมือ เมื่อเปิดรับพรีออเดอร์เค้กและคุกกี้โฮมเมดในช่วงเทศกาลปีใหม่ จึงมียอดสั่งจองเต็มทุกรอบและลูกค้ากลับมาซื้อซ้ำอย่างต่อเนื่อง
                </p>
              </div>

              {/* Floating Watercolor Sticker: Customer Trust Girl */}
              <div className="shrink-0 relative self-end sm:self-center">
                <div
                  onClick={() =>
                    setLightboxImg("/images/hybrid/trust_girl_watercolor.png")
                  }
                  className="relative group cursor-pointer"
                  title="คลิกดูภาพวาดสีน้ำขยายใหญ่"
                >
                  <span className="absolute -top-2 -right-1 text-[#9B1D30] text-sm animate-twinkle pointer-events-none">
                    ✨
                  </span>
                  <span className="absolute -bottom-1 -left-2 text-[#8FA882] text-xs animate-twinkle-delay pointer-events-none">
                    ✦
                  </span>
                  <img
                    src="/images/hybrid/trust_girl_watercolor.png"
                    alt="ภาพวาดสีน้ำความไว้วางใจจากลูกค้า The Ringredients"
                    className="w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto drop-shadow-md animate-gentle-tilt group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Social Postcard Layout: IG Grid Showcase on Left, Reviews on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: IG Grid Showcase with Wabi-Sabi Tilt & Washi Tape */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <Reveal direction="right">
                <div className="w-full max-w-md bg-[#FFF5E1] rounded-3xl p-4 sm:p-5 border border-[#EFE2C6] shadow-sm transform -rotate-1 hover:rotate-0 transition-transform duration-500 relative">
                  {/* Washi Tape in Matcha Green */}
                  <div className="absolute -top-3 left-10 w-24 h-6 bg-[#8FA882]/30 rotate-2 rounded-xs pointer-events-none"></div>

                  <div className="flex items-center justify-between pb-3 border-b border-[#4A3F35]/10 mb-3 px-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#9B1D30]/20 text-[#9B1D30] flex items-center justify-center font-bold text-xs">
                        R
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#4A3F35] block leading-tight">
                          @the_ringredients
                        </span>
                        <span className="text-[10px] text-[#786E64] block">
                          Food & Homemade Bakery
                        </span>
                      </div>
                    </div>
                    <span className="stamp-box !border-[#8FA882]/50 !text-[#738C66]">
                      Instagram Feed
                    </span>
                  </div>

                  {/* IG Grid Image */}
                  <div
                    onClick={() => setLightboxImg("/images/hybrid/ig_feed.jpg")}
                    className="rounded-2xl overflow-hidden border border-[#EFE2C6]/60 cursor-pointer group relative bg-[#F7ECD4]"
                  >
                    <img
                      src="/images/hybrid/ig_feed.jpg"
                      alt="Instagram feed @the_ringredients"
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#4A3F35]/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1 rounded-full bg-white/95 text-xs font-medium text-[#4A3F35] shadow-xs flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#9B1D30]" />{" "}
                        ขยายดูรูปฟีด
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-[#786E64] text-center pt-3 font-light">
                    รวมภาพขนมเค้ก ขนมปัง
                    และจานอาหารโฮมเมดที่ทำสดใหม่ส่งมอบให้ลูกค้า
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Customer Love & Reviews Card */}
            <div className="lg:col-span-6 space-y-5">
              <Reveal direction="left">
                <div className="bg-[#F7ECD4] rounded-3xl border border-[#EFE2C6]/70 p-6 sm:p-8 space-y-6 shadow-2xs relative">
                  {/* Quote decoration */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-full bg-[#9B1D30]/15 text-[#9B1D30] flex items-center justify-center">
                      <Quote className="w-5 h-5 fill-current" />
                    </div>
                    <span className="stamp-badge !bg-white/80">
                      85%+ Repeat Purchase Rate
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-serif-thai font-bold text-[#4A3F35]">
                      เสียงตอบรับจริงจากผู้บริโภค
                    </h3>
                    <p className="text-xs text-[#786E64] font-light leading-relaxed">
                      รสชาติที่กลมกล่อม ไม่หวานเลี่ยน การคัดสรรวัตถุดิบอย่างดีที่สุด และความใส่ใจเหมือนทำให้คนในครอบครัวทาน คือเหตุผลที่ลูกค้ากว่า 85%+ กลับมาสั่งซ้ำ
                    </p>
                  </div>

                  {/* Customer Review Image 1 */}
                  <div
                    onClick={() =>
                      setLightboxImg("/images/hybrid/review_comment1.png")
                    }
                    className="p-3 bg-white/80 rounded-2xl border border-[#EFE2C6]/60 cursor-pointer hover:bg-white transition shadow-2xs group"
                  >
                    <img
                      src="/images/hybrid/review_comment1.png"
                      alt="รีวิวจากลูกค้า: แฟนเราชอบมากๆ บอกอร่อยมาก ไม่หวาน นุ่มละมุนสุดๆ"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>

                  {/* Customer Review Image 2 */}
                  <div
                    onClick={() =>
                      setLightboxImg("/images/hybrid/review_comment2.png")
                    }
                    className="p-3 bg-white/80 rounded-2xl border border-[#EFE2C6]/60 cursor-pointer hover:bg-white transition shadow-2xs group"
                  >
                    <img
                      src="/images/hybrid/review_comment2.png"
                      alt="รีวิวจากลูกค้า: ได้รับแล้วและกินแล้วค่ะ อร่อยยยย ตัวช็อกโกแลตเข้มข้นมากก"
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>

                  {/* Traction Stats Pills */}
                  <div className="pt-2 grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-white/80 border border-[#EFE2C6]/50 space-y-0.5">
                      <span className="text-lg font-bold font-serif-thai text-[#9B1D30] block">
                        ยอดพรีออเดอร์เต็ม
                      </span>
                      <span className="text-[10px] text-[#786E64] block">
                        เค้ก ~20 กล่อง, คุกกี้ ~40 กล่อง/รอบปีใหม่
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/80 border border-[#EFE2C6]/50 space-y-0.5">
                      <span className="text-lg font-bold font-serif-thai text-[#8FA882] block">
                        85%+
                      </span>
                      <span className="text-[10px] text-[#786E64] block">
                        อัตราการซื้อซ้ำจากลูกค้าเดิมต่อเนื่อง
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Social Media Links (Instagram & Facebook) */}
              <Reveal delay={200}>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href="https://www.instagram.com/the_ringredients/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F7ECD4] text-[#4A3F35] border border-[#EFE2C6] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-300"
                  >
                    <span>Instagram: @the_ringredients</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9B1D30] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="https://www.facebook.com/TheRingredients/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#F7ECD4] text-[#4A3F35] border border-[#EFE2C6] text-xs font-semibold shadow-2xs hover:shadow-xs transition-all duration-300"
                  >
                    <span>Facebook: The Ringredients</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#738C66] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ========================================================
            BOTTOM NAVIGATION
            Slender Minimal Buttons
            ======================================================== */}
        <Reveal>
          <div className="pt-8 border-t border-[#4A3F35]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onBack}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-[#F7ECD4] text-[#4A3F35] border border-[#EFE2C6] text-xs font-medium transition shadow-2xs group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#786E64] group-hover:-translate-x-0.5 transition-transform" />
              <span>กลับสู่ Home</span>
            </button>
            <button
              onClick={() => onNavigate("business")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white text-xs font-medium transition shadow-sm hover:shadow-md group cursor-pointer"
            >
              <span>ดู Business Concept & Model</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </Reveal>
      </div>

      {/* ========================================================
          NHK WORLD BROADCAST VIDEO MODAL (พอกดแล้ววิดีโอเด้งขึ้นมา)
          ======================================================== */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#FFF5E1] rounded-3xl border border-[#EFE2C6] shadow-2xl max-w-2xl w-full overflow-hidden space-y-4 p-5 sm:p-7 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F7ECD4] border border-[#EFE2C6] text-[#4A3F35] hover:bg-[#9B1D30] hover:text-white transition flex items-center justify-center cursor-pointer shadow-2xs"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1 pr-10 text-left">
              <span className="stamp-badge !bg-[#9B1D30]/15">
                NHK WORLD-JAPAN • Bento Expo
              </span>
              <h3 className="text-xl font-serif-thai font-bold text-[#4A3F35]">
                Smily Bento for an Adopted "Daughter" — Rin, Thailand
              </h3>
              <p className="text-xs text-[#786E64] font-light">
                บันทึกภาพการออกอากาศในรายการ Bento Expo
                โดยสถานีโทรทัศน์แห่งชาติญี่ปุ่น NHK
              </p>
            </div>

            {/* Video / Visual Screen */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black relative border border-[#EFE2C6]">
              <video
                controls
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
              >
                <source src="/videos/nhk_bento_clip.mp4" type="video/mp4" />
                เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ HTML5
              </video>
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#786E64]">
                <Tv className="w-4 h-4 text-[#9B1D30]" />
                <span>NHK World-Japan International Broadcast</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/videos/nhk_bento_clip.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#F7ECD4] text-[#9B1D30] border border-[#9B1D30]/40 font-medium transition flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>เปิดดูในแท็บใหม่ ↗</span>
                </a>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="px-5 py-2 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white font-medium transition cursor-pointer"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          IMAGE LIGHTBOX MODAL (คลิกดูภาพขยายใหญ่ได้ทุกรูป)
          ======================================================== */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFF5E1] rounded-3xl p-3 sm:p-4 max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col items-center"
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black transition flex items-center justify-center cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <img
              src={lightboxImg}
              alt="ภาพขยาย"
              className="max-h-[82vh] w-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
