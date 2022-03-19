import {useState, useEffect, Fragment} from "react";
import GetBreed from "../getBreedDog";
import {dogArr} from './constans'
import {allDogsUrl} from "./constans";
import './style.css';

const DogApi = () => {
    const [dog, setDog] = useState('')

    useEffect(() => {
        getRandomDog(allDogsUrl)
    }, [])

    const getRandomDog = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDog(data.message))
    }

    const getBreedDog = (id) => {
        const url = `https://dog.ceo/api/breed/${id}/images/random`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                data.status === 'success' && console.log('Собака была загружена')
                setDog(data.message)
            })
    }

    const handlerChangeImgClick = (e) => {
        const {tagName, id} = e.target
        if (tagName === 'A') {
           getBreedDog(id)
        }
    }

    return (
        <Fragment>
            <nav onClick={handlerChangeImgClick} className='wrapper'>
                {
                    dogArr.map((item, index) => (
                        <GetBreed breed={item} className='dog' key={item + index}/>
                    ))
                }
            </nav>
            <img src={dog} alt='Random dog'/>
        </Fragment>
    )
}

export default DogApi