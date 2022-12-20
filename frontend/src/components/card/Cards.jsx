import React from "react";
import "./cards.css";
import CardItem from "../cardItem/CardItem";
import useFetch from "../../hooks/useFetch";

const Cards = () => {
  const { data, loading, error } = useFetch("/products/allproducts");

  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          {data.map((item) => (
            <CardItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
