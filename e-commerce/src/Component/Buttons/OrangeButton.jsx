import React from "react";

const OrangeButton = ({ title, ...props }) => {
  return (
    <div
      className="flex text-white p-2 px-3 items-center font-bold rounded-md text-sm cursor-pointer hover:bg-white hover:text-orange-500 duration-675 bg-orange-500"
      {...props}
    >
      {title}
    </div>
  );
};

export default OrangeButton;
