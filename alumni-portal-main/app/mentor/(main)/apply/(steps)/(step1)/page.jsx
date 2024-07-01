/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect } from "react";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./schema";

import { useAtom } from "jotai";
import { formAtom } from "../form-state";

import { countries } from "./countries";

import Select from "react-select";

import { useRouter } from "next/navigation";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

export default function ApplyMentor() {
  const [formState, setFormState] = useAtom(formAtom);
  const [selectedFile, setSelectedFile] = React.useState();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      jobTitle: "",
      company: "",
      location: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    console.log(formState);

    setFormState((prev) => ({
      ...prev,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      jobTitle: values.jobTitle,
      company: values.company,
      location: values.location,
    }));

    router.push("/mentor/apply/step2");
  }

  const handleFileChange = (e) => {
    e.preventDefault();
    setSelectedFile(e.target?.files?.[0]);
  };

  useEffect(() => {
    form.reset({
      firstName: formState.firstName,
      lastName: formState.lastName,
      email: formState.email,
      password: formState.password,
      jobTitle: formState.jobTitle,
      company: formState.company,
      location: formState.location,
    });
  }, [form, formState]);

  return (
    <>
      <div className="max-sm:hidden w-full mx-auto mt-12 mb-24">
        <div className="w-full flex justify-between">
          <div className="flex w-full">
            <div className=" border-indigo-500 border-2 w-8 h-8 flex items-center justify-center rounded-full">
              <span className="bg-indigo-500 w-3 h-3 rounded-full"></span>
            </div>
            <span className="bg-gray-300 w-[40%] h-[2px] self-center"></span>
            <div className=" border-gray-300 border-2 w-8 h-8 flex items-center justify-center rounded-full">
              <span className="bg-indigo-500 w-3 h-3 rounded-full hidden"></span>
            </div>
            <span className="bg-gray-300 w-[40%] h-[2px] self-center"></span>
            <div className=" border-gray-300 border-2 w-8 h-8 flex items-center justify-center rounded-full">
              <span className="bg-indigo-500 w-3 h-3 rounded-full hidden"></span>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2 -ml-[2.5%] xl:-ml-[2%] w-full flex justify-between font-semibold text-gray-400">
            <div className="text-indigo-500">About You</div>
            <div className="">Profile</div>
            <div className="xl:mr-[4%]">Experience</div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col"
          >
            <FormField
              control={form.control}
              name="photo"
              render={({ field: { onChange, onBlur, name, ref } }) => (
                <FormItem>
                  <div>
                    <p className="mb-2">Photo</p>
                    <div className="flex">
                      <span className="h-20 w-20 rounded-full overflow-hidden bg-gray-100">
                        <img
                          className="w-[80px] rounded-full"
                          id="file-display-profile_image"
                          src={
                            selectedFile
                              ? URL.createObjectURL(selectedFile)
                              : "/gray.png"
                          }
                          alt="Profile"
                        />
                      </span>
                      <div
                        className="mt-[14px] ml-4 flex 
                    max-w-[160px] max-h-[45px] rounded-[8px] shadow-sm border border-gray-300 p-2 text-gray-600 hover:bg-gray-100"
                      >
                        <Upload className=" text-gray-400 ml-2" width={18} />
                        <p className="text-[14px] ml-4 mt-1">Upload Photo</p>
                        <FormLabel className="absolute w-[160px] -ml-2 -mt-2 min-h-[42px] cursor-pointer"></FormLabel>
                      </div>
                    </div>
                  </div>
                  <FormControl>
                    <Input
                      className="hidden"
                      type="file"
                      placeholder="Upload Photo"
                      name={name}
                      onBlur={onBlur}
                      onChange={(e) => {
                        onChange(e.target?.files?.[0]); // Call the original onChange from field object
                        handleFileChange(e); // Call your custom file change handler
                      }}
                      ref={ref}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="sm:flex sm:gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>First name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Last name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:flex sm:gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:flex sm:gap-4">
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Job title</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      Company <span>(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="sm:w-[50%]">
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Select
                      options={countries}
                      {...field}
                      instanceId="countries-selector"
                      value={countries.find((c) => c.value === field.value)}
                      onChange={(val) => field.onChange(val.value)}
                      defaultValue={countries.find(
                        (c) => c.value === formState.location
                      )}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-fit sm:w-[20%] self-end" type="submit">
              Next step
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
