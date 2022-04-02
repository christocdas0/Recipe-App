import React from 'react'
import CheifCard from './CheifCard';


export default function TopChef() {
    const cheif = [
      {
        name: "Juan Carlos",
        img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        recipesCount: "10",
        cuisine: "Mexican",
      },
      {
        name: "Aleena Thomas",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        recipesCount: "05",
        cuisine: "Japanese",
      },
      {
        name: "Erich Maria",
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        recipesCount: "13",
        cuisine: "Italian",
      },
      {
        name: "Christo c das",
        img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        recipesCount: "08",
        cuisine: "American",
      },
      {
        name: "Blake Lively",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        recipesCount: "09",
        cuisine: "French",
      },
      {
        name: "Ben Affleck",
        img: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
