import React from 'react';
import HeroImage from '../assets/ethernet.jpeg';
import HeaderCard from './HeaderCard';
import Ethernet from '../assets/ethernet-removebg-preview.png';

const Hero = () => {
  return (
    <div className="relative">
      <div className="hero flex min-h-screen md:min-h-[80vh] bg-base-200 justify-center md:items-start items-center relative">
        {/* Background image and dark overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="here w-full flex pt-10 md:pt-0 flex-col items-center md:items-start justify-start max-w-[80%] mx-auto relative z-10 text-center">
          <div className="text-center z-20 relative w-full md:mt-0 -mt-[65px]">
            <h1 className="text-5xl lg:text-7xl font-bold max-w-3xl mx-auto hero-header !text-white relative">
              Hampshire Based Electrical Company
            </h1>
            <p className="py-6 max-w-2xl mx-auto text-lg !text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className="header-btns flex flex-col md:flex-row gap-3 lg:gap-4 justify-center">
              <button className="btn btn-info w-full md:w-36 text-neutral">Our Work<i className="fa-solid fa-arrow-right mt-[2px]"></i></button>
              <button className="btn w-full md:w-36 btn-outline border-white text-white hover:bg-white hover:text-neutral">Contact Us</button>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
        <div className="wave wave1 wave-bg"></div>
        <div className="wave wave2 wave-bg"></div>
        <div className="wave wave3 wave-bg"></div>
        <div className="wave wave4 wave-bg"></div>
        </div>
      </div>
      <div className="header-cards w-full -mt-20 flex flex-col sm:flex-row flex-wrap justify-center gap-y-5">
        <HeaderCard title="NAPIT Registered" />
        <HeaderCard title="PAT Testing" />
        <HeaderCard title="Free Quotes"/>
      </div>
    </div>
  );
}

export default Hero;