import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { api } from "../../../../../axios";

type EditDishProps = {
  foodId: string;
  onClose: () => void;
};
export const Deletedish = ({ foodId, onClose }: EditDishProps) => {
  const Deletefood = async () => {
    try {
      await api.delete(`/food/delete?foodId=${foodId}`);
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
