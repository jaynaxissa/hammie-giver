import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  console.log("hello?");
  if (
    file.mimetype.includes("jpeg") ||
    file.mimetype.includes("png") ||
    file.mimetype.includes("jpg")
  ) {
    console.log("hello...");
    cb(null, true);
  } else {
    console.log("oh noo..");
    cb(null, false);
  }
};

let upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload.single("ProductPicture");
