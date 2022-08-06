import Head from 'next/head'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Features from '../components/Features'

import en from '../locales/en'
import fr from '../locales/fr'
import cn from '../locales/cn'

export default function Home() {

  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        '/api/json',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

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
    <>
      <Head>
        <title>Geoloc — {lang.Hero.title}</title>
        <meta name="title" content={"Geoloc — " + lang.Hero.title}/>
        <meta name="description" content={lang.Hero.desc1}/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content={"https://geoloc.dev/"+locale}/>
        <meta property="og:title" content={"Geoloc — " + lang.Hero.title}/>
        <meta property="og:description" content={lang.Hero.desc1}/>
        <meta property="og:image" content={"https://geoloc.dev/image-" + locale + ".jpg"}/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content={"https://geoloc.dev/"+locale}/>
        <meta property="twitter:title" content={"Geoloc — " + lang.Hero.title}/>
        <meta property="twitter:description" content={lang.Hero.desc1}/>
        <meta property="twitter:image" content={"https://geoloc.dev/image-" + locale + ".jpg"}/>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" /> 
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Nav />
      <Hero data={data} />
      <Features />
      <HowItWorks data={data}  />


      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.min.js"></script>
      <script defer src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/plugins/line-numbers/prism-line-numbers.min.js"></script>

    </>
  )
}
