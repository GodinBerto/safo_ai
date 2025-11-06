"use client";
import ColorBends from "@/components/ColorBends";
import MenuSidePanal from "@/components/menuSidePanal";
import Navbar from "@/components/navbar";
import PromptBox from "@/components/promptBox";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen text-white relative ">
      <div className="fixed inset-0 -z-10">
        {/* Background (your ColorBends animation or 3D canvas) */}
        <ColorBends />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] pointer-events-none" />
      </div>

      {/* ===== Desktop Sidebar & Menu ===== */}
      <div className="hidden md:flex fixed left-0 top-0 h-full z-30">
        <MenuSidePanal />
        <Sidebar />
      </div>

      {/* ===== Main Content ===== */}
      <main className="flex-1 relative overflow-y-auto md:ml-[calc(88px+288px)]">
        <Navbar />

        <div className="relative w-full bg-fixed z-10">
          <div className="min-h-[calc(100vh-90px)] p-6 md:p-10 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-5xl font-semibold mb-3 leading-tight">
              Create a business with{" "}
              <span className="bg-linear-to-r from-red-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                SafoAI
              </span>
            </h2>
            <p className="text-stone-400 mb-8 text-sm md:text-base">
              Start building with a single prompt. No coding needed.
            </p>

            <div className="w-full max-w-3xl">
              <PromptBox />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
