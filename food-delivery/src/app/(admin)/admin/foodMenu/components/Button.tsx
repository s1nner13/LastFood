"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import axios from "axios";
export type categoryType = {
  button: {
    categoryName: string;
    _id: string;
  };
  selectedCat: string;
  setSelectedCat: (value: string) => void;
};
export const Buttons = ({
  button,
  selectedCat,
  setSelectedCat,
}: categoryType) => {
  const [count, setCount] = useState(0);
  const getCategory = async () => {
    const response = await axios.get(
      `http://localhost:3001/food/foods/count?categoryId=${button._id}`
    );
    setCount(response.data.foodCount);
    console.log(response);
  };

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <Button
      variant={"outline"}
      className={`rounded-[9999px] ${
        selectedCat === button._id ? "border border-red-500" : ""
      }`}
      onClick={() => setSelectedCat(button._id)}
    >
      {button.categoryName}
      <Badge className="rounded-[9999px]">{count}</Badge>
    </Button>
  );
};
