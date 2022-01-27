import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const Navigation = styled.nav`
  position: relative;
  width: 600px;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  margin: 0;
`;

const List = styled.ul`
  background-color: white;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  width: 600px;
  border: 1px solid #000;
  margin: 0px;
  padding: 20px;

  > li:hover {
    color: red;
  }
`;

const Image = styled.img`
  margin: 0px;
  padding: 20px;
  position: relative;
  top: 20px;
  width: 600px;
  border: 1px solid #000;
`;

function App() {
  const [nameDog, setNameDog] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((data) => setNameDog(data.message));
    console.log('The RANDOM dog has been loaded');
  }, []);

  useEffect(() => {
    console.log('The dog has been loaded');
  }, [nameDog]);

  const handleClick = (e) => {
    if (e.target.nodeName === 'LI') {
      const idNameDog = e.target.outerText.toLowerCase(); // получаю имя породы собаки
      const url = `https://dog.ceo/api/breed/${idNameDog}/images/random`; // втсавляю имя породы собаки в url API
      fetch(url)
        .then((res) => res.json())
        .then((data) => setNameDog(data.message));
    }
  };
  return (
    <>
      <Navigation>
        <List onClick={handleClick}>
          <li>Akita</li>
          <li>Chow</li>
          <li>Boxer</li>
          <li>Husky</li>
          <li>Mix</li>
        </List>
        <Image src={nameDog} />
      </Navigation>
    </>
  );
}

export default App;
