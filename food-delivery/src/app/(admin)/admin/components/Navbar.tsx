"use client";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Settings, TruckIcon } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const menuButtons = [
  { label: "Food menu", icon: LayoutDashboard, path: "/admin/foodMenu" },
  { label: "Orders", icon: TruckIcon, path: "/admin/Order" },
  { label: "Settings", icon: Settings, path: "/admin/settings" },
];
export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [activeButton, setActiveButton] = useState<number | null>(null);

  useEffect(() => {
    const index = menuButtons.findIndex((item) => item.path === pathname);
    setActiveButton(index);
  }, [pathname]);
  const handleClick = (index: number, path: string) => {
    if (activeButton === index) {
      setActiveButton(null);
    } else {
      setActiveButton(index);
    }
    router.push(path);
  };
  return (
    <div className="w-[205px] h-full bg-white flex flex-col gap-10 px-5 py-9">
      <div className="w-[146px] h-11 flex gap-3">
        <Image
          src="/nomnomLogo.png"
          alt="NomNom logo"
          width={44}
          height={37}
        ></Image>
        <div className="w-22 h-11">
          <p className="font-semibold text-5 text-black">NomNom</p>
          <p className="text-[12px] text-[#71717a]">Swift delivery</p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {menuButtons.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeButton === index;

          return (
            <Button
              key={index}
              onClick={() => handleClick(index, item.path)}
              className={`w-full h-10 flex gap-[10px] px-6 py-2 items-center transition-all duration-150 ${
                isActive
                  ? "bg-black rounded-[9999px] text-white"
                  : "bg-white text-black"
              }`}
            >
              <Icon />
              <p className="font-medium text-[14px]">{item.label}</p>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
