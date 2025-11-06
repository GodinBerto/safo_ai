"use client";

import {
  BarChart3,
  FolderOpen,
  ShoppingCart,
  Settings,
  HelpCircle,
  LogOut,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

export default function SettingsDropdown() {
  return (
    <div className="w-72 bg-black rounded-2xl shadow-lg border border-stone-800 overflow-hidden z-50 relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-stone-900">
        <div className="flex items-center gap-3">
          <Image
            src="/images/profile.jpg"
            alt="User avatar"
            width={400}
            height={400}
            className="rounded-full w-10 h-10"
          />
          <div>
            <h4 className="font-semibold text-stone-100 text-sm">
              Sahil Prasoon
            </h4>
            <p className="text-stone-500 text-xs">sahilprasoon@gmail.com</p>
          </div>
        </div>
        <ExternalLink
          size={18}
          className="text-stone-400 hover:text-stone-600"
        />
      </div>

      {/* Menu */}
      <div className="p-2">
        {[
          { icon: BarChart3, label: "Profile Activity" },
          { icon: FolderOpen, label: "Manage Projects", active: true },
          { icon: ShoppingCart, label: "Purchases" },
          { icon: Settings, label: "Account Settings" },
          { icon: HelpCircle, label: "Help Center" },
        ].map(({ icon: Icon, label, active }, i) => (
          <button
            key={i}
            className={`flex items-center w-full gap-3 px-4 py-2.5 rounded-lg text-sm transition-all ${
              active
                ? "bg-stone-900 text-stone-100 font-medium"
                : "text-stone-400 hover:bg-stone-950 hover:text-stone-100"
            }`}
          >
            <Icon size={18} />
            {label}
          </button>
        ))}
      </div>

      {/* Plan section */}
      <div className="border-t border-stone-900 px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-stone-100">
            Student Plan Active
          </p>
          <p className="text-xs text-stone-500">284 Days Left</p>
        </div>
        <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-500/20 px-3 py-1.5 rounded-full transition-all">
          Upgrade
        </button>
      </div>

      {/* Logout */}
      <button
        className={`flex items-center w-full gap-3 px-4 py-3 text-sm transition-all border-t border-stone-900 ${
          false
            ? "bg-stone-900 text-stone-100 font-medium"
            : "text-stone-400 hover:bg-stone-950 hover:text-stone-100"
        }`}
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
}
