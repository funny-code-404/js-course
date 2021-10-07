
import { useHistory } from 'react-router-dom';
import { useEffect }  from 'react';
import { connect } from "react-redux";


import { getCommentsAction } from "../../ducks/comments/actions";
import { getCommentsSelector } from "../../ducks/comments/selectors";

const DataComments = (props) => {
 const history = useHistory();
 
  useEffect(() => {
    props.getComments(
      "https://my-json-server.typicode.com/typicode/demo/comments"
    );
  })

 const handleClick = (e) => {
    if (e.target.tagName === 'LI') {
      history.push(`/comments/:${e.target.id}`);
    }
  };

  
    const { title, comments } = props;

    return (
      <div>
        <h1>{title}</h1>
        <ul onClick={handleClick}>
          {comments.map(({ id, body, description }) => (
            <li key={id} id={id}>
              <h1>{body}</h1>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  
}

const mapStateToProps = (state) => ({
  comments: getCommentsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getComments: (path) => dispatch(getCommentsAction(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataComments);
