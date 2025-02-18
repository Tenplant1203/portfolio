"use client";

import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

export default function HeroSection() {
  return (
      <section id="home" className="flex items-center pl-24 py-5">
        <div className="flex flex-col gap-3">
          <h2 className="scroll-m-20 text-5xl font-semibold tracking-tight lg:text-5xl">
            Leveling in <br />
            Web <br />
            Engineering
          </h2>
          <p className="text-muted-foreground">新しいスキルを求めて</p>
        </div>
        <AspectRatio ratio={16 / 9} className="scale-75">
          <Image
            src="/image/map.jpg"
            alt="Image"
            fill
            className="rounded-2xl object-cover"
          />
        </AspectRatio>
      </section>
  );
}
