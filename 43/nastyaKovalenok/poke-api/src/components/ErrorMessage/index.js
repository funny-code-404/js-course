import {useSelector} from "react-redux";

import './styles.css'
import {errorSelector} from "../../ducks/pokemons/selectors";

const ErrorMessage = () => {

    const pokemonsError = useSelector(errorSelector);

    const message = pokemonsError /*|| commentsError*/

    return !!message && <div className='error'>{message}</div>

}

export default ErrorMessage