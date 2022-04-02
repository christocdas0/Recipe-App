import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function CheifCard({ item }) {
  const { recipesCount, name, cuisine, img } = item;
  return (
    <div className="cheif-card">
      <img src={img} alt="" />
      <div className="cheif-card-info">
        <h3 className="cheif-card-name">{name}</h3>
        <p className="cheif-recipe-count">
          Recipes : <b>{recipesCount}</b>
        </p>
        <p className="cheif-cuisine">
          Cusine : <b>{cuisine}</b>
        </p>
        <p className="cheif-icons">
          <FontAwesomeIcon icon={faFacebook} />

          <FontAwesomeIcon icon={faTwitter} />

          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
}
