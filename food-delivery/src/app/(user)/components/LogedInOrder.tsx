"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { MapedOrder } from "./Mapedorder";
import { useAuth } from "@/app/_providers/AuthProvider";

type FoodOrderItem = {
  food: {
    _id: string;
    foodName: string;
    image: string;
    price: string;
  };
  quantity: number;
};
type OrderType = {
  _id: string;
  user: string;
  foodOrderItems: FoodOrderItem[];
  totalPrice: number;
  status: string;
  createdAt: string;
};
export const Order = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const { user } = useAuth();
  const getOrder = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/food-order/get-order?userId=${user?._id}`
      );
      setOrders(response.data.orders);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <div className="w-[471px] h-[840px] flex flex-col gap-4 px-4 py-4 rounded-[20px] bg-white mt-6 overflow-scroll">
      <div className="w-[439px] h-[346px] flex flex-col gap-5 ">
        <p className="font-semibold text-[20px]">Order history</p>
        {orders?.map((item) => (
          <MapedOrder key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};
