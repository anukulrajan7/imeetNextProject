import React from 'react'
import { PropsWithChildren } from 'react'
import Footer from './Footer'
import Headers from "@/components/Navbar"
import Head from 'next/head'

function Layout({children}) {
  return (
    <div>
        <Head>
        <title>imeet technologies</title>
        <link rel="shortcut icon" href="/favicon-32x32" type="image/x-icon" />
        </Head>
        <Headers/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout