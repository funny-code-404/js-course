import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DataList from "./components/DataList";
import DataComments from "./components/DataComments";
import DataCommentsInfo from "./components/DataCommentsInfo";
import ErrorBlock from "./components/ErrorBlock";
import Navigation from "./components/Navigation";

import "./styles.css";
import store from "./redux/store";

setInterval(() => {
  store.dispatch({
    type: "EXAMPLE",
  });
}, 1000);

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/posts" component={DataList}></Route>
          <Route path="/comments" exact component={DataComments} />
          <Route path="/comments/:id" component={DataCommentsInfo} />
        </Switch>
      </Router>
      <ErrorBlock />
    </div>
  );
}

export default App;
