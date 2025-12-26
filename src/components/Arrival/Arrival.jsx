import React, { useState } from "react";
import Card from "../ui/Card/Card";
import Img from "../../assets/follow/1.png";
import Button from "../ui/Button/Button";

const DATA = {
  menFashion: [
    {
      img: Img,
      title: "Shiny Dress",
      brand: "Al Karam",
      price: "95.50",
      rating: 5,
      reviews: "4.1k",
      status: "Almost Sold Out",
    },
    {
      img: Img,
      title: "White Shirt",
      brand: "Al Karam",
      price: "85.00",
      rating: 4,
      reviews: "2.3k",
      status: "New",
    },
    {
      img: Img,
      title: "Leather Belt",
      brand: "Al Karam",
      price: "40.00",
      rating: 4,
      reviews: "1.1k",
      status: "Popular",
    },
    {
      img: Img,
      title: "Men Watch",
      brand: "Al Karam",
      price: "150.00",
      rating: 5,
      reviews: "5.8k",
      status: "Best Seller",
    },
    {
      img: Img,
      title: "Leather Belt",
      brand: "Al Karam",
      price: "40.00",
      rating: 4,
      reviews: "1.1k",
      status: "Popular",
    },
    {
      img: Img,
      title: "Men Watch",
      brand: "Al Karam",
      price: "150.00",
      rating: 5,
      reviews: "5.8k",
      status: "Best Seller",
    },
  ],

  womenFashion: [
    {
      img: Img,
      title: "Long Dress",
      brand: "Al Karam",
      price: "120.00",
      rating: 5,
      reviews: "6.2k",
      status: "Trending",
    },
    {
      img: Img,
      title: "Colorful Dress",
      brand: "Al Karam",
      price: "110.00",
      rating: 4,
      reviews: "3.4k",
      status: "Almost Sold Out",
    },
  ],

  menAccessory: [
    {
      img: Img,
      title: "Leather Belt",
      brand: "Al Karam",
      price: "40.00",
      rating: 4,
      reviews: "1.1k",
      status: "Popular",
    },
    {
      img: Img,
      title: "Men Watch",
      brand: "Al Karam",
      price: "150.00",
      rating: 5,
      reviews: "5.8k",
      status: "Best Seller",
    },
  ],

  womenAccessory: [
    {
      img: Img,
      title: "Hand Bag",
      brand: "Al Karam",
      price: "90.00",
      rating: 5,
      reviews: "4.9k",
      status: "Trending",
    },
    {
      img: Img,
      title: "Earrings",
      brand: "Al Karam",
      price: "35.00",
      rating: 4,
      reviews: "2.7k",
      status: "New",
    },
  ],

  discounted: [
    {
      img: Img,
      title: "Discount Sweater",
      brand: "Al Karam",
      price: "60.00",
      rating: 4,
      reviews: "3.1k",
      status: "30% OFF",
    },
    {
      img: Img,
      title: "Sale Shirt",
      brand: "Al Karam",
      price: "50.00",
      rating: 4,
      reviews: "2.9k",
      status: "Limited Deal",
    },
  ],
};

const tabs = [
  { key: "menFashion", label: "Men Fashion" },
  { key: "womenFashion", label: "Women Fashion" },
  { key: "menAccessory", label: "Men Accessory" },
  { key: "womenAccessory", label: "Women Accessory" },
  { key: "discounted", label: "Discounted Deals" },
];

const Arrival = () => {
  const [activeTab, setActiveTab] = useState("menFashion");

  return (
    <div className="flex flex-col justify-center items-center mt-25">
      <div className="text-center">
        <h1 className="text-[48px] text-black" id="arrival_title">
          New Arrival
        </h1>
        <p className="text-[16px] text-black/60 p-2 w-120">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
      </div>

      <div className="flex justify-center w-288.75 h-14 self-center mt-5">
        <ul className="flex gap-20">
          {tabs.map((tab) => (
            <li
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="cursor-pointer"
            >
              {activeTab === tab.key ? (
                <span className="bg-black text-white p-3 rounded-xl ">
                  {tab.label}
                </span>
              ) : (
                tab.label
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-10 p-15">
        {DATA[activeTab]?.map((product, index) => (
          <div key={index} className="flex justify-center">
            <Card {...product} />
          </div>
        ))}
      </div>

      <div className="pb-10">
        <Button props={"View more"} />
      </div>
    </div>
  );
};

export default Arrival;
