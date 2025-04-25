"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import * as React from "react";
import { addDays, format } from "date-fns";
import { ArrowUpDown, CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Tables } from "./OrdersTable";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const Orders = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className="w-[1171px] h-[948px] flex flex-col gap-6  ">
      <div className="flex justify-end">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full shadow-md rounded-[8px]">
        <div className="w-full h-[76px]  gap-auto px-4 py-4 bg-white flex justify-between">
          <div className="w-[486px] h-11 ">
            <p className="font-bold text-5">Orders</p>
            <p>32 items</p>
          </div>
          <div className="flex gap-3">
            <div className={cn("grid gap-2")}>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
            <button className="w-[179px] h-[36px] px-4 py-2 bg-[#18181b] opacity-[20%] text-[14px] text-white rounded-[9999px] hover:bg-black hover:opacity-[100%]">
              Change delivery state
            </button>
          </div>
        </div>
        <div className="w-full h-[52px] bg-[#f4f4f5] flex ">
          <div className="w-[48px] h-[52px] flex gap-[10px] px-4 py-4 items-center">
            <Checkbox className="bg-white"></Checkbox>
          </div>
          <div className="w-[56px] h-[52px] py-4 px-4 text-[14px] items-center flex">
            №
          </div>
          <div className="w-[214px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            Customer
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            Food
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            Date
            <Button variant={"ghost"} className="w-4 h-4">
              <ArrowUpDown />
            </Button>
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            Total
          </div>
          <div className="w-[214px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            Delivery Address
          </div>
          <div className="w-[160px] h-full px-4 flex gap-[10px] items-center text-[14px]">
            Delivery state
            <Button variant={"ghost"} className="w-4 h-4">
              <ArrowUpDown />
            </Button>
          </div>
        </div>
        <Tables />
      </div>
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">5</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
