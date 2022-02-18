import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
const ListPokemon = lazy(() => import('./components/ListPokemon/ListPokemon'));
const DetailsPokemon = lazy(() => import('./components/DetailsPokemon/DetailsPokemon'));
function App() {
  return <Router>
    <Suspense fallback={<h1>Loading data, please wait</h1>}>
    <Switch>
      <Route path='/' exact component={ListPokemon}/>
      <Route path='/pokemon/:id' component={DetailsPokemon}/>
    </Switch>
    </Suspense>
  </Router>
    
}
export default App;
