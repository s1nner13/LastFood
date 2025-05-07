"use client";

import { MapedCart } from "./MapedCart";
import { useEffect, useState } from "react";
import { Payment } from "./Payment";

type CartItem = {
  foodName: string;
  ingredients: string;
  image: string;
  quantity: number;
  price: string;
};
export const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleRemove = (foodName: string) => {
    const updatedCart = cart.filter((item) => item.foodName !== foodName);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const calculateTotalAmount = cart.reduce((total, item) => {
    return total + parseFloat(item.price) * item.quantity;
  }, 0);

  const handleQuantityChange = (foodName: string, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.foodName === foodName ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <>
      <div className="w-[471px] h-[540px] flex flex-col gap-4 px-4 py-4 rounded-[20px] bg-white mt-6">
        <h4 className="font-semibold text-[20px]">My cart</h4>
        <div className="w-[439px] h-[392px] flex flex-col gap-5 overflow-scroll">
          {cart.map((item) => (
            <MapedCart
              item={item}
              onRemove={handleRemove}
              onQuantity={handleQuantityChange}
            />
          ))}
        </div>
      </div>
      <Payment calculateTotal={calculateTotalAmount} />
    </>
  );
};
