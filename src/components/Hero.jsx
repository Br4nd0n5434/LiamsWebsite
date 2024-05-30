import React from 'react';
import HeroImage from '../assets/ethernet.jpeg';

const Hero = () => {
  return (
    <div>
      <div className="hero flex min-h-screen md:min-h-[60vh] justify-center items-center relative">
        {/* Background image and dark overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="w-full flex pt-10 md:pt-0 flex-col items-center justify-center max-w-[80%] mx-auto relative z-10 text-center md:mt-0 -mt-20">
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
      <div className="bg-info py-10 md:py-1">
        <div className="flex flex-wrap justify-center items-center gap-y-10">
          <div className="card sm:min-w-[300px] w-full sm:w-1/4 mx-3 rounded-none">
            <div className="card-body bg-transparent">
              <div className="flex gap-3 items-start">
                <svg className="w-[30px] h-[30px] fill-base-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg>
                <div>
                  <h2 className="card-title text-base-200 mb-2">NAPIT Registered</h2>
                  <p className="text-base-200">If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card sm:min-w-[300px] w-full sm:w-1/4 mx-3 rounded-none">
            <div className="card-body bg-transparent">
              <div className="flex gap-3 items-start">
              <svg className="w-[30px] h-[30px] fill-base-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
                <div>
                  <h2 className="card-title text-base-200 mb-2">PAT Testing</h2>
                  <p className="text-base-200">If a dog chews shoes whose shoes does he choose?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card sm:min-w-[300px] w-full sm:w-1/4 mx-3 rounded-none">
            <div className="card-body bg-transparent">
              <div className="flex gap-3 items-start">
              <svg className="w-[30px] h-[30px] fill-base-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"/></svg>
                <div>
                  <h2 className="card-title text-base-200 mb-2">Free Quotes</h2>
                  <p className="text-base-200">If a dog chews shoes whose shoes does he choose?</p>
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
