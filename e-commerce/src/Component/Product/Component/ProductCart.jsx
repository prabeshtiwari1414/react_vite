import React from "react";
import AddTocart from "../../Buttons/AddTocart";

const ProductCart = ({ data }) => {
  return (
    <div className=" flex flex-col w-64 border border-gray-300 rounded-xl overflow-hidden bg-slate-100 shadow-md shadow-gray-400 hover:shadow-lg hover:shadow-black/50">
      <div>
        <img
          src={data.image}
          alt={data.name}
          className="w-64 h-64 object-cover rounded-lg mb-4"
        />
      </div>
      <div className="p-3">
        <div>
          <p className="text-gray-500  mb-2">{data.category}</p>
        </div>
        <div className="flex  justify-between items-center">
          <h2 className="text-2xl font-semibold mb-2">{data.name}</h2>
          <p className="text-gray-600 mb-2"> {data.rating} ★</p>
        </div>
        <div className="flex justify-between items-center">
          <AddTocart className=" " />
          <p className="text-orange-500 text-lg font-bold"> ${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
