import React from "react";
import One from "../../assets/follow/1.png";
import Two from "../../assets/follow/2.png";
import Three from "../../assets/follow/3.png";
import Four from "../../assets/follow/4.png";
import Five from "../../assets/follow/5.png";
import Six from "../../assets/follow/6.png";

const Follow = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-30 pb-30 overflow-hidden">
      <div className="w-153.5 flex flex-col items-center justify-center pb-15">
        <h1 className="text-[46px]" id="follow">
          Follow Us On Instagram
        </h1>
        <p className="text-[16px] text-[#8A8A8A] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin{" "}
        </p>
      </div>
      <div className="flex w-screen items-center ">
        <img src={One} className="w-[320px] h-77" />
        <img src={Two} className="w-[320px] h-105" />
        <img src={Three} className="w-[320px] h-77" />
        <img src={Four} className="w-[320px] h-105" />
        <img src={Five} className="w-[320px] h-77" />
        <img src={Six} className="w-[320px] h-105" />
      </div>
    </div>
  );
};

export default Follow;
