import React from "react";

const Button = ({ data, ...props }) => {
  return (
    <div
      className="flex w-12 h-12 border bg-gray-600 text-white font-bold text-3xl  justify-center items-center rounded-md cursor-pointer hover:bg-gray-500 active:bg-gray-700 transition-all duration-200"
      {...props}
    >
      {data}
    </div>
  );
};

export default Button;
