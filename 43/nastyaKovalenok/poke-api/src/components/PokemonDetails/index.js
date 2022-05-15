import {useParams} from "react-router-dom";
import {useGetData} from '../../hooks/useGetData'

const PokemonDetails = () => {
    const {id} = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    const [data, , loading] = useGetData(url);
    const {abilities, height, stats, weight} = data;

    return (

        <div>{Object.keys(data).length !== 0
            ?
            <div>
                <h3>Особенности</h3>
                <h4>Рост: {height}</h4>
                <h4>Вес: {weight}</h4>
                <ul> Способности
                    {abilities.map((item) => (
                        <li>{item.ability.name}</li>
                    ))}
                </ul>
                <ul> Статы
                    {stats.map((item) => (
                        <li>{item.base_stat}</li>
                    ))}
                </ul>
            </div>
            : <h3>Loading data</h3>
        }</div>
    )
}

export default PokemonDetails