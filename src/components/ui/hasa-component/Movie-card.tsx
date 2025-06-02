type MovieCardProps = {
  title: string;
  rate: number;
  description: string;
  image?: string;
};

const MovieCard = ({ title, rate, description, image }: MovieCardProps) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="flex flex-col p-2">
      <img
        src={`${imageUrl}${image}`}
        alt="poster"
        className="w-[300px] h-[340px] rounded-t-md"
      />
      <div className="bg-gray-100 rounded-b-md">
        <div className="flex items-center gap-[4px] ">
          <img src="star.png" alt="" className="w-[16px] h-[16px]" />
          <div className="flex">
            <p className="text-[14px] font-[500]">
              {Math.floor(rate / 0.1) / 10}
            </p>
            <p className="text-[12px] font-[500] flex items-end text-[#71717A]">
              /10
            </p>
          </div>
        </div>
        <p className="text-lg mt-2 h-[56px]">{title}</p>
        {/* <p className="text-lg mt-2">{description}</p> */}
      </div>
    </div>
  );
};

export default MovieCard;
