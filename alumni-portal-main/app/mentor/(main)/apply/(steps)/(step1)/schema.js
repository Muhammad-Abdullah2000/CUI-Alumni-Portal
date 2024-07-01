"use client";

import { z } from "zod";

const MAX_FILE_SIZE_MB = 1;

export const formSchema = z.object({
  photo: z
    .union([z.instanceof(File), z.undefined()])
    .refine((file) => file !== undefined, "Photo is required.")
    .refine(
      (file) =>
        file === undefined || file.size <= MAX_FILE_SIZE_MB * 1024 * 1024,
      {
        message: `File size must be less than ${MAX_FILE_SIZE_MB}MB.`,
      }
    ),
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
  jobTitle: z.string().min(1, "Required"),
  company: z.string().optional(),
  location: z.string().min(1, "Required"),
});
