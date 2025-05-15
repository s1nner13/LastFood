"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { api } from "../../../../../axios";
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
  user: {
    _id: string;
    email: string;
    address: string;
  };
  foodOrderItems: FoodOrderItem[];
  totalPrice: number;
  status: string;
  createdAt: string;
};
export const Tables = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);

  const getOrder = async () => {
    try {
      const response = await api.get(`/food-order/get-allorder`);
      setOrders(response.data.orders);
    } catch (error) {
      console.error(error);
    }
  };
  const updateOrderStatus = async (orderId: string, newStatus: string) => {
    try {
      const response = await api.put(`/food-order/update-status`, {
        orderId,
        status: newStatus,
      });
      console.log("Status updated:", response.data);
      getOrder();
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "pending":
        return "text-red-500 border-red-500";
      case "delivered":
        return "text-green-500 border-green-500";
      case "cancelled":
        return "text-gray-500 border-gray-400";
      default:
        return "";
    }
  };

  return (
    <div>
      {orders.map((order, index) => (
        <div key={index} className="w-full h-[52px] bg-[#f4f4f5] flex ">
          <div className="w-[48px] h-[52px] flex gap-[10px] px-4 py-4 items-center">
            <Checkbox className="bg-white"></Checkbox>
          </div>
          <div className="w-[56px] h-[52px] py-4 px-4 text-[14px] items-center flex overflow-scroll">
            {order._id}
          </div>
          <div className="w-[214px] h-full px-4 flex gap-[10px] items-center text-[14px] overflow-scroll">
            {order.user.email}
          </div>
          <div className=" w-[160px] h-full px-4 flex gap-[50px] items-center text-[14px]">
            <Popover>
              <PopoverTrigger className="flex">
                {order.foodOrderItems.length} foods <ChevronDown />
              </PopoverTrigger>
              <PopoverContent>
                {order.foodOrderItems.map((item) => (
                  <div key={item.food._id} className="flex justify-between">
                    <span>{item.food.foodName}</span>
                    <span>x{item.quantity}</span>
                  </div>
                ))}
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            {new Date(order.createdAt).toLocaleDateString()}
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            {order.totalPrice}₮
          </div>
          <div className="w-[214px] h-full px-4 flex gap-[10px] items-center text-[14px]  overflow-scroll">
            {order.user.address}
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[10px] items-center text-[14px] ">
            <select
              className={`bg-white rounded-full px-3 py-1 text-sm border ${getStatusStyle(
                order.status
              )}`}
              value={order.status}
              onChange={(e) => updateOrderStatus(order._id, e.target.value)}
            >
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};
