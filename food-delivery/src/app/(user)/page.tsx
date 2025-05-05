"use client";
import { Menu } from "./components/Menu";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { LogedIn } from "./components/LogedInHeader";

export type categoryType = {
  categoryName: string;
  _id: string;
};
export default function Home() {
  const [category, setCategory] = useState<categoryType[]>([]);

  const getCategory = async () => {
    try {
      const response = await axios.get("http://localhost:3001/category");
      setCategory(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="flex flex-col items-center bg-[#232323]">
      <div className="w-[1440px] bg-[#404040] flex flex-col items-center">
        <LogedIn />
        <img src="/Hero.png"></img>
        <Categories categories={category} />
        {category.map((item) => {
          return (
            <div key={item._id}>
              <Menu categoryId={item._id} categoryName={item.categoryName} />
            </div>
          );
        })}
        <Footer />
      </div>
    </div>
  );
}
