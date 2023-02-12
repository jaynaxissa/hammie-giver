import express from "express";
import upload from "../upload/upload.js";

import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
  uploadAnImage,
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

// ----------------------------

//router.patch("/:id", uploadAnImage);
router.patch("/:id", upload, uploadAnImage);

// SET STORAGE
// const multer = require("multer");
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });
// var upload = multer({ storage: storage });

// UPLOAD IMAGE
// router.post("/uploadphoto/:id", upload.single("myImage"), uploadPhoto);

// GET IMAGE
// router.get("/photo/:id", getPhoto);

export default router;
