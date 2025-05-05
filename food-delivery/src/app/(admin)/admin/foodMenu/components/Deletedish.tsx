import { Button } from "@/components/ui/button";
import { Trash, X } from "lucide-react";
import axios from "axios";

type EditDishProps = {
  foodId: string;
  onClose: () => void;
};
export const Deletedish = ({ foodId, onClose }: EditDishProps) => {
  const Deletefood = async () => {
    try {
      await axios.delete(`http://localhost:3001/food/delete?foodId=${foodId}`);
      await onClose();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Button className="bg-white border border-red-500" onClick={Deletefood}>
        <Trash className="text-red-500" />
      </Button>
    </div>
  );
};
