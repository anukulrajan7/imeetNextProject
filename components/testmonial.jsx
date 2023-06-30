import React from 'react';

const Testimonial = ({ name, role, content, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{content}</p>
    </div>
  );
};

export default Testimonial;
