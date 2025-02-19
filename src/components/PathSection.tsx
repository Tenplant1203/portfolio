import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

import { CircleDotDashed } from "lucide-react";
import { CalendarDays } from "lucide-react";

export default function PathSection() {
  return (
    <section id="path" className="my-auto scroll-m-20">
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="flex justify-center my-6 scroll-m-20 text-4xl font-semibold tracking-tight lg:text-4xl">
          My Path
        </h2>
        <p className="text-muted-foreground">今までの道のり</p>
      </div>

      <div className="relative px-10 lg:px-40 mx-auto">
        <div className="grid grid-cols-2 py-4 border-t-4">
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex justify-center">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <CircleDotDashed />
                </Button>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/image/university.jpg"
                  alt="university"
                  fill
                  className="rounded-md"
                />
              </AspectRatio>
              <h3 className="text-sm font-semibold pt-2">Higher Education</h3>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">
                  Joined April 2024
                </span>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex justify-center">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <CircleDotDashed />
                </Button>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/image/path.jpg"
                  alt="path"
                  fill
                  className="rounded-md"
                />
              </AspectRatio>
              <h3 className="text-sm font-semibold pt-2">???</h3>
              <div className="flex items-center pt-2">
                <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                <span className="text-xs text-muted-foreground">???</span>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </section>
  );
}
