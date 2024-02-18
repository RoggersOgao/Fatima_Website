"use client";

import React,{useEffect} from "react";
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
  CardFooter,
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
import Loading from "../global/loading";
import FormLoader from "../global/FormLoader";
import { NumberInput } from "@tremor/react";

type Props = {};

function CoursesForm({}: Props) {
  const formSchema = z.object({
    title: z.string().min(2, {
      message: "Post title must be at least 2 characters.",
    }),
    level: z.string(),
    weeks: z.string(),
    rating: z.string(),
    students: z.string(),
    lessons: z.string(),
    image: z.string().min(2),
  });
  // useEffect(() => {
  //   if (data) {
  //     form.reset(data)
  //   }
  // }, [data])
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset()
  }

  const isLoading = form.formState.isSubmitting;
  return (
    <section className="max-w-[850px]">
      <div className="absolute bottom-0 left-0 right-0 top-0 dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_34%_50%_at_50%_0%,#000_70%,transparent_110%)] z-[-1]"></div>
      <div className="mb-9">
        <Badge variant="outline" className="mb-3 text-slate-500">
          Courses
        </Badge>
        <h1 className="text-2xl md:text-5xl font-black">Web Design</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-black">
            Course form details
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
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Course title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                disabled={isLoading}
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Level</FormLabel>
                    <FormControl>
                      <Input placeholder="Course level" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center flex-col gap-4 justify-center md:flex-row">
                {/* number of weeks */}
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="weeks"
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1 w-full">
                      <FormLabel>Weeks</FormLabel>
                      <FormControl>
                        <NumberInput
                          // defaultValue={data?.goal}
                          onValueChange={async (val: number) => {
                            // if (!data?.id) return
                          }}
                          {...field}
                          min={1}
                          className="bg-card !border rounded-md !border-input text-sm text-zinc-400"
                          placeholder="numbers of weeks"
                        />
                      </FormControl>
                      {/* <FormDescription>eg. 5</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* rating */}
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1 w-full">
                      <FormLabel>Rating</FormLabel>
                      <FormControl>
                        <Input placeholder="rating" {...field} />
                      </FormControl>
                      {/* <FormDescription>eg. </FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center flex-col gap-4 justify-center md:flex-row">
                {/* number of students */}
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="students"
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1 w-full">
                      <FormLabel>Students</FormLabel>
                      <FormControl>
                        <NumberInput
                          // defaultValue={data?.goal}
                          onValueChange={async (val: number) => {
                            // if (!data?.id) return
                          }}
                          {...field}
                          min={1}
                          className="bg-card !border rounded-md !border-input text-sm text-zinc-400"
                          placeholder="numbers of students"
                        />
                      </FormControl>
                      {/* <FormDescription>eg. 5</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* number of weeks */}
                <FormField
                  disabled={isLoading}
                  control={form.control}
                  name="lessons"
                  render={({ field }) => (
                    <FormItem className="flex flex-col flex-1 w-full">
                      <FormLabel>Lessons</FormLabel>
                      <FormControl>
                        <NumberInput
                          // defaultValue={data?.goal}
                          onValueChange={async (val: number) => {
                            // if (!data?.id) return
                          }}
                          {...field}
                          min={1}
                          className="bg-card !border rounded-md !border-input text-sm text-zinc-400"
                          placeholder="numbers of lessons"
                        />
                      </FormControl>
                      {/* <FormDescription>eg. 5</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* image */}

              {/* file upload using upload thing syntax */}

              <FormField
                disabled={isLoading}
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course banner image</FormLabel>
                    <FormControl>
                      <FileUpload
                        apiEndPoint="placeholderImage"
                        onChange={field.onChange}
                        value={field.value}
                      />
                    </FormControl>
                    <FormDescription>This is the main image</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

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

export default CoursesForm;
