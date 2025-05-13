import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapIcon, SoupIcon, TimerIcon } from "lucide-react";

type FoodOrderItem = {
  foodName: string;
  quantity: number;
};

type Order = {
  totalPrice: number;
  createdAt: string;
  foodOrderItems: FoodOrderItem[];
};

type OrderProps = {
  item: Order;
};
export const MapedOrder = ({ item }: OrderProps) => {
  const trueDate = new Date(item.createdAt).toLocaleDateString();
  return (
    <>
      <div className="w-[439px] h-[138px] flex flex-col gap-3 px-3 ">
        <div className="w-[415px] h-[28px] flex justify-between">
          <div className="font-bold text-[16px]">{item.totalPrice}₮</div>
          <Badge
            variant="outline"
            className="w-[68px] full rounded-[9999px] flex justify-center items-center"
          >
            Pending
          </Badge>
        </div>
        <div className="w-[415px]  flex flex-col gap-[10px] ">
          {item.foodOrderItems.map((itm, indx) => {
            return (
              <div
                key={indx}
                className="w-full h-[16px] flex justify-between items-center"
              >
                <div className="flex gap-2">
                  <SoupIcon className="text-[#09090b] opacity-[50%]" />
                  <p className="text-[#09090b] opacity-[50%]">{itm.foodName}</p>
                </div>
                <p className="text-[12px]">x{itm.quantity}</p>
              </div>
            );
          })}

          <div className="flex gap-2">
            <TimerIcon className="text-[#09090b] opacity-[50%]" />
            <p className="text-[#09090b] opacity-[50%]">{trueDate}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <MapIcon className="text-[#09090b] opacity-[50%]" />
          <p className="text-[#09090b] opacity-[50%]">hayag</p>
        </div>
      </div>
      <Separator />
    </>
  );
};
