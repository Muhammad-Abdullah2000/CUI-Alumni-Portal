"use client";

import { z } from "zod";

export const formSchema = z.object({
  intro: z.string().optional(),
  featured: z.string().optional(),
  whyText: z
    .string()
    .min(10, {
      message: "Answer is too short.",
    })
    .max(300, {
      message: "Answer is too long.",
    }),
  whatText: z
    .string()
    .min(10, {
      message: "Answer is too short.",
    })
    .max(300, {
      message: "Answer is too long.",
    }),
});
