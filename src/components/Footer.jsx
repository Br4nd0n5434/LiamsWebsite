import React from 'react'

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BookmarkSquareIcon, BookOpenIcon, QueueListIcon, RssIcon } from '@heroicons/react/24/solid'
import Checkatrade from '../assets/check-logo.png'
import Facebook from '../assets/facebook-f.svg'

const Footer = () => {

  const social = [
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#000000" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <img src={Checkatrade} alt="Checkatrade" className='h-[24px] w-[24px]' />
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <img src={Facebook} alt="Facebook" className='h-[24px] w-[24px]' />
      ),
    },
  ]

  return (
    <footer className="border-t border-none py-6 sm:py-10 z-50 bg-base-100">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8">
        <p className="text-sm leading-7">&copy; L / J Electrical Services Ltd. All rights reserved.</p>
        <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-neutral" />
        <div className="flex gap-x-4">
          {social.map((item, itemIdx) => (
            <a key={itemIdx} href={item.href} className="">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer