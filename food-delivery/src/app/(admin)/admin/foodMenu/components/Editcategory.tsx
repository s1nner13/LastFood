"use client";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "../../../../../../axios";

export type categoryType = {
  categoryName: string;
  _id: string;
};
export const Editcategory = () => {
  const [category, setCategory] = useState<categoryType[]>([]);
  const getCategory = async () => {
    const response = await api.get(`/category`);
    setCategory(response.data.categories);
  };
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <Select>
      <SelectTrigger className="w-[288px] h-[36px]">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {category.map((button, index) => (
          <SelectItem value={button._id} key={index}>
            {button.categoryName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
