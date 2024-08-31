import React from 'react'

const RoundedCard = ({ children }) => {
  return (
    <div className='flex flex-col items-center px-6 pb-8 gap-6 rounded-lg bg-blue-300 border-solid border-[1px]'>{children}</div>
  )
}

export default RoundedCard