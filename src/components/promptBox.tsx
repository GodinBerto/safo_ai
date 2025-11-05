import {
  Paperclip,
  UploadCloud,
  Globe,
  Zap,
  Plus,
  ArrowUp,
  AudioLines,
} from "lucide-react";

export default function PromptBox() {
  const items = [
    { icon: Paperclip, label: "Attach" },
    { icon: UploadCloud, label: "What is SafoAI" },
    { icon: Globe, label: "Public" },
    { icon: Zap, label: "Supabase" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center gap-5">
      {/* Input box */}
      <div className="relative flex items-center w-full bg-[#1a1a1a] border border-white/10 rounded-full px-5 py-3 text-white focus-within:border-white/20 transition-all duration-200">
        <Paperclip size={18} className="text-white/40 mr-3" />
        <div className="h-full bg-white/10 w-px mr-3" />
        <input
          type="text"
          placeholder="What do you want to know?"
          className="w-full bg-transparent outline-none text-sm placeholder:text-white/40"
        />
        <div className="flex items-center gap-3">
          <button className="text-white/60 hover:text-white transition">
            <AudioLines size={20} />
          </button>
          <button className="bg-white text-black rounded-full p-2 hover:opacity-90 transition">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      {/* Option buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {items.map(({ icon: Icon, label }, i) => (
          <button
            key={i}
            className="flex items-center gap-2 border border-white/10 text-white/70 hover:text-white hover:border-white/30 text-sm px-4 py-2 rounded-full transition-all duration-200"
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
        <button className="flex items-center gap-2 border border-white/10 text-white/70 hover:text-white hover:border-white/30 text-sm px-4 py-2 rounded-full transition-all duration-200">
          <Plus size={16} />
          More
        </button>
      </div>

      {/* Terms note */}
      <p className="text-xs text-white/40 mt-1">
        By messaging Safo, you agree to our{" "}
        <span className="text-white/60 underline hover:text-white cursor-pointer">
          Terms
        </span>{" "}
        and{" "}
        <span className="text-white/60 underline hover:text-white cursor-pointer">
          Privacy Policy
        </span>
        .
      </p>
    </div>
  );
}
