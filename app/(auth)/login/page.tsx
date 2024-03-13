"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { usePathname, useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ErrorAlert from "@/app/components/ErrorAlert";
import { readUserSession } from "@/lib/supabase/action";
import { createBrowserClient } from "@supabase/ssr";
const formSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: "Email couldn't be empty",
    })
    .email({
      message: "Please insert email format.",
    }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

const LoginPage = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    if (values.email == "demo@demo.com" && values.password == "123qwe") {
      router.push("/dashboard");
    } else {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }

  const loginWithGoogle = () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const result = supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: "https://www.googleapis.com/auth/calendar",
        redirectTo: `${location.origin}/api`,
      },
    });

    console.log(result);
  };

  return (
    <div className="bg-white h-screen flex items-center justify-center p-10">
      <div className="grid w-full grid-cols-1 bg-white md:grid-cols-2">
        <div className="  text-slate-600 flex items-center justify-center flex-col">
          <div className="my-4">
            <div className="flex gap-4 items-end justify-center">
              {" "}
              <h1 className="text-3xl font-semibold">Sign In</h1>
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
              <Button
                className="flex items-center w-full gap-4 mb-4 px-12 bg-transparent rounded-full"
                variant="outline"
                onClick={() => loginWithGoogle()}
              >
                <FcGoogle size={30} />
                Sign in with google
              </Button>
              {show ? (
                <ErrorAlert
                  className=" bg-red-600"
                  message="Sorry, account not found"
                />
              ) : (
                <></>
              )}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Email <span className="text-xs text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-5"
                        placeholder="Email Address"
                        {...field}
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
                    <FormLabel>
                      Password <span className="text-xs text-red-600">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="py-5"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between mt-4">
                <div className="flex gap-2">
                  <Checkbox className="bg-white" id="remember" />{" "}
                  <span className="text-xs ">Remember me</span>
                </div>
                <Link href="#" className="text-xs hover:text-yellow-500">
                  Forgot Password ?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-[#FD9840] rounded-sm hover:bg-yellow-500"
              >
                Sign in
              </Button>
            </form>
          </Form>

          <p className="mt-4 text-sm text-slate-600">
            Haven't account yet ?{" "}
            <Link
              href="/register"
              className="text-yellow-400 hover:text-yellow-500"
            >
              Sign Up
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

export default LoginPage;
