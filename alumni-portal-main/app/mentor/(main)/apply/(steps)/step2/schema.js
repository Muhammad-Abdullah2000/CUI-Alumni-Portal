"use client";

import { z } from "zod";

export const formSchema = z.object({
  category: z.string().min(1, "Required"),
  skills: z
    .union([z.instanceof(Array), z.undefined()])
    .refine((array) => array.length !== 0, "Enter at least one skill."),
  bio: z
    .string()
    .min(10, {
      message: "Bio is too short.",
    })
    .max(300, {
      message: "Bio is too long.",
    }),
  linkedin: z.string().min(1, "Required"),
  twitter: z.string().optional(),
  website: z.string().optional(),
});
