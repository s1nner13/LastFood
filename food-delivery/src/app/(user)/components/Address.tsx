import { ChevronRight, MapPin } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export const Address = () => {
  const [address, setAddress] = useState("");
  const postAddress = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3001/user/patch-user`,
        { address: address }
      );
      setAddress("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-[432px] h-[112px] border border-b-blue-100 rounded-[12px] mt-6"
            />
            <div className="w-[432px] h-[64px] flex gap-4 pt-6 justify-end">
              <DialogClose>
                <Button
                  variant="outline"
                  className="w-[79px] h-[40px] px-4 py-2"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                onClick={postAddress}
                className="w-[115px] h-[40px] text-white"
              >
                Deliver Here
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
