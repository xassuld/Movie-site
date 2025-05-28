"use client";
import { Input } from "@/components/ui/input";
import Footer from "@/components/ui/hasa-component/Footer";
import Slide from "@/components/ui/hasa-component/carousel";
import GenreSelector from "@/components/ui/hasa-component/select";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      {/* NAVIGATION */}
      <div className="h-[56px] px-4 flex justify-center items-center">
        <div className="w-[1280px] flex items-center justify-between">
          <img src="Logo.png" className="w-[92px] h-[20px]" />
          <div className="flex gap-3">
            <GenreSelector />
            <Input placeholder="Search..." className="w-[379px]" />
          </div>
          <img src="Modes.png" className="w-9 h-9" />
        </div>
      </div>
      {/* CAROUSEL RECOMMENDATION */}
      <Slide />
      {/* MOVIE PART */}
      <div className=" w-screen flex flex-col items-center mt-13">
        {/* UPCOMING PART */}
        <div className="flex justify-between items-center w-[1277px]">
          <h1 className="font-bold text-[24px]">Upcoming</h1>
          <button className="flex items-center gap-[8px] px-[16px] hover:cursor-pointer">
            See more
            <img src="arrow-right.png" className="w-[16px] h-[16px]" />
          </button>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
