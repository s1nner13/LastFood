"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Editcategory } from "./Editcategory";
import { useState } from "react";
import { Deletedish } from "./Deletedish";
import { api } from "../../../../../axios";
type EditDishProps = {
  foodname: string;
  ingredients: string;
  price: string;
  image: string;
  foodId: string;
  categoryId: string;
  onClose: () => void;
};
export const Editdish = ({
  foodname,
  ingredients,
  price,
  categoryId,
  foodId,
  onClose,
}: EditDishProps) => {
  const [name, setName] = useState(foodname);
  const [dishIngredients, setDishIngredients] = useState(ingredients);
  const [dishPrice, setDishPrice] = useState(price);
  // const [dishImage, setDishImage] = useState<File | null>(null);
  const [editSuccess, setEditSuccess] = useState(false);
  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setDishImage(e.target.files[0]);
  //   }
  // };

  const Patchfood = async () => {
    try {
      const response = await api.patch(`/food/patch?foodId=${foodId}`, {
        foodName: name,
        price: dishPrice,
        ingredients: dishIngredients,
        category: categoryId,
      });
      if (response.status === 200 || response.status === 201) {
        setEditSuccess(true);
      }
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[472px] h-[596px] flex flex-col gap-3 py-6 px-6  rounded-[12px] bg-white">
      <div className="w-[424px] h-[36px] flex gap-[10px] justify-between">
        <p className="font-semibold text-[18px] text-black ">Dishes info</p>
      </div>
      <div className="w-[424px] h-[424px] flex flex-col">
        <div className="w-full h-[60px] flex gap-4 py-3 justify-between">
          <p className="text-[#71717a]">Dish name</p>
          <Input
            className="w-[288px] h-[36px] px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </div>
        <div className="w-full h-[60px] flex gap-4 py-3 justify-between">
          <p className="text-[#71717a]">Dish category</p>
          <Editcategory />
        </div>
        <div className="w-full h-[104px] flex gap-4 py-3 justify-between">
          <p className="text-[#71717a]">Ingredients</p>
          <Input
            className="w-[288px] h-[80px] px-3 py-2"
            value={dishIngredients}
            onChange={(e) => setDishIngredients(e.target.value)}
          ></Input>
        </div>
        <div className="w-full h-[60px] flex gap-4 py-3 justify-between">
          <p className="text-[#71717a]">Price</p>
          <Input
            className="w-[288px] h-[36 px] px-3 py-2"
            value={dishPrice}
            onChange={(e) => setDishPrice(e.target.value)}
          ></Input>
        </div>
        <div className="w-full h-[140px] flex gap-4 py-3 justify-between">
          <p className="text-[#71717a]">Image</p>
          <Input
            className="w-[288px] h-[116px] px-3 py-2"
            type="file"
            // onChange={handleImageChange}
          ></Input>
        </div>
      </div>
      {editSuccess && (
        <p className="text-green-600 text-sm text-center">
          Amjilttai shinchlegdlee!
        </p>
      )}
      <div className="w-[424px] h-[64px] flex pt-6 justify-between">
        <Deletedish foodId={foodId} onClose={onClose} />
        <Button className="w-[126px] h-[40px] px-4 py-2" onClick={Patchfood}>
          Save changes
        </Button>
      </div>
    </div>
  );
};
