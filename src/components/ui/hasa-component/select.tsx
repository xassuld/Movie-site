import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function GenreSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-white text-black hover:bg-white border-[#E4E4E7] border">
          <ChevronDown />
          Genre
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-5">
        <DropdownMenuLabel className="w-[577px] flex flex-col">
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-semibold">Genres</p>
            <p className="text-[16px]">See lists of movies by genre</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-4" />
        <DropdownMenuGroup className="w-[577px] flex gap-4 flex-wrap">
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Action
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Adventure
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Animation
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Biography
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Comedy
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Crime
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Documentary
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Drama
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Family
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Fantasy
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Film-Noir
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Game-Show
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            History
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Horror
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Music
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Musical
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Mystery
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            News
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Reality-Show
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Romance
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Sci-Fi
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Short
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Sport
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Talk-Show
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Thriller
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            War
            <ChevronRight />
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-white text-black hover:bg-amber-50 border border-[#E4E4E7] w-fit">
            Western
            <ChevronRight />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
