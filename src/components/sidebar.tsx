import {
  PlusCircle,
  MessageSquare,
  Globe,
  Mic,
  Rocket,
  Plus,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#0e0e0e] border-r border-stone-800 flex flex-col justify-between">
      <div>
        <div className="p-4 flex items-center justify-between border-b h-[90px] border-stone-800">
          <h2 className="text-lg font-bold">Safo AI</h2>
          <span className="text-sm bg-stone-800  rounded-md flex justify-center items-center gap-1 px-2 pt-1">
            v1.25
          </span>
        </div>

        <div className="m-4 relative overflow-hidden rounded-lg">
          {/* Circle behind glass */}
          <div className="bg-white rounded-full h-[100px] w-[100px] absolute top-[43px] left-[50%] blur-md z-0"></div>

          {/* Glass button */}
          <button className="relative z-10 w-full bg-white/10 hover:bg-white/20 backdrop-blur-md py-2 px-3 rounded-lg flex items-center gap-2 border border-white/10 shadow-md shadow-white/20 transition-all duration-200">
            <Plus size={18} /> Add new chat
          </button>
        </div>

        <div className="px-4 space-y-4 text-stone-300 text-sm">
          <div>
            <h3 className="uppercase text-xs text-stone-400 mb-2">Today</h3>
            <ul className="space-y-1">
              <li>Analyzing how Bitcoin’s...</li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-xs text-stone-400 mb-2">Yesterday</h3>
            <ul className="space-y-1">
              <li>Make IO others sentenc...</li>
              <li>Generate trucking americ...</li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-xs text-stone-400 mb-2">Previous</h3>
            <ul className="space-y-1">
              <li>How does inflation affe...</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-stone-800">
        <button className="w-full flex items-center justify-center gap-2 bg-white text-black py-2 rounded-lg">
          <Rocket size={16} /> Become Pro Access
        </button>
      </div>
    </aside>
  );
}
