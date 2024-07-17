import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../Movie/Movie";
import "./movies.css";

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [genres, setGenres] = useState([]);
  const [input, setInput] = useState("");
  const [genreFilter, setGenreFilter] = useState([]);

  const getData = () => {
    axios.get("/json/movies.json").then((res) => {
      setMovies(res.data.movies);
      setFilteredMovies(res.data.movies);
      genreData(res.data.movies);
    });
  };

  const genreData = (moviesData) => {
    moviesData.forEach((element) => {
      element.Genre.trim()
        .split(",")
        .forEach((elem) => {
          setGenres((prevState) => [...new Set([...prevState, elem])]);
        });
    });
  };

  const inputHandler = (event) => {
    setInput(event.target.value.toLowerCase());
  };

  const genreHandler = (event) => {
    setGenreFilter((prevState) => [
      ...new Set([...prevState, event.target.innerHTML]),
    ]);
  };

  const inputFilterHandler = (moviesData) => {
    return moviesData.filter((movie) =>
      movie.Title.toLowerCase().includes(input)
    );
  };

  const genreFilterHandler = (movieData) => {
    return movieData.filter((movie) => {
      return genreFilter.some((ff) => movie.Genre.includes(ff));
    });
  };

  const filtersHandler = () => {
    if (movies) {
      let inputFilteredData = inputFilterHandler(movies);

      if (genreFilter.length !== 0) {
        setFilteredMovies(genreFilterHandler(inputFilteredData));
      } else {
        setFilteredMovies(inputFilteredData);
      }
    }
  };

  const resetHandler = ()=>{
    setInput('');
    setGenreFilter([]);
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    filtersHandler();
  }, [input, genreFilter]);

  return (
    <div className="moviesContainer">
      <div className="moviesWrapper">
        {filteredMovies
          ? filteredMovies.map((movie) => (
              <Movie
                key={movie.Id}
                image={movie.Poster}
                title={movie.Title}
                director={movie.Director}
                year={movie.Year}
                genre={movie.Genre}
              />
            ))
          : <h2>Loading...</h2>}
      </div>

      <div className="movieSidebar">
        <input type="text" value={input} onChange={inputHandler} />
        <div className="genreContainer">
          {genres
            ? genres.map((genre) => (
                <button className="genreBtn" key={genre} onClick={genreHandler}>
                  {genre}
                </button>
              ))
            : ""}
        </div>
        <div className="filterWrapper">{genreFilter.map((filter)=> (
          <span className="filter">{filter}</span>
        ))}</div>
        <button className="resetBtn" onClick={resetHandler}>Reset Filters</button>
      </div>
    </div>
  );
}
