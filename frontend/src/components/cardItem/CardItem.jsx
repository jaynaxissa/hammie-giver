import React from "react";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddIcon from "@mui/icons-material/Add";

function CardItem(props) {
  // To modity the label colour we declare new variable labelType = "what the label colour className is"
  let labelType = "cards__item__pic-wrap";
  // add condition to the label so if props.label is equal to a specific string then it would add labelType to the existing className
  if (props.item.supportType === "Support Health") {
    labelType += " pink-label"; /* this continue later in cards.css */
  } else if (props.item.supportType === "Support Education") {
    labelType += " gold-label";
  } else if (props.item.supportType === "Support Disaster Relief") {
    labelType += " red-label";
  }

  console.log(props.item);
  console.log(props.item.photos[0]);

  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link" to={props.path}>
          <figure className={labelType} data-category={props.item.supportType}>
            <img
              className="cards__item__img"
              alt="Travel Pic"
              src={"http://localhost:8800/" + props.item.photos[0]}
            />
          </figure>

          <Link to="test">
            <div className="order-button">
              <AddIcon className="addSign" />
              <div style={{ userSelect: "none", fontWeight: 700 }}>
                {" "}
                Add to cart
              </div>
            </div>
          </Link>
          <div className="givecard">
            <div className="givecard-left">
              <div className="cards__item__info">
                <h4 className="cards__item__text">{props.item.name}</h4>
                <div className="cards__item__detail">
                  <p className="cards__item__desc">{props.item.desc1}</p>
                  <p className="cards__item__desc">{props.item.desc2}</p>
                  <p className="cards__item__desc">{props.item.desc3}</p>
                  <p className="cards__item__desc">{props.item.desc4}</p>
                </div>
              </div>
              <div className="location">
                <LocationOnIcon className="locationIcon" />
                <div className="cards__item__location">
                  {props.item.location}
                </div>
              </div>
            </div>
            <div class="vertical-line"></div>

            <div className="givecard-right">
              <div className="gc-right-info">
                <div className="value-tag">
                  <h5 className="value-pt">Value</h5>
                  <p className="valuepricetag">฿{props.item.value}</p>
                </div>
                <div className="price-tag">
                  <h5 className="price-pt">Price</h5>
                  <p className="valuepricetag">฿{props.item.price}</p>
                </div>
                <div className="details-button">
                  <div className="details-bt">
                    <Link to="/details" className="seeDetailsButton">
                      see details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
