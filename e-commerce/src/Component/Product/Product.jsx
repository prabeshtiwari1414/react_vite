import React, { use, useEffect, useState } from "react";
import ProductCart from "./Component/ProductCart";
import getProductData from "../Api/getProductData";

const tempData = {
  name: "Air Pod Pro",
  rating: 4.5,
  price: 199.99,
  descripton:
    "Experience the ultimate sound quality with Air Pod Pro. Noise cancellation, transparency mode, and a comfortable fit make it perfect for any occasion.",
  image:
    "https://helios-i.mashable.com/imagery/articles/06p5PGAjzDSZysaktotmIwr/hero-image.fill.size_1248x702.v1699805275.jpg",
  category: "Audio",
};
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
