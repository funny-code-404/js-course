import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CommentsList from './components/CommentsAll/index';
import SingleComment from './components/CommentSingle/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CommentsList url="https://my-json-server.typicode.com/typicode/demo/comments" />
          }
        />
        <Route
          path="/:id"
          element={
            <SingleComment url="https://my-json-server.typicode.com/typicode/demo/comments" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
