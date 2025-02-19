"use client";

import { ImGithub } from "react-icons/im";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import ModeToggle from "@/components/ui/mode-toggle";
import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  { href: "#home", label: "ホーム" },
  { href: "#about", label: "プロフィール" },
  { href: "#project", label: "制作物" },
  { href: "#skill", label: "スキル" },
  { href: "#path", label: "道のり" },
];

export default function Header() {
  return (
    <header className="mx-10 lg:mx-40 my-3 px-4 py-2 flex items-center lg:justify-center rounded-full bg-card border border-border sticky top-3 z-50 shadow-md">
      <NavigationMenu className="block lg:hidden">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger />
            <NavigationMenuContent>
              <ul className="gap-3 px-6 pb-6 w-[350px]">
                <div className="py-6 px-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <Link
                      href="https://github.com/Tenplant1203"
                      className="size-1"
                    >
                      <ImGithub />
                    </Link>
                  </Button>
                  <ModeToggle />
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Link href="https://x.com/Tenplant1203">
                      <MessageCircle />
                    </Link>
                  </Button>
                </div>
                {navItems.map(({ href, label }) => (
                  <ListItem key={href} href={href} title={label}></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button key="home" variant="ghost" className="rounded-full" asChild>
        <Link href="#home">
          <h1 className="font-semibold text-xl">Tenji Matsumoto</h1>
        </Link>
      </Button>

      <nav className="ml-auto hidden lg:block">
        {navItems.map(({ href, label }) => (
          <Button key={href} variant="ghost" asChild>
            <Link href={href} className="text-xs font-medium leading-none">
              {label}
            </Link>
          </Button>
        ))}
      </nav>

      <div className="ml-auto hidden lg:block">
        <Button variant="ghost" size="icon" className="rounded-full" asChild>
          <Link href="https://github.com/Tenplant1203" className="size-1">
            <ImGithub />
          </Link>
        </Button>
        <ModeToggle />
        <Button variant="ghost" size="icon" className="rounded-full">
          <Link href="https://x.com/Tenplant1203">
            <MessageCircle />
          </Link>
        </Button>
      </div>
    </header>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
