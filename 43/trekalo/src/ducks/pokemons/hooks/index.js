import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokemonsDataSelector } from "../../../ducks/pokemons/selectors";
import { ACTION_GET_POKEMONS_REQUESTED } from "../../../ducks/pokemons/actions";

export const usePokemonsData = (url) => {
  const [indexToPagination, setIndexToPagination] = useState(1);
  const dispatch = useDispatch();

  const paginationIndexPageHandler = (e) => {
    if (e.target.id === "prev" && indexToPagination === 2)
      setIndexToPagination((prev) => prev - 1);

    if (e.target.id === "next" && indexToPagination === 1)
      setIndexToPagination((prev) => prev + 1);
  };

  let pokemonsData = useSelector(pokemonsDataSelector);
  pokemonsData = paginationMaker(pokemonsData, indexToPagination);
  useEffect(() => {
    dispatch(ACTION_GET_POKEMONS_REQUESTED(url));
  }, []);

  return {
    pokemonsData,
    paginationIndexPageHandler,
  };
};

function paginationMaker(arrDataToPagination, paginationIndexies) {
  //TODO:закинуть в хелперы(utils)
  // ВАСЯ закинул "10" в const, чего не сделал в задании с машинами, как по-мне, смотрится хуже, может название переменной не полходит и слишком длинное
  const numberOfPageElements = 10;
  const firstIndex =
    paginationIndexies * numberOfPageElements - numberOfPageElements;
  const secondIndex = paginationIndexies * numberOfPageElements - 1;
  return arrDataToPagination.filter((item, index) => {
    if (index >= firstIndex && index <= secondIndex) {
      return item;
    }
  });
}
