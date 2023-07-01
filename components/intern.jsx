import React from 'react';
import Image from 'next/image';
const Intern = ({ name, role, image }) => {
  return (
    <div className='w-full px-4  bg-white rounded-md py-8 shadow-md flex flex-col gap-3 items-center'>
     <div className='  w-[50%] overflow-hidden h-[50%]  rounded-full border-[3px] border-indigo-400' >
     <Image width={1000} height={1000} src={image} alt={name} className='object-cover object-center h-full w-full  ' />

     </div>
      <h3 className='font-Mullish text-3xl text-purple-700 font-bold '>{name}</h3>
      <p className='text-2xl font-Roboto font-bold text-indigo-500  '>{role}</p>
    </div>
  );
};

export default Intern;
