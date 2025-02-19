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

export function ContentsCard() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Coming Soon!</CardTitle>
        <CardDescription>Project Description</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter>
        <div className="flex items-center pt-2">
          <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
          <span className="text-xs text-muted-foreground">
            Created Month Year
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
