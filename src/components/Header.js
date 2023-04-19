// import React from "react";
// import { useSelector } from "react-redux";

// import { useState } from "react";
// import logo from "../assets/logo.svg";
// import { Link } from "react-router-dom";
// import cart from "../assets/cart.png";
// import user from "../assets/user.png";
// const Header = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);
//   const cartItems = useSelector((store) => store.cart.items);
//   return (
//     <section>
//       <nav className="h-20 flex ">
//         <div className="w-full max-w-7xl py- flex justify-between my-0 mx-auto py-0 px-6 items-center">
//           <img
//             className="w-20  hover:rotate-12 transition-transform duration-1000"
//             src={logo}
//             alt="logo"
//           />

//           <ul className="flex font-bold p-2 text-[#7342d6] text-xl cursor-pointer">
//             <li className="ml-4  outline-double  ">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="ml-4  outline-double p-[2px] ">
//               <Link to="/about">About</Link>
//             </li>
//             <li className="ml-4 outline-double p-[2px]">
//               <Link to="/contact">Contact</Link>
//             </li>

//             <li className="ml-10">
//               <Link to="/cart">
//                 <img src={cart} alt="cart" /> {cartItems.length}
//               </Link>
//             </li>
//             {/* {isLoggedIn ? (
//               <button
//                 className="px-2  hover:bg-orange-400"
//                 onClick={() => setIsLoggedIn(false)}
//               >
//                 LogOut
//               </button>
//             ) : (
//               <button
//                 className="px-2  hover:bg-orange-300"
//                 onClick={() => setIsLoggedIn(true)}
//               >
//                 LogIn
//               </button>
//             )} */}

//             <li className="ml-10 ">
//               <img src={user} alt="user" />
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default Header;

/////////////////////////////////////////////////////////

import React from "react";
import Logo from "../assets/logo.svg";
import cart from "../assets/cart.png";
import user from "../assets/user.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <section>
      <nav className="h-20 flex ">
        <div className="w-full max-w-7xl py- flex justify-between my-0 mx-auto py-0 px-6 items-center">
          <img
            className="w-20  hover:rotate-12 transition-transform duration-1000"
            src={Logo}
            alt="logo"
          />

          <ul className="flex font-bold p-2 text-[#7342d6] text-xl cursor-pointer">
            <li className="ml-4  outline-double p-[2px] ">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-4  outline-double p-[2px] ">
              <Link to="/about">About</Link>
            </li>
            <li className="ml-4 outline-double p-[2px]">
              <Link to="/contact">Contact</Link>
            </li>
            <Link to="/cart">
              <li className=" flex ml-10 ">
                <img src={cart} alt="cart" />
                <span className="mr-1 text-indigo-900 ">
                  {cartItems.length}
                </span>
              </li>
            </Link>

            <li className="ml-20 ">
              <img src={user} alt="user" />
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Header;
