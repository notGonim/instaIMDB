import React, { useEffect } from "react";
import MovieListing from "../movieListing/movieListing";
import { useDispatch } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllMovies({ movieText: "batman" }));
    dispatch(getAllShows({ movieText: "superman" }));
  }, [dispatch]);

  return (
    <div className="min-h-full bg-gray-100 m-2 p-2">
      <MovieListing />
    </div>
  );
};

export default Home;
