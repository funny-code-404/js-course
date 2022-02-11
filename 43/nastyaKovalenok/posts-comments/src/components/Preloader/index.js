import {useSelector} from "react-redux";
import {isLoadingPostsSelector} from "../../ducks/posts/selectors";
import {isLoadingCommentsSelector} from "../../ducks/comments/selectors";
import './Loder.css'

const Preloader = () => {

    const  isPostsLoading = useSelector(isLoadingPostsSelector);
    const  isCommentsLoading = useSelector(isLoadingCommentsSelector);

    const isLoading = isPostsLoading || isCommentsLoading

    return !!isLoading && <div className='loading'>Загрузка {isLoading}</div>

}

export default Preloader