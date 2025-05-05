import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
export type foodType = {
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  category: string;
  _id: string;
};
type FoodsProps = {
  item: foodType;
};
export const Foodcards = ({ item }: FoodsProps) => {
  const [cart, setCart] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setCart(storedData);
    }
  }, []);
  const handleCart = () => {
    localStorage.setItem("myData ", "Hello, localStorage");
    setCart("Hello, localStorage");
  };
  return (
    <div
      key={item._id}
      className="w-[397px] bg-white flex flex-col gap-5 px-4 py-4 rounded-[20px]"
    >
      <div className="relative">
        <img src={item.image} className="relative" />
        <Button
          onClick={handleCart}
          size="icon"
          className="rounded-full absolute top-[146px] left-[301px] z-10 bg-white"
        >
          <Plus className="text-[#ef4444]" />
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="font-semibold text-6 text-[#ef4444]">{item.foodName}</p>
          <p className="font-semibold text-[18px]">{item.price}</p>
        </div>
        <p>{item.ingredients}</p>
      </div>
    </div>
  );
};
