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
                        <svg className="mt-1 mr-2" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.4449 0.608765C8.0183 -0.107015 6.9817 -0.107015 6.55509 0.608766L0.161178 11.3368C-0.275824 12.07 0.252503 13 1.10608 13H13.8939C14.7475 13 15.2758 12.07 14.8388 11.3368L8.4449 0.608765ZM7.4141 1.12073C7.45288 1.05566 7.54712 1.05566 7.5859 1.12073L13.9798 11.8488C14.0196 11.9154 13.9715 12 13.8939 12H1.10608C1.02849 12 0.980454 11.9154 1.02018 11.8488L7.4141 1.12073ZM6.8269 4.48611C6.81221 4.10423 7.11783 3.78663 7.5 3.78663C7.88217 3.78663 8.18778 4.10423 8.1731 4.48612L8.01921 8.48701C8.00848 8.766 7.7792 8.98664 7.5 8.98664C7.2208 8.98664 6.99151 8.766 6.98078 8.48701L6.8269 4.48611ZM8.24989 10.476C8.24989 10.8902 7.9141 11.226 7.49989 11.226C7.08567 11.226 6.74989 10.8902 6.74989 10.476C6.74989 10.0618 7.08567 9.72599 7.49989 9.72599C7.9141 9.72599 8.24989 10.0618 8.24989 10.476Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>                    <div>
                        <p>This &quot;/json&quot; endpoint cannot be used on server-side as it will return the informations about the server&apos;s IP address</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks