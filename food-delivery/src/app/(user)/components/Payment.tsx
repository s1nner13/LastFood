import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type PaymentProps = {
  calculateTotal: number;
};
export const Payment = ({ calculateTotal }: PaymentProps) => {
  const [shipping, setShipping] = useState(5000);

  const paymentTotal = calculateTotal + shipping;
  return (
    <div className="w-[471px] h-[276px] flex flex-col gap-5 px-4 py-4 bg-white rounded-[20px] mt-6">
      <p className="font-semibold text-5">Payment info</p>
      <div className="w-[439px] h-[64px] flex flex-col gap-2">
        <div className="w-full h-[28px] flex justify-between">
          <p className="text-4 text-[#71717a]">Items</p>
          <p className="font-bold text-4">{calculateTotal}</p>
        </div>
        <div className="w-full h-[28px] flex justify-between">
          <p className="text-4 text-[#71717a]">Shipping</p>
          <p className="font-bold text-4">{shipping}</p>
        </div>
      </div>
      <Separator />
      <div className="w-full h-[28px] flex justify-between">
        <p className="text-4 text-[#71717a]">Total</p>
        <p className="font-bold text-4">{paymentTotal}</p>
      </div>
      <Button className="bg-[#ef4444] font-medium text-[14px] text-white rounded-[9999px] ]">
        Checkout
      </Button>
    </div>
  );
};
