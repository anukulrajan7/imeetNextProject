
import Layout from '@/components/layout';
import ContactUsForm from '@/components/contact';
import Image from 'next/image';


const HomePage = () => {
 

  return (
    <Layout >
      <div className='bg-gray-200 py-16 flex flex-col gap-10'>
      <div className="full z-10">
      <section className="bg-purple-700 mx-auto lg:flex-row-reverse relative lg:w-[80%] w-full flex flex-col md:flex md:flex-row gap-3 justify-between  items-center ">
         <div className="image flex w-full items-center justify-center py-4 rounded-md">
          <Image src={"/rd.jpg"} alt='decrotaive ' width={700} height={700} className='object-cover rounded-md w-[80%]'></Image>
         </div>
          <div className="w-full rounded-md top-[10%] text-center bg-transparent text-white h-full py-16 px-8 justify-center flex gap-4 flex-col items-start ">
          <h1 className="text-5xl  font-Mullish font-semibold">Welcome to iMeet</h1>
          <p className="text-xl ">We would love to hear from you! Whether you have <br /></p> 
          <p className='text-xl capitalize'> a question, need more information</p>
          <p className='text-xl'>Get in touch with us through any of the following methods</p>
        </div>
      </section>
        <div className='flex  my-7 justify-between w-full lg:flex-row md:flex-col lg:w-[80%] mx-auto'>
           <div className='w-full  ' >
            <Image src={"/one.jpg"} alt='join us image' width={1920} height={1080} className='object-cover w-full h-[50%] hidden lg:block lg:h-full '></Image>
           </div>
           <ContactUsForm/>
        </div>
      

     
    </div>
      </div>
    </Layout>
  );
};

export default HomePage;
