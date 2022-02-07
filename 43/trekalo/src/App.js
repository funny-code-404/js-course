import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PokemonsList } from "./components/PokemonsList";
import { PokemonInfo } from "./components/PokemonInfo";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonsList url="https://pokeapi.co/api/v2/pokemon/" />
        </Route>
        <Route path="/pokemon/:id" component={PokemonInfo} />
      </Switch>
    </Router>
  );
}

export { App };
