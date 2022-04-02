import React from "react";
import Customimg from "./Customimg";


export default function Herosection() {
    const imgs = [
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
      "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
      "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      "https://images.unsplash.com/photo-1600147184950-b0a367a98bc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
      "https://images.unsplash.com/photo-1644032982093-b4a7b38935ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=609&q=80",
      "https://images.unsplash.com/photo-1606659894340-67897be51c63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1584949602334-4e99f98286a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ].sort(()=> Math.random() - .5);
    
  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">What Are We About</h1>
      

        <p className="info">
          FoodiesHub is a place where you can please your soul and tummy with
          delicious food recepies of all cuisine. And our service is absolutely
          free. So start exploring now.
        </p>
        <button className="btn">Explore now</button>
      </div>
      <div className="col gallery">
        {imgs.map((src, index) => (
          <Customimg key={index} imgSrc={src} pt={"90%"} />
        ))}
      </div>
    </div>
  );
}
