import React from "react";
import Peaky from "../../assets/img/peaky_blinder.png";
import Button from "../ui/Button";
const Banner = () => {
  return (
    <div className="bg-[#DADADA] flex ">
      <div>
        <img src={Peaky} className="pl-30" />
      </div>
      <div className="w-279.5 pl-30">
        <div className="flex flex-col justify-center w-128.75 gap-5 p-10">
          <p className="text-[#767676] font-poppins text-[16px]">
            Women Collection
          </p>
          <h1 className="text-[46px]" id="banner_title">
            Peaky Blinders
          </h1>
          <p className="underline">DESCRIPTION</p>
          <p className="text-[16px] text-[#767676]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sol licitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Scelerisque duis.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-[#767676] text-[16px]">Size:</p>
            <div
              className="p-2 bg-black text-white rounded-xl w-12 h-6.5
            flex justify-center items-center"
            >
              M
            </div>
          </div>
          <p className="text-[24px]">$100.00</p>
          <Button props="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
