import React, {useState, useEffect} from "react";

export const withRequestData = MyComponent => {

    return (props) => {

        const url = 'https://dog.ceo/api/breeds/list/all'

        const [data, setData] = useState({})

        useEffect(() => {
            fetch(url)
                .then(response => response.json())
                .then((response) => setData(response.message))
        }, [])



        const getNotEmptyArray = (obj) => {
            let arr = [];
            for (let key in obj) {
                if (obj[key].length !== 0) {
                    arr.push(obj[key])
                }
            }
            return arr
        }

        const isNotEmpty = Object.keys(data).length !== 0;

        return isNotEmpty ? (
                <MyComponent data={getNotEmptyArray(data)} {...props} />)
            : (<p>No data to render..</p>)
    }
}
