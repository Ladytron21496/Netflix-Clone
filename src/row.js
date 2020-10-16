import React, { useEffect, useState } from "react";
import instance from "./axios";

function Row({ title, fetchUrl, posterPath }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    let getMovies = async () => {
      let request = await instance.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
    };

    getMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      {<h2 className="title">{title}</h2>}
      <div className="row-posters">
        {movies.map((item) => {
          return (
            <img
              className={posterPath ? "row-poster" : "row-poster backdrop"}
              alt={item.original_name}
              src={baseUrl + item.poster_path}
            ></img>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
