import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const location = useLocation();
  const [showSideBar, setShowSideBar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/Recipes",
      icon: faList,
    },
    {
      name: "Settings",
      path: "/Settings",
      icon: faCog,
    },
  ];
  function close() {
    setShowSideBar(false);
  }
  return (
    <>
      <div className="navbar contanier">
        <Link to='/' className="logo">
          F <span>oo</span>diesHub
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link className={location.pathname === link.path ? ' active' : ''} to={link.path} key={link.name}>
              {link.name}
            </Link>
          ))}
          {/* <a href="#">Home</a>
          <a href="#">Recipe</a>
          <a href="#">Settings</a> */}
        </div>
        <div
          onClick={() => setShowSideBar(!showSideBar)}
          className={showSideBar ? "sidebar-btn  active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSideBar && <Sidebar close={close} links={links} />}
    </>
  );
}
