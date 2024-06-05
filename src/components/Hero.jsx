import React from 'react';
import HeroImage from '../assets/hero.jpeg';

const Hero = () => {
  return (
    <div className='relative'>
      <div className="hero flex min-h-screen md:min-h-[60vh] justify-center items-center">
      <div class="custom-shape-divider-bottom-1717606629 -mb-1">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="fill-base-100"></path>
          </svg>
      </div>
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${HeroImage})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[80%] mx-auto relative z-10 md:mt-0 ">
          <div className="text-center z-20 relative w-full">
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
      <div className="pb-10 pt-6 cards container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-20">
        <div className="sm:min-w-[285px] min-h-[200px] max-w-[250px] flex items-center justify-center rounded bg-base-200 md:pt-0 card">
            <div className="card-body bg-transparent">
              <svg className="w-[40px] h-[40px] fill-info mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/></svg>
                <div>
                  <h2 className="card-title mb-2 text-3xl">PAT <br /> Testing</h2>
                  <p className="mb-3">If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <span className='h-[3px] w-full bg-info'></span>
          </div>
          <div className="sm:min-w-[285px] min-h-[200px] max-w-[250px] flex items-center justify-center bg-base-200 rounded md:pt-0 card">
            <div className="card-body bg-transparent flex justify-center">
            {/* <svg className="w-[40px] h-[40px] fill-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M192 96H320l47.4-71.1C374.5 14.2 366.9 0 354.1 0H157.9c-12.8 0-20.4 14.2-13.3 24.9L192 96zm128 32H192c-3.8 2.5-8.1 5.3-13 8.4l0 0 0 0C122.3 172.7 0 250.9 0 416c0 53 43 96 96 96H416c53 0 96-43 96-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4zM289.9 336l47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47z"/></svg> */}
            <svg className="w-[40px] h-[40px] fill-info mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z"/></svg>
                <div>
                  <h2 className="card-title mb-2 text-3xl">FREE <br /> Quotes</h2>
                  <p className="mb-3">If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div>
            <span className='h-[3px] w-full bg-info'></span>
          </div>
          <div className="sm:min-w-[285px] min-h-[200px] max-w-[250px] flex items-center justify-center rounded bg-base-200 md:pt-0 card">
            <div className="card-body bg-transparent flex justify-center">
                <svg className="w-[40px] h-[40px] fill-info mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
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
          <div className="sm:min-w-[285px] min-h-[200px] max-w-[250px] flex items-center justify-center rounded bg-base-200 md:pt-0 card">
            <div className="card-body bg-transparent">
            <svg className="w-[40px] h-[40px] fill-info mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240 80H342.7c-7.9-19.5-20.4-36.5-36.2-49.9L240 80zm37.7-68.2C261.3 4.2 243.2 0 224 0c-53.7 0-99.7 33.1-118.7 80h81.4l91-68.2zM224 256c70.7 0 128-57.3 128-128c0-5.4-.3-10.8-1-16H97c-.7 5.2-1 10.6-1 16c0 70.7 57.3 128 128 128zM124 312.4c-9.7 3.1-19.1 7-28 11.7V512H243.7L181.5 408.2 124 312.4zm33-7.2L204.3 384H272c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48h82.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3c-7.2 0-14.3 .4-21.3 1.3zM0 482.3C0 498.7 13.3 512 29.7 512H64V345.4C24.9 378.1 0 427.3 0 482.3zM320 464c0-26.5-21.5-48-48-48H223.5l57.1 95.2C303 507.2 320 487.6 320 464z"/></svg>
                <div>
                  <h2 className="card-title mb-2 text-3xl">FULLY <br /> Insured</h2>
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
