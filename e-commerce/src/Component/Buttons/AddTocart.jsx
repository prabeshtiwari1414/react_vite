import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

const AddTocart = () => {
  return (
    <div className="flex bg-orange-500 text-white p-2  px-3  items-center font-bold rounded-md text-sm  cursor-pointer hover:bg-white hover:text-orange-500 duration-675  ">
      <MdOutlineShoppingCart />
      AddToCart
    </div>
  );
};

export default AddTocart;
