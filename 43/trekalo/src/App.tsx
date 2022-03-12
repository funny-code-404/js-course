import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { AuthContext } from "./context/AuthContext";
import { Blocks } from "./components/Blocks";
import { Inputs } from "./components/Inputs";
import { Buttons } from "./components/Buttons";
import { PrivatRoute } from "./components/PrivatRoute";

export function App() {
  const contextAuth = useContext(AuthContext);
  return (
    <Router>
      {contextAuth && (
        <nav>
          <NavLink to="/">Button</NavLink>
          <NavLink to="/inputs">Input</NavLink>
          <NavLink to="/blocks">Div</NavLink>
        </nav>
      )}
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <PrivatRoute exact path="/" component={Buttons} />
        <PrivatRoute path="/inputs" component={Inputs} />
        <PrivatRoute path="/blocks" component={Blocks} />
      </Switch>
    </Router>
  );
}
