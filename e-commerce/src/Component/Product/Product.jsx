import React, { use, useEffect, useState } from "react";
import ProductCart from "./Component/ProductCart";
import getProductData from "../Api/getProductData";

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData(setProductData);
  }, []);

  return (
    <div className="my-10 bg-gray-500">
      <div className="text-white-500 font-bold text-4xl text-center">
        Product
      </div>
      <div className="m-8 flex flex-wrap gap-7">
        {productData.map((item) => (
          <ProductCart key={item.id} data={item} />
        ))}
        {/* Temporary Product Card for Testing */}
      </div>
    </div>
  );
};

export default Product;
