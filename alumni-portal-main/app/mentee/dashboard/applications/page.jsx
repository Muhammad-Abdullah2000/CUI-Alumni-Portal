import { FileText } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Applications() {
  return (
    <div>
      <div className="my-32 mx-2 sm:mx-8">
        <h2 className="mb-4 font-semibold text-xl">Applications</h2>
        <div className="border border-gray-300 my flex flex-col gap-4 p-8 items-center rounded-[12px]">
          <div className="animate-bounce animate-twice">
            <FileText strokeWidth="1" className="text-gray-400 h-12 w-12" />
          </div>
          <div>
            <p className="font-medium">No active applications</p>
          </div>
          <div>
            <p className="text-gray-500">
              Once you&apos;ve applied to a mentor, they will show up here!
            </p>
          </div>
          <div>
            <Link
              href="/mentor/browse"
              className={cn(
                buttonVariants({ variant: "default" }),
                "border-0 transition-colors duration-150 font-semibold text-[14px]"
              )}
            >
              Browse mentors
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
