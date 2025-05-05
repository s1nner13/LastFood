import { Minus, Plus, X } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { Button } from "@/components/ui/button";

export const Cart = () => {
  return (
    <>
      <div className="w-[471px] h-[540px] flex flex-col gap-4 px-4 py-4 rounded-[20px] bg-white mt-6">
        <div className="w-[439px] h-[392px] flex flex-col gap-5">
          <h4 className="font-semibold text-[20px]">My cart</h4>
          <div className="w-full h-[120px] flex gap-[10px] ">
            <img
              className="w-[124px] h-full rounded-[12px]"
              src="./Appetizer.png"
            ></img>
            <div className="w-[305px] h-full flex flex-col gap-6">
              <div className="flex gap-[10px]">
                <div className="flex flex-col w-[259px]">
                  <p className="font-bold text-4 text-[#ef4444]">
                    Sunshine Stackers
                  </p>
                  <p className="text-[12px]">
                    Fluffy pancakes stacked with fruits, cream, syrup, and
                    powdered sugar.
                  </p>
                </div>
                <button className="w-[36px] h-[36px] rounded-[9999px] border border-[#ef4444] flex justify-center items-center">
                  <X className="w-4 h-4 text-[#ef4444]" />
                </button>
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="w-[105px] h-[36px] flex gap-3 items-center">
                  <button className="w-9 h-9 flex justify-center items-center">
                    <Minus className="w-4 h-4" />
                  </button>
                  <p className="font-semibold text-[18px]">1</p>
                  <button className="w-9 h-9 flex justify-center items-center">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="font-bold text-4">$12.99</p>
              </div>
            </div>
          </div>
          <Separator />
          <Button className="bg-white font-medium text-[14px] text-[#ef4444] rounded-[9999px] border border-[#ef4444]">
            Add food
          </Button>
        </div>
      </div>
      <div className="w-[471px] h-[276px] flex flex-col gap-5 px-4 py-4 bg-white rounded-[20px] mt-6">
        <p className="font-semibold text-5">Payment info</p>
        <div className="w-[439px] h-[64px] flex flex-col gap-2">
          <div className="w-full h-[28px] flex justify-between">
            <p className="text-4 text-[#71717a]">Items</p>
            <p className="font-bold text-4">$25.98</p>
          </div>
          <div className="w-full h-[28px] flex justify-between">
            <p className="text-4 text-[#71717a]">Shipping</p>
            <p className="font-bold text-4">$0.98</p>
          </div>
        </div>
        <Separator />
        <div className="w-full h-[28px] flex justify-between">
          <p className="text-4 text-[#71717a]">Total</p>
          <p className="font-bold text-4">$26.97</p>
        </div>
        <Button className="bg-[#ef4444] font-medium text-[14px] text-white rounded-[9999px] ]">
          Checkout
        </Button>
      </div>
    </>
  );
};
