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

type Props = {};

function VideoForm({}: Props) {
  const formSchema = z.object({
    link: z.string().min(10)
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
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
          Video
        </Badge>
        <h1 className="text-2xl md:text-5xl font-black">
          About Fatima Code
        </h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-black">
            Video form link
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
                name="link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video link</FormLabel>
                    <FormControl>
                      <Input placeholder="Provide your video link here..." {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      eg.https://www.youtube.com/watch?v=cFC2rw...
                    </FormDescription>
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

export default VideoForm;
