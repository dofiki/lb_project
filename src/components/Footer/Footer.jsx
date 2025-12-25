import React from "react";

const Footer = () => {
  return (
    <div className="border-t  flex flex-col items-center gap-5 justify-between p-15 border-[#DEDFE1]">
      <div className="flex justify-between items-center w-full">
        <div className="text-[32px] text-[#484848]" id="footer_title">
          Luna Bites
        </div>
        <ul className="flex gap-10">
          <li>Support Center</li>
          <li>Invoicing</li>
          <li>Contract</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>FAQs</li>
        </ul>
      </div>
      <p className="text-[12px] text-[#484848] ">
        Copyright © 2022 Xpro . All Rights Reseved.
      </p>
    </div>
  );
};

export default Footer;
