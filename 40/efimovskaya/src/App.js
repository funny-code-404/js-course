import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import Friends from "./components/Friends";
import FriendsNumbers from "./components/FriendsNumbers";
import Calls from "./components/Calls";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/contacts/:id" exact component={Friends} />
        <Route path="/contacts/:id/:calls" component={Calls} />
        <Route path="/numbers/:id" component={FriendsNumbers} />
      </Switch>
    </Router>
  );
}

export default App;
