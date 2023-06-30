import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <div className="w-full lg:w-[80%] min-h-scrren  mx-auto py-10 px-4">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="UI/UX Design"
          description="Create intuitive and visually appealing user interfaces to enhance user experiences."
          imageSrc="/4478107.jpg"
        />
        <Card
          title="Web Development"
          description="Build responsive and dynamic websites using the latest web technologies."
          imageSrc="/3593965.jpg"
        />
        <Card
          title="Full Stack Development"
          description="Develop end-to-end web applications with proficiency in both front-end and back-end technologies."
          imageSrc="/person-front-computer-working-html.jpg"
        />
      </div>
    </div>
  );
};

export default Cards;
