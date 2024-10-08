"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <span className="font-bold text-white bg-black px-1 rounded-md transition-transform transform hover:scale-110">
            Text
          </span>
          <span className="font-bold text-black bg-white px-1 rounded-md transition-transform transform hover:scale-110">
            Speech
          </span>
        </Link>
        <div className="flex gap-4 ml-10"></div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className="font-bold text-white bg-black px-1 rounded-md transition-transform transform hover:scale-110">
                Text
              </span>
              <span className="font-bold text-black bg-white px-1 rounded-md transition-transform transform hover:scale-110">
                Speech
              </span>
            </Link>
            <div className="flex flex-col gap-4"></div>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4"></div>
    </header>
  );
}
