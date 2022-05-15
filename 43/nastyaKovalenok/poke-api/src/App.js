import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PokemonsList from "./components/PokemonsList";
import PokemonDetails from "./components/PokemonDetails";
import ErrorMessage from "./components/ErrorMessage";
import Preloader from "./components/Preloader";


function App() {
  return (
    <div >
        <Router>
            <Switch>
                <Route path='/' component={PokemonsList} exact/>
                <Route path='/:id' component={PokemonDetails}/>
            </Switch>
        </Router>
        <ErrorMessage/>
        <Preloader/>
    </div>
  );
}

export default App;
