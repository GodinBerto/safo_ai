"use client";

import { X, Mail, Github, Chrome } from "lucide-react";
import Image from "next/image";

interface AuthPopupProps {
  onClose: () => void;
}

export default function AuthPopup({ onClose }: AuthPopupProps) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-neutral-900 w-[380px] rounded-2xl shadow-2xl p-6 relative border border-white/10 animate-fadeIn"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10  flex items-center justify-center text-white text-xl font-bold">
            <Image
              alt=""
              src={"/logo/logo.jpg"}
              width={1000}
              height={1000}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-2xl font-semibold text-center">
          Start Building.
        </h2>
        <p className="text-gray-400 text-center mb-6">Create free account</p>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-neutral-800 hover:bg-neutral-700 border border-white/10 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all">
            <Chrome size={18} /> Continue with Google
          </button>
          <button className="w-full bg-neutral-800 hover:bg-neutral-700 border border-white/10 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all">
            <Github size={18} /> Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="grow h-px bg-white/10"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="grow h-px bg-white/10"></div>
        </div>

        {/* Email Button */}
        <button className="w-full bg-white text-black py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-gray-200 transition-all">
          <Mail size={18} /> Continue with email
        </button>

        {/* Terms */}
        <p className="text-gray-500 text-xs text-center mt-5">
          By continuing, you agree to the{" "}
          <a href="#" className="text-gray-300 underline hover:text-white">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-gray-300 underline hover:text-white">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
