import { RequestHandler } from "express";
import { orderModel } from "../../models/order.model";

export const patchFoodOrder: RequestHandler = async (req, res) => {
  try {
    const { user, totalPrice, foodOrderItems, status } = req.body;
    await orderModel.updateOne({
      user,
      totalPrice,
      foodOrderItems,
      status,

      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(200).json({
      message: "Order shinechlegdlee",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
