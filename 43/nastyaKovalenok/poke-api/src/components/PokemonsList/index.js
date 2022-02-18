
import {useEffect, useState} from "react";
import {useGetListData} from "./hooks/useGetListData";
import {Link} from "react-router-dom";

const PokemonsList = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const {dataPokemons, getData} = useGetListData(url)
    const [filteredData, setFilteredData] = useState(dataPokemons)

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setFilteredData(dataPokemons)
    }, [dataPokemons])

    const handlerChange = (e) => {
        setFilteredData(dataPokemons.filter((item)=>item.name.includes(e.target.value)))
    }

    return (
        <div>
            <input type="text" onChange={handlerChange}/>
            {filteredData.length
                ?
                filteredData.map((item) => (
                    <div key={item.id}>
                        <img src={item.imageUrl} alt=""/>
                        <Link to={`/${item.id}`}>{item.name}</Link>
                    </div>
                ))
                : <h1>Loading data...</h1>}
        </div>
    )
}

export default PokemonsList
