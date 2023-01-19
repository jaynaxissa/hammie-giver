import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} from "../controllers/productController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createProduct);

// UPDATE
router.put("/:id", verifyAdmin, updateProduct);

// DELETE
router.delete("/:id", verifyAdmin, deleteProduct);

// GET
router.get("/find/:id", getProduct);

// GET ALL currently trying this out
router.get("/allproducts", getAllProducts);
export default router;
