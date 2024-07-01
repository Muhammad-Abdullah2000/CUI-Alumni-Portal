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
import { RESET } from "jotai/utils";
import { formAtom } from "../form-state";

import { useRouter } from "next/navigation";

import { Textarea } from "@/components/ui/textarea";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

export default function ExperienceStep() {
  const [formState, setFormState] = useAtom(formAtom);

  const router = useRouter();

  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      intro: "",
      featured: "",
      whyText: "",
      whatText: "",
    },
  });

  function onSubmit(values) {
    setFormState((prev) => ({
      ...prev,
      intro: values.intro,
      featured: values.featured,
      whyText: values.whyText,
      whatText: values.whatText,
    }));

    console.log(values);
    console.log(formState);

    setFormState(RESET);

    router.push("/mentor/apply/done");
  }

  useEffect(() => {
    form.reset({
      intro: formState.intro,
      featured: formState.featured,
      whyText: formState.whyText,
      whatText: formState.whatText,
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
            <div className=" bg-indigo-500 w-8 h-8 flex items-center justify-center rounded-full">
              <Check className="text-white" />
            </div>
            <span className="bg-indigo-500 w-[40%] h-[2px] self-center"></span>
            <div className=" border-indigo-500 border-2 w-8 h-8 flex items-center justify-center rounded-full">
              <span className="bg-indigo-500 w-3 h-3 rounded-full"></span>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2 -ml-[2.5%] xl:-ml-[2%] w-full flex justify-between font-semibold text-gray-400">
            <div className="text-gray-800">About You</div>
            <div className="text-gray-800">Profile</div>
            <div className="xl:mr-[4%] text-indigo-500">Experience</div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex flex-col"
          >
            <div className="sm:flex sm:gap-4">
              <FormField
                control={form.control}
                name="intro"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      Intro Video <span>(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setFormState((prev) => ({
                            ...prev,
                            intro: e.target.value,
                          }));
                        }}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="featured"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      Featured Article <span>(optional)</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setFormState((prev) => ({
                            ...prev,
                            featured: e.target.value,
                          }));
                        }}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="whyText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Why do you want to become a mentor?{" "}
                    <span>(Not publicly visible)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setFormState((prev) => ({
                          ...prev,
                          whyText: e.target.value,
                        }));
                      }}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    What, in your opinion, has been your greatest achievement so
                    far? <span>(Not publicly visible)</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setFormState((prev) => ({
                          ...prev,
                          whatText: e.target.value,
                        }));
                      }}
                    />
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
                  router.push("/mentor/apply/step2");
                }}
                className="w-fit sm:w-[20%]"
              >
                Previous step
              </Button>
              <Button className="w-fit sm:w-[20%]" type="submit">
                Submit application
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
}
