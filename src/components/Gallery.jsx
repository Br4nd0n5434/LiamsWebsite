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
    <div className="relative overflow-hidden bg-base-100">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-base-content sm:text-6xl">
              See the work we've done
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              This year, our new svelte signals will shelter you from the harsh
              elements of a world that doesn't care if you develop or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={Image1}
                          className="h-full w-full object-cover object-center"
                          alt="Kitten"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Image2}
                          className="h-full w-full object-cover object-center"
                          alt="Keanu"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Image3}
                          className="h-full w-full object-cover object-center"
                          alt="Keanu"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Image4}
                          className="h-full w-full object-cover object-center"
                          alt="Keanu"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Image5}
                          className="h-full w-full object-cover object-center"
                          alt="Kitten"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={Image6}
                          className="h-full w-full object-cover object-center"
                          alt="Keanu"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://placebear.com/684/350"
                          className="h-full w-full object-cover object-center"
                          alt="Bear"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="rounded bg-logo-gradient px-9 py-4 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View More<span aria-hidden="true" className='ml-1 mt-0.5'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
