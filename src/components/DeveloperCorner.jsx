import React from 'react';
import { GitBranch, Terminal } from 'lucide-react';
import CostingSimulator from './CostingSimulator';

export default function DeveloperCorner() {
  return (
    <section id="tech" className="py-16 lg:py-24 bg-white border-t border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-handwriting text-2xl text-terracotta">Chef × Full-stack Developer</span>
          <h2 className="text-3xl font-serif-thai font-bold text-burgundy">
            ระบบหลังบ้าน & เทคโนโลยีที่พร้อมสเกล
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-light mt-1">
            ตัวอย่างจริงจากการเขียนโปรแกรม: เครื่องมือคำนวณต้นทุนอาหาร และสถาปัตยกรรม Cooking Kits Platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Live Costing Simulator */}
          <div className="lg:col-span-6">
            <CostingSimulator />
          </div>

          {/* Tech Project Showcase */}
          <div className="lg:col-span-6 space-y-5">
            <div className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-soft">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-8 rounded-lg bg-burgundy-50 text-burgundy flex items-center justify-center">
                  <GitBranch className="w-4 h-4" />
                </span>
                <h3 className="font-bold text-charcoal text-base">E-commerce Cooking Kits Architecture</h3>
              </div>
              <p className="text-xs text-charcoal-light leading-relaxed mb-4">
                โปรเจกต์จบหลักสูตร Junior Software Developer: พัฒนาเว็บแอปพลิเคชันจำลองการขายชุด Cooking Kits 4 ภาค เชื่อมโยงผลผลิตทางการเกษตรตรงสู่ครัวผู้บริโภค
              </p>

              {/* Architecture Diagram Mini */}
              <div className="bg-charcoal text-cream-100 p-4 rounded-2xl font-mono text-xs space-y-2 border border-charcoal-light/30">
                <div className="flex items-center justify-between border-b border-gray-700 pb-2 text-[11px] text-gray-400">
                  <span>SYSTEM ARCHITECTURE</span>
                  <span>REST API + REACT + NODE</span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <p><span className="text-emerald-400">Frontend:</span> React UI, Cart Management, Responsive Menu</p>
                  <p><span className="text-sky-400">Backend:</span> Node.js / Express RESTful API, Inventory Tracking</p>
                  <p><span className="text-amber-400">Database:</span> PostgreSQL / MongoDB for Recipe & Order History</p>
                  <p><span className="text-rose-400">Logistics:</span> Cold-Chain Delivery Integration Logic</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
                <div className="p-3 bg-white rounded-xl border border-cream-200">
                  <strong className="text-burgundy block font-medium">Front-End Experience</strong>
                  <span className="text-charcoal-light text-[11px]">ออกแบบให้สั่งซื้อง่าย มี Step-by-step วิดีโอสอนทำ</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-cream-200">
                  <strong className="text-burgundy block font-medium">Back-End Control</strong>
                  <span className="text-charcoal-light text-[11px]">ระบบตัดสต็อกอัตโนมัติ คำนวณ Waste ป้องกันของเน่าเสีย</span>
                </div>
              </div>
            </div>

            {/* Other Tech Projects */}
            <div className="bg-white rounded-2xl p-4 border border-cream-200 flex items-center justify-between text-xs shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cream-200 flex items-center justify-center text-charcoal">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-medium text-charcoal block">CLI Maze & Logic Algorithm Projects</span>
                  <span className="text-charcoal-light text-[11px]">การคิดเชิงตรรกะแบบวิศวกรรม นำมาประยุกต์กับการจัดระเบียบครัว</span>
                </div>
              </div>
              <span className="text-[10px] text-burgundy font-mono bg-burgundy-50 px-2 py-1 rounded">Dev Mindset</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
