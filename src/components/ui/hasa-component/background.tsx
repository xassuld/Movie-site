export default function Background({
  src,
  description,
  title,
}: {
  src: string;
  description: string;
  title: string;
}) {
  return (
    <div
      className="w-full h-[900px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="text-white w-[404px] flex flex-col gap-[24px] ml-[140px]">
        <div>
          <p>Now playing:</p>
          <h1 className="text-[36px] font-bold">{title}</h1>
          <div className="flex gap-[2px] items-center">
            <img src="star.png" alt="" className="w-[28px] h-[28px]" />
            <p className="text-[18px]">6.9/10</p>
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>

        <div>
          <div className="w-[145px] h-[40px] bg-white text-black rounded-md flex items-center justify-center gap-[8px]">
            <img src="play.png" alt="" className="w-[16px] h-[16px]" />
            Watch Trailer
          </div>
        </div>
      </div>
    </div>
  );
}
