import React from "react";
import "../styles.css";
import MoviesCard from "./MoviesCard";

export default function Watchlist({ movies, watchlist, toogleWatchList }) {
  console.log(
    "-----Watchlist-----",
    "movies",
    movies,
    "watchlist",
    watchlist,
    "toogleWatchList",
    toogleWatchList
  );

  return (
    <div>
      <h1 className="title">Your watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MoviesCard
              key={movie.id}
              movie={movie}
              toogleWatchList={toogleWatchList}
              isWatchlisted={true}
            />
          );
        })}
      </div>
    </div>
  );
}
