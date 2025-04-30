"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Adminappetizer } from "./Appetizer";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Buttons } from "./Button";
import { Alldishes } from "./Alldishes";
import { Editdish } from "./Editdish";
export type categoryType = {
  categoryName: string;
  _id: string;
};
export const Foodmenu = () => {
  const [category, setCategory] = useState<categoryType[]>([]);
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [categorySuccess, setCategorySuccess] = useState(false);
  const getCategory = async () => {
    const response = await axios.get("http://localhost:3001/category");
    setCategory(response.data.categories);
  };
  useEffect(() => {
    getCategory();
  }, []);
  const postCategory = async () => {
    const categoryExists = category.some(
      (existingCategory) =>
        existingCategory.categoryName.toLowerCase() ===
        newCategoryName.toLowerCase()
    );
    if (categoryExists) {
      setErrorMessage("Category ner davhtsaj baina.");
      return;
    }

    if (!newCategoryName.trim()) {
      alert("Category ner oruulna uu!");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/category/create-category",
        {
          categoryName: newCategoryName,
        }
      );
      if (response.status === 200 || response.status === 201) {
        setCategorySuccess(true);
      }
      setCategory((prevCategories) => [
        ...prevCategories,
        { categoryName: newCategoryName, _id: response.data._id },
      ]);
      setNewCategoryName("");
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
          Dishes category({category.length})
        </div>
        <div className="w-[1123px] h-[84px] flex flex-wrap gap-3">
          <Alldishes />
          {category.map((button, index) => (
            <div key={index}>
              <Buttons button={button} />
            </div>
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
                      value={newCategoryName}
                      onChange={(e) => setNewCategoryName(e.target.value)}
                    ></input>
                    {errorMessage && (
                      <div className="text-red-500 text-sm mt-2">
                        {errorMessage}
                      </div>
                    )}
                    {categorySuccess && (
                      <p className="text-green-600 text-sm text-center">
                        Amjilttai nemegdlee!
                      </p>
                    )}
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
      {category.map((item, index) => {
        return (
          <div key={index}>
            <Adminappetizer
              categoryName={item.categoryName}
              categoryId={item._id}
            />
          </div>
        );
      })}
    </div>
  );
};
