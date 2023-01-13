import React from "react";
import Business from "./Business";
import Feature from "./Feature";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Header from "./Header";
import Inside from "./Inside";
import MainService from "./MainService";
import OurProduct from "./OurProduct";
import SlideImg from "./SlideImg";

function Main(props) {
  return (
    <>
        <Header />
      <main>
        <SlideImg />
        <MainService />
        <OurProduct />
        <Feature />
        <Business />
        <Inside />
        <Footer1 />
        <Footer2 />
      </main>
    </>
  );
}

export default Main;
