import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
  avgRating,
  costForTwo,
}) => {
  return (
    <div className="hover:rotate-3 transition-transform duration-1000 border border-violet-500  w-72  p-3 m-5 shadow-xl rounded-lg bg-pink-100 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="image" />
      <h2 className="font-bold mt-2">{name}</h2>
      <h3 className="font-mono mt-2">{cuisines.join(", ")}</h3>
      <div className="flex justify-evenly py-2 font-serif">
        <h3>★ {avgRating} &nbsp; • &nbsp;</h3>
        <h4>{lastMileTravel.toFixed(0)}minutes &nbsp;• &nbsp;</h4>
        <h3>&nbsp;₹{costForTwo / 100} for two</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
