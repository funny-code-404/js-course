import React, { useState, useEffect } from 'react';

const Breed = () => {
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getRandomImg() {
      try {
        const resp = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!resp.ok) {
          throw new Error();
        }
        const getDogImg = await resp.json();
        setImg(getDogImg.message);
      } catch (error) {
        console.log(error);
      }
    }
    getRandomImg();
    setLoading(false);
  }, []);

  async function getBreedImg(breed) {
    setLoading(true);
    try {
      const resp = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      if (!resp.ok) {
        throw new Error();
      }
      const getDogImg = await resp.json();
      setImg(getDogImg.message[0]);
    } catch (error) {
      console.log(error);
    }
    console.log(`${breed}`);
    setLoading(false);
  }

  const getAkitaImg = () => {
    getBreedImg('akita');
  };
  const getChowImg = () => {
    getBreedImg('chow');
  };
  const getBoxerImg = () => {
    getBreedImg('boxer');
  };
  const getHuskyImg = () => {
    getBreedImg('husky');
  };
  const getMixImg = () => {
    getBreedImg('mix');
  };

  return (
    <>
      <button onClick={getAkitaImg} type="button">
        Akita
      </button>
      <button onClick={getChowImg} type="button">
        Chow
      </button>
      <button onClick={getBoxerImg} type="button">
        Boxer
      </button>
      <button onClick={getHuskyImg} type="button">
        Husky
      </button>
      <button onClick={getMixImg} type="button">
        Mix
      </button>
      {!loading && <img className="image" src={img} alt="Some dog breed" />}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default Breed;
