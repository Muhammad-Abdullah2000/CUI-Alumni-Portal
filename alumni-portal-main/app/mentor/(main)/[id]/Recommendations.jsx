import React from "react";

import Image from "next/image";

import { mentors } from "@/lib/constants";

export default function Recommendations({ mentorID }) {
  return (
    <div>
      <ol>
        {mentors
          .filter((mentor) => mentor.id !== mentorID)
          .slice(0, 2)
          .map((mentor, index) => (
            <li key={index}>
              <Card mentor={mentor} />
            </li>
          ))}
      </ol>
    </div>
  );
}

function Card({ mentor }) {
  return (
    <div className="flex items-center gap-8">
      <div>
        <Image
          width={100}
          height={100}
          className="inline-block rounded-full"
          src={mentor.img}
          alt={mentor.name}
        />
      </div>
      <div className="mt-12">
        <div>
          <h5 className="font-semibold text-lg">{mentor.name}</h5>
          <p>{mentor.designation}</p>
        </div>
        <div>
          {mentor.skills.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mt-4"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="bg-gray-200 h-[2px] mt-8 mb-4 gray-divider"></div>
      </div>
    </div>
  );
}
