import { useLocation } from "react-router-dom";
import { useGetDetails } from "./hooks/useGetDetails";
const DetailsPokemon = () => {
    const { state } = useLocation();
    const { index } = state;
    const [detailsPokemon, handleClickBack,isEmptyDetailsPok] = useGetDetails(index);
    return isEmptyDetailsPok && <div>
         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index+1}.png`} alt='pokemon'/>
        <h3>Forms:</h3>
        <p>{detailsPokemon.forms[0].name}</p>
        <h3>Abilities:</h3>
        <ul>
            {detailsPokemon.abilities.map((item,index) => {
                return <li key={index}>
                    <span>{item.ability.name}</span>
                </li>
            })}
        </ul>
        <h3>Stats:</h3>
        <ul>{detailsPokemon.stats.map((item,index) => {
            return <li key={index}>
                <p>{item.stat.name}:{item.base_stat}</p>
            </li>
        })}</ul>
        <button onClick={handleClickBack}>Go Back</button>
    </div>
}
export default DetailsPokemon;