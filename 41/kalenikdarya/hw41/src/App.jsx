import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import DogPage from "./components/DogPage";
import RenderToPropsPage from "./components/RenderToPropsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" className="nav-item">
          HOME
        </NavLink>
        <NavLink to="/form" className="nav-item">
          FORM
        </NavLink>
        <NavLink to="/dogPage" className="nav-item">
          DOG PAGE
        </NavLink>
        <NavLink to="/renderToPropsPage" className="nav-item">
          RENDER TO PROPS PAGE
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dogPage" element={<DogPage />} />
        <Route
          path="/renderToPropsPage"
          element={
            <RenderToPropsPage
              render={() => {
                return (
                  <div>
                    <input
                      type="text"
                      name="FirstName"
                      placeholder="First name"
                    />
                    <input type="text" name="Email" placeholder="Email" />
                    <input type="text" name="Password" placeholder="Password" />
                  </div>
                );
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
