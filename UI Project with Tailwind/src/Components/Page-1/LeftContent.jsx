import { ArrowUpRight } from "lucide-react";
import HeroText from "./HeroText";

export default function LeftContent() {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between ">
      <HeroText />
      <div>
        <ArrowUpRight className="w-25 h-25" />
      </div>
    </div>
  );
}
