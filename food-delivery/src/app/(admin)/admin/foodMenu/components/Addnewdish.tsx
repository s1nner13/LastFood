"use client";
import { X } from "lucide-react";
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
export type foodType = {
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  category: string;
};
type AddNewDishProps = {
  setShowAddDish: (show: boolean) => void;
};
const formSchema = z.object({
  foodname: z.string().min(2, {
    message: "Hoolnii ner oruulna uu!",
  }),
  foodPrice: z.string().min(2, {
    message: "Vne oruulna uu!",
  }),
  ingredients: z.string().min(2, {
    message: "Orts oruulna uu!",
  }),
  foodImage: z.string(),
});
export const Addnewdish = ({ setShowAddDish }: AddNewDishProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: "",
      foodPrice: "",
      ingredients: "",
      foodImage: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-[460px] h-[620px] flex flex-col gap-6 py-6 px-6 bg-white rounded-2xl absolute z-15 top-[500px] left-[1000px]">
      <Form {...form}>
        <form
          className="flex flex-col gap-[30px]"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-[412px] h-[52px] flex gap-[10px]">
            <div className="w-[366px] h-[28px] font-semibold text-[18px]">
              Add new Dish to Appetizers
            </div>
            <div
              className="w-[36px] h-[36px] rounded-[9999px] bg-[#f4f4f5] flex justify-center items-center"
              onClick={() => setShowAddDish(false)}
            >
              <X />
            </div>
          </div>
          <div className="w-[412px] h-[60px] flex gap-6 ">
            <div className="w-[194px] h-[60px] flex flex-col gap-2">
              <FormField
                control={form.control}
                name="foodname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Foodname</FormLabel>
                    <FormControl>
                      <Input placeholder="Type food name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-[194px] h-[60px] flex flex-col gap-2">
              <FormField
                control={form.control}
                name="foodPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Food price</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter price..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="w-[194px] h-[60px] flex flex-col gap-2">
            <FormField
              control={form.control}
              name="foodPrice"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Food category</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter category..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-[412px] h-[112px] flex flex-col gap-2">
            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ingredients</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[412px] h-[90px]"
                      placeholder="List ingrediients..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-[412px] h-[112px] flex flex-col gap-2">
            <FormField
              control={form.control}
              name="foodImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Food image</FormLabel>
                  <FormControl>
                    <Input
                      className="w-[412px] h-[90px]"
                      type="file"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit">Add Dish</Button>
        </form>
      </Form>
    </div>
  );
};
