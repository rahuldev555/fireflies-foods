import React from "react";
import error from "../assets/error.svg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="text-center py-10">
      <img className="w-full h-96" src={error} alt="Not Found" />
      <h3 className="text-2xl font-extrabold mt-10">
        Ohh! {err.status} Page Not Found
      </h3>

      <Link to="/">
        <h2 className="font-semibold text-lg">click on </h2>
        <span className="text-violet-800 text-2xl font-bold">HomePage</span>
      </Link>
    </div>
  );
};

export default Error;
