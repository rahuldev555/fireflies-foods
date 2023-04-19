import { IMG_CDN_URL } from "../constants";

const FoodItem = ({ name, cloudinaryImageId, price }) => {
  return (
    <div className="hover:rotate-3 transition-transform duration-1000 border border-violet-500  w-72  p-3 m-5 shadow-xl rounded-lg bg-pink-100 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>

      <h4>₹ {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
