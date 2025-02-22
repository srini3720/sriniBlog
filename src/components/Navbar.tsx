"use client";

import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Phone, Rss, Menu } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold flex">
            <a rel="noreferrer noopener" href="/" className="ml-2 font-bold text-xl flex">
              Srinivasan
            </a>
          </NavigationMenuItem>

          {/* Mobile */}
          <div className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="h-5 w-5" aria-label="Menu Icon" />
              </SheetTrigger>

              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">Srinivasan Shanmugam</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/srini3720"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({ variant: "secondary" })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" aria-hidden="true" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex gap-2"></nav>

          <div className="hidden md:flex gap-2">
            <a
              rel="noreferrer noopener"
              href="/blog"
              className={`border ${buttonVariants({ variant: "secondary" })}`}
            >
              <Rss className="mr-2 w-4 h-4" aria-hidden="true" />
              Blog
            </a>
            <a
              rel="noreferrer noopener"
              href="https://cal.com/srinivasan"
              target="_blank"
              className={`border ${buttonVariants({ variant: "default" })}`}
            >
              <Phone className="mr-2 w-4 h-4" aria-hidden="true" />
              Book a Meeting
            </a>

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};