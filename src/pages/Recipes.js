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
    title: "Chicken Pizza",
    image:
      "https://images.unsplash.com/photo-1555072956-7758afb20e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMHBhbiUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    authorImg:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    dec: "The pan pizza crust, also known as the deep-dish pizza crust, is thicker and fluffier with more cheese. This is because the dough has little to no room to expand, so it only grows in width but not in height. When preparing the pan pizza, you'll be obliged to apply a thin layer of oil at the bottom of the pan.",
  },
  {
    title: "Spaghetti and Meatballs",
    image:
      "https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    authorImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    dec: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.",
  },
  {
    title: "American Cheese Burger",
    image:
      "https://images.unsplash.com/photo-1550950158-d0d960dff51b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    authorImg:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    dec: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.",
  },
  {
    title: " Biriyani",
    image:
      "https://img-global.cpcdn.com/recipes/c6ab1c63858c24b3/1200x630cq70/photo.jpg",
    authorImg:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    dec: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.",
  },
  {
    title: "Japanese Sushi",
    image:
      "https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorImg:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    dec: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.",
  },
  {
    title: "Chicken Pan Pizza",
    image:
      "https://images.unsplash.com/photo-1588580261949-f17eacb905c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    authorImg:
      "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    dec: "Do you cook chicken before putting on pizza? YES, definitely. The pizza won't cook long enough for raw chicken to cook all the way through on top of the pizza. For this reason, I start with cooked chicken that has been pulled or chopped",
  },
  {
    title: "Spaghetti and Meatballs",
    image:
      "https://images.unsplash.com/photo-1635264685671-739e75e73e0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    authorImg:
      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    dec: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.",
  },
  {
    title: "American Cheese Burger",
    image:
      "https://images.unsplash.com/photo-1560971017-56ff49e80303?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80",
    authorImg:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    dec: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.",
  },
  {
    title: "Mutton Biriyani",
    image:
      "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=946&q=80",
    authorImg:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    dec: "If you are in for a meaty chewy kind of mood then for sure Mutton biryani is what your palate will prefer. But if you prefer something more sublime yet flavorful and juicy, then chicken Biryani is definitely your take away. The time factor also plays a key role in deciding what biryani to cook.",
  },
  {
    title: "Japanese Sushi",
    image:
      "https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    authorImg:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    dec: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.",
  },
  {
    title: "Hawaiian Chicken PizzaSmoked",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80",
    authorImg:
      "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80",
    dec: "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.",
  },
  {
    title: " Special Indian Chicken Biriyani",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Mutton-Biryani-Recipe.jpg",
    authorImg:
      "https://images.unsplash.com/photo-1619208382871-96f4d45bc840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    dec: "Unlike many other chicken dishes, Chicken Biryani has much less calories coming from saturated fats so it is the best option for eating healthy while searching for Indian food..",
  },
].sort(() => Math.random() - 0.5);

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
