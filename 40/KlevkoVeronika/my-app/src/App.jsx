import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Contacts from "./Components/Contacts/index";
import Numbers from "./Components/Numbers/index";
import AboutContact from "./Components/AboutContact";
// import AboutNewContact from "./Components/AboutNewContact";

function App() {
  return (
    <Router>
      {
        <nav>
          <Link to="/">Контакты</Link>
          <Link to="/numbers">Номера</Link>
        </nav>
      }
      <Switch>
        <Route path="/" exact component={Contacts} />
        <Route path="/numbers" exact component={Numbers} />
        <Route path="/numbers/about/:contactId" component={AboutContact} />
        <Route path="/about/:contactId" component={AboutContact} />
      </Switch>
    </Router>
  );
}

//как сделать переход на инфо о клиенте из друзей?

export default App;
