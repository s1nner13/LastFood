import { ShoppingCart, User2 } from "lucide-react";
import { Logo } from "./Logo-container";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cart } from "./LogedInCart";
import { Order } from "./LogedInOrder";
import { useAuth } from "@/app/_providers/AuthProvider";
import { Address } from "./Address";
export const LogedIn = () => {
  const { signOut } = useAuth();

  return (
    <div className="w-[1440px] h-[68px] bg-[#18181b] px-22 py-3 flex gap-[735px]">
      <Logo />
      <div className="w-[349px] h-[36px] flex gap-3">
        <Address />
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
        <Popover>
          <PopoverTrigger>
            <button className="w-9 h-9 flex justify-center items-center bg-[#ef4444] rounded-[9999px]">
              <User2 className="w-4 h-4 text-white" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[110px] rounded-[9999px]">
            <button
              onClick={signOut}
              className="text-[16px] bg-[#ef4444] text-white rounded-[9999px] w-[75px] h-[36px]"
            >
              Sign out
            </button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
