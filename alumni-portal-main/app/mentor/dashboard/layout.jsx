"use client";
import DashNavBar from "@/components/DashNavBar";

import { userAtom } from "@/app/user-state";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MenteeLayout({ children }) {
  const [userState, setUserState] = useAtom(userAtom);
  const [initialized, setInitialized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (initialized) {
      if (userState?.isLoggedIn !== true || userState?.type !== "mentor") {
        router.push("/login");
      }
    }

    setInitialized(true);
  }, [userState, initialized, router]);

  if (userState?.isLoggedIn && userState?.type === "mentor") {
    return (
      <>
        <DashNavBar />
        <div>{children}</div>
      </>
    );
  }
}
