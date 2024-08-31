import { useState, useEffect } from 'react';
import RoundedCard from './components/RoundedCard';
import { CharacterContext } from './context';
import { get } from './api'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    get('/characters')
      .then(response => {
        console.log('API Response Data:', response.data);
        setData(response.data);
      })
      .catch(err => {
        console.error('Fetch Error:', err); 
        setError(err.message);
      });
  }, []);

  return (
    
      <div className='flex gap-4 justify-center items-center'>
        {data.slice(0, 3).map((character, index) => (
          <CharacterContext.Provider key={index} value={character}>
            <RoundedCard />
          </CharacterContext.Provider>
        ))}
      </div>
  )
}

export default App
