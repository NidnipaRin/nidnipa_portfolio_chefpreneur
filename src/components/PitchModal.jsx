import React, { useEffect, useRef } from "react";
import { X, ExternalLink, Play, Film } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function PitchModal({ isOpen, onClose }) {
  const { isEn } = useLanguage();
  const videoRef = useRef(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Pause video if modal is closed
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 no-print animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFF5E1] rounded-3xl max-w-2xl w-full p-5 sm:p-7 border border-[#EFE2C6] shadow-2xl space-y-4 relative overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F7ECD4] border border-[#EFE2C6] text-[#4A3F35] hover:bg-[#9B1D30] hover:text-white transition flex items-center justify-center cursor-pointer shadow-2xs z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 pr-10 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9B1D30]/15 border border-[#9B1D30]/30 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-[#9B1D30] uppercase">
            <Film className="w-3 h-3 text-[#9B1D30]" />
            <span>CHEFPRENEUR 2026 • VIDEO PITCH</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35] leading-snug">
            {isEn
              ? "Candidate Introduction & Concept Pitch"
              : "วิดีโอแนะนำตัวและนำเสนอคอนเซปต์"}
          </h3>
          <p className="text-xs text-[#786E64] font-light">
            {isEn
              ? "Rin — Nidnipa Kiattikunnathum • The Food School Chefpreneur Competition"
              : "ริน — นิษฐ์นิภา เกียรติคุณธรรม • โครงการ Chefpreneur 2026 The Food School"}
          </p>
        </div>

        {/* Video Player */}
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black relative border border-[#EFE2C6] shadow-inner">
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            preload="auto"
            className="w-full h-full object-contain"
          >
            <source src="/videos/nidnipa_pitch.mp4" type="video/mp4" />
            {isEn
              ? "Your browser does not support HTML5 video playback."
              : "เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ HTML5"}
          </video>
        </div>

        {/* Modal Footer */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[#4A3F35]/10">
          <div className="flex items-center gap-2 text-[#786E64]">
            <Play className="w-3.5 h-3.5 text-[#9B1D30] fill-current" />
            <span className="font-medium text-[11px] sm:text-xs">
              {isEn
                ? "30-Second Introduction Pitch"
                : "วิดีโอแนะนำตัวความยาว 30 วินาที"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/videos/nidnipa_pitch.mp4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white hover:bg-[#F7ECD4] text-[#9B1D30] border border-[#9B1D30]/40 font-medium transition flex items-center gap-1.5 text-xs shadow-2xs cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{isEn ? "Open in New Tab ↗" : "เปิดดูในแท็บใหม่ ↗"}</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white font-medium transition cursor-pointer text-xs shadow-xs"
            >
              {isEn ? "Close Window" : "ปิดหน้าต่าง"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
