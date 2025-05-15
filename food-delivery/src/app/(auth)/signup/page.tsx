"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../../axios";
const formSchema = z.object({
  email: z
    .string()
    .min(2, { message: "Emailee bvten oruulna uu." })
    .max(50)
    .email({ message: "Emailee zuv oruulna uu!" }),
  password: z.string().min(3, {
    message: "password oruulna uu!",
  }),
});

export default function Home() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const checkResponse = await api.post(`/auth/user-exists`, {
        email: values.email,
      });

      if (checkResponse.data.exists) {
        form.setError("email", {
          type: "manual",
          message: "bvrtgeltei email bn.",
        });
        return;
      }

      await postAccount(values);
    } catch (error) {
      console.error(error);
      form.setError("email", {
        type: "manual",
        message: "Serveriin aldaa.",
      });
    }
  };

  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const postAccount = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await api.post(`/auth/sign-up`, {
        email,
        password,
      });
      if (response.status === 200 || response.status === 201) {
        setSignUpSuccess(true);
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      }
    } catch (error) {
      console.log("Signup failed:", error);
      setSignUpSuccess(false);
    }
  };

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
            <p className="font-semibold text-[24px]">Create your account</p>
            <p className="text-[16px] text-[#71717a]">
              Sign up to explore your favorite dishes.
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
              </form>
            </Form>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Create your password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  className="w-full h-9 bg-black text-white hover:bg-[#71717a] rounded-2xl"
                >
                  Let&apos;s Go
                </button>
                {signUpSuccess && (
                  <p className="text-green-600 text-sm text-center">
                    Amjilttai bvrteglee!
                  </p>
                )}
              </form>
            </Form>
          </div>

          <div className="w-full h-6 flex gap-3 justify-center ">
            <p className="text-[16px] text-[#71717a]">
              Already have an account?
            </p>
            <Link href="/login" className="text-[16px] text-[#2563eb]">
              Log in
            </Link>
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
