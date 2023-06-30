import React from 'react';
import Intern from '@/components/intern';
import Testimonial from '@/components/testmonial';
import Layout from '@/components/layout';

const AboutUs = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Web Developer',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim justo sit amet felis consequat consectetur. Duis vestibulum mauris vitae metus gravida, at condimentum justo varius.',
      image: '/path/to/testimonial1.jpg'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      content: 'Pellentesque ac tincidunt lectus. Sed fermentum malesuada nulla a viverra. Proin et risus luctus, condimentum ligula ut, maximus ex. Fusce sit amet enim id lacus semper vehicula.',
      image: '/path/to/testimonial2.jpg'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Full Stack Developer',
      content: 'Nunc eget luctus sem, non euismod massa. Quisque mattis consequat velit vitae blandit. Ut efficitur interdum est, vitae efficitur ex condimentum vitae.',
      image: '/path/to/testimonial3.jpg'
    }
  ];

  // Dummy data for interns
  const interns = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Web Development Intern',
      image: '/path/to/intern1.jpg'
    },
    {
      id: 2,
      name: 'Emily Davis',
      role: 'UI/UX Design Intern',
      image: '/path/to/intern2.jpg'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Full Stack Development Intern',
      image: '/path/to/intern3.jpg'
    }
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
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim justo sit amet felis consequat consectetur.',
      image: '/path/to/service1.jpg'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Pellentesque ac tincidunt lectus. Sed fermentum malesuada nulla a viverra. Proin et risus luctus, condimentum ligula ut.',
      image: '/path/to/service2.jpg'
    },
    {
      id: 3,
      title: 'Full Stack Development',
      description: 'Nunc eget luctus sem, non euismod massa. Quisque mattis consequat velit vitae blandit. Ut efficitur interdum est.',
      image: '/path/to/service3.jpg'
    }
    ,
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Fusce sit amet enim id lacus semper vehicula. Sed finibus lacus quis risus malesuada, a placerat justo cursus.',
      image: '/path/to/mobile-service.jpg'
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'Nulla eu felis vel dolor posuere lacinia. Curabitur hendrerit velit sed congue tempus. Etiam elementum elit quis.',
      image: '/path/to/uiux-service.jpg'
    },
    {
      id: 6,
      title: 'ReactJS Development',
      description: 'Suspendisse ac justo in libero faucibus consectetur. Aliquam ac est sit amet purus aliquet commodo.',
      image: '/path/to/reactjs-service.jpg'
    }
  ];

  return (
    <Layout>

    <section>
    <div>
        <h2>About Our Company</h2>
        {/* <img src={companyImage} alt="Company" /> */}
        <p>
          iMeet is a tech company based in Mathura, India, specializing in providing technical skills training and internship opportunities in web development, MERN stack, UI/UX, and more. We are passionate about nurturing talent, empowering individuals, and fostering innovation in the tech industry.
        </p>
      </div>

      <div>
        <h2>Testimonials</h2>
        <div>
          {testimonials.map(testimonial => (
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

      <div>
        <h2>Intern of the Month</h2>
        <Intern
          name={randomIntern.name}
          role={randomIntern.role}
          image={randomIntern.image}
        />
      </div>

      <div>
        <h2>Our Working Services</h2>
        <div>
          {services.map(service => (
            <div key={service.id}>
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

    
    </section>
    </Layout>
   
  );
};

export default AboutUs;
