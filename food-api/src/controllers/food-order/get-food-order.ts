import { orderModel } from "../../models/order.model";

export const getFoodOrder = async (req, res) => {
  const order = await orderModel.find({});

  return res.status(200).json({
    order,
  });
};
