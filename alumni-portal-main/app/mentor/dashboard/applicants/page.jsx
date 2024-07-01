"use client";
import { Button } from "@/components/ui/button";
import { menteesRequests } from "@/lib/constants";
import { FileText, Phone } from "lucide-react";

import Image from "next/image";
import { useState } from "react";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from "framer-motion";

export default function Applicants() {
  const [mentees, setMentees] = useState(menteesRequests);
  // const [parent, enableAnimations] = useAutoAnimate();

  const removeMentee = (idToRemove) => {
    const updatedMentees = mentees.filter((mentee) => mentee.id !== idToRemove);
    setMentees(updatedMentees);
  };

  const handleRemoveClick = (id) => {
    removeMentee(id);
  };

  return (
    <div>
      <div className="my-32 mx-2 sm:mx-8">
        <h2 className="mb-4 font-semibold text-xl">Applicants</h2>
        {mentees.length === 0 && (
          <div className="border border-gray-300 my flex flex-col gap-4 p-8 items-center rounded-[12px]">
            <div className="animate-bounce animate-twice">
              <FileText strokeWidth="1" className="text-gray-400 h-12 w-12" />
            </div>
            <div>
              <p className="font-medium">No active applicants</p>
            </div>
            <div>
              <p className="text-gray-500">
                Once some mentee applies to make you their mentor, they will
                show up here!
              </p>
            </div>
          </div>
        )}
        {mentees.length > 0 && (
          <motion.div layout className="space-y-4">
            {mentees.map((mentee, index) => (
              <Card
                key={index}
                mentee={mentee}
                handleRemoveClick={handleRemoveClick}
              />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Card({ mentee, handleRemoveClick }) {
  return (
    <div className="border border-blue-100 rounded-[12px] flex gap-4 p-4 shadow-md bg-white">
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
        <div className="space-x-2 mt-4">
          <Button
            onClick={() => {
              handleRemoveClick(mentee.id);
            }}
          >
            Accept
          </Button>
          <Button
            onClick={() => {
              handleRemoveClick(mentee.id);
            }}
            variant="outline"
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}
