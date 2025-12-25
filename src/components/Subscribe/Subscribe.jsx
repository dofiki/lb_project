import React from "react";
import Left from "../../assets/subscribe/left.png";
import Right from "../../assets/subscribe/right.png";
import Button from "../ui/Button";

const Subscribe = () => {
  return (
    <div>
      <div className="flex p-20 justify-center items-center">
        <div>
          <img src={Left} />
        </div>
        <div className="w-157.75">
          <div
            className="flex justify-center flex-col gap-8 
                        text-center items-center"
          >
            <h1
              className="text-[48px] text-[#484848] tracking-tight"
              id="subscribe_title"
            >
              Subscribe To Our Newsletter
            </h1>
            <p className="text-[16px] text-[#8A8A8A]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin{" "}
            </p>
            <input
              placeholder="michael@ymail.com"
              type="email"
              required
              className="shadow-2xl  w-150 h-15 p-2 focus:outline-1"
            />
            <Button props="Subscribe Now" />
          </div>
        </div>
        <div>
          <img src={Right} />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
