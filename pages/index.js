

import Layout from '@/components/layout'
import Hero from '@/components/hero'
import Cards from '@/components/cards'
import Banner from '@/components/Banner'


export default function Home() {
  return (
   <Layout>
    <Banner children={"/29493.jpg"}/>
    <Hero/>
    <Cards/>
   </Layout>

    )
}
