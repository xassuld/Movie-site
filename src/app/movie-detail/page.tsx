import Navigation from "@/components/ui/hasa-component/select";
export default function Details() {
  return (
    <div className="w-screen h-screen">
      <Navigation />
      <div className="w-full h-full flex flex-col items-center mt-[52px]">
        {/* MOVIE FRAME */}
        <div className="w-[1080px] flex flex-col gap-6">
          <div className="w-full flex justify-between items-center">
            {/* MOVIE DESC TITLE */}
            <div className="w-[211px] flex flex-col gap-1 items-start">
              <p className="text-[36px] font-[700]">Wicked</p>
              <p className="text-[18px] font-400">2024.11.26 · PG · 2h 40m</p>
            </div>
            {/* FRAME */}
            <div className="flex flex-col items-start">
              <p className="text-[12px] font-500">Rating</p>
              <div className="flex h-[48px] items-center gap-1">
                <img src="star.png" className="w-[28px] h-[28px]" />
                <div className="flex flex-col items-start">
                  <div className="flex">
                    <p className="text-[18px] font-600">6.9</p>
                    <p className="text-[16px] font-400 text-[#71717A] flex items-end">
                      /10
                    </p>
                  </div>
                  <p className="text-[#71717A]">37k</p>
                </div>
              </div>
            </div>
          </div>
          {/* POSTER & VIDEO */}
          <div className="flex gap-8 items-center">
            <img src="MoviePoster.png" className="w-[290px] h-[428px]" />
            <img src="thumbnail.png" alt="" />
          </div>
        </div>
        {/* MOVIE DESCRIPTION */}
        <div className="w-[1080px] flex flex-col items-start gap-5"></div>
      </div>
    </div>
  );
}
