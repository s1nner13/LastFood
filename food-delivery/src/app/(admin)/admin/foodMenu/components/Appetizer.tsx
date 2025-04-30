"use client";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Addnewdish } from "./Addnewdish";
import axios from "axios";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Editdish } from "./Editdish";

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
const UPLOAD_PRESET = "guneegod";
const CLOUD_NAME = "dqd01lbfy";
export const Adminappetizer = ({ categoryName, categoryId }: categoryType) => {
  const [foods, setFoods] = useState<foodType[]>([]);
  const [showAddDish, setShowAddDish] = useState(false);

  const toggleForm = () => {
    setShowAddDish((prev) => !prev);
  };

  const getFood = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/food/foods?categoryId=${categoryId}`
      );

      setFoods(response.data.food);
      console.log(response);
    } catch (error) {
      console.error("Error fetching food:", error);
    }
  };
  useEffect(() => {
    getFood();
  }, [showAddDish]);
  return (
    <div className="w-[1171px] h-[582px] bg-white px-5 py-5 gap-4 flex flex-col rounded-2xl">
      <div className="font-semibold text-[20px]">
        {categoryName} ({foods.length})
      </div>
      <div className="w-[1131px] h-[241px] flex flex-wrap gap-4 ">
        <div className="flex flex-wrap gap-4">
          <div className="w-[270px] h-[241px] border border-dashed border-[#ef4444] rounded-[20%] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-6">
              <Button
                onClick={toggleForm}
                size="icon"
                className="rounded-full  bg-[#ef4444]"
              >
                <Plus className="text-white" />
              </Button>
              <p>Add new Dish</p>
            </div>
            {showAddDish && (
              <Addnewdish
                setShowAddDish={setShowAddDish}
                categoryId={categoryId}
              />
            )}
          </div>

          {foods.map((item, index) => (
            <div
              key={item._id}
              className="w-[270px] h-[241px] bg-white flex flex-col gap-5 px-4 py-4 rounded-[20px] border"
            >
              <div className="relative">
                <img src={item.image} className="relative" />
                <Button
                  size="icon"
                  className="rounded-full absolute top-[65px] left-[174px] z-10 bg-white"
                >
                  <Dialog>
                    <DialogTrigger>
                      <Pencil className="text-[#ef4444]" />
                    </DialogTrigger>
                    <DialogContent>
                      <Editdish
                        foodname={item.foodName}
                        ingredients={item.ingredients}
                        foodId={item._id}
                        price={item.price}
                        image={item.image}
                        categoryId={item.category._id}
                      />
                    </DialogContent>
                  </Dialog>
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="font-medium text-[14px] text-[#ef4444]">
                    {item.foodName}
                  </p>
                  <p className=" text-[12px]">{item.price}</p>
                </div>
                <p className="text-[12px]">{item.ingredients}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
