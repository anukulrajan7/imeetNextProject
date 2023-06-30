import Footer from '@/components/Footer'
import '@/styles/globals.css'
import Head from 'next/head'
import { FaViacoin } from 'react-icons/fa'


export default function App({ Component, pageProps }) {
  return (
 <>
     <Head>
       <title>imeet website</title>
       <link rel="icon" href="/" sizes="any" />
     </Head>
    <Component {...pageProps} />

 </>
  )

}
