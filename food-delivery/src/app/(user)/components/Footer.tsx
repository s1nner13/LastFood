"use client";

import { Logosmall } from "./Logosmall";
import { motion } from "motion/react";
export const Footer = () => {
  return (
    <div className="w-[1440px] h-[700px] bg-[#18181b] py-[60px] flex flex-col items-center gap-[76px]">
      <div className="w-[1440px] h-[92px] bg-[#ef4444] overflow-hidden px-[98px] py-[28px] flex items-center">
        <motion.div
          className="flex gap-[34px] min-w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 10,
            ease: "linear",
          }}
        >
          {Array(10)
            .fill("Fresh fast delivered")
            .map((text, index) => (
              <p
                key={index}
                className="font-semibold text-[30px] text-white whitespace-nowrap"
              >
                {text}
              </p>
            ))}
        </motion.div>
      </div>
      <div className="w-[1264px] h-[228px] flex gap-[220px]">
        <Logosmall />
        <div className="w-[788px] h-[228px] flex gap-[112px]">
          <div className="w-[122px] h-[148px] flex flex-col gap-[16px]">
            <p className="font-bold text-[16px] text-[#71717a]">NOMNOM </p>
            <p className="text-[16px] text-white">Home </p>
            <p className="text-[16px] text-white">Contact us</p>
            <p className="text-[16px] text-white">Delivery zone</p>
          </div>
          <div className="flex gap-[56px]">
            <div className="flex flex-col gap-[16px]">
              <p className="font-bold text-[16px] text-[#71717a]">MENU </p>
              <p className="text-[16px] text-white">Appetizers </p>
              <p className="text-[16px] text-white">Salads</p>
              <p className="text-[16px] text-white">Pizzas</p>
              <p className="text-[16px] text-white">Main dishes</p>
              <p className="text-[16px] text-white">Desserts</p>
            </div>
            <div className="flex flex-col gap-[16px] mt-11">
              <p className="text-[16px] text-white">Side dish </p>
              <p className="text-[16px] text-white">Brunch</p>
              <p className="text-[16px] text-white">Desserts</p>
              <p className="text-[16px] text-white">Beverages</p>
              <p className="text-[16px] text-white">Fish & Sea foods</p>
            </div>
          </div>
          <div className="w-[122px] h-[81px] flex flex-col gap-4">
            <p className="font-bold text-[16px] text-[#71717a]">FOLLOW US</p>
            <div className="flex gap-4">
              <img src="/facebook.png"></img>
              <img src="/Instagram.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1264px] h-[84px] flex gap-12 py-8 border-t-2 border-[#f4f4f5] items-center ">
        <p className="text-[#71717a]">Copy right 2024 © Nomnom LLC</p>
        <p className="text-[#71717a]">Privacy policy</p>
        <p className="text-[#71717a]">Terms and conditoin</p>
        <p className="text-[#71717a]">Cookie policy</p>
      </div>
    </div>
  );
};
