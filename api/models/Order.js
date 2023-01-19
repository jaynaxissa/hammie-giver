import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },

  customer: {
    type: String,
    required: true,
  },

  date: {
    type: String,
  },

  photos: {
    type: [String],
  },

  amount: {
    type: Number,
    required: true,
  },

  paymentMethod: {
    type: String,
    required: true,
  },

  status: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Order", OrderSchema);
