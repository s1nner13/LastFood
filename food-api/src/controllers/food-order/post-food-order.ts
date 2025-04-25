import { RequestHandler } from "express";
import { orderModel } from "../../models/order.model";

export const postFoodOrder: RequestHandler = async (req, res) => {
  try {
    const { user, totalPrice, foodOrderItems, status } = req.body;
    await orderModel.create({
      user,
      totalPrice,
      foodOrderItems,
      status,

      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.status(200).json({
      message: "Order Nemegdlee",
    });
  } catch (error) {
    res.status(500).json({
      message: "ALDAA",
    });
  }
};
