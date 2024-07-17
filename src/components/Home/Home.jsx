import React, { useState, useEffect } from "react";
import axios from "axios";
// import slides from "../../datas/slider.json";
import "./home.css";

export default function Home() {
  const [slides, setSlides] = useState(null);

  const getData = async () => {
    await axios.get("/json/slider.json").then((res) => {
      setSlides(res.data.slides);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const [currentSlide, setcurrentSlide] = useState(0);

    const rightSliderHandler = () => {
      currentSlide >= slides.length - 1
        ? setcurrentSlide(0)
        : setcurrentSlide((prevState) => prevState + 1);
    };

    const leftSliderHandler = () => {
      currentSlide <= 0
        ? setcurrentSlide(slides.length - 1)
        : setcurrentSlide((prevState) => prevState - 1);
    };

  return (
    <div className="slider-container">
      <button className="slider-btn btn-left" onClick={leftSliderHandler}>
        &#10094;
      </button>
      {slides
        ? slides.map((slide, index) => (
            <img
              src={slide}
              className={
                currentSlide === index ? "slider-img active" : "slider-img"
              }
              alt="slider"
            />
          ))
        : "Loading"}

      
      <button className="slider-btn btn-right" onClick={rightSliderHandler}>
        &#10095;
      </button>
    </div>
  );
}
