import React from 'react';
import Image from 'next/image';

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="  rounded-md  shadow-lg bg-purple-700 text-white overflow-hidden flex flex-col gap-4 ">
   
      <Image src={imageSrc} alt={title} width={500} height={400} className="w-full h-[300px] object-cover" />
  

      <div className="p-4">
        <h2 className="text-xl font-Mullish font-bold mb-2">{title}</h2>
        <p className="text-white px-2 ">{description}</p>
        <p className='px-3 my-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae quibusdam rem ipsam placeat iure, corrupti quam quaerat enim eos magni aliquid dolorum at debitis? Blanditiis debitis necessitatibus tempora rerum maxime?</p>
      </div>
    </div>
  );
};

export default Card;
