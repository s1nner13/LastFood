import { ChevronRight, MapPin, ShoppingCart, User2 } from "lucide-react";
import { Logo } from "./Logo-container";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cart } from "./LogedInCart";
import { Order } from "./LogedInOrder";
import axios from "axios";
export const LogedIn = () => {
  const [address, setAddress] = useState("");

  const postAddress = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/user/post-user",
        { address }
      );
      // if (response.status === 200 || response.status === 201) {
      //   setCategorySuccess(true);
      // }
      setAddress("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-[1440px] h-[68px] bg-[#18181b] px-22 py-3 flex gap-[735px]">
      <Logo />
      <div className="w-[349px] h-[36px] flex gap-3">
        <div className="w-[251px] h-[36px] bg-white flex gap-1 px-3 py-2 rounded-[9999px]">
          <MapPin className="text-[#ef4444] w-5 h-5" />
          <p className="text-[#ef4444] text-[12px]">Delivery address:</p>
          <Dialog>
            <DialogTrigger className="text-[12px] text-[#71717a] flex cursor-pointer">
              Add Location <ChevronRight className="w-5 h-5 opacity-[50%]" />
            </DialogTrigger>
            <DialogContent className="w-[480px] h-[308px] px-6 py-6 rounded-[12px]">
              <DialogHeader>
                <DialogTitle>Delivery address</DialogTitle>
                <textarea className="w-[432px] h-[112px] border border-b-blue-100 rounded-[12px] mt-6" />
                <div className="w-[432px] h-[64px] flex gap-4 pt-6 justify-end">
                  <DialogClose>
                    <Button
                      variant="outline"
                      className="w-[79px] h-[40px] px-4 py-2"
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button className="w-[115px] h-[40px] text-white">
                    Deliver Here
                  </Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <Sheet>
          <SheetTrigger>
            <button className="w-9 h-9 flex justify-center items-center bg-white rounded-[9999px]">
              <ShoppingCart className="w-4 h-4 " />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <div className="flex gap-6 px-8 py-8 flex-col">
                <SheetTitle className="flex gap-3 text-white">
                  <ShoppingCart className="text-white" />
                  Order detail
                </SheetTitle>
                <div>
                  <Tabs
                    defaultValue="cart"
                    className="w-[471px] h-[44px] flex gap-2 px-1 py-1 rounded-[9999px] bg-white"
                  >
                    <TabsList>
                      <TabsTrigger
                        value="cart"
                        className="w-[227.5px] rounded-[9999px] "
                      >
                        Cart
                      </TabsTrigger>
                      <TabsTrigger
                        value="order"
                        className="w-[227.5px] rounded-[9999px]"
                      >
                        Order
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="cart">
                      <Cart />
                    </TabsContent>
                    <TabsContent value="order">
                      <Order />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <button className="w-9 h-9 flex justify-center items-center bg-[#ef4444] rounded-[9999px]">
          <User2 className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};
