import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials({ testimonials }) {
  return (
    <div className="flex flex-col gap-8 mt-12">
      <ol>
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <Card testimonial={testimonial} />
            <div className="bg-gray-200 h-[2px] my-10 gray-divider"></div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Card({ testimonial }) {
  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <div>
          <Avatar>
            <AvatarImage src="/default_avatar.webp" />
            <AvatarFallback className="bg-gray-400">
              {testimonial.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>
        <h3 className="text-base font-medium">{testimonial.name}</h3>
      </div>
      <div>
        <p>{testimonial.review}</p>
      </div>
    </>
  );
}
