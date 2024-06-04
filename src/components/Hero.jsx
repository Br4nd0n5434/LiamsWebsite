import React from 'react';
import HeroImage from '../assets/ethernet.jpeg';

const Hero = () => {
  return (
    <div className='relative'>
      <div className="hero flex min-h-screen md:min-h-[55vh] justify-center items-center">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[80%] mx-auto relative z-10 md:mt-0 ">
          <div className="text-center z-20 relative w-full mt-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold max-w-3xl mx-auto hero-header !text-white">
              Hampshire Based Electrical Company
            </h1>
            <p className="py-6 max-w-2xl mx-auto text-lg !text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className="header-btns flex flex-col md:flex-row gap-3 lg:gap-4 justify-center">
              <button className="btn btn-info w-full md:w-36 text-sm text-base rounded-sm ease-in-out">
                Our Work <svg className='w-3 fill-base' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
              </button>
              <button className="btn w-full md:w-36 btn-outline rounded-sm border-white text-white hover:bg-white hover:text-neutral ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 cards mx-5">
        <div className="flex flex-wrap justify-center items-center gap-20 big-z">
          <div className="sm:min-w-[285px] min-h-[200px] max-w-[250px] flex items-center justify-center rounded bg-base-200 md:pt-0 card">
            <div className="card-body bg-transparent flex justify-center">
                <svg className="w-[40px] h-[40px] fill-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg>
                {/* <svg className="w-[40px] h-[40px] fill-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152c0-13.3 10.7-24 24-24h88c44.2 0 80 35.8 80 80c0 28-14.4 52.7-36.3 67l34.1 75.1c5.5 12.1 .1 26.3-11.9 31.8s-26.3 .1-31.8-11.9L268.9 288H208v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V264 152zm48 88h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H208v64z"/></svg> */}
                <div>
                  <h2 className="card-title mb-2 text-3xl">NAPIT <br /> Registered</h2>
                  <p className="mb-3">If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <span className='h-[3px] w-full bg-info'></span>
          </div>
          <div className="sm:min-w-[285px] min-h-[200px] max-w-[250px] flex items-center justify-center bg-base-200 rounded md:pt-0 card">
            <div className="card-body bg-transparent flex justify-center">
            <svg className="w-[40px] h-[40px] fill-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 96H320l47.4-71.1C374.5 14.2 366.9 0 354.1 0H157.9c-12.8 0-20.4 14.2-13.3 24.9L192 96zm128 32H192c-3.8 2.5-8.1 5.3-13 8.4l0 0 0 0C122.3 172.7 0 250.9 0 416c0 53 43 96 96 96H416c53 0 96-43 96-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4zM289.9 336l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47z"/></svg>
                <div>
                  <h2 className="card-title mb-2 text-3xl">FREE <br /> Quotes</h2>
                  <p className="mb-3">If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <span className='h-[3px] w-full bg-info'></span>
          </div>
          <div className="sm:min-w-[285px] min-h-[200px] max-w-[250px] flex items-center justify-center rounded bg-base-200 md:pt-0 card">
            <div className="card-body bg-transparent">
              <svg className="w-[40px] h-[40px] fill-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
                <div>
                  <h2 className="card-title mb-2 text-3xl">PAT <br /> Testing</h2>
                  <p className="mb-3">If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <span className='h-[3px] w-full bg-info'></span>
          </div>
          <div className="sm:min-w-[285px] min-h-[200px] max-w-[250px] flex items-center justify-center rounded bg-base-200 md:pt-0 card">
            <div className="card-body bg-transparent">
              <svg className="w-[40px] h-[40px] fill-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
                <div>
                  <h2 className="card-title mb-2 text-3xl">PAT <br /> Testing</h2>
                  <p className="mb-3">If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <span className='h-[3px] w-full bg-info'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
