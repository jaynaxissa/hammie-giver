import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import authRoute from "./routes/auth.js";
import productsRoute from "./routes/products.js";
import usersRoute from "./routes/users.js";
import ordersRoute from "./routes/order.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

// middlewares

app.use(cookieParser());
app.use(express.json());

//trying this to make the upload works-------------------------------------------------------
app.use(express.static("./public"));
app.use("/uploads", express.static("uploads"));
app.use("/images", express.static("./public/images"));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/api/upload", productsRoute); //not sure about this one?

const PORT = process.env.PORT || 8800;

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

//--------------------------------------------------------------------------------
//Routes
app.use("/api/auth", authRoute);
app.use("/api/products", productsRoute);
app.use("/api/users", usersRoute);
app.use("/api/orders", ordersRoute);

app.use((req, res, next) => {
  console.log("hi im middleware!");
  next();
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// app.listen(8800, () => {
//   connect();
//   console.log("Connected to Backend!");
// });
