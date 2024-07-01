import illustration4 from "@/public/illustration-4.svg";
import illustration9 from "@/public/illustration-9.svg";
import illustration2 from "@/public/illustration-2.svg";
import illustration6 from "@/public/illustration-6.svg";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function OrganizationSteps() {
  return (
    <>
      <div className="py-28 mx-auto">
        <h4 className="font-bold text-primary text-center">
          For Businesses, Organisations and Educational Institutes:
        </h4>
        <h2 className="font-semibold text-center pt-12 pb-3">
          Streamline your internal mentoring programs
        </h2>
        <h3 className="text-center pb-5">
          Enterprise-level mentoring software, to{" "}
          <strong>match, manage and scale mentoring</strong>,
          <br />
          coaching, buddying and sponsorship programs, with account-based
          support and success.
        </h3>

        <div className="mx-auto w-[90%] flex flex-col items-center lg:flex-row  gap-8 pt-12">
          <div className="mx-auto pb-3 md:w-[50%] text-center">
            <div className="pb-5 flex justify-center">
              <Image
                src={illustration4}
                className="w-[200px]"
                alt="Find a Mentor"
              />
            </div>
            <div className="text-[18px] font-bold mb-2">
              1. Configure The Platform
            </div>
            Add your questions, approvals, settings, branding and matching
            rules, through your own admin panel.
          </div>

          <div className="mx-auto pb-3 md:w-[50%] text-center">
            <div className="pb-5 flex justify-center">
              <Image
                src={illustration9}
                className="w-[200px]"
                alt="Having a Mentoring Meeting"
              />
            </div>
            <div className="text-[18px] font-bold mb-2">
              2. Invite Participants
            </div>
            Share unique registration links, invite them via Single-Sign On
            (SSO), or import them via CSV or APIs.{" "}
          </div>

          <div className="mx-auto pb-3 md:w-[50%] text-center">
            <div className="pb-5 flex justify-center">
              <Image
                src={illustration2}
                className="w-[200px]"
                alt="Setting Career Goals"
              />
            </div>
            <div className="text-[18px] font-bold mb-2">
              3. Manage Mentoring
            </div>
            Participants can find matches, host meetings and track their own
            goals through COMSIANS platform.{" "}
          </div>

          <div className="mx-auto pb-3 md:w-[50%] text-center">
            <div className="pb-5 flex justify-center">
              <Image
                src={illustration6}
                className="w-[200px]"
                alt="Networking and Tracking Mentoring Reports"
              />
            </div>
            <div className="text-[18px] font-bold mb-2">
              4. Monitor and Report
            </div>
            Track your participants mentoring activity, from goals and meetings
            to feedback and survey capture.{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col align items-center p-10 md:p-28 bg-primary">
        <div>
          <h4 className="font-bold text-white">
            Launch and scale streamlined mentoring programs.
          </h4>
          <h6 className="text-white">
            Our customer success team and customisable, streamlined mentoring
            platform are here to help you.
          </h6>
          <div className="mt-4 self-start">
            <Link
              href="/signup"
              className={
                cn(buttonVariants({ variant: "outline" })) + " border-0"
              }
            >
              <strong>Get Started</strong>&nbsp;→
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
