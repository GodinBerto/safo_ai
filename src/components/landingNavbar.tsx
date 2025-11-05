// components/GlassNavbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthPopup from "./authPopup";

export default function LandingNavbar({ logo = "SAFOAI" }: { logo?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // Add small shadow after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed z-50 transition-colors duration-300 flex justify-center w-screen ${
          scrolled ? "" : ""
        }`}
        aria-label="Primary"
      >
        <nav
          className={`mx-auto container px-4 sm:px-6 lg:px-8`}
          role="navigation"
          aria-label="Main navigation"
        >
          <div
            className={`relative flex h-16 items-center justify-between rounded-2xl p-3
            
             duration-300 ${scrolled ? "shadow-lg/10" : ""}`}
            style={{
              boxShadow: scrolled ? "0 8px 30px rgba(2,6,23,0.55)" : "",
            }}
          >
            {/* Left: Logo */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg
                           font-bold"
                  aria-hidden
                >
                  <Image
                    alt=""
                    src={"/logo/logo.jpg"}
                    width={1000}
                    height={1000}
                    className="rounded-full w-full"
                  />
                </div>
                <span className="hidden select-none text-lg font-semibold text-white sm:block">
                  {logo}
                </span>
              </Link>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setShowLogin(!showLogin);
                }}
                className="flex items-center gap-2 border border-white/20 text-white hover:text-white hover:border-white/30 text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-pointer"
              >
                Sign in
              </button>

              <button
                onClick={() => {
                  setShowLogin(!showLogin);
                }}
                className="rounded-full bg-white hover:bg-white/80 text-black text-sm py-2 px-5 transition cursor-pointer"
              >
                Sign up
              </button>

              {/* Mobile menu button */}
              {/* <button
                onClick={() => setOpen((s) => !s)}
                aria-controls="mobile-menu"
                aria-expanded={open}
                className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/4 text-white/90 hover:bg-white/6 md:hidden"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button> */}
            </div>

            {/* Mobile menu (floating under navbar) */}
            <div
              id="mobile-menu"
              className={`absolute left-0 right-0 top-full mt-2 md:hidden ${
                open ? "block" : "hidden"
              }`}
            >
              <div
                className="mx-4 rounded-xl bg-black backdrop-blur-lg border border-white/8 p-4 shadow-lg"
                role="menu"
              >
                <div className="flex flex-col gap-2">
                  <div className="mt-3 border-t border-white/6 pt-3">
                    <button
                      className="block rounded-md bg-linear-to-r from-indigo-600 to-purple-600 px-3 py-2 text-center text-sm font-semibold text-white"
                      onClick={() => setOpen(false)}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Popup */}
      {showLogin && <AuthPopup onClose={() => setShowLogin(false)} />}
    </>
  );
}
