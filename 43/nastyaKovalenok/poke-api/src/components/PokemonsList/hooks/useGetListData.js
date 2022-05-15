
import {useDispatch, useSelector} from "react-redux";
import {getListPokemonsSelector} from "../../../ducks/pokemons/selectors";
import {ACTION_GET_DATA_LIST_REQUESTED} from "../../../ducks/pokemons/actions";

export const useGetListData = (url) => {
    const dispatch = useDispatch()
    const dataPokemons = useSelector(getListPokemonsSelector)

    const getData = () => {
        dispatch(ACTION_GET_DATA_LIST_REQUESTED(url))
    }

    return {dataPokemons, getData}
}
