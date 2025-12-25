import React from "react";
import Chanel from "../../assets/logo/chanel.png";
import Lv from "../../assets/logo/lv.png";
import Prada from "../../assets/logo/prada.png";
import Calvin from "../../assets/logo/calvin.png";
import Denim from "../../assets/logo/denim.png";

const logos = [
  { id: 1, src: Chanel, name: "Chanel" },
  { id: 2, src: Lv, name: "LV" },
  { id: 3, src: Prada, name: "Prada" },
  { id: 4, src: Calvin, name: "Calvin Klein" },
  { id: 5, src: Denim, name: "Denim" },
];

const Logo = () => {
  return (
    <div className="flex justify-center h-50 items-center p-15">
      <div className="flex gap-6 w-320.25">
        {logos.map((logo) => (
          <div key={logo.id} className="p-4">
            <img
              src={logo.src}
              alt={logo.name}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
