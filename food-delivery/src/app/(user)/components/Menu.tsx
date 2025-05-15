"use client";
import { useEffect, useState } from "react";
import { Foodcards } from "./Foodcards";
import { api } from "../../../axios";

export type foodType = {
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  category: string;
  _id: string;
};
export type categoryType = {
  categoryName: string;
  categoryId: string;
};
export const Menu = ({ categoryId, categoryName }: categoryType) => {
  const [foods, setFoods] = useState<foodType[]>([]);
  const getFood = async () => {
    try {
      const response = await api.get(`/food/foods?categoryId=${categoryId}`);

      setFoods(response.data.food);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getFood();
  }, []);
  return (
    <div className="w-[1264px] flex flex-col gap-[54px]">
      <div className="w-[1264px] flex flex-col gap-[30px]">
        <div className="font-semibold text-[24px] text-white mt-5">
          {categoryName}
        </div>
        <div className="flex flex-wrap gap-9">
          {foods.map((item) => (
            <Foodcards item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
