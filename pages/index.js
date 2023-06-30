import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Layout from '@/components/layout'
import Hero from '@/components/hero'
import Cards from '@/components/cards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <Layout>
    <Hero/>
    <Cards/>
   </Layout>

    )
}
