import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import CartCard from "./Component/CartCard";
import OrangeButton from "../Buttons/OrangeButton";
import totalAmount from "../../CustomFunction/totalAmount";

const Cart = () => {
  const localStore = localStorage.getItem("cart");
  const [cartData, setCartData] = useState(JSON.parse(localStore) || []);
  return (
    <div className="flex-1">
      <NavBar />
      <div className=" my-5 flex1 flex flex-col ">
        {cartData.map((item) => (
          <CartCard
            key={item.id}
            productData={item}
            setCartData={setCartData}
          />
        ))}
      </div>
      <div className="flex items-center justify-center p-3 ">
        <OrangeButton title={"Checkout"} />
        <div className="flex gap-4 p-3 text-orange-500 text-2xl">
          <p>Total: </p>
          <p>${totalAmount(cartData)} </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
