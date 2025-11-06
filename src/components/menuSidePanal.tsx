import {
  Book,
  Bot,
  Brain,
  ChartBar,
  Lightbulb,
  Rocket,
  Settings,
} from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SettingsDropdown from "./settingsDropdown";

export default function MenuSidePanal() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="w-22 py-5 flex flex-col justify-between border-r border-stone-600/10 bg-stone-300/10 backdrop-blur-xl">
      <div className="flex flex-col gap-6 items-center">
        <Image
          alt=""
          src={"/logo/logo.jpg"}
          width={1000}
          height={1000}
          className="rounded-full w-[50px] h-[50px]"
        />

        <div className="flex flex-col gap-6 items-center mt-10">
          <Bot
            size={40}
            className="bg-white text-black p-2 rounded-lg shadow-md shadow-white/30"
          />
          <Book
            size={40}
            className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
          />
          <ChartBar
            size={40}
            className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
          />
          <Lightbulb
            size={40}
            className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
          />
          <Brain
            size={40}
            className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
          />
          <Rocket
            size={40}
            className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 items-center mt-10 relative">
        <Settings
          size={40}
          onClick={() => setOpen((prev) => !prev)}
          className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-[70px] bottom-10 animate-in fade-in slide-in-from-left-2 duration-150 z-50">
          <SettingsDropdown />
        </div>
      )}
    </div>
  );
}
