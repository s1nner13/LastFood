"use client";
import { Foodmenu } from "./foodMenu/components/Foodmenu";
import { Orders } from "./Order/components/OrdersContainer";

export default function Home() {
  return (
    <div className="mt-[110px] ml-[24px] mr-[40px] h-[1024px] overflow-y-scroll">
      <Foodmenu />
    </div>
  );
}
