"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

import Confetti from "react-confetti";

export default function Result() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 4200);

      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <>
      {showConfetti && (
        <Confetti
          width={window?.innerWidth - 30 || 0}
          height={window?.innerHeight || 0}
          tweenDuration={3000}
        />
      )}
      <div className="flex flex-col mb-10 px-4">
        <div className="border border-gray-300 shadow-lg rounded-[12px] mx-auto pt-8 px-8 mt-2 mb-10 md:w-1/2 lg:w-[40%]">
          <h1 className="font-semibold text-2xl">
            Thanks for applying as a mentor!
          </h1>
          <div className="mb-4 mt-8">
            We will review your application and get back to you as soon as
            possible. Generally, you should hear from us{" "}
            <span className="font-bold text-gray-700">
              within 5-10 working days
            </span>
            .
          </div>
          <p>
            You will receive an email at your registered address with next
            steps.
          </p>
          <h1 className="pt-8  pb-2 font-semibold text-xl">
            What&apos;s next?
          </h1>
          <p className="pb-8">
            If you are eager, take the time between now and then and plan out
            your future steps as a mentor. This is not mandatory, but can help
            you hit the ground running.
          </p>
        </div>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default" }),
            "px-8 mx-auto md:w-1/2 lg:w-[40%] text-lg"
          )}
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
