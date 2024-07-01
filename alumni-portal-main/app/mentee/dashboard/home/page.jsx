"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { currentUser, mentors } from "@/lib/constants";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

export default function Home() {

  // React.useEffect(() => {
  //   fetchUserData();
  // }, []);

  // const fetchUserData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/v1/getuser", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`, 
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const userData = await response.json();
  //     console.log("User Data:", userData); 

  //   } catch (error) {
  //     console.error("Failed to fetch user data:", error);
  //   }
  // };

  return (
    <div>
      <div className="bg-[#163b6e] w-full py-12 sm:py-24 px-4 text-center">
        <h1 className="font-[800] text-2xl sm:text-3xl text-white animate-jump-in">
          Welcome, {currentUser.name}!
        </h1>
        <p className="text-white py-6 max-w-lg mx-auto">
          Start connecting with mentors and get ready to take your career to the
          next level!
        </p>
        <div>
          <Link
            href="/mentor/browse"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "border-0 hover:bg-slate-200 hover:text-black transition-colors duration-150 font-semibold text-[14px]"
            )}
          >
            Browse mentors
          </Link>
        </div>
      </div>
      <div className="max-w-screen-lg px-4 mx-auto py-8">
        <div className="my-16">
          <h2 className="mb-4 font-semibold text-xl ml-1">
            Recommended for you
          </h2>
          <div>
            <Carousel
              opts={{
                align: "start",
                loop: "true",
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="max-w-[80%] md:max-w-[90%] mx-auto"
            >
              <CarouselContent className="-ml-8">
                {mentors.map((mentor, index) => (
                  <CarouselItem key={index} className="pl-8 md:basis-1/2">
                    <Card mentor={mentor} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
        <div className="my-16 ml-1">
          <h2 className="mb-4 font-semibold text-xl">Featured Sessions</h2>
          <div className="flex gap-6 max-md:flex-wrap">
            <div className="border border-gray-300 rounded-[12px] flex flex-col gap-4 p-4 ">
              <h4 className="font-semibold text-lg">Intro Call</h4>
              <p className="text-neutral-500">
                If you&apos;re looking for a mentor, and you&apos;re just not
                sure about how this all works - this should be for you.
              </p>
              <div className="font-semibold text-black/75">
                Approx. 30 minutes
              </div>
            </div>
            <div className="border border-gray-300 rounded-[12px] flex flex-col gap-4 p-4 ">
              <h4 className="font-semibold text-lg">Work Review</h4>
              <p className="text-neutral-500">
                In this session, a mentor will sit down with you, and give you
                some inputs to make your work better, be it a review, inputs on
                your design, or some inspiration.
              </p>
              <div className="font-semibold text-black/75">
                Approx. 45 minutes
              </div>
            </div>
            <div className="border border-gray-300 rounded-[12px] flex flex-col gap-4 p-4 ">
              <h4 className="font-semibold text-lg">Interview Preparation</h4>
              <p className="text-neutral-500">
                Some big interviews coming up? In this 1-hour session, a mentor
                with hiring experience will act as a technical interviewer and
                ask you some standard hiring questions.
              </p>
              <div className="font-semibold text-black/75">
                Approx. 60 minutes
              </div>
            </div>
          </div>
        </div>
        <div className="my-16 ml-1">
          <h2 className="mb-4 font-semibold text-xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 pt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 md:space-y-0">
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  What can I expect from mentors?
                </dt>
                <dd className="mt-2 text-base text-gray-700">
                  Mentors are vetted and continuously evaluated based on their
                  performances, with the goal to only have the best mentors
                  available to you. Their goal is to get you closer to your goal
                  with the services booked in your plan.
                </dd>
                <dd className="mt-2 text-base text-gray-700">
                  However, mentors are professionals in the industry, offering
                  their free time to help you reach your goals. You&apos;ll
                  typically receive replies within a few hours and will have
                  pre-scheduled meetings with your mentor, they cannot be
                  available to you 24/7.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  My mentor hasn&apos;t responded to my application in some
                  days, what should I do?
                </dt>
                <dd className="mt-2 text-base text-gray-700">
                  We&apos;re continuously looking after the mentors and their
                  activity. However at times it can be the case that a mentor is
                  unavailable, even though they were recently active. In that
                  case, if you have not received a reply in more than 5 days,
                  it&apos;s a safe bet to reach out to someone else.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  How many mentors can I reach out to?
                </dt>
                <dd className="mt-2 text-base text-gray-700">
                  We impose a light limit on the amount of mentors you can reach
                  out to in a given day and week for spam and security reasons.
                  However there&apos;s no limit on the amount of mentors you can
                  subscribe to.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  Can I withdraw my applications?
                </dt>
                <dd className="mt-2 text-base text-gray-700">
                  If you&apos;ve changed your mind about a mentor, you can
                  withdraw your application. The withdrawal option is available
                  three days after your application, to allow the mentor to
                  react.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ mentor }) {
  return (
    <div>
      <a href={`/mentor/${mentor.id}`}>
        <div className="border border-gray-300 rounded-[12px] flex gap-4 p-4">
          <div>
            <Image
              className="rounded-[.5rem]"
              src={mentor.img}
              alt={mentor.name}
              width={70}
              height={70}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-semibold text-blue-950">
              {mentor.name}
            </div>
            <div className="text-lg font-medium text-gray-500">
              {mentor.designation}
            </div>
            <div className="text-blue-950 font-medium text-[14px]">
              {mentor.name} is one of our most experienced mentors.
            </div>
            <div className="mt-2 mb-8">
              {mentor.skills.slice(0, 5).map((skill, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-medium mr-2 mt-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
