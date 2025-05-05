import { Badge } from "@/components/ui/badge";
import { SelectSeparator } from "@/components/ui/select";
import { MapIcon, SoupIcon, TimerIcon } from "lucide-react";

export const Order = () => {
  return (
    <div className="w-[471px] h-[840px] flex flex-col gap-4 px-4 py-4 rounded-[20px] bg-white mt-6">
      <div className="w-[439px] h-[346px] flex flex-col gap-5">
        <p className="font-semibold text-[20px]">Order history</p>
        <div className="w-[439px] h-[138px] flex flex-col gap-3 px-3">
          <div className="w-[415px] h-[28px] flex justify-between">
            <div className="font-bold text-[16px]">$26.97</div>
            <Badge
              variant="outline"
              className="w-[68px] full rounded-[9999px] flex justify-center items-center"
            >
              Pending
            </Badge>
          </div>
          <div className="w-[415px] h-[42px] flex flex-col gap-[10px] ">
            <div className="w-full h-[16px] flex justify-between items-center">
              <div className="flex gap-2">
                <SoupIcon className="text-[#09090b] opacity-[50%]" />
                <p className="text-[#09090b] opacity-[50%]">
                  Sunshine Stackers
                </p>
              </div>
              <p className="text-[12px]">x 1</p>
            </div>
            <div className="flex gap-2">
              <TimerIcon className="text-[#09090b] opacity-[50%]" />
              <p className="text-[#09090b] opacity-[50%]">2024/12/20</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MapIcon className="text-[#09090b] opacity-[50%]" />
            <p className="text-[#09090b] opacity-[50%]">hayag</p>
          </div>
        </div>
        <SelectSeparator />
        <div className="w-[439px] h-[138px] flex flex-col gap-3 px-3">
          <div className="w-[415px] h-[28px] flex justify-between">
            <div className="font-bold text-[16px]">$26.97</div>
            <Badge
              variant="outline"
              className="w-[68px] full rounded-[9999px] flex justify-center items-center"
            >
              Pending
            </Badge>
          </div>
          <div className="w-[415px] h-[42px] flex flex-col gap-[10px] ">
            <div className="w-full h-[16px] flex justify-between items-center">
              <div className="flex gap-2">
                <SoupIcon className="text-[#09090b] opacity-[50%]" />
                <p className="text-[#09090b] opacity-[50%]">
                  Sunshine Stackers
                </p>
              </div>
              <p className="text-[12px]">x 1</p>
            </div>
            <div className="flex gap-2">
              <TimerIcon className="text-[#09090b] opacity-[50%]" />
              <p className="text-[#09090b] opacity-[50%]">2024/12/20</p>
            </div>
          </div>
          <div className="flex gap-2">
            <MapIcon className="text-[#09090b] opacity-[50%]" />
            <p className="text-[#09090b] opacity-[50%]">hayag</p>
          </div>
        </div>
      </div>
    </div>
  );
};
