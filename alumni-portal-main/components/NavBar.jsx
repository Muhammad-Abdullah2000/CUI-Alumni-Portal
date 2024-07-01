import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants, Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function NavBar() {
  return (
    <header className="py-6 flex-col flex shadow-md">
      <div className="flex justify-between items-center w-full">
        <div>
          <a href="/">
            <h4 className="ml-2 text-primary font-bold">
              COMSIANS&apos; Connect
            </h4>
          </a>
        </div>
        <nav className="mx-4 flex-row gap-4 hidden md:flex">
          <Link
            href="/mentor/browse"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Browse Mentors
          </Link>
          <Link
            href="/mentor/apply"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Become Mentor
          </Link>
          <div className="hover:translate-y-1 transition-all w-min ml-8">
            <Link
              href="/signup"
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <strong>Sign Up</strong>
            </Link>
          </div>
          <div className="hover:translate-y-1 transition-all w-min">
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              <strong>Login</strong>
            </Link>
          </div>
        </nav>
        <div className="block md:hidden mr-4">
          <Sheet>
            <SheetTrigger className="bg-blue-900/80 rounded-full p-1">
              <MenuIcon className="p-1 h-10 w-10 text-white" />
            </SheetTrigger>
            <SheetContent className="bg-[#20549d] w-[70%]">
              <div className="flex flex-col mt-20 space-y-4">
                <Link
                  href="/mentor/browse"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Browse Mentors
                </Link>
                <Link
                  href="/mentor/apply"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Become Mentor
                </Link>
                <Link
                  href="/signup"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  <strong>Sign Up</strong>
                </Link>
                <Link
                  href="/login"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  <strong>Login</strong>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
