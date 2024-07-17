import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import AboutUs from "./components/AboutUS/AboutUs";
import "./App.css";

function App() {
  return (
    <>
    <div>
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>
      <div className="shape4"></div>


    </div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
