import React from "react";
import addQuantity from "../../../LocalStorage/addQuantity";
import subQuantity from "../../../LocalStorage/subQuantity";

const Quantity = ({ setCartData, productData }) => {
  return (
    <div className="flex gap-4 items-center">
      <div
        className="h-9 w-9 justify-center items-center rounded-sm bg-red-500 font-bold text-2xl text-white cursor-pointer hover:bg-red-600"
        onClick={() => subQuantity(setCartData, productData)}
      >
        -
      </div>
      <div className="font-bold text-black">{productData.quantity}</div>
      <div
        className="h-9 w-9 justify-center items-center rounded-sm bg-green-500 font-bold text-2xl text-white cursor-pointer hover:bg-green-600"
        onClick={() => addQuantity(setCartData, productData)}
      >
        +
      </div>
    </div>
  );
};

export default Quantity;
