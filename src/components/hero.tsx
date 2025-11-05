"use client";

import PromptBox from "./promptBox";

export default function HeroSection() {
  return (
    <div className="relative h-[calc(100vh-80px)] text-white overflow-hidden flex flex-col justify-center items-center px-4 text-center">
      <PromptBox />
    </div>
  );
}
