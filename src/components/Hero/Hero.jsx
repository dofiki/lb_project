import React from "react";
import HeroLeft from "../../assets/img/hero_left.png";
import HeroMidTop from "../../assets/img/hero_middle_top.png";
import HeroMidBottom from "../../assets/img/hero_middle_bottom.png";
import HeroRight from "../../assets/img/hero_right.png";
import Button from "../ui/Button/Button";

const Hero = () => {
  return (
    <div className="h-206.5 flex  items-center justify-center ">
      <div className="w-320.25 flex justify-center gap-8">
        <div className="bg-[#E0E0E0] h-189 w-98 rounded-lg">
          <img src={HeroLeft} className="relative top-40" />
        </div>
        <div className="h-189 w-106.5 flex flex-col justify-between">
          <div className="bg-[#E0E0E0] h-37.5 rounded-lg">
            <img
              src={HeroMidTop}
              alt="hero"
              className="relative top-1 left-2"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <h2 className="text-[90px] font-bold leading-none">ULTIMATE</h2>

            <h1
              className="text-[180px] leading-none text-transparent  font-bold tracking-tighter"
              style={{ WebkitTextStroke: "2px black" }}
            >
              SALE
            </h1>

            <p className="text-sm tracking-wide text-[20px]">NEW COLLECTION</p>

            <Button props={"Shop Now"} />
          </div>

          <div className="bg-[#E0E0E0] h-37.5 rounded-lg">
            <img src={HeroMidBottom} alt="hero" />
          </div>
        </div>

        <div className="bg-[#E0E0E0] h-189 w-98 rounded-lg">
          <img src={HeroRight} className="relative top-47 left-15" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
