import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";

import { Home } from "./components/Home";
import { Contacts } from "./components/Contacts";
import { Info } from "./components/Info";

import { PrivateRoute } from "./components/PrivateRoute/";

import { AuthContextProvider } from "./context/AuthContextProvider";

import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <nav>
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/info" className="nav-item">
            Info
          </Link>
          <Link to="/contacts" className="nav-item">
            Contacts
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<PrivateRoute component={Home} />} />
          <Route path="/info" element={<PrivateRoute component={Info} />} />
          <Route
            path="/contacts"
            element={<PrivateRoute component={Contacts} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
