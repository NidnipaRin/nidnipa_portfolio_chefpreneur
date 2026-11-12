import React from 'react';
import { Printer, PlayCircle, ArrowUp } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';

export default function Footer({ onNavigate, onOpenPitch, onOpenPrint }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7ECD4] border-t border-[#EFE2C6]/70 text-[#4A3F35] pt-12 pb-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-[#4A3F35]/10">
          
          {/* Brand Logo */}
          <button
            onClick={() => { onNavigate('home'); scrollToTop(); }}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <img
              src="/images/logo_chef_hat.png"
              alt="Logo Chef Hat"
              className="w-11 h-11 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform drop-shadow-xs"
            />
            <div>
              <span className="text-lg font-serif-thai font-bold text-[#4A3F35] block leading-tight group-hover:text-[#9B1D30] transition-colors">
                {candidateInfo.brand}
              </span>
              <span className="text-[10px] text-[#786E64] tracking-widest uppercase block">
                CHEFPRENEUR 2026
              </span>
            </div>
          </button>

          {/* Centered Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-medium text-[#786E64]">
            <button
              onClick={() => { onNavigate('home'); scrollToTop(); }}
              className="hover:text-[#9B1D30] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-[#EFE2C6] hidden sm:inline">•</span>
            <button
              onClick={() => { onNavigate('heritage'); scrollToTop(); }}
              className="hover:text-[#9B1D30] transition-colors cursor-pointer"
            >
              Our Heritage
            </button>
            <span className="text-[#EFE2C6] hidden sm:inline">•</span>
            <button
              onClick={() => { onNavigate('hybrid'); scrollToTop(); }}
              className="hover:text-[#9B1D30] transition-colors cursor-pointer"
            >
              Hybrid Skills
            </button>
            <span className="text-[#EFE2C6] hidden sm:inline">•</span>
            <button
              onClick={() => { onNavigate('menu'); scrollToTop(); }}
              className="hover:text-[#9B1D30] transition-colors cursor-pointer"
            >
              Signature Dishes
            </button>
            <span className="text-[#EFE2C6] hidden sm:inline">•</span>
            <button
              onClick={() => { onNavigate('business'); scrollToTop(); }}
              className="hover:text-[#9B1D30] transition-colors cursor-pointer"
            >
              Business Concept
            </button>
          </nav>

          {/* Back to Top */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#EFE2C6] text-[#786E64] hover:bg-[#9B1D30] hover:text-white hover:border-[#9B1D30] transition shadow-2xs text-xs font-medium cursor-pointer"
              title="กลับด้านบน"
            >
              <span>กลับด้านบน</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Quick Tools & PDF row */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#786E64]">
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#EFE2C6] text-[#4A3F35] font-medium hover:bg-[#9B1D30] hover:text-white hover:border-[#9B1D30] transition shadow-2xs text-[11px] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>พิมพ์ Portfolio (PDF 4 หน้า)</span>
            </button>
            <button
              onClick={onOpenPitch}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#EFE2C6] text-[#4A3F35] font-medium hover:bg-[#9B1D30] hover:text-white hover:border-[#9B1D30] transition shadow-2xs text-[11px] cursor-pointer"
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>ดูวิดีโอแนะนำตัว (30s)</span>
            </button>
          </div>

          <span className="text-[11px] font-light">
            © 2026 {candidateInfo.brand} • {candidateInfo.name} ({candidateInfo.nickname}) • {candidateInfo.competition}
          </span>
        </div>

      </div>
    </footer>
  );
}
