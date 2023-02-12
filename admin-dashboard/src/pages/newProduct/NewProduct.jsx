import "./newProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { productInputs } from "../../formSource";
import axios from "axios";

const NewProduct = ({ title }) => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({
    name: "test", //default
    supportType: "Support Environment",
    location: "Bangkok",
    photos: "",
    desc1: "• 500 THB Cash Voucher",
    desc2: "• MICHELIN Star Thai Food",
    desc3: "• A La Carte/Chef's Table ",
    desc4: "",
    value: 500,
    price: 300,
    discountPercentage: 40,
  });

  const { data, loading, error } = useFetch("/products");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  console.log(files);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      var photoId = (Math.random() + 1).toString(36).substring(7);
      var imgPath = null;

      var fileData = files.length > 0 ? files[0] : null;
      if (
        (fileData && fileData.type === "image/png") ||
        fileData.type === "image/jpeg" ||
        fileData.type === "image/jpg"
      ) {
        const uploadPhotoData = new FormData();
        uploadPhotoData.append("ProductPicture", fileData);

        await axios
          .patch("http://localhost:8800/api/upload/" + photoId, uploadPhotoData)
          .then((result) => {
            imgPath = result.data.imgPath;
            console.log("uploaded file to... " + imgPath);
          });
      }

      if (imgPath) {
        const newProduct = {
          ...info,
          photos: [imgPath],
        };

        console.log("trying to create new... ");
        console.log(newProduct);

        await axios
          .post("http://localhost:8800/api/products", newProduct)
          .then((result) => {
            console.log(result);
            window.location.href = "/products";
          });
      }
    } catch (err) {}
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>Support Type</label>
                <select id="supportType" onChange={handleChange}>
                  <option>Support Environment</option>
                  <option>Support Education</option>
                  <option>Support Health</option>
                  <option>Support Disaster Relief</option>
                </select>
              </div>

              {productInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <button onClick={handleClick}>Create New Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
