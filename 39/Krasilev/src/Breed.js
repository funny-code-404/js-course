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

  async function getBreedImg(e, breed) {
    breed = e.target.id;
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

  return (
    <>
      <button id="akita" onClick={getBreedImg} type="button">
        Akita
      </button>
      <button id="chow" onClick={getBreedImg} type="button">
        Chow
      </button>
      <button id="boxer" onClick={getBreedImg} type="button">
        Boxer
      </button>
      <button id="husky" onClick={getBreedImg} type="button">
        Husky
      </button>
      <button id="mix" onClick={getBreedImg} type="button">
        Mix
      </button>
      {!loading && <img className="image" src={img} alt="Some dog breed" />}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default Breed;
