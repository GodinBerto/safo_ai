import {
  Paperclip,
  UploadCloud,
  Globe,
  Zap,
  Plus,
  Voicemail,
  ArrowUp,
  AudioLines,
} from "lucide-react";

export default function PromptBox() {
  const items = [
    { icon: Paperclip, label: "Attach" },
    { icon: UploadCloud, label: "Import from Figma" },
    { icon: Globe, label: "Public" },
    { icon: Zap, label: "Supabase" },
  ];
  return (
    <div className="bg-[#111] border border-stone-800 rounded-2xl p-6 w-6xl h-[250px] mx-auto text-left flex flex-col justify-between">
      <p className="text-stone-500 mb-4">Ask vO to create a web app that...</p>
      <div className="flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-sm p-3 rounded-full transition-all duration-200">
            <Plus size={16} />
          </button>
          {items.map(({ icon: Icon, label }, index) => (
            <button
              key={index}
              className="flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-sm px-3 py-2 rounded-lg transition-all duration-200"
            >
              <Icon size={16} />
              <p className="text-[16px]">{label}</p>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-sm p-3 rounded-full transition-all duration-200">
            <AudioLines size={20} />
          </button>
          <button className="flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-sm p-3 rounded-full transition-all duration-200">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
