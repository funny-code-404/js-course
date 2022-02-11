import {useDispatch, useSelector} from "react-redux";
import {dataCommentsSelector} from "../../ducks/comments/selectors";
import {getCommentsAction} from "../../ducks/comments/actions";
import {Link} from "react-router-dom";

const CommentsPage = () => {

    const urlForPosts = 'https://my-json-server.typicode.com/typicode/demo/comments'

    const dataComments = useSelector(dataCommentsSelector)
    const dispatch = useDispatch()

    const handlerGetDataClick = () => {
        dispatch(getCommentsAction(urlForPosts))
    }

    return (
        <div>
            <button onClick={handlerGetDataClick}>Показать комменты</button>
            <ul>
                {dataComments.map((item) => (
                    <li key={item.id}>
                        <Link to={`/${item.id}`}>
                            {item.body}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default CommentsPage