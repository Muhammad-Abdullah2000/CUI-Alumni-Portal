/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

import { usePathname } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { currentMentor, currentUser } from "@/lib/constants";
import { ChevronDown, LinkIcon, MenuIcon } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { useRouter } from "next/navigation";
import { userAtom } from "@/app/user-state";
import { useAtom } from "jotai";

export default function DashNavBar() {
  const [userState, setUserState] = useAtom(userAtom);
  const router = useRouter();

  const currentPath = usePathname();
  const isMentee = currentPath.startsWith("/mentee");

  return (
    <div className=" shadow-md relative">
      <nav className="bg-[#163b6e]">
        <div className="mx-auto px-4 pr-2 lg:px-8 max-w-screen-xl">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center pt-2">
                <a href="/">
                  <img
                    className="h-10 w-10 rounded-full mx-2 border-2 p-2 border-white"
                    src="/comsian.png"
                    alt="Comsian connect logo"
                  />
                </a>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                <Link
                  href={`/${isMentee ? "mentee" : "mentor"}/dashboard/home`}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    `border-0 hover:bg-[#20549d]/40 text-white font-semibold text-[14px] ${
                      currentPath ===
                      (isMentee
                        ? "/mentee/dashboard/home"
                        : "/mentor/dashboard/home")
                        ? "bg-[#20549d]/70"
                        : ""
                    }`
                  )}
                >
                  {isMentee ? "Mentors" : "Mentees"}
                </Link>
                <Link
                  href={
                    isMentee
                      ? "/mentee/dashboard/applications"
                      : "/mentor/dashboard/applicants"
                  }
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    `border-0 hover:bg-[#20549d]/40 text-white font-semibold text-[14px] ${
                      currentPath ===
                      (isMentee
                        ? "/mentee/dashboard/applications"
                        : "/mentor/dashboard/applicants")
                        ? "bg-[#20549d]/70"
                        : ""
                    }`
                  )}
                >
                  {isMentee ? "Applications" : "Applicants"}
                </Link>
                {isMentee && (
                  <Link
                    href="/mentor/browse"
                    className={cn(
                      buttonVariants({ variant: "ghost" }),
                      "border-0 hover:bg-[#20549d]/40 text-white font-semibold text-[14px]"
                    )}
                  >
                    <span className="flex">
                      <span>Browse mentors</span>{" "}
                      <LinkIcon className="text-white h-4 w-4 ml-2" />
                    </span>
                  </Link>
                )}
              </div>
            </div>
            <div className="md:flex items-center hidden">
              <Popover>
                <PopoverTrigger>
                  <div className="flex gap-2 hover:bg-white/10 rounded-[16px] p-2">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="/default_avatar.webp"
                      alt="Profile"
                    />
                    <ChevronDown className="text-white self-center" />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="mr-[1vw] mt-1 rounded-[8px]">
                  <p className="font-semibold">
                    {isMentee ? currentUser.name : currentMentor.name}
                  </p>
                  <div className="border my-1 border-gray-300"></div>
                  <p className="text-sm">Signed in as</p>
                  <p className="-mt-1 font-bold">
                    {isMentee ? currentUser.email : currentMentor.email}
                  </p>
                  <Button
                    variant="destructive"
                    className="text-white mt-2"
                    onClick={() => {
                      setUserState((user) => ({
                        ...user,
                        isLoggedIn: false,
                        type: "",
                      }));
                    }}
                  >
                    Logout
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger>
                  <MenuIcon className="text-white p-1 h-10 w-10" />
                </SheetTrigger>
                <SheetContent className="bg-[#20549d] w-[70%]">
                  <div className="flex flex-col mt-20">
                    <Link
                      href={`/${isMentee ? "mentee" : "mentor"}/dashboard/home`}
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        `border-0 bg-[#20549d]/40 text-white font-semibold text-[14px] justify-start ${
                          currentPath ===
                          (isMentee
                            ? "/mentee/dashboard/home"
                            : "/mentor/dashboard/home")
                            ? "bg-secondary/30"
                            : ""
                        }`
                      )}
                    >
                      {isMentee ? "Mentors" : "Mentees"}
                    </Link>
                    <Link
                      href={
                        isMentee
                          ? "/mentee/dashboard/applications"
                          : "/mentor/dashboard/applicants"
                      }
                      className={cn(
                        buttonVariants({ variant: "ghost" }),
                        `border-0 bg-[#20549d]/40 text-white font-semibold text-[14px] justify-start ${
                          currentPath ===
                          (isMentee
                            ? "/mentee/dashboard/applications"
                            : "/mentee/dashboard/applicants")
                            ? "bg-secondary/30"
                            : ""
                        }`
                      )}
                    >
                      {isMentee ? "Applications" : "Applicants"}
                    </Link>
                    {isMentee && (
                      <Link
                        href="/mentor/browse"
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "border-0 bg-[#20549d]/40 text-white font-semibold text-[14px] justify-start"
                        )}
                      >
                        <span className="flex">
                          <span>Browse mentors</span>{" "}
                          <LinkIcon className="text-white h-4 w-4 ml-2" />
                        </span>
                      </Link>
                    )}
                    <div className="bg-white/40 h-1 mt-8"></div>
                    <div className="ml-1 mt-8 flex gap-2 items-center">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="/default_avatar.webp"
                        alt="Profile"
                      />
                      <span className="flex flex-col ml-1">
                        <span className="text-white">
                          {isMentee ? currentUser.name : currentMentor.name}
                        </span>
                        <span className="text-white -mt-1">
                          {isMentee ? currentUser.email : currentMentor.email}
                        </span>
                      </span>
                    </div>
                    <Button
                      variant="destructive"
                      className="text-white mt-8 bg-red-600/80"
                      onClick={() => {
                        setUserState((user) => ({
                          ...user,
                          isLoggedIn: false,
                          type: "",
                        }));
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
