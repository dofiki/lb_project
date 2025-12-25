import React from "react";
import First from "../../assets/feature/first.png";
import Second from "../../assets/feature/second.png";
import Third from "../../assets/feature/third.png";
import Fouth from "../../assets/feature/fourth.png";

const Feature = () => {
  return (
    <div className="h-50 flex gap-30 justify-center shadow-xl">
      <div className="flex gap-5 items-center">
        <img src={First} />
        <div>
          <p className="text-[#484848] text-[20px]">High Quality</p>
          <p className="text-[#484848] text-[16px]">
            crafted from top materials
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <img src={Second} />
        <div>
          <p className="text-[#484848] text-[20px]">Warrany Protection</p>
          <p className="text-[#484848] text-[16px]">Over 2 years </p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <img src={Third} />
        <div>
          <p className="text-[#484848] text-[20px]">Free Shipping</p>
          <p className="text-[#484848] text-[16px]">Order over 150 $ </p>
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <img src={Fouth} />
        <div>
          <p className="text-[#484848] text-[20px]">24 / 7 Support</p>
          <p className="text-[#484848] text-[16px]">Dedicated support </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
