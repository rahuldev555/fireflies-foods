import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const dispatch = useDispatch();
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex justify-evenly">
      <div className="ml-10  py-3">
        <h2 className="font-bold text-2xl py-5 ">{restaurant.name}</h2>
        <img
          className="hover:rotate-3 transition-transform duration-1000 border border-violet-500  w-72  p-2  shadow-xl rounded-lg bg-pink-100 h-48"
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
        />

        <h4 className=" py-5 font-semibold text-xl">
          ★ {restaurant.avgRating}
        </h4>

        <h3 className="font-semibold text-xl">{restaurant.costForTwoMsg}</h3>
      </div>

      <div className="  ml-9 font-semibold text-xl">
        <h1 className="font-extrabold py-5">Menu Items :-</h1>
        <ul className="space-y-10  ">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name}
              <button
                onClick={() => addFoodItem(item)}
                className="bg-lime-200 rounded-lg px-2 hover:bg-purple-300 hover:text-indigo-900 mx-10 hover:rotate-180 transition-transform duration-1000 font-bold ml-20"
              >
                Add +
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
