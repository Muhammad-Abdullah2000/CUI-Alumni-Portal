import Marquee from "react-fast-marquee";
import Image from "next/image";

import { mentors } from "@/lib/constants";

export default function MentorCarousal() {
  return (
    <Marquee className="pb-8" speed={80} pauseOnHover={true} autoFill={true}>
      {mentors.map((mentor, index) => (
        <Card key={index} mentor={mentor} />
      ))}
    </Marquee>
  );
}

function Card({ mentor }) {
  const { id, img, name, designation } = mentor;
  return (
    <>
      <a
        href={`/mentor/${id}`}
        className="mx-2 inline-block w-[200px] h-[200px] align-bottom mr-4 last-of-type:mr-0"
        target="_blank"
      >
        <div className="drop-shadow-lg rounded-lg p-6 bg-white h-full w-full overflow-hidden">
          <Image
            width={64}
            height={64}
            className="block w-16 h-16 rounded-full mx-auto"
            src={img}
            alt={name}
          />
          <div className="mt-4 text-center whitespace-normal overflow-hidden align-bottom">
            <h5 className="font-bold text-navy-900">{name}</h5>
            <span className="text-gray-400 text-sm mt-2" lang="en">
              {designation}
            </span>
          </div>
        </div>
      </a>
    </>
  );
}
