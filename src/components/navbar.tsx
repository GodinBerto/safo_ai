"use client";

import { useState } from "react";
import AuthPopup from "./authPopup";
import { Bot, Menu } from "lucide-react";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // new state for menu toggle

  return (
    <>
      <div className="flex justify-between items-center p-5 h-[90px] z-30">
        {/* Menu Icon (Left Side) */}
        <div className="relative w-full max-w-xs flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md text-white hover:bg-white/10 transition-all duration-200 md:hidden "
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Profile (Right Side) */}
        <div className="flex gap-1 items-center text-white/40 animate-pulse h-10">
          <Bot size={20} /> <h1 className="text-md ">Chat</h1>
        </div>
      </div>

      {/* Popup */}
      {showLogin && <AuthPopup onClose={() => setShowLogin(false)} />}

      {/* Example Mobile Menu (optional placeholder for later) */}
      {menuOpen && (
        <div className="absolute top-[90px] left-0 w-full bg-black/80 backdrop-blur-lg border-t border-white/10 p-4 flex flex-col items-start gap-3 md:hidden z-50 animate-fade-in">
          <button className="text-white/80 hover:text-white">Dashboard</button>
          <button className="text-white/80 hover:text-white">Projects</button>
          <button className="text-white/80 hover:text-white">Settings</button>
          <button className="text-white/80 hover:text-white">Logout</button>
        </div>
      )}
    </>
  );
}
