import { Component } from "react";

import { connect } from "react-redux";

import { getPostsAction } from "../../ducks/posts/actions";
import { getPostsSelector } from "../../ducks/posts/selectors";

class DataList extends Component {
  componentDidMount() {
    this.props.getPosts(
      "https://my-json-server.typicode.com/typicode/demo/posts"
    );
  }

  render() {
    const { title, posts } = this.props;

    console.log("RENDER");

    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {posts.map(({ id, title, description }) => (
            <li key={id}>
              <h1>{title}</h1>

              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: getPostsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (path) => dispatch(getPostsAction(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
