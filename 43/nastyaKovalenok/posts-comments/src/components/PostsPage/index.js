import {useDispatch, useSelector} from "react-redux";
import {dataPostsSelector} from "../../ducks/posts/selectors";
import {getPostsAction} from "../../ducks/posts/actions";

const PostsPage = () => {

    const urlForPosts = 'https://my-json-server.typicode.com/typicode/demo/posts'

    const dataPosts = useSelector(dataPostsSelector)
    const dispatch = useDispatch()

    const handlerGetDataClick = (e) => {
        dispatch(getPostsAction(urlForPosts))
    }

    console.log(dataPosts)


    return(
        <div>
            Posts
            <button onClick={handlerGetDataClick}>Клик</button>
            <div>
                {dataPosts.map((item)=>(
                    <div key={item.id}>{item.title}</div>
                ))}
            </div>
        </div>
    )
}

export default PostsPage