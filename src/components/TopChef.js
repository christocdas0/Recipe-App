import React from 'react'
import CheifCard from './CheifCard';


export default function TopChef() {
    const cheif = [
      {
        name: "Juan Carlos",
        img: "/img/top-chiefs/img_1.jpg",
        recipesCount: "10",
        cuisine: "Mexican",
      },
      {
        name: "John Doe",
        img: "/img/top-chiefs/img_2.jpg",
        recipesCount: "05",
        cuisine: "Japanese",
      },
      {
        name: "Erich Maria",
        img: "/img/top-chiefs/img_3.jpg",
        recipesCount: "13",
        cuisine: "Italian",
      },
      {
        name: "Chris Brown",
        img: "/img/top-chiefs/img_4.jpg",
        recipesCount: "08",
        cuisine: "American",
      },
      {
        name: "Blake Lively",
        img: "/img/top-chiefs/img_5.jpg",
        recipesCount: "09",
        cuisine: "French",
      },
      {
        name: "Ben Affleck",
        img: "/img/top-chiefs/img_6.jpg",
        recipesCount: "04",
        cuisine: "Indian",
      },
    ];
  return (
    <div className="section chef">
      <h1 className="title">Our Top Chiefs</h1>
      <div className="top-cheifs-contanier">
        {cheif.map((item) => (
          <CheifCard key={item.name} item ={item} />
        ))}
        {/* <CheifCard />
        <CheifCard />
        <CheifCard />
        <CheifCard />
        <CheifCard />
        <CheifCard /> */}
      </div>
    </div>
  );
}
