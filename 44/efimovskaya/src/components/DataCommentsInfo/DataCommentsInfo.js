import { useParams } from "react-router-dom";
import { useEffect }  from 'react';
import { connect } from "react-redux";


import { getCommentsAction } from "../../ducks/comments/actions";
import { getCommentsSelector } from "../../ducks/comments/selectors";

const DataCommentsInfo = (props) => {
  const { id } = useParams();
 let numEl = parseInt(id.match(/\d+/)) - 1;

 useEffect(() => {
    props.getComments(
      "https://my-json-server.typicode.com/typicode/demo/comments"
    );
  })
    const { title, comments } = props;

    return (
      <div>
        <h1>{title}</h1>
        <ul >
          {comments[numEl].id} : {comments[numEl].body}
        </ul>
      </div>
    );
};
const mapStateToProps = (state) => ({
    comments: getCommentsSelector(state),
  });
  
  const mapDispatchToProps = (dispatch) => ({
    getComments: (path) => dispatch(getCommentsAction(path)),
  });
  export default connect(mapStateToProps, mapDispatchToProps)(DataCommentsInfo);

