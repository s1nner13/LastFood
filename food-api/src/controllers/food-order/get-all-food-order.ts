import { orderModel } from "../../models/order.model";

export const Allorder = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("foodOrderItems.food")
      .populate("user", "name email");

    return res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching all orders:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
