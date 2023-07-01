import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {

  const originalText = 'Build the Future of Tech Skills';
 

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex items-center gap-4  rounded-md px-4 justify-between bg-white  lg:w-[80%] py-20 flex-col lg:flex-row">
      <div className='lg:w-[70%] md:w-[80%] w-full flex flex-col item-start px-4 flex-wrap gap-5'>
          <h1 className="lg:text-5xl font-Mullish md:text-4xl leading-relaxed text-3xl font-bold text-gray-800 ">{originalText}</h1>
          <p className=" text-gray-700  mx-auto text-sm first-letter:capitalize">
            iMeet is a tech company based in Mathura, UP, India, dedicated to providing aspiring individuals with valuable skills in web development, MERN stack, UI/UX, and more through our comprehensive internship opportunities. Join us to gain hands-on experience, learn from industry professionals, and kickstart your career in the world of technology.
          </p>
          <p className="text-lg text-gray-700 flex flex-wrap gap-4">
            <span className='text-right text-3xl font-Mullish'> 🚀 Gain hands-on experience and master technical </span>
  <span className='text-purple-700'> skills with iMeet's internship programs! 🎯 Work on real-world projects, <br /> collaborate with a talented team, and receive guidance from experienced mentors. 💡 By the end of the program, you'll have the confidence to take on exciting challenges in the tech industry. Join us today and embark on a transformative journey to unlock endless possibilities! </span>✨👩‍💻👨‍💻
</p>

        </div>
      <div className="w-fit px-7 py-4 shadow-md md:shadow-none lg:shadow-md rounded-md">
          <Image src={"/handsome-man-pointing-lateral.jpg"} alt="Hero Image" width={500} height={500} className="w-auto h-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
