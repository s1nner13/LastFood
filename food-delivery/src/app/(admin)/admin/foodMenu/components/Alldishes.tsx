"use client";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
export const Alldishes = () => {
  const [count, setCount] = useState(0);

  const countDishes = async () => {
    const response = await axios.get(
      `http://localhost:3001/food/foods/count?categoryId=`
    );
    setCount(response.data.foodCount);
    console.log(response);
  };

  useEffect(() => {
    countDishes();
  }, []);
  return (
    <div>
      <Button variant={"outline"} className="rounded-[9999px]">
        All Dishes <Badge className="rounded-[9999px]">{count}</Badge>
      </Button>
    </div>
  );
};
