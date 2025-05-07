"use client";
import { Minus, Plus, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";

type CartItem = {
  foodName: string;
  ingredients: string;
  image: string;
  quantity: number;
  price: number;
};
type CartProps = {
  item: CartItem;
  onRemove: (foodName: string) => void;
  onQuantityChange: (foodName: string, newQuantity: number) => void;
};
export const MapedCart = ({ item, onRemove, onQuantityChange }: CartProps) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);

  const totalPrice = quantity * item.price;

  const handleAddQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(item.foodName, newQuantity);
  };

  const handleMinusQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    onQuantityChange(item.foodName, newQuantity);
  };

  return (
    <>
      <div className="w-full h-[120px] flex gap-[10px] ">
        <img className="w-[124px] h-full rounded-[12px]" src={item.image}></img>
        <div className="w-[305px] h-full flex flex-col gap-6">
          <div className="flex gap-[10px]">
            <div className="flex flex-col w-[259px]">
              <p className="font-bold text-4 text-[#ef4444]">{item.foodName}</p>
              <p className="text-[12px]">{item.ingredients}</p>
            </div>
            <button
              onClick={() => onRemove(item.foodName)}
              className="w-[36px] h-[36px] rounded-[9999px] border border-[#ef4444] flex justify-center items-center"
            >
              <X className="w-4 h-4 text-[#ef4444]" />
            </button>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="w-[105px] h-[36px] flex gap-3 items-center">
              <button
                onClick={handleMinusQuantity}
                className="w-9 h-9 flex justify-center items-center"
              >
                <Minus className="w-4 h-4" />
              </button>
              <p className="font-semibold text-[18px]">{quantity}</p>
              <button
                onClick={() => handleAddQuantity()}
                className="w-9 h-9 flex justify-center items-center "
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <p className="font-bold text-4">{totalPrice}</p>
          </div>
          <Separator />
        </div>
      </div>
    </>
  );
};
