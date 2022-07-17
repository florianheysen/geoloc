import React from 'react'

var script = String.raw`<script defer src="https://geoloc-red.vercel.app/api/js"></script>
<script>
    document.addEventListener('geoloc-loaded', () => {
       console.log(geoloc.country) // US 
    });
</script>`

function Nav({data}) {

    var json = String.raw`{
        "longitude": "${data?.longitude}",
        "latitude": "${data?.latitude}",
        "country": "${data?.country}",
        "region": "${data?.region}",
        "timezone": "${data?.timezone}",
        "asOrganization": "${data?.asOrganization}"
    }`



  return (
    <section className="bg-gradient pt-5 pb-6">
    <div className="container">
        <div className="row mt-6">
            <div className="col-md-8 mx-auto text-center">
                <h1>Geo location as a script.</h1>
                <p className="lead mb-5">Show personalized content to you users based on their IP geolocation, with a small, fast and globally distributed javascript file.</p>
                <a href="#" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Get started</a>
                <a href="https://github.com/florianheysen/geoloc" target="_blank" rel="noreferrer" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Contribute</a>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-9 mx-auto">
                <div className="code-window">
                    <div className="dots">
                        <div className="gray"></div>
                        <div className="gray"></div>
                        <div className="gray"></div>
                    </div>
                    <pre className="language-html">
                        <code className="language-html ">{script}</code>
                    </pre>
                </div>
                <p className="py-4">
                    Geoloc is a service that provides geolocation information about the current user using a lightweight javascript file. any page that has the script tag in the DOM will have access to a global `geoloc` object containing at-least the following information
                </p>
                <div className="code-window">
                    <div className="dots">
                        <div className="gray"></div>
                        <div className="gray"></div>
                        <div className="gray"></div>
                    </div>
                    <pre className="language-json">
                        <code className="language-json">{json}</code>
                    </pre>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Nav