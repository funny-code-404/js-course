import { useSelector,useDispatch } from "react-redux";
import { ACTION_GET_DETEAILS_POKEMON } from "../../../ducks/pokemonDetails/actions";
import { useEffect } from "react";
import { pokemonDetailsDataSelector } from "../../../ducks/pokemonDetails/selectors";
import { useHistory } from "react-router";
export const useGetDetails = (index) => {
    const dispatch = useDispatch();
   const history = useHistory();
    const data = useSelector(pokemonDetailsDataSelector);
     useEffect(() => {
        dispatch(ACTION_GET_DETEAILS_POKEMON(index));
    }, [index]);
    const handleClickBack = () => {
        history.goBack();
    }
   const isEmptyDetailsPok = Boolean(Object.keys(data).length);
   return [data,handleClickBack,isEmptyDetailsPok]
}