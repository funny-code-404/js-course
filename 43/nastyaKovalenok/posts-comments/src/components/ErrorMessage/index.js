import {useSelector} from "react-redux";
import {postsErrorSelector} from "../../ducks/posts/selectors";
import {commentsErrorSelector} from "../../ducks/comments/selectors";
import './styles.css'

const ErrorMessage = () => {

    const postsError = useSelector(postsErrorSelector);
    const commentsError = useSelector(commentsErrorSelector)

    const message = postsError || commentsError

    return !!message && <div className='error'>{message}</div>

}

export default ErrorMessage