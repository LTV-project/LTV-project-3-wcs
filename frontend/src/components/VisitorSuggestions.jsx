import React, { useState, useEffect } from "react";
import axios from "axios";
import key from "../apiKey";

function VisitorSuggestions() {
  const [popularMovies, setPopularMovies] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=fr-FR&page=1`
      )
      .then((response) => response.data)
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <div>
      {popularMovies &&
        popularMovies
          .map((movies) => (
            <div>
              <h1>{movies.title}</h1>
              {movies.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w154/${movies.poster_path}`}
                  alt={movies.title}
                />
              ) : (
                " "
              )}
            </div>
          ))
          .slice(0, 3)}
    </div>
  );
}

export default VisitorSuggestions;
