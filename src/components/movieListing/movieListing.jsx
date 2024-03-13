import React from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "../../features/movies/movieSlice";

const MovieListing = () => {
  const movies = useSelector(selectMovies);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {movies.map((movie, index) => (
        <div
          key={movie.id || index}
          className="shadow-md rounded overflow-hidden bg-white transition transform hover:scale-105 duration-300 ease-in-out cursor-pointer"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-800 hover:text-gray-600 truncate">
              {movie.Title}
            </h2>{" "}
            <p className="text-gray-600 text-sm">{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieListing;
