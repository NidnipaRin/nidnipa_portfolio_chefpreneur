import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Globe } from 'lucide-react';
import { candidateInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Navbar({ currentPage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, isEn } = useLanguage();
  const t = translations[lang].nav;

  const navLinks = [
    { key: 'home', label: t.home, icon: Home },
    { key: 'heritage', label: t.heritage },
    { key: 'hybrid', label: t.hybrid },
    { key: 'menu', label: t.menu },
    { key: 'business', label: t.business },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on navigation
  const handleNav = (page) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 no-print ${
          scrolled
            ? 'bg-[#FFF5E1]/95 backdrop-blur-md shadow-xs border-b border-[#4A3F35]/10'
            : 'bg-[#FFF5E1]/85 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
          >
            <img
              src="/images/logo_chef_hat.png"
              alt="Logo Chef Hat"
              className="w-10 h-10 object-contain group-hover:scale-110 transition-transform drop-shadow-xs"
            />
            <div className="hidden sm:block">
              <span className="text-base font-serif-thai font-bold text-[#4A3F35] block leading-tight group-hover:text-[#9B1D30] transition-colors">
                {candidateInfo.brand}
              </span>
              <span className="text-[10px] text-[#786E64] tracking-widest uppercase block leading-tight">
                {t.chefpreneurYear}
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNav(link.key)}
                className={`relative px-3.5 py-1.5 rounded-full text-sm transition-all duration-200 cursor-pointer ${
                  currentPage === link.key
                    ? 'text-[#9B1D30] font-semibold bg-[#F7ECD4] shadow-xs'
                    : 'text-[#786E64] hover:text-[#4A3F35] hover:bg-[#F7ECD4]/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#EFE2C6] bg-white/70 hover:bg-[#F7ECD4] text-xs font-semibold text-[#4A3F35] transition shadow-2xs cursor-pointer select-none"
              title={isEn ? "เปลี่ยนเป็นภาษาไทย (TH)" : "Switch to English (EN)"}
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-[#9B1D30]" />
              <span className={!isEn ? "text-[#9B1D30] font-bold" : "text-[#786E64]"}>TH</span>
              <span className="text-[#EFE2C6] font-light">|</span>
              <span className={isEn ? "text-[#9B1D30] font-bold" : "text-[#786E64]"}>EN</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-[#F7ECD4] text-[#4A3F35] flex items-center justify-center hover:bg-[#EFE2C6] transition cursor-pointer"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 pb-4 space-y-1 bg-[#FFF5E1]/95 border-b border-[#4A3F35]/10">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNav(link.key)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors cursor-pointer ${
                  currentPage === link.key
                    ? 'text-[#9B1D30] font-semibold bg-[#F7ECD4]'
                    : 'text-[#786E64] hover:bg-[#F7ECD4]/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
