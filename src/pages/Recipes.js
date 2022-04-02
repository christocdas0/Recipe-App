import React from "react";

import PreviousSearch from "../components/PreviousSearch";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const searches = [
    "pizza",
    "burger",
    "cookies",
    "juice",
    "biriyani",
    "salad",
    "ice cream",
    "lasagna",
    "pudding",
    "soup",
  ];
const recipes = [
  {
    title: "Chicken Pan Pizza",
    image: "/img/gallery/img_1.jpg",
    authorImg: "/img/top-chiefs/img_1.jpg",
  },
  {
    title: "Spaghetti and Meatballs",
    image: "/img/gallery/img_4.jpg",
    authorImg: "/img/top-chiefs/img_2.jpg",
  },
  {
    title: "American Cheese Burger",
    image: "/img/gallery/img_5.jpg",
    authorImg: "/img/top-chiefs/img_3.jpg",
  },
  {
    title: "Mutton Biriyani",
    image: "/img/gallery/img_6.jpg",
    authorImg: "/img/top-chiefs/img_5.jpg",
  },
  {
    title: "Japanese Sushi",
    image: "/img/gallery/img_10.jpg",
    authorImg: "/img/top-chiefs/img_6.jpg",
  },
  {
    title: "Chicken Pan Pizza",
    image: "/img/gallery/img_1.jpg",
    authorImg: "/img/top-chiefs/img_1.jpg",
  },
  {
    title: "Spaghetti and Meatballs",
    image: "/img/gallery/img_4.jpg",
    authorImg: "/img/top-chiefs/img_2.jpg",
  },
  {
    title: "American Cheese Burger",
    image: "/img/gallery/img_5.jpg",
    authorImg: "/img/top-chiefs/img_3.jpg",
  },
  {
    title: "Mutton Biriyani",
    image: "/img/gallery/img_6.jpg",
    authorImg: "/img/top-chiefs/img_5.jpg",
  },
  {
    title: "Japanese Sushi",
    image: "/img/gallery/img_10.jpg",
    authorImg: "/img/top-chiefs/img_6.jpg",
  },
  {
    title: "American Cheese Burger",
    image: "/img/gallery/img_5.jpg",
    authorImg: "/img/top-chiefs/img_3.jpg",
  },
  {
    title: "Mutton Biriyani",
    image: "/img/gallery/img_6.jpg",
    authorImg: "/img/top-chiefs/img_5.jpg",
  },
].sort(() => Math.random() -.5)

  return (
    <div>
      <PreviousSearch searches={searches} />
      <div className="recipe-contanier">
        {recipes.map((item, index) => (
          <RecipeCard key={index} item={item} />
        ))}

      
      </div>
    </div>
  );
}
