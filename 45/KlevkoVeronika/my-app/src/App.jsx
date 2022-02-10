import { HomePagePokemons } from './Components/HomePagePokemons/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AboutPokemon } from './Components/AboutPokemon/index';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePagePokemons} />
        <Route path="/aboutPokemon/:pokemonName" component={AboutPokemon} />
      </Switch>
    </Router>
  );
}

export default App;
