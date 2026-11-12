import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { videoPitchScript } from '../data/portfolioData';

export default function PitchModal({ isOpen, onClose }) {
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  const toggleTimer = () => {
    if (secondsLeft === 0) {
      setSecondsLeft(30);
      setIsActive(true);
    } else {
      setIsActive(!isActive);
    }
  };

  const resetTimer = () => {
    setIsActive(false);
    setSecondsLeft(30);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 no-print">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-cream-200 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-charcoal hover:bg-burgundy hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-1">
          <span className="font-handwriting text-xl text-terracotta">30-Second Video Pitch</span>
          <h3 className="text-xl font-serif-thai font-bold text-burgundy">
            สคริปต์วิดีโอแนะนำตัว 30 วินาที (ซ้อมพูดจริง)
          </h3>
          <p className="text-xs text-charcoal-light">
            ตอบครบ 3 โจทย์ของ The Food School พร้อมตัวจับเวลาจำลอง
          </p>
        </div>

        {/* Timer Rehearsal Widget */}
        <div className="p-4 bg-burgundy-50 rounded-2xl border border-burgundy/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-burgundy text-white flex items-center justify-center font-mono font-bold text-sm">
              {secondsLeft}s
            </div>
            <div>
              <span className="text-xs font-bold text-burgundy block">โหมดซ้อมพูดจับเวลา</span>
              <span className="text-[11px] text-charcoal-light">
                {secondsLeft === 0
                  ? 'ครบ 30 วินาทีแล้ว!'
                  : isActive
                  ? 'กำลังซ้อมพูด...'
                  : 'กดเริ่มเพื่อซ้อมพูดตามสคริปต์'}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={toggleTimer}
              className="px-3.5 py-1.5 rounded-full bg-burgundy text-white text-xs font-medium hover:bg-burgundy-800 transition"
            >
              {secondsLeft === 0 ? 'เริ่มใหม่' : isActive ? 'หยุด' : 'เริ่มจับเวลา'}
            </button>
            <button
              onClick={resetTimer}
              className="px-3 py-1.5 rounded-full bg-cream-200 text-charcoal text-xs hover:bg-cream-300 transition"
            >
              รีเซ็ต
            </button>
          </div>
        </div>

        {/* Script Steps */}
        <div className="space-y-4 text-xs leading-relaxed">
          {videoPitchScript.map((script) => (
            <div key={script.step} className="p-3.5 rounded-xl bg-cream-50 border border-cream-200">
              <div className="flex justify-between font-bold text-burgundy mb-1">
                <span>{script.step}. {script.topic}</span>
                <span className="font-mono text-terracotta">{script.time}</span>
              </div>
              <p className="text-charcoal italic">
                "{script.speech}"
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-cream-200 text-charcoal text-xs font-medium hover:bg-cream-300 transition"
          >
            ปิดหน้าต่าง
          </button>
        </div>

      </div>
    </div>
  );
}
