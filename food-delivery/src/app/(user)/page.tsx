"use client";
import { Menu } from "./components/Menu";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [foods, setFoods] = useState(null);

  const getFoods = async () => {
    try {
      const response = await axios.get("http://localhost:3001/food");
      setFoods(response.data);
      console.log("asdasdasd", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoods();
  }, []);
  console.log("hiihihihih");

  return (
    <div className="flex flex-col items-center bg-[#232323]">
      <div className="w-[1440px] bg-[#404040] flex flex-col items-center">
        <Header />
        <img src="/Hero.png"></img>
        <Categories />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}
