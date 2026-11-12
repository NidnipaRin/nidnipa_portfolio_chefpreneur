import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function CostingSimulator() {
  const [sellingPrice, setSellingPrice] = useState(139);
  const [portions, setPortions] = useState(60);

  const foodCostPerPortion = 39.50;
  const packagingCostPerPortion = 4.50;
  const totalCostPerPortion = foodCostPerPortion + packagingCostPerPortion; // 44.00

  const foodCostPercent = ((totalCostPerPortion / sellingPrice) * 100).toFixed(1);
  const profitPerPortion = sellingPrice - totalCostPerPortion;
  const monthlyGrossProfit = Math.round(profitPerPortion * portions * 30);

  return (
    <div id="costing-simulator" className="bg-cream-50 rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-soft">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-burgundy text-white flex items-center justify-center">
            <Calculator className="w-4 h-4" />
          </span>
          <h3 className="font-bold text-charcoal text-base">Live Recipe Costing Simulator</h3>
        </div>
        <span className="text-[11px] text-terracotta bg-cream-200 px-2.5 py-1 rounded-full font-medium">
          Interactive Demo
        </span>
      </div>

      <p className="text-xs text-charcoal-light mb-6">
        ทดลองปรับราคาขายหน้าร้าน หรือจำนวนเสิร์ฟต่อวัน เพื่อดูการคำนวณ Food Cost % และกำไรขั้นต้น (Gross Profit) แบบ Real-time
      </p>

      {/* Input Controls */}
      <div className="space-y-4 bg-white p-5 rounded-2xl border border-cream-200 text-xs">
        <div>
          <div className="flex justify-between font-medium mb-1.5">
            <span className="text-charcoal">ราคาขายต่อจาน (Selling Price):</span>
            <span className="text-burgundy font-bold text-sm">{sellingPrice} บาท</span>
          </div>
          <input
            type="range"
            min="99"
            max="220"
            step="5"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(Number(e.target.value))}
            className="w-full accent-burgundy cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between font-medium mb-1.5">
            <span className="text-charcoal">ยอดขายต่อวัน (Portions / Day):</span>
            <span className="text-burgundy font-bold text-sm">{portions} จาน</span>
          </div>
          <input
            type="range"
            min="20"
            max="150"
            step="5"
            value={portions}
            onChange={(e) => setPortions(Number(e.target.value))}
            className="w-full accent-burgundy cursor-pointer"
          />
        </div>

        <div className="pt-2 border-t border-cream-200 space-y-1 text-charcoal-light text-[11px]">
          <div className="flex justify-between">
            <span>ต้นทุนวัตถุดิบเฉลี่ย (Food Cost / Portion):</span>
            <span className="font-mono font-medium text-charcoal">39.50 บาท</span>
          </div>
          <div className="flex justify-between">
            <span>ต้นทุนบรรจุภัณฑ์ (Eco Packaging):</span>
            <span className="font-mono font-medium text-charcoal">4.50 บาท</span>
          </div>
        </div>
      </div>

      {/* Live Outputs */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-burgundy text-white p-4 rounded-2xl text-center shadow-card">
          <span className="text-[11px] text-cream-200 block uppercase">Food Cost %</span>
          <span className="text-2xl font-bold font-mono">{foodCostPercent}%</span>
          <span className="text-[10px] text-cream-200 block mt-0.5">
            {Number(foodCostPercent) <= 32 ? '✓ อยู่ในเกณฑ์มาตรฐาน (<32%)' : '⚠ เกินเกณฑ์มาตรฐาน'}
          </span>
        </div>
        <div className="bg-white border border-cream-200 p-4 rounded-2xl text-center shadow-card">
          <span className="text-[11px] text-charcoal-light block uppercase">กำไรขั้นต้น / เดือน</span>
          <span className="text-2xl font-bold font-mono text-burgundy">
            {monthlyGrossProfit.toLocaleString('th-TH')} ฿
          </span>
          <span className="text-[10px] text-terracotta block mt-0.5">คำนวณฐาน 30 วัน</span>
        </div>
      </div>
    </div>
  );
}
