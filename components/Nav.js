import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import ReactCountryFlag from "react-country-flag"

const solutions = [
  {
    name: 'French',
    href: '#',
    code: "FR",
  },
  {
    name: 'Spanish',
    href: '#',
    code: "ES",
  },
  {
    name: 'Polish',
    href: '#',
    code: "PL",
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <Popover className="relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="">
              <span className="sr-only">Geoloc</span>
              <svg className="w-12 h-12" width="178" height="169" viewBox="0 0 178 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M156.125 60.1904V40.0417C156.125 31.2453 152.631 22.8092 146.411 16.5893C140.191 10.3693 131.755 6.875 122.958 6.875H40.0417C31.2453 6.875 22.8097 10.3693 16.5898 16.5893C10.3698 22.8092 6.875 31.2453 6.875 40.0417V122.958C6.875 131.755 10.3698 140.191 16.5898 146.411C22.8097 152.631 31.2453 156.125 40.0417 156.125H85.3144" fill="url(#paint0_linear_4_27)"/>
                <path d="M156.125 60.1904V40.0417C156.125 31.2453 152.631 22.8092 146.411 16.5893C140.191 10.3693 131.755 6.875 122.958 6.875H40.0417C31.2453 6.875 22.8097 10.3693 16.5898 16.5893C10.3698 22.8092 6.875 31.2453 6.875 40.0417V122.958C6.875 131.755 10.3698 140.191 16.5898 146.411C22.8097 152.631 31.2453 156.125 40.0417 156.125H85.3144" stroke="#6DC4FE" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M101.403 66.7409L13.6768 19.893" stroke="#6DC4FE" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.9765 149.326L72.3798 51.2352" stroke="#6DC4FE" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M135.396 81.5001C130.493 81.4892 125.636 82.4467 121.104 84.318C116.572 86.1892 112.455 88.9372 108.988 92.4042C105.521 95.8711 102.773 99.9889 100.902 104.521C99.0305 109.053 98.0725 113.91 98.0834 118.813C98.0834 143.688 126.109 164.417 135.396 164.417C144.683 164.417 172.708 144.102 172.708 118.813C172.708 108.917 168.778 99.4259 161.78 92.4285C154.783 85.431 145.292 81.5001 135.396 81.5001V81.5001Z" fill="url(#paint1_linear_4_27)" stroke="#6DC4FE" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M135.396 122.958C134.299 122.954 133.214 122.731 132.204 122.304C131.193 121.877 130.277 121.254 129.509 120.471C127.977 118.927 127.113 116.842 127.104 114.667C127.098 113.575 127.308 112.494 127.72 111.483C128.133 110.473 128.741 109.554 129.509 108.779C130.28 108.002 131.197 107.386 132.208 106.965C133.218 106.544 134.301 106.327 135.396 106.327C136.491 106.327 137.574 106.544 138.585 106.965C139.595 107.386 140.512 108.002 141.283 108.779C142.052 109.554 142.66 110.473 143.072 111.483C143.485 112.494 143.694 113.575 143.688 114.667C143.678 116.842 142.815 118.927 141.283 120.471C140.515 121.254 139.599 121.877 138.589 122.304C137.578 122.731 136.493 122.954 135.396 122.958Z" fill="#6DC4FE"/>
                <defs>
                <linearGradient id="paint0_linear_4_27" x1="81.5" y1="6.875" x2="81.5" y2="156.125" gradientUnits="userSpaceOnUse">
                <stop stopColor="#63C0FE" stopOpacity="0.3"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_4_27" x1="135.396" y1="81.5" x2="135.396" y2="164.417" gradientUnits="userSpaceOnUse">
                <stop stopColor="#63C0FE" stopOpacity="0.3"/>
                <stop offset="1" stopColor="white" stopOpacity="0"/>
                </linearGradient>
                </defs>
              </svg>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button disabled className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100-TEMP focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    disabled
                    className={classNames(
                      open ? 'text-slate-200' : 'text-slate-600',
                      'group rounded-md inline-flex items-center text-base font-medium hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-700'
                    )}
                  >
                    <span>Language</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-slate-400' : 'text-slate-600',
                        'ml-2 h-5 w-5 group-hover:text-slate-700'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-[15rem] sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <ReactCountryFlag className="mt-1" countryCode={item.code} />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>

      {/* Mobile menu : */}

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                <svg className="w-10 h-10" width="178" height="169" viewBox="0 0 178 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M156.125 60.1904V40.0417C156.125 31.2453 152.631 22.8092 146.411 16.5893C140.191 10.3693 131.755 6.875 122.958 6.875H40.0417C31.2453 6.875 22.8097 10.3693 16.5898 16.5893C10.3698 22.8092 6.875 31.2453 6.875 40.0417V122.958C6.875 131.755 10.3698 140.191 16.5898 146.411C22.8097 152.631 31.2453 156.125 40.0417 156.125H85.3144" fill="url(#paint0_linear_4_27)"/>
                  <path d="M156.125 60.1904V40.0417C156.125 31.2453 152.631 22.8092 146.411 16.5893C140.191 10.3693 131.755 6.875 122.958 6.875H40.0417C31.2453 6.875 22.8097 10.3693 16.5898 16.5893C10.3698 22.8092 6.875 31.2453 6.875 40.0417V122.958C6.875 131.755 10.3698 140.191 16.5898 146.411C22.8097 152.631 31.2453 156.125 40.0417 156.125H85.3144" stroke="#6DC4FE" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M101.403 66.7409L13.6768 19.893" stroke="#6DC4FE" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.9765 149.326L72.3798 51.2352" stroke="#6DC4FE" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M135.396 81.5001C130.493 81.4892 125.636 82.4467 121.104 84.318C116.572 86.1892 112.455 88.9372 108.988 92.4042C105.521 95.8711 102.773 99.9889 100.902 104.521C99.0305 109.053 98.0725 113.91 98.0834 118.813C98.0834 143.688 126.109 164.417 135.396 164.417C144.683 164.417 172.708 144.102 172.708 118.813C172.708 108.917 168.778 99.4259 161.78 92.4285C154.783 85.431 145.292 81.5001 135.396 81.5001V81.5001Z" fill="url(#paint1_linear_4_27)" stroke="#6DC4FE" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M135.396 122.958C134.299 122.954 133.214 122.731 132.204 122.304C131.193 121.877 130.277 121.254 129.509 120.471C127.977 118.927 127.113 116.842 127.104 114.667C127.098 113.575 127.308 112.494 127.72 111.483C128.133 110.473 128.741 109.554 129.509 108.779C130.28 108.002 131.197 107.386 132.208 106.965C133.218 106.544 134.301 106.327 135.396 106.327C136.491 106.327 137.574 106.544 138.585 106.965C139.595 107.386 140.512 108.002 141.283 108.779C142.052 109.554 142.66 110.473 143.072 111.483C143.485 112.494 143.694 113.575 143.688 114.667C143.678 116.842 142.815 118.927 141.283 120.471C140.515 121.254 139.599 121.877 138.589 122.304C137.578 122.731 136.493 122.954 135.396 122.958Z" fill="#6DC4FE"/>
                  <defs>
                  <linearGradient id="paint0_linear_4_27" x1="81.5" y1="6.875" x2="81.5" y2="156.125" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#63C0FE" stopOpacity="0.3"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_4_27" x1="135.396" y1="81.5" x2="135.396" y2="164.417" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#63C0FE" stopOpacity="0.3"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                  </defs>
                </svg>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <ReactCountryFlag className="mt-1" countryCode={item.code} />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}