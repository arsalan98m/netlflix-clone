import React from "react";
import "./HomeScreen.css";

import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../Requests";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow />

      <Row title="Documentries" fetchUrl={requests.fetchDoumentaries} isLargeRow />








    </div>
  );
}

export default HomeScreen;
