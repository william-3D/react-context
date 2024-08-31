import React from 'react';
import { useCharacterContext } from '../context';

const Title = () => {
    const character = useCharacterContext();
    
  return (
    <div className='text-lg mt-4 bg-yellow-300 flex text-wrap text-subtitle font-light'>{character.name}</div>
  )
}

export default Title;