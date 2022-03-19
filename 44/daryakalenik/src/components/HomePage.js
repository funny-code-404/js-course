import RequestPokemonBlock from "./requestPokemonBlock";
import ReceivePokemonBlock from "./receivePokemonBlock";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <RequestPokemonBlock />
      <ReceivePokemonBlock />
    </div>
  );
}

export default HomePage;
