import React from "react";
import { Link } from "react-router-dom";

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

  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className={labelType} data-category={props.item.supportType}>
            <img
              className="cards__item__img"
              alt="Travel Pic"
              src={props.item.photos[0]}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.item.name}</h5>
            <div className="cards__item__detail">
              <p className="cards__item__desc">{props.item.desc1}</p>
              <p className="cards__item__desc">{props.item.desc2}</p>
              <p className="cards__item__desc">{props.item.desc3}</p>
              <p className="cards__item__desc">{props.item.desc4}</p>
            </div>
          </div>

          <div>
            <p className="cards__item__location">{props.item.location}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
