import React, { use } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-700 text-xl text-white font-medium flex justify-between item-center p-5 h-fit px-20 w-full ">
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src="./logo.png " alt="" className="h-16 w-16 " />
      </div>

      <div className=" flex gap-6 ">
        <div className="flex bg-gray-100 border-gray-600 items-center text-black border rounded-md p-1 px-3">
          <input type="text" placeholder="Search" className="outline-none" />
          <IoSearchSharp className="text-gray-700" />
        </div>

        <NavLink to={"/cart"} className="Cart p-5">
          <MdOutlineShoppingCart />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
