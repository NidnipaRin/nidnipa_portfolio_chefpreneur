import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import HeritagePage from "./pages/HeritagePage";
import HybridEdgePage from "./pages/HybridEdgePage";
import MenuPage from "./pages/MenuPage";
import BusinessConceptPage from "./pages/BusinessConceptPage";
import PitchModal from "./components/PitchModal";
import PdfDownloadModal from "./components/PdfDownloadModal";
import PrintPortfolio from "./components/PrintPortfolio";
import Footer from "./components/Footer";

export default function App() {
  // Navigation State parsed from URL Hash: 'home' | 'heritage' | 'hybrid' | 'menu' | 'business'
  const [currentPage, setCurrentPage] = useState("home");
  const [isPitchOpen, setIsPitchOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  // Parse URL hash on load and when browser Back/Forward is clicked
  useEffect(() => {
    const parseHashRoute = () => {
      const hash = window.location.hash.replace(/^#\/?/, "");

      if (!hash || hash === "") {
        setCurrentPage("home");
      } else if (["heritage", "hybrid", "menu", "business"].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage("home");
      }

      // Auto-scroll to top on every navigation
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Initial check on mount
    parseHashRoute();

    // Listen to browser Back/Forward buttons and hash changes
    window.addEventListener("hashchange", parseHashRoute);
    return () => window.removeEventListener("hashchange", parseHashRoute);
  }, []);

  // Function to navigate by changing URL Hash (records browser history!)
  const navigateTo = (page) => {
    if (page === "home") {
      if (
        window.location.hash === "#/" ||
        window.location.hash === "" ||
        window.location.hash === "#"
      ) {
        setCurrentPage("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.location.hash = "#/";
      }
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  // Back button handler: Always navigate directly to Home as requested
  const handleBack = () => {
    navigateTo("home");
  };

  const handleOpenPdfModal = () => {
    setIsPdfModalOpen(true);
  };

  return (
    <div className="bg-[#FFF5E1] text-[#4A3F35] min-h-screen flex flex-col justify-between relative selection:bg-[#9B1D30] selection:text-[#FFF5E1]">
      {/* 2. Soft Paper Vignette (Radial Gradient Background Layer) */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 no-print"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(135% 125% at 50% 20%, #FFF5E1 0%, #F7ECD4 60%, #EFE2C6 100%)",
        }}
      />

      {/* 1. Fixed SVG Noise Overlay — Washi Paper Texture across all pages (Topmost Layer z-[9999]) */}
      <div
        className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.07] mix-blend-multiply no-print select-none contrast-150"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          filter: "contrast(150%)",
        }}
      />

      {/* Main App Navigation Bar */}
      <div>
        <Navbar
          currentPage={currentPage}
          onNavigate={navigateTo}
        />

        {/* Dynamic Page Rendering based on URL Route */}
        <main className="no-print">
          {currentPage === "home" && (
            <HomeView
              onNavigate={navigateTo}
              onOpenPitch={() => setIsPitchOpen(true)}
              onOpenPrint={handleOpenPdfModal}
            />
          )}

          {currentPage === "heritage" && (
            <HeritagePage onBack={handleBack} onNavigate={navigateTo} />
          )}

          {currentPage === "hybrid" && (
            <HybridEdgePage onBack={handleBack} onNavigate={navigateTo} />
          )}

          {currentPage === "menu" && (
            <MenuPage onBack={handleBack} onNavigate={navigateTo} />
          )}

          {currentPage === "business" && (
            <BusinessConceptPage onBack={handleBack} onNavigate={navigateTo} />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenPitch={() => setIsPitchOpen(true)}
        onOpenPrint={handleOpenPdfModal}
      />

      {/* Pitch Modal */}
      <PitchModal isOpen={isPitchOpen} onClose={() => setIsPitchOpen(false)} />

      {/* PDF Download Confirmation Modal */}
      <PdfDownloadModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
      />

      {/* PDF application layout for print / save as PDF */}
      <PrintPortfolio />
    </div>
  );
}
