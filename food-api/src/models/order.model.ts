import { Schema, model } from "mongoose";
const orderItemSchema = new Schema({
  food: {
    type: Schema.Types.ObjectId,
    ref: "food",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  totalPrice: {
    type: Number,
    required: true,
  },
  foodOrderItems: {
    type: [orderItemSchema],
    default: [],
  },
  status: {
    type: String,
    enum: ["pending", "delivered", "cancelled"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

export const orderModel = model("order", orderSchema);
