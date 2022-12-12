import React from "react";
import "./cards.css";
import CardItem from "../cardItem/CardItem";

function Cards() {
  return (
    <div className="cards">
      {/* <h1>Check out the Most Beautiful Places in the World!</h1> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/card-img-1.jpg"
              text="Adang Island Resort"
              desc1="• 3D2N Package For 2-4 persons"
              desc2="• Free Breakfast"
              desc3="• Free In-House Activities"
              desc4="• And More Special Offer"
              label="Support Education"
              location="Satun"
              // path="/services"
            />
            <CardItem
              src="images/card-img-2.jpg"
              text="Koh Manok Private Island"
              desc1="•3D2N package For 2-4 persons"
              desc2="•Free Breakfast"
              desc3="•Boat Round Trip"
              label="Support Environment"
              location="Rayong"
              // path="/services"
            />
            <CardItem
              src="images/card-img-3.jpg"
              text="Beyond Resort Krabi"
              desc1="•Stay In Deluxe Sea View Room"
              desc2="•3D2N For 2 persons"
              desc3="•And More Special Offer"
              label="Support Environment"
              location="Krabi"
              // path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/card-img-4.jpg"
              text="Hideout Koh Kood"
              desc1="•3D2N package For 2 persons"
              desc2="•Free Breakfast"
              desc3="•Round Trip Ferry For 2"
              label="Support Environment"
              path="/products"
              location="Trat"
            />
            <CardItem
              src="images/card-img-5.jpg"
              text="Klean Kanteen"
              desc1="•Eco-Friendly Bottle"
              desc2="•Keep Hot Water Up To 11 hours"
              desc3="•And More Special Offer"
              label="Support Disaster Relief"
              location="Phuket"
              // path="/sign-up"
            />
            <CardItem
              src="images/card-img-6.jpg"
              text="Khao"
              desc1="•500THB Cash Voucher"
              desc2="•MICHELIN Star Thai Restaurant"
              desc3="•A La Carte/Chef's table"
              label="Support Health"
              location="Chiang Mai"
              // path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
