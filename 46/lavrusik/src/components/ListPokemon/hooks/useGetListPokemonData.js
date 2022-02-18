import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { ACTION_GET_LIST_POKEMON } from "../../../ducks/pokemonList/actions";
import { pokemonListDataSelector } from "../../../ducks/pokemonList/selectors";
export const useGetListPokemonData = () => {
   const url = 'https://corsanywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon';
   const dispatch = useDispatch();
   const data = useSelector(pokemonListDataSelector);
   const listPokemon = data.map(item => {
      return {
         ...item,
         isFiltred:true,
      }
   });
    useEffect(()=>{
        dispatch(ACTION_GET_LIST_POKEMON(url));
    }, [url]);
   return [listPokemon];
}