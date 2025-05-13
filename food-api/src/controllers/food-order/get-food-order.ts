import { orderModel } from "../../models/order.model";

export const getFoodOrder = async (req, res) => {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ message: "Missing userId in query" });
    }

    const orders = await orderModel
      .find({ user: userId })
      .populate("foodOrderItems.food");

    return res.status(200).json({ orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
