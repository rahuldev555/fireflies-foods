import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-center h-20 bg-zinc-900">
      <h2 className="m-2 leading-none font-extrabold text-2xl  text-lime-300">
        &copy; {new Date().getFullYear()} Fire_Flies
      </h2>
      <h5 className="font-bold text-xl text-white">All rights reserved</h5>
    </div>
  );
};

export default Footer;
