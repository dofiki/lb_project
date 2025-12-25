import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Logo from "../components/Logo/Logo";
import Banner from "../components/Banner/Banner";
import Feature from "../components/Feature/Feature";
import Follow from "../components/Follow/Follow";
import Review from "../components/Review/Review";
import Subscribe from "../components/Subscribe/Subscribe";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Logo />
      <Banner />
      <Feature />
      <Follow />
      <Review />
      <Subscribe />
      <Footer />
    </>
  );
};

export default HomePage;
