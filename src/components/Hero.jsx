import React from 'react';
import HeroImage from '../assets/ethernet.jpeg';

const Hero = () => {
  return (
    <div className='relative'>
      <div className="hero flex min-h-screen md:min-h-[70vh] justify-center items-center md:items-start">
      <div className="custom-shape-divider-bottom-1717442289 border-base-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className='fill-base-200 z-[1]'></path>
          </svg>
      </div>
        {/* Background image and dark overlay */}
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="w-full flex md:pt-8 flex-col items-center justify-center max-w-[80%] mx-auto relative z-10 text-center md:mt-0 -mt-20">
          <div className="text-center z-20 relative w-full mt-[88px]">
            <h1 className="text-5xl lg:text-7xl font-bold max-w-3xl mx-auto hero-header !text-white">
              Hampshire Based Electrical Company
            </h1>
            <p className="py-6 max-w-2xl mx-auto text-lg !text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className="header-btns flex flex-col md:flex-row gap-3 lg:gap-4 justify-center">
              <button className="btn btn-info w-full md:w-36 text-neutral">
                Our Work<i className="fa-solid fa-arrow-right mt-[2px]"></i>
              </button>
              <button className="btn w-full md:w-36 btn-outline border-white text-white hover:bg-white hover:text-neutral">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 md:py-1 -mt-1 md:-mt-6 bg-base-200 shadow-lg cards">
        <div className="flex flex-wrap justify-center items-center -mt-5 gap-y-10 big-z">
          <div className="card sm:min-w-[300px] w-full sm:w-1/4 mx-10 rounded-none card">
            <div className="card-body bg-transparent">
              <div className="flex gap-3 items-start">
                <svg className="w-[30px] h-[30px] fill-base-content mt-[3px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg>
                <div>
                  <h2 className="card-title mb-2 text-3xl">NAPIT Registered</h2>
                  <p className="">If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card sm:min-w-[300px] w-full sm:w-1/4 mx-10 rounded-none card">
            <div className="card-body bg-transparent">
              <div className="flex gap-3 items-start">
              <svg className="w-[30px] h-[30px] fill-base-content mt-[3px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
                <div>
                  <h2 className="card-title mb-2 text-3xl">PAT Testing</h2>
                  <p className="">If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card sm:min-w-[300px] w-full sm:w-1/4 mx-10 rounded-none card">
            <div className="card-body bg-transparent">
              <div className="flex gap-3 items-start">
              <svg className="w-[30px] h-[30px] fill-base-content mt-[3px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg>
                <div>
                  <h2 className="card-title mb-2 text-3xl">Free Quotes</h2>
                  <p className="">If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
