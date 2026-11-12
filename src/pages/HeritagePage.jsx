import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { candidateInfo } from "../data/portfolioData";

export default function HeritagePage({ onBack, onNavigate }) {
  return (
    <div className="min-h-screen bg-[#FFF5E1] text-[#4A3F35] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* ========================================================
          BREADCRUMB BAR
          ======================================================== */}
      <div className="max-w-6xl mx-auto flex items-center justify-between border-b border-[#4A3F35]/10 pb-4 mb-12 sm:mb-16">
        <button
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-medium text-[#4A3F35] hover:text-[#9B1D30] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#786E64] group-hover:-translate-x-0.5 transition-transform" />
          <span>กลับสู่ Home</span>
        </button>
        <span className="text-xs text-[#786E64] font-serif tracking-wider">
          {candidateInfo.brand} • Our Heritage
        </span>
      </div>

      <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">
        {/* ========================================================
            SECTION 1: HERO SECTION
            ======================================================== */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-4 sm:pt-8">
          <Reveal>
            <span className="stamp-badge">OUR HERITAGE</span>
          </Reveal>

          <Reveal delay={100}>
            <span className="font-serif italic text-lg sm:text-xl text-[#9B1D30] tracking-wide block">
              A Story Worth Passing On
            </span>
          </Reveal>

          <Reveal delay={200}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed lg:leading-[1.55]">
              บางรสชาติ... มีค่าเกินกว่าจะปล่อยให้เป็นแค่ความทรงจำ
            </h1>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex items-center justify-center gap-3 text-[#9B1D30]/40 my-4">
              <span className="h-px w-10 bg-[#9B1D30]/20"></span>
              <span className="text-xs">✧</span>
              <span className="h-px w-10 bg-[#9B1D30]/20"></span>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-sm sm:text-base text-[#786E64] font-light leading-relaxed max-w-2xl mx-auto">
              จากหัวใจของอากง สู่รสมือของแม่ผู้เป็นลมใต้ปีก และเหตุผลที่ฉันเลือกนำ "แกงกะหรี่จีน" จานนี้มาเริ่มต้นบทใหม่บนเวทีการแข่งขัน
            </p>
          </Reveal>
        </section>

        {/* ========================================================
            SECTION 2: THE WOMAN BEHIND THE STORY
            Wabi-Sabi Asymmetry with Organic Stamp Badge
            ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Image 01 — Raw Watercolor Artwork with Wabi-Sabi Tilt */}
          <div className="lg:col-span-7 flex justify-center">
            <Reveal direction="left">
              <div className="w-full max-w-xl lg:max-w-2xl flex justify-center transform -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
                <img
                  src="/images/heritage/mother_cook.png"
                  alt="คุณแม่และอากงหน้าเตา ข้าวแกงจีนสวนกวางตุ้ง 2534"
                  className="w-full h-auto object-contain filter drop-shadow-sm"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <Reveal direction="right">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#9B1D30] block font-sans">
                THE WOMAN BEHIND THE STORY
              </span>
            </Reveal>

            <Reveal direction="right" delay={100}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed">
                ผู้หญิงคนเก่งข้างเตาอากง... กับรสมือที่ไม่เคยปิดตัวตามร้าน
              </h2>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <div className="space-y-4 text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                <p>
                  ย้อนกลับไปเมื่อ 50 กว่าปีก่อน ในยุคที่ร้าน{" "}
                  <strong className="text-[#4A3F35] font-semibold">
                    "ข้าวแกงจีนสวนกวางตุ้ง"
                  </strong>{" "}
                  โด่งดังจนได้รับป้ายการันตี 'เปิบพิสดาร' และออกรายการทีวี เบื้องหลังความสำเร็จของอากง ยังมีผู้หญิงคนหนึ่งที่ยืนเคียงข้างหน้าเตา คอยดูแลหม้อแกงและซึมซับทุกเคล็ดลับอย่างเงียบๆ เสมอมา—ผู้หญิงคนนั้นคือ{" "}
                  <strong className="text-[#9B1D30] font-semibold">
                    "คุณแม่ของฉัน"
                  </strong>{" "}
                  ผู้ช่วยคนเก่งและกำลังสำคัญของอากง
                </p>
                <p>
                  เมื่อคุณแม่แต่งงานในปี พ.ศ. 2534 ร้านข้าวแกงในตำนานได้ปิดตัวลงตามวิถีชีวิต... แต่สิ่งที่ไม่เคยปิดตัวลงเลยคือ{" "}
                  <strong className="text-[#4A3F35] font-semibold">
                    "หม้อแกงกะหรี่จีนในครัวที่บ้านเรา"
                  </strong>{" "}
                  คุณแม่เปลี่ยนจากการทำขาย มาเป็นการทำอาหารด้วยความรักให้ลูกกิน และถ่ายทอดทุกเคล็ดลับรสมือให้ฉันตั้งแต่จำความได้
                </p>
              </div>
            </Reveal>

            {/* Stamp Badge */}
            <Reveal direction="right" delay={300}>
              <div className="pt-2">
                <span className="stamp-badge">ทุกจานมีเรื่องราว</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================================
            SECTION 3: THE JOURNEY & WHY THIS DISH (Timeline & Historical Evidence)
            ======================================================== */}
        <section className="space-y-12">
          {/* Header Row: Text on Left, Large Image 02 on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Headline & Text */}
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9B1D30] block font-sans">
                  THE JOURNEY & WHY THIS DISH
                </span>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed">
                  กาลเวลาผ่านไป...
                  <br />
                  แต่ทำไมต้องเป็น "แกงกะหรี่จีน" จานนี้?
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <div className="space-y-3 text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                  <p>
                    ภาพถ่ายประวัติศาสตร์เคียงข้างคุณดวงตา ตุงคะมณี ในรายการ{" "}
                    <strong className="text-[#9B1D30] font-semibold">
                      "อร่อยบาทเดียว"
                    </strong>{" "}
                    คือเครื่องยืนยันว่าครั้งหนึ่ง รสชาติของครอบครัวเราเคยสร้างความประทับใจให้ผู้คนมากแค่ไหน
                  </p>
                  <p>
                    และท่ามกลางเมนูมากมายของร้าน เหตุผลที่ฉันเลือก{" "}
                    <strong className="text-[#4A3F35] font-semibold">
                      "แกงกะหรี่จีน"
                    </strong>{" "}
                    มาใช้ในการแข่งขันครั้งนี้ เพราะนี่คือเมนูที่เป็น{" "}
                    <strong className="text-[#9B1D30] font-semibold">
                      "หัวใจของบ้านเรา"
                    </strong>{" "}
                    เป็นรสชาติลูกครึ่งไทย-จีนแต้จิ๋วที่มีเสน่ห์เฉพาะตัว หอมเครื่องเทศนัวลึกแต่ไม่ฉุนจัด ทุกครั้งที่ฉันเหนื่อยล้าแล้วได้กลับมากินแกงกะหรี่หม้อนี้ของแม่ มันคือความรู้สึกอบอุ่นและปลอดภัย ซึ่งในวันนี้ รสชาติแกงกะหรี่จีนแท้ๆ แบบนี้แทบจะหาทานไม่ได้แล้ว ฉันจึงไม่อยากให้รสชาติที่เต็มไปด้วยความรักและความทรงจำนี้ ต้องสูญหายไปตามกาลเวลา
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right: Image 02 — Large & Frameless with subtle wabi-sabi tilt */}
            <div className="lg:col-span-7 flex justify-center">
              <Reveal direction="right" delay={150}>
                <div className="w-full max-w-xl lg:max-w-2xl flex justify-center transform rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
                  <img
                    src="/images/heritage/tv_show.png"
                    alt="หลักฐานประวัติศาสตร์ รายการอร่อยบาทเดียว เปิปพิสดาร คุณดวงตา ตุงคะมณี และคุณแม่"
                    className="w-full h-auto object-contain filter drop-shadow-sm"
                  />
                </div>
              </Reveal>
            </div>
          </div>

          {/* Timeline 1 2 3 with Connecting Line */}
          <div className="relative pt-6">
            {/* Desktop Connecting Line between nodes 1, 2, 3 */}
            <div className="hidden md:block absolute top-10.5 left-20 right-20 h-0.5 bg-[#9B1D30]/30 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Milestone 1 */}
              <Reveal delay={100}>
                <div className="flex flex-col items-center text-center space-y-3 group">
                  {/* Node Dot 1 */}
                  <div className="w-9 h-9 rounded-full bg-[#F7ECD4] border-2 border-[#9B1D30] flex items-center justify-center text-xs font-bold text-[#4A3F35] shadow-2xs">
                    1
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-serif-thai font-bold text-[#9B1D30] block">
                      ตำนาน
                    </span>
                    <h3 className="font-serif-thai font-bold text-sm sm:text-base text-[#4A3F35]">
                      จุดเริ่มต้นของรสชาติระดับเปิบพิสดาร
                    </h3>
                    <p className="text-xs text-[#786E64] font-light mt-1.5 max-w-xs mx-auto leading-relaxed">
                      ร้านเล็กๆ ของครอบครัวที่อากงและคุณแม่ร่วมกันสร้าง จนกลายเป็นตำนานแกงกะหรี่จีนที่ออกรายการทีวีและได้รับรางวัลเปิบพิสดารการันตี
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Milestone 2 */}
              <Reveal delay={200}>
                <div className="flex flex-col items-center text-center space-y-3 group">
                  {/* Node Dot 2 */}
                  <div className="w-9 h-9 rounded-full bg-[#F7ECD4] border-2 border-[#9B1D30] flex items-center justify-center text-xs font-bold text-[#4A3F35] shadow-2xs">
                    2
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-serif-thai font-bold text-[#9B1D30] block">
                      ความทรงจำ
                    </span>
                    <h3 className="font-serif-thai font-bold text-sm sm:text-base text-[#4A3F35]">
                      เมื่อความอร่อยกลายเป็นความอบอุ่นในบ้าน
                    </h3>
                    <p className="text-xs text-[#786E64] font-light mt-1.5 max-w-xs mx-auto leading-relaxed">
                      แม้ร้านจะปิดตัวลงในปี 2534 วันที่คุณแม่แต่งงาน แต่รสมือของอากงยังคงมีชีวิตอยู่ในครัวของแม่ และเป็นมื้ออาหารที่หล่อเลี้ยงฉันมาตลอด 35 ปี
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Milestone 3 */}
              <Reveal delay={300}>
                <div className="flex flex-col items-center text-center space-y-3 group">
                  {/* Node Dot 3 */}
                  <div className="w-9 h-9 rounded-full bg-[#F7ECD4] border-2 border-[#9B1D30] flex items-center justify-center text-xs font-bold text-[#4A3F35] shadow-2xs">
                    3
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-serif-thai font-bold text-[#9B1D30] block">
                      จุดเปลี่ยน
                    </span>
                    <h3 className="font-serif-thai font-bold text-sm sm:text-base text-[#4A3F35]">
                      จากรสมือแม่ สู่ความตั้งใจของลูก
                    </h3>
                    <p className="text-xs text-[#786E64] font-light mt-1.5 max-w-xs mx-auto leading-relaxed">
                      เมื่อความอร่อยในบ้านไม่ควรหยุดอยู่แค่อดีต จึงถึงเวลาที่คนรุ่นหลานจะนำคุณค่านี้ก้าวออกมาสู่โลกยุคใหม่
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Panoramic Artwork — Replaces the 3 separate photos (Completely Frameless) */}
          <Reveal delay={350}>
            <div className="w-full flex justify-center pt-2 pb-4">
              <img
                src="/images/heritage/timeline_panoramic.png"
                alt="เส้นทางจากจุดเริ่มต้นของร้าน รสชาติแกงกะหรี่โบราณ สู่ความผูกพันของครอบครัว"
                className="w-full max-w-5xl h-auto object-contain hover:scale-[1.01] transition-transform duration-500 filter drop-shadow-sm"
              />
            </div>
          </Reveal>
        </section>

        {/* ========================================================
            SECTION 4: THE NEXT CHAPTER · WHY WE DO IT DIFFERENTLY
            Expanded Editorial Manifesto Card with 3 Pillars & Sticky Visual
            ======================================================== */}
        <section className="bg-[#F7ECD4] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#EFE2C6]/70 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Image — Raw/Frameless Watercolor Artwork with tilt (Sticky on Desktop) */}
            <div className="lg:col-span-5 flex justify-center lg:sticky lg:top-24">
              <Reveal direction="left">
                <div className="w-full max-w-md lg:max-w-lg flex flex-col items-center transform -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out space-y-4">
                  <img
                    src="/images/heritage/next_chapter_chef.png"
                    alt="ริน นิษฐ์นิภา — ทายาทรสมือสู่นักพัฒนาอาหารมืออาชีพ The Next Chapter"
                    className="w-full h-auto object-contain filter drop-shadow-sm"
                  />
                  <div className="text-center">
                    <span className="font-serif italic text-sm sm:text-base text-[#9B1D30] tracking-wider block">
                      — Respecting Our Heritage. Creating Our Future. —
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Next Chapter Manifesto & 3 Pillars */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <Reveal direction="right">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#9B1D30] block font-sans">
                  THE NEXT CHAPTER · WHY WE DO IT DIFFERENTLY
                </span>
              </Reveal>

              <Reveal direction="right" delay={100}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-thai font-bold text-[#4A3F35] leading-normal sm:leading-relaxed">
                  ไม่ได้กลับมาเพื่อเปิดร้านเดิมของอากง...
                  <br />
                  แต่กลับมาเพื่อทำ "รสมือแม่" ให้ดีกว่าเดิม
                </h2>
              </Reveal>

              <Reveal direction="right" delay={200}>
                <div className="space-y-3.5 text-xs sm:text-sm text-[#786E64] font-light leading-relaxed">
                  <p>
                    การนำแกงกะหรี่จีนมาขึ้นเวที{" "}
                    <strong className="text-[#4A3F35] font-semibold">
                      Chefpreneur Competition 2026
                    </strong>{" "}
                    ในครั้งนี้ ฉันไม่ได้ตั้งใจจะกลับมาใช้ชื่อร้านเดิม หรือทำร้านข้าวแกงแบบเมื่อ 35 ปีก่อน เพราะตำนานของอากงได้ทำหน้าที่ของมันอย่างสมบูรณ์แบบแล้วในอดีต
                  </p>
                  <p>
                    แต่สิ่งที่ฉันอยากทำในวันนี้ คือการนำ{" "}
                    <strong className="text-[#9B1D30] font-semibold">
                      "ความอบอุ่นเหมือนได้กลับมากินข้าวบ้านแม่"
                    </strong>{" "}
                    มาสร้างใหม่ภายใต้{" "}
                    <strong className="text-[#4A3F35] font-semibold">
                      ชื่อใหม่และมาตรฐานใหม่ที่ดีกว่าเดิม
                    </strong>{" "}
                    ด้วยความเข้าใจคนยุคนี้:
                  </p>
                </div>
              </Reveal>

              {/* 3 Pillar Commitment Cards */}
              <Reveal direction="right" delay={250}>
                <div className="space-y-3 pt-2">
                  {/* Pillar 1 */}
                  <div className="bg-white/85 rounded-2xl p-4 sm:p-5 border border-[#EFE2C6]/60 shadow-2xs space-y-1.5 transition-all hover:bg-white hover:shadow-xs">
                    <h3 className="font-serif-thai font-bold text-sm sm:text-base text-[#4A3F35] flex items-center gap-2">
                      <span className="text-base text-[#9B1D30]">✦</span>
                      <span>ดูแลคนกินให้ดีขึ้นเหมือนที่แม่ดูแลเรา</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed pl-6">
                      ปรับสมดุลสูตรดั้งเดิมที่เคยหนักแป้งและน้ำมันในยุคเก่า ให้กลายเป็นแกงกะหรี่จีนที่เนื้อเนียนละมุน ซดง่าย เบาสบายท้อง แต่ยังคงความหอมนัวลึกซึ้งของเครื่องเทศไว้ครบถ้วน
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="bg-white/85 rounded-2xl p-4 sm:p-5 border border-[#EFE2C6]/60 shadow-2xs space-y-1.5 transition-all hover:bg-white hover:shadow-xs">
                    <h3 className="font-serif-thai font-bold text-sm sm:text-base text-[#4A3F35] flex items-center gap-2">
                      <span className="text-base text-[#8FA882]">✦</span>
                      <span>รักษารสมือแม่ให้แม่นยำในทุกชาม</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed pl-6">
                      นำทักษะการทำอาหารสมัยใหม่มาถอดรหัสการ "กะด้วยสายตา" ของแม่ ให้เป็นสูตรมาตรฐานที่เป๊ะทุกขั้นตอน เพื่อให้ทุกคนได้รับความอร่อยที่สม่ำเสมอไม่ผิดเพี้ยน
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="bg-white/85 rounded-2xl p-4 sm:p-5 border border-[#EFE2C6]/60 shadow-2xs space-y-1.5 transition-all hover:bg-white hover:shadow-xs">
                    <h3 className="font-serif-thai font-bold text-sm sm:text-base text-[#4A3F35] flex items-center gap-2">
                      <span className="text-base text-[#9B1D30]">✦</span>
                      <span>เติบโตอย่างยั่งยืนบนเวทีการแข่งขัน</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-[#786E64] font-light leading-relaxed pl-6">
                      นี่ไม่ใช่แค่การทำอาหารขาย แต่คือความตั้งใจของลูกที่อยากพิสูจน์ว่า มรดกความรักจากก้นครัวของอากงและคุณแม่ เมื่อนำมาผสานกับความรู้ตลอด 9 เดือนของ The Food School จะสามารถเติบโตเป็นธุรกิจยุคใหม่ที่แข็งแรง และส่งต่อความอบอุ่นนี้ไปถึงผู้คนได้ไกลกว่าที่แม่เคยฝันไว้
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Action Buttons — Slender recipe buttons */}
              <Reveal direction="right" delay={300}>
                <div className="pt-4 flex flex-wrap items-center justify-start gap-3.5">
                  <button
                    onClick={() => onNavigate && onNavigate("menu")}
                    className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white text-xs sm:text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <span>ค้นพบเมนูแนะนำของเรา</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button
                    onClick={onBack}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#FFF5E1] text-[#4A3F35] border border-[#EFE2C6] text-xs sm:text-sm font-medium shadow-2xs hover:shadow-xs transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 text-[#786E64] group-hover:-translate-x-0.5 transition-transform" />
                    <span>กลับสู่ Home</span>
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
