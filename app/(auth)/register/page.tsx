"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "@/components/ui/use-toast";
import { signUpWithEmailAndPassword } from "../action";

const FormSchema = z
  .object({
    username: z.string().min(1, {
      message: "Username is required.",
    }),
    email: z.string().email(),
    password: z.string().min(6, {
      message: "Email is required.",
    }),
    confirm: z.string().min(6, {
      message: "Password is required.",
    }),
  })
  .refine((data) => data.confirm === data.password, {
    message: "Password did not match",
    path: ["confirm"],
  });

const RegisterPage = () => {
  let [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const result = await signUpWithEmailAndPassword(data);
      const { error } = JSON.parse(result);
      if (error?.message) {
        toast({
          variant: "destructive",
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{error.message}</code>
            </pre>
          ),
        });
      } else {
        toast({
          title: "You are successfully register.",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">register complete</code>
            </pre>
          ),
        });
      }
    });
  }
  return (
    <div className="bg-white h-screen flex items-center justify-center p-10">
      <div className="grid w-full grid-cols-1 bg-white md:grid-cols-2">
        <div className="  text-slate-600 flex items-center justify-center flex-col">
          <div className="my-4">
            <div className="flex gap-4 items-end justify-center">
              {" "}
              <h1 className="text-3xl font-semibold">Sign Up</h1>
              <Image src="/bpi-logo.png" alt="" width={100} height={50} />
            </div>

            <p className="mt-2 text-sm text-slate-400">
              Team work with good communication.
            </p>
          </div>

          <Form {...form}>
            <form
              className="md:w-1/2 lg:w-1/2 "
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Full Name"
                        {...field}
                        type="text"
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        {...field}
                        type="email"
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        {...field}
                        type="password"
                        onChange={field.onChange}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirm Password"
                        {...field}
                        type="password"
                        onChange={field.onChange}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full flex gap-2 mt-6 bg-[#FD9840] rounded-sm hover:bg-yellow-500"
              >
                Sign Up
                <AiOutlineLoading3Quarters
                  className={cn(" animate-spin", { hidden: !isPending })}
                />
              </Button>
            </form>
          </Form>
          <p className="mt-4 text-sm text-slate-600">
            Already has account ?{" "}
            <Link
              href="/auth/login"
              className="text-yellow-400 hover:text-yellow-500"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div className="relative lg:block md:block">
          <Image
            className="object-cover"
            fill={true}
            src="/bg-login.jpg"
            alt="background"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
