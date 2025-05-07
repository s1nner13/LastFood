"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
export type categoriesType = {
  categoryName: string;
  _id: string;
};
type CategoriesProps = {
  categories: categoriesType[];
  onCategoryClick: (categoryId: string) => void;
};
export const Categories = ({
  categories,
  onCategoryClick,
}: CategoriesProps) => {
  const [clickedIndex, setClickedIndex] = useState<string>("");

  const handleClick = (index: string) => {
    setClickedIndex(index);
    onCategoryClick(index);
  };

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
          {categories.map((item) => (
            <button
              key={item._id}
              onClick={() => handleClick(item._id)}
              className={`flex gap-[10px] px-5 py-4 h-9 rounded-[9999px] justify-center items-center
                 ${
                   clickedIndex === item._id
                     ? "bg-[#ef4444] text-white"
                     : "bg-white"
                 }
              `}
            >
              {item.categoryName}
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
