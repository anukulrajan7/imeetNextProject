import React from 'react';

const Intern = ({ name, role, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default Intern;
