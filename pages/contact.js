import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Layout from '@/components/layout';
import ContactUsForm from '@/components/contact';

const HomePage = () => {
 

  return (
    <Layout>
      <div className="animation-container">
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">Welcome to iMeet</h1>
          <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut leo condimentum, posuere leo in, tempus mi.</p>
        </div>
      </section>
         <ContactUsForm/>
      

     
    </div>
    </Layout>
  );
};

export default HomePage;
