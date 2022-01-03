import {useState, useEffect, Fragment} from "react";
import GetBreed from "../getBreedDog";
import './style.css';

const DogApi = () => {
    const [dog, setDog] = useState('')

    const dogArr = ['Akita', 'Chow', 'Boxer', 'Husky', 'Mix']

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(data => setDog(data.message))
    }, [])


    const handlerChangeImgClick = (e) => {
        const {tagName, id} = e.target
        if (tagName === 'A') {
            fetch(`https://dog.ceo/api/breed/${id}/images/random`)
                .then(res => res.json())
                .then(data => setDog(data.message))
        }
    }

    return (
        <Fragment>
            <nav onClick={handlerChangeImgClick} className='wrapper'>
                {
                    dogArr.map((item,index) => (
                        <GetBreed breed={item} className='dog' key={item+index}/>
                    ))
                }
            </nav>
            <img src={dog} alt='Random dog'/>
        </Fragment>
    )
}

export default DogApi