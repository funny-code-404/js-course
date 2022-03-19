import {
  getCommentsAction,
  ACTION_GET_DATA_SUCCEEDED,
  ACTION_GET_COMMENTS_FAILED,
  ACTION_GET_DATA_REQUESTED,
} from "../actions";

export const fetchComments = () => async (dispatch) => {
  try {
    dispatch(ACTION_GET_DATA_REQUESTED());
    const res = await fetch(
      "https://my-json-server.typicode.com/typicode/demo/comments"
    );
    const data = await res.json();
    dispatch(ACTION_GET_DATA_SUCCEEDED(data));
  } catch (e) {
    dispatch(ACTION_GET_COMMENTS_FAILED(e));
  }
};

// export const fetchComments = () => {
//   return function (dispatch) {
//     fetch("https://my-json-server.typicode.com/typicode/demo/comments")
//       .then((response) => response.json())
//       .then((json) => dispatch(getCommentsAction(json)));
//   };
// };
