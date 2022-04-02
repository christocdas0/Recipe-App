import React from "react";
import Customimg from "./Customimg";

export default function RecipeCard({ item }) {
    const { title, image, authorImg,dec } = item;
  return (
    <div className="recipe-card">
      <Customimg imgSrc={image} pt="65%" />
      <div className="recipe-card-info">
        <img className="author-img" src={authorImg} alt="" />
        <p className="recipe-title">{title}</p>
        <p className="recipe-dec">
         {dec}
        </p>

        <a className="view-btn" href="#!">
          View Recipe
        </a>
      </div>
    </div>
  );
}
