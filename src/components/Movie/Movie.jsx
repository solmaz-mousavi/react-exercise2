import React from "react";
import "./movie.css";

export default function Movie({image, title, director, year, genre }) {
  return (
    <div className="movieContainer" >
      <img src={image} alt={title} className="movieImg" />
      <h3>{title}</h3>
      <div className="movieDetails">
        <p>{director}</p>
        <p>{year}</p>
      </div>
      <p>{genre}</p>
    </div>
  );
}
