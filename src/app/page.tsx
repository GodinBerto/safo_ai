"use client";

import ColorBends from "@/components/ColorBends";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import LandingNavbar from "@/components/landingNavbar";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10">
        {/* Background (your ColorBends animation or 3D canvas) */}
        <ColorBends />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none" />
      </div>

      {/* Navigation */}
      <LandingNavbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
