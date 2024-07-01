"use client";

import React, { useEffect } from "react";

import { Check } from "lucide-react";
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

import { useRouter } from "next/navigation";

import Select from "react-select";

import { Textarea } from "@/components/ui/textarea";

import { skills } from "./skills";
import { categories } from "./categories";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

export default function ProfileStep() {
  const [formState, setFormState] = useAtom(formAtom);

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      skills: [],
      bio: "",
      linkedin: "",
      twitter: "",
      website: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
    console.log(formState);

    setFormState((prev) => ({
      ...prev,
      category: values.category,
      skills: values.skills,
      bio: values.bio,
      linkedin: values.linkedin,
      twitter: values.twitter,
      website: values.website,
    }));

    router.push("/mentor/apply/step3");
  }

  useEffect(() => {
    form.reset({
      category: formState.category,
      skills: formState.skills,
      bio: formState.bio,
      linkedin: formState.linkedin,
      twitter: formState.twitter,
      website: formState.website,
    });
  }, [form, formState]);

  return (
    <>
      <div className="max-sm:hidden w-full mx-auto mt-12 mb-24">
        <div className="w-full flex justify-between">
          <div className="flex w-full">
            <div className=" bg-indigo-500 w-8 h-8 flex items-center justify-center rounded-full">
              <Check className="text-white" />
            </div>
            <span className="bg-indigo-500 w-[40%] h-[2px] self-center"></span>
            <div className=" border-indigo-500 border-2 w-8 h-8 flex items-center justify-center rounded-full">
              <span className="bg-indigo-500 w-3 h-3 rounded-full"></span>
            </div>
            <span className="bg-gray-300 w-[40%] h-[2px] self-center"></span>
            <div className=" border-gray-300 border-2 w-8 h-8 flex items-center justify-center rounded-full">
              <span className="bg-indigo-500 w-3 h-3 rounded-full hidden"></span>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2 -ml-[2.5%] xl:-ml-[2%] w-full flex justify-between font-semibold text-gray-400">
            <div className="text-gray-800">About You</div>
            <div className="text-indigo-500">Profile</div>
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
              name="category"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select
                      options={categories}
                      {...field}
                      isSearchable={false}
                      instanceId="category-selector"
                      value={categories.find((c) => c.value === field.value)}
                      onChange={(val) => field.onChange(val.value)}
                      defaultValue={categories.find(
                        (c) => c.value === formState.category
                      )}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Skills</FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      isMulti
                      instanceId="skills-multiSelector"
                      options={skills}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea className="" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="sm:flex sm:gap-4">
              <FormField
                control={form.control}
                name="linkedin"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>LinkedIn URL</FormLabel>
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
                name="twitter"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      Twitter Handle <span>(optional)</span>
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
              name="website"
              render={({ field }) => (
                <FormItem className="sm:w-[49%]">
                  <FormLabel>
                    Personal Website <span>(optional)</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/mentor/apply/");
                }}
                className=" w-fit sm:w-[20%]"
              >
                Previous step
              </Button>
              <Button className="w-fit sm:w-[20%]" type="submit">
                Next step
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
