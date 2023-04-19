import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <div className="flex justify-center  my-10">
        <h1 className="font-bold text-2xl px-10">cart items </h1>
        <button
          className="px-3 py-1 font-bold rounded-2xl text-zinc-900 bg-lime-300 hover:bg-lime-500 hover:text-white hover:rotate-180 transition-transform duration-1000"
          onClick={() => handleClearCart()}
        >
          ClearCart
        </button>
      </div>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
