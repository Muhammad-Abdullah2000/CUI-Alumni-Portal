import React from "react";

import {
  MessageCircleMore,
  Phone,
  Clock3,
  Briefcase,
  Check,
  Flame,
} from "lucide-react";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export default function PlanCard() {
  return (
    <div className="border-2 border-gray-300 rounded-[12px] p-6 sm:max-w-[50vw] lg:max-w-[30vw] bg-white">
      <div>
        <span className="inline-block font-black text-2xl mb-4">Rs.1200</span>
        <span className="inline-block font-bold text-lg text-slate-900 ml-1">
          / month
        </span>
      </div>
      <div>
        <p>Balances session frequency with time to implement what you learn.</p>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <div className="flex gap-2">
          <Phone size={20} className="text-primary" />
          <span>Regular calls, per agreement</span>
        </div>
        <div className="flex gap-2">
          <MessageCircleMore size={20} className="text-primary" />
          <span>Unlimited Q&A via chat</span>
        </div>
        <div className="flex gap-2">
          <Clock3 size={20} className="text-primary" />
          <span>Expect responses in 24 hours or less</span>
        </div>
        <div className="flex gap-2">
          <Briefcase size={20} className="text-primary" />
          <span>Hands-on support</span>
        </div>
      </div>
      <div className="mx-auto">
        <Link
          href={`#`}
          className={cn(
            buttonVariants({ variant: "default" }),
            "mx-8 w-full font-semibold text-[1rem] duration-500 hover:bg-indigo-800 mt-8 ml-0"
          )}
        >
          Start now
        </Link>
      </div>
      <div className="mt-4">
        <div className="flex gap-2">
          <Check size={20} className="text-gray-600" />
          <span className=" font-light">Flat fee, no hidden costs</span>
        </div>
        <div className="flex gap-2">
          <Check size={20} className="text-gray-600" />
          <span className=" font-light">
            {" "}
            7 day free trial! Cancel anytime.
          </span>
        </div>
        <div className="flex gap-2">
          <Flame size={20} className="text-gray-600" />
          <span className=" font-light"> Limited spots, hurry up!</span>
        </div>
      </div>
    </div>
  );
}
