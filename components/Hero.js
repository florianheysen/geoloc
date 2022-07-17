import React from 'react'

function Nav() {

var script = String.raw`<script defer src="https://geoloc-red.vercel.app/api/js"></script>
<script>
    document.addEventListener('geoloc-loaded', () => {
       console.log(geoloc.country) // Will return FR 
    });
</script>`

  return (
    <section className="pt-5 pb-6">
    <div className="container mx-auto">
        <div className="row mt-6">
            <div className="col-md-8 mx-auto text-center">
                <h1 className="text-xl md:text-3xl 2xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-400">
                    Geo location as a script.
                </h1>
                <p className="lead my-5 text-lg text-slate-400">
                    Show personalized content to you users based on their IP geolocation, 
                    with a <span className="text-sky-400">small</span>, <span className="text-sky-400">fast</span> and <span className="text-sky-400">globally distributed</span> javascript file.
                </p>
                <a href="#getStarted" className="text-white focus:outline-none focus:ring-4 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 hover:bg-gray-700 focus:ring-gray-700 dark:border-gray-700">
                    Get started
                </a>
                <a href="https://github.com/florianheysen/geoloc" target="_blank" rel="noreferrer" type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-700 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-center inline-flex items-center">
                    <svg className="mr-2 -ml-1 w-3 h-3" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="black" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    Contribute
                </a>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-9 mx-auto">
                <div className="code-window">
                    <div className="dots">
                        <div className="border border-slate-600"></div>
                        <div className="border border-slate-600"></div>
                        <div className="border border-slate-600"></div>
                    </div>
                    <pre className="language-html line-numbers">
                        <code className="language-html line-numbers">{script}</code>
                    </pre>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Nav