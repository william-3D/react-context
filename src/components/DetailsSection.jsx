import React from 'react';
import Title from './Title';


const DetailsSection = ({ text }) => {
  return (
    <div className='flex flex-col justify-center items-center px-6 mt-40 pb-20 gap-6 rounded-lg border-border border-black border-[1px] bg-gray-400'>
      <Title text={text} />
    </div>
  )
}

export default DetailsSection;