import { orderModel } from "../../models/order.model";

export const StateFood = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    if (!orderId || !status) {
      return res
        .status(400)
        .json({ message: "orderId болон status шаардлагатай" });
    }

    const updatedOrder = await orderModel.findByIdAndUpdate(
      orderId,
      { status, updatedAt: new Date() },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Захиалга олдсонгүй" });
    }

    return res
      .status(200)
      .json({ message: "Статус шинэчлэгдлээ", order: updatedOrder });
  } catch (error) {
    console.error("Захиалгын статус шинэчлэхэд алдаа:", error);
    return res.status(500).json({ message: "Дотоод серверийн алдаа" });
  }
};
