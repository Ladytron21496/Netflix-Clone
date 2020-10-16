import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./api";
import { baseUrl } from "./row";

function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      let request = await axios.get(requests.netflixoriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchMovies();
  }, []);

  function truncateString(str, num) {
    if (str && num) {
      if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      }
    }
  }

  let overview = truncateString(movies?.overview, 150);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("${baseUrl + movies.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <div className="banner-title">
          {movies?.name || movies?.original_name || movies?.title}
        </div>
        <div className="banner-button">
          <button className="banner-buttons">Play</button>
          <button className="banner-buttons">My List</button>
        </div>
        <div className="banner-overview">{overview}</div>
      </div>
      <div className="fade"></div>
    </header>
  );
}

export default Banner;
