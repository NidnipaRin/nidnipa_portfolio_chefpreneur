import React, { useEffect } from "react";
import { X, Download, FileText, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function PdfDownloadModal({ isOpen, onClose }) {
  const { isEn } = useLanguage();

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

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Nidnipa_Portfolio.pdf";
    link.download = "Nidnipa_Portfolio.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  const handleOpenTab = () => {
    window.open("/Nidnipa_Portfolio.pdf", "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 no-print animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FFF5E1] rounded-3xl max-w-md w-full p-6 sm:p-7 border border-[#EFE2C6] shadow-2xl space-y-5 relative overflow-hidden animate-in zoom-in-95 duration-200"
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
        <div className="space-y-1.5 pr-8 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#9B1D30]/15 border border-[#9B1D30]/30 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-[#9B1D30] uppercase">
            <FileText className="w-3.5 h-3.5 text-[#9B1D30]" />
            <span>OFFICIAL PORTFOLIO PDF</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif-thai font-bold text-[#4A3F35] leading-snug">
            {isEn
              ? "Download Portfolio Document?"
              : "ต้องการดาวน์โหลดเอกสาร Portfolio หรือไม่?"}
          </h3>
          <p className="text-xs text-[#786E64] font-light leading-relaxed">
            {isEn
              ? "Would you like to download Chef Rin's official application portfolio document to view on your device?"
              : "คุณต้องการดาวน์โหลดไฟล์เอกสาร Portfolio ฉบับสมบูรณ์ของคุณริน (นิษฐ์นิภา เกียรติคุณธรรม) เพื่อเปิดดูในอุปกรณ์ของคุณใช่หรือไม่?"}
          </p>
        </div>

        {/* File Detail Card */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F7ECD4] border border-[#EFE2C6] flex items-center gap-3.5 text-left shadow-2xs">
          <div className="w-12 h-12 rounded-xl bg-white border border-[#EFE2C6] text-[#9B1D30] flex items-center justify-center shrink-0 shadow-2xs">
            <FileText className="w-6 h-6" />
          </div>
          <div className="space-y-0.5 flex-1 min-w-0">
            <span className="font-mono text-xs font-bold text-[#4A3F35] block truncate">
              Nidnipa_Portfolio.pdf
            </span>
            <span className="text-[11px] text-[#786E64] block">
              {isEn
                ? "Full 9 Pages • ~4.9 MB • Print Quality"
                : "ฉบับเต็ม 9 หน้า • ขนาด ~4.9 MB • ความคมชัดสูง"}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleDownload}
              className="flex-1 py-3 px-5 rounded-full bg-[#9B1D30] hover:bg-[#B0303C] text-white text-xs sm:text-sm font-semibold transition shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{isEn ? "Yes, Download PDF" : "ยืนยันดาวน์โหลด"}</span>
            </button>

            <button
              onClick={handleOpenTab}
              className="py-3 px-4 rounded-full bg-white hover:bg-[#F7ECD4] text-[#4A3F35] border border-[#EFE2C6] text-xs sm:text-sm font-medium transition shadow-2xs flex items-center justify-center gap-1.5 cursor-pointer"
              title={isEn ? "Open in New Tab" : "เปิดดูในแท็บใหม่"}
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#9B1D30]" />
              <span>{isEn ? "Open in Tab" : "เปิดดูในแท็บใหม่"}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full py-2 text-xs text-[#786E64] hover:text-[#4A3F35] font-medium transition text-center cursor-pointer"
          >
            {isEn ? "Cancel" : "ยกเลิก"}
          </button>
        </div>
      </div>
    </div>
  );
}
