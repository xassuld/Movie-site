"use client";
import { Input } from "@/components/ui/input";
import Footer from "@/components/ui/hasa-component/Footer";
import Slide from "@/components/ui/hasa-component/carousel";
import Navigation from "@/components/ui/hasa-component/select";
import { useEffect, useState } from "react";
import MovieCard from "@/components/ui/hasa-component/Movie-card";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjdkOGJlYmQwZjRmZjM0NWY2NTA1Yzk5ZTlkMDI4OSIsIm5iZiI6MTc0MjE3NTA4OS4zODksInN1YiI6IjY3ZDc3YjcxODVkMTM5MjFiNTAxNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KxFMnZppBdHUSz_zB4p9A_gRD16I_R6OX1oiEe0LbE8";

type Movie = {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
};

type MovieResponse = {
  results: Movie[];
};

export default function Home() {
  const [movies, setMovies] = useState<MovieResponse>({ results: [] });
  const baseUrl = "https://api.themoviedb.org/3/movie";

  useEffect(() => {
    fetch(`${baseUrl}/popular?language=en-US&page=1`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return (
    <div className="w-screen h-screen">
      {/* NAVIGATION */}
      <Navigation />
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

        {/* MOVIES */}
        <div className="max-w-[1400px] m-auto py-5 flex flex-col gap-11">
          <section>
            <div className="grid grid-cols-5 gap-5">
              {movies?.results?.map((movie) => {
                return (
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    rate={movie.vote_average}
                    description={movie.overview}
                    image={movie.poster_path}
                  />
                );
              })}
            </div>
          </section>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
