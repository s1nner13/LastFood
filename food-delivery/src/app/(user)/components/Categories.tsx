"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
export const Categories = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  const categories = [
    "Appetizers",
    "Salads",
    "Pizzas",
    "Lunch favorites",
    "Main dishes",
    "Fish & Sea foods",
    "Side dish",
    "Brunch",
    "Desserts",
    "Beverages",
  ];
  return (
    <div className="w-[1440px] h-[176px] flex flex-col gap-9 px-12 py-8 ">
      <div className="w-[1344px] h-[36px] px-10">
        <p className="font-semibold text-[30px] text-white">Categories</p>
      </div>
      <div className="w-[1344px] h-10 flex gap-2 ">
        <Button variant="outline" size="icon">
          <ChevronLeft />
        </Button>
        <div className="w-[1248px] h-9 flex gap-2">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleClick(index)}
              className={`flex gap-[10px] px-5 py-4 h-9 rounded-[9999px] justify-center items-center ${
                clickedIndex === index ? "bg-[#ef4444] text-white" : "bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <Button variant="outline" size="icon">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
