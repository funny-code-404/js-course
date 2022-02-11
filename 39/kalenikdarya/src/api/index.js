import axios from "axios";

export const getRandomDog = async ()=> {
    const result = await axios(`https://dog.ceo/api/breeds/image/random`);
    return result;
  }


export const changeDog = async function(dog, props) 
{const result = await axios(
      `https://dog.ceo/api/breed/${dog}/images/random`
    );
    props.updateData(result.data.message);
    alert(`New dog is here!`);}