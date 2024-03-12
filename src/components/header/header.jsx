import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-evenly items-center  min-w-full">
        <div className="flex justify-start w-full ">
          <h3 className="text-3xl font-bold tracking-tight text-white">
            InstaMovies
          </h3>
        </div>
        <div className="flex justify-start w-full ">
          <Link to="/"> Home</Link>
        </div>
      </header>
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-1">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Home
          </h1>
        </div>
        {/* <Link to="/"> Home</Link> */}
      </div>
    </>
  );
};

export default Header;
