import React from 'react';
import HeroImage from '../assets/hero.svg';
import HeaderCard from './HeaderCard';
import Ethernet from '../assets/ethernet-removebg-preview.png';

const Hero = () => {
  return (
    <div className="relative">
      <div className="hero flex min-h-screen md:min-h-[80vh] bg-base-200 justify-left items-center relative">
        <div className="w-full flex pt-10 md:pt-0 flex-col lg:flex-row justify-left items-center max-w-[80%] mx-auto relative">
          <div className="text-left z-20 relative w-full">
            <h1 className="text-5xl lg:text-7xl font-bold max-w-3xl hero-header relative">
              Hampshire Based Electrical Company
              <img
                src={Ethernet}
                alt=""
                className="header-img absolute -top-[90px] right-0 md:w-[45%] -mr-[calc(100vw-100%)] !w-full"
              />
            </h1>
            <p className="py-6 max-w-2xl text-lg text-left">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className="header-btns flex flex-col md:flex-row gap-3 lg:gap-4 justify-left">
              <button className="btn btn-logo w-full md:w-36 text-neutral">Our Work<i className="fa-solid fa-arrow-right mt-[2px]"></i></button>
              <button className="btn w-full md:w-36 btn-outline">Contact Us</button>
            </div>
          </div>
          {/* <img src={HeroImage} className="rounded-lg hidden lg:block xl:max-w-xl lg:max-w-lg" alt="Hero" /> */}
        </div>
        {/* <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div> */}
      </div>
      <div className="header-cards w-full flex flex-col sm:flex-row mt-20 md:-mt-10 flex-wrap justify-center gap-y-5">
        <HeaderCard />
        <HeaderCard />
        <HeaderCard />
      </div>
    </div>
  );
}

export default Hero;
