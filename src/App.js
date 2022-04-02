import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="contanier main">
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/Recipes" element={<Recipes/>} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
