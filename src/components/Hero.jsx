import React, { useEffect } from 'react';
import HeroImage from '../assets/hero.svg';

const Hero = () => {

  return (
    <div className="flex min-h-[80vh] bg-base-200">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center max-w-[80%] mx-auto">
        <div className="text-left sm:text-center md:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold max-w-3xl">Hampshire Based Electrical Company</h1>
          <p className="py-6 max-w-2xl text-lg">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className="flex flex-col md:flex-row gap-3 lg:gap-4 mx-auto">
            <button className="btn btn-logo w-full md:w-36 text-neutral">Our Work<i className="fa-solid fa-arrow-right mt-[2px]"></i></button>
            <button className="btn w-full md:w-36 btn-outline">Contact Us</button>
          </div>
        </div>
        {/* <img src={HeroImage} className="rounded-lg hidden lg:block xl:max-w-xl lg:max-w-lg" alt="Hero" /> */}
        <div className="mockup-phone">
          <div className="camera"></div> 
          <div className="display">
            <img src={HeroImage} className="rounded-lg hidden lg:block xl:max-w-xl lg:max-w-lg" alt="Hero" />
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Hero;
