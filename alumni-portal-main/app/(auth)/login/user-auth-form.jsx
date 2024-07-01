/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { userAtom } from "@/app/user-state";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

export function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [loginType, setLoginType] = React.useState("mentee");
  const [userState, setUserState] = useAtom(userAtom);
  const [initialized, setInitialized] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    if (initialized) {
      if (userState?.isLoggedIn) {
        if (userState?.type === "mentee") {
          router.push("/mentee/dashboard");
        }

        if (userState?.type === "mentor") {
          router.push("/mentor/dashboard");
        }
      }
    }
    setInitialized(true);
  }, [initialized, userState]);

  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    console.log(email);

    const response = await fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const userData = await response.json();

    console.log(userData)


    setTimeout(() => {
      setIsLoading(false);
      if (loginType === "mentee") {
        setUserState((user) => ({
          ...user,
          isLoggedIn: true,
          type: loginType,
        }));
        router.push("/mentee/dashboard");
      }

      if (loginType === "mentor") {
        setUserState((user) => ({
          ...user,
          isLoggedIn: true,
          type: loginType,
        }));
        router.push("/mentor/dashboard");
      }
    }, 1000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <Tabs defaultValue="mentee" className="mb-4">
            <TabsList className="grid w-full grid-cols-2 bg-gray-200">
              <TabsTrigger
                className=" text-gray-500"
                value="mentee"
                onClick={() => {
                  setLoginType("mentee");
                }}
              >
                I&apos;m a Mentee
              </TabsTrigger>
              <TabsTrigger
                className="text-gray-500"
                value="mentor"
                onClick={() => {
                  setLoginType("mentor");
                }}
              >
                I&apos;m a Mentor
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="grid  gap-2">
            <div className="grid gap-2">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="Email Address"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-2 mb-4">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
