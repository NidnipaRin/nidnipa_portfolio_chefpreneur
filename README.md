# The Ringredients — Chefpreneur Portfolio 2026 (React + Tailwind CSS)

โครงงานเว็บ Portfolio สำหรับการแข่งขัน **THE FOOD SCHOOL PRESENTS : CHEFPRENEUR COMPETITION 2026**  
พัฒนาด้วย **React 18**, **Tailwind CSS**, และ **Vite** พร้อมตั้งค่า `"type": "module"` ใน `package.json`

---

## โครงสร้างโปรเจกต์ (Component Architecture)

```
c:/Users/Rarin/nidnipa_chefpreneur_portfolio/
├── package.json               # กำหนด "type": "module" และ dependencies (React 18, Tailwind, Lucide)
├── vite.config.js             # Vite configuration with React Plugin
├── tailwind.config.js         # ปรับแต่งโทนสี Warm Burgundy Home Kitchen, Fonts, Shadows
├── postcss.config.js          # PostCSS สำหรับ Tailwind & Autoprefixer
├── index.html                 # HTML Entry Point
└── src/
    ├── main.jsx               # React DOM render entry
    ├── App.jsx                # Main Application Component
    ├── index.css              # Tailwind Base + Google Fonts + Print Styles (@media print)
    ├── data/
    │   └── portfolioData.js   # รวบรวมข้อมูลดิบ (สูตรอาหาร, Tasting Notes, 3 Pillars, Timeline, สคริปต์ 30 วิ)
    └── components/
        ├── Navbar.jsx         # แถบเมนูด้านบน พร้อมปุ่มลัดดู PDF 4 หน้า และปุ่มวิดีโอ 30 วิ
        ├── Hero.jsx           # แบนเนอร์เปิดตัว นำเสนอสโลแกน และการ์ด Hero Dish
        ├── CoreValues.jsx     # 4 เสาหลักสู่ความสำเร็จใน Test Kitchen
        ├── HeritageStory.jsx  # เรื่องเล่ามรดกคุณแม่ ลูกมือเบอร์ 1 ยุคเปิปพิสดาร พ.ศ. 2534
        ├── HybridEdge.jsx     # 3 มิติขีดความสามารถ: Certified Chef • Tech & System • Trust Validation
        ├── MenuGrid.jsx       # ระบบนิเวศอาหาร 6 การ์ด (แกงกะหรี่, ตีนไก่, กระดูกหมู, โจ๊ก, Cooking Kit, เบเกอรี่)
        ├── StoryAndTrust.jsx  # บันทึกความไว้วางใจจากเพจ The Ringredients และอัตราซื้อซ้ำ
        ├── CostingSimulator.jsx # เครื่องคำนวณ Food Cost % และ Gross Profit จำลองแบบ Interactive
        ├── DeveloperCorner.jsx# สถาปัตยกรรมระบบ E-commerce Cooking Kit และ Mindset วิศวกรรม
        ├── TestKitchenPlan.jsx# แผนปฏิบัติการ 3 เดือน (Month 1, 2, 3) ที่ The Food School Test Kitchen
        ├── PitchModal.jsx     # โมดอลสคริปต์วิดีโอแนะนำตัว 30 วินาที พร้อมระบบนับเวลาซ้อมพูด
        ├── MenuModal.jsx      # โมดอลเจาะลึก Tasting Profile, Food Cost และการสเกล
        ├── PrintPortfolio.jsx # เทมเพลตจัดหน้ากระดาษ A4 จำนวน 4 หน้า สำหรับพิมพ์/เซฟ PDF
        └── Footer.jsx         # ส่วนท้ายเว็บสไตล์ไต้หวันโทนแดงเบอร์กันดีเข้ม
```

---

## วิธีติดตั้งและรันโปรเจกต์ (Getting Started)

1. เปิด Terminal หรือ PowerShell ในโฟลเดอร์นี้:
   ```bash
   cd c:\Users\Rarin\nidnipa_chefpreneur_portfolio
   ```

2. ติดตั้งแพ็กเกจ:
   ```bash
   npm install
   ```

3. เริ่มต้นเซิร์ฟเวอร์สำหรับพัฒนา (Development Server):
   ```bash
   npm run dev
   ```
   จากนั้นเปิดเบราว์เซอร์ไปที่ลิงก์ที่แสดงในเทอร์มินัล (เช่น `http://localhost:5173`)

4. สั่งบิลด์สำหรับ Deploy หรือ Production:
   ```bash
   npm run build
   ```

---

## การส่งออกเป็น PDF 4 หน้า (Export to PDF)
เมื่อเปิดหน้าเว็บในเบราว์เซอร์:
1. กดปุ่ม **"ดู PDF พอร์ต 4 หน้า"** ที่มุมบนขวา หรือกดคีย์ลัด `Ctrl + P`
2. เลือก **Destination: Save as PDF (บันทึกเป็น PDF)**
3. เลือกกระดาษขนาด **A4**
4. หน้าเว็บจะถูกจัดสัดส่วนออกเป็น 4 หน้ากระดาษพอดี สำหรับแนบส่งโครงการ Chefpreneur Competition 2026
