"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "@/components/ui/use-toast";
import { MdPublish } from "react-icons/md";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import FileUpload from "../global/FileUpload";
import FormLoader from "../global/FormLoader";

type Props = {};

function HeroForm({}: Props) {
  const formSchema = z.object({
    postTitle: z.string().min(2, {
      message: "Post title must be at least 2 characters.",
    }),
    author: z.string().min(2, {
      message: "author name should not be less than 2 characters",
    }),
    phone: z.string().min(10).max(12),
    firstImage: z.string().min(2),
    secondImage: z.string().min(2),
    hero_description: z
      .string()
      .min(10, {
        message: "Hero description must be at least 10 characters.",
      })
      .max(500, {
        message: "Hero description must not be longer than 500 characters.",
      }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postTitle: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const isLoading = form.formState.isSubmitting;
  return (
    <section className="max-w-[850px]">
      <div className="absolute bottom-0 left-0 right-0 top-0 dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_34%_50%_at_50%_0%,#000_70%,transparent_110%)] z-[-1]"></div>
      <div className="mb-9">
        <Badge variant="outline" className="mb-3 text-slate-500">
          Hero
        </Badge>
        <h1 className="text-2xl md:text-5xl font-black">
          The Best Program to Enroll for Exchange
        </h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-black">
            Hero Form Details
          </CardTitle>
          <CardDescription>
            Join us in shaping our community! Submit your content with care and
            creativity. We welcome your contributions to inspire and connect.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                disabled={isLoading}
                control={form.control}
                name="postTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hero Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Hero title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />


              {/* Hero descripion of the home page*/}
              <FormField
                control={form.control}
                name="hero_description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hero Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Hero description"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-muted">
                      The hero description should be catchy! but less than 500 words!
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* first image */}

              {/* file upload using upload thing syntax */}

              <FormField
                disabled={isLoading}
                control={form.control}
                name="firstImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Top Image</FormLabel>
                    <FormControl>
                      <FileUpload
                        apiEndPoint="placeholderImage"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormControl>
                    <FormDescription>
                      The image that appears on the top part in the hero section.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />



              {/* first image */}

              {/* file upload using upload thing syntax */}

              <FormField
                disabled={isLoading}
                control={form.control}
                name="secondImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bottom Image</FormLabel>
                    <FormControl>
                      <FileUpload
                        apiEndPoint="placeholderImage"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormControl>
                    <FormDescription>
                      The image that appears on the bottom part in the hero section.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <div className="flex gap-4 items-center flex-col lg:flex-row  w-full">
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1 w-full">
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="eg. +230.." {...field} />
                      </FormControl>
                      <FormDescription>
                        prepend the country code eg.(+230)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
               
              </div>


              <Button
                type="submit"
                className="bg-blue-700 hover:bg-blue-600 text-white font-medium flex items-center gap-2"
              >
                {isLoading ? (
                  <FormLoader />
                ) : (
                  <MdPublish className="text-[20px]" />
                )}{" "}
                Publish
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}

export default HeroForm;
