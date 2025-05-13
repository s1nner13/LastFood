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
import { useAuth } from "@/app/_providers/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  password: z.string().min(2).max(15),
});

export default function Home() {
  const { signIn } = useAuth();
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
      const user = await signIn(values.email, values.password);
      if (!user) return;

      if (user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-[1440px] relative">
        <div className="w-[416px] h-[376px] flex flex-col gap-6 absolute left-[100px] top-[326px]">
          <div className="w-full h-[60px] flex flex-col gap-1">
            <p className="font-semibold text-[24px]">Log in</p>
            <p className="text-[16px] text-[#71717a]">
              Log in to enjoy your favorite dishes.
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
                          placeholder="Enter your password"
                          type="password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button className="w-full h-9 bg-black text-white hover:bg-[#71717a] rounded-2xl">
                  Let's Go
                </button>
              </form>
            </Form>

            <Link href="/forgotpassword" className="underline">
              Forgot password ?
            </Link>
          </div>

          <div className="w-full h-6 flex gap-3 justify-center ">
            <p className="text-[16px] text-[#71717a]">Don't have an account?</p>
            <Link href="/signup" className="text-[16px] text-[#2563eb]">
              Sign up
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
