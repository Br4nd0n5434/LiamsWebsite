import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeController from './ThemeController'
import Logo from '../assets/logo/logo_white.png'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroTwo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-base-100 min-h-screen flex">
      <header className="absolute inset-x-0 top-0 z-50 bg-base-200 lg:bg-transparent">
        <div className="flex mx-auto px-6 p-6 lg:pl-8 lg:pr-0">
          <nav className="flex items-center justify-between w-full" aria-label="Global">
            <div className="flex items-center">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-base lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-8 w-8" aria-hidden="true" />
              </button>
               <ThemeController />
              <div className="hidden ml-9 lg:flex lg:gap-x-14">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-base-content">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-base-300" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-base px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-base-content hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-base-content hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative flex-grow flex flex-wrap text-center md:text-left">
        <div className="relative md:flex md:w-1/2 mx-auto">
          <div className="w-full h-full px-6 md:px-8 py-32 md:py-56">
            <a href="#" className="flex justify-center md:justify-start">
              <span className="sr-only">Your Company</span>
              <img
                alt="Your Company"
                className="h-20 mb-5 w-auto"
                src={Logo}
              />
            </a>
            <div className="hidden sm:mb-10 sm:flex justify-center md:justify-start">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-base-content/10 hover:ring-base-content/20">
                Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                <a href="#" className="whitespace-nowrap font-semibold text-info ml-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <h1 className="text-5xl font-bold sm:text-7xl">
              Hampshire Based Electrical Company
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
              amet fugiat veniam occaec
              at fugiat aliqua.
            </p>
            <div className="mt-10 items-start">
              <a
                href="#"
                className="rounded bg-logo-gradient px-9 py-4 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact Us
              </a>
              <a href="#" className="text-sm font-semibold leading-0 text-base lg:mt-0 pl-9 py-4 rounded">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex-grow md:w-1/2">
          <svg
            className="absolute inset-y-0 left-0 hidden h-full w-20 -translate-x-1/2 transform fill-base-100 lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <div className="iframe h-full md:w-3/4 md:ml-auto sm:w-full lg:ml-0 lg:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.0696567521472!2d-1.1360622231520994!3d50.84839435863103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE5JzEwLjgiTiAxMTHCsDUzJzUyLjEiVw!5e0!3m2!1sen!2sus!4v1516690469899"
              className="h-full w-full"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
