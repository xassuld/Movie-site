import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      {/* NAVIGATION */}
      <div className="h-[56px] px-4 flex justify-center items-center">
        <div className="w-[1280px] flex items-center justify-between">
          <img src="Logo.png" className="w-[92px] h-[20px]" />
          <div className="flex gap-3">
            <Select>
              <SelectTrigger className="w-[97px] h-[36px]">
                <SelectValue placeholder="Genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Search..." className="w-[379px]" />
          </div>
          <img src="Modes.png" className="w-9 h-9" />
        </div>
      </div>
    </div>
  );
}
