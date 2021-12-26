import React from 'react';
import './App.css';
import { DOGS } from './services/constants';
import { useState,useEffect } from 'react';
import { fetchData,fetchRandomData } from './services/helper/fetchData';

export function App() {
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    const data = fetchRandomData(setImageUrl);
  }, []);
  useEffect(() => {
  }, [imageUrl]);
  const handlClick = ({ target }) => {
    if (target.tagName ==="LI") {
      const data = fetchData(target.id,setImageUrl);
    }
    return;
  }
  return (
    <>
      <nav>
        <ul onClick={handlClick}>
            {Object.keys(DOGS).map((item) => {
              return <li key={DOGS[item].id} id={DOGS[item].breedUrl}>{DOGS[item].name}
                </li>
            })
            }
        </ul>
    </nav>
     <img alt='dog' src={imageUrl}/>
    </>
  )
}