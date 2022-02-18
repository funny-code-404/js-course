import { useState, useEffect } from 'react';
import { getRandomImage } from './services/api/api';
import {
  getAkitaImage,
  getChowImage,
  getBoxerImage,
  getHuskyImage,
  getMixDogImage,
} from './services/api/api';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid black;
  width: 800px;
  height: 700px;
  margin: auto;
  > div {
    width: 100%;
  }
  > div > button {
    font-weight: bold;
    height: 60px;
    background: yellow;
    width: 20%;
  }
  > img {
    height: 500px;
    display: block;
    margin: 50px auto;
  }
`;

const imageDogList = [
  { id: 1, name: 'Akita', link: getAkitaImage },
  { id: 2, name: 'Chow', link: getChowImage },
  { id: 3, name: 'Boxer', link: getBoxerImage },
  { id: 4, name: 'Husky', link: getHuskyImage },
  { id: 5, name: 'Mix', link: getMixDogImage },
];

function App() {
  const [image, setImage] = useState('null');

  useEffect(() => {
    async function getImageFromServer() {
      let randomImage = await getRandomImage();
      setImage(randomImage);
    }
    getImageFromServer();
  }, []);

  const setChange = async (link) => {
    let imageServer = await link();
    setImage(imageServer);
  };

  return (
    <Container>
      <div>
        {imageDogList.map(({ id, ...rest }) => (
          <ButtonDog key={id} {...rest} setChange={setChange} />
        ))}
      </div>
      <img src={image}></img>
    </Container>
  );
}

function ButtonDog(props) {
  const { name, link, setChange, prevImage } = props;
  const handleChange = async () => {
    await setChange(link);
    console.log(`${name} picture is loaded`);
  };
  return <button onClick={handleChange}>{name}</button>;
}

export default App;
