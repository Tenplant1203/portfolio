"use client";

import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col gap-5 lg:flex-row items-center my-auto lg:ml-36 lg:py-5"
    >
      <div className="flex flex-col gap-5">
        <h2 className="scroll-m-20 text-6xl font-semibold tracking-tight lg:text-7xl">
          Leveling in <br />
          Web <br />
          Engineering
        </h2>
        <p className="text-muted-foreground text-xl lg:text-2xl">
          新しいスキルを求めて
        </p>
      </div>
      <AspectRatio ratio={16 / 9} className="mx-5 lg:scale-75">
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
