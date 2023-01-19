import express from "express";
import {
  createOrder,
  updateOrder,
  deleteOrder,
  getOrder,
  getAllOrders,
} from "../controllers/OrderController.js";

const router = express.Router();

// CREATE
router.post("/", createOrder);

// UPDATE
router.put("/:id", updateOrder);

// DELETE
router.delete("/:id", deleteOrder);

// GET
router.get("/find/:id", getOrder);

// GET ALL currently trying this out
router.get("/allOrders", getAllOrders);
export default router;
