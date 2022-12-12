import React, { Component } from "react";
import "./banner.css";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <Carousel>
      <div>
        <img src="images/banner-img-1.jpg" />
      </div>
      <div>
        <img src="images/banner-img-2.jpg" />
      </div>
      <div>
        <img src="images/banner-img-3.jpg" />
      </div>
      <div>
        <img src="images/banner-img-4.jpg" />
      </div>
      <div>
        <img src="images/banner-img-5.jpg" />
      </div>
    </Carousel>
  );
}
export default Banner;
