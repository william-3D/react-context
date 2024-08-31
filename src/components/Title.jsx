import React, { useContext } from 'react';
import { CharacterContext } from '../context';

const Title = () => {
    const character = useContext(CharacterContext);
    
  return (
    <div className='text-lg mt-4 bg-yellow-300 flex text-wrap text-subtitle font-light'>{character.name}</div>
  )
}

export default Title;