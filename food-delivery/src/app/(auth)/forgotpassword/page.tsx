"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(15),
});

export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="flex justify-center">
      <div className="w-[1440px] relative">
        <div className="w-[416px] h-[376px] flex flex-col gap-6 absolute left-[100px] top-[326px]">
          <Link
            href="/login"
            className="w-[36px] h-[36px] border justify-center items-center flex rounded-[6px]"
          >
            <ChevronLeft />
          </Link>
          <div className="w-full h-[60px] flex flex-col gap-1">
            <p className="font-semibold text-[24px]">Reset your password</p>
            <p className="text-[16px] text-[#71717a]">
              Enter your email to receive a password reset link.{" "}
            </p>
          </div>
          <div className="w-[416px] flex flex-col gap-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button className="w-full h-9 bg-black text-white hover:bg-[#71717a] rounded-2xl">
                  Send link
                </button>
              </form>
            </Form>
          </div>

          <div className="w-full h-6 flex gap-3 justify-center ">
            <p className="text-[16px] text-[#71717a]">Don't have an account?</p>
            <p className="text-[16px] text-[#2563eb]">Sign up</p>
          </div>
        </div>
        <img
          src="/foodlogin.png"
          className="absolute top-[100px] left-[564px]"
        ></img>
      </div>
    </div>
  );
}
