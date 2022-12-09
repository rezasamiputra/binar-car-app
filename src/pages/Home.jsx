import React from "react";
import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import CtaSewaMobil from "../components/CtaSewaMobil";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Home";
  }, []);
  return (
    <>
      <Hero isButton={true} />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CtaSewaMobil />
      <Faq />
    </>
  );
};

export default Home;
