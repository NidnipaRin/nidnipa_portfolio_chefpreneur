import React from 'react';
import { ArrowLeft, GitBranch, Layers, Cpu, Terminal, ArrowRight } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';
import CostingSimulator from '../components/CostingSimulator';

export default function TechPage({ onBack, onNavigate }) {
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
          {candidateInfo.brand} • Tech & Cooking Kit
        </span>
      </div>

      {/* Hero Header */}
      <div className="space-y-3">
        <span className="font-handwriting text-2xl text-terracotta block">
          Chef × Junior Software Developer
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif-thai font-bold text-burgundy leading-tight">
          Tech & Cooking Kit — สถาปัตยกรรมระบบหลังบ้าน & เครื่องมือคำนวณต้นทุน
        </h1>
        <p className="text-sm text-charcoal-light leading-relaxed max-w-2xl font-light">
          ผสานทักษะการเขียนโปรแกรม เข้ากับหลักการบริหารครัวสากล เพื่อสร้างธุรกิจอาหารที่แม่นยำ ไม่สูญเปล่า และสามารถสเกลได้ทั่วประเทศ
        </p>
      </div>

      {/* Interactive Simulator Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-serif-thai font-bold text-burgundy">
          1. Live Recipe Costing Simulator (เครื่องคิดต้นทุนอาหารสด)
        </h2>
        <CostingSimulator />
      </div>

      {/* Architecture Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-soft space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-burgundy-50 text-burgundy flex items-center justify-center font-bold">
            <GitBranch className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-serif text-terracotta tracking-wider uppercase">Project Architecture</span>
            <h3 className="text-xl font-serif-thai font-bold text-charcoal">
              แพลตฟอร์มจำลอง E-commerce Cooking Kit 4 ภาค
            </h3>
          </div>
        </div>

        <p className="text-xs text-charcoal-light leading-relaxed">
          ในโปรเจกต์จบหลักสูตร Junior Software Developer ฉันได้ออกแบบและพัฒนา Full-stack Web Application เพื่อจำลองการขายชุด Cooking Kits โดยใช้วัตถุดิบจริงจากเกษตรกรในแต่ละภูมิภาค มีโครงสร้างระบบดังนี้:
        </p>

        {/* Tech Diagram Box */}
        <div className="p-5 rounded-2xl bg-charcoal text-cream-100 font-mono text-xs space-y-3 border border-charcoal-light/40">
          <div className="flex justify-between border-b border-gray-700 pb-2 text-[11px] text-gray-400">
            <span>FULL-STACK ARCHITECTURE OVERVIEW</span>
            <span>REST API + REACT + NODE</span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div>
              <span className="text-emerald-400 font-bold">[Front-End Client]:</span>
              <p className="text-gray-300">สร้างด้วย React.js, Responsive Design, State Management ตะกร้าสินค้า และหน้าจำลองการสั่งซื้อที่เข้าใจง่าย</p>
            </div>
            <div>
              <span className="text-sky-400 font-bold">[Back-End API Server]:</span>
              <p className="text-gray-300">Node.js / Express.js ให้บริการ RESTful Endpoints สำหรับจัดการออเดอร์ การตัดสต็อกวัตถุดิบ และการคำนวณราคาแบบอัตโนมัติ</p>
            </div>
            <div>
              <span className="text-amber-400 font-bold">[Database & Schema]:</span>
              <p className="text-gray-300">จัดเก็บข้อมูลสูตรอาหาร (Recipe BOM), ข้อมูลฟาร์มเกษตรกร, และประวัติการสั่งซื้อเพื่อนำมาวิเคราะห์ต้นทุน (Costing)</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-charcoal-light pt-2">
          <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200 space-y-1">
            <strong className="text-burgundy block font-medium">การนำมาใช้ใน Test Kitchen:</strong>
            <p>เราสามารถใช้ระบบนี้ในการเปิดรับ Pre-order Smart Cooking Kit แกงกะหรี่จีน และเก็บสถิติลูกค้าที่มาทานที่ร้านได้ทันที</p>
          </div>
          <div className="p-4 bg-cream-50 rounded-2xl border border-cream-200 space-y-1">
            <strong className="text-burgundy block font-medium">Mindset เชฟโปรแกรมเมอร์:</strong>
            <p>คิดแบบวิศวกร: วัดผลได้ (Measurable), ทำซ้ำได้รสเดิม (Repeatable), และขยายผลได้โดยไม่พึ่งพาตัวบุคคล (Scalable)</p>
          </div>
        </div>
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
          onClick={() => onNavigate('business')}
          className="px-6 py-2.5 rounded-full bg-burgundy text-white text-xs hover:bg-burgundy-800 transition shadow-warm"
        >
          ดู Test Kitchen Plan →
        </button>
      </div>

    </div>
  );
}
