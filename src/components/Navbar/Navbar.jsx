import React from "react";
import Button from "../ui/Button/Button";

const Navbar = () => {
  return (
    <div className="h-20 flex justify-center items-center self-center mt-10">
      <div className="w-320.25 flex justify-between items-center">
        <div id="logo" className="text-[52px] text-[#484848] ">
          LUNA BITES
        </div>
        <ul
          id="nav-menu"
          className="hidden md:flex gap-5 text-[16px] w-191 h-14 items-center 
        justify-between text-[#484848]"
        >
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Deals</li>
          <li className="hover:text-black cursor-pointer">New Arrivals</li>
          <li className="hover:text-black cursor-pointer">Packages</li>
          <li className="hover:text-black cursor-pointer">Sign In</li>

          <Button props={"Sign Up"} />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
