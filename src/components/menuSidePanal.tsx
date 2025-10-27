import {
  Book,
  Bot,
  Brain,
  ChartBar,
  Home,
  Lightbulb,
  LogOut,
  Menu,
  Rocket,
  Settings,
} from "lucide-react";
import Image from "next/image";

export default function MenuSidePanal() {
  return (
    <div className="w-28 py-5 flex flex-col justify-between border-r border-stone-800">
      <div className="flex flex-col gap-6 items-center">
        <Image
          alt=""
          src={"/logo/logo.jpg"}
          width={1000}
          height={1000}
          className="rounded-full w-[60px] h-[60px]"
        />
        <div className="flex flex-col gap-6 items-center mt-10">
          <Bot
            size={45}
            className="bg-white text-black p-2 rounded-lg shadow-md shadow-white/30"
          />
          <Book
            size={45}
            className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
          />
          <ChartBar
            size={45}
            className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
          />
          <Lightbulb
            size={45}
            className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
          />
          <Brain
            size={45}
            className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
          />
          <Rocket
            size={45}
            className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center mt-10">
        <Settings
          size={45}
          className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
        />
        <LogOut
          size={45}
          className="bg-black/40 backdrop-blur-md text-white border border-white/10 p-2 rounded-lg shadow-md shadow-white/30 hover:shadow-white transition-all duration-200 ease-in-out"
        />
      </div>
    </div>
  );
}
