import React from "react";
import Intern from "@/components/intern";
import Testimonial from "@/components/testmonial";
import Layout from "@/components/layout";
import Image from "next/image";
import Card from "@/components/card";

const AboutUs = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Web Developer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim justo sit amet felis consequat consectetur. Duis vestibulum mauris vitae metus gravida, at condimentum justo varius.",
      image: "/testmonial/seven.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      content:
        "Pellentesque ac tincidunt lectus. Sed fermentum malesuada nulla a viverra. Proin et risus luctus, condimentum ligula ut, maximus ex. Fusce sit amet enim id lacus semper vehicula.",
      image: "/Testmonial/six.jpg",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Full Stack Developer",
      content:
        "Nunc eget luctus sem, non euismod massa. Quisque mattis consequat velit vitae blandit. Ut efficitur interdum est, vitae efficitur ex condimentum vitae.",
      image: "/Testmonial/five.jpg",
    },
    {
      id: 4,
      name: "Mike Johnson",
      role: "Full Stack Developer",
      content:
        "Nunc eget luctus sem, non euismod massa. Quisque mattis consequat velit vitae blandit. Ut efficitur interdum est, vitae efficitur ex condimentum vitae.",
      image: "/Testmonial/three.jpg",
    },
    {
      id: 5,
      name: "Mike Johnson",
      role: "Full Stack Developer",
      content:
        "Nunc eget luctus sem, non euismod massa. Quisque mattis consequat velit vitae blandit. Ut efficitur interdum est, vitae efficitur ex condimentum vitae.",
      image: "/Testmonial/two.jpg",
    },
  ];

  // Dummy data for interns
  const interns = [
    {
      id: 1,
      name: "John Smith",
      role: "Web Development Intern",
      image: "/intern/eight.jpg",
    },
    {
      id: 2,
      name: "Emily Davis",
      role: "UI/UX Design Intern",
      image: "/intern/nine.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Full Stack Development Intern",
      image: "/intern/tenth.jpg",
    },
    {
      id: 4,
      name: "Michaelss Johnson",
      role: "Full Stack Development Intern",
      image: "/intern/intern.jpg",
    },
  ];

  // Function to get a random intern
  const getRandomIntern = () => {
    const randomIndex = Math.floor(Math.random() * interns.length);
    return interns[randomIndex];
  };

  // Get a random intern
  const randomIntern = getRandomIntern();

  // Dummy data for working services
  const services = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim justo sit amet felis consequat consectetur.",
      image: "/4478107.jpg",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description:
        "Pellentesque ac tincidunt lectus. Sed fermentum malesuada nulla a viverra. Proin et risus luctus, condimentum ligula ut.",
      image: "/3593965.jpg",
    },
    {
      id: 3,
      title: "Full Stack Development",
      description:
        "Nunc eget luctus sem, non euismod massa. Quisque mattis consequat velit vitae blandit. Ut efficitur interdum est.",
      image: "/5881573.jpg",
    },
    {
      id: 4,
      title: "Mobile App Development",
      description:
        "Fusce sit amet enim id lacus semper vehicula. Sed finibus lacus quis risus malesuada, a placerat justo cursus.",
      image: "/5881573.jpg",
    },
    {
      id: 5,
      title: "UI/UX Design",
      description:
        "Nulla eu felis vel dolor posuere lacinia. Curabitur hendrerit velit sed congue tempus. Etiam elementum elit quis.",
      image: "/4478107.jpg",
    },
    {
      id: 6,
      title: "ReactJS Development",
      description:
        "Suspendisse ac justo in libero faucibus consectetur. Aliquam ac est sit amet purus aliquet commodo.",
      image: "/4478107.jpg",
    },
  ];

  return (
    <Layout>
      <div className="py-16">
        <section >
          < div className=" flex flex-col justify-between glassmorphism bg-purple-700  rounded-lg p-8 w-full lg:w-[80%] mx-auto
          ">
    
              <h2 className="w-fit text-5xl font-Mullish text-white text-center mx-auto font-semibold">About us</h2>

              <div className="flex flex-col md:flex-row px-2 py-4 gap-6 justify-center items-center">
                <div className="flex flex-col flex-wrap px-2 gap-4 items-start text-white flex-1 w-full">
                <h1 className="text-4xl text-purple-900 font-bold bg-white font-Roboto  w-fit px-2 py-2 ">Welcome to imeet-</h1>
      <p className="first-letter:capitalize font-Mullish text-xl text-start  ">
        imeet is a leading platform dedicated to providing internships and comprehensive training programs for students aspiring to excel in the world of technology. We specialize in empowering students with the skills and practical experience necessary to thrive in the rapidly evolving tech industry.
      </p>
    
      <p className="text-sm font-Mullish text-indigo-700 bg-white first-letter:capitalize px-2 py-2 ">
        Join us at  immet and unlock your full potential. Prepare to embark on an exciting and rewarding journey towards a successful career in technology.
      </p>
    </div>
                <div className="md:w-[50%]">
                  <Image src="/rd.jpg" width="1000" height="1000" className=" object-cover rounded-md"></Image>
                </div>
              
              </div>
            
          </div>
          <div className="w-full py-8 flex-wrap bg-white text-purple-700 font-Mullish px-4 mx-auto shadow-md rounded-sm items-center  flex flex-col gap-4 md:w-[80%]">
                  <h1 className="bg-purple-700 text-white text-4xl font-semibold w-fit px-4 py-2 my-3">More about us</h1>
                  <p className="first-letter:capitalize font-Mullish text-[18px] text-start  ">
        Whether you are a beginner or an experienced student, our platform offers a wide range of opportunities to enhance your knowledge and prepare you for a successful career in the tech field. Our team of industry experts and mentors are committed to guiding you through every step of your journey, ensuring you gain the skills and confidence required to stand out in the competitive job market.
      </p>
      <p className="first-letter:capitalize font-Mullish text-[18px] text-start  ">
        At imeet, we believe in hands-on learning and providing real-world projects that allow you to apply your theoretical knowledge in practical scenarios. Our internship programs offer valuable industry exposure, allowing you to collaborate with professionals, build a strong network, and gain a deeper understanding of the tech industry's inner workings.
      </p>
                </div>
          <div className="bg-gray-200  w-full lg:w-[80%] py-9 px-4 rounded-md flex flex-col my-8 mx-auto ">
            <h2 className="text-indigo-700 text-center  py-3  font-Roboto text-4xl font-semibold">Testimonials</h2>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 py-5 gap-5">
              {testimonials.map((testimonial) => (
                <Testimonial
                  key={testimonial.id}
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  image={testimonial.image}
                />
              ))}
            </div>
          </div>

          <div className="my-8 w-full bg-gray-200 lg:w-[80%] flex flex-col py-8 px-4  gap-4 mx-auto">
            <h2 className=" text-center text-indigo-600 font-Mullish text-4xl py-8 font-bold">Intern of the Month</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {
                interns.map((intern,i)=>{
                    return  <Intern key={intern.id} role={intern.role} name={intern.name} image={intern.image}/>
                })
              }
             </div>
          </div>

          <div className="bg-purple-100 w-full lg:w-[80%] mx-auto flex flex-col gap-7 py-8 px-4">
            <h2 className="text-center py-3 text-4xl text-indigo-700 font-Mullish font-bold">Our Working Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card description={service.description} key={service.id} imageSrc={service.image} title={service.title}/>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
