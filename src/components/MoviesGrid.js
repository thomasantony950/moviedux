import React, { useState } from "react";
import "../styles.css";
import MoviesCard from "./MoviesCard";

export default function MoviesGrid({ movies, watchlist, toogleWatchList }) {
  console.log(
    "-----MoviesGrid-----",
    "movies",
    movies,
    "watchlist",
    watchlist,
    "toogleWatchList",
    toogleWatchList
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    // console.log("movie", movie, "genre", genre);
    return (
      genre === "All Genres" ||
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
  };

  const matchesRating = (movie, rating) => {
    // console.log("movie", movie, "rating", rating);
    switch (rating) {
      case "All":
        return true;

      case "Good":
        return movie.rating >= 8;

      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;

      case "Bad":
        return movie.rating < 5;

      default:
        return false;
    }
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    // console.log("movie", movie, "searchTerm", searchTerm);
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const filteredMoviesList = movies.filter((movie) => {
    // console.log(
    //   "#############",
    //   "movie",
    //   movie,
    //   "genre",
    //   genre,
    //   "rating",
    //   rating,
    //   "searchTerm",
    //   searchTerm
    // );
    return (
      matchesGenre(movie, genre) &&
      matchesRating(movie, rating) &&
      matchesSearchTerm(movie, searchTerm)
    );
  });

  // console.log("filteredMovies", filteredMoviesList);

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre :</label>
          <select
            className="filter-dropdown"
            value={genre}
            onChange={handleGenreChange}
          >
            <option>All Genres</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Horror</option>
          </select>
        </div>

        <div
          className="filter-slot"
          value={rating}
          onChange={handleRatingChange}
        >
          <label>Rating :</label>
          <select className="filter-dropdown">
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {filteredMoviesList.map((movie) => (
          <MoviesCard
            key={movie.id}
            movie={movie}
            toogleWatchList={toogleWatchList}
            isWatchlisted={watchlist.includes(movie.id)}
          />
        ))}
      </div>
    </div>
  );
}
