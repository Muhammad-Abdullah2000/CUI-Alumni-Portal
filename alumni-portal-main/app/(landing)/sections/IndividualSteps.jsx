import illustration5 from "@/public/illustration-5.svg";
import illustration1 from "@/public/illustration-1.svg";
import illustration7 from "@/public/illustration-7.svg";
import illustration3 from "@/public/illustration-3.svg";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function IndividualSteps() {
  return (
    <>
      <div className="py-28 mx-auto">
        <h4 className="font-bold text-primary text-center">For Individuals:</h4>
        <h2 className="font-semibold text-center pt-12 pb-3">
          The global mentoring & career progression platform
        </h2>
        <h3 className="text-center pb-5">
          Create your <strong>free</strong> account now to get mentoring and{" "}
          <strong>level-up your career</strong>.
        </h3>

        <div className="mx-auto w-[90%] flex flex-col items-center lg:flex-row  gap-8 pt-12">
          <div className="mx-auto pb-3 md:w-[50%] text-center">
            <div className="pb-5 flex justify-center">
              <Image
                src={illustration5}
                className="w-[200px]"
                alt="Find a Mentor"
              />
            </div>
            <div className="text-[18px] font-bold mb-2">
              1. Find a Mentor Match
            </div>
            Create an account, sign up to be a mentor or mentee - or both - and
            we&apos;ll suggest the best mentoring matches.
          </div>

          <div className="mx-auto pb-3 md:w-[50%] text-center">
            <div className="pb-5 flex justify-center">
              <Image
                src={illustration1}
                className="w-[200px]"
                alt="Having a Mentoring Meeting"
              />
            </div>
            <div className="text-[18px] font-bold mb-2">2. Begin Mentoring</div>
            Once you&apos;ve found the right matches, we help you to schedule
            meetings, track goals and stay on top of mentoring.{" "}
          </div>

          <div className="mx-auto pb-3 md:w-[50%] text-center">
            <div className="pb-5 flex justify-center">
              <Image
                src={illustration7}
                className="w-[200px]"
                alt="Setting Career Goals"
              />
            </div>
            <div className="text-[18px] font-bold mb-2">3. Track Progress</div>
            Earn Points for engaging with others, being proactive and completing
            goals and career progression tasks.{" "}
          </div>

          <div className="mx-auto pb-3 md:w-[50%] text-center">
            <div className="pb-5 flex justify-center">
              <Image
                src={illustration3}
                className="w-[200px]"
                alt="Networking and Tracking Mentoring Reports"
              />
            </div>
            <div className="text-[18px] font-bold mb-2">4. Go Further</div>
            Beyond mentoring, you can start threads and conversations, explore
            job opportunities, discover virtual events and more.{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col align items-center p-10 md:p-28 bg-primary">
        <div>
          <h4 className="font-bold text-white">
            Create Your Account in 30 Seconds.
          </h4>
          <h6 className="text-white">
            Volunteer to mentor others, find your own mentor, share your
            knowledge and climb the career ladder.
          </h6>
          <div className="mt-4 self-start">
            <Link
              href="/signup"
              className={
                cn(buttonVariants({ variant: "outline" })) + " border-0"
              }
            >
              <strong>Join Now</strong>&nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
