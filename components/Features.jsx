import React from 'react'

function Features() {
  return (
  <div className="container mx-auto mt-3">
    <div className="max-w-xl">
        <h2 className="text-2xl pt-4 font-medium">Why should I use it ?</h2>
    </div>

    <div
      className="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-8 md:grid-cols-2 lg:grid-cols-3"
    >
      <div className="flex items-start">
        <span className="flex-shrink-0 p-4 bg-gray-800 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="rgba(255,255,255,0.1)" viewBox="0 0 24 24" stroke="#7dd3fc" strokeWidth="2">
          <path strokeLinecap="round" stroke-Linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
        </span>

        <div className="ml-4">
          <h2 className="text-lg font-bold">Lightweight</h2>

          <p className="mt-1 text-sm text-slate-400">
            less than 0.3kb uncompressed
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
          <h2 className="text-lg font-bold">Super Fast</h2>

          <p className="mt-1 text-sm text-slate-400">
            Distribued worldwide, your users will be served from the nearest edge server
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
          <h2 className="text-lg font-bold">Quick Setup</h2>

          <p className="mt-1 text-sm text-slate-400">
            Zero configuration, you don&apos;t need an API key, just add the script tag, and you are ready!
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Features