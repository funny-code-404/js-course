import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetListPokemonData } from "./hooks/useGetListPokemonData";
const ListPokemon = ()=>{
    const [listPokemon] = useGetListPokemonData();
    const [filtredListPokemon, setFiltredListPokemon] = useState([]);
    const handleFilterChange = (e) => {
        if (e.target.value === '') {
            setFiltredListPokemon(listPokemon);
            return;
        }
        const filtredList = listPokemon.map(item => ({
         ...item,
         isFiltred: item.name.includes(e.target.value)
        }));  
        setFiltredListPokemon(filtredList);
    }
    
    return <>
        <input onChange={handleFilterChange}/>
    <ul>{
        (filtredListPokemon.length ? filtredListPokemon : listPokemon).map((item,index)=>{
            return item.isFiltred && <li key={index} id={index}><Link to={{
                pathname:`/pokemon/${index}`,
                state: { index },
            } }>
                <p>{item.name}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index+1}.png`} alt='pokemon' />
            </Link></li>
        })
        }</ul>
        </>
}
export default ListPokemon;