"use client";

import { ImGithub } from "react-icons/im";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import ModeToggle from "@/components/ui/mode-toggle";

const navItems = [
  { href: "#home", label: "ホーム" },
  { href: "#about", label: "プロフィール" },
  { href: "#project", label: "制作物" },
  { href: "#skill", label: "スキル" },
  { href: "#path", label: "道のり" },
];

export default function Header() {
  return (
    <header className="mx-40 my-3 px-2 py-1 flex items-center justify-center rounded-full bg-card border border-border sticky top-3 z-50 shadow-md">
      <Button key="home" variant="ghost" className="rounded-full" asChild>
        <Link href="#home">
          <h1 className="font-semibold">Tenji Matsumoto</h1>
        </Link>
      </Button>
      <nav className="ml-auto">
        {navItems.map(({ href, label }) => (
          <Button key={href} variant="ghost" asChild>
            <Link href={href} className="text-xs font-medium leading-none">
              {label}
            </Link>
          </Button>
        ))}
      </nav>
      <div className="flex ml-auto">
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
