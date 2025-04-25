"use client";
import { Button } from "@/components/ui/button";
import { Pencil, Plus } from "lucide-react";
import { useState } from "react";
import { Addnewdish } from "./Addnewdish";
export const Adminappetizer = () => {
  const items = [
    {
      id: 1,
      image: "/Appetizer.png",
      name: "Finger food",
      price: "$12.99",
      info: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    },
    {
      id: 2,
      image: "/Appetizer.png",
      name: "Finger food",
      price: "$12.99",
      info: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    },
    {
      id: 3,
      image: "/Appetizer.png",
      name: "Finger food",
      price: "$12.99",
      info: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    },
    {
      id: 4,
      image: "/Appetizer.png",
      name: "Finger food",
      price: "$12.99",
      info: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    },
    {
      id: 5,
      image: "/Appetizer.png",
      name: "Finger food",
      price: "$12.99",
      info: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    },
    {
      id: 6,
      image: "/Appetizer.png",
      name: "Finger food",
      price: "$12.99",
      info: "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    },
  ];
  const [showAddDish, setShowAddDish] = useState(false);

  const toggleForm = () => {
    setShowAddDish((prev) => !prev);
  };
  return (
    <div className="w-[1171px] h-[582px] bg-white px-5 py-5 gap-4 flex flex-col rounded-2xl">
      <div className="font-semibold text-[20px]">Appetizers (6)</div>
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
            {showAddDish && <Addnewdish />}
          </div>

          {items.map((item) => (
            <div
              key={item.id}
              className="w-[270px] h-[241px] bg-white flex flex-col gap-5 px-4 py-4 rounded-[20px] border"
            >
              <div className="relative">
                <img src={item.image} className="relative" />
                <Button
                  size="icon"
                  className="rounded-full absolute top-[65px] left-[174px] z-10 bg-white"
                >
                  <Pencil className="text-[#ef4444]" />
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="font-medium text-[14px] text-[#ef4444]">
                    {item.name}
                  </p>
                  <p className=" text-[12px]">{item.price}</p>
                </div>
                <p className="text-[12px]">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
