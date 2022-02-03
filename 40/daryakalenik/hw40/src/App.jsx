import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Names from "./components/Names";
import Numbers from "./components/Numbers";
import NamePage from "./components/Names/NamePage";
import NumberPage from "./components/Numbers/NumberPage";
import CallPage from "./components/CallPage";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <NavLink
          to="/"
          className={(({ isActive }) => (isActive ? "active" : ""), "nav-item")}
        >
          HOME
        </NavLink>
        <NavLink
          to="/names"
          className={(({ isActive }) => (isActive ? "active" : ""), "nav-item")}
        >
          NAMES
        </NavLink>
        <NavLink
          to="/numbers"
          className={(({ isActive }) => (isActive ? "active" : ""), "nav-item")}
        >
          NUMBERS
        </NavLink>
      </nav>
      <div className="routes-wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/names" element={<Names />} />
          <Route path="/names/:name/:surname" element={<NamePage />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/numbers/:number" element={<NumberPage />} />
          <Route path="/numbers/:number/calls" element={<CallPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
