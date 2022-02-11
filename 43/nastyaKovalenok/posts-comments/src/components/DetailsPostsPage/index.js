import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {dataPostsSelector} from "../../ducks/posts/selectors";
import {useEffect} from "react";
import {getPostsAction} from "../../ducks/posts/actions";

const DetailsPostsPage = () => {

    const {postId} = useParams();
    const dispatch = useDispatch()
    const urlForPosts = `https://my-json-server.typicode.com/typicode/demo/posts/${postId}`;

    useEffect(()=>{
            dispatch(getPostsAction(urlForPosts))
    },[urlForPosts, dispatch])

    const dataPost = useSelector(dataPostsSelector)

    return(
        <div key={dataPost.id}>
            {dataPost.title}
        </div>
    )
}

export default DetailsPostsPage