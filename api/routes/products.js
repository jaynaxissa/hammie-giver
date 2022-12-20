import express from "express";
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} from "../controllers/productController.js";

const router = express.Router();

// CREATE
router.post("/", createProduct);

// UPDATE
router.put("/:id", updateProduct);

// DELETE
router.delete("/:id", deleteProduct);

// GET
router.get("/find/:id", getProduct);

// GET ALL currently trying this out
router.get("/allproducts", getAllProducts);
export default router;
