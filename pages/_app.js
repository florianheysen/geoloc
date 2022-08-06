import '../styles/globals.css'
import splitbee from '@splitbee/web';

splitbee.init()

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
