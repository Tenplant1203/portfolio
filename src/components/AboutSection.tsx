import * as React from "react";

import { CalendarDays } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="my-auto scroll-m-20">
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className=" my-6 scroll-m-20 text-4xl font-semibold tracking-tight lg:text-4xl">
          About me
        </h2>
        <p className="text-muted-foreground">私について</p>
        <Card className="w-[350px] md:w-[600px] lg:w-[600px] my-5">
          <CardHeader>
            <CardTitle className="flex justify-center text-xl md:text-2xl lg:text-2xl">
              Tenji Matsumoto(松本天獅)
            </CardTitle>
            <div className="flex flex-col gap-2 items-center justify-center pt-2">
              <Image
                src="/image/me.jpg"
                alt="me"
                width={100}
                height={100}
                className="rounded-full size-24 md:size-52 lg:size-52"
              />
              <CardDescription className="md:text-2xl pt-2">
                CS大学大学所属
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="md:text-2xl lg:text-2xl">
            こんにちは！😃
            <br />
            私はCS系大学に所属しています。 主にWeb
            Engineeringに興味があり、特に最近はJavaやAPI, DB, SQLを学習中です！
          </CardContent>
          <CardFooter>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                I was born in 2005
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
