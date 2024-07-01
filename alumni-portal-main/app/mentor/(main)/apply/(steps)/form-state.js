"use client";

import { atomWithStorage } from "jotai/utils";

export const formAtom = atomWithStorage("formState", {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  jobTitle: "",
  company: "",
  location: "",
  category: "",
  skills: [],
  bio: "",
  linkedin: "",
  twitter: "",
  website: "",
  intro: "",
  featured: "",
  whyText: "",
  whatText: "",
});
