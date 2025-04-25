import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Tables = () => {
  const orders = [
    {
      id: 1,
      customer: "Test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "26.97",
      address:
        "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон 20",
      status: "pending",
    },
    {
      id: 1,
      customer: "Test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "26.97",
      address:
        "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон 20",
      status: "pending",
    },
    {
      id: 1,
      customer: "Test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "26.97",
      address:
        "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон 20",
      status: "pending",
    },
    {
      id: 1,
      customer: "Test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "26.97",
      address:
        "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон 20",
      status: "pending",
    },
    {
      id: 1,
      customer: "Test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "26.97",
      address:
        "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон 20",
      status: "pending",
    },
    {
      id: 1,
      customer: "Test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "26.97",
      address:
        "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон 20",
      status: "pending",
    },
    {
      id: 1,
      customer: "Test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "26.97",
      address:
        "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон 20",
      status: "pending",
    },
    {
      id: 1,
      customer: "Test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "26.97",
      address:
        "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон 20",
      status: "pending",
    },
    {
      id: 1,
      customer: "Test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "26.97",
      address:
        "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон 20",
      status: "pending",
    },
    {
      id: 1,
      customer: "Test@gmail.com",
      food: "2 foods",
      date: "2024/12/20",
      total: "26.97",
      address:
        "2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоонСБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdsen emneleg | 100 айлын гүүрэн гарцны хойд талд 4д ногоон 20",
      status: "pending",
    },
  ];
  return (
    <div>
      {orders.map((order, index) => (
        <div key={index} className="w-full h-[52px] bg-[#f4f4f5] flex ">
          <div className="w-[48px] h-[52px] flex gap-[10px] px-4 py-4 items-center">
            <Checkbox className="bg-white"></Checkbox>
          </div>
          <div className="w-[56px] h-[52px] py-4 px-4 text-[14px] items-center flex">
            {order.id}
          </div>
          <div className="w-[214px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            {order.customer}
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[50px] items-center text-[14px]">
            {order.food}
            <Popover>
              <PopoverTrigger>
                <ChevronDown />
              </PopoverTrigger>
              <PopoverContent>
                Place content for the popover here.
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            {order.date}
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            {order.total}
          </div>
          <div className="w-[214px] h-full px-4 flex gap-[10px] items-center text-[14px]  overflow-scroll">
            {order.address}
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[10px] items-center text-[14px] ">
            <Badge className=" border border-[#ef4444] bg-white text-black px-[10px] h-[32px] rounded-[9999px] ">
              {order.status}
              <Button variant={"ghost"} className="w-4 h-4">
                <ArrowUpDown />
              </Button>
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
};
