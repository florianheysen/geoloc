import React from 'react'
import { useRouter } from 'next/router'

import en from '../locales/en'
import fr from '../locales/fr'
import cn from '../locales/cn'

function HowItWorks({data}) {

    const router = useRouter()
    const { locale } = router;
    if(locale === 'en'){
        var lang = en
    } if(locale === 'fr'){
        var lang = fr
    } if(locale === 'cn'){
        var lang = cn
    }

    var json = String.raw`{
    "longitude": "${data.longitude || "-80.484"}",
    "latitude": "${data.latitude || "27.0614"}",
    "country": "${data.country || "US"}",
    "region": "${data.region || "Florida"}",
    "timezone": "${data.timezone || "America/New_York"}",
    "asOrganization": "${data.asOrganization || "Verizon"}"
}`

var code = String.raw`<!-- ${lang.How.comment1} -->
<script defer src="https://geoloc-red.vercel.app/api/js"></script>

<!-- ${lang.How.comment2} -->
<script>
    document.addEventListener('geoloc-loaded', () => {
       console.log(geoloc.country) // ${lang.How.comment3}
    });
</script>`

var javascript = String.raw`async function getGeolocInfo(){
    const response = await fetch('https://geoloc-red.vercel.app/api/json');
    return await response.json();
}`

  return (
    <div className="container mx-auto pb-10" id="start">
        <div className="row mt-5">
            <div className="mx-auto">
                <h2 className="text-2xl pt-4 font-medium">{lang.How.title}</h2>
                <p className="py-4 text-slate-400">
                    {lang.How.desc1} <span className="text-slate-100 font-consolas">`geoloc`</span> {lang.How.desc2}
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
                <h2 className="text-xl pt-4 font-base">{lang.How.subtitle1}</h2>
                <p className="py-4 text-slate-400">
                    {lang.How.text1}
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
                <h2 className="text-xl pt-4 font-base">{lang.How.subtitle2}</h2>
                <p className="py-4 text-slate-400">
                    {lang.How.text2}
                </p>
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="#94a3b8" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                <div>
                        <p className="text-slate-400">{lang.How.disclaimer}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks