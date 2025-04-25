import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const Appetizer = () => {
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
  return (
    <div className="w-[1264px] flex flex-col gap-[54px]">
      <div className="font-semibold text-[24px] text-white ">Appetizers</div>
      <div className="flex flex-wrap gap-9">
        {items.map((item) => (
          <div
            key={item.id}
            className="w-[397px] h-[342px] bg-white flex flex-col gap-5 px-4 py-4 rounded-[20px]"
          >
            <div className="relative">
              <img src={item.image} className="relative" />
              <Button
                size="icon"
                className="rounded-full absolute top-[146px] left-[301px] z-10 bg-white"
              >
                <Plus className="text-[#ef4444]" />
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="font-semibold text-6 text-[#ef4444]">
                  {item.name}
                </p>
                <p className="font-semibold text-[18px]">{item.price}</p>
              </div>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
