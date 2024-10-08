import React from 'react';
import DetailsSection from './DetailsSection';

const RoundedCard = ({ text }) => {
  return (
    <div className='flex flex-col items-center px-6 pb-8 gap-6 rounded-lg bg-blue-300 border-solid border-[1px]'>
      <DetailsSection text={text} />
    </div>
  )
}

export default RoundedCard