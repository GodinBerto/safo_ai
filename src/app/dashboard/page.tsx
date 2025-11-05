"use client";
import MenuSidePanal from "@/components/menuSidePanal";
import Navbar from "@/components/navbar";
import PromptBox from "@/components/promptBox";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen  text-white relative ">
      <div className="flex fixed left-0 top-0 h-full z-30">
        <MenuSidePanal />
        <Sidebar />
      </div>
      <main className="flex-1 relative overflow-y-auto ml-[calc(88px+288px)]">
        <Navbar />
        <div className="relative w-full bg-fixed z-10">
          <div className=" h-[calc(100vh-90px)] p-10 relative flex flex-col items-center justify-center">
            <div className="text-center  w-full flex flex-col justify-center items-center">
              <h2 className="text-5xl font-semibold mb-3 w-full">
                Create a business with{" "}
                <span className="bg-linear-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                  SafoAI
                </span>{" "}
              </h2>
              <p className="text-stone-500 mb-8">
                Start building with a single prompt. No coding needed.
              </p>
              <PromptBox />
            </div>

            {/* <WorkspaceSection /> */}
          </div>
        </div>

        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 pointer-events-none"></div> */}
      </main>
    </div>
  );
}
