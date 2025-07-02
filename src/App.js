import React, { useState, useEffect } from "react";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const toogleWatchList = (movieID) => {
    setWatchlist((prev) =>
      prev.includes(movieID)
        ? prev.filter((id) => id !== movieID)
        : [...prev, movieID]
    );
  };

  // const toogleWatchList = (movieID) => {
  //   setWatchlist((prev) => {
  //     console.log("Previous watchlist:", prev); // Log the previous state of the watchlist

  //     if (prev.includes(movieID)) {
  //       console.log(`Removing movie ID: ${movieID}`); // Log the removal case
  //       const updatedWatchlist = prev.filter((id) => id !== movieID);
  //       console.log("Updated watchlist after removal:", updatedWatchlist); // Log the new state after removal
  //       return updatedWatchlist;
  //     } else {
  //       console.log(`Adding movie ID: ${movieID}`); // Log the addition case
  //       const updatedWatchlist = [...prev, movieID];
  //       console.log("Updated watchlist after addition:", updatedWatchlist); // Log the new state after addition
  //       return updatedWatchlist;
  //     }
  //   });
  // };

  console.log("-----Apps-----", "movies", movies, "watchlist", watchlist);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesGrid
                  movies={movies}
                  watchlist={watchlist}
                  toogleWatchList={toogleWatchList}
                />
              }
            ></Route>
            <Route
              path="/watchlist"
              element={
                <Watchlist
                  movies={movies}
                  watchlist={watchlist}
                  toogleWatchList={toogleWatchList}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
