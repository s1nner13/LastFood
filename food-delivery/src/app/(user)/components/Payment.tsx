"use client";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/app/_providers/AuthProvider";
type PaymentProps = {
  calculateTotal: number;
};
type CartItem = {
  foodName: string;
  ingredients: string;
  image: string;
  quantity: number;
  price: string;
  createdAt: Date;
  id: string;
};
export const Payment = ({ calculateTotal }: PaymentProps) => {
  const [shipping, setShipping] = useState(5000);
  const [cart, setCart] = useState<CartItem[]>([]);
  const { user } = useAuth();
  const paymentTotal = calculateTotal + shipping;
  console.log(cart);

  const postOrder = async () => {
    try {
      const orderItems = cart.map((item) => ({
        food: item.id,
        quantity: item.quantity,
        foodName: item.foodName,
      }));
      const response = await axios.post(
        "http://localhost:3001/food-order/post-order",
        {
          totalPrice: calculateTotal,
          user: user?._id,
          status: "pending",
          foodOrderItems: orderItems,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  return (
    <div className="w-[471px] h-[276px] flex flex-col gap-5 px-4 py-4 bg-white rounded-[20px] mt-6">
      <p className="font-semibold text-5">Payment info</p>
      <div className="w-[439px] h-[64px] flex flex-col gap-2">
        <div className="w-full h-[28px] flex justify-between">
          <p className="text-4 text-[#71717a]">Items</p>
          <p className="font-bold text-4">{calculateTotal}₮</p>
        </div>
        <div className="w-full h-[28px] flex justify-between">
          <p className="text-4 text-[#71717a]">Shipping</p>
          <p className="font-bold text-4">{shipping}₮</p>
        </div>
      </div>
      <Separator />
      <div className="w-full h-[28px] flex justify-between">
        <p className="text-4 text-[#71717a]">Total</p>
        <p className="font-bold text-4">{paymentTotal}₮</p>
      </div>
      <Button
        onClick={postOrder}
        className="bg-[#ef4444] font-medium text-[14px] text-white rounded-[9999px] ]"
      >
        Checkout
      </Button>
    </div>
  );
};
