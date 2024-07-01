"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { toast } from "sonner";

export function UserAuthForm({ className, ...props }) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isPassNotMatching, setIsPassNotMatching] = React.useState(false);

  const [role, setRole] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");





  const [pass, setPass] = React.useState("");
  const [cPass, setCPass] = React.useState("");

  async function onSubmit(event) {
    event.preventDefault();

    console.log(role)

    if (password !== cPass) {
      setIsPassNotMatching(true);
      console.log(password)
      console.log(cPass)
      return;
    }

    const response = await fetch('http://localhost:3000/api/v1/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role, firstName, lastName, email, password }),
    });

    const userData = await response.json();
    console.log(userData.message)
    setIsLoading(true);
    setTimeout(() => {
      setPass("");
      setCPass("");
      event.target.reset();
      setIsLoading(false);
      toast.success("Form is submitted successfully.", {
        description: "You will receive email shortly.",
      });
    }, 1000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <Tabs defaultValue="mentee" className="mb-4">
            <TabsList className="grid w-full grid-cols-2 bg-gray-200">
              <TabsTrigger className="text-gray-500" value="mentee" onClick={() => setRole("mentee")}>
                Join as Mentee
              </TabsTrigger>
              <TabsTrigger className="text-gray-500" value="mentor" onClick={() => setRole("mentor")}>
                Join as Mentor
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="grid  gap-2">
            <div className="flex flex-col lg:flex-row gap-2">
              <Label className="sr-only" htmlFor="fname">
                First Name
              </Label>
              <Input
                id="fname"
                placeholder="First Name"
                type="text"
                autoCapitalize="none"
                autoComplete="text"
                autoCorrect="off"
                disabled={isLoading}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Label className="sr-only" htmlFor="lname">
                Last Name
              </Label>
              <Input
                id="lname"
                placeholder="Last Name"
                type="text"
                autoCapitalize="none"
                autoComplete="text"
                autoCorrect="off"
                disabled={isLoading}
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-2">
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
              minLength="8"
              // defaultValue={pass}
              onChange={(e) => {
                setPassword(e.target.value)
                // setPass(e.target.value)
              }}
            />
          </div>
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="confirm-password">
              Confirm password
            </Label>
            <Input
              id="confirm-password"
              placeholder="Confirm password"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              required
              minLength="8"
              // defaultValue={cPass}
              onChange={(e) => setCPass(e.target.value)}
            // onBlur={() => {
            //   if (pass !== cPass) {
            //     setIsPassNotMatching(true);
            //   }
            //   if (pass === cPass && isPassNotMatching) {
            //     setIsPassNotMatching(false);
            //   }
            // }}
            />
          </div>
          <div className="text-red-600 text-sm py-1">
            {isPassNotMatching &&
              "Password & Confirm Password should have same value."}
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Join Now
          </Button>
        </div>
      </form>
    </div>
  );
}
