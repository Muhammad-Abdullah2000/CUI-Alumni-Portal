import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { currentMentor } from "@/lib/constants";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="bg-[#163b6e] w-full py-12 sm:py-24 px-4 text-center">
        <h1 className="font-[800] text-2xl sm:text-3xl text-white animate-jump-in">
          Welcome, {currentMentor.name}!
        </h1>
        <p className="text-white py-6 max-w-lg mx-auto">
          Start connecting with mentees and share your expertise to help them
          take their careers to the next level!
        </p>
      </div>
      <div className="w-full bg-blue-50">
        <div className="max-w-screen-lg px-4 mx-auto py-8">
          <div className="my-16">
            <h2 className="mb-4 font-semibold text-xl ml-1">Get Mentoring</h2>
            <div className="flex flex-col gap-8">
              {currentMentor?.mentees?.map((mentee, index) => (
                <Card key={index} mentee={mentee} />
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-screen-lg px-4 mx-auto py-8">
          <div className="my-16">
            <h2 className="mb-4 font-semibold text-xl ml-1">FAQ&apos;s</h2>
            <div className="flex flex-col gap-8">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[14px] md:text-lg">
                    How much delay is allowed in replies?
                  </AccordionTrigger>
                  <AccordionContent className="md:text-lg">
                    You must reply to mentees within 4 days max otherwise they
                    might revoke the subscription.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[14px] md:text-lg">
                    How can I view and respond to mentee applications?
                  </AccordionTrigger>
                  <AccordionContent className="md:text-lg">
                    Mentors can access and review mentee applications through
                    the dashboard&apos;s &apos;Applicants&apos; section. From
                    there, you can accept or decline applications based on your
                    availability and preferences.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[14px] md:text-lg">
                    Can I offer different pricing options or packages for
                    mentorship?
                  </AccordionTrigger>
                  <AccordionContent className="md:text-lg">
                    Yes, mentors have the flexibility to offer various pricing
                    tiers or packages based on the services they provide.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[14px] md:text-lg">
                    How often should I expect to communicate with my mentees?
                  </AccordionTrigger>
                  <AccordionContent className="md:text-lg">
                    The frequency of communication depends on the mentor&apos;s
                    availability and the mentee&apos;s needs. Typically, mentors
                    aim to respond to messages within a reasonable time frame,
                    such as within 24 to 48 hours during business days.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ mentee }) {
  return (
    <div className="border border-blue-100 rounded-[12px] flex gap-4 p-4 shadow-md bg-white animate-fade-right">
      <div>
        <Image
          className="rounded-[.5rem] max-sm:w-[140px]"
          src={mentee.img || "/default_avatar.webp"}
          alt={mentee.name}
          width={70}
          height={70}
        />
      </div>
      <div className="">
        <p className="text-xl font-semibold text-blue-950"> {mentee.name} </p>
        <p className="font-medium text-gray-500"> {mentee.email} </p>
        <p className="font-medium"> {mentee.about} </p>
        <div className="flex gap-2 mt-2">
          <Phone className="text-blue-900 h-5 w-5" />{" "}
          <span className=""> {mentee.contact} </span>
        </div>
      </div>
    </div>
  );
}
