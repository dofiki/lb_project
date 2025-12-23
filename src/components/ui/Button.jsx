import React from "react";

const Button = ({ props }) => {
  return (
    <div>
      <button
        className="w-38 h-14 flex justify-center
         items-center bg-black scale-90 hover:scale-100 transition-all
          delay-75 ease-in-out rounded-lg text-white cursor-pointer"
      >
        {props}
      </button>
    </div>
  );
};

export default Button;
