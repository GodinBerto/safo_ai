import { Search } from "lucide-react";
import { useState } from "react";
import AuthPopup from "./authPopup";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-5 border-b border-stone-800 h-[90px] z-30">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search history..."
            className=" relativew-full pl-8 w-[300px] pr-3 py-3 text-sm text-white bg-white/10 placeholder-white/50 rounded-full backdrop-blur-md border border-white/10 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all duration-200"
          />

          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
        </div>

        <div className="flex gap-2">
          <button
            className="bg-white text-black rounded-xl px-5 py-2 font-medium hover:bg-gray-200 relative"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <button className="bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 text-white rounded-xl px-5 py-2 font-medium hover:bg-gray-200 relative">
            Get Started
          </button>
        </div>
      </div>
      {/* Popup */}
      {showLogin && <AuthPopup onClose={() => setShowLogin(false)} />}
    </>
  );
}
