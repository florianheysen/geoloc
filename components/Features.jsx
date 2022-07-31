import React from 'react'
import { useRouter } from 'next/router'

import en from '../locales/en'
import fr from '../locales/fr'
import cn from '../locales/cn'

function Features() {

  const router = useRouter()
  const { locale } = router;
    if(locale === 'en'){
        var lang = en
    } if(locale === 'fr'){
        var lang = fr
    } if(locale === 'cn'){
        var lang = cn
    }

  return (
  <div className="container mx-auto mt-3">
    <div className="max-w-xl">
        <h2 className="text-2xl pt-4 font-medium">{lang.Features.title}</h2>
    </div>

    <div
      className="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <div className="flex items-start">
        <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="rgba(255,255,255,0.1)" viewBox="0 0 24 24" stroke="#7dd3fc" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
        </span>

        <div className="ml-4">
          <h2 className="text-lg font-bold">{lang.Features.f1t}</h2>

          <p className="mt-1 text-sm text-slate-400">
          {lang.Features.f1d}
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="rgba(255,255,255,0.1)" viewBox="0 0 24 24" stroke="#7dd3fc" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        </span>

        <div className="ml-4">
          <h2 className="text-lg font-bold">{lang.Features.f2t}</h2>

          <p className="mt-1 text-sm text-slate-400">
          {lang.Features.f2d}
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="rgba(255,255,255,0.1)" viewBox="0 0 24 24" stroke="#7dd3fc" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
        </span>

        <div className="ml-4">
          <h2 className="text-lg font-bold">{lang.Features.f3t}</h2>

          <p className="mt-1 text-sm text-slate-400">
            {lang.Features.f3d}
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Features