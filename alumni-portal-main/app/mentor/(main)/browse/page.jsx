import React from "react";

import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

import { mentors } from "@/lib/constants";

export default function Browse() {
  return (
    <>
      <ol className="mt-8">
        {mentors?.map((mentor, index) => (
          <li className="list-item" key={index}>
            <Card mentor={mentor} />
          </li>
        ))}
      </ol>
    </>
  );
}

function Card({ mentor }) {
  return (
    <div className="flex max-sm:flex-col mx-3 md:mx-auto gap-8 px-7 py-8 transition-all duration-150 mb-6 max-w-4xl rounded-xl border border-gray-300">
      <div>
        <Image
          className="rounded-[.75rem] h-72 object-cover max-sm:w-full"
          src={mentor.img}
          alt={mentor.name}
          width={180}
          height={288}
        />
      </div>
      <div className="sm:max-w-[70%]">
        <h3 className="font-bold text-xl primary">{mentor.name}</h3>
        <p className="pt-1">{mentor.designation}</p>
        <p className="pt-8">{mentor.about}</p>
        <div className="mt-2 mb-8">
          {mentor.skills.map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mt-4"
            >
              {skill}
            </span>
          ))}
        </div>
        <div>
          <div className="mt-8">
            <Link
              href={`/mentor/${mentor.id}`}
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-44 font-semibold text-[1rem] duration-500 hover:bg-indigo-800"
              )}
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
