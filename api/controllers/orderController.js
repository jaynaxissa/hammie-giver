import Order from "../models/Order.js";

export const createOrder = async (req, res, next) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    next(err);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    next(err);
  }
};
export const deleteOrder = async (req, res, next) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getOrder = async (req, res, next) => {
  try {
    const Order = await Order.findById(req.params.id);
    res.status(200).json(Order);
  } catch (err) {
    next(err);
  }
};
export const getAllOrders = async (req, res, next) => {
  try {
    const Orders = await Order.find();
    res.status(200).json(Orders);
  } catch (err) {
    next(err);
  }
};
