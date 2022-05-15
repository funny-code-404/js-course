import {useSelector} from "react-redux";

import './Loder.css'
import {isLoadingSelector} from "../../ducks/pokemons/selectors";

const Preloader = () => {

    const  isPokemonsLoading = useSelector(isLoadingSelector);

    const isLoading = isPokemonsLoading /*|| isCommentsLoading*/

    return !!isLoading && <div className='loading'>Загрузка {isLoading}</div>

}

export default Preloader