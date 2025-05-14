import { Foodmenu } from "./components/Foodmenu";

export default function Home() {
  return (
    <div className="mt-[110px] ml-[24px] mr-[40px] flex flex-col gap-6 h-[1024px] overflow-y-scroll">
      <Foodmenu />
    </div>
  );
}
