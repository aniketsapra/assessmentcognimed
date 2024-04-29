import React from 'react';

const DetailsCard = ({ id, name, research, details, date }) => {
  return (
    <div className='line text-gray-500 text-xl flex-row items-center justify-center pt-2 pb-2'>
        <div>{name}</div>
        <div>{research}</div>
        <div>{details}</div>
        <div>{date}</div>
     </div>
  );
};

export default DetailsCard;
