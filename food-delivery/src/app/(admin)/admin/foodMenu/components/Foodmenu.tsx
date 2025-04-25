"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Adminappetizer } from "./Appetizer";
import { Adminsalads } from "./Salads";
import { Adminbreakfast } from "./Breakfast";
import { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Foodmenu = () => {
  const buttons = [
    { name: "All Dishes", quantity: 49 },
    { name: "Appetizers", quantity: 6 },
    { name: "Salads", quantity: 3 },
    { name: "Pizzas", quantity: 5 },
    { name: "Lunch favorites", quantity: 5 },
    { name: "Main dishes", quantity: 5 },
    { name: "Fish & Sea foods", quantity: 5 },
    { name: "Brunch", quantity: 5 },
    { name: "Side dish", quantity: 5 },
    { name: "Desserts", quantity: 5 },
    { name: "Beverages", quantity: 5 },
  ];
  const [newCategoryName, setNewCategoryName] = useState(null);

  const postCategory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/food-category/postCategoryasd",
        {
          name: newCategoryName,
        }
      );
      setNewCategoryName(response.data);
      console.log("Category created", response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[1171px]  flex flex-col gap-6  ">
      <div className="flex justify-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-[1171px] h-[176px] flex flex-col gap-4 px-6 py-6 rounded-2xl bg-white">
        <div className="ml-6 font-semibold text-[20px] text-black">
          Dishes category
        </div>
        <div className="w-[1123px] h-[84px] flex flex-wrap gap-3">
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={"outline"}
              className="rounded-[9999px]"
            >
              {button.name}
              <Badge className="rounded-[9999px]">{button.quantity}</Badge>
            </Button>
          ))}
          <Dialog>
            <DialogTrigger>
              <Button size="icon" className="rounded-full  bg-[#ef4444]">
                <Plus className="text-white" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add new category</DialogTitle>
                <DialogDescription>
                  <div className="flex flex-col gap-2">
                    <div className="font-medium text-[14px]">Category name</div>
                    <input
                      className="w-[412px] h-[38px] border rounded-[6px]"
                      placeholder="Type category name..."
                    ></input>
                    <div className="w-full h-full flex justify-end">
                      <button
                        onClick={postCategory}
                        className="bg-black text-white w-[123px] h-[40px] rounded-[6px] px-4 py-2"
                      >
                        Add category
                      </button>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Adminappetizer />
      <Adminsalads />
      <Adminbreakfast />
    </div>
  );
};
