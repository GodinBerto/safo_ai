import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="h-20 flex items-center absolute bottom-0 w-full">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center text-sm text-white/70">
        {/* Left: Logo and name */}
        <div className="flex items-center gap-2"></div>

        {/* Center: Copyright */}
        <p className="text-center text-white/60"></p>

        {/* Right: Social icons */}
        <div className="flex items-center gap-4">
          <Facebook className="h-5 w-5 text-white/60 hover:text-white transition-colors cursor-pointer" />
          <Twitter className="h-5 w-5 text-white/60 hover:text-white transition-colors cursor-pointer" />
          <Linkedin className="h-5 w-5 text-white/60 hover:text-white transition-colors cursor-pointer" />
          <Instagram className="h-5 w-5 text-white/60 hover:text-white transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
