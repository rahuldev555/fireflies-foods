import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className="overflow-hidden my-4 relative space-y-5 rounded-2xl bg-gray-500 bg-gradient-to-r from-transparent via-gray-600 to-transparent p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-500 before:bg-gradient-to-r before:from-transparent before:via-gray-400 before:to-transparent">
        <div className="h-32 rounded-lg bg-gray-500">F</div>
        <div className="space-y-3">
          <div className="h-3 rounded-lg bg-gray-500">O</div>
          <div className="h-3 rounded-lg bg-gray-500">O</div>
          <div className="h-3 rounded-lg bg-gray-500">D</div>
        </div>
      </div>
      <h1 className="text-center text-gray-500 text-5xl font-bold">
        Food Loading.....
      </h1>
      <div className="overflow-hidden my-4 relative space-y-5 rounded-2xl bg-gray-500 bg-gradient-to-r from-transparent via-gray-600 to-transparent p-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:border-t before:border-gray-500 before:bg-gradient-to-r before:from-transparent before:via-gray-400 before:to-transparent">
        <div className="h-32 rounded-lg bg-gray-500">F</div>
        <div className="space-y-3">
          <div className="h-3 rounded-lg bg-gray-500">O</div>
          <div className="h-3 rounded-lg bg-gray-500">O</div>
          <div className="h-3 rounded-lg bg-gray-500">D</div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
