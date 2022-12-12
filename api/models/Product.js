import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  supportType: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  photos: {
    type: [String],
  },

  desc1: {
    type: String,
    required: true,
  },

  desc2: {
    type: String,
    required: false,
  },

  desc3: {
    type: String,
    required: false,
  },

  desc4: {
    type: String,
    required: false,
  },

  //actual value of the product
  value: {
    type: Number,
    required: true,
  },

  //price the customer is paying for which will be cheaper than the value
  price: {
    type: Number,
    required: true,
  },

  //discount percentage logo to show clients how much they're saving from buying our voucher.
  discountPercentage: {
    type: Number,
    required: true,
  },

  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Product", ProductSchema);
