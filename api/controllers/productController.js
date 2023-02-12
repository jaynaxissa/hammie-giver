import mongoose from "mongoose";
import Product from "../models/Product.js";

export const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);

  console.log(newProduct);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    next(err);
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

export const uploadAnImage = async (req, res, next) => {
  const id = req.params.id;

  const path = req.file.path.replace(/\\/g, "/");
  console.log("uploadAnImage " + path);
  res.status(200).json({ imgPath: path });
};

// -------------------------------------------------

// const MongoClient = require("mongodb").MongoClient;
// const myurl = "mongodb://localhost:27017";
// MongoClient.connect(myurl, (err, client) => {
//   if (err) return console.log(err);
//   db = client.db("test");
//   app.listen(3000, () => {
//     console.log("Mongo Database connected successfully");
//     console.log("Server started on port 3000");
//   });
// });

// export const uploadPhoto = async (req, res, next) => {
//   try {
//     var img = fs.readFileSync(req.file.path);
//     var encode_image = img.toString("base64");
//     var finalImg = {
//       contentType: req.file.mimetype,
//       image: Buffer.from(encode_image, "base64"),
//     };
//     db.collection("myCollection").insertOne(finalImg, (err, result) => {
//       console.log(result);
//       if (err) return console.log(err);
//       console.log("saved to database");
//       res.redirect("/");
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// const ObjectId = require("mongodb").ObjectId;
// export const getPhoto = async (req, res, next) => {
//   try {
//     var filename = req.params.id;
//     db.collection("myCollection").findOne(
//       { _id: ObjectId(filename) },
//       (err, result) => {
//         if (err) return console.log(err);
//         res.contentType("image/jpeg");
//         res.send(result.image.buffer);
//       }
//     );
//   } catch (err) {
//     next(err);
//   }
// };
