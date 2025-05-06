"use client";
import { Button } from "@/components/ui/button";
import { Minus, Plus, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export type foodType = {
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  category: string;
  _id: string;
};
type FoodsProps = {
  item: foodType;
};

export const Foodcards = ({ item }: FoodsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(parseFloat(item.price));

  useEffect(() => {
    setTotalPrice(parseFloat(item.price) * quantity);
  }, [quantity, item.price]);
  const handleAddCart = () => {
    const newFood = {
      id: item._id,
      foodName: item.foodName,
      price: item.price,
      image: item.image,
      ingredients: item.ingredients,
      quantity: quantity,
    };

    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    const UpdatedFood = [...stored, newFood];
    localStorage.setItem("cart", JSON.stringify(UpdatedFood));
  };

  const handleAddQantity = () => {
    setQuantity((prevquantity) => prevquantity + 1);
  };
  const handleMinusQantity = () => {
    if (quantity <= 1) return;
    setQuantity((prevquantity) => prevquantity - 1);
  };
  return (
    <div
      key={item._id}
      className="w-[397px] bg-white flex flex-col gap-5 px-4 py-4 rounded-[20px]"
    >
      <div className="relative">
        <img src={item.image} className="relative" />
        <Dialog>
          <DialogTrigger>
            <Button
              size="icon"
              className="rounded-full absolute top-[146px] left-[301px] z-10 bg-white"
            >
              <Plus className="text-[#ef4444]" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[826px] h-[412px] flex gap-6 px-6 py-6 bg-white">
            <img
              src={item.image}
              className="w-[377px] h-[364px] rounded-[12px]"
            ></img>
            <div className="w-[377px] h-[328px] flex flex-col justify-between">
              <div className="w-full h-[96px] flex flex-col gap-3">
                <p className="font-semibold text-[30px] text-[#ef4444]">
                  {item.foodName}
                </p>
                <p className="text-[16px]">{item.ingredients}</p>
              </div>
              <div className="w-full h-[124px] flex flex-col gap-6">
                <div className="w-full h-[56px] flex ">
                  <div className="w-[256px] h-[56px] flex flex-col">
                    <p className="text-[16px]">Total price</p>
                    <p className="font-semibold text-6">{totalPrice}</p>
                  </div>
                  <div className="w-[121px] h-[44px] flex gap-3 items-center">
                    <Button
                      onClick={handleMinusQantity}
                      className="w-11 h-11 rounded-[9999px] flex justify-center items-center bg-white border border-black"
                    >
                      <Minus className="text-black" />
                    </Button>
                    <p className="font-semibold text-[18px]">{quantity}</p>
                    <Button
                      onClick={handleAddQantity}
                      className="w-11 h-11 rounded-[9999px] flex justify-center items-center bg-white border border-black"
                    >
                      <PlusIcon className="text-[black] " />
                    </Button>
                  </div>
                </div>
                <Button
                  className="w-[377px] h-[44px] flex gap-2 py-2 text-white rounded-[9999px]"
                  onClick={() => handleAddCart()}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="font-semibold text-6 text-[#ef4444]">{item.foodName}</p>
          <p className="font-semibold text-[18px]">{item.price}</p>
        </div>
        <p>{item.ingredients}</p>
      </div>
    </div>
  );
};
