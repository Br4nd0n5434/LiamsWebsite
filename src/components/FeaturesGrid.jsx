import React from 'react';

import { BanknotesIcon, CheckIcon } from '@heroicons/react/24/outline';

const FeaturesGrid = () => {
  return (
    <div className="grid md:grid-cols-3 max-w-screen-xl mx-auto gap-20 my-8 px-5">
      <div className="flex glass card px-10 py-5 gap-4 items-start shadow-none flex-col">
        <CheckIcon className='text-white bg-white/40 p-3 rounded-full w-1/6' />
        <div>
          <h3 className="font-semibold text-base text-white text-xl">PAT Testing</h3>
          <p className="mt-1 text-gray-200/70">
            You don't need to be an expert to use our plugin. Our expressive API is
            readable and well documented.
          </p>
        </div>
      </div>

      <div className="flex gap-4 card glass px-10 py-5 items-start shadow-none flex-col">
        <BanknotesIcon className='text-white bg-white/40 p-3 rounded-full w-1/6'/> 
        <div>
          <h3 className="font-semibold text-white text-xl">Free Quotes</h3>
          <p className="mt-1 text-gray-200/70">
            You can make sure your website or app is highly performant with a built-in
            system to help you optimize.
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-start flex-col glass card shadow-none px-10 py-5 gap-4">
        <CheckIcon className='text-white bg-white/40 p-3 rounded-full w-1/6' />
        <div>
          <h3 className="font-semibold text-white text-xl">NAPIT Registered</h3>
          <p className="mt-1 text-gray-200/70">
            Our plugins do not have any external dependencies so our plugin has the
            minimal footprint possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
