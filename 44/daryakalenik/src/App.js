import "./App.css";
import PokemonDetailsBlock from "./components/pokemonDetailsBlock";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:name" element={<PokemonDetailsBlock />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
