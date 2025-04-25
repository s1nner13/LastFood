import { Appetizer } from "./Appetizer";
import { Breakfast } from "./Breakfast";
import { Lunch } from "./Lunch";
import { Salads } from "./Salads";

export const Menu = () => {
  return (
    <div className="w-[1264px] h-[2732px] flex flex-col gap-[54px]">
      <Appetizer />
      <Salads />
      <Lunch />
      <Breakfast />
    </div>
  );
};
