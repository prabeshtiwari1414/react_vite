import React from "react";

const CheckOutModal = ({ visible, setVisible, cartData }) => {
  return (
    <div
      className={`fixed inset-0 bg-red-500 ${visible ? "visible" : "hidden"} `}
      onClick={() => setVisible(false)}
    ></div>
  );
};

export default CheckOutModal;
