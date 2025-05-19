import '../styles/globals.css'


// Internal Import 

import { TrackingProvider } from '../context/TrackingContext'
import { Navbar, Footer } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <TrackingProvider>
    <Navbar/>

    <Component {...pageProps} />
    </TrackingProvider>
    <Footer/>
    </>
  )
}

export default MyApp
