"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { api } from "../../../../../../axios";
type AllDishesPropsType = {
  selectedCat: string;
  setSelectedCat: (value: string) => void;
};
export const Alldishes = ({
  selectedCat,
  setSelectedCat,
}: AllDishesPropsType) => {
  const [count, setCount] = useState(0);

  const countDishes = async () => {
    const response = await api.get(`/food/foods/count?categoryId=`);
    setCount(response.data.foodCount);
    console.log(response);
  };

  useEffect(() => {
    countDishes();
  }, []);

  return (
    <div>
      <Button
        variant={"outline"}
        className={`rounded-[9999px]  ${
          selectedCat === "" ? "border-red-500 border" : ""
        }`}
        onClick={() => setSelectedCat("")}
      >
        All Dishes <Badge className="rounded-[9999px]">{count}</Badge>
      </Button>
    </div>
  );
};
