import { ArrowRight } from "lucide-react";

export default function WorkspaceSection() {
  return (
    <section className="mt-20 w-full bg-[url('/images/workspace-bg.jpg')] bg-cover bg-center bg-no-repeat rounded-3xl p-10 border border-stone-800 relative overflow-hidden backdrop-blur-lg">
      {/* Overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div> */}

      <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-semibold">SafoAI Workspace</h3>
            <p className="text-stone-400 text-sm">
              Explore your creative space powered by SafoAI — design, build, and
              deploy intelligent projects seamlessly, all in one place.
            </p>
          </div>
          <button className="text-black bg-white hover:bg-stone-200 px-4 py-2 rounded-full text-md font-medium transition-all duration-200 flex items-center gap-2">
            View All{" "}
            <span>
              <ArrowRight />
            </span>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[url('/images/image1.png')] bg-no-repeat bg-center bg-cover rounded-2xl h-[300px]"></div>
          <div className="bg-[url('/images/image1.png')] bg-no-repeat bg-center bg-cover rounded-2xl h-[300px]"></div>
          <div className="bg-[url('/images/image1.png')] bg-no-repeat bg-center bg-cover rounded-2xl h-[300px]"></div>
        </div>
      </div>
    </section>
  );
}
