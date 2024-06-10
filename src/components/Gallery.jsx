import React from 'react';

// Images
import Image1 from '../assets/gallery/1.jpg'
import Image2 from '../assets/gallery/2.jpg'
import Image3 from '../assets/gallery/3.jpg'
import Image4 from '../assets/gallery/4.jpg'
import Image5 from '../assets/gallery/5.jpg'
import Image6 from '../assets/gallery/6.jpg'

const Gallery = () => {
  return (
    <div className='bg-base-100 '>
      <div className="container mx-auto px-5 py-2 lg:px-32 pt-10 pb-6">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image6}
              />
            </div>
            <div className="w-1/2 h-1/3 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image4}
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image1}
              />
            </div>
          </div>
          <div className="flex w-full md:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image3}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image5}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={Image2}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-2">
        <div className="-m-1 flex flex-wrap md:-m-2">
        </div>
      </div>
    </div>
  );
}

export default Gallery;
