"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { LuChevronLeft } from "react-icons/lu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "@/lib/redux/slices/postSlice";
import { useState } from "react";
import Loading from "@/app/components/Loading";
import { setShow } from "@/lib/redux/slices/loadingSlice";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { addMinutes, format } from "date-fns";
import { createOnlineMeeting } from "./action";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  host: z.string().min(2, {
    message: "Host name must be choosen.",
  }),
  eventName: z.string().min(6, {
    message: "Event name must be at least 6 characters.",
  }),
  duration: z.string().min(2, {
    message: "Duration must be choosen.",
  }),
  location: z.string().optional(),
  note: z.string().optional(),
});

const CreateForm = ({ date }: any) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      duration: "",
    },
  });
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.posts);
  console.log(posts);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    // console.log(addMinutes(date, 30));
    var minutes = 0;
    if (values.duration == "15 Minutes") {
      minutes = 15;
    } else if (values.duration == "30 Minutes") {
      minutes = 30;
    } else if (values.duration == "45 Minutes") {
      minutes = 45;
    } else if (values.duration == "60 Minutes") {
      minutes = 60;
    } else {
      minutes = 120;
    }
    const newPost = {
      id: Date.now(),
      title: values.eventName,
      host: values.host,
      note: values.note,
      duration: values.duration,
      location: values.location,
      startDate: date,
      endDate: addMinutes(date, minutes),
    };
    const result = await createOnlineMeeting(newPost);

    dispatch(setShow(""));
    setTimeout(() => {
      dispatch(addPost(newPost));
      dispatch(setShow(""));
    }, 3000);
    router.push("/dashboard");
  }

  return (
    <>
      <div className=" w-1/3 bg-white px-8 h-screen py-8 ">
        <Link
          href="/dashboard"
          className="text-2xl font-semibold cursor-pointer flex gap-2 hover:text-yellow-400"
        >
          <LuChevronLeft size={30} /> Cancel
        </Link>
        <div className="flex-grow mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="host"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Host <span className="text-xs text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full py-5">
                          <SelectValue placeholder="Host name" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="joko">Joko</SelectItem>
                          <SelectItem value="mul">Mul</SelectItem>
                          <SelectItem value="arman">Arman</SelectItem>
                          <SelectItem value="maulana">Maulana</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="eventName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Event Name <span className="text-xs text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-5"
                        placeholder="Name your event"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Duration <span className="text-xs text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full py-5">
                          <SelectValue placeholder="Duration" {...field} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15 Minutes">15 Minutes</SelectItem>
                          <SelectItem value="30 Minutes">30 Minutes</SelectItem>
                          <SelectItem value="45 Minutes">45 Minutes</SelectItem>
                          <SelectItem value="60 Minutes">60 Minutes</SelectItem>
                          <SelectItem value="more than 60 Minutes">
                            More
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full py-5">
                          <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="online">Google Meet</SelectItem>
                          <SelectItem value="offline">
                            Offline Meeting
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes</FormLabel>
                    <FormControl>
                      <Input className="py-5" placeholder="Notes" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateForm;
