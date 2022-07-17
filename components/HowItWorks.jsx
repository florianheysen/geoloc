import React from 'react'

function HowItWorks({data}) {

    var json = String.raw`{
    "longitude": "${data.longitude || "3.7822"}",
    "latitude": "${data.latitude || "50.3175"}",
    "country": "${data.country || "FR"}",
    "region": "${data.region || "Hauts-de-France"}",
    "timezone": "${data.timezone || "Europe/Paris"}",
    "asOrganization": "${data.asOrganization || "Orange"}"
}`

var code = String.raw`<!-- Load the script tag with either defer or async attribute -->
<script defer src="https://geoloc-red.vercel.app/api/js"></script>

<!-- Wait for the 'geoloc-loaded' event before using the global 'geoloc' variable -->
<script>
    document.addEventListener('geoloc-loaded', () => {
       console.log(geoloc.country) // Will return FR  
    });
</script>`

var javascript = String.raw`async function getGeolocInfo(){
    const response = await fetch('https://geoloc-red.vercel.app/api/json');
    return await response.json();
}`

  return (
    <div className="container mx-auto pb-10" id="getStarted">
        <div className="row mt-5">
            <div className="mx-auto">
                <h2 className="text-2xl pt-4 font-medium">How it works ?</h2>
                <p className="py-4 text-slate-400">
                    Geoloc is a service that provides geolocation information about the current user using a lightweight javascript file. Any page that has the script tag in the DOM will have access to a global <span className="text-slate-100 font-consolas">`geoloc`</span> object containing the following informations.
                </p>
                <div className="code-window">
                    <div className="dots">
                        <div className="border border-slate-600"></div>
                        <div className="border border-slate-600"></div>
                        <div className="border border-slate-600"></div>
                    </div>
                    <pre className="language-json">
                        <code className="language-json">{json}</code>
                    </pre>
                </div>
            </div>
            <div className="mx-auto">
                <h2 className="text-xl pt-4 font-base">Using Async script</h2>
                <p className="py-4 text-slate-400">
                    You can load the script asynchronously that it will have little to no impact on your page load performance, and you can bind an event to the document to execute a function as soon as the geolocation information is available.
                </p>
                <div className="code-window">
                    <div className="dots">
                        <div className="border border-slate-600"></div>
                        <div className="border border-slate-600"></div>
                        <div className="border border-slate-600"></div>
                    </div>
                    <pre className="language-html">
                        <code className="language-html">{code}</code>
                    </pre>
                </div>
            </div>
            <div className="mx-auto">
                <h2 className="text-xl pt-4 font-base">Using as JSON endpoint</h2>
                <p className="py-4 text-slate-400">
                    If you don&apos;t need the geolocation information to be available globally and only want to fetch it on-demand, you can use the /json endpoint, see example below.</p>
                <div className="code-window">
                    <div className="dots">
                        <div className="border border-slate-600"></div>
                        <div className="border border-slate-600"></div>
                        <div className="border border-slate-600"></div>
                    </div>
                    <pre className="language-javascript">
                        <code className="language-javascript">{javascript}</code>
                    </pre>
                </div>
                <div className="flex mt-4 p-4 text-sm rounded-lg bg-[#0f172a] text-slate-300" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                <div>
                        <p>This &quot;/json&quot; endpoint cannot be used on server-side as it will return the informations about the server&apos;s IP address.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks