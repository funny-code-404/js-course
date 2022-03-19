import RequestBlock from "./components/requestBlock";
import CommentsBlock from "./components/commentsBlock";
import ErrorMessage from "./components/errorMessage";
import Loader from "./components/loader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RequestBlock />
      <ErrorMessage />
      <Loader />
      <CommentsBlock />
    </div>
  );
}

export default App;
