"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { mentors } from "@/lib/constants";

import Testimonials from "./Testimonials";
import Recommendations from "./Recommendations";
import PlanCard from "./PlanCard";

export default function Page({ params }) {
  function getMentorById(id) {
    return mentors.find((mentor) => mentor.id === id);
  }

  const desiredId = parseInt(params.id, 10);
  const mentor = getMentorById(desiredId);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (mentor) {
    const { id, name, img, designation, skills, detailed_about, testimonials } =
      mentor;

    return (
      <>
        <div className={`${scrollPosition > 130 ? "xl:-mt-[460px]" : ""}`}>
          <div
            className={`hidden xl:block  ml-[63%] ${
              scrollPosition > 130
                ? "sticky top-[30px]"
                : "absolute top-[160px]"
            }`}
          >
            <PlanCard />
          </div>

          <div className="bg-primary h-[200px]  md:h-[300px] flex max-[440px]:flex-col">
            <Image
              width={200}
              height={200}
              className=" max-[440px]:mt-[100px] border-4 border-white ml-[5%] md:mt-[50px] mt-[40px] inline-block w-[120px] h-[120px]  md:w-[200px] md:h-[200px] rounded-full"
              src={img}
              alt={name}
            />
            <div className="mx-4 max-[440px]:mt-2 mt-10 md:mt-24 ">
              <h3 className="max-[440px]:text-black max-[440px]:text-[1rem] text-2xl font-bold ml-[5%] mt-4 text-white whitespace-nowrap">
                {name}
              </h3>
              <h5 className="max-[440px]:text-black max-[440px]:text-[.75rem] text-lg ml-[5%] mt-1 text-white whitespace-nowrap">
                {designation}
              </h5>
            </div>
          </div>
          <div className="mt-2 mb-16 ml-[7%] max-[440px]:mt-36">
            <h5 className="font-semibold text-sm md:text-base ">Skills</h5>
            {skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mt-4"
              >
                {skill}
              </span>
            ))}
            <span className="font-medium me-1 underline">
              + {skills.length - 3} more
            </span>
          </div>
          <div className="bg-gray-200 h-[2px] gray-divider"></div>
          <div className="ml-[7%] mt-16 flex flex-col gap-8 md:max-w-[70vw] xl:max-w-[50vw] mr-[7%] md:mr-0">
            <div className="xl:hidden">
              <h1 className="font-semibold text-xl">Services</h1>
              <div className="mt-8">
                <PlanCard />
              </div>
            </div>
            <div className="">
              <h1 className="font-semibold text-xl">About</h1>
              <p className="mt-8">{detailed_about}</p>
              <div className="bg-gray-200 h-[2px] my-8 gray-divider"></div>
            </div>

            <div>
              <h1 className="font-semibold text-xl">What mentees say</h1>
              <Testimonials testimonials={testimonials} />
            </div>
            <div>
              <h1 className="font-semibold text-xl">Skills</h1>
              <div className="my-8">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 font-medium mr-2 mt-4 text-[1rem]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="bg-gray-200 h-[2px] mt-16 mb-4 gray-divider"></div>
            </div>
            <div>
              <h1 className="font-semibold text-xl">Similar mentors</h1>
              <div>
                <Recommendations mentorID={id} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="mt-[50vh]">
          <center className="text-2xl">
            Mentor not found,{" "}
            <a
              className="hover:bg-primary hover:text-white transition-all translate-x-1 inline-block underline-offset-2 underline"
              href="/"
            >
              Back to Home
            </a>
          </center>
        </div>
      </>
    );
  }
}
