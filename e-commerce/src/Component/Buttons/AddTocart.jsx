import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import addToCart from "../../LocalStorage/addToCart";

const AddTocart = ({ data }) => {
  const [added, setAdded] = useState(false);

  const add = () => {
    if (added) return;
    addToCart(data);
    setAdded(true);
  };
  return (
    <div
      className={`flex  text-white p-2  px-3  items-center font-bold rounded-md text-sm  cursor-pointer hover:bg-white hover:text-orange-500 duration-675 ${
        added ? "bg-gray-600" : "bg-orange-500"
      } `}
      onClick={() => add()}
    >
      <MdOutlineShoppingCart />
      <span className="w-20 text-center">
        {added ? "Added" : "Add to Cart"}
      </span>
    </div>
  );
};

export default AddTocart;
