import React from "react";
import "./App.css";
import requests from "./api";
import Row from "./row";
import Banner from "./banner";
function App() {
  return (
    <div className="App">
      <Banner />

      <Row
        title={"Netflix Originals"}
        posterPath={true}
        fetchUrl={requests.netflixoriginals}
      />
      <Row title={"Trending Now"} fetchUrl={requests.trending} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
