import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../features/movies/movieSlice";

const MovieDetails = () => {
  const movie = useSelector((state) => state.movies.movie.movie);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const {
    Title,
    Poster,
    Year,
    Rated,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
  } = movie;

  useEffect(() => {
    dispatch(getMovieById({ id: id }));
    document.title = `${Title} - Movie Database`;
  }, [dispatch, id]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {" "}
        {/* Grid layout */}
        <div className="flex items-center justify-center">
          {" "}
          {/* Image container */}
          <img
            src={Poster}
            alt={Title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="space-y-4">
          {" "}
          {/* Info section with spacing */}
          <h1 className="text-3xl font-bold text-gray-800">{Title}</h1>{" "}
          {/* Title */}
          <p className="text-gray-600">
            {Year} &bull; {Rated} &bull; {Runtime}
          </p>{" "}
          {/* Meta data */}
          <p className="text-gray-600">Genre: {Genre}</p> {/* Genre */}
          <div className="flex flex-wrap">
            {" "}
            {/* Cast and crew section */}
            <p className="mr-2 text-gray-600">Director: {Director}</p>
            <p className="mr-2 text-gray-600">Writer: {Writer}</p>
            <p className="text-gray-600">Actors: {Actors}</p>
          </div>
          <p className="text-gray-600">{Plot}</p> {/* Plot summary */}
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
