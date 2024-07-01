"use client";

import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage("userState", {
  isLoggedIn: false,
  type: "",
});
