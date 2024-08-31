import { useState, useEffect } from 'react';
import RoundedCard from './components/RoundedCard';
import DetailsSection from './components/DetailsSection';
import Title from './components/Title';
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
        <RoundedCard>
          <DetailsSection>
            <Title text={character.name} />
          </DetailsSection>
        </RoundedCard>
      ))}
    </div>
  )
}

export default App
