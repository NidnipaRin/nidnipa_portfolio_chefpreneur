export const candidateInfo = {
  name: "นิษฐ์นิภา เกียรติคุณธรรม",
  nickname: "ริน",
  englishName: "Nidnipa Kiattikunnathum",
  brand: "Nidnipa.K",
  tagline:
    "ชุบชีวิตรสชาติมรดกเปิปพิสดาร สู่จานอาหารที่อบอุ่นเหมือนได้กลับมากินข้าวที่บ้าน",
  competition: "The Food School Presents : Chefpreneur Competition 2026",
  heroDish: "แกงกะหรี่จีนโบราณสูตรมรดก (Heritage Chinese Curry)",
};

// 4 Icons on Home White Band:
// 01: Our Heritage (Book - icon04)
// 02: Hybrid Skills (Chef hat - icon02)
// 03: Signature Dishes (Pot - icon03)
// 04: Business Concept (Map - icon01)
export const quickNavItems = [
  {
    num: "01",
    title: "Our Heritage",
    subtext: "ตำราอาหารมรดกคุณแม่ 2534",
    image: "/images/icon04.png",
    page: "heritage",
  },
  {
    num: "02",
    title: "Hybrid Skills",
    subtext: "เชฟมืออาชีพ & ซอฟต์แวร์เดฟ",
    image: "/images/icon02.png",
    page: "hybrid",
  },
  {
    num: "03",
    title: "Signature Dishes",
    subtext: "แกงกะหรี่จีน & เมนูต่อยอด",
    image: "/images/icon03.png",
    page: "menu",
  },
  {
    num: "04",
    title: "Business Concept",
    subtext: "คอนเซ็ปต์ธุรกิจ & Business Model",
    image: "/images/icon01.png",
    page: "business",
  },
];

// The 4 Core Dishes: 1 Hero Dish (Largest), 2 Secondary Dishes, 1 Future Expansion (Cooking Kit)
export const signatureDishes = {
  hero: {
    id: "curry",
    tag: "COMPETITION HERO DISH | SIGNATURE CONCEPT",
    title: "แกงกะหรี่จีนรสมือแม่ (สูตรต้นตำรับปรับสมดุลใหม่)",
    englishTitle: "Modernized Heritage Chinese Yellow Curry",
    rating: "5.0",
    reviews: "35 ปีตำนาน",
    serving: "สูตรพิเศษของครอบครัว",
    category: "Signature Heritage",
    badgeColor: "bg-burgundy text-white",
    desc: "แกงกะหรี่จีนแต้จิ๋วที่ใช้เครื่องเทศไทยผสานเทคนิคการผัดและเคี่ยวแบบอากง รสชาติเข้มข้น เผ็ด เค็ม มันนัว ไม่หวานเลี่ยน ปรับสมดุลใหม่ให้เนื้อแกงเนียนละมุน เบาสบายท้อง เสิร์ฟเคียงกุนเชียงทอด แตงกวากรอบ และพริกชี้ฟ้าสด",
    highlight:
      "จุดเด่น: รสชาติระดับ 'เปิบพิสดาร' ที่หาทานยากในปัจจุบัน ถอดรหัสจากรสมือแม่สู่สูตรมาตรฐานเชฟที่ควบคุมอัตราส่วนและเวลาเคี่ยวอย่างแม่นยำ เพื่อความอร่อยที่คงที่ทุกหม้อ",
  },
  secondary: [
    {
      id: "pork_ribs",
      tag: "SUPPORTING DISH",
      title: "กระดูกหมูตุ๋นเต้าเจี้ยวน้ำแดง",
      englishTitle: "Slow-Cooked Pork Ribs with Ancient Soy",
      category: "Comfort Food",
      desc: "ซี่โครงหมูคัดพิเศษตุ๋นกับเต้าเจี้ยวไฟอ่อนจนเนื้อล่อนละลายในปาก รสชาติเค็มหวานกลมกล่อม ทานง่าย เข้ากับแกงกะหรี่ได้อย่างลงตัว",
      role: "+ เมนูทานคู่จานหลัก เติมเต็มมื้ออาหารให้อิ่มอร่อยครบสำรับ",
    },
    {
      id: "pumpkin_congee",
      tag: "HEALTH & WELLNESS",
      title: "โจ๊กฟักทองเนื้อเนียน สูตรคุณแม่",
      englishTitle: "Mother's Velvety Pumpkin Congee",
      category: "Wellness",
      desc: "ข้าวหอมมะลิตุ๋นกับฟักทองสดหวานธรรมชาติจนเนื้อเนียนนุ่มดุจซุปครีม เบาสบายท้อง ให้พลังงานและวิตามิน สนับสนุนผลผลิตฟักทองจากเกษตรกร",
      role: "ตอบโจทย์ลูกค้าสายสุขภาพ และกลุ่มครอบครัว",
    },
  ],
  expansion: {
    id: "cooking_kit",
    tag: "FUTURE EXPANSION",
    title: "Ready-to-Heat & Smart Cooking Kit: อร่อยเหมือนมีแม่ทำให้กินที่บ้าน",
    englishTitle: "Home Comfort Expansion: Ready-to-Heat Pouch & DIY Cooking Kit",
    category: "Scalable Innovation",
    desc: "ต่อยอดความอบอุ่นสู่ช่องทางออนไลน์ ด้วยแกงกะหรี่จีนแพ็กสุญญากาศพร้อมอุ่นทานทันที (Ready-to-Heat) และชุดพร้อมปรุงใน 15 นาที (Cooking Kit)",
    role: "ขยายโอกาสทางธุรกิจสู่ครัวทุกบ้านทั่วประเทศ",
  },
};

// Hybrid Skills Data
export const hybridSkillsData = [
  {
    id: "culinary",
    category: "Certified Culinary Skills",
    role: "ศาสตร์แห่งครัวและรสชาติ",
    icon: "Award",
    badge: "Professional Chef",
    items: [
      {
        title: "เชฟอาหารไทยมืออาชีพ (ระดับ 1)",
        detail:
          "ผ่านการทดสอบมาตรฐานฝีมือแรงงานแห่งชาติ สาขาผู้ประกอบอาหารไทย (สช. / กระทรวงแรงงาน)",
      },
      {
        title: "Top 30 เวทีแข่งขันปรุงสุข (PRUGSUK)",
        detail:
          "ผ่านเข้ารอบ 30 คนสุดท้ายระดับประเทศ ได้รับการคัดเลือกนำสูตรอาหารลงตีพิมพ์ในเล่ม Cookbook ปรุงสุข",
      },
      {
        title: "ABC Cooking Studio (Japan Certified)",
        detail:
          "ได้รับใบประกาศนียบัตรจบหลักสูตร Basic Bread & Basic Cake เชี่ยวชาญการทำขนมปังและเค้ก",
      },
      {
        title: "NHK Bento Expo (World Broadcast)",
        detail:
          "ได้รับคัดเลือกนำเสนอผลงานเมนูข้าวกล่องออกอากาศทางรายการโทรทัศน์ระดับนานาชาติ NHK World ประเทศญี่ปุ่น",
      },
    ],
  },
  {
    id: "tech",
    category: "Software Developer Skills",
    role: "สถาปัตยกรรมระบบ & วิธีคิดแบบวิศวกร",
    icon: "Code",
    badge: "Junior Developer",
    items: [
      {
        title: "Junior Software Developer",
        detail:
          "สำเร็จหลักสูตร Full-stack พัฒนา Web Application เข้าใจระบบ Database, REST APIs และ E-commerce Flow",
      },
      {
        title: "Cooking Kits E-commerce Project",
        detail:
          "พัฒนาโปรเจกต์จบจำลองแพลตฟอร์มขายชุดทำอาหาร 4 ภาค เชื่อมโยงผลผลิตทางการเกษตรตรงสู่ครัวผู้บริโภค",
      },
      {
        title: "Food Business Architecture",
        detail:
          "วางระบบจัดการหลังบ้าน การบริหารสต็อก และการควบคุม Food Waste ในครัวให้เหลือน้อยที่สุด",
      },
      {
        title: "Engineering Mindset",
        detail:
          "วัดผลได้ (Measurable), ทำซ้ำได้รสชาติมาตรฐานเดิม (Repeatable), และขยายผลได้เป็นระบบ (Scalable)",
      },
    ],
  },
  {
    id: "trust",
    category: "Proven Customer Trust",
    role: "สายสัมพันธ์และความไว้วางใจจากลูกค้าจริง",
    icon: "Heart",
    badge: "Market Validation",
    items: [
      {
        title: "Organic Diary Community",
        detail:
          "เริ่มต้นจากเพจไดอารี่บันทึกเรื่องราวในครัว รีวิวอาหาร และความรู้ จนมีผู้ติดตามที่ผูกพันเหนียวแน่น",
      },
      {
        title: "High Repeat Purchase Rate (85%+)",
        detail:
          "เปิดรับออเดอร์ปีใหม่เพียง 1 เดือน/ปี ยอดเค้ก ~20 กล่อง คุกกี้ ~40 กล่อง จากลูกค้าเก่าที่กลับมาซื้อซ้ำต่อเนื่องทุกปี",
      },
      {
        title: "Direct Customer Feedback",
        detail:
          "เข้าใจพฤติกรรมการตัดสินใจซื้อ ความคาดหวังในรสชาติ และการบรรจุหีบห่อที่ประทับใจ",
      },
      {
        title: "Scaling Trust to Business",
        detail:
          "พร้อมต่อยอดความเชื่อมั่นในรสมือ สู่การดำเนินธุรกิจร้านอาหารจริงและชุด Ready-to-Cook",
      },
    ],
  },
];

// Business Concept & Model Content
export const businessConceptData = {
  headline: "Modern Heritage Comfort Food: จากมื้ออาหารที่อบอุ่นใจ สู่โมเดลธุรกิจที่เติบโตได้จริง",
  tagline:
    "จากความอบอุ่นในครัวแม่ สู่ธุรกิจ 3 ช่องทางที่เติบโตได้จริง",
  targetAudience: [
    {
      group: "Urban Young Professionals (คนรุ่นใหม่และวัยทำงานในเมือง)",
      need: "ตอบโจทย์คนเมืองที่เหนื่อยล้าจากการทำงานและโหยหาอาหารโฮมเมดรสมือแม่ที่อร่อยจริง สบายท้อง โดยไม่ต้องเสียเวลาเคี่ยวแกงเองหลายชั่วโมง (เหมาะกับ Dine-in, Delivery และ Ready-to-Heat)",
    },
    {
      group: "Modern Families & Health Conscious (กลุ่มครอบครัวและสายสุขภาพ)",
      need: "เติมเต็มมื้ออาหารของครอบครัวด้วยเมนูที่ทานร่วมกันได้ทุกวัย ตั้งแต่เด็กจนถึงผู้สูงอายุ (ด้วยแกงกะหรี่จีนสูตรลดมัน โจ๊กฟักทองหวานธรรมชาติ และซี่โครงหมูตุ๋นเปื่อยนุ่มลดโซเดียม)",
    },
    {
      group: "Home Cooks & Food Explorers (คนรักการทำอาหารเองที่บ้าน)",
      need: "ทลายข้อจำกัดเรื่องระยะทาง ขยายฐานลูกค้าสู่คนที่อยู่ไกลหรือต่างจังหวัด ให้สามารถปรุงแกงกะหรี่จีนรสชาติเป๊ะเหมือนเชฟมาทำให้ที่บ้านใน 15 นาทีผ่านชุด Cooking Kit",
    },
  ],
  valuePropositions: [
    "รสชาติต้นตำรับที่หาทานยาก แต่ทานง่ายขึ้น: ส่งต่อเสน่ห์แกงกะหรี่จีนแต้จิ๋วผสานเครื่องเทศไทยที่มีเอกลักษณ์ไม่ซ้ำใครในตลาด ปรับสมดุลใหม่ให้เนื้อแกงเนียนละมุน ซดง่าย เบาสบายท้อง",
    "รสมือแม่ที่ไม่เคยเพี้ยน ด้วยมาตรฐานเชฟ: ถอดรหัสสูตรกะด้วยสายตาเป็น Recipe Sheet ควบคุมสัดส่วน อุณหภูมิ และเวลาเคี่ยวอย่างแม่นยำ เพื่อให้ได้รสชาติที่นิ่งเป๊ะเหมือนกันทุกชามและทุกซอง",
    "ส่งมอบความอบอุ่นได้ทุกที่ ทุกเวลา: เปลี่ยนขั้นตอนการเคี่ยวแกงอันยาวนานในครัวเรา ให้กลายเป็นมื้อที่สะดวกและรวดเร็วสำหรับลูกค้า ไม่ว่าจะแวะทานที่ร้าน อุ่นร้อนใน 3 นาที หรือปรุงเองใน 15 นาที",
    "ปลอดภัย ใส่ใจเหมือนทำให้คนในบ้านทาน: คัดสรรวัตถุดิบคุณภาพดี ปรับลดไขมันและโซเดียม ดึงความหวานธรรมชาติจากวัตถุดิบโดยไม่พึ่งผงชูรส เพื่อให้เป็น Comfort Food ที่ทานได้สบายใจทุกวัน",
  ],
  revenueStreams: [
    {
      title: "1. Dine-in & Test Kitchen Flagship (หน้าร้านต้นแบบ)",
      desc: "เริ่มต้นเปิดให้บริการจริงและพิสูจน์ตลาดที่ Test Kitchen at The Food School (พร้อมระบบ Delivery ในพื้นที่) ทำหน้าที่เป็นหน้าร้านต้นแบบสร้างความประทับใจแรก และเป็นครัวกลางในการควบคุมคุณภาพการผลิต",
      margin: "สร้างกระแสเงินสดหลัก และเป็นจุดสัมผัสประสบการณ์ตรงกับผู้บริโภค (~60-65%)",
    },
    {
      title: "2. Smart Cooking Kit (ชุดพร้อมปรุง 15 นาที)",
      desc: "ชุดพร้อมปรุงแกงกะหรี่จีนรสมือแม่ (เบสซอสแกงเข้มข้น + เครื่องเทศชั่งตวงเป๊ะ + QR วิดีโอสอนทำ) ทลายข้อจำกัดเรื่องพื้นที่หน้าร้าน จัดส่งความอร่อยได้ทั่วประเทศ",
      margin: "ขยายฐานลูกค้าสู่กลุ่มคนชอบทำอาหาร และจำหน่ายได้ทั่วประเทศ (~45-50%)",
    },
    {
      title: "3. Ready-to-Heat Pouch (ซองพร้อมอุ่นทาน 3 นาที)",
      desc: "แกงกะหรี่จีนและเมนูตุ๋นบรรจุสุญญากาศเก็บความสด อุ่นร้อนพร้อมทานใน 3 นาที ตอบโจทย์การซื้อตุนติดตู้เย็นของคนเมือง สร้างยอดสั่งซื้อซ้ำและรายได้หมุนเวียนต่อเนื่อง (Recurring Revenue)",
      margin: "อายุการเก็บรักษายาวนาน เพิ่มยอดขายแบบ Bulk Order และจัดส่งสะดวก (~40-45%)",
    },
  ],
  competitiveEdge: [
    "35-Year Authentic Heritage, Made Better: ต้นทุนทางรสชาติและเรื่องราวของครอบครัวที่มีอยู่จริงจากตำนานเปิบพิสดาร ถูกนำมาพัฒนาใหม่ให้ดีกว่าเดิม จนได้รสชาติแกงกะหรี่จีนแต้จิ๋วที่เป็นเอกลักษณ์เฉพาะตัวและลอกเลียนแบบได้ยาก",
    "Culinary Precision & System Thinking: ผสานทักษะครัวไทยและวินัยการชั่งตวงจากเบเกอรี่ เข้ากับวิธีคิดเชิงระบบจากการเรียนพัฒนาซอฟต์แวร์ ทำให้สามารถวางมาตรฐานสูตร (Recipe Standardization) และควบคุมต้นทุน-สต๊อกวัตถุดิบในครัวได้อย่างแม่นยำ",
    "E-Commerce Readiness & Proven Community: มีความเข้าใจในการวางระบบขายออนไลน์ทั้งหน้าบ้าน-หลังบ้าน พร้อมฐานคอมมูนิตี้จริงจากเพจ The Ringredients ที่มียอดสั่งซื้อซ้ำกว่า 85%+ พิสูจน์ถึงความสามารถในการสื่อสารและสร้างความผูกพันกับลูกค้าจริง",
  ],
};

export const videoPitchScript = [
  {
    step: "01",
    time: "0:00 - 0:08",
    topic: "คุณคือใคร และทำไมถึงอยากทำธุรกิจอาหาร",
    speech:
      "สวัสดีค่ะ ริน นิษฐ์นิภา จาก Nidnipa.K รินโตมากับกลิ่นแกงกะหรี่จีนของคุณแม่ ลูกมือเบอร์ 1 ของร้านที่เคยออกเปิปพิสดาร เมื่อร้านปิดตัวลงในวันที่แม่แต่งงาน รสมือและสูตรลับทั้งหมดก็ถูกส่งต่อมาอยู่ที่รินค่ะ",
  },
  {
    step: "02",
    time: "0:09 - 0:20",
    topic: "ธุรกิจในฝันเป็นแบบไหน และขายให้ใคร",
    speech:
      "ธุรกิจในฝันของริน คือการนำ ‘แกงกะหรี่จีนในตำนาน’ มาสร้างเป็น Modern Comfort Food ผสานระบบ Smart Cooking Kit และแพลตฟอร์มที่รินเขียนขึ้นเอง เพื่อตอบโจทย์คนรุ่นใหม่ที่โหยหารสชาติแท้ๆ ที่หาทานยากค่ะ",
  },
  {
    step: "03",
    time: "0:21 - 0:30",
    topic: "ทำไมธุรกิจนี้ควรเกิดขึ้น",
    speech:
      "เพราะรสชาติมรดกไม่ควรถูกเก็บไว้แค่ในความทรงจำ แต่ควรเติบโตเป็นธุรกิจจริง ด้วยดีกรีเชฟอาหารไทยมืออาชีพ และทักษะโปรแกรมเมอร์ รินพร้อมแล้วที่จะเป็น Chefpreneur คนต่อไปที่ The Food School ค่ะ!",
  },
];

export const videoPitchScriptEn = [
  {
    step: "01",
    time: "0:00 - 0:08",
    topic: "Who You Are & Why Food Business",
    speech:
      "Hello, I'm Rin Nidnipa from Nidnipa.K. I grew up with the comforting aroma of my mother's Chinese curry—she was the master cook behind an iconic diner honored with the Peep Pitsadan award. When the shop closed on her wedding day, she passed all the secret culinary wisdom directly down to me.",
  },
  {
    step: "02",
    time: "0:09 - 0:20",
    topic: "Your Dream Business & Target Audience",
    speech:
      "My dream business is revitalizing this legendary Chinese curry into a modern comfort food brand, complemented by 15-minute Smart Cooking Kits and digital e-commerce systems, serving modern urbanites who crave authentic, soulful heritage flavors.",
  },
  {
    step: "03",
    time: "0:21 - 0:30",
    topic: "Why This Business Must Exist",
    speech:
      "Because heritage flavors should not remain locked in nostalgia—they must evolve into sustainable culinary businesses. With certified Thai chef mastery and developer systems thinking, I am 100% ready to become the next Chefpreneur at The Food School!",
  },
];
