import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex mt-5 justify-center  p-2 space-x-6 font-bold">
        <input
          className="p-2 px-16 text-center text-black   border border-blue-300 rounded-md  placeholder:text-xs placeholder:text-center focus:outline-blue-900   hover:rotate-3 transition-transform duration-1000"
          type="text"
          placeholder="search here.!."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-5 py-3 font-bold rounded-2xl text-zinc-900 bg-lime-300 hover:bg-lime-500 hover:text-white hover:rotate-12 transition-transform duration-1000"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

/////////////////////////////////////

// import React, { useEffect, useState } from "react";

// import RestaurantCard from "./RestaurantCard";
// import Shimmer from "./Shimmer";

// function filterData(searchText, restaurants) {
//   const filterData = restaurants.filter((restaurant) =>
//     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
//   );
//   return filterData;
// }

// function Body() {
//   const [allRestaurants, setAllRestaurants] = useState([]);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     getRestaurants();
//   }, []);

//   async function getRestaurants() {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//     );
//     const json = await data.json();
//     setAllRestaurants(json?.data?.cards[2]?.data?.data.cards);
//     setFilteredRestaurants(json?.data?.cards[2]?.data?.data.cards);
//   }

//   return allRestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div>
//       <div className="flex mt-5 justify-center  p-2 space-x-6 font-bold ">
//         <input
//           className="p-2 px-16 text-center text-black   border border-blue-300 rounded-md  placeholder:text-xs placeholder:text-center focus:outline-blue-900   hover:rotate-3 transition-transform duration-1000 "
//           type="text"
//           placeholder="Search here..."
//           value={searchText}
//           onChange={(e) => {
//             setSearchText(e.target.value);
//           }}
//         />
//         {/* filter restaurants */}
//         <button
//           className="px-5 py-3 font-bold rounded-2xl text-zinc-900 bg-lime-300 hover:bg-lime-500 hover:text-white hover:rotate-12 transition-transform duration-1000"
//           onClick={() => {
//             const data = filterData(searchText, allRestaurants);
//             setFilteredRestaurants(data);
//           }}
//         >
//           Search
//         </button>
//       </div>
//       <div className="flex flex-wrap text-center ">
//         {filteredRestaurants.map((restaurant) => {
//           return (
//             <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Body;
