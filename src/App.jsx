import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import "./MovieCard";
import MovieCard from "./MovieCard";

// ee25208f

const API_URL = "http://www.omdbapi.com?apikey=ee25208f";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    // console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="search-icon"
          onClick={() => {
            searchMovies(searchTerm);
          }}
        />
      </div>

      {/* 
        movies?.length is the optional chaining feature introduced in ECMAScript 2020 (ES11). Optional chaining allows you to access nested properties of an object without causing an error if any of the intermediate properties are null or undefined.
      */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie1={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
