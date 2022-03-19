import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import { SignIn } from './components/SignIn/index';
import { SignUp } from './components/SignUp/index';

import { Home } from './pages/Home';
import { Info } from './pages/Info';

function App() {
  return (
    <Router>
      <nav>
        <Link to={'/'}>Home</Link>
        <Link to={'/info'}>Info</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/info"
          element={
            <PrivateRoute>
              <Info />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
