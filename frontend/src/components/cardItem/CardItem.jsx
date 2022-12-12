import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  // To modity the label colour we declare new variable labelType = "what the label colour className is"
  let labelType = "cards__item__pic-wrap";
  // add condition to the label so if props.label is equal to a specific string then it would add labelType to the existing className
  if (props.label === "Support Health") {
    labelType += " pink-label"; /* this continue later in cards.css */
  } else if (props.label === "Support Education") {
    labelType += " gold-label";
  } else if (props.label === "Support Disaster Relief") {
    labelType += " red-label";
  }

  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className={labelType} data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Pic"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
            <div className="cards__item__detail">
              <p className="cards__item__desc">{props.desc1}</p>
              <p className="cards__item__desc">{props.desc2}</p>
              <p className="cards__item__desc">{props.desc3}</p>
              <p className="cards__item__desc">{props.desc4}</p>
            </div>
          </div>

          <div>
            <p className="cards__item__location">{props.location}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
